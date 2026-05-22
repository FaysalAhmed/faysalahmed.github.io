export const chapterQuizzes = {
  'chapter-01': [
    {
      question: "What command do you use to run a Python script from the terminal?",
      options: ["python run script.py", "python script.py", "py-start script.py", "execute script.py"],
      correct: 1,
    },
    {
      question: "Which of the following is a key principle from the Zen of Python?",
      options: ["Fast is better than slow", "Explicit is better than implicit", "Complex is better than simple", "Quiet is better than loud"],
      correct: 1,
    },
    {
      question: "What does the // operator do in Python?",
      options: ["Float division", "Integer (floor) division", "Modulus", "Exponentiation"],
      correct: 1,
    },
  ],
  'chapter-02': [
    {
      question: "Which of the following is NOT a valid Python variable name?",
      options: ["my_var", "_count", "2nd_place", "userName"],
      correct: 2,
    },
    {
      question: "What is the result of bool('hello')?",
      options: ["False", "True", "None", "Error"],
      correct: 1,
    },
    {
      question: "What does the expression 10 % 3 return?",
      options: ["3", "3.33", "1", "0"],
      correct: 2,
    },
  ],
  'chapter-03': [
    {
      question: "What is the correct way to write an if statement in Python?",
      options: ["if x > 5 { }", "if x > 5: ", "if (x > 5) { }", "if x > 5 then"],
      correct: 1,
    },
    {
      question: "What does range(5) generate?",
      options: ["0, 1, 2, 3, 4, 5", "1, 2, 3, 4, 5", "0, 1, 2, 3, 4", "1, 2, 3, 4"],
      correct: 2,
    },
    {
      question: "What does the break statement do inside a loop?",
      options: ["Skips the current iteration", "Restarts the loop", "Exits the loop entirely", "Pauses the loop"],
      correct: 2,
    },
  ],
  'chapter-04': [
    {
      question: "What is the value of x after this code: def add(a, b): return a + b; x = add(3, 4)",
      options: ["34", "7", "None", "(3, 4)"],
      correct: 1,
    },
    {
      question: "What does a function return if it has no return statement?",
      options: ["0", "False", "None", "An empty string"],
      correct: 2,
    },
    {
      question: "What is a lambda function?",
      options: ["A named function with multiple parameters", "An anonymous inline function", "A function that only works with lists", "A function that returns a boolean"],
      correct: 1,
    },
  ],
  'chapter-05': [
    {
      question: "Which data structure would you use to store a collection of unique items?",
      options: ["List", "Tuple", "Set", "Dictionary"],
      correct: 2,
    },
    {
      question: "What does [x**2 for x in range(4)] produce?",
      options: ["[0, 1, 4, 9]", "[1, 4, 9, 16]", "[0, 2, 4, 6]", "[0, 1, 2, 3]"],
      correct: 0,
    },
    {
      question: "What method do you use to safely get a value from a dictionary without raising an error?",
      options: ["dict.pull()", "dict.fetch()", "dict.get()", "dict.find()"],
      correct: 2,
    },
  ],
  'chapter-06': [
    {
      question: "What does the strip() string method do?",
      options: ["Removes all spaces in the string", "Removes leading and trailing whitespace", "Splits the string into a list", "Converts the string to lowercase"],
      correct: 1,
    },
    {
      question: "Which statement ensures a file is properly closed after use?",
      options: ["close", "ensure", "with", "guard"],
      correct: 2,
    },
    {
      question: "Given name='Alice' and age=30, what does f'{name} is {age}' produce?",
      options: ["{name} is {age}", "Alice is 30", "name is age", "Error"],
      correct: 1,
    },
  ],
  'chapter-07': [
    {
      question: "What method is called when a new object is created in Python?",
      options: ["__new__", "__init__", "__create__", "__object__"],
      correct: 1,
    },
    {
      question: "What does the super() function do?",
      options: ["Creates a new class", "Calls a method from the parent class", "Deletes an object", "Increases the object count"],
      correct: 1,
    },
    {
      question: "What is the purpose of the @property decorator?",
      options: ["To mark a method as private", "To define a getter that can be accessed like an attribute", "To create a class method", "To define a static method"],
      correct: 1,
    },
  ],
  'chapter-08': [
    {
      question: "Which command installs a Python package?",
      options: ["python get requests", "pip install requests", "npm install requests", "python add requests"],
      correct: 1,
    },
    {
      question: "What is the purpose of a virtual environment?",
      options: ["To run Python in the browser", "To isolate project dependencies", "To make Python run faster", "To compile Python to machine code"],
      correct: 1,
    },
    {
      question: "Which module is part of Python's standard library?",
      options: ["numpy", "requests", "json", "flask"],
      correct: 2,
    },
  ],
  'chapter-09': [
    {
      question: "Which exception is raised when trying to access a list index that doesn't exist?",
      options: ["ValueError", "KeyError", "IndexError", "TypeError"],
      correct: 2,
    },
    {
      question: "In a try/except/else/finally block, when does the else block run?",
      options: ["Always, regardless of exceptions", "Only if no exception occurs", "Only if an exception occurs", "After the finally block"],
      correct: 1,
    },
    {
      question: "How do you create a custom exception in Python?",
      options: ["Define a function", "Create a class that inherits from Exception", "Use the raise keyword with a string", "Use the error keyword"],
      correct: 1,
    },
  ],
  'chapter-10': [
    {
      question: "Which library is commonly used for data manipulation and analysis in Python?",
      options: ["requests", "pandas", "flask", "matplotlib"],
      correct: 1,
    },
    {
      question: "What does the if __name__ == '__main__': idiom do?",
      options: ["Checks if the module is installed", "Runs code only when the script is executed directly", "Checks the Python version", "Verifies the script has no errors"],
      correct: 1,
    },
    {
      question: "Which function is best to use when iterating over a list with an index?",
      options: ["range()", "enumerate()", "zip()", "map()"],
      correct: 1,
    },
  ],
};

