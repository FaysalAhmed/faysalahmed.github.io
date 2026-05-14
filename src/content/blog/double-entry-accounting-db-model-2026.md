---
title: "Double-Entry Accounting in a Relational Database: Key Tables and Constraints"
description: "How to model a double-entry accounting ledger in SQL — core tables, referential integrity, balance enforcement, and common pitfalls."
date: 2026-05-15
tags: ["database", "accounting", "sql", "architecture"]
draft: false
---

Double-entry accounting is the bedrock of every financial system. Every transaction debits one account and credits another, and at all times the sum of all account balances must be zero. Getting this model right in a relational database is tricky — get the constraints wrong and you can silently create or destroy money.

Here is the schema and the logic that makes it safe.

## Core tables

### `accounts`

Every account has a type that determines its normal balance side:

```sql
CREATE TYPE account_type AS ENUM (
  'asset', 'liability', 'equity', 'income', 'expense'
);

CREATE TABLE accounts (
  id          BIGSERIAL PRIMARY KEY,
  code        VARCHAR(20) NOT NULL UNIQUE,
  name        TEXT NOT NULL,
  type        account_type NOT NULL,
  currency    CHAR(3) NOT NULL DEFAULT 'USD',
  normal_side CHAR(1) GENERATED ALWAYS AS (
    CASE type
      WHEN 'asset'   THEN 'D'
      WHEN 'expense' THEN 'D'
      ELSE 'C'
    END
  ) STORED,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

The `normal_side` computed column encodes the accounting rule: assets and expenses increase with debits; liabilities, equity, and income increase with credits.

### `journal_entries`

A journal entry is a single economic event — one invoice, one payment, one adjustment:

```sql
CREATE TABLE journal_entries (
  id          BIGSERIAL PRIMARY KEY,
  description TEXT NOT NULL,
  posted_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

Every journal entry must be balanced before it is posted. The application layer should enforce this, but a check constraint on the posting operation is a good safety net.

### `journal_lines`

Each entry has two or more lines. A simple payment has two; complex allocations may have many:

```sql
CREATE TABLE journal_lines (
  id         BIGSERIAL PRIMARY KEY,
  entry_id   BIGINT NOT NULL REFERENCES journal_entries(id)
               ON DELETE RESTRICT,
  account_id BIGINT NOT NULL REFERENCES accounts(id)
               ON DELETE RESTRICT,
  side       CHAR(1) NOT NULL CHECK (side IN ('D', 'C')),
  amount     NUMERIC(20,4) NOT NULL CHECK (amount > 0),
  currency   CHAR(3) NOT NULL,
  memo       TEXT
);

CREATE INDEX idx_journal_lines_entry_id ON journal_lines(entry_id);
CREATE INDEX idx_journal_lines_account_id ON journal_lines(account_id);
```

Key points:
- `amount` is always positive. Debit or credit is determined by `side`, not by sign.
- `ON DELETE RESTRICT` prevents deleting accounts or entries that have lines — an audit requirement.
- `entry_id` + `side` alone does not enforce balance; that needs a constraint or application check.

## The golden constraint: every entry must balance

The defining invariant: for every entry, `SUM(amount)` where `side = 'D'` must equal `SUM(amount)` where `side = 'C'`.

You can enforce this at the database level with a **deferred assertion**. PostgreSQL does not have `CREATE ASSERTION` yet, but you can use a **deferred trigger**:

```sql
CREATE FUNCTION check_entry_balance() RETURNS TRIGGER AS $$
BEGIN
  IF (
    SELECT COALESCE(SUM(CASE WHEN side = 'D' THEN amount ELSE 0 END), 0)
         - COALESCE(SUM(CASE WHEN side = 'C' THEN amount ELSE 0 END), 0)
    FROM journal_lines
    WHERE entry_id = COALESCE(NEW.entry_id, OLD.entry_id)
  ) != 0 THEN
    RAISE EXCEPTION 'Journal entry % is not balanced', COALESCE(NEW.entry_id, OLD.entry_id);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE CONSTRAINT TRIGGER trg_journal_lines_balanced
  AFTER INSERT OR UPDATE OR DELETE ON journal_lines
  DEFERRABLE INITIALLY DEFERRED
  FOR EACH ROW EXECUTE FUNCTION check_entry_balance();
```

Deferring the check allows inserting all lines of an entry in a single transaction without worrying about intermediate imbalance.

## Account balances: running totals vs materialised

There are two schools of thought:

**1. Compute on the fly** — Simple and always correct, but slow at scale:

```sql
SELECT a.id, a.code, a.name,
       COALESCE(SUM(CASE WHEN jl.side = 'D' THEN jl.amount ELSE 0 END), 0)
     - COALESCE(SUM(CASE WHEN jl.side = 'C' THEN jl.amount ELSE 0 END), 0) AS balance
FROM accounts a
LEFT JOIN journal_lines jl ON jl.account_id = a.id
GROUP BY a.id, a.code, a.name;
```

**2. Materialised balance table** — Fast reads, but needs careful synchronisation:

```sql
CREATE TABLE account_balances (
  account_id BIGINT PRIMARY KEY REFERENCES accounts(id),
  balance    NUMERIC(20,4) NOT NULL DEFAULT 0,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

Update it with a trigger on `journal_lines`. Batch updates are safer than row-by-row to avoid race conditions.

If you need point-in-time balances (e.g., "what was the balance on April 1?"), keep a **running ledger** instead — a materialised view that stores cumulative balances at period boundaries:

```sql
CREATE TABLE running_ledger (
  account_id  BIGINT NOT NULL REFERENCES accounts(id),
  as_of_date  DATE NOT NULL,
  balance     NUMERIC(20,4) NOT NULL,
  PRIMARY KEY (account_id, as_of_date)
);
```

This is the most common approach in production accounting systems.

## Currency and multi-currency

If you support multiple currencies, store the currency on every line and the exchange rate used:

```sql
ALTER TABLE journal_lines ADD COLUMN fx_rate NUMERIC(10,6) NOT NULL DEFAULT 1;
ALTER TABLE journal_lines ADD COLUMN base_amount NUMERIC(20,4) GENERATED ALWAYS AS (amount * fx_rate) STORED;
```

Base-currency balancing is then enforced via `base_amount` instead of `amount`.

## Common pitfalls

- **Using signed amounts** with `+`/`-` instead of a `side` column. This inevitably leads to sign confusion and off-by-one bugs.
- **Omitting currency columns** — you will need them, and adding them later is painful.
- **No audit trail** — never `UPDATE` or `DELETE` posted entries. Use reversing entries instead.
- **Enforcing balance at the application layer only** — a bug in code can create orphan debits. The database should be the last line of defence.
- **Integer vs numeric types** — always use `NUMERIC` for money. Floating-point rounding will destroy your books.

## A note on soft-delete and immutability

Posted journal entries should be **immutable**. If a correction is needed, post a reversing entry:

```sql
-- Reverse a misposted entry
INSERT INTO journal_entries (description) VALUES ('Reversal of entry #123');
INSERT INTO journal_lines (entry_id, account_id, side, amount, currency)
  -- same lines with opposite side
  SELECT new_entry.id, account_id,
         CASE WHEN side = 'D' THEN 'C' ELSE 'D' END,
         amount, currency
  FROM journal_lines
  WHERE entry_id = 123;
```

A `posted_at` timestamp and a `reversed_by` nullable FK on `journal_entries` makes the chain traceable.

## Conclusion

A correct double-entry model is defined by three things: a `side` column (not signed amounts), a balance constraint enforced at the DB level, and immutable journal entries. Everything else — currency handling, materialised balances, point-in-time reporting — builds on that foundation.

Design the schema as if an off-by-one error costs real money, because in production it will.
