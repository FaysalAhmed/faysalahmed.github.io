---
title: Working with Libraries & Next Steps
description: Popular third-party libraries, project structure, writing idiomatic Python, and resources for continued learning.
slug: chapter-10
chapter: 10
---

## Popular Third-Party Libraries

### Data Science & Analysis

```python
import numpy as np           # Numerical computing
import pandas as pd          # Data manipulation and analysis
import matplotlib.pyplot as plt  # Plotting and visualization
import scipy                 # Scientific computing
```

### Web Development

```python
import requests              # HTTP client — make API calls
# import flask               # Web framework (micro)
# import django              # Web framework (full-featured)
# import fastapi             # async API framework
```

### Common Patterns

```python
import requests

response = requests.get("https://api.github.com")
if response.status_code == 200:
    data = response.json()
    print(f"Found {len(data)} items")
```

## Project Structure

A well-organized Python project:

```
my_project/
  README.md
  requirements.txt
  pyproject.toml
  src/
    my_package/
      __init__.py
      module_a.py
      module_b.py
  tests/
    test_module_a.py
    test_module_b.py
```

### if __name__ == "__main__"

```python
# my_script.py
def main():
    print("Running as a script")

if __name__ == "__main__":
    main()
```

This block runs only when the file is executed directly (not imported).

## Writing Idiomatic Python

### Use enumerate instead of range(len())

```python
# Bad
for i in range(len(fruits)):
    print(fruits[i])

# Good
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")
```

### Use zip to iterate in parallel

```python
names = ["Alice", "Bob", "Charlie"]
scores = [85, 92, 78]
for name, score in zip(names, scores):
    print(f"{name}: {score}")
```

### Use in for membership testing

```python
# Bad
if fruit.find("apple") != -1:

# Good
if "apple" in fruit:
```

### Use context managers

```python
# Bad
f = open("file.txt")
data = f.read()
f.close()

# Good
with open("file.txt") as f:
    data = f.read()
```

### Use pathlib over os.path

```python
# Bad
import os
path = os.path.join("data", "config.json")

# Good
from pathlib import Path
path = Path("data") / "config.json"
```

## Resources for Continued Learning

| Resource | Description |
|----------|-------------|
| [Python Docs](https://docs.python.org/3/) | Official documentation and tutorials |
| [Real Python](https://realpython.com/) | In-depth tutorials and articles |
| [PyPI](https://pypi.org/) | Python Package Index — find any library |
| [Python Crash Course](https://nostarch.com/python-crash-course-3rd-edition) | Book by Eric Matthes |
| [Exercism Python Track](https://exercism.org/tracks/python) | Practice with mentor feedback |

## Final Advice

- **Write code every day** — even 15 minutes of practice compounds.
- **Read other people's code** — GitHub is your library.
- **Build projects** — the fastest way to learn is to build something real.
- **Embrace errors** — every traceback is a learning opportunity.
- **Python's community** is welcoming — ask questions on Stack Overflow, Reddit r/learnpython, or Python Discord.

---

> **Great job finishing the book!** Take the [Final Quiz](/fopy/quiz/final/) to test everything you've learned.