export const midQuiz = [
  {
    question: "What is the correct syntax for a list comprehension?",
    options: ["[x for x in range(10)]", "for x in range(10): x", "list(for x in range(10))", "[for x in range(10): x]"],
    correct: 0,
  },
  {
    question: "Which of the following is a mutable data type?",
    options: ["Tuple", "String", "List", "Integer"],
    correct: 2,
  },
  {
    question: "What does the else clause in a loop do?",
    options: ["Runs when the loop condition is false", "Runs only if no break occurred", "Runs on every iteration", "Runs only if an error occurs"],
    correct: 1,
  },
  {
    question: "What is a docstring used for?",
    options: ["To delete a variable", "To document a function's purpose and usage", "To convert a string to a number", "To define a string variable"],
    correct: 1,
  },
  {
    question: "Which operator checks if two values are equal?",
    options: ["=", "==", "!=", "eq"],
    correct: 1,
  },
];

export const finalQuiz = [
  {
    question: "Which of the following correctly creates a list with values 0, 2, 4, 6, 8?",
    options: ["[x for x in range(10) if x % 2 == 0]", "[x*2 for x in range(5)]", "both a and b", "[x for x in range(0, 10, 2)]"],
    correct: 2,
  },
  {
    question: "What does the enumerate() function return when used in a loop?",
    options: ["Only the index", "Only the value", "Both index and value as a tuple", "A list of all indices"],
    correct: 2,
  },
  {
    question: "Which keyword do you use to define a function?",
    options: ["function", "def", "define", "func"],
    correct: 1,
  },
  {
    question: "What is the output of print(type(3.14))?",
    options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'decimal'>"],
    correct: 1,
  },
  {
    question: "Which statement is true about Python sets?",
    options: ["They maintain insertion order", "They can contain duplicate elements", "They are unordered collections of unique elements", "They are immutable"],
    correct: 2,
  },
  {
    question: "What does the pass keyword do?",
    options: ["Exits the current function", "Serves as a placeholder — does nothing", "Skips the next iteration", "Raises an exception"],
    correct: 1,
  },
  {
    question: "Which method reads a file and returns its entire content as a string?",
    options: ["read()", "readline()", "readlines()", "get()"],
    correct: 0,
  },
  {
    question: "What is the purpose of __init__ in a class?",
    options: ["To delete the object", "To initialize a new instance's attributes", "To define a class method", "To create a property"],
    correct: 1,
  },
  {
    question: "How do you raise a custom exception?",
    options: ["throw Exception()", "raise Exception()", "emit Exception()", "error Exception()"],
    correct: 1,
  },
  {
    question: "Which of the following is NOT a valid Python data type?",
    options: ["list", "array", "tuple", "dict"],
    correct: 1,
  },
  {
    question: "What does the //= operator do?",
    options: ["Divides and assigns the float result", "Divides and assigns the integer result", "Assigns and compares", "Performs exponentiation"],
    correct: 1,
  },
  {
    question: "Which function checks if all characters in a string are digits?",
    options: ["isnum()", "isdigit()", "isalpha()", "isnumber()"],
    correct: 1,
  },
  {
    question: "What does a .pyc file contain?",
    options: ["Python source code", "Compiled Python bytecode", "Configuration settings", "Documentation strings"],
    correct: 1,
  },
  {
    question: "Which standard library module provides support for working with JSON?",
    options: ["xml", "json", "csv", "os"],
    correct: 1,
  },
  {
    question: "What is method overriding?",
    options: ["Defining multiple methods with the same name and different parameters", "Replacing a method in a subclass that was inherited from the parent", "Hiding a method from external access", "Calling a method with too many arguments"],
    correct: 1,
  },
  {
    question: "Which syntax creates an empty dictionary?",
    options: ["[]", "{}", "set()", "dict[]"],
    correct: 1,
  },
  {
    question: "What does the continue statement do?",
    options: ["Exits the loop immediately", "Skips the rest of the current iteration and moves to the next", "Restarts the loop from the beginning", "Pauses execution"],
    correct: 1,
  },
  {
    question: "Which of the following is a valid import statement?",
    options: ["import os", "#include <os>", "using os", "require 'os'"],
    correct: 0,
  },
  {
    question: "What is the output of list('abc')?",
    options: ["['abc']", "['a', 'b', 'c']", "['a,b,c']", "Error"],
    correct: 1,
  },
  {
    question: "Which of the following is the best way to swap two variables x and y in Python?",
    options: ["temp = x; x = y; y = temp", "x, y = y, x", "swap(x, y)", "x = y; y = x"],
    correct: 1,
  },
];

