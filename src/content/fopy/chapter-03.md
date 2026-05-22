---
title: Control Flow
description: Conditional statements (if/elif/else), for loops, while loops, range(), break, continue, and the match statement.
slug: chapter-03
chapter: 3
---

## Conditional Statements

### if / elif / else

```python
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

print(f"Grade: {grade}")
```

Python uses **indentation** (4 spaces by convention) to define blocks. There are no curly braces or `end` keywords.

### Truthiness

Values that evaluate to `False` in a boolean context:

```python
bool(0)       # False
bool("")      # False
bool([])      # False — empty list
bool(None)    # False
```

Everything else is `True`.

### Ternary Expression

```python
status = "adult" if age >= 18 else "minor"
```

## Loops

### for Loop

```python
# Iterating over a range
for i in range(5):
    print(i)          # 0, 1, 2, 3, 4

# Iterating over a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# With index
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")
```

### range()

```python
range(stop)          # 0 to stop-1
range(start, stop)   # start to stop-1
range(start, stop, step)  # with custom step
```

### while Loop

```python
count = 0
while count < 5:
    print(count)
    count += 1
```

## Loop Control

```python
# break — exits the loop immediately
for n in range(10):
    if n == 5:
        break
    print(n)       # 0, 1, 2, 3, 4

# continue — skips to next iteration
for n in range(5):
    if n == 2:
        continue
    print(n)       # 0, 1, 3, 4

# else on loops — runs only if no break occurred
for n in range(3):
    print(n)
else:
    print("Loop completed normally")
```

## The match Statement (Python 3.10+)

```python
def describe(value):
    match value:
        case 0:
            return "Zero"
        case 1 | 2:
            return "One or Two"
        case int(n) if n > 10:
            return "Large integer"
        case str(s):
            return f"String: {s}"
        case _:
            return "Something else"
```

---

> **Next:** [Chapter 4 — Functions](/fopy/chapter-04/)
