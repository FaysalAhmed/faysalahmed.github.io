---
title: Modules & Packages
description: The import system, standard library highlights, creating your own modules, pip, and virtual environments.
slug: chapter-08
chapter: 8
---

## The Import System

```python
# Import an entire module
import math
print(math.sqrt(16))       # 4.0

# Import specific items
from math import sqrt, pi
print(sqrt(16))            # 4.0

# Import with alias
import numpy as np
import pandas as pd
```

## Standard Library Highlights

Python's standard library is extensive — "batteries included":

```python
import os                  # Operating system interface
import sys                 # System-specific parameters
import json                # JSON parsing and generation
import re                  # Regular expressions
import datetime            # Date and time handling
import collections         # Specialized data structures
import itertools           # Iterator tools
import random              # Random number generation
import statistics          # Statistical functions
import pathlib             # Object-oriented file paths
```

### Examples

```python
import json

data = {"name": "Alice", "scores": [90, 85, 92]}
json_string = json.dumps(data, indent=2)
parsed = json.loads(json_string)

from datetime import datetime, timedelta
today = datetime.now()
yesterday = today - timedelta(days=1)
print(today.strftime("%Y-%m-%d"))     # 2026-05-22

from collections import Counter, defaultdict
word_counts = Counter("hello world hello".split())
# Counter({'hello': 2, 'world': 1})

from pathlib import Path
path = Path("data/config.json")
print(path.exists())        # True/False
print(path.suffix)          # .json
```

## Creating Your Own Module

Any `.py` file is a module:

```python
# mymodule.py
def greet(name):
    return f"Hello, {name}!"

PI = 3.14159
```

```python
# main.py
import mymodule
print(mymodule.greet("Alice"))   # Hello, Alice!
print(mymodule.PI)               # 3.14159
```

## Packages

A package is a directory with an `__init__.py` file:

```
my_package/
  __init__.py
  module_a.py
  module_b.py
```

```python
from my_package import module_a
```

## pip — Package Installer

```bash
pip install requests          # Install a package
pip install --upgrade pip     # Upgrade pip itself
pip list                      # List installed packages
pip freeze > requirements.txt # Save dependencies
pip install -r requirements.txt  # Restore dependencies
```

## Virtual Environments

Isolate project dependencies:

```bash
# Create
python -m venv venv

# Activate (Windows)
venv\Scripts\activate

# Activate (macOS/Linux)
source venv/bin/activate

# Deactivate
deactivate
```

---

> **Next:** [Chapter 9 — Error Handling](/fopy/chapter-09/)
