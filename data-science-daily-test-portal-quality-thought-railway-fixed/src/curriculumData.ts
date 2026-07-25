import { DayQuiz, MCQQuestion, CodingQuestion, getCourseForDay, getTopicTitleForDay } from "./types.js";

// Full 101-topic MCQ + Coding question bank, sourced from Complete_MCQ_Coding_Question_Bank.md.
// Keyed by exact topic title (matching DAY_TOPIC_MAP values in types.ts) so every day whose
// topic appears here gets these curated questions instead of the AI-generated fallback.
export const QUESTION_BANK: Record<string, { mcqs: MCQQuestion[]; coding: CodingQuestion[] }> = {
  "Python Installation in Local": {
    mcqs: [
      {
        questionText: "Which command checks the installed Python version from the terminal?",
        options: ["`python --version`", "`python install`", "`python setup`", "`py check`"],
        correctOption: 0,
        explanation: "The correct answer is: `python --version`"
      },
      {
        questionText: "Which website is the official source to download Python?",
        options: ["python.org", "pypi.com", "github.com/python", "anaconda.io only"],
        correctOption: 0,
        explanation: "The correct answer is: python.org"
      },
      {
        questionText: "Which command opens the interactive Python shell (REPL)?",
        options: ["`python`", "`pyrun`", "`pyshell`", "`startpy`"],
        correctOption: 0,
        explanation: "The correct answer is: `python`"
      },
      {
        questionText: "`pip` is:",
        options: ["A text editor", "Python's package installer for installing libraries", "An IDE", "A version of Python"],
        correctOption: 1,
        explanation: "The correct answer is: Python's package installer for installing libraries"
      },
      {
        questionText: "Which command upgrades pip to the latest version?",
        options: ["`pip upgrade`", "`python -m pip install --upgrade pip`", "`pip update --all`", "`pip refresh`"],
        correctOption: 1,
        explanation: "The correct answer is: `python -m pip install --upgrade pip`"
      },
      {
        questionText: "Which of these is a popular IDE/editor for writing Python code?",
        options: ["VS Code", "Photoshop", "Excel", "AutoCAD"],
        correctOption: 0,
        explanation: "The correct answer is: VS Code"
      },
      {
        questionText: "On Windows, adding Python to \"PATH\" during installation allows you to:",
        options: ["Run `python` from any directory in Command Prompt", "Install Python faster", "Skip pip installation", "Automatically write code"],
        correctOption: 0,
        explanation: "The correct answer is: Run `python` from any directory in Command Prompt"
      },
      {
        questionText: "Which is true about virtual environments?",
        options: ["They are unrelated to Python", "They isolate project-specific dependencies from the global installation", "They only work on Linux", "They replace the need for pip"],
        correctOption: 1,
        explanation: "The correct answer is: They isolate project-specific dependencies from the global installation"
      },
    ],
    coding: [
      {
        questionText: "Write the terminal commands to verify Python and pip are installed, then create and activate a virtual environment named `venv`.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Write a one-line Python command (run via `python -c`) that prints the currently active Python version.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Python Introduction": {
    mcqs: [
      {
        questionText: "Python is best described as:",
        options: ["A low-level compiled language only", "A high-level, interpreted, general-purpose language", "A markup language", "A database query language"],
        correctOption: 1,
        explanation: "The correct answer is: A high-level, interpreted, general-purpose language"
      },
      {
        questionText: "Who created Python?",
        options: ["Guido van Rossum", "James Gosling", "Dennis Ritchie", "Bjarne Stroustrup"],
        correctOption: 0,
        explanation: "The correct answer is: Guido van Rossum"
      },
      {
        questionText: "Python files typically use which extension?",
        options: ["`.py`", "`.pt`", "`.python`", "`.pyt`"],
        correctOption: 0,
        explanation: "The correct answer is: `.py`"
      },
      {
        questionText: "Python is known for being:",
        options: ["Verbose and hard to read", "Simple, readable, using indentation-based syntax", "Only usable for web design", "Impossible to run on Windows"],
        correctOption: 1,
        explanation: "The correct answer is: Simple, readable, using indentation-based syntax"
      },
      {
        questionText: "Which is NOT a typical Python use case?",
        options: ["Data Science", "Web Development", "Automation scripting", "Low-level device driver firmware"],
        correctOption: 3,
        explanation: "The correct answer is: Low-level device driver firmware"
      },
      {
        questionText: "Python being \"interpreted\" means:",
        options: ["Code is fully compiled before any execution, with no runtime step", "Code is executed line-by-line by an interpreter at runtime", "It cannot run without a browser", "It only works with the JVM"],
        correctOption: 1,
        explanation: "The correct answer is: Code is executed line-by-line by an interpreter at runtime"
      },
      {
        questionText: "Indentation in Python is:",
        options: ["Optional and purely stylistic", "Significant and defines code blocks", "Ignored by the interpreter", "Only used in comments"],
        correctOption: 1,
        explanation: "The correct answer is: Significant and defines code blocks"
      },
      {
        questionText: "Python's typing system is:",
        options: ["Statically typed only", "Dynamically typed", "Not typed at all", "Only supports integers"],
        correctOption: 1,
        explanation: "The correct answer is: Dynamically typed"
      },
    ],
    coding: [
      {
        questionText: "Write a program that prints \"Welcome to Python Programming\" and displays the Python version using the `sys` module.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Write a program that takes the user's name as input and prints a personalized greeting.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Python Keywords": {
    mcqs: [
      {
        questionText: "Which of these is a Python keyword?",
        options: ["`value`", "`def`", "`print_data`", "`myVar`"],
        correctOption: 1,
        explanation: "The correct answer is: `def`"
      },
      {
        questionText: "Which module lists all Python keywords?",
        options: ["`keyword.kwlist`", "`list_keywords()`", "`sys.keywords`", "`python.keywords()`"],
        correctOption: 0,
        explanation: "The correct answer is: `keyword.kwlist`"
      },
      {
        questionText: "Which of these IS a reserved keyword?",
        options: ["`None`", "`none`", "`Null`", "`nil`"],
        correctOption: 0,
        explanation: "The correct answer is: `None`"
      },
      {
        questionText: "Which keyword creates a conditional statement?",
        options: ["`if`", "`cond`", "`check`", "`when`"],
        correctOption: 0,
        explanation: "The correct answer is: `if`"
      },
      {
        questionText: "Which keyword defines a loop that repeats while a condition is true?",
        options: ["`repeat`", "`while`", "`loopif`", "`until`"],
        correctOption: 1,
        explanation: "The correct answer is: `while`"
      },
      {
        questionText: "Which keyword is used for exception handling?",
        options: ["`except`", "`catch`", "`rescue`", "`trap`"],
        correctOption: 0,
        explanation: "The correct answer is: `except`"
      },
      {
        questionText: "Can a keyword be used as a variable name?",
        options: ["Yes, always", "No, keywords are reserved and cannot be identifiers", "Only in Python 2", "Only inside functions"],
        correctOption: 1,
        explanation: "The correct answer is: No, keywords are reserved and cannot be identifiers"
      },
      {
        questionText: "Which keyword imports a module?",
        options: ["`include`", "`import`", "`require`", "`using`"],
        correctOption: 1,
        explanation: "The correct answer is: `import`"
      },
    ],
    coding: [
      {
        questionText: "Write a program that imports the `keyword` module and prints the total number of keywords along with the full list.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["import", "with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Write a program that checks whether a user-input string is a Python keyword, using `keyword.iskeyword()`.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Python Hello World Program": {
    mcqs: [
      {
        questionText: "Correct syntax to print \"Hello World\" in Python 3:",
        options: ["`echo(\"Hello World\")`", "`print(\"Hello World\")`", "`printf(\"Hello World\")`", "`System.out.print(\"Hello World\")`"],
        correctOption: 1,
        explanation: "The correct answer is: `print(\"Hello World\")`"
      },
      {
        questionText: "What does `print('Hello', 'World')` output by default?",
        options: ["HelloWorld", "Hello World", "Hello,World", "An error"],
        correctOption: 1,
        explanation: "The correct answer is: Hello World"
      },
      {
        questionText: "Which parameter of `print()` changes the separator between arguments?",
        options: ["`sep`", "`delimiter`", "`split`", "`join`"],
        correctOption: 0,
        explanation: "The correct answer is: `sep`"
      },
      {
        questionText: "Which parameter changes what's printed at the end (default newline)?",
        options: ["`end`", "`terminator`", "`final`", "`close`"],
        correctOption: 0,
        explanation: "The correct answer is: `end`"
      },
      {
        questionText: "Output of `print(\"Hello\" + \"World\")`?",
        options: ["Hello World", "HelloWorld", "Hello+World", "An error"],
        correctOption: 1,
        explanation: "The correct answer is: HelloWorld"
      },
      {
        questionText: "Comments in Python start with:",
        options: ["`//`", "`#`", "`/*`", "`--`"],
        correctOption: 1,
        explanation: "The correct answer is: `#`"
      },
      {
        questionText: "Which correctly writes a multi-line string/comment?",
        options: ["Triple quotes `''' ... '''`", "Double slash", "Angle brackets `<!-- -->`", "Curly braces"],
        correctOption: 0,
        explanation: "The correct answer is: Triple quotes `''' ... '''`"
      },
      {
        questionText: "What happens with `print \"Hello\"` (missing parentheses) in Python 3?",
        options: ["It runs fine", "It raises a SyntaxError", "It prints nothing", "It only works in loops"],
        correctOption: 1,
        explanation: "The correct answer is: It raises a SyntaxError"
      },
    ],
    coding: [
      {
        questionText: "Write a \"Hello World\" program that also prints your name and today's task number using a single `print()` with `\\n`.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Write a program using `print()`'s `sep` and `end` parameters to print \"Python-is-Fun\" from \"Python\", \"is\", \"Fun\" joined by hyphens, ending with \"!!\".",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Python Naming Conventions": {
    mcqs: [
      {
        questionText: "Which is a valid Python variable name?",
        options: ["`2value`", "`my_value`", "`my-value`", "`class`"],
        correctOption: 1,
        explanation: "The correct answer is: `my_value`"
      },
      {
        questionText: "Python variable names are case-sensitive, meaning:",
        options: ["`age` and `Age` are the same", "`age` and `Age` are different variables", "Case doesn't matter", "Only uppercase is allowed"],
        correctOption: 1,
        explanation: "The correct answer is: `age` and `Age` are different variables"
      },
      {
        questionText: "Recommended naming for functions/variables (PEP 8):",
        options: ["camelCase", "snake_case", "PascalCase", "kebab-case"],
        correctOption: 1,
        explanation: "The correct answer is: snake_case"
      },
      {
        questionText: "Recommended naming for class names (PEP 8):",
        options: ["snake_case", "PascalCase (CapWords)", "ALL_CAPS", "kebab-case"],
        correctOption: 1,
        explanation: "The correct answer is: PascalCase (CapWords)"
      },
      {
        questionText: "Constants are conventionally named using:",
        options: ["lowercase letters", "ALL_CAPS with underscores", "camelCase", "leading underscore only"],
        correctOption: 1,
        explanation: "The correct answer is: ALL_CAPS with underscores"
      },
      {
        questionText: "Which variable name is invalid?",
        options: ["`_temp`", "`temp1`", "`1temp`", "`temp_1`"],
        correctOption: 2,
        explanation: "The correct answer is: `1temp`"
      },
      {
        questionText: "A name starting with a single underscore (e.g., `_value`) conventionally indicates:",
        options: ["A public API", "An internal/\"private\" use convention (not enforced)", "A syntax error", "A constant"],
        correctOption: 1,
        explanation: "The correct answer is: An internal/\"private\" use convention (not enforced)"
      },
      {
        questionText: "Which is NOT allowed in a Python identifier?",
        options: ["Underscore", "Digits (not first)", "Spaces", "Letters"],
        correctOption: 2,
        explanation: "The correct answer is: Spaces"
      },
    ],
    coding: [
      {
        questionText: "Write code declaring variables using proper PEP 8 conventions for a student's name, total marks, and a constant for max possible marks.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Write a program with a PascalCase class (e.g., `StudentRecord`) whose `__init__` sets snake_case attributes, then print them.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["class", "with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Python Variables": {
    mcqs: [
      {
        questionText: "In Python, a variable is created:",
        options: ["By declaring its type before use", "Simply by assigning a value to a name", "Only inside a class", "Using the `var` keyword"],
        correctOption: 1,
        explanation: "The correct answer is: Simply by assigning a value to a name"
      },
      {
        questionText: "Output of:\n```\nx = 5\nx = \"five\"\nprint(x)\n```",
        options: ["5", "five", "An error", "None"],
        correctOption: 1,
        explanation: "The correct answer is: five"
      },
      {
        questionText: "Which demonstrates multiple assignment in one line?",
        options: ["`a, b, c = 1, 2, 3`", "`a = 1; b = 2; c = 3` only", "`a == 1, b == 2`", "`assign a, b, c = 1, 2, 3`"],
        correctOption: 0,
        explanation: "The correct answer is: `a, b, c = 1, 2, 3`"
      },
      {
        questionText: "Global variables are:",
        options: ["Accessible only within their defining function", "Accessible throughout the module unless shadowed", "Never accessible inside functions", "Only used in classes"],
        correctOption: 1,
        explanation: "The correct answer is: Accessible throughout the module unless shadowed"
      },
      {
        questionText: "To modify a global variable inside a function you must use:",
        options: ["`global`", "`public`", "`extern`", "`static`"],
        correctOption: 0,
        explanation: "The correct answer is: `global`"
      },
      {
        questionText: "Output of:\n```\nx = 10\ndef foo():\n    x = 20\n    print(x)\nfoo()\nprint(x)\n```",
        options: ["20 then 20", "20 then 10", "10 then 10", "10 then 20"],
        correctOption: 1,
        explanation: "The correct answer is: 20 then 10"
      },
      {
        questionText: "Which is true about Python variables?",
        options: ["Must be declared with a specific type", "Are references to objects with dynamically determined type", "Cannot be reassigned", "Must start uppercase"],
        correctOption: 1,
        explanation: "The correct answer is: Are references to objects with dynamically determined type"
      },
      {
        questionText: "What is variable \"unpacking\"?",
        options: ["Deleting a variable", "Assigning elements of an iterable to multiple variables at once", "Converting to a string", "Importing variables from a file"],
        correctOption: 1,
        explanation: "The correct answer is: Assigning elements of an iterable to multiple variables at once"
      },
    ],
    coding: [
      {
        questionText: "Write a program that swaps two variables without a third/temporary variable.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Write a program demonstrating scope: a global variable modified inside a function using `global`, printing its value before and after.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Python Data Types": {
    mcqs: [
      {
        questionText: "Which is an immutable data type?",
        options: ["list", "dict", "tuple", "set"],
        correctOption: 2,
        explanation: "The correct answer is: tuple"
      },
      {
        questionText: "Data type of `3.14`?",
        options: ["int", "float", "complex", "decimal"],
        correctOption: 1,
        explanation: "The correct answer is: float"
      },
      {
        questionText: "Which function checks a variable's data type?",
        options: ["`typeof()`", "`type()`", "`datatype()`", "`kind()`"],
        correctOption: 1,
        explanation: "The correct answer is: `type()`"
      },
      {
        questionText: "Which is a mutable data type?",
        options: ["tuple", "str", "list", "int"],
        correctOption: 2,
        explanation: "The correct answer is: list"
      },
      {
        questionText: "Result of `type(True)`?",
        options: ["`<class 'int'>`", "`<class 'bool'>`", "`<class 'str'>`", "`<class 'float'>`"],
        correctOption: 1,
        explanation: "The correct answer is: `<class 'bool'>`"
      },
      {
        questionText: "Which stores unique, unordered items?",
        options: ["list", "tuple", "set", "str"],
        correctOption: 2,
        explanation: "The correct answer is: set"
      },
      {
        questionText: "Output of `type(5 + 2.0)`?",
        options: ["int", "float", "complex", "error"],
        correctOption: 1,
        explanation: "The correct answer is: float"
      },
      {
        questionText: "Which correctly converts `\"123\"` to an integer?",
        options: ["`int(\"123\")`", "`str(123)`", "`float(\"123\")` only", "`\"123\".toInt()`"],
        correctOption: 0,
        explanation: "The correct answer is: `int(\"123\")`"
      },
    ],
    coding: [
      {
        questionText: "Write a program that takes a value, determines its type with `type()`, and prints an appropriate message for int, float, or string.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Write a program demonstrating type conversion: string→int, add 10, convert back to string and concatenate.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Python Operators": {
    mcqs: [
      {
        questionText: "Result of `17 % 5`?",
        options: ["3", "2", "3.4", "12"],
        correctOption: 1,
        explanation: "The correct answer is: 2"
      },
      {
        questionText: "What does `//` do?",
        options: ["Comment code", "Floor (integer) division", "Exponentiation", "Modulus"],
        correctOption: 1,
        explanation: "The correct answer is: Floor (integer) division"
      },
      {
        questionText: "Output of `2 ** 3`?",
        options: ["6", "8", "9", "5"],
        correctOption: 1,
        explanation: "The correct answer is: 8"
      },
      {
        questionText: "Logical AND operator in Python:",
        options: ["`&&`", "`and`", "`&` only", "`AND`"],
        correctOption: 1,
        explanation: "The correct answer is: `and`"
      },
      {
        questionText: "What does `is` check?",
        options: ["Value equality", "Whether two variables reference the same object (identity)", "Type conversion", "String concatenation"],
        correctOption: 1,
        explanation: "The correct answer is: Whether two variables reference the same object (identity)"
      },
      {
        questionText: "Output of `5 == 5.0`?",
        options: ["False", "True", "Error", "None"],
        correctOption: 1,
        explanation: "The correct answer is: True"
      },
      {
        questionText: "Which has the highest precedence?",
        options: ["`+`", "`**`", "`==`", "`and`"],
        correctOption: 1,
        explanation: "The correct answer is: `**`"
      },
      {
        questionText: "What does `not True` evaluate to?",
        options: ["True", "False", "None", "Error"],
        correctOption: 1,
        explanation: "The correct answer is: False"
      },
    ],
    coding: [
      {
        questionText: "Write a program that takes two numbers and prints results of `+ - * / // % **`.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Write a program to check leap years using logical/comparison operators.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Python Input & Output": {
    mcqs: [
      {
        questionText: "Which function reads user input in Python 3?",
        options: ["`input()`", "`scan()`", "`read()`", "`get_input()`"],
        correctOption: 0,
        explanation: "The correct answer is: `input()`"
      },
      {
        questionText: "Return type of `input()`?",
        options: ["int", "str (always)", "float", "Depends on typed value"],
        correctOption: 1,
        explanation: "The correct answer is: str (always)"
      },
      {
        questionText: "Which correctly reads an integer from user input?",
        options: ["`x = int(input())`", "`x = input(int())`", "`x = integer(input())`", "`x = input.int()`"],
        correctOption: 0,
        explanation: "The correct answer is: `x = int(input())`"
      },
      {
        questionText: "`print(f\"My age is {age}\")` demonstrates:",
        options: ["String concatenation with `+`", "An f-string", "A syntax error", "A list comprehension"],
        correctOption: 1,
        explanation: "The correct answer is: An f-string"
      },
      {
        questionText: "Which method formats a string using `{}` placeholders?",
        options: ["`str.format()`", "`str.printf()`", "`str.template()`", "`str.insert()`"],
        correctOption: 0,
        explanation: "The correct answer is: `str.format()`"
      },
      {
        questionText: "`print(\"A\", \"B\", \"C\", sep=\"-\")` outputs:",
        options: ["A B C", "A-B-C", "ABC", "A_B_C"],
        correctOption: 1,
        explanation: "The correct answer is: A-B-C"
      },
      {
        questionText: "Correct way to read two space-separated integers on one line:",
        options: ["`a, b = map(int, input().split())`", "`a, b = input().split(int)`", "`a, b = int(input().split())`", "`a, b = split(input())`"],
        correctOption: 0,
        explanation: "The correct answer is: `a, b = map(int, input().split())`"
      },
      {
        questionText: "Purpose of the `end` parameter in `print()`:",
        options: ["Specifies what's printed instead of a default newline", "Ends the program", "Formats numbers", "Stops input"],
        correctOption: 0,
        explanation: "The correct answer is: Specifies what's printed instead of a default newline"
      },
    ],
    coding: [
      {
        questionText: "Write a program that takes name and age as input, printing a formatted sentence via f-string.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Write a program reading two integers from one line (space-separated) and printing their sum and product.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Python Flow Control": {
    mcqs: [
      {
        questionText: "Which statement skips the current loop iteration?",
        options: ["`break`", "`continue`", "`pass`", "`skip`"],
        correctOption: 1,
        explanation: "The correct answer is: `continue`"
      },
      {
        questionText: "Which statement terminates the nearest enclosing loop?",
        options: ["`continue`", "`break`", "`return`", "`exit`"],
        correctOption: 1,
        explanation: "The correct answer is: `break`"
      },
      {
        questionText: "What does `pass` do?",
        options: ["Skips a loop iteration", "Acts as a no-op placeholder", "Terminates the program", "Raises an exception"],
        correctOption: 1,
        explanation: "The correct answer is: Acts as a no-op placeholder"
      },
      {
        questionText: "Which loop is guaranteed to execute at least once by default in Python?",
        options: ["`for`", "`while`", "None — Python has no built-in do-while", "`if`"],
        correctOption: 2,
        explanation: "The correct answer is: None — Python has no built-in do-while"
      },
      {
        questionText: "Output of:\n```\nfor i in range(3):\n    if i == 1:\n        continue\n    print(i)\n```",
        options: ["0 1 2", "0 2", "1", "0 1"],
        correctOption: 1,
        explanation: "The correct answer is: 0 2"
      },
      {
        questionText: "What does `range(2, 10, 2)` generate?",
        options: ["2,4,6,8", "2,3,...,10", "2,10", "0,2,4,6,8,10"],
        correctOption: 0,
        explanation: "The correct answer is: 2,4,6,8"
      },
      {
        questionText: "Multi-branch conditional construct in Python:",
        options: ["switch-case", "if-elif-else", "case-when", "select-case"],
        correctOption: 1,
        explanation: "The correct answer is: if-elif-else"
      },
      {
        questionText: "What happens if a `while` condition never becomes False?",
        options: ["Runs once and stops", "Infinite loop", "SyntaxError immediately", "Auto-stops after 10 iterations"],
        correctOption: 1,
        explanation: "The correct answer is: Infinite loop"
      },
    ],
    coding: [
      {
        questionText: "Write a program to print all primes between 1 and 50 using loops/conditions/break.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Write a number-guessing game using a `while` loop with \"too high\"/\"too low\" hints.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["while", "with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Python String": {
    mcqs: [
      {
        questionText: "Which creates a string?",
        options: ["`'Hello'`", "`\"Hello\"`", "`\"\"\"Hello\"\"\"`", "All of the above"],
        correctOption: 3,
        explanation: "The correct answer is: All of the above"
      },
      {
        questionText: "Output of `\"Hello\"[1]`?",
        options: ["H", "e", "He", "Error"],
        correctOption: 1,
        explanation: "The correct answer is: e"
      },
      {
        questionText: "Which converts a string to uppercase?",
        options: ["`str.upper()`", "`str.toUpper()`", "`str.capitalize_all()`", "`str.UPPER()`"],
        correctOption: 0,
        explanation: "The correct answer is: `str.upper()`"
      },
      {
        questionText: "`\"Hello World\"[0:5]` returns:",
        options: ["Hello", "World", "Hello", "o Worl"],
        correctOption: 0,
        explanation: "The correct answer is: Hello"
      },
      {
        questionText: "Which splits a string based on a delimiter?",
        options: ["`str.split()`", "`str.divide()`", "`str.break()`", "`str.chunk()`"],
        correctOption: 0,
        explanation: "The correct answer is: `str.split()`"
      },
      {
        questionText: "Are strings mutable or immutable?",
        options: ["Mutable", "Immutable", "Depends on version", "Only mutable in functions"],
        correctOption: 1,
        explanation: "The correct answer is: Immutable"
      },
      {
        questionText: "`\"  Hello  \".strip()` returns:",
        options: ["`\"  Hello  \"`", "`\"Hello\"`", "`\" Hello\"`", "`\"Hello  \"`"],
        correctOption: 1,
        explanation: "The correct answer is: `\"Hello\"`"
      },
      {
        questionText: "Which method checks if a string is purely alphabetic?",
        options: ["`str.isalpha()`", "`str.isalnum()`", "`str.isdigit()`", "`str.isupper()`"],
        correctOption: 0,
        explanation: "The correct answer is: `str.isalpha()`"
      },
    ],
    coding: [
      {
        questionText: "Write a program to reverse a string using a loop (no slicing shortcuts or `reversed()`).",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Write a program counting vowels, consonants, digits, and special characters in a string.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Python Functions Part 1": {
    mcqs: [
      {
        questionText: "Which keyword defines a function?",
        options: ["`function`", "`def`", "`func`", "`define`"],
        correctOption: 1,
        explanation: "The correct answer is: `def`"
      },
      {
        questionText: "Purpose of `return`:",
        options: ["Print a value", "Send a value back to the caller and exit the function", "Declare a variable", "Start a loop"],
        correctOption: 1,
        explanation: "The correct answer is: Send a value back to the caller and exit the function"
      },
      {
        questionText: "What happens if a function has no explicit `return`?",
        options: ["It raises an error", "It returns `None`", "It returns 0", "It cannot be called"],
        correctOption: 1,
        explanation: "The correct answer is: It returns `None`"
      },
      {
        questionText: "Which correctly defines a default parameter?",
        options: ["`def greet(name=\"Guest\"):`", "`def greet(name = default \"Guest\"):`", "`def greet(name): default=\"Guest\"`", "`def greet(default name=\"Guest\"):`"],
        correctOption: 0,
        explanation: "The correct answer is: `def greet(name=\"Guest\"):`"
      },
      {
        questionText: "Arguments passed by position are called:",
        options: ["Keyword arguments", "Positional arguments", "Default arguments", "Variable arguments"],
        correctOption: 1,
        explanation: "The correct answer is: Positional arguments"
      },
      {
        questionText: "`*args` allows a function to accept:",
        options: ["A fixed number of arguments only", "A variable number of positional arguments", "Only keyword arguments", "No arguments"],
        correctOption: 1,
        explanation: "The correct answer is: A variable number of positional arguments"
      },
      {
        questionText: "A \"docstring\" is:",
        options: ["A mandatory type declaration", "A documentation string right after the function definition", "A special comment char", "A return type annotation"],
        correctOption: 1,
        explanation: "The correct answer is: A documentation string right after the function definition"
      },
      {
        questionText: "Local variables inside a function:",
        options: ["Are accessible outside the function", "Exist only within that function's scope", "Overwrite globals automatically", "Must use `global`"],
        correctOption: 1,
        explanation: "The correct answer is: Exist only within that function's scope"
      },
    ],
    coding: [
      {
        questionText: "Write `calculate_area(shape, **kwargs)` computing the area of a circle, rectangle, or triangle based on `shape` and matching keyword args.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Write `factorial(n)` returning the factorial of a non-negative integer using a loop.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["return", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Python Functions Part 2": {
    mcqs: [
      {
        questionText: "Recursion is:",
        options: ["A function calling an unrelated function", "A function calling itself to solve a smaller instance of the problem", "A loop inside a function", "A function with no parameters"],
        correctOption: 1,
        explanation: "The correct answer is: A function calling itself to solve a smaller instance of the problem"
      },
      {
        questionText: "A lambda function is:",
        options: ["A multi-line named function", "A small anonymous function defined with `lambda`", "A function that can't take arguments", "A built-in module"],
        correctOption: 1,
        explanation: "The correct answer is: A small anonymous function defined with `lambda`"
      },
      {
        questionText: "Which correctly defines a lambda squaring a number?",
        options: ["`lambda x: x**2`", "`lambda(x) = x**2`", "`def lambda x: x**2`", "`x => x**2`"],
        correctOption: 0,
        explanation: "The correct answer is: `lambda x: x**2`"
      },
      {
        questionText: "`**kwargs` allows a function to accept:",
        options: ["Variable positional args", "A variable number of keyword arguments as a dict", "Only one argument", "No arguments"],
        correctOption: 1,
        explanation: "The correct answer is: A variable number of keyword arguments as a dict"
      },
      {
        questionText: "Which applies a function to every item of an iterable?",
        options: ["`map()`", "`filter()`", "`reduce()`", "`apply()`"],
        correctOption: 0,
        explanation: "The correct answer is: `map()`"
      },
      {
        questionText: "`filter(lambda x: x % 2 == 0, [1,2,3,4])` returns (as a list):",
        options: ["[1,3]", "[2,4]", "[1,2,3,4]", "[]"],
        correctOption: 1,
        explanation: "The correct answer is: [2,4]"
      },
      {
        questionText: "A closure is:",
        options: ["A function that closes a file", "An inner function retaining access to its enclosing scope's variables", "A syntax error type", "A way to close a loop"],
        correctOption: 1,
        explanation: "The correct answer is: An inner function retaining access to its enclosing scope's variables"
      },
      {
        questionText: "Purpose of type hints like `def add(a: int, b: int) -> int:`:",
        options: ["Enforce strict typing at runtime", "Optional documentation checked by external tools like mypy, not enforced by Python", "Required for all functions", "Convert Python into a compiled language"],
        correctOption: 1,
        explanation: "The correct answer is: Optional documentation checked by external tools like mypy, not enforced by Python"
      },
    ],
    coding: [
      {
        questionText: "Write a recursive `fibonacci(n)` function.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Write a program combining `map()`, `filter()`, and `lambda` to filter even numbers from a list, then square the odd ones.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["lambda", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Python Module": {
    mcqs: [
      {
        questionText: "A module is:",
        options: ["A single function", "A reusable file of Python code (functions/classes/vars)", "A keyword", "A type of loop"],
        correctOption: 1,
        explanation: "The correct answer is: A reusable file of Python code (functions/classes/vars)"
      },
      {
        questionText: "Which statement imports the `math` module?",
        options: ["`import math`", "`include math`", "`using math`", "`require math`"],
        correctOption: 0,
        explanation: "The correct answer is: `import math`"
      },
      {
        questionText: "How to import only `sqrt` from `math`?",
        options: ["`from math import sqrt`", "`import math.sqrt`", "`include sqrt from math`", "`math.import(sqrt)`"],
        correctOption: 0,
        explanation: "The correct answer is: `from math import sqrt`"
      },
      {
        questionText: "What does `import math as m` do?",
        options: ["Causes an error", "Imports math with alias `m`", "Imports only part of math", "Deletes math"],
        correctOption: 1,
        explanation: "The correct answer is: Imports math with alias `m`"
      },
      {
        questionText: "Which variable holds a module's name when run directly?",
        options: ["`__module__`", "`__name__`", "`__main__` only", "`__file__`"],
        correctOption: 1,
        explanation: "The correct answer is: `__name__`"
      },
      {
        questionText: "Where does Python search for modules?",
        options: ["Only the current directory", "`sys.path` (current dir, installed packages, stdlib)", "Only stdlib", "Nowhere by default"],
        correctOption: 1,
        explanation: "The correct answer is: `sys.path` (current dir, installed packages, stdlib)"
      },
      {
        questionText: "Difference between a module and a script:",
        options: ["Unrelated concepts", "Any .py file can act as both", "A module can't contain functions", "A script can't contain classes"],
        correctOption: 1,
        explanation: "The correct answer is: Any .py file can act as both"
      },
      {
        questionText: "Which function lists names defined in a module?",
        options: ["`dir(module_name)`", "`list(module_name)`", "`show(module_name)`", "`names(module_name)`"],
        correctOption: 0,
        explanation: "The correct answer is: `dir(module_name)`"
      },
    ],
    coding: [
      {
        questionText: "Create a module `mymath.py` with `add()`/`subtract()`, then import and use it from another script.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["import", "with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Write a script demonstrating the `if __name__ == \"__main__\":` idiom.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Python Package": {
    mcqs: [
      {
        questionText: "A Python package is:",
        options: ["A single .py file", "A directory of related modules with `__init__.py`", "A variable", "A built-in type"],
        correctOption: 1,
        explanation: "The correct answer is: A directory of related modules with `__init__.py`"
      },
      {
        questionText: "Purpose of `__init__.py`:",
        options: ["Required to run any script", "Marks a directory as a package, controls exposed imports", "Stores package data", "Compiles to bytecode"],
        correctOption: 1,
        explanation: "The correct answer is: Marks a directory as a package, controls exposed imports"
      },
      {
        questionText: "Tool commonly used to install third-party packages:",
        options: ["pip", "npm", "apt only", "brew only"],
        correctOption: 0,
        explanation: "The correct answer is: pip"
      },
      {
        questionText: "File listing dependencies for `pip install -r`:",
        options: ["`requirements.txt`", "`package.json`", "`dependencies.yaml`", "`setup.cfg` only"],
        correctOption: 0,
        explanation: "The correct answer is: `requirements.txt`"
      },
      {
        questionText: "What does `pip install package_name==1.2.3` do?",
        options: ["Installs latest regardless", "Installs the specific version 1.2.3", "Uninstalls the package", "Upgrades pip"],
        correctOption: 1,
        explanation: "The correct answer is: Installs the specific version 1.2.3"
      },
      {
        questionText: "Where are third-party packages typically hosted?",
        options: ["PyPI", "GitHub only", "DockerHub", "npm registry"],
        correctOption: 0,
        explanation: "The correct answer is: PyPI"
      },
      {
        questionText: "What does `pip freeze` do?",
        options: ["Deletes installed packages", "Lists installed packages with exact versions", "Freezes the interpreter", "Downgrades Python"],
        correctOption: 1,
        explanation: "The correct answer is: Lists installed packages with exact versions"
      },
      {
        questionText: "How do you import a `utils` module from a `mypackage` package?",
        options: ["`from mypackage import utils`", "`include mypackage.utils`", "`import utils from mypackage`", "`package mypackage.utils`"],
        correctOption: 0,
        explanation: "The correct answer is: `from mypackage import utils`"
      },
    ],
    coding: [
      {
        questionText: "Create a package `shapes` with `circle.py` and `square.py` area functions and an `__init__.py`; write a script using both.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Write a script that reads a sample `requirements.txt` and prints each listed package name (simulate parsing, don't actually pip install).",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "List Data Structure": {
    mcqs: [
      {
        questionText: "Which creates an empty list?",
        options: ["`list = ()`", "`list = []`", "`list = {}`", "`list = \"\"`"],
        correctOption: 1,
        explanation: "The correct answer is: `list = []`"
      },
      {
        questionText: "Output of `[1,2,3] + [4,5]`?",
        options: ["[1,2,3,4,5]", "[5,7,8]", "Error", "[1,2,3,[4,5]]"],
        correctOption: 0,
        explanation: "The correct answer is: [1,2,3,4,5]"
      },
      {
        questionText: "Which adds a single element to the end of a list?",
        options: ["`list.append()`", "`list.extend()`", "`list.insert(0, x)`", "`list.add()`"],
        correctOption: 0,
        explanation: "The correct answer is: `list.append()`"
      },
      {
        questionText: "Difference between `append()` and `extend()`:",
        options: ["Identical behavior", "`append()` adds one element (even a list, as one item); `extend()` adds each element individually", "`extend()` only works on strings", "`append()` removes elements"],
        correctOption: 1,
        explanation: "The correct answer is: `append()` adds one element (even a list, as one item); `extend()` adds each element individually"
      },
      {
        questionText: "What does `list.pop()` do with no arguments?",
        options: ["Removes/returns the first element", "Removes/returns the last element", "Removes all elements", "Adds an element"],
        correctOption: 1,
        explanation: "The correct answer is: Removes/returns the last element"
      },
      {
        questionText: "Output of `result = [3,1,2].sort()` then `print(result)`?",
        options: ["[1,2,3]", "None (sort() returns None, modifies in place)", "[3,2,1]", "Error"],
        correctOption: 1,
        explanation: "The correct answer is: None (sort() returns None, modifies in place)"
      },
      {
        questionText: "What does `my_list[::-1]` do?",
        options: ["Returns an empty list", "Reverses the list", "Sorts the list", "Removes duplicates"],
        correctOption: 1,
        explanation: "The correct answer is: Reverses the list"
      },
      {
        questionText: "Which list comprehension squares even numbers from 0-9?",
        options: ["`[x**2 for x in range(10) if x % 2 == 0]`", "`for x in range(10): x**2 if x%2==0`", "`[x**2 if x % 2 == 0]`", "`{x**2 for x in range(10)}`"],
        correctOption: 0,
        explanation: "The correct answer is: `[x**2 for x in range(10) if x % 2 == 0]`"
      },
    ],
    coding: [
      {
        questionText: "Write a program to remove duplicates from a list while preserving order.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["while", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Write a program using list comprehension to generate squares of numbers 1-20 divisible by 3.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Tuple Data Structure": {
    mcqs: [
      {
        questionText: "Which creates a single-element tuple?",
        options: ["`(5)`", "`(5,)`", "`[5]`", "`{5}`"],
        correctOption: 1,
        explanation: "The correct answer is: `(5,)`"
      },
      {
        questionText: "Tuples are:",
        options: ["Mutable, like lists", "Immutable", "Unordered", "Only for numbers"],
        correctOption: 1,
        explanation: "The correct answer is: Immutable"
      },
      {
        questionText: "Main advantage of tuples over lists for fixed data:",
        options: ["Tuples use more memory", "Immutability (safety) and faster iteration", "More methods than lists", "Only store strings"],
        correctOption: 1,
        explanation: "The correct answer is: Immutability (safety) and faster iteration"
      },
      {
        questionText: "What does `a, b, c = (1, 2, 3)` do?",
        options: ["Raises an error", "Unpacks values to a, b, c", "Creates a nested tuple", "Only assigns the first value"],
        correctOption: 1,
        explanation: "The correct answer is: Unpacks values to a, b, c"
      },
      {
        questionText: "Which method returns occurrence count of a value in a tuple?",
        options: ["`tuple.count(value)`", "`tuple.find(value)`", "`tuple.index(value)`", "`tuple.occurrences(value)`"],
        correctOption: 0,
        explanation: "The correct answer is: `tuple.count(value)`"
      },
      {
        questionText: "Can a tuple contain a mutable object like a list?",
        options: ["No", "Yes, though the tuple's own structure stays fixed", "Only if length is 1", "Only in Python 2"],
        correctOption: 1,
        explanation: "The correct answer is: Yes, though the tuple's own structure stays fixed"
      },
      {
        questionText: "Output of `len((1, 2, (3, 4)))`?",
        options: ["4", "3", "2", "Error"],
        correctOption: 1,
        explanation: "The correct answer is: 3"
      },
      {
        questionText: "Which function converts a list to a tuple?",
        options: ["`tuple()`", "`totuple()`", "`list_to_tuple()`", "`tup()`"],
        correctOption: 0,
        explanation: "The correct answer is: `tuple()`"
      },
    ],
    coding: [
      {
        questionText: "Write a program that returns a new tuple with only even numbers from an input tuple.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["return", "with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Write a program that \"swaps\" two tuple values (creating a new tuple), printing both tuples' `id()` to show a new object was created.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Set Data Structure": {
    mcqs: [
      {
        questionText: "Which creates an empty set?",
        options: ["`s = {}`", "`s = set()`", "`s = []`", "`s = ()`"],
        correctOption: 1,
        explanation: "The correct answer is: `s = set()`"
      },
      {
        questionText: "Key property of sets:",
        options: ["Allow duplicates", "Store unique, unordered elements", "Strict insertion order", "Indexed like lists"],
        correctOption: 1,
        explanation: "The correct answer is: Store unique, unordered elements"
      },
      {
        questionText: "Which method adds a single element to a set?",
        options: ["`set.append()`", "`set.add()`", "`set.insert()`", "`set.push()`"],
        correctOption: 1,
        explanation: "The correct answer is: `set.add()`"
      },
      {
        questionText: "`{1,2,3} & {2,3,4}` returns:",
        options: ["{1,2,3,4}", "{2,3}", "{1,4}", "{1,2,3}"],
        correctOption: 1,
        explanation: "The correct answer is: {2,3}"
      },
      {
        questionText: "`{1,2,3} | {2,3,4}` returns:",
        options: ["{2,3}", "{1,2,3,4}", "{1,4}", "{}"],
        correctOption: 1,
        explanation: "The correct answer is: {1,2,3,4}"
      },
      {
        questionText: "`{1,2,3} - {2,3}` returns:",
        options: ["{1}", "{2,3}", "{}", "{1,2,3}"],
        correctOption: 0,
        explanation: "The correct answer is: {1}"
      },
      {
        questionText: "Why isn't `{}` used for an empty set?",
        options: ["It's actually valid", "`{}` creates an empty dictionary", "Sets don't support curly braces", "It's a syntax error"],
        correctOption: 1,
        explanation: "The correct answer is: `{}` creates an empty dictionary"
      },
      {
        questionText: "Which method removes an element without raising an error if absent?",
        options: ["`set.remove()`", "`set.discard()`", "`set.pop()`", "`set.delete()`"],
        correctOption: 1,
        explanation: "The correct answer is: `set.discard()`"
      },
    ],
    coding: [
      {
        questionText: "Write a program that converts two lists to sets and prints their union, intersection, and difference.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Write a program that removes duplicates from a list using a set and prints unique elements sorted ascending.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Dictionary Data Structure": {
    mcqs: [
      {
        questionText: "Which creates a dictionary?",
        options: ["`d = {}`", "`d = []`", "`d = ()`", "`d = set()`"],
        correctOption: 0,
        explanation: "The correct answer is: `d = {}`"
      },
      {
        questionText: "Safe access returning `None` if key `\"name\"` is missing:",
        options: ["`d[\"name\"]`", "`d.get(\"name\")`", "`d.find(\"name\")`", "`d->name`"],
        correctOption: 1,
        explanation: "The correct answer is: `d.get(\"name\")`"
      },
      {
        questionText: "What does `d.keys()` return?",
        options: ["All values", "A view of all keys", "A single key", "The dictionary's length"],
        correctOption: 1,
        explanation: "The correct answer is: A view of all keys"
      },
      {
        questionText: "Output of:\n```\nd = {\"a\": 1, \"b\": 2}\nd[\"c\"] = 3\nprint(d)\n```",
        options: ["{\"a\": 1, \"b\": 2}", "{\"a\": 1, \"b\": 2, \"c\": 3}", "Error", "{\"c\": 3}"],
        correctOption: 1,
        explanation: "The correct answer is: {\"a\": 1, \"b\": 2, \"c\": 3}"
      },
      {
        questionText: "Which method removes a key and returns its value?",
        options: ["`dict.remove(key)`", "`dict.pop(key)`", "`dict.delete(key)`", "`dict.clear(key)`"],
        correctOption: 1,
        explanation: "The correct answer is: `dict.pop(key)`"
      },
      {
        questionText: "Since which Python version do dicts guarantee insertion order?",
        options: ["2.7", "3.7+", "Never guaranteed", "3.0"],
        correctOption: 1,
        explanation: "The correct answer is: 3.7+"
      },
      {
        questionText: "What does `{x: x**2 for x in range(5)}` create?",
        options: ["A list of squares", "A dict mapping each number to its square", "A set of squares", "A tuple"],
        correctOption: 1,
        explanation: "The correct answer is: A dict mapping each number to its square"
      },
      {
        questionText: "What happens accessing `d[\"missing\"]` (not `.get()`)?",
        options: ["Returns None", "Raises a KeyError", "Returns empty string", "Auto-creates the key"],
        correctOption: 1,
        explanation: "The correct answer is: Raises a KeyError"
      },
    ],
    coding: [
      {
        questionText: "Write a program that builds a word-frequency dictionary from a list of words.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Write a program that merges two dictionaries, summing values for keys present in both.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Object Oriented Program": {
    mcqs: [
      {
        questionText: "A class is:",
        options: ["An instance of an object", "A blueprint/template for creating objects", "A built-in function", "A type of loop"],
        correctOption: 1,
        explanation: "The correct answer is: A blueprint/template for creating objects"
      },
      {
        questionText: "`self` inside a method refers to:",
        options: ["The class itself", "The current instance", "A global variable", "The parent class"],
        correctOption: 1,
        explanation: "The correct answer is: The current instance"
      },
      {
        questionText: "Which special method is the constructor?",
        options: ["`__init__`", "`__new__` only", "`__create__`", "`__start__`"],
        correctOption: 0,
        explanation: "The correct answer is: `__init__`"
      },
      {
        questionText: "Inheritance is:",
        options: ["Creating multiple instances of the same class", "A child class deriving attributes/methods from a parent class", "Deleting a class", "Converting a function into a class"],
        correctOption: 1,
        explanation: "The correct answer is: A child class deriving attributes/methods from a parent class"
      },
      {
        questionText: "Encapsulation is:",
        options: ["Combining data/methods within a class and restricting direct access", "Creating multiple classes with the same name", "Removing all methods", "Converting a class into a module"],
        correctOption: 0,
        explanation: "The correct answer is: Combining data/methods within a class and restricting direct access"
      },
      {
        questionText: "Polymorphism is:",
        options: ["Different classes treated through a common interface, each implementing behavior differently", "Having only one class", "Deleting objects automatically", "A type of exception handling"],
        correctOption: 0,
        explanation: "The correct answer is: Different classes treated through a common interface, each implementing behavior differently"
      },
      {
        questionText: "How is a \"private\" attribute indicated by convention?",
        options: ["Prefix with single/double underscore, e.g., `_x`/`__x`", "The `private` keyword", "Declared inside `__init__` only", "All uppercase letters"],
        correctOption: 0,
        explanation: "The correct answer is: Prefix with single/double underscore, e.g., `_x`/`__x`"
      },
      {
        questionText: "What does `super().__init__()` typically do?",
        options: ["Deletes the parent class", "Calls the parent's constructor to initialize inherited attributes", "Creates an unrelated object", "Raises an exception"],
        correctOption: 1,
        explanation: "The correct answer is: Calls the parent's constructor to initialize inherited attributes"
      },
    ],
    coding: [
      {
        questionText: "Create class `Animal` (`name`, `sound`, `make_sound()`); create child `Dog` overriding `make_sound()`.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["class", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Write a program demonstrating encapsulation: `Employee` class with private `__salary` and getter/setter (setter rejects negative values).",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["class", "with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Exception Handling": {
    mcqs: [
      {
        questionText: "Which block catches exceptions?",
        options: ["try-except", "catch-throw", "begin-rescue", "if-error"],
        correctOption: 0,
        explanation: "The correct answer is: try-except"
      },
      {
        questionText: "What does `finally` do?",
        options: ["Runs only if an exception occurs", "Runs only if none occurs", "Always runs", "Never runs"],
        correctOption: 2,
        explanation: "The correct answer is: Always runs"
      },
      {
        questionText: "Which raises a custom exception?",
        options: ["`throw Exception(\"msg\")`", "`raise Exception(\"msg\")`", "`error Exception(\"msg\")`", "`except Exception(\"msg\")`"],
        correctOption: 1,
        explanation: "The correct answer is: `raise Exception(\"msg\")`"
      },
      {
        questionText: "Purpose of the `else` clause in try-except:",
        options: ["Runs if an exception occurs", "Runs only if no exception occurred", "Runs before try", "Replaces finally"],
        correctOption: 1,
        explanation: "The correct answer is: Runs only if no exception occurred"
      },
      {
        questionText: "Exception raised dividing by zero:",
        options: ["ValueError", "ZeroDivisionError", "TypeError", "ArithmeticError (base class only)"],
        correctOption: 1,
        explanation: "The correct answer is: ZeroDivisionError"
      },
      {
        questionText: "Catching multiple exception types in one block:",
        options: ["`except (TypeError, ValueError):`", "`except TypeError, ValueError:`", "`except TypeError and ValueError:`", "`except [TypeError, ValueError]:`"],
        correctOption: 0,
        explanation: "The correct answer is: `except (TypeError, ValueError):`"
      },
      {
        questionText: "Custom exceptions typically inherit from:",
        options: ["`object` directly", "The built-in `Exception` class (or subclass)", "`BaseError`", "`dict`"],
        correctOption: 1,
        explanation: "The correct answer is: The built-in `Exception` class (or subclass)"
      },
      {
        questionText: "What happens if an exception has no matching `except`?",
        options: ["Silently ignored", "Program terminates with an unhandled traceback (unless caught higher up)", "Auto-retries", "Converts to a warning"],
        correctOption: 1,
        explanation: "The correct answer is: Program terminates with an unhandled traceback (unless caught higher up)"
      },
    ],
    coding: [
      {
        questionText: "Write a program dividing two user-input numbers using try-except-else-finally to handle `ZeroDivisionError`/`ValueError`.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["try", "except", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Create a custom exception `InsufficientBalanceError` used in a withdrawal function raising it when amount exceeds balance.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["except", "with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Pandas Introduction": {
    mcqs: [
      {
        questionText: "Pandas is primarily built on top of:",
        options: ["Matplotlib", "NumPy", "TensorFlow", "SciPy only"],
        correctOption: 1,
        explanation: "The correct answer is: NumPy"
      },
      {
        questionText: "Pandas' two primary data structures:",
        options: ["List and Tuple", "Series and DataFrame", "Array and Matrix", "Set and Dict"],
        correctOption: 1,
        explanation: "The correct answer is: Series and DataFrame"
      },
      {
        questionText: "Conventional import:",
        options: ["`import pandas as pd`", "`import pandas as pandas`", "`include pandas as pd`", "`from pandas import *`"],
        correctOption: 0,
        explanation: "The correct answer is: `import pandas as pd`"
      },
      {
        questionText: "Key advantage of Pandas over plain lists for tabular data:",
        options: ["It cannot handle missing data", "Labeled axes, vectorized ops, built-in analysis tools", "It only works with numbers", "Replaces Python entirely"],
        correctOption: 1,
        explanation: "The correct answer is: Labeled axes, vectorized ops, built-in analysis tools"
      },
      {
        questionText: "Command to check installed Pandas version:",
        options: ["`pd.__version__`", "`pandas.version()`", "`pd.ver`", "`check_version(pd)`"],
        correctOption: 0,
        explanation: "The correct answer is: `pd.__version__`"
      },
      {
        questionText: "A Series is:",
        options: ["A 2D table", "A one-dimensional labeled array", "A Python dict only", "A NumPy matrix"],
        correctOption: 1,
        explanation: "The correct answer is: A one-dimensional labeled array"
      },
      {
        questionText: "A DataFrame is:",
        options: ["A single column", "A 2D labeled structure like a table", "A single scalar", "A plotting object"],
        correctOption: 1,
        explanation: "The correct answer is: A 2D labeled structure like a table"
      },
      {
        questionText: "Command to install Pandas via pip:",
        options: ["`pip install pandas`", "`pip get pandas`", "`python install pandas`", "`pandas install`"],
        correctOption: 0,
        explanation: "The correct answer is: `pip install pandas`"
      },
    ],
    coding: [
      {
        questionText: "Create a Series from a list of 5 numbers and print it with its index.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Create a DataFrame from a dictionary (3 columns, 4 rows) and print it with its shape.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Pandas Series Introduction": {
    mcqs: [
      {
        questionText: "Create a Series from `[10, 20, 30]`:",
        options: ["`pd.Series([10,20,30])`", "`pd.DataFrame([10,20,30])`", "`pd.Array([10,20,30])`", "`pd.List([10,20,30])`"],
        correctOption: 0,
        explanation: "The correct answer is: `pd.Series([10,20,30])`"
      },
      {
        questionText: "Default index if none specified:",
        options: ["Random integers", "Integer positions from 0", "Alphabetic labels", "None"],
        correctOption: 1,
        explanation: "The correct answer is: Integer positions from 0"
      },
      {
        questionText: "Series with custom index:",
        options: ["`pd.Series([1,2,3], index=['a','b','c'])`", "`pd.Series([1,2,3], labels=['a','b','c'])`", "`.set_index()` only", "`pd.Series(index=['a','b','c'])`"],
        correctOption: 0,
        explanation: "The correct answer is: `pd.Series([1,2,3], index=['a','b','c'])`"
      },
      {
        questionText: "Access element labeled `'b'` in Series `s`:",
        options: ["`s['b']`", "`s.loc('b')`", "`s[0]` only", "`s.get_element('b')`"],
        correctOption: 0,
        explanation: "The correct answer is: `s['b']`"
      },
      {
        questionText: "Can a Series hold mixed types?",
        options: ["No", "Yes, though dtype becomes 'object'", "Only int+float", "Only strings"],
        correctOption: 1,
        explanation: "The correct answer is: Yes, though dtype becomes 'object'"
      },
      {
        questionText: "What does `s.values` return?",
        options: ["Index labels", "Underlying NumPy array of values", "The Series name", "dtype only"],
        correctOption: 1,
        explanation: "The correct answer is: Underlying NumPy array of values"
      },
      {
        questionText: "Create a Series from a dict:",
        options: ["`pd.Series({'a':1, 'b':2})` — keys become index", "`.from_dict()` only", "`pd.DataFrame({'a':1,'b':2})`", "Not possible"],
        correctOption: 0,
        explanation: "The correct answer is: `pd.Series({'a':1, 'b':2})` — keys become index"
      },
      {
        questionText: "Output of `pd.Series([1,2,3]).name` if unset?",
        options: ["'Series'", "None", "0", "Error"],
        correctOption: 1,
        explanation: "The correct answer is: None"
      },
    ],
    coding: [
      {
        questionText: "Create a Series from a dict of 5 students' names/marks, then print it with its index.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Create a Series of 10 random integers and print elements > 50 using boolean indexing.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Pandas NaN Value Intro": {
    mcqs: [
      {
        questionText: "NaN stands for:",
        options: ["Not a Number", "New and Null", "Negative and Null", "Numeric and Null"],
        correctOption: 0,
        explanation: "The correct answer is: Not a Number"
      },
      {
        questionText: "Function checking if a value is NaN:",
        options: ["`pd.isnull()` / `pd.isna()`", "`pd.isNaN()`", "`pd.checkNull()`", "`pd.missing()`"],
        correctOption: 0,
        explanation: "The correct answer is: `pd.isnull()` / `pd.isna()`"
      },
      {
        questionText: "Data type typically used for NaN:",
        options: ["int", "float", "str", "bool"],
        correctOption: 1,
        explanation: "The correct answer is: float"
      },
      {
        questionText: "`np.nan == np.nan` returns:",
        options: ["True", "False", "None", "Error"],
        correctOption: 1,
        explanation: "The correct answer is: False"
      },
      {
        questionText: "Which method fills NaN values with a specified value?",
        options: ["`df.fillna(value)`", "`df.replace_nan(value)`", "`df.fill(value)`", "`df.setna(value)`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.fillna(value)`"
      },
      {
        questionText: "Which method drops rows with any NaN?",
        options: ["`df.dropna()`", "`df.removena()`", "`df.cleanna()`", "`df.deletena()`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.dropna()`"
      },
      {
        questionText: "Count of NaN values per column:",
        options: ["`df.isnull().sum()`", "`df.countna()`", "`df.na_count()`", "`df.nan()`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.isnull().sum()`"
      },
      {
        questionText: "Which correctly creates a NaN with NumPy?",
        options: ["`np.nan`", "`np.NAN_value`", "`np.null`", "`None.nan`"],
        correctOption: 0,
        explanation: "The correct answer is: `np.nan`"
      },
    ],
    coding: [
      {
        questionText: "Create a DataFrame with missing values and display the count of missing values per column and per row.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Fill missing numeric values with the column median and missing categorical values with \"Unknown\".",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Pandas Series Attributes": {
    mcqs: [
      {
        questionText: "Attribute returning number of elements:",
        options: ["`s.size`", "`s.count_elements`", "`s.total`", "`s.number`"],
        correctOption: 0,
        explanation: "The correct answer is: `s.size`"
      },
      {
        questionText: "Attribute returning data type of elements:",
        options: ["`s.dtype`", "`s.type`", "`s.datatype`", "`s.kind`"],
        correctOption: 0,
        explanation: "The correct answer is: `s.dtype`"
      },
      {
        questionText: "Attribute returning the index object:",
        options: ["`s.index`", "`s.labels`", "`s.idx`", "`s.axis`"],
        correctOption: 0,
        explanation: "The correct answer is: `s.index`"
      },
      {
        questionText: "Attribute returning underlying values array:",
        options: ["`s.values`", "`s.data`", "`s.array_only`", "`s.raw`"],
        correctOption: 0,
        explanation: "The correct answer is: `s.values`"
      },
      {
        questionText: "Way to check for missing values as a boolean summary:",
        options: ["`s.isnull().any()`", "`s.has_nan`", "`s.missing`", "`s.null_check`"],
        correctOption: 0,
        explanation: "The correct answer is: `s.isnull().any()`"
      },
      {
        questionText: "What does `s.shape` return for a Series?",
        options: ["A 2D tuple", "A 1-element tuple, e.g., `(5,)`", "The index labels", "The dtype"],
        correctOption: 1,
        explanation: "The correct answer is: A 1-element tuple, e.g., `(5,)`"
      },
      {
        questionText: "Attribute giving a Series a descriptive label:",
        options: ["`s.name`", "`s.title`", "`s.label`", "`s.tag`"],
        correctOption: 0,
        explanation: "The correct answer is: `s.name`"
      },
      {
        questionText: "Attribute returning True if the Series has no elements:",
        options: ["`s.empty`", "`s.is_empty()`", "`s.blank`", "`s.zero`"],
        correctOption: 0,
        explanation: "The correct answer is: `s.empty`"
      },
    ],
    coding: [
      {
        questionText: "Create a Series and print its `dtype`, `size`, `shape`, `index`, and `values`.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Create a Series, set its `name`, check `.empty`, and print a formatted summary.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Pandas Series Methods": {
    mcqs: [
      {
        questionText: "Method returning summary statistics:",
        options: ["`s.describe()`", "`s.summary()`", "`s.stats()`", "`s.info()`"],
        correctOption: 0,
        explanation: "The correct answer is: `s.describe()`"
      },
      {
        questionText: "Method returning the sum of all elements:",
        options: ["`s.sum()`", "`s.total()`", "`s.add_all()`", "`s.aggregate_sum()`"],
        correctOption: 0,
        explanation: "The correct answer is: `s.sum()`"
      },
      {
        questionText: "Method returning number of unique values:",
        options: ["`s.nunique()`", "`s.unique_count()`", "`s.distinct()`", "`s.count_unique()`"],
        correctOption: 0,
        explanation: "The correct answer is: `s.nunique()`"
      },
      {
        questionText: "Method returning frequency count of each unique value:",
        options: ["`s.value_counts()`", "`s.freq()`", "`s.count_values()`", "`s.tally()`"],
        correctOption: 0,
        explanation: "The correct answer is: `s.value_counts()`"
      },
      {
        questionText: "Method applying a custom function element-wise:",
        options: ["`s.apply(func)`", "`s.map_all(func)`", "`s.each(func)`", "`s.loop(func)`"],
        correctOption: 0,
        explanation: "The correct answer is: `s.apply(func)`"
      },
      {
        questionText: "Method sorting a Series by values:",
        options: ["`s.sort_values()`", "`s.sort_index()` only", "`s.order()`", "`s.arrange()`"],
        correctOption: 0,
        explanation: "The correct answer is: `s.sort_values()`"
      },
      {
        questionText: "Method returning the largest value:",
        options: ["`s.max()`", "`s.top()`", "`s.largest()`", "`s.high()`"],
        correctOption: 0,
        explanation: "The correct answer is: `s.max()`"
      },
      {
        questionText: "Method replacing specific values with others:",
        options: ["`s.replace(old, new)`", "`s.swap(old, new)`", "`s.substitute(old, new)`", "`s.change(old, new)`"],
        correctOption: 0,
        explanation: "The correct answer is: `s.replace(old, new)`"
      },
    ],
    coding: [
      {
        questionText: "Create a Series of exam scores; use `.describe()`, `.value_counts()`, and `.apply()` (grade letter based on score).",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Use `.map()`/`.apply()` on a Celsius temperature Series to convert all values to Fahrenheit.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Pandas DataFrame Introduction": {
    mcqs: [
      {
        questionText: "Which correctly creates a DataFrame from a dict of lists?",
        options: ["`pd.DataFrame({'a':[1,2],'b':[3,4]})`", "`pd.Series({...})`", "`pd.Array({...})`", "`pd.Table({...})`"],
        correctOption: 0,
        explanation: "The correct answer is: `pd.DataFrame({'a':[1,2],'b':[3,4]})`"
      },
      {
        questionText: "A DataFrame's columns:",
        options: ["Must all share one data type", "Can each have a different data type", "Cannot have names", "Must be numeric only"],
        correctOption: 1,
        explanation: "The correct answer is: Can each have a different data type"
      },
      {
        questionText: "Method to display the first n rows (default 5):",
        options: ["`df.head()`", "`df.top()`", "`df.first()`", "`df.start()`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.head()`"
      },
      {
        questionText: "Method to display the last n rows:",
        options: ["`df.tail()`", "`df.bottom()`", "`df.last()`", "`df.end()`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.tail()`"
      },
      {
        questionText: "What does `df.shape` return?",
        options: ["Column names", "(rows, columns) tuple", "Data types", "Index only"],
        correctOption: 1,
        explanation: "The correct answer is: (rows, columns) tuple"
      },
      {
        questionText: "Creating a DataFrame from a NumPy array with custom column names:",
        options: ["`pd.DataFrame(array, columns=['a','b','c'])`", "Assign columns after only", "`pd.Series(array, columns=[...])`", "`pd.Table(array, names=[...])`"],
        correctOption: 0,
        explanation: "The correct answer is: `pd.DataFrame(array, columns=['a','b','c'])`"
      },
      {
        questionText: "Attribute listing all column names:",
        options: ["`df.columns`", "`df.col_names`", "`df.headers`", "`df.fields`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.columns`"
      },
      {
        questionText: "A DataFrame can be thought of as:",
        options: ["Independent arrays with no shared index", "Multiple Series sharing a common index", "Only dictionaries", "Only tuples"],
        correctOption: 1,
        explanation: "The correct answer is: Multiple Series sharing a common index"
      },
    ],
    coding: [
      {
        questionText: "Create a DataFrame of 5 employees with `Name`, `Department`, `Salary`; print first 3 rows and shape.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Create a DataFrame from a random NumPy 2D array (5x3) with custom column names A, B, C.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Pandas Loading Files": {
    mcqs: [
      {
        questionText: "Function to read a CSV into a DataFrame:",
        options: ["`pd.read_csv('file.csv')`", "`pd.load_csv('file.csv')`", "`pd.import_csv('file.csv')`", "`pd.open_csv('file.csv')`"],
        correctOption: 0,
        explanation: "The correct answer is: `pd.read_csv('file.csv')`"
      },
      {
        questionText: "Function to read an Excel file:",
        options: ["`pd.read_excel('file.xlsx')`", "`pd.read_xls()` only", "`pd.load_excel()`", "`pd.open_excel()`"],
        correctOption: 0,
        explanation: "The correct answer is: `pd.read_excel('file.xlsx')`"
      },
      {
        questionText: "Parameter of `read_csv()` for a custom delimiter:",
        options: ["`sep=';'`", "`delimiter_char=';'`", "`split=';'`", "`divider=';'`"],
        correctOption: 0,
        explanation: "The correct answer is: `sep=';'`"
      },
      {
        questionText: "Write DataFrame to CSV without the index column:",
        options: ["`df.to_csv('out.csv', index=False)`", "`df.save_csv('out.csv')`", "`df.write_csv('out.csv', index=None)`", "`df.export('out.csv')`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.to_csv('out.csv', index=False)`"
      },
      {
        questionText: "Parameter specifying which row to use as column headers:",
        options: ["`header=0`", "`columns_row=0`", "`head_row=0`", "`title=0`"],
        correctOption: 0,
        explanation: "The correct answer is: `header=0`"
      },
      {
        questionText: "Function to read a JSON file:",
        options: ["`pd.read_json('file.json')`", "`pd.load_json()`", "`pd.import_json()`", "`pd.json_to_df()`"],
        correctOption: 0,
        explanation: "The correct answer is: `pd.read_json('file.json')`"
      },
      {
        questionText: "What does `pd.read_csv('file.csv', nrows=100)` do?",
        options: ["Reads all rows, first 100 columns", "Reads only first 100 rows", "Skips first 100 rows", "Reads 100 files"],
        correctOption: 1,
        explanation: "The correct answer is: Reads only first 100 rows"
      },
      {
        questionText: "Function to read data from SQL into a DataFrame:",
        options: ["`pd.read_sql()`", "`pd.load_sql()`", "`pd.sql_to_df()`", "`pd.import_sql()`"],
        correctOption: 0,
        explanation: "The correct answer is: `pd.read_sql()`"
      },
    ],
    coding: [
      {
        questionText: "Read a CSV, print `.info()`, save a filtered subset to a new CSV without index.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Read a multi-sheet Excel file with `pd.read_excel(sheet_name=None)`, print sheet names and shapes.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Pandas DataFrame Attributes": {
    mcqs: [
      {
        questionText: "Attribute returning dtypes of each column:",
        options: ["`df.dtypes`", "`df.types`", "`df.datatype`", "`df.kind`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.dtypes`"
      },
      {
        questionText: "Attribute returning the DataFrame's index:",
        options: ["`df.index`", "`df.rows`", "`df.labels`", "`df.row_index`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.index`"
      },
      {
        questionText: "Returning total elements (rows × columns):",
        options: ["`df.size`", "`df.count()` only", "`df.total`", "`df.length`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.size`"
      },
      {
        questionText: "Attribute returning NumPy representation of data:",
        options: ["`df.values`", "`df.array`", "`df.data`", "`df.raw`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.values`"
      },
      {
        questionText: "Attribute returning True if no rows:",
        options: ["`df.empty`", "`df.is_empty()`", "`df.blank`", "`df.zero_rows`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.empty`"
      },
      {
        questionText: "Method giving dtypes, non-null counts, and memory usage summary:",
        options: ["`df.info()`", "`df.summary()`", "`df.describe()`", "`df.details()`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.info()`"
      },
      {
        questionText: "Attribute returning number of dimensions (always 2 for a DataFrame):",
        options: ["`df.ndim`", "`df.dimensions`", "`df.axes_count`", "`df.dim`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.ndim`"
      },
      {
        questionText: "Attribute returning row and column axis labels:",
        options: ["`df.axes`", "`df.labels_all`", "`df.dims`", "`df.headers_all`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.axes`"
      },
    ],
    coding: [
      {
        questionText: "Load a sample DataFrame; print `dtypes`, `shape`, `size`, `ndim`, `empty`.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Use `.info()` and `.describe()` together for a data-quality summary report.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Pandas DataFrame Methods": {
    mcqs: [
      {
        questionText: "Method returning descriptive stats for numeric columns:",
        options: ["`df.describe()`", "`df.stats()`", "`df.summary()`", "`df.info()`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.describe()`"
      },
      {
        questionText: "Method dropping a column:",
        options: ["`df.drop('col', axis=1)`", "`df.remove('col')`", "`df.delete_column('col')`", "`df.pop_column('col')`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.drop('col', axis=1)`"
      },
      {
        questionText: "Method returning correlation matrix:",
        options: ["`df.corr()`", "`df.correlation()`", "`df.relation()`", "`df.covariance()`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.corr()`"
      },
      {
        questionText: "Method applying a function along an axis:",
        options: ["`df.apply(func, axis=...)`", "`df.map(func)`", "`df.each(func)`", "`df.loop(func)`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.apply(func, axis=...)`"
      },
      {
        questionText: "Method transposing rows/columns:",
        options: ["`df.T` (`df.transpose()`)", "`df.flip()`", "`df.swap()`", "`df.rotate()`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.T` (`df.transpose()`)"
      },
      {
        questionText: "Method returning non-null count per column:",
        options: ["`df.count()`", "`df.notnull_count()`", "`df.valid()`", "`df.present()`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.count()`"
      },
      {
        questionText: "Method checking for duplicate rows:",
        options: ["`df.duplicated()`", "`df.is_duplicate()`", "`df.check_dup()`", "`df.same_rows()`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.duplicated()`"
      },
      {
        questionText: "Method removing duplicate rows:",
        options: ["`df.drop_duplicates()`", "`df.remove_duplicates()`", "`df.unique_rows()`", "`df.dedupe()`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.drop_duplicates()`"
      },
    ],
    coding: [
      {
        questionText: "Use `.apply()` to sum two numeric columns into a new column; use `.corr()` to show correlations.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Identify and remove duplicate rows using `.duplicated()`/`.drop_duplicates()`, printing the count found.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Pandas DataFrame col: rename": {
    mcqs: [
      {
        questionText: "Method renaming columns:",
        options: ["`df.rename(columns={'old':'new'})`", "`df.rename_columns('old','new')`", "`df.columns.replace(...)`", "`df.set_names(...)`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.rename(columns={'old':'new'})`"
      },
      {
        questionText: "Renaming ALL columns at once with a list:",
        options: ["`df.columns = ['new1','new2','new3']`", "`df.rename_all([...])`", "`df.set_columns([...])`", "`df.replace_columns([...])`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.columns = ['new1','new2','new3']`"
      },
      {
        questionText: "What does `inplace=True` do with `df.rename()`?",
        options: ["Leaves the original unchanged", "Modifies the original directly", "Deletes the column", "Raises an error"],
        correctOption: 1,
        explanation: "The correct answer is: Modifies the original directly"
      },
      {
        questionText: "Renaming a single column `'age'` to `'Age'`:",
        options: ["`df.rename(columns={'age': 'Age'}, inplace=True)`", "`df.columns.rename('age','Age')`", "`df.rename_column('age','Age')`", "`df['age'].rename('Age')`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.rename(columns={'age': 'Age'}, inplace=True)`"
      },
      {
        questionText: "Converting all column names to lowercase:",
        options: ["`df.columns = df.columns.str.lower()`", "`df.lower_columns()`", "`df.columns.tolower()`", "`df.rename(lower=True)`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.columns = df.columns.str.lower()`"
      },
      {
        questionText: "Renaming index labels (not columns):",
        options: ["`df.rename(index={old_label: new_label})`", "`df.rename_index()` only", "`df.index.set()`", "`df.reindex_labels()`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.rename(index={old_label: new_label})`"
      },
      {
        questionText: "Renaming a non-existent column via `df.rename(columns={'missing':'new'})`:",
        options: ["Raises a KeyError always", "Silently ignored — no error, no change", "Creates the column with NaN", "Renames a random column"],
        correctOption: 1,
        explanation: "The correct answer is: Silently ignored — no error, no change"
      },
      {
        questionText: "Stripping whitespace from all column names:",
        options: ["`df.columns = df.columns.str.strip()`", "`df.columns.trim()`", "`df.strip_columns()`", "`df.clean_columns()`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.columns = df.columns.str.strip()`"
      },
    ],
    coding: [
      {
        questionText: "Load a DataFrame with messy column names and clean them (strip whitespace, lowercase, underscores).",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Rename three specific columns via a dictionary passed to `.rename()`, using `inplace=True`.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Pandas Inplace Parameter": {
    mcqs: [
      {
        questionText: "What does `inplace=True` generally do across Pandas methods?",
        options: ["Returns a new object, original untouched", "Modifies the original directly and returns `None`", "Creates a backup automatically", "Always raises a warning"],
        correctOption: 1,
        explanation: "The correct answer is: Modifies the original directly and returns `None`"
      },
      {
        questionText: "Default value of `inplace` for most methods:",
        options: ["True", "False", "None", "Varies randomly"],
        correctOption: 1,
        explanation: "The correct answer is: False"
      },
      {
        questionText: "If you write `df.dropna(inplace=True)`, you should avoid:",
        options: ["Reassigning like `df = df.dropna(inplace=True)`, which would set `df` to `None`", "Calling any other method after", "Printing `df` afterward", "Using it in a function"],
        correctOption: 0,
        explanation: "The correct answer is: Reassigning like `df = df.dropna(inplace=True)`, which would set `df` to `None`"
      },
      {
        questionText: "Safer beginner practice:",
        options: ["Always use `inplace=True`", "Use the default (`False`) and reassign, e.g., `df = df.dropna()`", "Never check if inplace is supported", "Avoid Pandas entirely"],
        correctOption: 1,
        explanation: "The correct answer is: Use the default (`False`) and reassign, e.g., `df = df.dropna()`"
      },
      {
        questionText: "Which of these commonly supports `inplace`?",
        options: ["`fillna()`", "`drop()`", "`rename()`", "All of the above"],
        correctOption: 3,
        explanation: "The correct answer is: All of the above"
      },
      {
        questionText: "Common misconception about `inplace=True`'s performance:",
        options: ["It always avoids copying and is faster/more memory-efficient", "Pandas may still create an intermediate copy internally, so it doesn't always save memory", "It compiles to C code", "It converts to NumPy"],
        correctOption: 1,
        explanation: "The correct answer is: Pandas may still create an intermediate copy internally, so it doesn't always save memory"
      },
      {
        questionText: "What does `df.reset_index(inplace=True)` do?",
        options: ["Creates a new DataFrame, original unchanged", "Resets the index of the original directly", "Deletes the index entirely", "Only works on Series"],
        correctOption: 1,
        explanation: "The correct answer is: Resets the index of the original directly"
      },
      {
        questionText: "Why might `inplace=True` be discouraged in production code?",
        options: ["It always breaks the program", "It can hurt readability/debugging and doesn't support chaining like `df.dropna().reset_index()`", "It's deprecated", "It only works with NumPy arrays"],
        correctOption: 1,
        explanation: "The correct answer is: It can hurt readability/debugging and doesn't support chaining like `df.dropna().reset_index()`"
      },
    ],
    coding: [
      {
        questionText: "Demonstrate the difference between `inplace=True` and default `inplace=False` when dropping NaN rows.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Rename columns with `inplace=True`, then reset the index with `inplace=True`, printing the final result.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Pandas Handling Missing Values": {
    mcqs: [
      {
        questionText: "Method detecting missing values (boolean mask):",
        options: ["`df.isnull()` (`df.isna()`)", "`df.check_missing()`", "`df.na_mask()`", "`df.missing_values()`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.isnull()` (`df.isna()`)"
      },
      {
        questionText: "Filling with the previous valid value (forward fill):",
        options: ["`df.fillna(method='ffill')`", "`df.fillna(method='bfill')`", "`df.fillna(0)`", "`df.dropna()`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.fillna(method='ffill')`"
      },
      {
        questionText: "Filling with the next valid value (backward fill):",
        options: ["`df.fillna(method='ffill')`", "`df.fillna(method='bfill')`", "`df.dropna()`", "`df.interpolate(method='none')`"],
        correctOption: 1,
        explanation: "The correct answer is: `df.fillna(method='bfill')`"
      },
      {
        questionText: "Estimating missing values by interpolating:",
        options: ["`df.interpolate()`", "`df.fillna(interp=True)`", "`df.estimate()`", "`df.guess()`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.interpolate()`"
      },
      {
        questionText: "What does `df.dropna(axis=1)` do?",
        options: ["Drops rows with any NaN", "Drops columns with any NaN", "Fills NaN with 0", "Does nothing"],
        correctOption: 1,
        explanation: "The correct answer is: Drops columns with any NaN"
      },
      {
        questionText: "What does `df.dropna(thresh=3)` do?",
        options: ["Drops rows/cols with >3 non-null values", "Keeps rows/cols with at least 3 non-null values, dropping the rest", "Fills NaN with 3", "Removes exactly 3 rows"],
        correctOption: 1,
        explanation: "The correct answer is: Keeps rows/cols with at least 3 non-null values, dropping the rest"
      },
      {
        questionText: "Common strategy for missing categorical data:",
        options: ["Fill with mode or a placeholder like \"Unknown\"", "Always delete the dataset", "Fill with the mean", "Ignore it always"],
        correctOption: 0,
        explanation: "The correct answer is: Fill with mode or a placeholder like \"Unknown\""
      },
      {
        questionText: "Why understand WHY data is missing before choosing an imputation strategy?",
        options: ["It's unimportant", "Different missingness mechanisms may call for different strategies to avoid bias", "It can't be handled in Pandas", "Pandas decides automatically"],
        correctOption: 1,
        explanation: "The correct answer is: Different missingness mechanisms may call for different strategies to avoid bias"
      },
    ],
    coding: [
      {
        questionText: "Create a DataFrame with missing values in multiple columns; handle with mean/mode/forward-fill per column type.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Visualize the pattern of missing data using a heatmap (`sns.heatmap(df.isnull())`).",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Pandas Data Selection: loc & iloc": {
    mcqs: [
      {
        questionText: "`.loc[]` is used for selection based on:",
        options: ["Integer position only", "Labels", "Random access", "Booleans only"],
        correctOption: 1,
        explanation: "The correct answer is: Labels"
      },
      {
        questionText: "`.iloc[]` is used for selection based on:",
        options: ["Labels", "Integer position", "Column names only", "Random sampling"],
        correctOption: 1,
        explanation: "The correct answer is: Integer position"
      },
      {
        questionText: "What does `df.loc[0:3]` select (default integer index)?",
        options: ["Rows 0–2", "Rows 0–3 inclusive (label slicing is inclusive)", "Only row 3", "An error"],
        correctOption: 1,
        explanation: "The correct answer is: Rows 0–3 inclusive (label slicing is inclusive)"
      },
      {
        questionText: "What does `df.iloc[0:3]` select?",
        options: ["Positions 0,1,2 (exclusive of 3)", "Rows 0–3 inclusive", "Only row 3", "An error"],
        correctOption: 0,
        explanation: "The correct answer is: Positions 0,1,2 (exclusive of 3)"
      },
      {
        questionText: "Select cell at row label 'x', column label 'y' using `.loc`:",
        options: ["`df.loc['x', 'y']`", "`df.loc('x','y')`", "`df['x']['y']`", "`df.iloc['x','y']`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.loc['x', 'y']`"
      },
      {
        questionText: "Select rows where `age` > 30 using `.loc`:",
        options: ["`df.loc[df['age'] > 30]`", "`df.iloc[df['age'] > 30]`", "`df.loc[age > 30]`", "`df.select(age > 30)`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.loc[df['age'] > 30]`"
      },
      {
        questionText: "Key difference between `.loc` and `.iloc` slicing:",
        options: ["No difference", "`.loc` includes the endpoint label; `.iloc` excludes the endpoint position", "`.iloc` supports labels", "`.loc` only works on Series"],
        correctOption: 1,
        explanation: "The correct answer is: `.loc` includes the endpoint label; `.iloc` excludes the endpoint position"
      },
      {
        questionText: "Selecting the 2nd row (position-based) and all columns using `.iloc`:",
        options: ["`df.iloc[1, :]`", "`df.iloc[2, :]`", "`df.loc[1, :]`", "`df.iloc[:, 1]`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.iloc[1, :]`"
      },
    ],
    coding: [
      {
        questionText: "Create a DataFrame with a custom string index; demonstrate `.loc` (by label) and `.iloc` (by position) selection.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Use `.loc` with a boolean condition to select rows where \"Salary\" is above the average.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Pandas Filtering": {
    mcqs: [
      {
        questionText: "Filter rows where `age` > 25:",
        options: ["`df[df['age'] > 25]`", "`df.filter(age > 25)`", "`df.where(age > 25)`", "`df.select(age > 25)`"],
        correctOption: 0,
        explanation: "The correct answer is: `df[df['age'] > 25]`"
      },
      {
        questionText: "Filter rows matching multiple AND conditions:",
        options: ["`df[(df['age'] > 25) & (df['city'] == 'Delhi')]`", "`df[df['age'] > 25 and df['city'] == 'Delhi']`", "`df.filter(age > 25 and city == 'Delhi')`", "`df[df['age'] > 25 && df['city']=='Delhi']`"],
        correctOption: 0,
        explanation: "The correct answer is: `df[(df['age'] > 25) & (df['city'] == 'Delhi')]`"
      },
      {
        questionText: "Filter rows matching either of two conditions (OR):",
        options: ["`df[(cond1) | (cond2)]`", "`df[cond1 or cond2]`", "`df.filter(cond1 || cond2)`", "`df[cond1, cond2]`"],
        correctOption: 0,
        explanation: "The correct answer is: `df[(cond1) | (cond2)]`"
      },
      {
        questionText: "Checking if column values are within a list of values:",
        options: ["`df['col'].isin([...])`", "`df['col'].within([...])`", "`df['col'].contains_list([...])`", "`df['col'].match([...])`"],
        correctOption: 0,
        explanation: "The correct answer is: `df['col'].isin([...])`"
      },
      {
        questionText: "Negating a condition (NOT):",
        options: ["The `~` operator before the condition", "`!` before the condition", "`not()` function", "Not supported"],
        correctOption: 0,
        explanation: "The correct answer is: The `~` operator before the condition"
      },
      {
        questionText: "Filtering rows/columns by labels using a callable/string/regex:",
        options: ["`df.filter(items=[...], like='...', regex='...')`", "`df.select_labels()`", "`df.query_labels()`", "`df.match_labels()`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.filter(items=[...], like='...', regex='...')`"
      },
      {
        questionText: "Filtering with a string expression:",
        options: ["`df.query(\"age > 25 and city == 'Delhi'\")`", "`df.filter_str(...)`", "`df.expr(...)`", "`df.eval_filter(...)`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.query(\"age > 25 and city == 'Delhi'\")`"
      },
      {
        questionText: "What does `df[df['name'].str.contains('an')]` do?",
        options: ["Filters rows where 'name' contains substring 'an'", "Filters rows where 'name' equals 'an' exactly", "Raises an error", "Filters numeric columns"],
        correctOption: 0,
        explanation: "The correct answer is: Filters rows where 'name' contains substring 'an'"
      },
    ],
    coding: [
      {
        questionText: "Filter employees in \"Sales\" with salary > 50,000 using boolean AND indexing.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Use `df.query()` to filter rows where \"age\" is between 18 and 30 inclusive.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Pandas Sorting": {
    mcqs: [
      {
        questionText: "Method sorting by column values:",
        options: ["`df.sort_values(by='col')`", "`df.order_by('col')`", "`df.arrange('col')`", "`df.sort('col')`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.sort_values(by='col')`"
      },
      {
        questionText: "Parameter controlling ascending/descending:",
        options: ["`ascending=True/False`", "`order='asc'/'desc'`", "`direction=1/-1`", "`desc=True/False`"],
        correctOption: 0,
        explanation: "The correct answer is: `ascending=True/False`"
      },
      {
        questionText: "Method sorting by index labels:",
        options: ["`df.sort_index()`", "`df.sort_by_index()`", "`df.index_sort()`", "`df.order_index()`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.sort_index()`"
      },
      {
        questionText: "Sorting by 'Department' then 'Salary' descending:",
        options: ["`df.sort_values(by=['Department','Salary'], ascending=[True, False])`", "`df.sort_values('Department','Salary', desc=True)`", "`df.sort([...])`", "`df.order([...])`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.sort_values(by=['Department','Salary'], ascending=[True, False])`"
      },
      {
        questionText: "What does `na_position='first'` do in `sort_values()`?",
        options: ["Places NaN at the start of the sorted result", "Places NaN at the end always", "Removes NaN before sorting", "Raises an error"],
        correctOption: 0,
        explanation: "The correct answer is: Places NaN at the start of the sorted result"
      },
      {
        questionText: "Method returning n largest values of a column efficiently:",
        options: ["`df.nlargest(n, 'col')`", "`df.top_n(n, 'col')`", "`df.sort_values('col').head(n)` only", "`df.max(n, 'col')`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.nlargest(n, 'col')`"
      },
      {
        questionText: "Method returning n smallest values:",
        options: ["`df.nsmallest(n, 'col')`", "`df.bottom_n(n, 'col')`", "`df.min(n, 'col')`", "`df.least(n, 'col')`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.nsmallest(n, 'col')`"
      },
      {
        questionText: "Does `.sort_values()` modify the DataFrame by default?",
        options: ["Yes always", "No — returns a new sorted DataFrame unless `inplace=True`", "Deletes unsorted rows", "Only works on numeric columns"],
        correctOption: 1,
        explanation: "The correct answer is: No — returns a new sorted DataFrame unless `inplace=True`"
      },
    ],
    coding: [
      {
        questionText: "Sort products first by \"Category\" ascending, then \"Price\" descending within category.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Find the top 5 highest-paid employees using `.nlargest()`.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Pandas Groupby": {
    mcqs: [
      {
        questionText: "What does `df.groupby('col')` primarily do?",
        options: ["Deletes duplicate rows", "Splits the DataFrame into groups by unique values of 'col' for aggregation", "Sorts by 'col'", "Filters out 'col'"],
        correctOption: 1,
        explanation: "The correct answer is: Splits the DataFrame into groups by unique values of 'col' for aggregation"
      },
      {
        questionText: "Method computing mean per group after groupby:",
        options: ["`df.groupby('col').mean()`", "`.average()`", "`.avg()`", "`.center()`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.groupby('col').mean()`"
      },
      {
        questionText: "Applying multiple different aggregations to different columns:",
        options: ["`df.groupby('col').agg({'col2':'mean','col3':'sum'})`", "`.multi_agg()`", "`.apply_all()`", "`.combine()`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.groupby('col').agg({'col2':'mean','col3':'sum'})`"
      },
      {
        questionText: "What does `df.groupby('col').size()` return?",
        options: ["Memory size of the DataFrame", "Number of rows per group", "Sum of a numeric column per group", "Number of unique groups only"],
        correctOption: 1,
        explanation: "The correct answer is: Number of rows per group"
      },
      {
        questionText: "Grouping by multiple columns simultaneously:",
        options: ["`df.groupby(['col1','col2'])`", "`df.groupby('col1','col2')`", "`df.groupby('col1'+'col2')`", "`df.multi_groupby([...])`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.groupby(['col1','col2'])`"
      },
      {
        questionText: "What does `df.groupby('col')['num_col'].sum()` return?",
        options: ["Sum of 'num_col' per unique value of 'col'", "Total sum of 'col' overall", "Row count", "An error"],
        correctOption: 0,
        explanation: "The correct answer is: Sum of 'num_col' per unique value of 'col'"
      },
      {
        questionText: "What does `.get_group('X')` do after `groupby('col')`?",
        options: ["Returns all data", "Returns the subset where 'col' equals 'X'", "Returns the group with max values", "Deletes group 'X'"],
        correctOption: 1,
        explanation: "The correct answer is: Returns the subset where 'col' equals 'X'"
      },
      {
        questionText: "Which method transforms grouped data back to original shape while applying a group-wise computation?",
        options: ["`df.groupby('col').transform('mean')`", "`.reshape('mean')`", "`.expand('mean')`", "`.restore('mean')`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.groupby('col').transform('mean')`"
      },
    ],
    coding: [
      {
        questionText: "Group a sales DataFrame by \"Region\" and compute total and average sales per region.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Group by two columns and compute average salary per combination, sorted descending.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Pandas Join/Merge": {
    mcqs: [
      {
        questionText: "Function performing SQL-style joins:",
        options: ["`pd.merge(df1, df2, on='key')`", "`pd.join(df1, df2)`", "`pd.combine(df1, df2)`", "`pd.link(df1, df2)`"],
        correctOption: 0,
        explanation: "The correct answer is: `pd.merge(df1, df2, on='key')`"
      },
      {
        questionText: "What does an \"inner\" join (default) return?",
        options: ["All rows from both", "Only rows with matching keys in both", "All rows from left only", "All rows from right only"],
        correctOption: 1,
        explanation: "The correct answer is: Only rows with matching keys in both"
      },
      {
        questionText: "What does a \"left\" join return?",
        options: ["Only matches", "All rows from the left, matched data from the right (NaN if none)", "All rows from right only", "No rows"],
        correctOption: 1,
        explanation: "The correct answer is: All rows from the left, matched data from the right (NaN if none)"
      },
      {
        questionText: "What does an \"outer\" join return?",
        options: ["Only rows present in both", "All rows from both, NaN where no match on either side", "Only unmatched rows", "Only the first DataFrame's rows"],
        correctOption: 1,
        explanation: "The correct answer is: All rows from both, NaN where no match on either side"
      },
      {
        questionText: "Parameter of `pd.merge()` for shared-name join column:",
        options: ["`on='column_name'`", "`key='column_name'`", "`join_col='column_name'`", "`match='column_name'`"],
        correctOption: 0,
        explanation: "The correct answer is: `on='column_name'`"
      },
      {
        questionText: "Method joining based on index rather than a column:",
        options: ["`df1.join(df2)`", "`df1.merge_index(df2)`", "`df1.index_join(df2)`", "`df1.combine_index(df2)`"],
        correctOption: 0,
        explanation: "The correct answer is: `df1.join(df2)`"
      },
      {
        questionText: "Parameters used when join columns have different names in each DataFrame:",
        options: ["`left_on='emp_id', right_on='id'`", "`on=['emp_id','id']`", "`key_left='emp_id', key_right='id'`", "`join_on=('emp_id','id')`"],
        correctOption: 0,
        explanation: "The correct answer is: `left_on='emp_id', right_on='id'`"
      },
      {
        questionText: "Common issue when merging DataFrames sharing column names (other than the join key):",
        options: ["Nothing happens", "Pandas appends suffixes like `_x`/`_y`", "It raises an error", "It deletes overlapping columns"],
        correctOption: 1,
        explanation: "The correct answer is: Pandas appends suffixes like `_x`/`_y`"
      },
    ],
    coding: [
      {
        questionText: "Create two DataFrames (employee IDs+names; employee IDs+salaries) and merge with an inner join.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Demonstrate the difference between inner join and left join when some IDs lack matching salary records.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Pandas Concatenation": {
    mcqs: [
      {
        questionText: "Function concatenating (stacking) two or more DataFrames:",
        options: ["`pd.concat([df1, df2])`", "`pd.stack([df1, df2])`", "`pd.append_all([df1, df2])`", "`pd.combine_rows([df1, df2])`"],
        correctOption: 0,
        explanation: "The correct answer is: `pd.concat([df1, df2])`"
      },
      {
        questionText: "What does `pd.concat([df1, df2], axis=0)` do by default?",
        options: ["Stacks side by side as new columns", "Stacks on top of each other, adding rows", "Merges on a common key", "Removes duplicate columns"],
        correctOption: 1,
        explanation: "The correct answer is: Stacks on top of each other, adding rows"
      },
      {
        questionText: "What does `pd.concat([df1, df2], axis=1)` do?",
        options: ["Stacks rows", "Concatenates side by side, adding columns, aligned by index", "Deletes overlapping rows", "Performs an inner join automatically"],
        correctOption: 1,
        explanation: "The correct answer is: Concatenates side by side, adding columns, aligned by index"
      },
      {
        questionText: "What happens to the index when concatenating with default `axis=0` (no reset)?",
        options: ["Automatically reset to a fresh range", "Original indices preserved, possibly duplicated", "Raises an error", "Converts index to strings"],
        correctOption: 1,
        explanation: "The correct answer is: Original indices preserved, possibly duplicated"
      },
      {
        questionText: "Parameter that resets the resulting index to a fresh sequential range:",
        options: ["`ignore_index=True`", "`reset_index=True`", "`new_index=True`", "`fresh_index=True`"],
        correctOption: 0,
        explanation: "The correct answer is: `ignore_index=True`"
      },
      {
        questionText: "How does `pd.concat()` handle columns present in one DataFrame but not another (default `join='outer'`)?",
        options: ["Raises an error", "Includes all columns, filling NaN where missing", "Drops those columns", "Duplicates the values"],
        correctOption: 1,
        explanation: "The correct answer is: Includes all columns, filling NaN where missing"
      },
      {
        questionText: "What does `join='inner'` do in `pd.concat()`?",
        options: ["Keeps only columns/index common to all DataFrames", "Keeps all columns regardless", "Performs a key-based merge", "Sorts columns alphabetically"],
        correctOption: 0,
        explanation: "The correct answer is: Keeps only columns/index common to all DataFrames"
      },
      {
        questionText: "Key difference between `pd.concat()` and `pd.merge()`:",
        options: ["Identical", "`concat()` stacks along an axis; `merge()` combines based on matching key values (SQL-style)", "`merge()` only joins two Series", "`concat()` requires a common key"],
        correctOption: 1,
        explanation: "The correct answer is: `concat()` stacks along an axis; `merge()` combines based on matching key values (SQL-style)"
      },
    ],
    coding: [
      {
        questionText: "Concatenate two months' sales DataFrames (same columns) into one, with a fresh continuous index.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Concatenate two DataFrames side by side (`axis=1`) sharing an index but different columns.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Pandas add/remove col/index": {
    mcqs: [
      {
        questionText: "Adding a new column `total` as the sum of two existing columns:",
        options: ["`df['total'] = df['a'] + df['b']`", "`df.add_column('total', ...)`", "`df.new_col('total') = ...`", "`df.columns.add('total')`"],
        correctOption: 0,
        explanation: "The correct answer is: `df['total'] = df['a'] + df['b']`"
      },
      {
        questionText: "Inserting a new column at a specific position:",
        options: ["`df.insert(loc, column, value)`", "`df.add_at(loc, column, value)`", "`df.place(loc, column, value)`", "`df.column_insert(loc, value)`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.insert(loc, column, value)`"
      },
      {
        questionText: "Removing a column (returns a new DataFrame by default):",
        options: ["`df.drop('col', axis=1)`", "`df.remove_col('col')`", "`df.delete('col')`", "`df.pop_col('col')`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.drop('col', axis=1)`"
      },
      {
        questionText: "Removing a column AND returning its Series, modifying in place:",
        options: ["`df.pop('col')`", "`df.drop('col')`", "`df.remove('col')`", "`df.extract('col')`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.pop('col')`"
      },
      {
        questionText: "Adding a new row using the modern recommended approach (since `.append()` is deprecated):",
        options: ["`pd.concat([df, new_row_df], ignore_index=True)`", "`df.add_row(new_row_df)`", "`df.append(new_row_df)` only", "`df.insert_row(new_row_df)`"],
        correctOption: 0,
        explanation: "The correct answer is: `pd.concat([df, new_row_df], ignore_index=True)`"
      },
      {
        questionText: "Setting an existing column as the new index:",
        options: ["`df.set_index('col')`", "`df.new_index('col')`", "`df.index_from('col')`", "`df.reindex_from('col')`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.set_index('col')`"
      },
      {
        questionText: "Resetting the index back to the default integer range:",
        options: ["`df.reset_index()`", "`df.default_index()`", "`df.clear_index()`", "`df.restore_index()`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.reset_index()`"
      },
      {
        questionText: "Removing a specific row by index label:",
        options: ["`df.drop(index_label)`", "`df.drop(index_label, axis=1)`", "`df.remove_row(index_label)`", "`df.delete_row(index_label)`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.drop(index_label)`"
      },
    ],
    coding: [
      {
        questionText: "Add a \"Bonus\" column (10% of \"Salary\"), remove an unnecessary column, and set \"EmployeeID\" as the new index.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Add a new row via `pd.concat(ignore_index=True)`, then remove a row by index label using `.drop()`.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Pandas Date & Time Operations": {
    mcqs: [
      {
        questionText: "Function converting a string column to a datetime object:",
        options: ["`pd.to_datetime(df['col'])`", "`pd.convert_date(df['col'])`", "`pd.parse_date(df['col'])`", "`pd.datetime(df['col'])`"],
        correctOption: 0,
        explanation: "The correct answer is: `pd.to_datetime(df['col'])`"
      },
      {
        questionText: "Attribute extracting the year from a datetime Series:",
        options: ["`df['date'].dt.year`", "`df['date'].year()`", "`df['date'].get_year()`", "`df['date'].Year`"],
        correctOption: 0,
        explanation: "The correct answer is: `df['date'].dt.year`"
      },
      {
        questionText: "Function generating a range of dates:",
        options: ["`pd.date_range(start=..., end=...)`", "`pd.range_dates(...)`", "`pd.generate_dates(...)`", "`pd.date_list(...)`"],
        correctOption: 0,
        explanation: "The correct answer is: `pd.date_range(start=..., end=...)`"
      },
      {
        questionText: "A `Timedelta` object represents:",
        options: ["A duration/difference between two dates or times", "A single point in time only", "A date as a string", "A number format"],
        correctOption: 0,
        explanation: "The correct answer is: A duration/difference between two dates or times"
      },
      {
        questionText: "Attribute extracting the day of week (Monday=0):",
        options: ["`df['date'].dt.dayofweek`", "`.dt.weekday_num`", "`.dt.day_name_num`", "`.dt.week`"],
        correctOption: 0,
        explanation: "The correct answer is: `df['date'].dt.dayofweek`"
      },
      {
        questionText: "Setting a datetime column as the index for time-series slicing:",
        options: ["`df.set_index('date_col')` (after conversion)", "`df.set_time_index()`", "`df.time_index()`", "`df.date_as_index()`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.set_index('date_col')` (after conversion)"
      },
      {
        questionText: "Method resampling time-series data to a different frequency:",
        options: ["`df.resample('M').mean()`", "`df.reformat('M').mean()`", "`df.regroup('M').mean()`", "`df.time_convert('M').mean()`"],
        correctOption: 0,
        explanation: "The correct answer is: `df.resample('M').mean()`"
      },
      {
        questionText: "What does `pd.Timestamp.now()` return?",
        options: ["The current date/time as a Timestamp", "A date-only string", "Unix epoch time", "A random future date"],
        correctOption: 0,
        explanation: "The correct answer is: The current date/time as a Timestamp"
      },
    ],
    coding: [
      {
        questionText: "Convert date strings to datetime objects, extract year/month/day-of-week into new columns.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Set a datetime column as index for daily sales, then resample to compute total monthly sales.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Pandas Concatenating Multiple CSV Files": {
    mcqs: [
      {
        questionText: "Common approach to combine multiple same-structure CSVs into one DataFrame:",
        options: ["Use `glob` to list matching paths, read each with `pd.read_csv()`, combine with `pd.concat()`", "A single built-in function reads a whole folder automatically", "Not possible in Pandas", "Manually copy-paste between files"],
        correctOption: 0,
        explanation: "The correct answer is: Use `glob` to list matching paths, read each with `pd.read_csv()`, combine with `pd.concat()`"
      },
      {
        questionText: "Library commonly used to find files matching a pattern (e.g., `*.csv`):",
        options: ["`glob`", "`matplotlib`", "`seaborn`", "`sklearn`"],
        correctOption: 0,
        explanation: "The correct answer is: `glob`"
      },
      {
        questionText: "What does `glob.glob(\"data/*.csv\")` do?",
        options: ["Reads contents of all matching CSVs immediately", "Returns matching file paths without reading contents", "Deletes matching files", "Merges all CSVs into one"],
        correctOption: 1,
        explanation: "The correct answer is: Returns matching file paths without reading contents"
      },
      {
        questionText: "Parameter avoiding duplicate/overlapping index values when concatenating multiple CSVs:",
        options: ["`ignore_index=True`", "`reset_index=True` (passed to concat)", "`unique_index=True`", "`no_duplicate_index=True`"],
        correctOption: 0,
        explanation: "The correct answer is: `ignore_index=True`"
      },
      {
        questionText: "What should you check before concatenating multiple CSVs?",
        options: ["Nothing; always identical", "That columns (names/order) are consistent, or handle mismatches", "Same file size", "Same file name"],
        correctOption: 1,
        explanation: "The correct answer is: That columns (names/order) are consistent, or handle mismatches"
      },
      {
        questionText: "Correctly reading/concatenating a list of paths via a list comprehension:",
        options: ["`pd.concat([pd.read_csv(f) for f in file_list], ignore_index=True)`", "`pd.concat(pd.read_csv(file_list))`", "`pd.read_csv(file_list)` alone", "`pd.merge([...])`"],
        correctOption: 0,
        explanation: "The correct answer is: `pd.concat([pd.read_csv(f) for f in file_list], ignore_index=True)`"
      },
      {
        questionText: "If CSVs have slightly different columns, default `pd.concat()` behavior (`join='outer'`):",
        options: ["Raises an error immediately", "Aligns matching columns, fills NaN where a file lacks a column", "Drops all non-matching columns", "Renames columns to match"],
        correctOption: 1,
        explanation: "The correct answer is: Aligns matching columns, fills NaN where a file lacks a column"
      },
      {
        questionText: "Method to verify no unexpected duplicate rows after concatenating multiple monthly CSVs:",
        options: ["`combined_df.duplicated().sum()`", "`combined_df.check_dupes()`", "`combined_df.validate()`", "`combined_df.is_unique()`"],
        correctOption: 0,
        explanation: "The correct answer is: `combined_df.duplicated().sum()`"
      },
    ],
    coding: [
      {
        questionText: "Use `glob` to find all CSVs in `sales_data/`, read and concatenate into one DataFrame with a fresh index.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Simulate 3 monthly CSVs (as DataFrames), concatenate, remove duplicate rows, and save the combined result to a new CSV.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Machine Learning – Introduction": {
    mcqs: [
      {
        questionText: "Machine Learning is best defined as:",
        options: ["A field giving computers the ability to learn from data without explicit rules for every case", "Manually coding every possible decision rule", "A database query language", "A hardware accelerator type"],
        correctOption: 0,
        explanation: "The correct answer is: A field giving computers the ability to learn from data without explicit rules for every case"
      },
      {
        questionText: "What makes machine learning challenging?",
        options: ["It requires no data or math", "Understanding statistics, choosing algorithms, handling messy data, and tuning models", "It's impossible to learn", "Only memorizing syntax"],
        correctOption: 1,
        explanation: "The correct answer is: Understanding statistics, choosing algorithms, handling messy data, and tuning models"
      },
      {
        questionText: "An \"algorithm\" is best described as:",
        options: ["A random guess with no logic", "A well-defined step-by-step procedure to solve a problem/learn patterns", "A hardware type", "A file format"],
        correctOption: 1,
        explanation: "The correct answer is: A well-defined step-by-step procedure to solve a problem/learn patterns"
      },
      {
        questionText: "Common real-world ML-driven program:",
        options: ["Recommendation engines, fraud detection, spam filters", "Manually formatted static reports", "Basic file compression", "Hardcoded lookup tables"],
        correctOption: 0,
        explanation: "The correct answer is: Recommendation engines, fraud detection, spam filters"
      },
      {
        questionText: "Traditional programming vs. ML:",
        options: ["Traditional programming uses explicitly written rules; ML derives patterns from data", "They are identical", "ML never uses code", "Traditional programming always needs more data"],
        correctOption: 0,
        explanation: "The correct answer is: Traditional programming uses explicitly written rules; ML derives patterns from data"
      },
      {
        questionText: "Prerequisite skill for learning ML effectively:",
        options: ["Basic programming and foundational statistics/math", "Only graphic design", "Only typing speed", "No skills required"],
        correctOption: 0,
        explanation: "The correct answer is: Basic programming and foundational statistics/math"
      },
      {
        questionText: "ML models are evaluated on:",
        options: ["Memorizing training data only", "Generalizing well to new, unseen data", "Lines of code written", "Codebase size"],
        correctOption: 1,
        explanation: "The correct answer is: Generalizing well to new, unseen data"
      },
      {
        questionText: "Industries commonly applying ML:",
        options: ["Healthcare, finance, retail, and many others", "Only software", "None currently", "Only government"],
        correctOption: 0,
        explanation: "The correct answer is: Healthcare, finance, retail, and many others"
      },
    ],
    coding: [
      {
        questionText: "Print scikit-learn's version and list 3 built-in datasets available in `sklearn.datasets`.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Load the iris dataset via `sklearn.datasets.load_iris`; print the feature-data shape and target class names.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["class", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Machine Learning – Terminology": {
    mcqs: [
      {
        questionText: "A \"feature\" is:",
        options: ["The output/target being predicted", "An input variable used to make a prediction", "The trained model", "A type of algorithm"],
        correctOption: 1,
        explanation: "The correct answer is: An input variable used to make a prediction"
      },
      {
        questionText: "A \"label\" (target) is:",
        options: ["An input variable", "The known output value the model predicts", "The dataset's file name", "A hyperparameter"],
        correctOption: 1,
        explanation: "The correct answer is: The known output value the model predicts"
      },
      {
        questionText: "A \"model\" is:",
        options: ["The raw unprocessed dataset", "The learned system that makes predictions on new data", "A database", "A visualization chart"],
        correctOption: 1,
        explanation: "The correct answer is: The learned system that makes predictions on new data"
      },
      {
        questionText: "\"Training\" refers to:",
        options: ["Testing final accuracy only", "Fitting a model by adjusting internal parameters to minimize error", "Cleaning the dataset", "Deploying to production"],
        correctOption: 1,
        explanation: "The correct answer is: Fitting a model by adjusting internal parameters to minimize error"
      },
      {
        questionText: "A \"hyperparameter\" is:",
        options: ["A parameter learned automatically from data", "A configuration set before training (e.g., learning rate, tree count)", "The target column", "The final accuracy score"],
        correctOption: 1,
        explanation: "The correct answer is: A configuration set before training (e.g., learning rate, tree count)"
      },
      {
        questionText: "\"Inference\"/\"prediction\" refers to:",
        options: ["Using a trained model on new, unseen data", "Collecting data", "Visualizing data", "Writing code"],
        correctOption: 0,
        explanation: "The correct answer is: Using a trained model on new, unseen data"
      },
      {
        questionText: "An \"instance\"/\"sample\" is:",
        options: ["A single row representing one data point", "An entire dataset", "A type of algorithm", "A hyperparameter"],
        correctOption: 0,
        explanation: "The correct answer is: A single row representing one data point"
      },
      {
        questionText: "\"Generalization\" refers to:",
        options: ["Performing well only on training data", "Performing well on new, unseen data", "The dataset size", "The number of features"],
        correctOption: 1,
        explanation: "The correct answer is: Performing well on new, unseen data"
      },
    ],
    coding: [
      {
        questionText: "Load the iris dataset; clearly print which columns are \"features\" and which is the \"label\".",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Define a hyperparameter dictionary (e.g., `{\"n_estimators\": 100, \"max_depth\": 5}`); print each name/value distinguishing them from \"learned parameters\".",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Data and ML Algorithms": {
    mcqs: [
      {
        questionText: "\"Structured\" data best refers to:",
        options: ["Data organized in rows/columns (spreadsheets/SQL tables)", "Free-form images with no structure", "Only audio", "Only unstructured social media text"],
        correctOption: 0,
        explanation: "The correct answer is: Data organized in rows/columns (spreadsheets/SQL tables)"
      },
      {
        questionText: "\"Unstructured\" data best refers to:",
        options: ["Data with a fixed schema", "Data with no predefined structure (raw text, images, audio)", "Numeric tabular data only", "Categorical labels only"],
        correctOption: 1,
        explanation: "The correct answer is: Data with no predefined structure (raw text, images, audio)"
      },
      {
        questionText: "ML category learning from labeled input-output pairs:",
        options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning without feedback", "Rule-based systems"],
        correctOption: 0,
        explanation: "The correct answer is: Supervised Learning"
      },
      {
        questionText: "ML category finding hidden patterns without labeled outputs:",
        options: ["Supervised Learning", "Unsupervised Learning", "Semi-labeled learning", "None of these"],
        correctOption: 1,
        explanation: "The correct answer is: Unsupervised Learning"
      },
      {
        questionText: "Example of a supervised learning algorithm:",
        options: ["Linear Regression", "K-Means Clustering", "Apriori algorithm", "PCA"],
        correctOption: 0,
        explanation: "The correct answer is: Linear Regression"
      },
      {
        questionText: "Example of an unsupervised learning algorithm:",
        options: ["Logistic Regression", "K-Means Clustering", "Decision Tree Classifier", "SVM"],
        correctOption: 1,
        explanation: "The correct answer is: K-Means Clustering"
      },
      {
        questionText: "Reinforcement Learning primarily involves:",
        options: ["Learning from labeled examples only", "An agent learning via actions/rewards in an environment", "Only clustering", "Only dimensionality reduction"],
        correctOption: 1,
        explanation: "The correct answer is: An agent learning via actions/rewards in an environment"
      },
      {
        questionText: "Choosing the right ML algorithm typically depends on:",
        options: ["Random chance", "The problem type, data available, and interpretability/performance needs", "Always the most complex algorithm", "The programming language only"],
        correctOption: 1,
        explanation: "The correct answer is: The problem type, data available, and interpretability/performance needs"
      },
    ],
    coding: [
      {
        questionText: "Create a small structured dataset (list of dicts) and convert to a Pandas DataFrame.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Fit `LinearRegression` (supervised) and `KMeans` (unsupervised) on the same synthetic numeric dataset, printing both outputs.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Learning Function": {
    mcqs: [
      {
        questionText: "\"Learning a function\" refers to:",
        options: ["Writing Python functions manually", "The model discovering an approximate mapping f(X)→Y from training data", "Writing SQL queries", "Formatting text data"],
        correctOption: 1,
        explanation: "The correct answer is: The model discovering an approximate mapping f(X)→Y from training data"
      },
      {
        questionText: "General goal of \"learning a function\":",
        options: ["Perfectly memorizing every training example", "Approximating the true relationship well enough to generalize to new data", "Minimizing feature count regardless of accuracy", "Maximizing training time"],
        correctOption: 1,
        explanation: "The correct answer is: Approximating the true relationship well enough to generalize to new data"
      },
      {
        questionText: "Why can we usually only approximate the true function?",
        options: ["Real-world data has noise and the true relationship is often unknown/complex", "Python cannot represent functions", "All functions are linear", "Computers can't calculate"],
        correctOption: 0,
        explanation: "The correct answer is: Real-world data has noise and the true relationship is often unknown/complex"
      },
      {
        questionText: "Purpose of a \"learning algorithm\":",
        options: ["Search for/estimate a mapping function, adjusting parameters using training data", "Store data in a database", "Visualize a chart", "Manage file permissions"],
        correctOption: 0,
        explanation: "The correct answer is: Search for/estimate a mapping function, adjusting parameters using training data"
      },
      {
        questionText: "Once learned, a function is used to:",
        options: ["Be discarded", "Predict outputs for new, unseen inputs", "Clean data only", "Replace evaluation entirely"],
        correctOption: 1,
        explanation: "The correct answer is: Predict outputs for new, unseen inputs"
      },
      {
        questionText: "Role of \"cost/loss\" in learning a function:",
        options: ["None", "Quantifies prediction error, guiding parameter updates", "Only affects visualization", "Determines dataset size"],
        correctOption: 1,
        explanation: "The correct answer is: Quantifies prediction error, guiding parameter updates"
      },
      {
        questionText: "Example of a simple \"learned function\" in linear regression:",
        options: ["y = mx + c, with m and c learned from data", "A random mapping with no structure", "A fixed lookup table", "An unrelated database query"],
        correctOption: 0,
        explanation: "The correct answer is: y = mx + c, with m and c learned from data"
      },
      {
        questionText: "If a function fits training data well but performs poorly on new data:",
        options: ["It has generalized perfectly", "It may be overfitting to training noise", "This is always desired", "The function is too simple"],
        correctOption: 1,
        explanation: "The correct answer is: It may be overfitting to training noise"
      },
    ],
    coding: [
      {
        questionText: "Generate noisy data from y=3x+5 and use `numpy.polyfit` (or `LinearRegression`) to learn the slope/intercept.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Use the learned function to predict new x-values and compare to the true noise-free function's values.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Types of the Model (Feature and Label)": {
    mcqs: [
      {
        questionText: "In supervised learning, \"features\" are:",
        options: ["The single output being predicted", "The input columns used to make a prediction", "The row index", "The dataset's file name"],
        correctOption: 1,
        explanation: "The correct answer is: The input columns used to make a prediction"
      },
      {
        questionText: "In supervised learning, the \"label\" is:",
        options: ["An input variable", "The known correct output for each training example", "A hyperparameter", "The model's name"],
        correctOption: 1,
        explanation: "The correct answer is: The known correct output for each training example"
      },
      {
        questionText: "Model type predicting a continuous label (e.g., house price):",
        options: ["A regression model", "A clustering model", "A classification model", "An association rule model"],
        correctOption: 0,
        explanation: "The correct answer is: A regression model"
      },
      {
        questionText: "Model type predicting a discrete categorical label (spam/not spam):",
        options: ["A classification model", "A regression model", "A dimensionality reduction model", "An unlabeled clustering model"],
        correctOption: 0,
        explanation: "The correct answer is: A classification model"
      },
      {
        questionText: "In unsupervised learning:",
        options: ["Data has both features and labels", "Data has features only; the model finds structure on its own", "Data has only labels", "It requires reinforcement signals only"],
        correctOption: 1,
        explanation: "The correct answer is: Data has features only; the model finds structure on its own"
      },
      {
        questionText: "In predicting house prices from sq. footage and location, the label is:",
        options: ["Square footage", "Location", "House price", "None; no label exists"],
        correctOption: 2,
        explanation: "The correct answer is: House price"
      },
      {
        questionText: "In classification, the number of classes for the label can be:",
        options: ["Only exactly two always", "Two (binary) or more (multiclass)", "Always continuous/infinite", "Always zero"],
        correctOption: 1,
        explanation: "The correct answer is: Two (binary) or more (multiclass)"
      },
      {
        questionText: "Which is most likely a \"feature\" (not label) in a churn model?",
        options: ["Whether the customer churned", "The customer's monthly usage minutes", "Both are equally likely labels", "Neither can be used in ML"],
        correctOption: 1,
        explanation: "The correct answer is: The customer's monthly usage minutes"
      },
    ],
    coding: [
      {
        questionText: "Load a sample customer dataset (age, income, \"purchased\"); separate features (X) from label (y).",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Create one regression-suited and one classification-suited dataset; print features/label for each and note the appropriate model type.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "class", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Life Cycle": {
    mcqs: [
      {
        questionText: "Early stage in the ML life cycle:",
        options: ["Model Deployment", "Data Collection", "Hyperparameter tuning only", "Model retirement"],
        correctOption: 1,
        explanation: "The correct answer is: Data Collection"
      },
      {
        questionText: "\"Data Wrangling\" refers to:",
        options: ["Deploying the final model", "Cleaning/transforming raw data into a usable format", "Selecting the final algorithm", "Visualizing trained model accuracy"],
        correctOption: 1,
        explanation: "The correct answer is: Cleaning/transforming raw data into a usable format"
      },
      {
        questionText: "Stage typically after data collection/preparation:",
        options: ["Model Deployment", "EDA / Data Analysis", "Model retirement", "Hyperparameter tuning, skipping analysis"],
        correctOption: 1,
        explanation: "The correct answer is: EDA / Data Analysis"
      },
      {
        questionText: "Stage involving choosing/training an algorithm on prepared data:",
        options: ["Model Building/Training", "Data Collection", "Data Wrangling", "Problem framing only"],
        correctOption: 0,
        explanation: "The correct answer is: Model Building/Training"
      },
      {
        questionText: "Purpose of \"Model Evaluation\":",
        options: ["Collect more raw data", "Assess trained-model performance on a held-out set with appropriate metrics", "Clean the dataset", "Deploy the model with no checks"],
        correctOption: 1,
        explanation: "The correct answer is: Assess trained-model performance on a held-out set with appropriate metrics"
      },
      {
        questionText: "\"Model Deployment\" refers to:",
        options: ["Collecting the initial dataset", "Making the trained/evaluated model available in a production environment", "Cleaning missing values", "Selecting hyperparameters"],
        correctOption: 1,
        explanation: "The correct answer is: Making the trained/evaluated model available in a production environment"
      },
      {
        questionText: "Why is the ML life cycle iterative rather than linear?",
        options: ["Each stage is done once, in strict order", "Later-stage insights often require revisiting earlier stages", "Models never need re-evaluation", "Deployment always comes first"],
        correctOption: 1,
        explanation: "The correct answer is: Later-stage insights often require revisiting earlier stages"
      },
      {
        questionText: "\"Data Preparation\" as a stage best describes:",
        options: ["Deploying to end users", "Organizing/cleaning/transforming collected data for analysis/modeling", "Monitoring deployed performance", "Selecting the production server"],
        correctOption: 1,
        explanation: "The correct answer is: Organizing/cleaning/transforming collected data for analysis/modeling"
      },
    ],
    coding: [
      {
        questionText: "Simulate the life cycle as a sequence of function calls (`collect_data()`, `clean_data()`, `analyze_data()`, `train_model()`, `evaluate_model()`), printing a message at each stage.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Perform \"Data Wrangling\" on a raw, messy sample dataset (missing values, inconsistent formatting) to produce a clean DataFrame.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Train & Test Datasets": {
    mcqs: [
      {
        questionText: "Why split a dataset into train/test sets?",
        options: ["To make the dataset artificially larger", "Train on one portion, evaluate on unseen data to estimate generalization", "It's unnecessary", "To remove all outliers automatically"],
        correctOption: 1,
        explanation: "The correct answer is: Train on one portion, evaluate on unseen data to estimate generalization"
      },
      {
        questionText: "scikit-learn function to split a dataset:",
        options: ["`train_test_split()`", "`split_dataset()`", "`train_test_divide()`", "`data_split()`"],
        correctOption: 0,
        explanation: "The correct answer is: `train_test_split()`"
      },
      {
        questionText: "Common train-test split ratio in practice:",
        options: ["50/50 always", "Something like 80/20 or 70/30, varying by need", "100% train, 0% test always", "10/90"],
        correctOption: 1,
        explanation: "The correct answer is: Something like 80/20 or 70/30, varying by need"
      },
      {
        questionText: "What does `random_state` control in `train_test_split()`?",
        options: ["The split ratio", "Ensures reproducibility of the split", "The number of features", "Accuracy directly"],
        correctOption: 1,
        explanation: "The correct answer is: Ensures reproducibility of the split"
      },
      {
        questionText: "Why must the test set NOT be used during training/tuning?",
        options: ["It doesn't matter", "Doing so causes data leakage and overly optimistic estimates", "The test set is identical to the train set anyway", "It has no purpose"],
        correctOption: 1,
        explanation: "The correct answer is: Doing so causes data leakage and overly optimistic estimates"
      },
      {
        questionText: "Purpose of a separate \"validation set\":",
        options: ["Same as a test set", "Tuning hyperparameters/decisions during development, keeping the test set untouched until final evaluation", "Only for visualization", "Only used in unsupervised learning"],
        correctOption: 1,
        explanation: "The correct answer is: Tuning hyperparameters/decisions during development, keeping the test set untouched until final evaluation"
      },
      {
        questionText: "Preferred technique over a single split for small datasets:",
        options: ["K-Fold Cross-Validation", "Ignoring evaluation entirely", "Test set = 99%", "Duplicating the dataset"],
        correctOption: 0,
        explanation: "The correct answer is: K-Fold Cross-Validation"
      },
      {
        questionText: "What does `stratify` achieve in `train_test_split()`?",
        options: ["No real effect", "Ensures class proportions match between train/test sets", "Removes minority classes entirely", "Forces a 50/50 class split regardless of original data"],
        correctOption: 1,
        explanation: "The correct answer is: Ensures class proportions match between train/test sets"
      },
    ],
    coding: [
      {
        questionText: "Split a sample dataset 80/20 with `random_state=42`; print the shapes of the resulting sets.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Split a classification dataset using `stratify=y`; print class distributions of the original data and both splits.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["class", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "R Value": {
    mcqs: [
      {
        questionText: "The \"R value\" (correlation coefficient) measures:",
        options: ["The exact predicted y value", "The strength/direction of a linear relationship between two variables", "The number of features", "Training time"],
        correctOption: 1,
        explanation: "The correct answer is: The strength/direction of a linear relationship between two variables"
      },
      {
        questionText: "Range of possible R values:",
        options: ["0 to 1", "−1 to 1", "−infinity to +infinity", "0 to 100"],
        correctOption: 1,
        explanation: "The correct answer is: −1 to 1"
      },
      {
        questionText: "R close to 0 indicates:",
        options: ["A strong linear relationship", "Little to no linear relationship", "A perfect negative relationship", "A calculation error"],
        correctOption: 1,
        explanation: "The correct answer is: Little to no linear relationship"
      },
      {
        questionText: "R² (R-squared) represents:",
        options: ["The same thing as R with no difference", "The proportion of variance in y explained by the predictor(s)", "The number of outliers", "The learning rate"],
        correctOption: 1,
        explanation: "The correct answer is: The proportion of variance in y explained by the predictor(s)"
      },
      {
        questionText: "R = 0.9 suggests:",
        options: ["A weak negative relationship", "A strong positive linear relationship", "No relationship", "A perfect negative relationship"],
        correctOption: 1,
        explanation: "The correct answer is: A strong positive linear relationship"
      },
      {
        questionText: "Can regression be used with a low R value?",
        options: ["No, R must be exactly 1", "Yes, but a low R suggests the linear model may not fit well and predictions may be less reliable", "R has no bearing on applicability", "Regression requires negative R"],
        correctOption: 1,
        explanation: "The correct answer is: Yes, but a low R suggests the linear model may not fit well and predictions may be less reliable"
      },
      {
        questionText: "Which pair would have an R value near −1?",
        options: ["Two variables increasing together", "One increasing while the other consistently decreases in a strong linear pattern", "Two unrelated random variables", "A variable vs. itself"],
        correctOption: 1,
        explanation: "The correct answer is: One increasing while the other consistently decreases in a strong linear pattern"
      },
      {
        questionText: "Computing the correlation between two Pandas columns:",
        options: ["`df['col1'].corr(df['col2'])`", "`df.correlate('col1','col2')`", "`df.r_value('col1','col2')`", "`df['col1'].relation(df['col2'])`"],
        correctOption: 0,
        explanation: "The correct answer is: `df['col1'].corr(df['col2'])`"
      },
    ],
    coding: [
      {
        questionText: "Compute the R value between two numeric columns of a sample DataFrame; interpret weak/moderate/strong.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Generate two strongly correlated synthetic variables and two unrelated ones; compute and compare R for each pair.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Simple Linear Regression": {
    mcqs: [
      {
        questionText: "Simple Linear Regression models:",
        options: ["Multiple independent variables and one dependent variable", "One independent variable and one dependent variable, typically y = mx + c", "Only categorical variables", "Two dependent variables, no independent variable"],
        correctOption: 1,
        explanation: "The correct answer is: One independent variable and one dependent variable, typically y = mx + c"
      },
      {
        questionText: "In y = mx + c, 'm' represents:",
        options: ["The y-intercept", "The slope — change in y per unit change in x", "The error term", "The R value"],
        correctOption: 1,
        explanation: "The correct answer is: The slope — change in y per unit change in x"
      },
      {
        questionText: "In y = mx + c, 'c' represents:",
        options: ["The slope", "The y-intercept — value of y when x = 0", "The correlation coefficient", "The number of features"],
        correctOption: 1,
        explanation: "The correct answer is: The y-intercept — value of y when x = 0"
      },
      {
        questionText: "Method commonly used to find the best-fit m and c:",
        options: ["Ordinary Least Squares (minimizing sum of squared residuals)", "Random guessing", "Sorting the data", "Clustering the data points"],
        correctOption: 0,
        explanation: "The correct answer is: Ordinary Least Squares (minimizing sum of squared residuals)"
      },
      {
        questionText: "scikit-learn class implementing Simple Linear Regression:",
        options: ["`LinearRegression` from `sklearn.linear_model`", "`LogisticRegression`", "`KMeans`", "`DecisionTreeClassifier`"],
        correctOption: 0,
        explanation: "The correct answer is: `LinearRegression` from `sklearn.linear_model`"
      },
      {
        questionText: "Attribute of a fitted `LinearRegression` giving the learned slope(s):",
        options: ["`model.coef_`", "`model.slope`", "`model.m_value`", "`model.weights`"],
        correctOption: 0,
        explanation: "The correct answer is: `model.coef_`"
      },
      {
        questionText: "Attribute giving the y-intercept:",
        options: ["`model.intercept_`", "`model.c_value`", "`model.bias`", "`model.origin`"],
        correctOption: 0,
        explanation: "The correct answer is: `model.intercept_`"
      },
      {
        questionText: "The \"residual\" is:",
        options: ["The predicted value", "The difference between actual and predicted values", "The slope", "The correlation coefficient"],
        correctOption: 1,
        explanation: "The correct answer is: The difference between actual and predicted values"
      },
    ],
    coding: [
      {
        questionText: "Fit a `LinearRegression` model on a salary-vs-experience dataset; print the learned slope and intercept.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Predict salary for a new experience value; plot data points and the fitted regression line with Matplotlib.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Polynomial Features": {
    mcqs: [
      {
        questionText: "Polynomial Features are used to:",
        options: ["Model linear relationships only", "Capture non-linear relationships by adding terms like x², x³", "Remove outliers automatically", "Reduce the number of features"],
        correctOption: 1,
        explanation: "The correct answer is: Capture non-linear relationships by adding terms like x², x³"
      },
      {
        questionText: "scikit-learn class generating polynomial features:",
        options: ["`PolynomialFeatures` from `sklearn.preprocessing`", "`PolyModel`", "`FeatureExpander`", "`NonLinearTransform`"],
        correctOption: 0,
        explanation: "The correct answer is: `PolynomialFeatures` from `sklearn.preprocessing`"
      },
      {
        questionText: "What does the `degree` parameter control?",
        options: ["Number of samples used", "Highest power to raise original features when generating new terms", "The learning rate", "Number of clusters"],
        correctOption: 1,
        explanation: "The correct answer is: Highest power to raise original features when generating new terms"
      },
      {
        questionText: "After generating polynomial features, which model typically still fits the data?",
        options: ["`LinearRegression`, fitting a linear model to the expanded features", "`KMeans`", "`DecisionTreeClassifier` only", "No further model needed"],
        correctOption: 0,
        explanation: "The correct answer is: `LinearRegression`, fitting a linear model to the expanded features"
      },
      {
        questionText: "Risk of a very high polynomial degree:",
        options: ["Model always underfits", "Model may overfit, capturing noise instead of the true pattern", "Model can't make predictions", "No risk at all"],
        correctOption: 1,
        explanation: "The correct answer is: Model may overfit, capturing noise instead of the true pattern"
      },
      {
        questionText: "Why prefer polynomial regression over simple linear regression?",
        options: ["The relationship is clearly non-linear (curved)", "The relationship is perfectly linear", "There is no relationship", "The dataset has no numeric features"],
        correctOption: 0,
        explanation: "The correct answer is: The relationship is clearly non-linear (curved)"
      },
      {
        questionText: "Typical shape captured by a degree-2 polynomial regression:",
        options: ["A straight line only", "A parabolic (curved) pattern", "A perfectly circular pattern", "No pattern at all"],
        correctOption: 1,
        explanation: "The correct answer is: A parabolic (curved) pattern"
      },
      {
        questionText: "Comparing polynomial vs. simple linear regression visually, you'd expect the fitted curve to:",
        options: ["Be identical straight lines", "Bend to better fit non-linear data", "Scatter randomly", "Be a vertical line"],
        correctOption: 1,
        explanation: "The correct answer is: Bend to better fit non-linear data"
      },
    ],
    coding: [
      {
        questionText: "Fit a degree-2 `PolynomialFeatures` + `LinearRegression` model on a quadratic synthetic dataset with noise.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Compare simple Linear Regression and degree-3 Polynomial Regression on the same non-linear dataset, plotting both curves.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Multiple Linear Regression": {
    mcqs: [
      {
        questionText: "Multiple Linear Regression differs from Simple Linear Regression by:",
        options: ["Using only one independent variable", "Using two or more independent variables to predict one dependent variable", "Being unimplementable in scikit-learn", "Only working with categorical targets"],
        correctOption: 1,
        explanation: "The correct answer is: Using two or more independent variables to predict one dependent variable"
      },
      {
        questionText: "General equation form:",
        options: ["y = mx + c", "y = b0 + b1·x1 + b2·x2 + ... + bn·xn", "y = x² + c only", "y = a constant, no variables"],
        correctOption: 1,
        explanation: "The correct answer is: y = b0 + b1·x1 + b2·x2 + ... + bn·xn"
      },
      {
        questionText: "scikit-learn class for Multiple Linear Regression:",
        options: ["`LinearRegression` (handles single and multiple features)", "`MultipleLinearRegression` (distinct class)", "`LogisticRegression`", "`KMeans`"],
        correctOption: 0,
        explanation: "The correct answer is: `LinearRegression` (handles single and multiple features)"
      },
      {
        questionText: "Each coefficient (b1, b2, etc.) represents:",
        options: ["The overall R value", "Estimated change in y for a one-unit change in that variable, holding others constant", "The intercept", "The number of samples"],
        correctOption: 1,
        explanation: "The correct answer is: Estimated change in y for a one-unit change in that variable, holding others constant"
      },
      {
        questionText: "Why is checking multicollinearity important?",
        options: ["Not important", "High multicollinearity destabilizes coefficient estimates and interpretation", "Always improves the model", "Only matters for classification"],
        correctOption: 1,
        explanation: "The correct answer is: High multicollinearity destabilizes coefficient estimates and interpretation"
      },
      {
        questionText: "Metric accounting for the number of predictors when assessing fit:",
        options: ["Adjusted R-squared", "Raw accuracy only", "Silhouette score", "Confusion matrix"],
        correctOption: 0,
        explanation: "The correct answer is: Adjusted R-squared"
      },
      {
        questionText: "What must be done with categorical independent variables first?",
        options: ["Used directly as strings", "Encoded numerically (dummy variables/one-hot encoding)", "Removed entirely", "Converted into images"],
        correctOption: 1,
        explanation: "The correct answer is: Encoded numerically (dummy variables/one-hot encoding)"
      },
      {
        questionText: "High training R² but poor test performance suggests:",
        options: ["Perfect generalization", "Possible overfitting", "The R² was miscalculated and should be ignored", "The test data is invalid"],
        correctOption: 1,
        explanation: "The correct answer is: Possible overfitting"
      },
    ],
    coding: [
      {
        questionText: "Fit a Multiple Linear Regression model with 3+ independent variables (size, bedrooms, age) predicting house price; print coefficients/intercept.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Compute and print R² and Adjusted R² for the fitted model given predictor count and sample size.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Pickling and Unpickling": {
    mcqs: [
      {
        questionText: "\"Pickling\" refers to:",
        options: ["Preserving food", "Serializing a Python object into a byte stream for saving to disk", "Deleting a Python object", "Compiling Python code"],
        correctOption: 1,
        explanation: "The correct answer is: Serializing a Python object into a byte stream for saving to disk"
      },
      {
        questionText: "\"Unpickling\" refers to:",
        options: ["Converting an object to bytes", "Deserializing bytes back into the original Python object", "Deleting a saved file", "Compressing an image"],
        correctOption: 1,
        explanation: "The correct answer is: Deserializing bytes back into the original Python object"
      },
      {
        questionText: "Module used for pickling/unpickling:",
        options: ["`pickle`", "`json` only", "`pandas`", "`os`"],
        correctOption: 0,
        explanation: "The correct answer is: `pickle`"
      },
      {
        questionText: "Function to save (pickle) an object:",
        options: ["`pickle.dump(obj, file)`", "`pickle.save(obj, file)`", "`pickle.write(obj, file)`", "`pickle.export(obj, file)`"],
        correctOption: 0,
        explanation: "The correct answer is: `pickle.dump(obj, file)`"
      },
      {
        questionText: "Function to load (unpickle) an object:",
        options: ["`pickle.load(file)`", "`pickle.read(file)`", "`pickle.open(file)`", "`pickle.restore(file)`"],
        correctOption: 0,
        explanation: "The correct answer is: `pickle.load(file)`"
      },
      {
        questionText: "Why is pickling useful for ML models?",
        options: ["No use in ML", "Saves a trained model to disk to reload later without retraining", "Converts the model to a database", "Auto-improves accuracy"],
        correctOption: 1,
        explanation: "The correct answer is: Saves a trained model to disk to reload later without retraining"
      },
      {
        questionText: "Security consideration when unpickling:",
        options: ["No concerns", "Unpickling untrusted data can execute arbitrary code", "Pickling always encrypts data", "Pickled files can't be tampered with"],
        correctOption: 1,
        explanation: "The correct answer is: Unpickling untrusted data can execute arbitrary code"
      },
      {
        questionText: "File mode typically used for pickling/unpickling:",
        options: ["Binary mode, `'wb'`/`'rb'`", "Text mode only", "Append mode only", "Doesn't matter"],
        correctOption: 0,
        explanation: "The correct answer is: Binary mode, `'wb'`/`'rb'`"
      },
    ],
    coding: [
      {
        questionText: "Train a `LinearRegression` model, pickle it to `model.pkl`, unpickle it, and confirm matching predictions.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Pickle a dict of model metadata (feature names, training date, accuracy), unpickle it, and print the contents.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Save Model using Joblib and Pickling": {
    mcqs: [
      {
        questionText: "Joblib is preferred over `pickle` for scikit-learn models because it:",
        options: ["Cannot save any object", "Is more efficient for objects with large NumPy arrays", "Only works with strings", "Requires no imports"],
        correctOption: 1,
        explanation: "The correct answer is: Is more efficient for objects with large NumPy arrays"
      },
      {
        questionText: "Function to save a model with joblib:",
        options: ["`joblib.dump(model, 'model.joblib')`", "`joblib.save(...)`", "`joblib.write(...)`", "`joblib.export(...)`"],
        correctOption: 0,
        explanation: "The correct answer is: `joblib.dump(model, 'model.joblib')`"
      },
      {
        questionText: "Function to load a model saved with joblib:",
        options: ["`joblib.load('model.joblib')`", "`joblib.read(...)`", "`joblib.open(...)`", "`joblib.restore(...)`"],
        correctOption: 0,
        explanation: "The correct answer is: `joblib.load('model.joblib')`"
      },
      {
        questionText: "Module import needed to use joblib:",
        options: ["`import joblib`", "`import pickle_lib`", "`import model_saver`", "`import sklearn.save`"],
        correctOption: 0,
        explanation: "The correct answer is: `import joblib`"
      },
      {
        questionText: "Key benefit of saving a trained model to disk:",
        options: ["None", "Avoids retraining every time it's needed, saving time/resources", "Auto-increases accuracy", "Auto-converts to a web app"],
        correctOption: 1,
        explanation: "The correct answer is: Avoids retraining every time it's needed, saving time/resources"
      },
      {
        questionText: "What should you ensure about library versions when loading a saved model in production?",
        options: ["Versions don't matter", "They should match/be compatible with the versions used to train/save it", "Always use the newest version regardless", "Irrelevant to pickled/joblib models"],
        correctOption: 1,
        explanation: "The correct answer is: They should match/be compatible with the versions used to train/save it"
      },
      {
        questionText: "What else is often saved alongside the model for consistent predictions?",
        options: ["Nothing else", "Preprocessing objects like scalers/encoders fitted on training data", "The raw unprocessed dataset only", "The Python interpreter"],
        correctOption: 1,
        explanation: "The correct answer is: Preprocessing objects like scalers/encoders fitted on training data"
      },
      {
        questionText: "Common file extension used with joblib:",
        options: ["`.joblib` or `.pkl`", "`.exe`", "`.csv` only", "`.txt` only"],
        correctOption: 0,
        explanation: "The correct answer is: `.joblib` or `.pkl`"
      },
    ],
    coding: [
      {
        questionText: "Train a classifier, save with `joblib.dump()`, load with `joblib.load()`, and verify identical predictions.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["class", "with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Save a model AND a fitted `StandardScaler` with joblib; load both back and use them together on new data.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Cost Function": {
    mcqs: [
      {
        questionText: "A cost function is used to:",
        options: ["Visualize the dataset", "Quantify how far predictions are from actual values, guiding training", "Store the dataset", "Split data into train/test"],
        correctOption: 1,
        explanation: "The correct answer is: Quantify how far predictions are from actual values, guiding training"
      },
      {
        questionText: "Goal of training with respect to the cost function:",
        options: ["Maximize the cost", "Minimize the cost, finding parameters producing closest predictions", "Keep cost constant", "No relation to training goals"],
        correctOption: 1,
        explanation: "The correct answer is: Minimize the cost, finding parameters producing closest predictions"
      },
      {
        questionText: "Why not use raw differences (actual − predicted) summed, without squaring/absolute value?",
        options: ["Works perfectly fine as-is", "Positive/negative differences could cancel out, misrepresenting true error", "Raw differences are always positive", "It's mathematically undefined"],
        correctOption: 1,
        explanation: "The correct answer is: Positive/negative differences could cancel out, misrepresenting true error"
      },
      {
        questionText: "Technique commonly used to iteratively minimize a cost function:",
        options: ["Gradient Descent", "K-Means Clustering", "Data normalization", "One-Hot Encoding"],
        correctOption: 0,
        explanation: "The correct answer is: Gradient Descent"
      },
      {
        questionText: "A cost function value near zero typically indicates:",
        options: ["Predictions far from actual values", "Predictions very close to actual values", "No target variable exists", "The model hasn't been trained"],
        correctOption: 1,
        explanation: "The correct answer is: Predictions very close to actual values"
      },
      {
        questionText: "Commonly used cost function for regression:",
        options: ["Mean Squared Error", "Cross-Entropy Loss (more common for classification)", "Silhouette Score", "Adjusted R-squared"],
        correctOption: 0,
        explanation: "The correct answer is: Mean Squared Error"
      },
      {
        questionText: "Why is choosing an appropriate cost function important?",
        options: ["No importance; any works for any problem", "Different problems need cost functions suited to output nature, to properly guide learning", "Only matters for unsupervised learning", "Only matters for visualization"],
        correctOption: 1,
        explanation: "The correct answer is: Different problems need cost functions suited to output nature, to properly guide learning"
      },
      {
        questionText: "During training, as the cost function is minimized, model parameters:",
        options: ["Remain fixed", "Are iteratively adjusted to reduce cost over successive iterations", "Are randomly reset each iteration", "Are deleted"],
        correctOption: 1,
        explanation: "The correct answer is: Are iteratively adjusted to reduce cost over successive iterations"
      },
    ],
    coding: [
      {
        questionText: "Manually implement Mean Squared Error given actual/predicted lists; compute for a few prediction sets.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Manually implement one iteration of gradient descent for y = mx + c, updating m and c on a small dataset.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Regression Cost Functions": {
    mcqs: [
      {
        questionText: "Distance-based error metric for regression:",
        options: ["Mean Absolute Error (MAE)", "Cross-Entropy Loss", "Gini Impurity", "Silhouette Score"],
        correctOption: 0,
        explanation: "The correct answer is: Mean Absolute Error (MAE)"
      },
      {
        questionText: "MSE is calculated as:",
        options: ["Average absolute difference", "Average squared difference between actual and predicted", "Sum of all predicted values", "Correlation between actual/predicted"],
        correctOption: 1,
        explanation: "The correct answer is: Average squared difference between actual and predicted"
      },
      {
        questionText: "RMSE is:",
        options: ["Square root of MSE, same unit as the target", "Same as MAE", "Always smaller than MAE", "Unrelated to MSE"],
        correctOption: 0,
        explanation: "The correct answer is: Square root of MSE, same unit as the target"
      },
      {
        questionText: "Compared to MAE, MSE/RMSE tend to:",
        options: ["Penalize larger errors more heavily (squaring)", "Ignore large errors", "Always equal MAE", "Only apply to classification"],
        correctOption: 0,
        explanation: "The correct answer is: Penalize larger errors more heavily (squaring)"
      },
      {
        questionText: "Metric more robust to outliers (no squaring):",
        options: ["MAE", "MSE", "RMSE", "All equally robust"],
        correctOption: 0,
        explanation: "The correct answer is: MAE"
      },
      {
        questionText: "Metric reported alongside regression cost functions to indicate goodness of fit:",
        options: ["R-squared", "Confusion Matrix", "Silhouette Score", "Precision/Recall"],
        correctOption: 0,
        explanation: "The correct answer is: R-squared"
      },
      {
        questionText: "An RMSE of 5000 predicting house prices in dollars means:",
        options: ["Predictions off by ~5000 dollars on average, penalizing larger errors", "5000% inaccuracy", "R value = 5000", "5000 features used"],
        correctOption: 0,
        explanation: "The correct answer is: Predictions off by ~5000 dollars on average, penalizing larger errors"
      },
      {
        questionText: "Computing MAE with scikit-learn:",
        options: ["`mean_absolute_error(y_true, y_pred)` from `sklearn.metrics`", "`mean_squared_error(..., squared=False)` gives MAE directly", "`r2_score(...)`", "`accuracy_score(...)`"],
        correctOption: 0,
        explanation: "The correct answer is: `mean_absolute_error(y_true, y_pred)` from `sklearn.metrics`"
      },
    ],
    coding: [
      {
        questionText: "Use `mean_absolute_error`, `mean_squared_error`, and `r2_score` to evaluate a regression model's predictions.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Manually implement MAE and MSE from scratch, and verify results match scikit-learn's built-in functions.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Dummy Variable & OneHotEncoding": {
    mcqs: [
      {
        questionText: "Why convert categorical columns to numeric before use in most ML algorithms?",
        options: ["ML algorithms understand text natively", "Most algorithms need numeric input for mathematical operations", "Never necessary", "Only image data needs conversion"],
        correctOption: 1,
        explanation: "The correct answer is: Most algorithms need numeric input for mathematical operations"
      },
      {
        questionText: "A \"dummy variable\" is:",
        options: ["A meaningless placeholder", "A binary (0/1) variable representing presence/absence of a category", "A random noise variable", "The target variable"],
        correctOption: 1,
        explanation: "The correct answer is: A binary (0/1) variable representing presence/absence of a category"
      },
      {
        questionText: "What does One-Hot Encoding do to a 3-category column?",
        options: ["Converts to a single numeric column (1,2,3)", "Creates 3 binary columns, one per category", "Deletes the column", "Converts to a date format"],
        correctOption: 1,
        explanation: "The correct answer is: Creates 3 binary columns, one per category"
      },
      {
        questionText: "The \"dummy variable trap\" refers to:",
        options: ["A non-existent concern", "Multicollinearity from including all one-hot columns without dropping one", "Only affecting classification, never regression", "Using too few dummy variables"],
        correctOption: 1,
        explanation: "The correct answer is: Multicollinearity from including all one-hot columns without dropping one"
      },
      {
        questionText: "How is the dummy variable trap commonly avoided?",
        options: ["Dropping one encoded column (reference category)", "Adding more dummy columns", "Converting dummy columns back to text", "Removing the categorical column with no replacement"],
        correctOption: 0,
        explanation: "The correct answer is: Dropping one encoded column (reference category)"
      },
      {
        questionText: "Pandas function to quickly one-hot encode:",
        options: ["`pd.get_dummies(df)`", "`pd.encode(df)`", "`pd.one_hot(df)`", "`pd.dummy_transform(df)`"],
        correctOption: 0,
        explanation: "The correct answer is: `pd.get_dummies(df)`"
      },
      {
        questionText: "scikit-learn class for one-hot encoding within a pipeline:",
        options: ["`OneHotEncoder` from `sklearn.preprocessing`", "`LabelEncoder` (better for ordinal/target encoding)", "`StandardScaler`", "`PolynomialFeatures`"],
        correctOption: 0,
        explanation: "The correct answer is: `OneHotEncoder` from `sklearn.preprocessing`"
      },
      {
        questionText: "When is Label Encoding less appropriate than One-Hot Encoding?",
        options: ["When the variable has a natural order", "When the variable has NO natural order (nominal), risking an implied ordinal relationship", "Label Encoding is always better", "One-Hot is never appropriate"],
        correctOption: 1,
        explanation: "The correct answer is: When the variable has NO natural order (nominal), risking an implied ordinal relationship"
      },
    ],
    coding: [
      {
        questionText: "Use `pd.get_dummies()` with `drop_first=True` on a \"City\" column to avoid the dummy variable trap.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Use scikit-learn's `OneHotEncoder` in a small pipeline to encode a categorical column and combine with numeric columns before fitting `LinearRegression`.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Gradient Descent Algorithm": {
    mcqs: [
      {
        questionText: "Gradient Descent is used to:",
        options: ["Visualize data", "Iteratively minimize a cost function by updating parameters", "Encode categorical variables", "Split train/test sets"],
        correctOption: 1,
        explanation: "The correct answer is: Iteratively minimize a cost function by updating parameters"
      },
      {
        questionText: "The \"gradient\" represents:",
        options: ["The final predicted value", "Direction/rate of steepest increase of the cost function w.r.t. parameters", "The learning rate", "The dataset size"],
        correctOption: 1,
        explanation: "The correct answer is: Direction/rate of steepest increase of the cost function w.r.t. parameters"
      },
      {
        questionText: "Why move in the NEGATIVE gradient direction?",
        options: ["To increase the cost as much as possible", "To decrease the cost, moving toward a minimum", "Direction doesn't matter", "To randomly explore"],
        correctOption: 1,
        explanation: "The correct answer is: To decrease the cost, moving toward a minimum"
      },
      {
        questionText: "\"Convergence\" means:",
        options: ["The algorithm diverges to infinity", "Further iterations produce negligible change, indicating a minimum found", "The dataset is fully cleaned", "The model achieves 100% accuracy always"],
        correctOption: 1,
        explanation: "The correct answer is: Further iterations produce negligible change, indicating a minimum found"
      },
      {
        questionText: "Role of the \"learning rate\":",
        options: ["Determines the number of features", "Controls the step size toward the minimum each iteration", "Has no effect", "Only affects the cost function's formula"],
        correctOption: 1,
        explanation: "The correct answer is: Controls the step size toward the minimum each iteration"
      },
      {
        questionText: "Effect of a too-large learning rate:",
        options: ["Always converges faster with no downside", "May overshoot the minimum or diverge", "No effect on convergence", "Guarantees the global minimum"],
        correctOption: 1,
        explanation: "The correct answer is: May overshoot the minimum or diverge"
      },
      {
        questionText: "\"Batch Gradient Descent\":",
        options: ["Computes the gradient using the entire training set each iteration", "Uses one random sample per iteration", "Never updates parameters", "A clustering algorithm"],
        correctOption: 0,
        explanation: "The correct answer is: Computes the gradient using the entire training set each iteration"
      },
      {
        questionText: "\"Stochastic Gradient Descent (SGD)\":",
        options: ["Identical to Batch Gradient Descent", "Updates parameters using a single (or small batch of) randomly chosen sample(s) per step", "Doesn't use gradients", "A clustering technique"],
        correctOption: 1,
        explanation: "The correct answer is: Updates parameters using a single (or small batch of) randomly chosen sample(s) per step"
      },
    ],
    coding: [
      {
        questionText: "Implement Batch Gradient Descent from scratch to find m and c of a simple linear regression on a small dataset, printing cost per iteration.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Experiment with 3 learning rates (0.001, 0.01, 0.5) on the same gradient descent implementation; compare convergence.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Logistic Regression": {
    mcqs: [
      {
        questionText: "Despite its name, Logistic Regression is primarily used for:",
        options: ["Regression predicting continuous values", "Classification, predicting probability of a categorical outcome", "Clustering", "Dimensionality reduction"],
        correctOption: 1,
        explanation: "The correct answer is: Classification, predicting probability of a categorical outcome"
      },
      {
        questionText: "Function mapping a linear combination of inputs to a 0-1 probability:",
        options: ["The sigmoid (logistic) function", "ReLU", "The identity function", "Softmax only"],
        correctOption: 0,
        explanation: "The correct answer is: The sigmoid (logistic) function"
      },
      {
        questionText: "Two main types mentioned in typical course material:",
        options: ["Simple and Multiple", "Binary and Multiclass classification", "Linear and Non-linear", "Supervised and Unsupervised"],
        correctOption: 1,
        explanation: "The correct answer is: Binary and Multiclass classification"
      },
      {
        questionText: "Before thresholding, binary logistic regression typically outputs:",
        options: ["A class label directly", "A probability between 0 and 1, then thresholded (commonly 0.5)", "An unbounded real number used directly as class", "A cluster assignment"],
        correctOption: 1,
        explanation: "The correct answer is: A probability between 0 and 1, then thresholded (commonly 0.5)"
      },
      {
        questionText: "scikit-learn class for Logistic Regression:",
        options: ["`LogisticRegression` from `sklearn.linear_model`", "`LinearRegression`", "`KMeans`", "`DecisionTreeRegressor`"],
        correctOption: 0,
        explanation: "The correct answer is: `LogisticRegression` from `sklearn.linear_model`"
      },
      {
        questionText: "Default 0.5 threshold meaning:",
        options: ["If predicted probability ≥ 0.5, predict positive class; else negative", "The model is 50% accurate always", "It has no meaning", "It's always a tie"],
        correctOption: 0,
        explanation: "The correct answer is: If predicted probability ≥ 0.5, predict positive class; else negative"
      },
      {
        questionText: "Real-world binary logistic regression example:",
        options: ["Predicting customer churn (Yes/No)", "Predicting exact house price", "Predicting number of clusters", "Predicting a continuous temperature"],
        correctOption: 0,
        explanation: "The correct answer is: Predicting customer churn (Yes/No)"
      },
      {
        questionText: "Why is Logistic Regression considered \"linear\" despite the sigmoid?",
        options: ["The sigmoid itself is linear", "It computes a linear combination of features (linear decision boundary) before applying sigmoid", "It uses decision trees internally", "It has no relation to linear algebra"],
        correctOption: 1,
        explanation: "The correct answer is: It computes a linear combination of features (linear decision boundary) before applying sigmoid"
      },
    ],
    coding: [
      {
        questionText: "Train `LogisticRegression` on a sample dataset (e.g., pass/fail vs study hours); print predicted probabilities and classes.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["class", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Manually implement sigmoid with hardcoded weights/bias; compute probabilities and apply a 0.5 threshold for a few inputs.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Logistic Regression – Multiclass Classification": {
    mcqs: [
      {
        questionText: "Multiclass classification refers to:",
        options: ["Only two classes", "More than two classes/categories", "No classes at all", "Continuous output"],
        correctOption: 1,
        explanation: "The correct answer is: More than two classes/categories"
      },
      {
        questionText: "Strategy extending binary Logistic Regression via class-vs-rest classifiers:",
        options: ["One-vs-Rest (OvR)", "K-Means Clustering", "Simple Linear Regression", "PCA"],
        correctOption: 0,
        explanation: "The correct answer is: One-vs-Rest (OvR)"
      },
      {
        questionText: "Activation used for multinomial (softmax) logistic regression:",
        options: ["Sigmoid only", "Softmax, outputting a probability distribution over all classes", "ReLU", "Tanh"],
        correctOption: 1,
        explanation: "The correct answer is: Softmax, outputting a probability distribution over all classes"
      },
      {
        questionText: "scikit-learn `LogisticRegression` parameter specifying multiclass strategy:",
        options: ["`multi_class`", "`strategy`", "`class_mode`", "`multiclass_type`"],
        correctOption: 0,
        explanation: "The correct answer is: `multi_class`"
      },
      {
        questionText: "For 3-class One-vs-Rest, how many binary classifiers are effectively trained?",
        options: ["1", "2", "3", "6"],
        correctOption: 2,
        explanation: "The correct answer is: 3"
      },
      {
        questionText: "In softmax multiclass classification, predicted probabilities for all classes for a sample:",
        options: ["Are independent, no specific sum required", "Sum to 1, a valid probability distribution", "Always sum to 0", "Are always identical"],
        correctOption: 1,
        explanation: "The correct answer is: Sum to 1, a valid probability distribution"
      },
      {
        questionText: "Real-world multiclass classification example:",
        options: ["Spam/not-spam (binary)", "Classifying a news article into one of several topics", "Predicting a continuous stock price", "Unlabeled customer clustering"],
        correctOption: 1,
        explanation: "The correct answer is: Classifying a news article into one of several topics"
      },
      {
        questionText: "Metrics extendable to multiclass via macro/micro/weighted averaging:",
        options: ["Precision, Recall, F1-score", "Only accuracy", "Only R-squared", "None of these"],
        correctOption: 0,
        explanation: "The correct answer is: Precision, Recall, F1-score"
      },
    ],
    coding: [
      {
        questionText: "Train `LogisticRegression` with `multi_class='multinomial'` on iris (3 classes); print predicted classes and accuracy.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["class", "with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Train a One-vs-Rest Logistic Regression classifier; print per-class predicted probabilities for a few samples, confirming they sum to ~1.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "class", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Decision Tree": {
    mcqs: [
      {
        questionText: "A Decision Tree predicts by:",
        options: ["A single linear equation across all features", "Recursively splitting data into if-else rules ending in leaf predictions", "Clustering data points", "Computing distances to all other points"],
        correctOption: 1,
        explanation: "The correct answer is: Recursively splitting data into if-else rules ending in leaf predictions"
      },
      {
        questionText: "Metric deciding the best split at each node for classification:",
        options: ["Gini Impurity or Entropy/Information Gain", "MSE only", "R-squared", "Silhouette Score"],
        correctOption: 0,
        explanation: "The correct answer is: Gini Impurity or Entropy/Information Gain"
      },
      {
        questionText: "A \"leaf node\" represents:",
        options: ["An intermediate decision point", "A final predicted class/value for samples reaching that node", "The root", "A hyperparameter"],
        correctOption: 1,
        explanation: "The correct answer is: A final predicted class/value for samples reaching that node"
      },
      {
        questionText: "scikit-learn class for a classification Decision Tree:",
        options: ["`DecisionTreeClassifier` from `sklearn.tree`", "`DecisionTreeRegressor` only", "`RandomForestClassifier`", "`KMeans`"],
        correctOption: 0,
        explanation: "The correct answer is: `DecisionTreeClassifier` from `sklearn.tree`"
      },
      {
        questionText: "Risk of a very deep Decision Tree:",
        options: ["Always underfits", "Can overfit, capturing noise", "Can't be used for classification", "Requires no training data"],
        correctOption: 1,
        explanation: "The correct answer is: Can overfit, capturing noise"
      },
      {
        questionText: "Hyperparameter limiting tree depth to control overfitting:",
        options: ["`max_depth`", "`n_estimators` (ensemble-specific)", "`learning_rate`", "`n_neighbors`"],
        correctOption: 0,
        explanation: "The correct answer is: `max_depth`"
      },
      {
        questionText: "Key advantage of Decision Trees:",
        options: ["Often more interpretable — decision rules can be visualized/understood", "Always achieve highest accuracy", "Need no preprocessing ever", "Can't handle categorical variables"],
        correctOption: 0,
        explanation: "The correct answer is: Often more interpretable — decision rules can be visualized/understood"
      },
      {
        questionText: "Decision Trees can be used for:",
        options: ["Only classification", "Both classification and regression problems", "Only clustering", "Only dimensionality reduction"],
        correctOption: 1,
        explanation: "The correct answer is: Both classification and regression problems"
      },
    ],
    coding: [
      {
        questionText: "Train `DecisionTreeClassifier` on a sample dataset; print test accuracy.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["class", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Train Decision Trees with different `max_depth` (2, 5, None); compare train/test accuracy to show overfitting effects.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Confusion Matrix": {
    mcqs: [
      {
        questionText: "A confusion matrix summarizes:",
        options: ["Regression residuals", "Classification performance comparing predicted vs actual labels", "Correlation between features", "Dimensionality reduction results"],
        correctOption: 1,
        explanation: "The correct answer is: Classification performance comparing predicted vs actual labels"
      },
      {
        questionText: "\"True Positive\" (TP):",
        options: ["Correctly predicted positive", "Incorrectly predicted positive", "Correctly predicted negative", "Incorrectly predicted negative"],
        correctOption: 0,
        explanation: "The correct answer is: Correctly predicted positive"
      },
      {
        questionText: "\"False Negative\" (FN):",
        options: ["Correctly predicted positive", "Incorrectly predicted negative when actually positive", "Correctly predicted negative", "Incorrectly predicted positive"],
        correctOption: 1,
        explanation: "The correct answer is: Incorrectly predicted negative when actually positive"
      },
      {
        questionText: "scikit-learn function computing a confusion matrix:",
        options: ["`confusion_matrix(y_true, y_pred)`", "`accuracy_score(...)`", "`classification_report(...)` only", "`r2_score(...)`"],
        correctOption: 0,
        explanation: "The correct answer is: `confusion_matrix(y_true, y_pred)`"
      },
      {
        questionText: "Accuracy computed from a confusion matrix:",
        options: ["(TP + TN) / (TP + TN + FP + FN)", "TP / (TP + FP)", "TP / (TP + FN)", "FP / (FP + TN)"],
        correctOption: 0,
        explanation: "The correct answer is: (TP + TN) / (TP + TN + FP + FN)"
      },
      {
        questionText: "Why can accuracy alone mislead for imbalanced data?",
        options: ["Accuracy is never misleading", "A model may get high accuracy predicting the majority class while failing the minority", "Accuracy always equals precision", "Confusion matrices can't be computed for imbalanced data"],
        correctOption: 1,
        explanation: "The correct answer is: A model may get high accuracy predicting the majority class while failing the minority"
      },
      {
        questionText: "How does the confusion matrix extend to multiclass?",
        options: ["Cannot be extended", "Becomes an N×N matrix (N = number of classes)", "Stays 2×2", "Becomes a single scalar"],
        correctOption: 1,
        explanation: "The correct answer is: Becomes an N×N matrix (N = number of classes)"
      },
      {
        questionText: "Common visualization for a confusion matrix:",
        options: ["A heatmap (e.g., `sns.heatmap`)", "A pie chart only", "A line chart", "A scatter plot only"],
        correctOption: 0,
        explanation: "The correct answer is: A heatmap (e.g., `sns.heatmap`)"
      },
    ],
    coding: [
      {
        questionText: "Train a binary classifier; compute the confusion matrix and manually calculate accuracy, precision, recall from TP/TN/FP/FN.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["class", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Visualize a multiclass confusion matrix (e.g., iris) as a Seaborn heatmap with proper axis labels.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["class", "with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Bias-Variance Tradeoff": {
    mcqs: [
      {
        questionText: "\"Bias\" refers to:",
        options: ["Error from an overly simplistic model, leading to underfitting", "Error caused only by random noise", "Model training time", "Number of features used"],
        correctOption: 0,
        explanation: "The correct answer is: Error from an overly simplistic model, leading to underfitting"
      },
      {
        questionText: "\"Variance\" refers to:",
        options: ["The model's tendency to underfit", "Sensitivity to small training-data fluctuations, often leading to overfitting when high", "The number of classes", "The learning rate"],
        correctOption: 1,
        explanation: "The correct answer is: Sensitivity to small training-data fluctuations, often leading to overfitting when high"
      },
      {
        questionText: "High bias, low variance model typically:",
        options: ["Overfits significantly", "Underfits — too simple to capture patterns", "Perfectly balances bias/variance", "Has zero error everywhere"],
        correctOption: 1,
        explanation: "The correct answer is: Underfits — too simple to capture patterns"
      },
      {
        questionText: "Low bias, high variance model typically:",
        options: ["Underfits", "Overfits — fits training data well but generalizes poorly", "Has no error", "Cannot be trained"],
        correctOption: 1,
        explanation: "The correct answer is: Overfits — fits training data well but generalizes poorly"
      },
      {
        questionText: "The \"tradeoff\" refers to:",
        options: ["No real tradeoff exists", "Reducing bias often increases variance and vice versa, needing balance", "Bias/variance are unrelated", "A tradeoff between accuracy and training time only"],
        correctOption: 1,
        explanation: "The correct answer is: Reducing bias often increases variance and vice versa, needing balance"
      },
      {
        questionText: "Common symptom of high variance (overfitting):",
        options: ["High training accuracy, much lower test accuracy", "Low training and test accuracy, roughly equal", "The model refuses predictions", "The model has zero parameters"],
        correctOption: 0,
        explanation: "The correct answer is: High training accuracy, much lower test accuracy"
      },
      {
        questionText: "Techniques to reduce variance (overfitting):",
        options: ["Regularization, reducing complexity, more training data", "Increasing complexity indefinitely", "Removing all training data", "Ignoring validation performance"],
        correctOption: 0,
        explanation: "The correct answer is: Regularization, reducing complexity, more training data"
      },
      {
        questionText: "Finding the \"sweet spot\" of model complexity is typically done by:",
        options: ["Always choosing the most complex model", "Balancing bias/variance using validation/cross-validation curves", "Always choosing the simplest model", "Ignoring both"],
        correctOption: 1,
        explanation: "The correct answer is: Balancing bias/variance using validation/cross-validation curves"
      },
    ],
    coding: [
      {
        questionText: "Train degree-1, degree-4, and degree-15 polynomial regressions on the same noisy dataset; plot each fit to illustrate underfitting/good-fit/overfitting.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Compute/compare training vs. validation error (MSE) for the three models above; print a summary table.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Random Forest Algorithm": {
    mcqs: [
      {
        questionText: "A Random Forest combines:",
        options: ["A single decision tree only", "Multiple decision trees on random data/feature subsets, aggregated by vote/average", "Only linear regression models", "Only clustering algorithms"],
        correctOption: 1,
        explanation: "The correct answer is: Multiple decision trees on random data/feature subsets, aggregated by vote/average"
      },
      {
        questionText: "Ensemble technique primarily used to build Random Forest trees:",
        options: ["Bagging (Bootstrap Aggregating)", "Boosting", "Stacking", "Blending"],
        correctOption: 0,
        explanation: "The correct answer is: Bagging (Bootstrap Aggregating)"
      },
      {
        questionText: "Why does Random Forest randomize both samples and features per split?",
        options: ["No purpose", "Decorrelates trees, reducing variance and improving generalization", "Intentionally reduces accuracy", "Makes it slower with no benefit"],
        correctOption: 1,
        explanation: "The correct answer is: Decorrelates trees, reducing variance and improving generalization"
      },
      {
        questionText: "scikit-learn class implementing Random Forest for classification:",
        options: ["`RandomForestClassifier` from `sklearn.ensemble`", "`DecisionTreeClassifier`", "`RandomForestRegressor` only", "`KMeans`"],
        correctOption: 0,
        explanation: "The correct answer is: `RandomForestClassifier` from `sklearn.ensemble`"
      },
      {
        questionText: "Hyperparameter controlling the number of trees:",
        options: ["`n_estimators`", "`max_depth` only", "`n_trees_total`", "`forest_size`"],
        correctOption: 0,
        explanation: "The correct answer is: `n_estimators`"
      },
      {
        questionText: "Compared to a single Decision Tree, Random Forest typically:",
        options: ["Is more prone to overfitting", "Reduces overfitting/variance by averaging many diverse trees", "Can't be used for classification", "Always performs identically to a single tree"],
        correctOption: 1,
        explanation: "The correct answer is: Reduces overfitting/variance by averaging many diverse trees"
      },
      {
        questionText: "Common downside of Random Forest vs. a single tree:",
        options: ["None", "Less interpretable and more computationally expensive", "Can't handle numeric data", "Always underfits"],
        correctOption: 1,
        explanation: "The correct answer is: Less interpretable and more computationally expensive"
      },
      {
        questionText: "Method giving each feature's importance in a fitted `RandomForestClassifier`:",
        options: ["`model.feature_importances_`", "`model.feature_weights_`", "`model.coef_`", "`model.importance_scores()`"],
        correctOption: 0,
        explanation: "The correct answer is: `model.feature_importances_`"
      },
    ],
    coding: [
      {
        questionText: "Train `RandomForestClassifier`; print accuracy and the top 3 most important features via `feature_importances_`.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "class", "import", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Compare test accuracy of a single `DecisionTreeClassifier` vs `RandomForestClassifier(n_estimators=100)` on the same dataset.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "class", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "K-Fold Cross Validation": {
    mcqs: [
      {
        questionText: "K-Fold Cross-Validation is used to:",
        options: ["Permanently split data once only", "Assess performance robustly by training/validating across K folds", "Increase dataset size", "Remove outliers automatically"],
        correctOption: 1,
        explanation: "The correct answer is: Assess performance robustly by training/validating across K folds"
      },
      {
        questionText: "In 5-fold CV, the model is trained/evaluated:",
        options: ["1 time", "5 times, each with a different validation fold", "10 times", "25 times"],
        correctOption: 1,
        explanation: "The correct answer is: 5 times, each with a different validation fold"
      },
      {
        questionText: "Final performance estimate typically reported:",
        options: ["Only the first fold's result", "The average (and std dev) across all K folds", "Only the worst fold", "Only the best fold"],
        correctOption: 1,
        explanation: "The correct answer is: The average (and std dev) across all K folds"
      },
      {
        questionText: "scikit-learn function for easy K-Fold CV scores:",
        options: ["`cross_val_score()` from `sklearn.model_selection`", "`train_test_split()`", "`GridSearchCV()`", "`KFold` alone with no scoring"],
        correctOption: 0,
        explanation: "The correct answer is: `cross_val_score()` from `sklearn.model_selection`"
      },
      {
        questionText: "Why prefer K-Fold CV over a single split, especially for small datasets?",
        options: ["More reliable, less variance-prone performance estimate via multiple splits", "Requires less computation", "Eliminates the need for a final test set entirely", "Always improves actual model accuracy"],
        correctOption: 0,
        explanation: "The correct answer is: More reliable, less variance-prone performance estimate via multiple splits"
      },
      {
        questionText: "\"Stratified K-Fold\" ensures:",
        options: ["Nothing different", "Each fold maintains roughly the overall class distribution", "Each fold has only one class", "Removes the need for CV"],
        correctOption: 1,
        explanation: "The correct answer is: Each fold maintains roughly the overall class distribution"
      },
      {
        questionText: "Common choice for K:",
        options: ["K=1 always", "Commonly 5 or 10, balancing cost and reliability", "K must equal sample count", "K must exceed 1000"],
        correctOption: 1,
        explanation: "The correct answer is: Commonly 5 or 10, balancing cost and reliability"
      },
      {
        questionText: "When K equals the number of samples:",
        options: ["Becomes standard train-test split", "Becomes Leave-One-Out CV (LOOCV)", "Becomes invalid", "Becomes K-Means Clustering"],
        correctOption: 1,
        explanation: "The correct answer is: Becomes Leave-One-Out CV (LOOCV)"
      },
    ],
    coding: [
      {
        questionText: "Use `cross_val_score()` for 5-fold CV on `LogisticRegression`; print per-fold accuracy, mean, and std dev.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Manually implement K-Fold CV (K=5) with `KFold`, looping through folds; compare the result to `cross_val_score()`.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Support Vector Machine": {
    mcqs: [
      {
        questionText: "SVM primarily works by:",
        options: ["Finding the hyperplane best separating classes while maximizing the margin", "Averaging multiple decision trees", "Clustering by distance", "Reducing features via projection"],
        correctOption: 0,
        explanation: "The correct answer is: Finding the hyperplane best separating classes while maximizing the margin"
      },
      {
        questionText: "\"Support vectors\" are:",
        options: ["All training points", "Points closest to the decision boundary, influencing its position", "The predicted outputs", "The hyperparameters"],
        correctOption: 1,
        explanation: "The correct answer is: Points closest to the decision boundary, influencing its position"
      },
      {
        questionText: "The \"margin\" is:",
        options: ["Number of features used", "Distance between the hyperplane and the nearest support vectors", "The learning rate", "The number of support vectors"],
        correctOption: 1,
        explanation: "The correct answer is: Distance between the hyperplane and the nearest support vectors"
      },
      {
        questionText: "Technique allowing SVM to handle non-linear data via implicit higher-dimensional mapping:",
        options: ["The kernel trick (RBF, polynomial, etc.)", "Gradient Descent", "One-Hot Encoding", "K-Fold Cross-Validation"],
        correctOption: 0,
        explanation: "The correct answer is: The kernel trick (RBF, polynomial, etc.)"
      },
      {
        questionText: "scikit-learn class for SVM classification:",
        options: ["`SVC` from `sklearn.svm`", "`SVR` only", "`KMeans`", "`DecisionTreeClassifier`"],
        correctOption: 0,
        explanation: "The correct answer is: `SVC` from `sklearn.svm`"
      },
      {
        questionText: "SVM hyperparameter controlling the training-vs-test error tradeoff (regularization strength):",
        options: ["`C`", "`n_estimators`", "`max_depth`", "`n_neighbors`"],
        correctOption: 0,
        explanation: "The correct answer is: `C`"
      },
      {
        questionText: "Default/versatile kernel for non-linear boundaries:",
        options: ["The RBF kernel", "Only linear kernel exists", "No kernel options in SVM", "The Gini kernel"],
        correctOption: 0,
        explanation: "The correct answer is: The RBF kernel"
      },
      {
        questionText: "SVMs are generally effective in:",
        options: ["Very large datasets with millions of samples, scaling best of all", "Datasets with a clear margin, even in high-dimensional spaces", "Only unsupervised clustering", "Only time-series forecasting"],
        correctOption: 1,
        explanation: "The correct answer is: Datasets with a clear margin, even in high-dimensional spaces"
      },
    ],
    coding: [
      {
        questionText: "Train `SVC` with a linear kernel on a small linearly separable dataset; print test accuracy.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Train `SVC` with an RBF kernel on a non-linear dataset (`make_circles`/`make_moons`); visualize the decision boundary.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Underfitting and Overfitting": {
    mcqs: [
      {
        questionText: "\"Underfitting\" occurs when a model:",
        options: ["Is too complex, capturing training noise", "Is too simple to capture underlying patterns, performing poorly on both train/test", "Perfectly fits all data", "Has infinite parameters"],
        correctOption: 1,
        explanation: "The correct answer is: Is too simple to capture underlying patterns, performing poorly on both train/test"
      },
      {
        questionText: "\"Overfitting\" occurs when a model:",
        options: ["Performs poorly on both training and test data", "Performs well on training but poorly on unseen test data", "Cannot be trained at all", "Has fewer parameters than needed"],
        correctOption: 1,
        explanation: "The correct answer is: Performs well on training but poorly on unseen test data"
      },
      {
        questionText: "Common sign of overfitting:",
        options: ["High training accuracy, much lower validation/test accuracy", "Low accuracy on both train and test", "Identical train/test accuracy always", "A model with zero parameters"],
        correctOption: 0,
        explanation: "The correct answer is: High training accuracy, much lower validation/test accuracy"
      },
      {
        questionText: "Techniques reducing overfitting:",
        options: ["Regularization, simplifying the model, more training data", "Increasing complexity without bound", "Removing the validation set", "Training on a tiny subset with a complex model"],
        correctOption: 0,
        explanation: "The correct answer is: Regularization, simplifying the model, more training data"
      },
      {
        questionText: "Techniques addressing underfitting:",
        options: ["Increasing model complexity/adding relevant features", "Reducing complexity further", "Removing more data", "Increasing regularization strength significantly"],
        correctOption: 0,
        explanation: "The correct answer is: Increasing model complexity/adding relevant features"
      },
      {
        questionText: "Underfitting is generally associated with:",
        options: ["High bias, low variance", "Low bias, high variance", "Zero bias/variance", "No relation to bias/variance"],
        correctOption: 0,
        explanation: "The correct answer is: High bias, low variance"
      },
      {
        questionText: "Overfitting is generally associated with:",
        options: ["High bias, low variance", "Low bias, high variance", "No relation to bias/variance", "Only occurs in unsupervised learning"],
        correctOption: 1,
        explanation: "The correct answer is: Low bias, high variance"
      },
      {
        questionText: "Validation technique commonly used to detect overfitting before final testing:",
        options: ["K-Fold CV or a held-out validation set, comparing train vs. validation performance", "Repeatedly checking test-set performance", "No way to detect overfitting before deployment", "Trusting training accuracy alone"],
        correctOption: 0,
        explanation: "The correct answer is: K-Fold CV or a held-out validation set, comparing train vs. validation performance"
      },
    ],
    coding: [
      {
        questionText: "Train Decision Trees at very shallow, moderate, and very deep depths; compare train/test accuracy to identify underfit/good-fit/overfit.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Plot a \"learning curve\" (train/validation accuracy vs. training-set size) using scikit-learn's `learning_curve()`.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Lasso and Ridge Regression": {
    mcqs: [
      {
        questionText: "Ridge Regression adds which penalty:",
        options: ["L1 (sum of absolute coefficients)", "L2 (sum of squared coefficients)", "No penalty", "A penalty based on sample count"],
        correctOption: 1,
        explanation: "The correct answer is: L2 (sum of squared coefficients)"
      },
      {
        questionText: "Lasso Regression adds which penalty:",
        options: ["L1 (sum of absolute coefficients)", "L2 (sum of squared coefficients)", "No penalty", "A penalty based on R value"],
        correctOption: 0,
        explanation: "The correct answer is: L1 (sum of absolute coefficients)"
      },
      {
        questionText: "Key distinguishing feature of Lasso:",
        options: ["Never reduces any coefficient to zero", "Can shrink some coefficients exactly to zero, performing feature selection", "Only works with categorical targets", "Only works with one feature"],
        correctOption: 1,
        explanation: "The correct answer is: Can shrink some coefficients exactly to zero, performing feature selection"
      },
      {
        questionText: "Ridge Regression tends to:",
        options: ["Shrink coefficients toward zero but rarely exactly zero, keeping all features", "Eliminate most features entirely", "Increase coefficients without bound", "Have no effect"],
        correctOption: 0,
        explanation: "The correct answer is: Shrink coefficients toward zero but rarely exactly zero, keeping all features"
      },
      {
        questionText: "scikit-learn class implementing Ridge Regression:",
        options: ["`Ridge` from `sklearn.linear_model`", "`Lasso`", "`LinearRegression`", "`ElasticNet` only"],
        correctOption: 0,
        explanation: "The correct answer is: `Ridge` from `sklearn.linear_model`"
      },
      {
        questionText: "scikit-learn class implementing Lasso Regression:",
        options: ["`Lasso` from `sklearn.linear_model`", "`Ridge`", "`LogisticRegression`", "`SVR`"],
        correctOption: 0,
        explanation: "The correct answer is: `Lasso` from `sklearn.linear_model`"
      },
      {
        questionText: "Hyperparameter controlling regularization strength in both Ridge and Lasso:",
        options: ["`alpha`", "`n_estimators`", "`max_depth`", "`n_neighbors`"],
        correctOption: 0,
        explanation: "The correct answer is: `alpha`"
      },
      {
        questionText: "Why apply regularization (Ridge/Lasso) to linear regression?",
        options: ["To increase overfitting intentionally", "To reduce overfitting and handle multicollinearity by penalizing large coefficients", "To remove the target variable", "To convert regression into classification"],
        correctOption: 1,
        explanation: "The correct answer is: To reduce overfitting and handle multicollinearity by penalizing large coefficients"
      },
    ],
    coding: [
      {
        questionText: "Train `Ridge` and `Lasso` on a multi-feature dataset; compare coefficients and identify any zeroed by Lasso.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Train Lasso with several `alpha` values (0.001, 0.1, 1, 10); print how the number of non-zero coefficients changes.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "K-Means Clustering": {
    mcqs: [
      {
        questionText: "K-Means Clustering is an example of:",
        options: ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "Semi-supervised regression"],
        correctOption: 1,
        explanation: "The correct answer is: Unsupervised learning"
      },
      {
        questionText: "What must be specified before running K-Means?",
        options: ["The labeled output classes", "The number of clusters, K", "The learning rate", "The regularization strength"],
        correctOption: 1,
        explanation: "The correct answer is: The number of clusters, K"
      },
      {
        questionText: "K-Means works by iteratively:",
        options: ["Assigning points to nearest centroid, then updating centroids to the mean of assigned points, repeating to convergence", "Splitting data into a decision tree", "Computing a regression line", "Applying a sigmoid function to each point"],
        correctOption: 0,
        explanation: "The correct answer is: Assigning points to nearest centroid, then updating centroids to the mean of assigned points, repeating to convergence"
      },
      {
        questionText: "K-Means aims to minimize:",
        options: ["Correlation between features", "Within-cluster sum of squared distances to the assigned centroid", "The number of clusters", "Training time only"],
        correctOption: 1,
        explanation: "The correct answer is: Within-cluster sum of squared distances to the assigned centroid"
      },
      {
        questionText: "scikit-learn class implementing K-Means:",
        options: ["`KMeans` from `sklearn.cluster`", "`KNeighborsClassifier`", "`DBSCAN`", "`PCA`"],
        correctOption: 0,
        explanation: "The correct answer is: `KMeans` from `sklearn.cluster`"
      },
      {
        questionText: "Technique commonly used to help choose K:",
        options: ["The Elbow Method (inertia vs. K)", "Always setting K equal to feature count", "Always setting K=2", "No method exists to help choose K"],
        correctOption: 0,
        explanation: "The correct answer is: The Elbow Method (inertia vs. K)"
      },
      {
        questionText: "Known limitation of K-Means:",
        options: ["Automatically determines the correct cluster count", "Assumes roughly spherical, similarly-sized clusters, requiring K in advance", "Can't be implemented in Python", "Requires labeled data"],
        correctOption: 1,
        explanation: "The correct answer is: Assumes roughly spherical, similarly-sized clusters, requiring K in advance"
      },
      {
        questionText: "K-Means is sensitive to:",
        options: ["Initial centroid placement, affecting the final result (mitigated by multiple initializations)", "Nothing; always converges identically", "The presence of a required target variable", "The programming language used"],
        correctOption: 0,
        explanation: "The correct answer is: Initial centroid placement, affecting the final result (mitigated by multiple initializations)"
      },
    ],
    coding: [
      {
        questionText: "Cluster a sample 2D dataset into 3 clusters with `KMeans`; plot clusters in different colors with centroids marked.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Compute and plot the Elbow Method curve (inertia vs. K=1 to 10) to help choose K.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "K Nearest Neighbor": {
    mcqs: [
      {
        questionText: "KNN classifies a new point by:",
        options: ["Fitting a global linear equation", "Looking at the K closest labeled neighbors and taking the majority class", "Splitting data into a decision tree", "Computing a sigmoid-based probability"],
        correctOption: 1,
        explanation: "The correct answer is: Looking at the K closest labeled neighbors and taking the majority class"
      },
      {
        questionText: "KNN is a \"lazy learner\" because:",
        options: ["It does extensive upfront training with no prediction-time work", "It does little explicit training; most work happens at prediction time", "It never makes predictions", "It requires no data at all"],
        correctOption: 1,
        explanation: "The correct answer is: It does little explicit training; most work happens at prediction time"
      },
      {
        questionText: "Default distance metric commonly used in KNN:",
        options: ["Euclidean distance", "Correlation coefficient", "Cosine similarity only", "Manhattan distance only"],
        correctOption: 0,
        explanation: "The correct answer is: Euclidean distance"
      },
      {
        questionText: "Why is feature scaling important before KNN?",
        options: ["Not important since KNN is distance-based", "Features on different scales can disproportionately influence the distance metric unless scaled", "Only matters for tree-based models", "Changes the number of neighbors used"],
        correctOption: 1,
        explanation: "The correct answer is: Features on different scales can disproportionately influence the distance metric unless scaled"
      },
      {
        questionText: "scikit-learn class for KNN classification:",
        options: ["`KNeighborsClassifier` from `sklearn.neighbors`", "`KMeans`", "`DecisionTreeClassifier`", "`SVC`"],
        correctOption: 0,
        explanation: "The correct answer is: `KNeighborsClassifier` from `sklearn.neighbors`"
      },
      {
        questionText: "Effect of K too small (e.g., K=1):",
        options: ["Overly smooth, underfitting", "Very sensitive to noise, potentially overfitting", "No effect on behavior", "K cannot be 1"],
        correctOption: 1,
        explanation: "The correct answer is: Very sensitive to noise, potentially overfitting"
      },
      {
        questionText: "Effect of K too large:",
        options: ["Overly smoothed, potentially underfitting", "Always overfits severely", "No effect on predictions", "Algorithm fails to run"],
        correctOption: 0,
        explanation: "The correct answer is: Overly smoothed, potentially underfitting"
      },
      {
        questionText: "KNN can be used for:",
        options: ["Only classification", "Both classification and regression (via `KNeighborsRegressor`)", "Only clustering", "Only dimensionality reduction"],
        correctOption: 1,
        explanation: "The correct answer is: Both classification and regression (via `KNeighborsRegressor`)"
      },
    ],
    coding: [
      {
        questionText: "Train `KNeighborsClassifier` (with `StandardScaler` applied first) for K=3, 5, and 10; print test accuracy for each.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "class", "with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Plot test accuracy vs. K (1 to 20) to help visually identify a good choice of K.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Naive Bayes Classifier": {
    mcqs: [
      {
        questionText: "Naive Bayes is based primarily on:",
        options: ["Bayes' Theorem with a \"naive\" feature-independence assumption given the class", "Gradient Descent optimization", "Distance-based nearest-neighbor search", "Decision tree splitting rules"],
        correctOption: 0,
        explanation: "The correct answer is: Bayes' Theorem with a \"naive\" feature-independence assumption given the class"
      },
      {
        questionText: "Why is it called \"Naive\"?",
        options: ["It makes no assumptions at all", "It naively assumes conditional feature independence given the class, rarely true but often works well", "It was the first ML algorithm ever", "It cannot be implemented in Python"],
        correctOption: 1,
        explanation: "The correct answer is: It naively assumes conditional feature independence given the class, rarely true but often works well"
      },
      {
        questionText: "Naive Bayes variant common for text classification with word counts:",
        options: ["Multinomial Naive Bayes", "Gaussian Naive Bayes only", "K-Means", "Linear Regression"],
        correctOption: 0,
        explanation: "The correct answer is: Multinomial Naive Bayes"
      },
      {
        questionText: "Variant assuming continuous features follow a normal distribution:",
        options: ["Gaussian Naive Bayes", "Multinomial Naive Bayes", "Bernoulli Naive Bayes only", "None of the above"],
        correctOption: 0,
        explanation: "The correct answer is: Gaussian Naive Bayes"
      },
      {
        questionText: "scikit-learn class implementing Gaussian Naive Bayes:",
        options: ["`GaussianNB` from `sklearn.naive_bayes`", "`MultinomialNB` only", "`KMeans`", "`SVC`"],
        correctOption: 0,
        explanation: "The correct answer is: `GaussianNB` from `sklearn.naive_bayes`"
      },
      {
        questionText: "Key advantage of Naive Bayes:",
        options: ["Computationally expensive and slow", "Simple, fast to train, surprisingly effective for text classification like spam detection", "Requires very large data to work at all", "Can't handle categorical data"],
        correctOption: 1,
        explanation: "The correct answer is: Simple, fast to train, surprisingly effective for text classification like spam detection"
      },
      {
        questionText: "Bayes' Theorem relates:",
        options: ["Prior probability, likelihood, and posterior probability", "Only two independent events with no formula", "Mean and variance", "The slope/intercept of a regression line"],
        correctOption: 0,
        explanation: "The correct answer is: Prior probability, likelihood, and posterior probability"
      },
      {
        questionText: "In a spam classifier using Naive Bayes, a typical \"feature\" is:",
        options: ["The presence/frequency of specific words in the email", "The final spam/not-spam label", "The model's hyperparameters", "The confusion matrix values"],
        correctOption: 0,
        explanation: "The correct answer is: The presence/frequency of specific words in the email"
      },
    ],
    coding: [
      {
        questionText: "Train `GaussianNB` on a numeric dataset (e.g., iris); print test accuracy and confusion matrix.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Use `MultinomialNB` with `CountVectorizer` to build a spam-detection classifier on a small labeled text dataset.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["class", "with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Hyperparameter Tuning - GridSearchCV": {
    mcqs: [
      {
        questionText: "`GridSearchCV` is used to:",
        options: ["Automatically clean missing data", "Systematically search a hyperparameter grid, evaluating each combination (often via CV)", "Visualize a confusion matrix", "Perform feature scaling automatically"],
        correctOption: 1,
        explanation: "The correct answer is: Systematically search a hyperparameter grid, evaluating each combination (often via CV)"
      },
      {
        questionText: "Module containing `GridSearchCV`:",
        options: ["`sklearn.model_selection`", "`sklearn.preprocessing`", "`sklearn.metrics`", "`sklearn.linear_model`"],
        correctOption: 0,
        explanation: "The correct answer is: `sklearn.model_selection`"
      },
      {
        questionText: "Parameter specifying the hyperparameter grid dict:",
        options: ["`param_grid`", "`hyperparameters`", "`grid_values`", "`search_space`"],
        correctOption: 0,
        explanation: "The correct answer is: `param_grid`"
      },
      {
        questionText: "Parameter controlling the number of CV folds:",
        options: ["`cv`", "`folds`", "`k_value`", "`n_splits_cv`"],
        correctOption: 0,
        explanation: "The correct answer is: `cv`"
      },
      {
        questionText: "Attribute of a fitted `GridSearchCV` giving the best hyperparameters:",
        options: ["`grid_search.best_params_`", "`grid_search.top_params`", "`grid_search.optimal_params()`", "`grid_search.best_config`"],
        correctOption: 0,
        explanation: "The correct answer is: `grid_search.best_params_`"
      },
      {
        questionText: "Attribute giving the best cross-validation score:",
        options: ["`grid_search.best_score_`", "`grid_search.top_score`", "`grid_search.max_accuracy`", "`grid_search.optimal_score()`"],
        correctOption: 0,
        explanation: "The correct answer is: `grid_search.best_score_`"
      },
      {
        questionText: "Key downside of GridSearchCV with many hyperparameters/values:",
        options: ["No downsides", "Can be computationally expensive, exhaustively trying every combination", "Can't be used with cross-validation", "Only works for regression"],
        correctOption: 1,
        explanation: "The correct answer is: Can be computationally expensive, exhaustively trying every combination"
      },
      {
        questionText: "Alternative sampling a limited number of random combinations instead of exhaustive search:",
        options: ["`RandomizedSearchCV`", "`train_test_split`", "`KFold`", "`StandardScaler`"],
        correctOption: 0,
        explanation: "The correct answer is: `RandomizedSearchCV`"
      },
    ],
    coding: [
      {
        questionText: "Use `GridSearchCV` to tune `n_estimators` and `max_depth` for `RandomForestClassifier`; print best params and score.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "class", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Use `GridSearchCV` (5-fold CV) to tune `C` and `kernel` for `SVC`; print the best combination and test accuracy.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "XGBoost": {
    mcqs: [
      {
        questionText: "XGBoost stands for:",
        options: ["Extreme Gradient Boosting", "Extra eXtensible Boosting", "eXtended Gradient Base Optimization Standard Tool", "eXtreme Generalized Bootstrapping"],
        correctOption: 0,
        explanation: "The correct answer is: Extreme Gradient Boosting"
      },
      {
        questionText: "Why is XGBoost widely used in competitions and real-world applications?",
        options: ["Slower and less accurate than simpler models", "High performance/speed/accuracy via optimized, regularized gradient boosting", "Requires no installation", "Only works for unsupervised learning"],
        correctOption: 1,
        explanation: "The correct answer is: High performance/speed/accuracy via optimized, regularized gradient boosting"
      },
      {
        questionText: "XGBoost builds its model by:",
        options: ["Training all trees independently in parallel", "Sequentially adding trees, each correcting the combined previous trees' errors", "Clustering data into groups", "Fitting a single linear equation"],
        correctOption: 1,
        explanation: "The correct answer is: Sequentially adding trees, each correcting the combined previous trees' errors"
      },
      {
        questionText: "Package needed to use XGBoost in Python:",
        options: ["`pip install xgboost`", "`pip install boosting`", "`pip install gradient-tree`", "`pip install sklearn-xgboost`"],
        correctOption: 0,
        explanation: "The correct answer is: `pip install xgboost`"
      },
      {
        questionText: "Class from `xgboost` used for classification:",
        options: ["`XGBClassifier`", "`XGBRegressor` only", "`XGBoostModel`", "`GradientBooster`"],
        correctOption: 0,
        explanation: "The correct answer is: `XGBClassifier`"
      },
      {
        questionText: "Built-in feature helping prevent overfitting via penalty terms:",
        options: ["Regularization (L1/L2 in the objective function)", "No regularization capability", "Only dropout", "One-Hot Encoding"],
        correctOption: 0,
        explanation: "The correct answer is: Regularization (L1/L2 in the objective function)"
      },
      {
        questionText: "Hyperparameter controlling the number of boosting rounds:",
        options: ["`n_estimators`", "`max_depth` only", "`learning_rate` only", "`subsample` only"],
        correctOption: 0,
        explanation: "The correct answer is: `n_estimators`"
      },
      {
        questionText: "Compared to standard Gradient Boosting, XGBoost is often praised for:",
        options: ["Being slower due to extra checks", "Computational efficiency (parallelization, memory optimization) and built-in regularization", "Not supporting classification", "Only working with unstructured image data"],
        correctOption: 1,
        explanation: "The correct answer is: Computational efficiency (parallelization, memory optimization) and built-in regularization"
      },
    ],
    coding: [
      {
        questionText: "Train `XGBClassifier` on a binary classification dataset; print test accuracy.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["class", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Print feature importances after training `XGBClassifier`; compare its accuracy against a `RandomForestClassifier` on the same data.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "class", "import", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "DL - Introduction": {
    mcqs: [
      {
        questionText: "Deep Learning is a subset of:",
        options: ["Robotics", "Machine Learning, using multi-layered neural networks", "Database management", "Web development"],
        correctOption: 1,
        explanation: "The correct answer is: Machine Learning, using multi-layered neural networks"
      },
      {
        questionText: "What primarily distinguishes \"deep\" learning from shallow neural networks?",
        options: ["The use of only one layer", "Multiple hidden layers learning hierarchical feature representations", "The absence of any layers", "It doesn't use neurons at all"],
        correctOption: 1,
        explanation: "The correct answer is: Multiple hidden layers learning hierarchical feature representations"
      },
      {
        questionText: "Common real-world application of Deep Learning:",
        options: ["Image recognition", "Manual spreadsheet formatting", "Static website hosting", "Basic file storage"],
        correctOption: 0,
        explanation: "The correct answer is: Image recognition"
      },
      {
        questionText: "Deep Learning models generally require:",
        options: ["Very small amounts of data", "Large data and compute (often GPUs) to train effectively", "No data at all", "Only categorical data"],
        correctOption: 1,
        explanation: "The correct answer is: Large data and compute (often GPUs) to train effectively"
      },
      {
        questionText: "A \"neuron\" is analogous to:",
        options: ["A database row", "A basic computational unit combining weighted inputs and an activation function", "A file on disk", "A type of loop"],
        correctOption: 1,
        explanation: "The correct answer is: A basic computational unit combining weighted inputs and an activation function"
      },
      {
        questionText: "Why has Deep Learning become more practical recently?",
        options: ["Increased data, GPU/TPU power, better algorithms/frameworks", "CPUs became slower", "Datasets became smaller", "Neural networks were invented recently"],
        correctOption: 0,
        explanation: "The correct answer is: Increased data, GPU/TPU power, better algorithms/frameworks"
      },
      {
        questionText: "Key Deep Learning vs. classical ML difference re: feature engineering:",
        options: ["DL requires extensive manual feature engineering", "DL can automatically learn features from raw data", "They are identical", "Neither uses features"],
        correctOption: 1,
        explanation: "The correct answer is: DL can automatically learn features from raw data"
      },
      {
        questionText: "Which of these is NOT typically a Deep Learning architecture?",
        options: ["CNN", "RNN", "K-Means Clustering", "MLP"],
        correctOption: 2,
        explanation: "The correct answer is: K-Means Clustering"
      },
    ],
    coding: [
      {
        questionText: "Check whether TensorFlow (or PyTorch) is installed, print the version, and check GPU availability.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Manually implement a single artificial neuron: weighted sum + bias + sigmoid activation, given inputs/weights/bias.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "DL - Libraries": {
    mcqs: [
      {
        questionText: "Popular open-source DL framework developed by Google:",
        options: ["TensorFlow", "Django", "Flask", "Pandas"],
        correctOption: 0,
        explanation: "The correct answer is: TensorFlow"
      },
      {
        questionText: "High-level API (now part of TensorFlow) simplifying network building:",
        options: ["Keras", "NumPy", "Matplotlib", "Scikit-learn"],
        correctOption: 0,
        explanation: "The correct answer is: Keras"
      },
      {
        questionText: "Framework by Meta known for dynamic computation graphs, popular in research:",
        options: ["PyTorch", "Keras only", "Scikit-learn", "OpenCV"],
        correctOption: 0,
        explanation: "The correct answer is: PyTorch"
      },
      {
        questionText: "Library for numerical array operations underlying many DL frameworks:",
        options: ["NumPy", "Seaborn", "Flask", "BeautifulSoup"],
        correctOption: 0,
        explanation: "The correct answer is: NumPy"
      },
      {
        questionText: "Keras class for a simple sequential stack of layers:",
        options: ["`Sequential`", "`Functional` only", "`Stack`", "`LinearModel`"],
        correctOption: 0,
        explanation: "The correct answer is: `Sequential`"
      },
      {
        questionText: "Method compiling a Keras model (optimizer/loss/metrics):",
        options: ["`model.compile()`", "`model.build()`", "`model.setup()`", "`model.configure()`"],
        correctOption: 0,
        explanation: "The correct answer is: `model.compile()`"
      },
      {
        questionText: "Method training a compiled Keras model:",
        options: ["`model.fit()`", "`model.train()`", "`model.run()`", "`model.learn()`"],
        correctOption: 0,
        explanation: "The correct answer is: `model.fit()`"
      },
      {
        questionText: "Library providing pre-trained state-of-the-art Transformer models:",
        options: ["HuggingFace Transformers", "OpenCV", "Flask", "BeautifulSoup"],
        correctOption: 0,
        explanation: "The correct answer is: HuggingFace Transformers"
      },
    ],
    coding: [
      {
        questionText: "Build a `Sequential` Keras model with an input layer and one Dense hidden layer; print `model.summary()`.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Define a simple 2-layer neural network model (PyTorch or Keras) and print the number of trainable parameters.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "DL - Terminology": {
    mcqs: [
      {
        questionText: "An \"epoch\" is:",
        options: ["A single forward pass on one sample", "One complete pass of the entire training dataset through the network", "The learning rate value", "A type of activation"],
        correctOption: 1,
        explanation: "The correct answer is: One complete pass of the entire training dataset through the network"
      },
      {
        questionText: "A \"batch size\" is:",
        options: ["Total number of epochs", "Number of samples processed before weights update", "Number of layers", "Number of classes"],
        correctOption: 1,
        explanation: "The correct answer is: Number of samples processed before weights update"
      },
      {
        questionText: "A \"hidden layer\" is:",
        options: ["The input layer", "Any layer between input and output where intermediate computation occurs", "The output layer only", "A disabled layer"],
        correctOption: 1,
        explanation: "The correct answer is: Any layer between input and output where intermediate computation occurs"
      },
      {
        questionText: "\"Weights\" represent:",
        options: ["Learnable parameters scaling input signals at each connection", "The bias term only", "The number of neurons", "The activation function type"],
        correctOption: 0,
        explanation: "The correct answer is: Learnable parameters scaling input signals at each connection"
      },
      {
        questionText: "\"Learning rate\" is:",
        options: ["Number of epochs", "A hyperparameter controlling step size in gradient descent", "The batch size", "The number of hidden layers"],
        correctOption: 1,
        explanation: "The correct answer is: A hyperparameter controlling step size in gradient descent"
      },
      {
        questionText: "\"Overfitting\" in DL means:",
        options: ["Good performance on both train and test data", "Great performance on training but poor on unseen data", "Model fails to learn anything", "Model has too few parameters"],
        correctOption: 1,
        explanation: "The correct answer is: Great performance on training but poor on unseen data"
      },
      {
        questionText: "A \"loss function\":",
        options: ["Measures how far predictions are from targets, guiding training", "Visualizes the model", "Is a type of optimizer", "Is a layer type"],
        correctOption: 0,
        explanation: "The correct answer is: Measures how far predictions are from targets, guiding training"
      },
      {
        questionText: "\"Forward propagation\" refers to:",
        options: ["Computing gradients and updating weights", "Passing input through layers to compute the output", "Removing layers", "Saving the model"],
        correctOption: 1,
        explanation: "The correct answer is: Passing input through layers to compute the output"
      },
    ],
    coding: [
      {
        questionText: "Define `epochs`, `batch_size`, `learning_rate` variables and simulate a loop printing \"Epoch X of Y\".",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Manually implement Mean Squared Error given predicted and actual value lists, without library functions.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "DL - MLP Steps": {
    mcqs: [
      {
        questionText: "MLP stands for:",
        options: ["Multi-Layer Perceptron", "Multiple Linear Processing", "Maximum Likelihood Prediction", "Multi-Level Pooling"],
        correctOption: 0,
        explanation: "The correct answer is: Multi-Layer Perceptron"
      },
      {
        questionText: "Correct general order of building an MLP in Keras:",
        options: ["Compile → Build → Fit → Define layers", "Import → Prepare data → Define architecture → Compile → Train → Evaluate", "Evaluate → Train → Compile → Import", "Predict → Train → Compile"],
        correctOption: 1,
        explanation: "The correct answer is: Import → Prepare data → Define architecture → Compile → Train → Evaluate"
      },
      {
        questionText: "Why normalize/scale data before training an MLP?",
        options: ["Not necessary at all", "Helps the model converge faster and more stably", "Increases dataset size", "Removes all outliers automatically"],
        correctOption: 1,
        explanation: "The correct answer is: Helps the model converge faster and more stably"
      },
      {
        questionText: "Typical last step after training an MLP:",
        options: ["Redefining the architecture", "Evaluating on a test/validation set", "Deleting the model", "Re-importing libraries"],
        correctOption: 1,
        explanation: "The correct answer is: Evaluating on a test/validation set"
      },
      {
        questionText: "Keras layer type commonly used for basic MLP hidden layers:",
        options: ["`Dense`", "`Conv2D`", "`LSTM`", "`Embedding`"],
        correctOption: 0,
        explanation: "The correct answer is: `Dense`"
      },
      {
        questionText: "Activation typically used in the output layer for multi-class classification:",
        options: ["ReLU", "Softmax", "Linear", "Tanh"],
        correctOption: 1,
        explanation: "The correct answer is: Softmax"
      },
      {
        questionText: "`model.fit()` parameter specifying training-data fraction set aside for validation:",
        options: ["`validation_split`", "`test_split`", "`holdout_ratio`", "`eval_fraction`"],
        correctOption: 0,
        explanation: "The correct answer is: `validation_split`"
      },
      {
        questionText: "Why split into train/test before building an MLP?",
        options: ["Unnecessary if the model is deep enough", "To evaluate generalization, avoiding overly optimistic estimates", "Only to make training faster", "To artificially increase dataset size"],
        correctOption: 1,
        explanation: "The correct answer is: To evaluate generalization, avoiding overly optimistic estimates"
      },
    ],
    coding: [
      {
        questionText: "Build a Keras MLP: input layer, one Dense ReLU hidden layer, sigmoid output layer for binary classification.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "class", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Load a small dataset (e.g., `load_iris`), split, scale, build/compile/train an MLP, and evaluate test accuracy.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "DL - DL Codebase": {
    mcqs: [
      {
        questionText: "Well-organized DL project structure practice:",
        options: ["One massive script with no separation", "Separate modules for data loading, model, training, evaluation", "No comments/documentation", "No version control"],
        correctOption: 1,
        explanation: "The correct answer is: Separate modules for data loading, model, training, evaluation"
      },
      {
        questionText: "Why set a random seed at the start of a DL codebase?",
        options: ["No effect", "Helps reproducibility by controlling randomness", "Speeds up training", "Reduces dataset size"],
        correctOption: 1,
        explanation: "The correct answer is: Helps reproducibility by controlling randomness"
      },
      {
        questionText: "Common file in a well-structured DL codebase:",
        options: ["`data_loader.py` for loading/preprocessing", "A single `main.py` with everything hardcoded", "No config files", "Only a notebook with no reusable functions"],
        correctOption: 0,
        explanation: "The correct answer is: `data_loader.py` for loading/preprocessing"
      },
      {
        questionText: "Benefit of a config file/dict for hyperparameters:",
        options: ["Makes hyperparameters hard to find", "Centralizes and eases modification without touching core code", "Required by Python syntax", "Slows training significantly"],
        correctOption: 1,
        explanation: "The correct answer is: Centralizes and eases modification without touching core code"
      },
      {
        questionText: "Reusable function pattern to build a compiled Keras model:",
        options: ["`def build_model(input_shape, num_classes): ... return model`", "A single global variable", "A class with no methods", "Unreachable code"],
        correctOption: 0,
        explanation: "The correct answer is: `def build_model(input_shape, num_classes): ... return model`"
      },
      {
        questionText: "Benefit of separating \"training\" logic from \"evaluation\" logic:",
        options: ["None", "Improves readability, reusability, testability", "Required by TensorFlow", "Prevents training entirely"],
        correctOption: 1,
        explanation: "The correct answer is: Improves readability, reusability, testability"
      },
      {
        questionText: "Practice helping track experiments across runs:",
        options: ["Manually remembering results", "Logging to files or using TensorBoard/experiment tracking tools", "Deleting old results after each run", "No logging at all"],
        correctOption: 1,
        explanation: "The correct answer is: Logging to files or using TensorBoard/experiment tracking tools"
      },
      {
        questionText: "Why wrap data loading/preprocessing in a reusable function/class?",
        options: ["To duplicate code intentionally", "To avoid duplication, ensure consistent preprocessing across stages", "No benefit", "Required by Python"],
        correctOption: 1,
        explanation: "The correct answer is: To avoid duplication, ensure consistent preprocessing across stages"
      },
    ],
    coding: [
      {
        questionText: "Structure a script with `load_data()`, `build_model()`, `train_model()`, `evaluate_model()` and call them from `main()`.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Define a config dict (`epochs`, `batch_size`, `learning_rate`) and use it to compile/mock-train a simple Keras model.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "DL - Model Evaluation": {
    mcqs: [
      {
        questionText: "Keras method evaluating a model on test data, returning loss/metrics:",
        options: ["`model.evaluate(x_test, y_test)`", "`model.test(...)`", "`model.check(...)`", "`model.score(...)`"],
        correctOption: 0,
        explanation: "The correct answer is: `model.evaluate(x_test, y_test)`"
      },
      {
        questionText: "Method generating predictions on new data:",
        options: ["`model.predict(x_new)`", "`model.forecast(x_new)`", "`model.output(x_new)`", "`model.run(x_new)`"],
        correctOption: 0,
        explanation: "The correct answer is: `model.predict(x_new)`"
      },
      {
        questionText: "Metric commonly monitored during classification evaluation:",
        options: ["accuracy", "MSE only", "R-squared only", "silhouette score"],
        correctOption: 0,
        explanation: "The correct answer is: accuracy"
      },
      {
        questionText: "Why evaluate on a held-out test set not used in training?",
        options: ["Not necessary", "To get an unbiased estimate of unseen-data performance", "To make training faster", "To increase overfitting intentionally"],
        correctOption: 1,
        explanation: "The correct answer is: To get an unbiased estimate of unseen-data performance"
      },
      {
        questionText: "Large gap between training and validation accuracy typically indicates:",
        options: ["Perfect performance", "Overfitting", "Underfitting", "A data-loading error necessarily"],
        correctOption: 1,
        explanation: "The correct answer is: Overfitting"
      },
      {
        questionText: "Metrics useful beyond accuracy, especially with imbalanced classes:",
        options: ["Precision, Recall, F1-score", "Only the loss value", "Only epoch count", "Batch size"],
        correctOption: 0,
        explanation: "The correct answer is: Precision, Recall, F1-score"
      },
      {
        questionText: "What does `history` (from `model.fit()`) contain?",
        options: ["Trained weights only", "Loss/metric values per epoch (train and validation)", "Raw input data", "An architecture diagram"],
        correctOption: 1,
        explanation: "The correct answer is: Loss/metric values per epoch (train and validation)"
      },
      {
        questionText: "Why plot training vs. validation metrics over epochs?",
        options: ["Not useful", "Helps diagnose overfitting/underfitting and decide when to stop training", "Replaces the test set entirely", "Changes model weights"],
        correctOption: 1,
        explanation: "The correct answer is: Helps diagnose overfitting/underfitting and decide when to stop training"
      },
    ],
    coding: [
      {
        questionText: "Train a simple Keras model and evaluate on a held-out test set using `model.evaluate()`.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Use the `history` object to print the final epoch's training and validation accuracy.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "DL - Save Model": {
    mcqs: [
      {
        questionText: "Keras method saving an entire model (architecture, weights, optimizer state):",
        options: ["`model.save('model.h5')`", "`model.export()` only", "`model.write()`", "`model.dump()`"],
        correctOption: 0,
        explanation: "The correct answer is: `model.save('model.h5')`"
      },
      {
        questionText: "Function loading a saved Keras model:",
        options: ["`tf.keras.models.load_model('model.h5')`", "`.open_model()`", "`.read()`", "`.import_model()`"],
        correctOption: 0,
        explanation: "The correct answer is: `tf.keras.models.load_model('model.h5')`"
      },
      {
        questionText: "Method saving ONLY the trained weights:",
        options: ["`model.save_weights('weights.h5')`", "`model.save('weights.h5')` only saves weights", "`model.export_weights()`", "`model.dump_weights()`"],
        correctOption: 0,
        explanation: "The correct answer is: `model.save_weights('weights.h5')`"
      },
      {
        questionText: "Method loading weights into a matching architecture:",
        options: ["`model.load_weights('weights.h5')`", "`.read_weights()`", "`.import_weights()`", "`.restore_weights()`"],
        correctOption: 0,
        explanation: "The correct answer is: `model.load_weights('weights.h5')`"
      },
      {
        questionText: "Key benefit of saving a trained model:",
        options: ["None — always retrain", "Reuse for inference/deployment without retraining", "Reduces accuracy", "Auto-converts frameworks"],
        correctOption: 1,
        explanation: "The correct answer is: Reuse for inference/deployment without retraining"
      },
      {
        questionText: "TensorFlow \"SavedModel\" format saves a model as:",
        options: ["A single file always", "A directory containing architecture, weights, computation graph", "A CSV", "Plain text"],
        correctOption: 1,
        explanation: "The correct answer is: A directory containing architecture, weights, computation graph"
      },
      {
        questionText: "Why save only weights instead of the full model?",
        options: ["Never useful", "Useful for reloading into an identically-defined architecture (e.g., fine-tuning)", "Auto-improves accuracy", "Changes model structure"],
        correctOption: 1,
        explanation: "The correct answer is: Useful for reloading into an identically-defined architecture (e.g., fine-tuning)"
      },
      {
        questionText: "File extension commonly used for HDF5-based Keras model saves:",
        options: ["`.h5`", "`.csv`", "`.txt`", "`.json` only"],
        correctOption: 0,
        explanation: "The correct answer is: `.h5`"
      },
    ],
    coding: [
      {
        questionText: "Train a simple Keras model, save it to `.h5`, load it back, and verify identical predictions.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Save only a model's weights, load them into a fresh model with the same architecture, and evaluate.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "DL - Model Best Checkpoints": {
    mcqs: [
      {
        questionText: "Purpose of a \"ModelCheckpoint\" callback:",
        options: ["Stops training immediately", "Saves the model automatically when a monitored metric improves", "Deletes the model after training", "Changes the learning rate"],
        correctOption: 1,
        explanation: "The correct answer is: Saves the model automatically when a monitored metric improves"
      },
      {
        questionText: "Parameter of `ModelCheckpoint` specifying the monitored metric:",
        options: ["`monitor='val_loss'`", "`metric='val_loss'`", "`watch='val_loss'`", "`track='val_loss'`"],
        correctOption: 0,
        explanation: "The correct answer is: `monitor='val_loss'`"
      },
      {
        questionText: "What does `save_best_only=True` do?",
        options: ["Saves every epoch regardless", "Saves only when the monitored metric improves", "Saves only the last epoch", "Prevents saving entirely"],
        correctOption: 1,
        explanation: "The correct answer is: Saves only when the monitored metric improves"
      },
      {
        questionText: "Why save the \"best\" checkpoint rather than the final epoch's model?",
        options: ["The final epoch is always best", "Later epochs can overfit; the best checkpoint often generalizes better", "No impact on quality", "Only matters for tiny datasets"],
        correctOption: 1,
        explanation: "The correct answer is: Later epochs can overfit; the best checkpoint often generalizes better"
      },
      {
        questionText: "Callback often paired with ModelCheckpoint to stop training when validation stops improving:",
        options: ["EarlyStopping", "ReduceLROnPlateau only", "TensorBoard", "CSVLogger"],
        correctOption: 0,
        explanation: "The correct answer is: EarlyStopping"
      },
      {
        questionText: "What does `mode='min'` specify in `ModelCheckpoint`?",
        options: ["Whether to save weights only", "Whether the monitored metric should be minimized or maximized to count as improvement", "The batch size", "The number of epochs"],
        correctOption: 1,
        explanation: "The correct answer is: Whether the monitored metric should be minimized or maximized to count as improvement"
      },
      {
        questionText: "Where is `ModelCheckpoint` typically passed?",
        options: ["To `model.compile()`", "In the `callbacks` list argument to `model.fit()`", "It can't be used with `.fit()`", "To `model.evaluate()`"],
        correctOption: 1,
        explanation: "The correct answer is: In the `callbacks` list argument to `model.fit()`"
      },
      {
        questionText: "Common filename pattern saving a distinct file per epoch:",
        options: ["A placeholder like `{epoch:02d}`, e.g., `\"model_{epoch:02d}.h5\"`", "Always the same static filename", "Not possible", "Using only the class name"],
        correctOption: 0,
        explanation: "The correct answer is: A placeholder like `{epoch:02d}`, e.g., `\"model_{epoch:02d}.h5\"`"
      },
    ],
    coding: [
      {
        questionText: "Set up `ModelCheckpoint` to save only the best model (based on validation loss) during training.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Combine `ModelCheckpoint` and `EarlyStopping`, and print which epoch's model was saved as best.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "DL - Viz Model Acc & Loss": {
    mcqs: [
      {
        questionText: "Library commonly used to plot accuracy/loss curves:",
        options: ["Matplotlib", "BeautifulSoup", "Flask", "SQLAlchemy"],
        correctOption: 0,
        explanation: "The correct answer is: Matplotlib"
      },
      {
        questionText: "Key in `history.history` holding training loss per epoch:",
        options: ["`'loss'`", "`'train_loss'`", "`'epoch_loss'`", "`'error'`"],
        correctOption: 0,
        explanation: "The correct answer is: `'loss'`"
      },
      {
        questionText: "Key typically holding validation accuracy per epoch:",
        options: ["`'val_accuracy'`", "`'validation_acc'`", "`'test_accuracy'`", "`'acc_val'`"],
        correctOption: 0,
        explanation: "The correct answer is: `'val_accuracy'`"
      },
      {
        questionText: "Rising training accuracy with plateauing/decreasing validation accuracy usually indicates:",
        options: ["Underfitting", "Possible overfitting", "Perfect generalization", "A necessary coding error"],
        correctOption: 1,
        explanation: "The correct answer is: Possible overfitting"
      },
      {
        questionText: "Why plot both training AND validation curves together?",
        options: ["Unnecessary", "Comparing helps diagnose overfitting/underfitting via the gap", "They're always identical", "Changes model weights"],
        correctOption: 1,
        explanation: "The correct answer is: Comparing helps diagnose overfitting/underfitting via the gap"
      },
      {
        questionText: "Function to create a new Matplotlib figure before plotting:",
        options: ["`plt.figure()`", "`plt.new()`", "`plt.create()`", "`plt.window()`"],
        correctOption: 0,
        explanation: "The correct answer is: `plt.figure()`"
      },
      {
        questionText: "A loss curve decreasing then flattening typically suggests:",
        options: ["Diverging", "Converging/stabilizing training", "No progress at all", "Fully random data"],
        correctOption: 1,
        explanation: "The correct answer is: Converging/stabilizing training"
      },
      {
        questionText: "Function displaying a Matplotlib plot in a script:",
        options: ["`plt.show()`", "`plt.display()`", "`plt.render()`", "`plt.output()`"],
        correctOption: 0,
        explanation: "The correct answer is: `plt.show()`"
      },
    ],
    coding: [
      {
        questionText: "Train a model; plot training/validation accuracy on one chart and loss on another.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Find the epoch with lowest validation loss from `history.history` and print its validation accuracy.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "DL - Fine Tuning Parameters": {
    mcqs: [
      {
        questionText: "\"Fine-tuning\" typically refers to:",
        options: ["Training completely from scratch with random weights", "Adapting a pre-trained model via small adjustments to a new related task", "Deleting a model's weights", "Only changing batch size"],
        correctOption: 1,
        explanation: "The correct answer is: Adapting a pre-trained model via small adjustments to a new related task"
      },
      {
        questionText: "Hyperparameter most directly controlling weight-update step size:",
        options: ["Learning rate", "Number of layers", "Batch size only", "Number of classes"],
        correctOption: 0,
        explanation: "The correct answer is: Learning rate"
      },
      {
        questionText: "Effect of too-high learning rate:",
        options: ["Smooth convergence always", "Overshooting/oscillating/diverging loss", "Always faster with no downside", "No effect"],
        correctOption: 1,
        explanation: "The correct answer is: Overshooting/oscillating/diverging loss"
      },
      {
        questionText: "Effect of too-low learning rate:",
        options: ["Very slow convergence, possibly stuck in limited epochs", "Instant convergence always", "Guarantees best accuracy", "No effect on training time"],
        correctOption: 0,
        explanation: "The correct answer is: Very slow convergence, possibly stuck in limited epochs"
      },
      {
        questionText: "Technique gradually reducing learning rate during training:",
        options: ["Learning rate scheduling/decay", "Batch normalization", "Dropout", "Data augmentation"],
        correctOption: 0,
        explanation: "The correct answer is: Learning rate scheduling/decay"
      },
      {
        questionText: "Common early strategy for transfer-learning fine-tuning:",
        options: ["Immediately unfreeze all layers with a high learning rate", "Freeze base layers, train new top layers, then optionally unfreeze with a lower rate", "Delete pre-trained weights first", "Ignore pre-trained weights entirely"],
        correctOption: 1,
        explanation: "The correct answer is: Freeze base layers, train new top layers, then optionally unfreeze with a lower rate"
      },
      {
        questionText: "Callback that reduces learning rate when a monitored metric plateaus:",
        options: ["ReduceLROnPlateau", "ModelCheckpoint only", "TensorBoard", "CSVLogger"],
        correctOption: 0,
        explanation: "The correct answer is: ReduceLROnPlateau"
      },
      {
        questionText: "Risk of increasing epochs without other changes:",
        options: ["Guaranteed better test performance always", "Overfitting if the model starts memorizing training data", "No risk whatsoever", "Decreased training time"],
        correctOption: 1,
        explanation: "The correct answer is: Overfitting if the model starts memorizing training data"
      },
    ],
    coding: [
      {
        questionText: "Train the same model twice with a high LR (0.1) and a low LR (0.0001); compare final training loss.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Use `ReduceLROnPlateau` monitoring validation loss; print the LR before/after training to see if it changed.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "DL - CNN & Computer Vision": {
    mcqs: [
      {
        questionText: "Convolutional layers in CNNs primarily:",
        options: ["Randomly shuffle pixels", "Apply filters/kernels to extract spatial features like edges and textures", "Remove color channels", "Sort images alphabetically"],
        correctOption: 1,
        explanation: "The correct answer is: Apply filters/kernels to extract spatial features like edges and textures"
      },
      {
        questionText: "Pooling layers are used to:",
        options: ["Increase spatial dimensions of feature maps", "Downsample feature maps, reducing dimensionality while retaining important information", "Add more color channels", "Perform classification directly"],
        correctOption: 1,
        explanation: "The correct answer is: Downsample feature maps, reducing dimensionality while retaining important information"
      },
      {
        questionText: "OpenCV is primarily a library for:",
        options: ["Deep learning model training only", "Image and video processing/computer vision tasks", "Database management", "Text-based NLP only"],
        correctOption: 1,
        explanation: "The correct answer is: Image and video processing/computer vision tasks"
      },
      {
        questionText: "Transfer Learning in computer vision involves:",
        options: ["Training a model completely from scratch every time", "Reusing a pre-trained model and fine-tuning it for a new, related task", "Ignoring pre-trained weights entirely", "Only works for regression tasks"],
        correctOption: 1,
        explanation: "The correct answer is: Reusing a pre-trained model and fine-tuning it for a new, related task"
      },
      {
        questionText: "Image classification refers to:",
        options: ["Assigning a class label to an entire image", "Detecting the exact pixel location of an object boundary", "Compressing image file size", "Converting images to text only"],
        correctOption: 0,
        explanation: "The correct answer is: Assigning a class label to an entire image"
      },
      {
        questionText: "Common image pre-processing step before CNN training:",
        options: ["Resizing and normalizing pixel values", "Deleting all image metadata only", "Removing the labels", "Converting images into SQL tables"],
        correctOption: 0,
        explanation: "The correct answer is: Resizing and normalizing pixel values"
      },
      {
        questionText: "Feature extraction in computer vision refers to:",
        options: ["Identifying meaningful patterns (edges, shapes, textures) from raw image data", "Random deletion of pixels", "Database indexing", "Data encryption"],
        correctOption: 0,
        explanation: "The correct answer is: Identifying meaningful patterns (edges, shapes, textures) from raw image data"
      },
      {
        questionText: "Object recognition and tracking is important in applications such as:",
        options: ["Autonomous vehicles detecting and following pedestrians/vehicles", "Simple text editing", "Spreadsheet formula calculation", "Basic arithmetic operations"],
        correctOption: 0,
        explanation: "The correct answer is: Autonomous vehicles detecting and following pedestrians/vehicles"
      },
    ],
    coding: [
      {
        questionText: "Using OpenCV, read an image, convert it to grayscale, and apply Gaussian blur, then display or save the processed image.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Using TensorFlow/Keras, load a pre-trained model (e.g., MobileNetV2) with transfer learning, freeze its base layers, add a custom classification head, and compile the model for a new image classification task.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "class", "with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "DL - RNN": {
    mcqs: [
      {
        questionText: "RNNs are specifically designed to process:",
        options: ["Independent, unordered data points", "Sequential data where order/context matter", "Only image data", "Only tabular data with no time component"],
        correctOption: 1,
        explanation: "The correct answer is: Sequential data where order/context matter"
      },
      {
        questionText: "What allows an RNN to \"remember\" prior time steps?",
        options: ["A hidden state passed and updated across time steps", "A separate database connection", "Convolutional filters", "A confusion matrix"],
        correctOption: 0,
        explanation: "The correct answer is: A hidden state passed and updated across time steps"
      },
      {
        questionText: "Common problem with vanilla RNNs on long sequences:",
        options: ["They train too quickly", "Vanishing/exploding gradients, hard to learn long-term dependencies", "They cannot process sequential data", "They require no training data"],
        correctOption: 1,
        explanation: "The correct answer is: Vanishing/exploding gradients, hard to learn long-term dependencies"
      },
      {
        questionText: "RNN variant using gates (input/forget/output) for long-term dependencies:",
        options: ["LSTM", "Simple feedforward network", "K-Means", "PCA"],
        correctOption: 0,
        explanation: "The correct answer is: LSTM"
      },
      {
        questionText: "Real-world application well-suited to RNNs:",
        options: ["Time series forecasting or text generation", "Static image classification", "Clustering unordered customer data", "Tabular regression with independent rows"],
        correctOption: 0,
        explanation: "The correct answer is: Time series forecasting or text generation"
      },
      {
        questionText: "\"Many-to-one\" describes:",
        options: ["Multiple time-step inputs producing a single output (e.g., sentence sentiment)", "One input producing multiple outputs", "No inputs/outputs", "Multiple models producing one dataset"],
        correctOption: 0,
        explanation: "The correct answer is: Multiple time-step inputs producing a single output (e.g., sentence sentiment)"
      },
      {
        questionText: "GRUs are often considered:",
        options: ["Unrelated to RNNs", "A simplified LSTM alternative with fewer gates, often faster with comparable performance", "A CNN layer", "A clustering algorithm"],
        correctOption: 1,
        explanation: "The correct answer is: A simplified LSTM alternative with fewer gates, often faster with comparable performance"
      },
      {
        questionText: "Keras layer type for a simple RNN:",
        options: ["`SimpleRNN` (or `LSTM`/`GRU`)", "`Conv2D`", "`Dense` only", "`Dropout`"],
        correctOption: 0,
        explanation: "The correct answer is: `SimpleRNN` (or `LSTM`/`GRU`)"
      },
    ],
    coding: [
      {
        questionText: "Build a simple RNN (`SimpleRNN` or `LSTM`) predicting the next value in a numeric sequence.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Tokenize/pad a small text dataset and build a simple LSTM-based binary classification architecture.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["class", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "DL - Loss, Optimization, Activation Functions": {
    mcqs: [
      {
        questionText: "Activation outputting values between 0 and 1, common in binary output layers:",
        options: ["Sigmoid", "ReLU", "Softmax", "Linear"],
        correctOption: 0,
        explanation: "The correct answer is: Sigmoid"
      },
      {
        questionText: "Activation commonly used in hidden layers of modern networks:",
        options: ["ReLU", "Sigmoid only", "Step function", "Identity function only"],
        correctOption: 0,
        explanation: "The correct answer is: ReLU"
      },
      {
        questionText: "Activation used in output layer for multi-class classification:",
        options: ["Softmax", "Sigmoid only", "ReLU", "Tanh"],
        correctOption: 0,
        explanation: "The correct answer is: Softmax"
      },
      {
        questionText: "Loss commonly used for multi-class classification with integer-encoded labels:",
        options: ["`sparse_categorical_crossentropy`", "`mean_squared_error`", "`binary_crossentropy` only", "`mean_absolute_error`"],
        correctOption: 0,
        explanation: "The correct answer is: `sparse_categorical_crossentropy`"
      },
      {
        questionText: "Loss commonly used for regression:",
        options: ["Mean Squared Error", "Categorical Crossentropy", "Binary Crossentropy", "Hinge loss only"],
        correctOption: 0,
        explanation: "The correct answer is: Mean Squared Error"
      },
      {
        questionText: "Adam is an example of:",
        options: ["An activation function", "An optimization algorithm adapting learning rates using gradient moment estimates", "A loss function", "A layer type"],
        correctOption: 1,
        explanation: "The correct answer is: An optimization algorithm adapting learning rates using gradient moment estimates"
      },
      {
        questionText: "SGD updates weights based on:",
        options: ["Gradient over the entire dataset once per epoch only", "Gradient from a mini-batch (or single sample), updating more frequently", "Random changes unrelated to gradients", "A fixed schedule unrelated to loss"],
        correctOption: 1,
        explanation: "The correct answer is: Gradient from a mini-batch (or single sample), updating more frequently"
      },
      {
        questionText: "Why is ReLU generally preferred over Sigmoid/Tanh in deep hidden layers?",
        options: ["ReLU always outputs negative values", "Helps mitigate vanishing gradients for positive inputs and is computationally efficient", "Cannot be used in Keras", "Converts data to categorical form"],
        correctOption: 1,
        explanation: "The correct answer is: Helps mitigate vanishing gradients for positive inputs and is computationally efficient"
      },
    ],
    coding: [
      {
        questionText: "Manually implement ReLU and Sigmoid and apply each to a small NumPy array.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Compile identical architectures with `sgd` and `adam` optimizers on the same data; compare final training loss.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "DL - Real-World Structured Code": {
    mcqs: [
      {
        questionText: "Why separate the \"data pipeline\" from the \"model\" code?",
        options: ["Not good practice", "Improves maintainability, reusability, easier swapping of datasets/models", "Required by TensorFlow", "No practical benefit"],
        correctOption: 1,
        explanation: "The correct answer is: Improves maintainability, reusability, easier swapping of datasets/models"
      },
      {
        questionText: "Common practice to prevent data leakage between train/test:",
        options: ["Fit scalers on training data only, apply the same transform to test data", "Fit the scaler on combined train+test before splitting", "Scale test set independently with its own stats", "Ignore scaling entirely"],
        correctOption: 0,
        explanation: "The correct answer is: Fit scalers on training data only, apply the same transform to test data"
      },
      {
        questionText: "Purpose of `requirements.txt`/`environment.yml`:",
        options: ["Document/reproduce exact dependency versions", "Store trained model weights", "Store the dataset", "Configure the GPU driver"],
        correctOption: 0,
        explanation: "The correct answer is: Document/reproduce exact dependency versions"
      },
      {
        questionText: "Why include unit tests for preprocessing functions?",
        options: ["Unnecessary for ML code", "Catch bugs early, ensure expected behavior as code evolves", "Replace model evaluation", "Required by Python syntax"],
        correctOption: 1,
        explanation: "The correct answer is: Catch bugs early, ensure expected behavior as code evolves"
      },
      {
        questionText: "Practice making a project reproducible across machines/runs:",
        options: ["Fix random seeds and pin library versions", "Never record the environment", "Randomize the seed intentionally", "Avoid version control"],
        correctOption: 0,
        explanation: "The correct answer is: Fix random seeds and pin library versions"
      },
      {
        questionText: "Why is model versioning important in production?",
        options: ["Not important — only the latest matters", "Allows tracking/comparing/rolling back models if a new one underperforms", "Slows down training", "Auto-changes architecture"],
        correctOption: 1,
        explanation: "The correct answer is: Allows tracking/comparing/rolling back models if a new one underperforms"
      },
      {
        questionText: "Common real-world consideration deploying a DL model as an API:",
        options: ["Ignore input validation", "Validate/preprocess incoming data consistently with training-time processing", "Skip preprocessing at inference", "Only accept raw untransformed data"],
        correctOption: 1,
        explanation: "The correct answer is: Validate/preprocess incoming data consistently with training-time processing"
      },
      {
        questionText: "Why is logging important in a deployed DL system?",
        options: ["No value once deployed", "Helps monitor performance over time, detect data drift, debug issues", "Only useful during training", "Replaces the test set"],
        correctOption: 1,
        explanation: "The correct answer is: Helps monitor performance over time, detect data drift, debug issues"
      },
    ],
    coding: [
      {
        questionText: "Write a structured script (`load_and_preprocess_data()`, `build_model()`, `train_and_save_model()`) tying together a full training pipeline for a synthetic classification task.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "class", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Write a `predict(input_data)` function that loads a saved Keras model, applies the same preprocessing used in training, and returns a prediction.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["return", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "NLP - Introduction": {
    mcqs: [
      {
        questionText: "NLP stands for:",
        options: ["Natural Language Processing", "Neural Language Programming", "Numeric Language Processing", "Natural Learning Process"],
        correctOption: 0,
        explanation: "The correct answer is: Natural Language Processing"
      },
      {
        questionText: "Core goal of NLP:",
        options: ["Enabling computers to understand, interpret, and generate human language", "Only numeric calculations", "Managing databases", "Rendering 3D graphics"],
        correctOption: 0,
        explanation: "The correct answer is: Enabling computers to understand, interpret, and generate human language"
      },
      {
        questionText: "Common real-world NLP application:",
        options: ["Chatbots and virtual assistants", "Spreadsheet formula calculation", "Image compression", "3D game rendering"],
        correctOption: 0,
        explanation: "The correct answer is: Chatbots and virtual assistants"
      },
      {
        questionText: "\"Unstructured text data\" best describes:",
        options: ["Data neatly organized into rows/columns", "Free-form text like reviews, tweets, or emails", "Only numeric data", "Data no computer can process"],
        correctOption: 1,
        explanation: "The correct answer is: Free-form text like reviews, tweets, or emails"
      },
      {
        questionText: "Typical challenge in NLP:",
        options: ["Ambiguity and context-dependence of language", "Text always being grammatically perfect", "All languages having identical grammar", "Text never containing typos"],
        correctOption: 0,
        explanation: "The correct answer is: Ambiguity and context-dependence of language"
      },
      {
        questionText: "Python libraries commonly used for NLP (as in this course):",
        options: ["NLTK and spaCy", "Matplotlib and Seaborn only", "Flask and Django", "BeautifulSoup only"],
        correctOption: 0,
        explanation: "The correct answer is: NLTK and spaCy"
      },
      {
        questionText: "Sentiment analysis involves:",
        options: ["Determining the emotional tone of text", "Translating between languages only", "Compressing text files", "Formatting text into tables"],
        correctOption: 0,
        explanation: "The correct answer is: Determining the emotional tone of text"
      },
      {
        questionText: "\"Tokenization\" best describes:",
        options: ["Encrypting text data", "Splitting text into smaller units (words/sentences)", "Removing all text", "Converting text into images"],
        correctOption: 1,
        explanation: "The correct answer is: Splitting text into smaller units (words/sentences)"
      },
    ],
    coding: [
      {
        questionText: "Split a sample paragraph into sentences and then words using basic string methods.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Use NLTK's `word_tokenize()` and `sent_tokenize()` to tokenize a paragraph and print the counts.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "NLP - Text Wrangling and Cleaning": {
    mcqs: [
      {
        questionText: "Common text cleaning step:",
        options: ["Converting all text to lowercase for consistency", "Adding random punctuation", "Duplicating every sentence", "Increasing text length artificially"],
        correctOption: 0,
        explanation: "The correct answer is: Converting all text to lowercase for consistency"
      },
      {
        questionText: "\"Stopwords\" are:",
        options: ["Words carrying strong sentiment always", "Common words (\"the\", \"is\", \"and\") often removed for having little unique meaning", "Misspelled words", "Words only found in tweets"],
        correctOption: 1,
        explanation: "The correct answer is: Common words (\"the\", \"is\", \"and\") often removed for having little unique meaning"
      },
      {
        questionText: "Common Python approach to remove punctuation:",
        options: ["`str.translate()` with a table from `string.punctuation`, or regex substitution", "`str.remove_all()`", "`str.clean()`", "`str.no_punct()`"],
        correctOption: 0,
        explanation: "The correct answer is: `str.translate()` with a table from `string.punctuation`, or regex substitution"
      },
      {
        questionText: "\"Stemming\" does:",
        options: ["Translates words to another language", "Reduces words to a root form by crude suffix removal (e.g., \"running\"→\"run\")", "Removes all vowels", "Converts text to numeric vectors directly"],
        correctOption: 1,
        explanation: "The correct answer is: Reduces words to a root form by crude suffix removal (e.g., \"running\"→\"run\")"
      },
      {
        questionText: "\"Lemmatization\" differs from stemming because it:",
        options: ["Is identical to stemming", "Reduces words to a dictionary base form using vocabulary/grammar rules, often more accurate", "Removes all stopwords", "Only works on numbers"],
        correctOption: 1,
        explanation: "The correct answer is: Reduces words to a dictionary base form using vocabulary/grammar rules, often more accurate"
      },
      {
        questionText: "Regex approach to remove URLs from tweet/text data:",
        options: ["A pattern like `http\\S+` substituted with empty string", "Manual character deletion with no pattern", "Removing all text entirely", "Converting URLs into images"],
        correctOption: 0,
        explanation: "The correct answer is: A pattern like `http\\S+` substituted with empty string"
      },
      {
        questionText: "Why handle contractions (e.g., \"don't\"→\"do not\") during cleaning?",
        options: ["Never important", "Standardizes text and improves downstream tokenization consistency", "Always breaks the text", "Changes the sentiment"],
        correctOption: 1,
        explanation: "The correct answer is: Standardizes text and improves downstream tokenization consistency"
      },
      {
        questionText: "Library providing easy stopword removal and stemming/lemmatization:",
        options: ["NLTK", "Matplotlib", "Seaborn", "OpenCV"],
        correctOption: 0,
        explanation: "The correct answer is: NLTK"
      },
    ],
    coding: [
      {
        questionText: "Clean a raw text sample: lowercase, remove punctuation, remove stopwords (NLTK), print result.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Apply both stemming (`PorterStemmer`) and lemmatization (`WordNetLemmatizer`) to sample words; print a comparison table.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "NLP - Replacing and Correcting Words": {
    mcqs: [
      {
        questionText: "Why replace informal abbreviations (\"u\"→\"you\", \"brb\"→\"be right back\") before analysis?",
        options: ["Never useful", "Standardizes informal language for better downstream NLP processing", "Always reduces accuracy", "Converts text into numbers directly"],
        correctOption: 1,
        explanation: "The correct answer is: Standardizes informal language for better downstream NLP processing"
      },
      {
        questionText: "Common approach to correct simple spelling mistakes:",
        options: ["Libraries like `TextBlob` or `pyspellchecker`, suggesting corrections via dictionaries/edit distance", "Manually retyping every document", "Ignoring spelling always", "Deleting all misspelled words"],
        correctOption: 0,
        explanation: "The correct answer is: Libraries like `TextBlob` or `pyspellchecker`, suggesting corrections via dictionaries/edit distance"
      },
      {
        questionText: "\"Edit distance\" (e.g., Levenshtein) is used for:",
        options: ["The minimum single-character edits to change one word into another", "Sentence length", "Word frequency", "Sentiment polarity"],
        correctOption: 0,
        explanation: "The correct answer is: The minimum single-character edits to change one word into another"
      },
      {
        questionText: "Simple Python approach to replace multiple specific words via a mapping dict:",
        options: ["Loop the dict and use `str.replace(old, new)` per pair (or regex substitution)", "Not possible in Python", "Only regex can replace words", "Only manual editing works"],
        correctOption: 0,
        explanation: "The correct answer is: Loop the dict and use `str.replace(old, new)` per pair (or regex substitution)"
      },
      {
        questionText: "Why correct repeated characters (\"sooo goooood\"→\"so good\") in social text?",
        options: ["Never useful", "Normalizes exaggerated spellings otherwise treated as unknown/OOV words", "Changes meaning entirely", "Removes all vowels"],
        correctOption: 1,
        explanation: "The correct answer is: Normalizes exaggerated spellings otherwise treated as unknown/OOV words"
      },
      {
        questionText: "Library with a simple `.correct()` method for basic spelling correction:",
        options: ["`TextBlob`", "`Matplotlib`", "`Seaborn`", "`OpenCV`"],
        correctOption: 0,
        explanation: "The correct answer is: `TextBlob`"
      },
      {
        questionText: "Word replacement dictionaries for slang (\"lol\", \"omg\") are useful because they:",
        options: ["Have no impact", "Convert informal internet slang into standard form recognizable by models trained on formal text", "Always decrease accuracy", "Convert text to images"],
        correctOption: 1,
        explanation: "The correct answer is: Convert informal internet slang into standard form recognizable by models trained on formal text"
      },
      {
        questionText: "Downside of aggressive automatic spelling correction:",
        options: ["None ever", "Might incorrectly \"correct\" domain-specific terms/names/stylistic spellings, altering meaning", "Always improves results with no risk", "Removes all numbers"],
        correctOption: 1,
        explanation: "The correct answer is: Might incorrectly \"correct\" domain-specific terms/names/stylistic spellings, altering meaning"
      },
    ],
    coding: [
      {
        questionText: "Use a dict of chat abbreviations to replace them with full forms in a sample sentence.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Use `TextBlob` (or `pyspellchecker`) to detect/correct spelling mistakes in a sample sentence.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "NLP - Use Case": {
    mcqs: [
      {
        questionText: "Realistic end-to-end NLP use case:",
        options: ["Spam classifier: preprocess emails, extract TF-IDF features, train a classifier", "Only printing \"Hello World\"", "Sorting numbers", "Rendering a webpage"],
        correctOption: 0,
        explanation: "The correct answer is: Spam classifier: preprocess emails, extract TF-IDF features, train a classifier"
      },
      {
        questionText: "Typical first step in a customer-review analysis use case:",
        options: ["Directly training on raw uncleaned text", "Loading review data and cleaning text (lowercasing, removing punctuation/stopwords)", "Skipping data collection", "Deploying with no evaluation"],
        correctOption: 1,
        explanation: "The correct answer is: Loading review data and cleaning text (lowercasing, removing punctuation/stopwords)"
      },
      {
        questionText: "Feature representation for a resume-screening use case:",
        options: ["TF-IDF vectors or word embeddings", "Random numbers unrelated to text", "File size only", "Creation date only"],
        correctOption: 0,
        explanation: "The correct answer is: TF-IDF vectors or word embeddings"
      },
      {
        questionText: "Appropriate metric for a binary \"spam vs not spam\" use case:",
        options: ["Accuracy, precision, recall, F1-score", "Word count only", "Interface color", "Sender domain length"],
        correctOption: 0,
        explanation: "The correct answer is: Accuracy, precision, recall, F1-score"
      },
      {
        questionText: "Why is intent classification important in a chatbot use case?",
        options: ["No role in chatbots", "Helps the system understand what the user wants to achieve", "Only matters for images", "Replaces NLP processing entirely"],
        correctOption: 1,
        explanation: "The correct answer is: Helps the system understand what the user wants to achieve"
      },
      {
        questionText: "Why does domain-specific preprocessing/vocabulary matter for domain use cases (e.g., legal/medical)?",
        options: ["Never matters", "Domain jargon/abbreviations differ from general text, affecting model performance", "Domain doesn't affect NLP", "Only affects images"],
        correctOption: 1,
        explanation: "The correct answer is: Domain jargon/abbreviations differ from general text, affecting model performance"
      },
      {
        questionText: "Reasonable use case for topic modeling (e.g., LDA):",
        options: ["Discovering underlying themes from a document collection", "Sorting numbers", "Predicting stock prices from numeric data alone", "Formatting a spreadsheet"],
        correctOption: 0,
        explanation: "The correct answer is: Discovering underlying themes from a document collection"
      },
      {
        questionText: "Important consideration deploying an NLP model in a real app:",
        options: ["Ensuring inference-time preprocessing matches training-time preprocessing", "Ignoring preprocessing consistency", "Running once and never updating", "Avoiding evaluation metrics"],
        correctOption: 0,
        explanation: "The correct answer is: Ensuring inference-time preprocessing matches training-time preprocessing"
      },
    ],
    coding: [
      {
        questionText: "Clean a small labeled email dataset, vectorize with `CountVectorizer`/`TfidfVectorizer`, and train a Naive Bayes spam classifier.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["class", "with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Convert star ratings to binary sentiment (≥4 positive), and prepare cleaned text/labels ready for training.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "NLP - Bag of Words, TF-IDF": {
    mcqs: [
      {
        questionText: "Bag-of-Words represents text by:",
        options: ["Preserving exact order/grammar", "Counting frequency of each word, ignoring order/grammar", "Converting text into images", "Removing all words"],
        correctOption: 1,
        explanation: "The correct answer is: Counting frequency of each word, ignoring order/grammar"
      },
      {
        questionText: "scikit-learn class for a Bag-of-Words representation:",
        options: ["`CountVectorizer`", "`TfidfTransformer` only", "`LabelEncoder`", "`StandardScaler`"],
        correctOption: 0,
        explanation: "The correct answer is: `CountVectorizer`"
      },
      {
        questionText: "TF-IDF stands for:",
        options: ["Term Frequency-Inverse Document Frequency", "Text Format-Indexed Document Frequency", "Total Frequency-Individual Document Format", "Term Format-Indexed Data Feature"],
        correctOption: 0,
        explanation: "The correct answer is: Term Frequency-Inverse Document Frequency"
      },
      {
        questionText: "What does the \"Inverse Document Frequency\" component do?",
        options: ["Increases weight for words common across all documents", "Decreases weight of words appearing in many documents, highlighting unique terms", "Has no effect", "Removes stopwords automatically"],
        correctOption: 1,
        explanation: "The correct answer is: Decreases weight of words appearing in many documents, highlighting unique terms"
      },
      {
        questionText: "scikit-learn class computing TF-IDF vectors directly from raw text:",
        options: ["`TfidfVectorizer`", "`CountVectorizer` only", "`OneHotEncoder`", "`StandardScaler`"],
        correctOption: 0,
        explanation: "The correct answer is: `TfidfVectorizer`"
      },
      {
        questionText: "Key limitation of Bag-of-Words:",
        options: ["Perfectly captures order/meaning", "Ignores word order/context (e.g., \"not good\" vs \"good not\" look similar)", "Cannot be implemented in Python", "Only works with numeric data"],
        correctOption: 1,
        explanation: "The correct answer is: Ignores word order/context (e.g., \"not good\" vs \"good not\" look similar)"
      },
      {
        questionText: "Why might TF-IDF be preferred over raw word counts for classification tasks?",
        options: ["Never provides any benefit", "Down-weights very common words, highlighting discriminative terms", "Always increases vocabulary size", "Converts text into images"],
        correctOption: 1,
        explanation: "The correct answer is: Down-weights very common words, highlighting discriminative terms"
      },
      {
        questionText: "Typical shape of the resulting matrix from `CountVectorizer`/`TfidfVectorizer`:",
        options: ["Rows = documents, columns = unique vocabulary words (often sparse)", "A single scalar per document", "An image matrix", "A single column regardless of vocabulary"],
        correctOption: 0,
        explanation: "The correct answer is: Rows = documents, columns = unique vocabulary words (often sparse)"
      },
    ],
    coding: [
      {
        questionText: "Convert 4-5 sample sentences into a Bag-of-Words matrix using `CountVectorizer`; print vocabulary and array.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Convert the same sentences into TF-IDF vectors; print the top 3 highest-weighted words for one sentence.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "NLP - Twitter Sentiment Analysis": {
    mcqs: [
      {
        questionText: "Preprocessing step specific to tweets before sentiment analysis:",
        options: ["Removing @mentions, hashtag symbols, and URLs", "Adding more hashtags to increase sentiment strength", "Translating every tweet to multiple languages", "Converting tweets into images"],
        correctOption: 0,
        explanation: "The correct answer is: Removing @mentions, hashtag symbols, and URLs"
      },
      {
        questionText: "Typical target sentiment classes for Twitter sentiment analysis:",
        options: ["Positive, Negative, and (often) Neutral", "Only \"spam\"/\"not spam\"", "Only numeric star ratings 1-5", "Only \"long\"/\"short\""],
        correctOption: 0,
        explanation: "The correct answer is: Positive, Negative, and (often) Neutral"
      },
      {
        questionText: "Why is handling emojis important?",
        options: ["No bearing on sentiment", "Emojis often carry significant sentiment signal (😊/😡)", "Emojis always break the program", "Emojis must always be deleted"],
        correctOption: 1,
        explanation: "The correct answer is: Emojis often carry significant sentiment signal (😊/😡)"
      },
      {
        questionText: "Common baseline classifier for tweet sentiment after vectorization:",
        options: ["Logistic Regression or Naive Bayes", "K-Means only", "Linear Regression for a categorical target", "PCA"],
        correctOption: 0,
        explanation: "The correct answer is: Logistic Regression or Naive Bayes"
      },
      {
        questionText: "Why is class imbalance a concern here?",
        options: ["No effect on training/evaluation", "A model could get high accuracy on the majority class while performing poorly on minority classes", "Only affects images", "Always improves performance automatically"],
        correctOption: 1,
        explanation: "The correct answer is: A model could get high accuracy on the majority class while performing poorly on minority classes"
      },
      {
        questionText: "Common source of noise specific to tweets:",
        options: ["Hashtags, slang, abbreviations, inconsistent spelling/grammar", "Tweets are always perfectly formatted", "Tweets never contain text", "Tweets are always identical in structure"],
        correctOption: 0,
        explanation: "The correct answer is: Hashtags, slang, abbreviations, inconsistent spelling/grammar"
      },
      {
        questionText: "Library alongside NLTK offering simple lexicon-based sentiment scoring:",
        options: ["VADER (part of NLTK) or TextBlob", "OpenCV", "Matplotlib", "Seaborn"],
        correctOption: 0,
        explanation: "The correct answer is: VADER (part of NLTK) or TextBlob"
      },
      {
        questionText: "Why separate hashtag text (\"#greatday\"→\"great day\") instead of removing hashtags entirely?",
        options: ["Never useful", "Words within a hashtag may carry meaningful content otherwise lost", "Always reduces meaning", "Changes the label automatically"],
        correctOption: 1,
        explanation: "The correct answer is: Words within a hashtag may carry meaningful content otherwise lost"
      },
    ],
    coding: [
      {
        questionText: "Clean sample tweets (remove mentions/URLs, keep hashtag text), convert to TF-IDF features.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Use NLTK's VADER `SentimentIntensityAnalyzer` to score tweets, labeling Positive/Negative/Neutral by compound score.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "NLP - Spacy Library": {
    mcqs: [
      {
        questionText: "spaCy is best described as:",
        options: ["A deep learning framework only for images", "An industrial-strength NLP library offering fast tokenization, POS tagging, NER, etc.", "A database management tool", "A data visualization library"],
        correctOption: 1,
        explanation: "The correct answer is: An industrial-strength NLP library offering fast tokenization, POS tagging, NER, etc."
      },
      {
        questionText: "spaCy object representing processed text (tokens, entities, annotations):",
        options: ["A `Doc` object, created via `nlp(text)`", "A `String` object only", "A `List` object", "A `DataFrame` object"],
        correctOption: 0,
        explanation: "The correct answer is: A `Doc` object, created via `nlp(text)`"
      },
      {
        questionText: "spaCy token attribute giving its part-of-speech tag:",
        options: ["`token.pos_`", "`token.tag_only`", "`token.type_`", "`token.category`"],
        correctOption: 0,
        explanation: "The correct answer is: `token.pos_`"
      },
      {
        questionText: "spaCy feature identifying named entities (people, orgs, locations):",
        options: ["Named Entity Recognition (NER), via `doc.ents`", "Tokenization only", "Stemming", "TF-IDF vectorization"],
        correctOption: 0,
        explanation: "The correct answer is: Named Entity Recognition (NER), via `doc.ents`"
      },
      {
        questionText: "Loading a pre-trained small English model:",
        options: ["`nlp = spacy.load(\"en_core_web_sm\")`", "`nlp = spacy.get(\"english\")`", "`nlp = spacy.Model(\"en\")`", "`nlp = spacy.English()`"],
        correctOption: 0,
        explanation: "The correct answer is: `nlp = spacy.load(\"en_core_web_sm\")`"
      },
      {
        questionText: "spaCy token attribute giving its lemma:",
        options: ["`token.lemma_`", "`token.stem_`", "`token.root_`", "`token.base_`"],
        correctOption: 0,
        explanation: "The correct answer is: `token.lemma_`"
      },
      {
        questionText: "spaCy attribute checking if a token is a stopword:",
        options: ["`token.is_stop`", "`token.stopword`", "`token.check_stop()`", "`token.stop_flag`"],
        correctOption: 0,
        explanation: "The correct answer is: `token.is_stop`"
      },
      {
        questionText: "How spaCy compares to NLTK in design philosophy:",
        options: ["spaCy is research-oriented with many algorithm choices; NLTK is production-optimized", "spaCy is designed for fast, production-ready pipelines with opinionated defaults; NLTK is broader/teaching-oriented", "They are functionally identical", "Neither supports tokenization"],
        correctOption: 1,
        explanation: "The correct answer is: spaCy is designed for fast, production-ready pipelines with opinionated defaults; NLTK is broader/teaching-oriented"
      },
    ],
    coding: [
      {
        questionText: "Use spaCy to process a paragraph and print each token with its POS tag and stopword status.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Use spaCy's NER to extract and print named entities from a sample news paragraph.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Introduction to Gen-AI (Overview)": {
    mcqs: [
      {
        questionText: "Generative AI refers to AI systems that:",
        options: ["Only classify or predict labels for existing data", "Create new content (text, images, audio, code, etc.) resembling patterns learned from training data", "Only perform database queries", "Only manage file storage"],
        correctOption: 1,
        explanation: "The correct answer is: Create new content (text, images, audio, code, etc.) resembling patterns learned from training data"
      },
      {
        questionText: "Which of these is an example of a discriminative model (as opposed to generative)?",
        options: ["A model generating a new image from a text prompt", "A logistic regression model classifying an email as spam or not spam", "A model writing a poem", "A model composing music"],
        correctOption: 1,
        explanation: "The correct answer is: A logistic regression model classifying an email as spam or not spam"
      },
      {
        questionText: "Which of these is a real-world application of Generative AI?",
        options: ["Text-to-image generation, chatbots, and code generation assistants", "Only sorting numbers", "Only managing spreadsheets", "Only rendering static web pages"],
        correctOption: 0,
        explanation: "The correct answer is: Text-to-image generation, chatbots, and code generation assistants"
      },
      {
        questionText: "GANs, VAEs, and Autoregressive models (like GPT) are all examples of:",
        options: ["Types of generative model architectures", "Types of databases", "Types of clustering algorithms", "Types of regression models"],
        correctOption: 0,
        explanation: "The correct answer is: Types of generative model architectures"
      },
      {
        questionText: "A key recent advancement in Generative AI has been:",
        options: ["The decline of neural network research", "Large Language Models (LLMs) built on Transformer architectures, capable of few-shot learning and complex reasoning", "The removal of GPUs from AI research", "The end of open-source AI models"],
        correctOption: 1,
        explanation: "The correct answer is: Large Language Models (LLMs) built on Transformer architectures, capable of few-shot learning and complex reasoning"
      },
      {
        questionText: "Which of the following is a common concern associated with Generative AI systems?",
        options: ["They never make mistakes", "They can hallucinate (generate plausible but false information) and may reflect biases present in training data", "They cannot generate any text", "They require no training data at all"],
        correctOption: 1,
        explanation: "The correct answer is: They can hallucinate (generate plausible but false information) and may reflect biases present in training data"
      },
      {
        questionText: "Discriminative models typically learn:",
        options: ["The joint probability distribution needed to generate new samples", "A decision boundary or mapping directly from inputs to output labels, without necessarily modeling how the data was generated", "Only how to compress images", "Only how to store data in a database"],
        correctOption: 1,
        explanation: "The correct answer is: A decision boundary or mapping directly from inputs to output labels, without necessarily modeling how the data was generated"
      },
      {
        questionText: "Which of these best characterizes \"key applications\" of Generative AI as covered in a typical overview?",
        options: ["Only chatbots — no other applications exist", "Content creation (text/image/audio), code generation, data augmentation, and conversational agents", "Only weather forecasting", "Only spreadsheet automation"],
        correctOption: 1,
        explanation: "The correct answer is: Content creation (text/image/audio), code generation, data augmentation, and conversational agents"
      },
    ],
    coding: [
      {
        questionText: "Write a Python program defining two simple mock functions, `discriminative_model(text)` (returns a fixed label like \"spam\"/\"not spam\") and `generative_model(prompt)` (returns a newly constructed string based on the prompt), illustrating the conceptual difference between discriminative and generative approaches.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["def", "return"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Write a Python program using the HuggingFace `transformers` `pipeline` function to load a text-generation pipeline (e.g., with `distilgpt2`) and generate a short continuation for a given prompt.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "AI Powered Transformers": {
    mcqs: [
      {
        questionText: "The Transformer architecture primarily relies on which mechanism to process sequences?",
        options: ["Recurrence (like RNNs) exclusively", "Self-Attention mechanism", "Convolution only", "K-Means clustering"],
        correctOption: 1,
        explanation: "The correct answer is: Self-Attention mechanism"
      },
      {
        questionText: "In the Transformer's Encoder-Decoder architecture, the Encoder is primarily responsible for:",
        options: ["Generating the final output sequence directly", "Processing the input sequence into contextualized representations", "Performing clustering", "Computing loss only"],
        correctOption: 1,
        explanation: "The correct answer is: Processing the input sequence into contextualized representations"
      },
      {
        questionText: "Self-Attention allows a model to:",
        options: ["Weigh the importance of different words in a sequence relative to each other", "Only look at the first word of a sequence", "Ignore word order completely", "Perform image convolution"],
        correctOption: 0,
        explanation: "The correct answer is: Weigh the importance of different words in a sequence relative to each other"
      },
      {
        questionText: "Masked Attention (used in decoder blocks) ensures that:",
        options: ["The model can see future tokens during training, improving accuracy", "The model only attends to previous and current tokens, preventing \"cheating\" by looking ahead", "All attention weights are zero", "It replaces the need for an encoder"],
        correctOption: 1,
        explanation: "The correct answer is: The model only attends to previous and current tokens, preventing \"cheating\" by looking ahead"
      },
      {
        questionText: "Multi-Head Attention allows the model to:",
        options: ["Jointly attend to information from different representation subspaces at different positions", "Use only a single attention computation", "Avoid using attention altogether", "Perform clustering instead of attention"],
        correctOption: 0,
        explanation: "The correct answer is: Jointly attend to information from different representation subspaces at different positions"
      },
      {
        questionText: "Diffusion Models are primarily used for:",
        options: ["Generating data (e.g., images) by iteratively denoising random noise", "Classifying text sentiment only", "SQL query optimization", "Clustering tabular data"],
        correctOption: 0,
        explanation: "The correct answer is: Generating data (e.g., images) by iteratively denoising random noise"
      },
      {
        questionText: "Autoregressive models generate sequences by:",
        options: ["Predicting all tokens simultaneously with no dependency", "Predicting the next token based on previously generated tokens", "Ignoring previous outputs", "Only working on images"],
        correctOption: 1,
        explanation: "The correct answer is: Predicting the next token based on previously generated tokens"
      },
      {
        questionText: "Compared to RNNs, Transformers offer the key advantage of:",
        options: ["Sequential-only processing preventing parallelization", "Greater parallelization during training since they don't require sequential processing", "Inability to handle long sequences", "No use of attention"],
        correctOption: 1,
        explanation: "The correct answer is: Greater parallelization during training since they don't require sequential processing"
      },
    ],
    coding: [
      {
        questionText: "Using the HuggingFace Transformers library, write code to load a pre-trained model (e.g., BERT) and tokenizer, and use it to generate embeddings for a sample sentence.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Write Python (NumPy) code to implement a simplified scaled dot-product self-attention function that takes Query, Key, and Value matrices and returns the attention output.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["return", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Prompt Engineering": {
    mcqs: [
      {
        questionText: "Generative AI models primarily aim to:",
        options: ["Classify existing data into fixed categories only", "Generate new content (text, images, etc.) similar to the data they were trained on", "Only cluster data", "Perform database transactions"],
        correctOption: 1,
        explanation: "The correct answer is: Generate new content (text, images, etc.) similar to the data they were trained on"
      },
      {
        questionText: "GANs (Generative Adversarial Networks) work using:",
        options: ["A single network with no competition", "A generator and a discriminator network trained in competition with each other", "Only supervised classification", "Clustering algorithms"],
        correctOption: 1,
        explanation: "The correct answer is: A generator and a discriminator network trained in competition with each other"
      },
      {
        questionText: "VAEs (Variational Autoencoders) generate data by:",
        options: ["Learning a probabilistic latent space representation and sampling from it to generate new data", "Directly copying training examples", "Using only decision trees", "Ignoring the encoder entirely"],
        correctOption: 0,
        explanation: "The correct answer is: Learning a probabilistic latent space representation and sampling from it to generate new data"
      },
      {
        questionText: "Large Language Models (LLMs) are typically built using which architecture?",
        options: ["Convolutional Neural Networks only", "The Transformer architecture", "K-Means clustering", "Simple linear regression"],
        correctOption: 1,
        explanation: "The correct answer is: The Transformer architecture"
      },
      {
        questionText: "HuggingFace is popular because it provides:",
        options: ["A hub of pre-trained models and tools for NLP/generative AI tasks", "Only database management tools", "Cloud storage exclusively", "Video editing software"],
        correctOption: 0,
        explanation: "The correct answer is: A hub of pre-trained models and tools for NLP/generative AI tasks"
      },
      {
        questionText: "A common limitation of LLMs is:",
        options: ["They always produce factually correct information", "They can \"hallucinate\" - generate plausible-sounding but incorrect or fabricated information", "They cannot process any text", "They require no training data"],
        correctOption: 1,
        explanation: "The correct answer is: They can \"hallucinate\" - generate plausible-sounding but incorrect or fabricated information"
      },
      {
        questionText: "Responsible AI development practices include:",
        options: ["Ignoring bias and fairness concerns", "Considering fairness, transparency, privacy, and mitigating harmful outputs", "Deploying models without any testing", "Avoiding documentation"],
        correctOption: 1,
        explanation: "The correct answer is: Considering fairness, transparency, privacy, and mitigating harmful outputs"
      },
      {
        questionText: "Open-source LLMs differ from proprietary/closed models mainly in that they:",
        options: ["Are never usable for commercial projects", "Have publicly available weights/code that can be inspected, modified, and self-hosted", "Cannot be fine-tuned", "Always perform worse than closed models"],
        correctOption: 1,
        explanation: "The correct answer is: Have publicly available weights/code that can be inspected, modified, and self-hosted"
      },
    ],
    coding: [
      {
        questionText: "Using the HuggingFace `transformers` library, write code to load an open-source text-generation model (e.g., GPT-2) and generate a continuation for a given input prompt.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Write a Python function `simple_gan_loss(real_output, fake_output)` that computes a simplified generator and discriminator loss (using binary cross-entropy concepts) given arrays of discriminator outputs for real and fake samples.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Prompting Techniques for Generative Models": {
    mcqs: [
      {
        questionText: "Prompt Engineering is best defined as:",
        options: ["The process of designing and refining inputs to guide a generative AI model toward desired outputs", "Writing traditional software code only", "Training a model from scratch", "Cleaning a dataset"],
        correctOption: 0,
        explanation: "The correct answer is: The process of designing and refining inputs to guide a generative AI model toward desired outputs"
      },
      {
        questionText: "Zero-shot prompting means:",
        options: ["Providing many labeled examples before asking the question", "Asking the model to perform a task without providing any prior examples in the prompt", "Fine-tuning the model with a large dataset", "Using no prompt at all"],
        correctOption: 1,
        explanation: "The correct answer is: Asking the model to perform a task without providing any prior examples in the prompt"
      },
      {
        questionText: "Few-shot prompting involves:",
        options: ["Providing a small number of examples within the prompt to guide the model's response", "Providing zero examples", "Requires retraining the model", "Only works with images"],
        correctOption: 0,
        explanation: "The correct answer is: Providing a small number of examples within the prompt to guide the model's response"
      },
      {
        questionText: "Chain-of-Thought prompting encourages a model to:",
        options: ["Skip reasoning steps and jump directly to the answer", "Break down its reasoning into intermediate steps before arriving at a final answer", "Ignore the question context", "Only produce single-word answers"],
        correctOption: 1,
        explanation: "The correct answer is: Break down its reasoning into intermediate steps before arriving at a final answer"
      },
      {
        questionText: "Parameter tuning in the context of generative models (e.g., temperature, top-k, top-p) primarily controls:",
        options: ["The model's training data size", "The randomness/creativity vs. determinism of the generated output", "The database schema", "The number of layers in the model"],
        correctOption: 1,
        explanation: "The correct answer is: The randomness/creativity vs. determinism of the generated output"
      },
      {
        questionText: "A high \"temperature\" setting in text generation typically results in:",
        options: ["More deterministic, repetitive output", "More random/creative and diverse output", "No output at all", "Faster training time"],
        correctOption: 1,
        explanation: "The correct answer is: More random/creative and diverse output"
      },
      {
        questionText: "Which of these is a best practice for writing effective prompts?",
        options: ["Being vague and ambiguous", "Being clear, specific, and providing necessary context or constraints", "Avoiding any examples", "Using only single-word prompts"],
        correctOption: 1,
        explanation: "The correct answer is: Being clear, specific, and providing necessary context or constraints"
      },
      {
        questionText: "Prompt design strategies often include:",
        options: ["Specifying the desired output format, role, and constraints explicitly", "Never specifying any format", "Removing all context from the prompt", "Avoiding iteration or refinement"],
        correctOption: 0,
        explanation: "The correct answer is: Specifying the desired output format, role, and constraints explicitly"
      },
    ],
    coding: [
      {
        questionText: "Write a Python script that uses an LLM API (or a mock function) to send a zero-shot prompt and a few-shot prompt (with 2 examples) for a sentiment classification task, and compares the outputs.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "class", "with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Write a Python function `build_cot_prompt(question)` that takes a question and returns a formatted Chain-of-Thought prompt string instructing the model to \"think step by step\" before answering.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "return", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Introduction to Vector DB": {
    mcqs: [
      {
        questionText: "A vector database is primarily designed to:",
        options: ["Store and efficiently search high-dimensional numeric vector embeddings, typically via similarity search", "Store only relational tables with foreign keys", "Replace all traditional file systems", "Store only image files directly"],
        correctOption: 0,
        explanation: "The correct answer is: Store and efficiently search high-dimensional numeric vector embeddings, typically via similarity search"
      },
      {
        questionText: "How does a vector database primarily differ from a traditional SQL database?",
        options: ["There is no meaningful difference", "Vector databases are optimized for similarity search over embeddings (e.g., nearest-neighbor search), while SQL databases are optimized for structured, exact-match relational queries", "SQL databases cannot store any numbers", "Vector databases cannot store any metadata"],
        correctOption: 1,
        explanation: "The correct answer is: Vector databases are optimized for similarity search over embeddings (e.g., nearest-neighbor search), while SQL databases are optimized for structured, exact-match relational queries"
      },
      {
        questionText: "Which algorithm family is commonly used internally by vector databases to speed up approximate nearest-neighbor search?",
        options: ["HNSW (Hierarchical Navigable Small World) graphs, or similar ANN algorithms", "Standard B-tree indexes only", "Bubble sort", "Linear regression"],
        correctOption: 0,
        explanation: "The correct answer is: HNSW (Hierarchical Navigable Small World) graphs, or similar ANN algorithms"
      },
      {
        questionText: "Which of these is a popular vector database/library used in AI applications?",
        options: ["FAISS, Pinecone, Chroma, Weaviate, or Milvus (any of these)", "MySQL only", "Redis only, with no vector-specific features", "Excel"],
        correctOption: 0,
        explanation: "The correct answer is: FAISS, Pinecone, Chroma, Weaviate, or Milvus (any of these)"
      },
      {
        questionText: "What is typically stored alongside each vector embedding in a vector database to make results interpretable?",
        options: ["Nothing else is ever stored", "Metadata (e.g., original text, document ID, source) associated with that vector, retrievable alongside search results", "Only a random number", "A separate unrelated SQL table with no link"],
        correctOption: 1,
        explanation: "The correct answer is: Metadata (e.g., original text, document ID, source) associated with that vector, retrievable alongside search results"
      },
      {
        questionText: "Why can't a traditional SQL database efficiently perform semantic similarity search over embeddings without specialized extensions?",
        options: ["SQL databases are not designed for computing distance/similarity metrics (e.g., cosine similarity) across high-dimensional vectors at scale efficiently", "SQL databases cannot store numbers", "SQL databases cannot store any data types other than text", "SQL is incapable of any mathematical operation"],
        correctOption: 0,
        explanation: "The correct answer is: SQL databases are not designed for computing distance/similarity metrics (e.g., cosine similarity) across high-dimensional vectors at scale efficiently"
      },
      {
        questionText: "In the context of Retrieval-Augmented Generation (RAG), a vector database is primarily used to:",
        options: ["Store the LLM's weights directly", "Retrieve the most relevant document chunks (via embedding similarity) to provide as context to the LLM", "Replace the LLM entirely", "Store the final generated output only"],
        correctOption: 1,
        explanation: "The correct answer is: Retrieve the most relevant document chunks (via embedding similarity) to provide as context to the LLM"
      },
      {
        questionText: "What does \"vector search with NoSQL databases\" typically mean, as some NoSQL databases now offer vector search capabilities?",
        options: ["NoSQL databases can never support vector operations", "Some NoSQL databases (e.g., MongoDB Atlas, Redis) have added vector indexing/search features alongside their traditional document/key-value capabilities", "It means converting NoSQL databases into SQL databases", "It means vectors must always be stored in plain text files instead"],
        correctOption: 1,
        explanation: "The correct answer is: Some NoSQL databases (e.g., MongoDB Atlas, Redis) have added vector indexing/search features alongside their traditional document/key-value capabilities"
      },
    ],
    coding: [
      {
        questionText: "Write a Python program using the FAISS library to create a simple flat vector index, add 5 sample embeddings (random vectors), and perform a nearest-neighbor search for a given query vector, printing the closest matches.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Write a Python program using the Chroma vector database (or a simple in-memory cosine-similarity function if Chroma isn't available) to store a few text documents with their embeddings (using a sentence-transformer model) and retrieve the most similar document to a given query text.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "with", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
  "Introduction to Retrieval-Augmented Generation (RAG)": {
    mcqs: [
      {
        questionText: "RAG primarily combines:",
        options: ["A retrieval system that fetches relevant documents with a generative model that uses them to produce answers", "Only a classification model", "Only a clustering algorithm", "A database with no generative component"],
        correctOption: 0,
        explanation: "The correct answer is: A retrieval system that fetches relevant documents with a generative model that uses them to produce answers"
      },
      {
        questionText: "In an end-to-end RAG pipeline, documents are typically first converted into:",
        options: ["Random numbers", "Vector embeddings for similarity search", "SQL tables only", "Images"],
        correctOption: 1,
        explanation: "The correct answer is: Vector embeddings for similarity search"
      },
      {
        questionText: "LangChain is a framework primarily used to:",
        options: ["Build and orchestrate applications that chain together LLMs, retrievers, and other tools", "Train neural networks from scratch", "Manage relational databases exclusively", "Perform image processing"],
        correctOption: 0,
        explanation: "The correct answer is: Build and orchestrate applications that chain together LLMs, retrievers, and other tools"
      },
      {
        questionText: "Vector databases are used in RAG systems to:",
        options: ["Store and efficiently search high-dimensional embeddings for similarity-based retrieval", "Store only tabular relational data", "Replace the need for any embeddings", "Perform SQL joins exclusively"],
        correctOption: 0,
        explanation: "The correct answer is: Store and efficiently search high-dimensional embeddings for similarity-based retrieval"
      },
      {
        questionText: "The role of the LLM in a RAG system is to:",
        options: ["Retrieve documents directly from the vector database", "Generate a coherent answer using the retrieved context along with the user's query", "Store embeddings permanently", "Perform clustering of documents"],
        correctOption: 1,
        explanation: "The correct answer is: Generate a coherent answer using the retrieved context along with the user's query"
      },
      {
        questionText: "Hybrid Search in RAG typically combines:",
        options: ["Only keyword-based search", "Keyword-based (sparse) search and vector-based (dense) semantic search", "Only image search", "SQL joins with no retrieval"],
        correctOption: 1,
        explanation: "The correct answer is: Keyword-based (sparse) search and vector-based (dense) semantic search"
      },
      {
        questionText: "Reranking in a RAG pipeline is used to:",
        options: ["Randomly shuffle retrieved documents", "Reorder retrieved documents by relevance using a more precise scoring model before passing to the LLM", "Delete all retrieved documents", "Replace the vector database"],
        correctOption: 1,
        explanation: "The correct answer is: Reorder retrieved documents by relevance using a more precise scoring model before passing to the LLM"
      },
      {
        questionText: "Multimodal RAG extends traditional RAG by:",
        options: ["Only supporting text-based retrieval and generation", "Incorporating multiple data modalities such as text, images, and other media in retrieval and generation", "Removing the retrieval component entirely", "Working exclusively with SQL databases"],
        correctOption: 1,
        explanation: "The correct answer is: Incorporating multiple data modalities such as text, images, and other media in retrieval and generation"
      },
    ],
    coding: [
      {
        questionText: "Using a vector database library (e.g., FAISS or Chroma) and a sentence embedding model, write code to index a small set of text documents and retrieve the top-3 most relevant documents for a given query.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
      {
        questionText: "Using LangChain (or a similar framework) and an LLM, write code to build a simple RAG pipeline: retrieve relevant context for a question from a small document store, then pass the context plus question to the LLM to generate an answer.",
        starterCode: "# Write your Python solution below\ndef solution():\n    pass",
        expectedKeywords: ["for", "def"],
        solutionDescription: "Write clean, working Python code that fully satisfies the requirement described in the question."
      },
    ]
  },
};

// NOTE: This used to contain hand-written MCQ/coding presets for Day 1-3, written against the
// OLD syllabus (Variables & Data Types / Strings / Lists & Tuples). The syllabus has since been
// updated to the latest 200-Day Complete Schedule. Curated content for all 101 topics now lives
// in QUESTION_BANK above, keyed by topic title, sourced from the
// Complete_MCQ_Coding_Question_Bank.md question bank. This dictionary is kept for any day-specific
// overrides that should take priority over the topic-level bank; it is empty by default.
export const PRESET_DAILY_QUIZZES: Record<number, { topicTitle: string; mcqs: MCQQuestion[]; coding: CodingQuestion[] }> = {};

// Generate high quality presets for any remaining days
export function getStaticPresetQuiz(dayNumber: number): DayQuiz | null {
  const course = getCourseForDay(dayNumber);
  const topicTitle = getTopicTitleForDay(dayNumber);

  // 1. Day-specific override, if any, takes highest priority.
  if (PRESET_DAILY_QUIZZES[dayNumber]) {
    const data = PRESET_DAILY_QUIZZES[dayNumber];
    return {
      dayNumber,
      courseSlug: course.slug,
      topicTitle: data.topicTitle,
      mcqs: data.mcqs,
      coding: data.coding
    };
  }

  // 2. Curated topic-level question bank (covers all 101 syllabus topics, Days 1-174).
  if (QUESTION_BANK[topicTitle]) {
    const data = QUESTION_BANK[topicTitle];
    return {
      dayNumber,
      courseSlug: course.slug,
      topicTitle,
      mcqs: data.mcqs,
      coding: data.coding
    };
  }

  // 3. No preset available (e.g. Capstone & Review days 175-200) — fall back to AI generation.
  return null;
}
