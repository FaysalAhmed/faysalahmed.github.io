---
title: Object-Oriented Programming
description: Classes and objects, instance attributes, methods, inheritance, dunder methods, and properties.
slug: chapter-07
chapter: 7
---

## Classes and Objects

A class is a blueprint for creating objects:

```python
class Dog:
    """A simple Dog class."""

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        return f"{self.name} says Woof!"

# Creating objects
my_dog = Dog("Rex", 3)
print(my_dog.bark())          # Rex says Woof!
print(my_dog.name)            # Rex
```

## The __init__ Method

The constructor is called automatically when an object is created:

```python
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages
        self.current_page = 0

    def read(self, pages):
        self.current_page += pages
        return f"Now on page {self.current_page}"
```

## Instance vs Class Attributes

```python
class Counter:
    count = 0                    # class attribute — shared by all instances

    def __init__(self, name):
        self.name = name         # instance attribute — unique per object
        Counter.count += 1

a = Counter("A")
b = Counter("B")
print(Counter.count)             # 2
```

## Inheritance

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        raise NotImplementedError("Subclass must implement")

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

animals = [Cat("Whiskers"), Dog("Rex")]
for animal in animals:
    print(animal.speak())
```

## Dunder Methods

Special methods that enable Pythonic behavior:

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"Vector({self.x}, {self.y})"

    def __repr__(self):
        return f"Vector({self.x!r}, {self.y!r})"

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

v1 = Vector(1, 2)
v2 = Vector(3, 4)
print(v1 + v2)           # Vector(4, 6)
print(v1 == Vector(1, 2)) # True
```

## Properties

Control access to attributes with getters/setters:

```python
class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius

    @property
    def fahrenheit(self):
        return (self._celsius * 9 / 5) + 32

    @property
    def celsius(self):
        return self._celsius

    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("Below absolute zero")
        self._celsius = value

temp = Temperature(25)
print(temp.fahrenheit)   # 77.0
temp.celsius = 30
```

## Class Methods & Static Methods

```python
class MathUtils:
    @classmethod
    def from_string(cls, text):
        """Alternative constructor."""
        return cls(int(text))

    @staticmethod
    def is_even(n):
        """Utility method — no self or cls needed."""
        return n % 2 == 0
```

---

> **Next:** [Chapter 8 — Modules & Packages](/fopy/chapter-08/)