export const quizMeta = {
  'chapter-01': { title: 'Chapter 1 Quiz', description: 'Getting Started with Python', count: 3 },
  'chapter-02': { title: 'Chapter 2 Quiz', description: 'Variables, Data Types & Operators', count: 3 },
  'chapter-03': { title: 'Chapter 3 Quiz', description: 'Control Flow', count: 3 },
  'chapter-04': { title: 'Chapter 4 Quiz', description: 'Functions', count: 3 },
  'chapter-05': { title: 'Chapter 5 Quiz', description: 'Data Structures', count: 3 },
  'chapter-06': { title: 'Chapter 6 Quiz', description: 'Strings & File I/O', count: 3 },
  'chapter-07': { title: 'Chapter 7 Quiz', description: 'Object-Oriented Programming', count: 3 },
  'chapter-08': { title: 'Chapter 8 Quiz', description: 'Modules & Packages', count: 3 },
  'chapter-09': { title: 'Chapter 9 Quiz', description: 'Error Handling', count: 3 },
  'chapter-10': { title: 'Chapter 10 Quiz', description: 'Working with Libraries & Next Steps', count: 3 },
  'mid': { title: 'Mid-Book Quiz', description: 'Covers Chapters 1–5', count: 5 },
  'final': { title: 'Final Quiz', description: 'Covers the Entire Book', count: 20 },
};
