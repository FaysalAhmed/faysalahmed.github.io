---
title: Functions
description: Defining functions, parameters and arguments, return values, scope, lambda functions, and docstrings.
slug: chapter-04
chapter: 4
---

## Defining Functions

```python
def greet(name):
    """Return a greeting message."""
    return f"Hello, {name}!"

print(greet("Alice"))   # Hello, Alice!
```

## Parameters and Arguments

### Positional Arguments

```python
def add(a, b):
    return a + b

add(3, 5)   # 8
```

### Default Parameters

```python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

greet("Bob")             # Hello, Bob!
greet("Bob", "Hi")       # Hi, Bob!
```

> **Important:** Default values are evaluated once at definition time. Never use mutable defaults like `[]` or `{}` — use `None` instead.

### Keyword Arguments

```python
def describe_pet(animal, name):
    return f"{name} is a {animal}"

describe_pet(animal="cat", name="Whiskers")
```

### Variable-Length Arguments

```python
def sum_all(*args):
    """Accept any number of positional arguments."""
    return sum(args)

sum_all(1, 2, 3, 4)   # 10

def create_profile(**kwargs):
    """Accept any number of keyword arguments."""
    return kwargs

create_profile(name="Alice", age=30)  # {'name': 'Alice', 'age': 30}
```

## Return Values

A function without a `return` statement returns `None`:

```python
def noop():
    pass

result = noop()        # None
```

Return multiple values as a tuple:

```python
def min_max(numbers):
    return min(numbers), max(numbers)

low, high = min_max([3, 1, 4, 1, 5])
# low=1, high=5
```

## Scope

Variables defined inside a function are **local** to that function:

```python
x = "global"

def my_func():
    x = "local"
    print(x)      # local

my_func()
print(x)          # global
```

Use `global` to modify a global variable (avoid when possible):

```python
counter = 0

def increment():
    global counter
    counter += 1
```

## Lambda Functions

Small anonymous functions created with `lambda`:

```python
square = lambda x: x ** 2
square(5)             # 25

# Often used with map/filter/sorted
nums = [1, 2, 3, 4]
squared = list(map(lambda x: x ** 2, nums))  # [1, 4, 9, 16]
evens = list(filter(lambda x: x % 2 == 0, nums))  # [2, 4]
```

## Docstrings

```python
def calculate_area(radius):
    """Calculate the area of a circle.

    Args:
        radius: The radius of the circle.

    Returns:
        The area as a float.
    """
    import math
    return math.pi * radius ** 2
```

Access docstrings with `help(calculate_area)` or `print(calculate_area.__doc__)`.

---

> **Next:** [Chapter 5 — Data Structures](/fopy/chapter-05/)
