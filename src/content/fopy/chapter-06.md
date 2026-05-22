---
title: Strings & File I/O
description: String methods, f-strings, string formatting, reading and writing files, the with statement, and working with CSV data.
slug: chapter-06
chapter: 6
---

## String Methods

```python
text = "  Hello, Python World!  "

text.lower()                # "  hello, python world!  "
text.upper()                # "  HELLO, PYTHON WORLD!  "
text.strip()                # "Hello, Python World!"
text.replace("World", "Code")  # "  Hello, Python Code!  "
text.split(",")             # ["  Hello", " Python World!  "]
" ".join(["a", "b", "c"])   # "a b c"
text.startswith("  Hello")  # True
text.endswith("!  ")        # True
text.find("Python")         # 9
text.count("o")             # 2
```

## f-Strings (Python 3.6+)

The modern way to format strings:

```python
name = "Alice"
age = 30
print(f"{name} is {age} years old.")

# Expressions inside f-strings
print(f"Next year {name} will be {age + 1}.")

# Format specifiers
pi = 3.14159265
print(f"Pi to 2 decimals: {pi:.2f}")       # 3.14
print(f"Percentage: {0.85:.0%}")            # 85%
print(f"Left aligned:  {'hello':<10}")     # 'hello     '
print(f"Right aligned: {'hello':>10}")     # '     hello'
```

## String Formatting (Legacy)

```python
# .format() method
"{} is {} years old".format("Alice", 30)
"{name} is {age} years old".format(name="Alice", age=30)

# %-formatting (old style)
"%s is %d years old" % ("Alice", 30)
```

## Reading Files

```python
# Read entire file
with open("data.txt", "r") as file:
    content = file.read()

# Read line by line
with open("data.txt", "r") as file:
    for line in file:
        print(line.strip())

# Read all lines into a list
with open("data.txt", "r") as file:
    lines = file.readlines()
```

## Writing Files

```python
# Write (overwrites)
with open("output.txt", "w") as file:
    file.write("Hello, World!\n")
    file.write("Second line.\n")

# Append
with open("output.txt", "a") as file:
    file.write("Third line.\n")
```

## The with Statement

The `with` statement ensures resources are properly cleaned up:

```python
# Without with — you must close manually
file = open("data.txt", "r")
content = file.read()
file.close()           # easy to forget

# With with — automatically closes
with open("data.txt", "r") as file:
    content = file.read()
```

## Working with CSV

```python
import csv

# Reading
with open("data.csv", "r") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row["name"], row["age"])

# Writing
with open("output.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["name", "age"])
    writer.writerow(["Alice", 30])
    writer.writerow(["Bob", 25])
```

---

> **Next:** [Chapter 7 — Object-Oriented Programming](/fopy/chapter-07/)
