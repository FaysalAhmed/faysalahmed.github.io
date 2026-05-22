---
title: Data Structures
description: Lists, tuples, sets, dictionaries, list comprehensions, and when to use each data structure.
slug: chapter-05
chapter: 5
---

## Lists

Ordered, mutable sequences:

```python
fruits = ["apple", "banana", "cherry"]
fruits.append("date")        # ["apple", "banana", "cherry", "date"]
fruits[0]                    # "apple"
fruits[-1]                   # "date"
fruits[1:3]                  # ["banana", "cherry"]

# Common methods
fruits.insert(1, "blueberry")
fruits.remove("banana")
popped = fruits.pop()        # removes and returns last item
fruits.sort()
len(fruits)
```

## Tuples

Ordered, immutable sequences:

```python
point = (3, 4)
x, y = point                 # unpacking
# point[0] = 5              # Error! Tuples are immutable

# Useful for returning multiple values
def get_location():
    return (40.7128, -74.0060)
```

## Sets

Unordered collections of unique elements:

```python
colors = {"red", "green", "blue"}
colors.add("yellow")
colors.add("red")            # no effect — already present

# Set operations
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
a | b   # union:        {1, 2, 3, 4, 5, 6}
a & b   # intersection: {3, 4}
a - b   # difference:   {1, 2}
```

## Dictionaries

Key-value mappings:

```python
student = {
    "name": "Alice",
    "age": 22,
    "courses": ["Math", "CS"],
}

student["name"]              # "Alice"
student.get("grade", "N/A")  # "N/A" — safe access
student["grade"] = "A"       # adding a new key

# Iteration
for key in student:
    print(key)

for key, value in student.items():
    print(f"{key}: {value}")
```

## List Comprehensions

A concise way to build lists:

```python
squares = [x ** 2 for x in range(10)]
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

evens = [x for x in range(20) if x % 2 == 0]

# Dictionary comprehension
square_map = {x: x ** 2 for x in range(5)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# Set comprehension
unique_lengths = {len(word) for word in ["hi", "hello", "hey"]}
# {2, 3, 5}
```

## Choosing the Right Structure

| Use case | Structure |
|----------|-----------|
| Ordered collection of items | List |
| Fixed collection, shouldn't change | Tuple |
| Unique items, membership tests | Set |
| Key-value lookups | Dictionary |
| Need fast append/pop from both ends | `collections.deque` |

---

> **Next:** [Chapter 6 — Strings & File I/O](/fopy/chapter-06/)
