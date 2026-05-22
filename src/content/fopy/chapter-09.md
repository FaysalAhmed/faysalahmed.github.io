---
title: Error Handling
description: Exceptions, try/except/else/finally, raising exceptions, creating custom exceptions, and debugging techniques.
slug: chapter-09
chapter: 9
---

## Exceptions

Exceptions are errors detected during execution. Common built-in exceptions:

| Exception | Meaning |
|-----------|---------|
| `SyntaxError` | Invalid Python syntax |
| `NameError` | Variable not defined |
| `TypeError` | Operation on wrong type |
| `ValueError` | Value is inappropriate |
| `IndexError` | List index out of range |
| `KeyError` | Dictionary key not found |
| `FileNotFoundError` | File doesn't exist |
| `ZeroDivisionError` | Division by zero |
| `AttributeError` | Attribute doesn't exist on object |

## try / except

```python
try:
    number = int(input("Enter a number: "))
    result = 10 / number
    print(f"Result: {result}")
except ValueError:
    print("That's not a valid number!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
```

## Catching Multiple Exceptions

```python
try:
    value = risky_operation()
except (ValueError, TypeError, RuntimeError) as e:
    print(f"Caught: {e}")
```

## try / except / else / finally

```python
try:
    file = open("data.txt", "r")
    content = file.read()
except FileNotFoundError:
    print("File not found.")
else:
    print(f"Read {len(content)} characters.")
    # else runs only if no exception occurred
finally:
    file.close()
    # finally always runs — even if return/break occurs
```

## Raising Exceptions

```python
def withdraw(balance, amount):
    if amount < 0:
        raise ValueError("Amount cannot be negative")
    if amount > balance:
        raise ValueError("Insufficient funds")
    return balance - amount
```

## Creating Custom Exceptions

```python
class InsufficientFundsError(Exception):
    """Raised when account balance is too low."""
    def __init__(self, balance, amount):
        self.balance = balance
        self.amount = amount
        super().__init__(f"Insufficient funds: ${balance} < ${amount}")

def withdraw(balance, amount):
    if amount > balance:
        raise InsufficientFundsError(balance, amount)
    return balance - amount
```

## The Assert Statement

```python
def divide(a, b):
    assert b != 0, "Division by zero!"
    return a / b
```

Asserts are for debugging. They can be disabled with `-O` flag.

## Debugging Techniques

### Print Debugging

```python
print(f"DEBUG: x={x}, y={y}")  # quick and effective
```

### Using pdb

```python
import pdb

def buggy_function():
    x = 10
    pdb.set_trace()   # execution pauses here — interactive debugger
    y = x / 0
```

### Common Debugger Commands

| Command | Action |
|---------|--------|
| `n` | Next line |
| `s` | Step into function |
| `c` | Continue until next breakpoint |
| `p var` | Print variable value |
| `l` | Show source code context |
| `q` | Quit debugger |

---

> **Next:** [Chapter 10 — Working with Libraries & Next Steps](/fopy/chapter-10/)
