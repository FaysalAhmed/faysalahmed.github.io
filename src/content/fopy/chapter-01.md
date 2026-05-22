---
title: Getting Started with Python
description: Installing Python, running your first script, using the interactive shell, and understanding Python's design philosophy.
slug: chapter-01
chapter: 1
---

## What is Python?

Python is a high-level, interpreted programming language created by Guido van Rossum and first released in 1991. It emphasizes readability and simplicity, making it one of the best languages for beginners and one of the most widely used languages in production.

## Installing Python

Visit [python.org](https://python.org) and download the latest version (3.12+). During installation on Windows, check **"Add Python to PATH"**. On macOS, you can use Homebrew:

```bash
brew install python
```

On Linux, Python is usually pre-installed. Verify with:

```bash
python3 --version
```

## Running Python

### Interactive Shell

Type `python` (or `python3`) in your terminal to enter the REPL (Read-Eval-Print Loop):

```python
>>> print("Hello, World!")
Hello, World!
>>> 2 + 3
5
```

### Script Mode

Save code in a `.py` file and run it:

```python
# hello.py
print("Hello, World!")
```

```bash
python hello.py
```

## Python's Design Philosophy

Python values clarity over cleverness. Key principles from the Zen of Python (`import this`):

| Principle | Meaning |
|-----------|---------|
| **Beautiful is better than ugly** | Write clean, readable code |
| **Explicit is better than implicit** | Don't rely on magic |
| **Simple is better than complex** | Prefer straightforward solutions |
| **Readability counts** | Code is read more often than written |

## Your First Program

```python
# A simple calculator
name = input("What is your name? ")
print(f"Hello, {name}!")
print(f"Your name has {len(name)} characters.")
```

## Comments

Comments are ignored by Python and used to explain code:

```python
# This is a single-line comment

"""
This is a multi-line string,
often used as a docstring comment.
"""
```

## Basic Python as a Calculator

```python
>>> 10 + 5
15
>>> 10 / 3
3.3333333333333335
>>> 10 // 3
3
>>> 10 % 3
1
>>> 2 ** 10
1024
```

---

> **Next:** [Chapter 2 — Variables, Data Types & Operators](/fopy/chapter-02/)
