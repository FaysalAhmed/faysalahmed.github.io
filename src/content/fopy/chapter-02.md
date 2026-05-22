---
title: Variables, Data Types & Operators
description: Variables, naming rules, integers, floats, strings, booleans, arithmetic, comparison, and logical operators.
slug: chapter-02
chapter: 2
---

## Variables

Variables store data in memory. Python is **dynamically typed** — you don't need to declare a type:

```python
name = "Alice"     # str
age = 30           # int
height = 5.8       # float
is_student = True  # bool
```

## Naming Rules

| Rule | Example |
|------|---------|
| Letters, digits, underscores | `my_var`, `var2` |
| Cannot start with a digit | `2var` is invalid |
| Case-sensitive | `Name` and `name` differ |
| Reserved keywords | `if`, `for`, `while`, `class` cannot be used |

**Convention:** Use `snake_case` for variables and functions.

## Data Types

### Numeric Types

```python
a = 42          # int — arbitrary precision
b = 3.14        # float — IEEE 754 double-precision
c = 3 + 4j      # complex — rarely used day-to-day
```

### Strings

```python
single = 'hello'
double = "world"
multi = """Multi-line
string"""
```

### Booleans

```python
is_ready = True
is_done = False
```

### Type Checking

```python
type(42)          # <class 'int'>
isinstance("hi", str)  # True
```

### Type Conversion

```python
int("42")         # 42
str(3.14)         # "3.14"
float("2.5")      # 2.5
bool(1)           # True
bool(0)           # False
bool("")          # False
bool("hello")     # True
```

## Operators

### Arithmetic

| Operator | Meaning | Example |
|----------|---------|---------|
| `+` | Addition | `5 + 3 → 8` |
| `-` | Subtraction | `5 - 3 → 2` |
| `*` | Multiplication | `5 * 3 → 15` |
| `/` | Float division | `5 / 2 → 2.5` |
| `//` | Integer division | `5 // 2 → 2` |
| `%` | Modulus | `5 % 2 → 1` |
| `**` | Exponentiation | `2 ** 3 → 8` |

### Comparison

```python
x == y    # equal
x != y    # not equal
x < y     # less than
x > y     # greater than
x <= y    # less than or equal
x >= y    # greater than or equal
```

### Logical

```python
a and b   # True if both True
a or b    # True if either True
not a     # inverts boolean
```

### Assignment Shorthand

```python
x += 5    # x = x + 5
x -= 3    # x = x - 3
x *= 2    # x = x * 2
```

---

> **Next:** [Chapter 3 — Control Flow](/fopy/chapter-03/)
