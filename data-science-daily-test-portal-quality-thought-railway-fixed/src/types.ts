--- a/src/types.ts
+++ b/src/types.ts
@@ -110,70 +110,63 @@
   description: string;
 }
 
+// Updated to match the latest 200-Day Complete Schedule (7 modules, 101 topics)
 export const SYLLABUS: CourseSyllabus[] = [
   {
     slug: "python",
-    name: "Python Programming",
+    name: "Python Programming Fundamentals",
     startDay: 1,
-    endDay: 30,
+    endDay: 28,
     icon: "Code2",
-    description: "Syntax, variables, loops, lists, dicts, functions, OOP, and exceptions.",
-  },
-  {
-    slug: "numpy",
-    name: "NumPy Essentials",
-    startDay: 31,
-    endDay: 45,
-    icon: "Grid3X3",
-    description: "Vector calculations, multi-dimensional slicing, matrix algebra, and broadcasting.",
+    description: "Installation, syntax, variables, data types, operators, flow control, strings, functions, modules, packages, lists/tuples/sets/dicts, OOP, and exception handling (21 topics).",
   },
   {
     slug: "pandas",
-    name: "Pandas Data Wrangling",
-    startDay: 46,
-    endDay: 75,
+    name: "Pandas for Data Analysis",
+    startDay: 29,
+    endDay: 54,
     icon: "Table2",
-    description: "Series, DataFrames, filters, joins, groupings, aggregations, and cleaning.",
+    description: "Series & DataFrame fundamentals, loading files, indexing/selection, cleaning, merging/joining, grouping & aggregation, pivoting, and visualization with Pandas (21 topics).",
   },
   {
     slug: "ml",
-    name: "Machine Learning (ML)",
-    startDay: 76,
-    endDay: 105,
+    name: "Machine Learning",
+    startDay: 55,
+    endDay: 124,
     icon: "Brain",
-    description: "Regression, classification, random forests, clustering, custom pipelines, and tuning.",
+    description: "Regression, classification, decision trees & ensembles, SVM & KNN, clustering & PCA, model evaluation, cross-validation, and hyperparameter tuning (32 topics).",
   },
   {
     slug: "dl",
-    name: "Deep Learning (DL)",
-    startDay: 106,
-    endDay: 135,
+    name: "Deep Learning",
+    startDay: 125,
+    endDay: 147,
     icon: "Cpu",
-    description: "Perceptrons, MLPs, backprop, SGD/Adam optimizers, CNNs, and recurrent networks.",
+    description: "Perceptrons, activation functions, backpropagation, optimizers, CNNs, RNNs/LSTMs, and regularization techniques (14 topics).",
   },
   {
     slug: "nlp",
-    name: "Natural Language Processing (NLP)",
-    startDay: 136,
-    endDay: 165,
+    name: "Natural Language Processing",
+    startDay: 148,
+    endDay: 159,
     icon: "Languages",
-    description: "Tokenization, TF-IDF, embeddings, sentiment analysis, NER, and Hugging Face.",
+    description: "Text preprocessing, tokenization, vectorization (BoW/TF-IDF), word embeddings, and transformer-based models (7 topics).",
   },
   {
     slug: "genai",
     name: "Generative AI",
-    startDay: 166,
-    endDay: 195,
+    startDay: 160,
+    endDay: 174,
     icon: "Sparkles",
-    description: "Prompt engineering, LLMs, LangChain agents, Vector databases (ChromaDB), and RAG.",
+    description: "Prompt engineering, LLM fundamentals, vector databases, LangChain, RAG pipelines, and fine-tuning (6 topics).",
   },
   {
-    slug: "eda",
-    name: "EDA & Visualization",
-    startDay: 196,
+    slug: "capstone",
+    name: "Capstone & Review",
+    startDay: 175,
     endDay: 200,
-    icon: "BarChart3",
-    description: "Exploratory Data Analysis, custom plots, Matplotlib figure structures, and Seaborn heatmaps.",
+    icon: "Trophy",
+    description: "End-to-end capstone projects across ML/DL/NLP/GenAI, resume building, mock interviews, and a full-length mock test (7 project blocks).",
   },
 ];
 
@@ -182,68 +175,212 @@
   return found || SYLLABUS[0];
 }
 
-export function getTopicTitleForDay(day: number): string {
-  const course = getCourseForDay(day);
-  const relativeDay = day - course.startDay + 1;
-  const courseCap = course.name;
+// Exact day-by-day topic map derived from the latest 200-Day Complete Schedule
+export const DAY_TOPIC_MAP: Record<number, string> = {
+  1: "Python Installation in Local",
+  2: "Python Introduction",
+  3: "Python Keywords",
+  4: "Python Hello World Program",
+  5: "Python Naming Conventions",
+  6: "Python Variables",
+  7: "Python Data Types",
+  8: "Python Operators",
+  9: "Python Input & Output",
+  10: "Python Flow Control",
+  11: "Python Flow Control",
+  12: "Python String",
+  13: "Python String",
+  14: "Python Functions Part 1",
+  15: "Python Functions Part 2",
+  16: "Python Module",
+  17: "Python Package",
+  18: "List Data Structure",
+  19: "List Data Structure",
+  20: "Tuple Data Structure",
+  21: "Set Data Structure",
+  22: "Dictionary Data Structure",
+  23: "Dictionary Data Structure",
+  24: "Object Oriented Program",
+  25: "Object Oriented Program",
+  26: "Object Oriented Program",
+  27: "Exception Handling",
+  28: "Exception Handling",
+  29: "Pandas Introduction",
+  30: "Pandas Series Introduction",
+  31: "Pandas NaN Value Intro",
+  32: "Pandas Series Attributes",
+  33: "Pandas Series Methods",
+  34: "Pandas DataFrame Introduction",
+  35: "Pandas Loading Files",
+  36: "Pandas DataFrame Attributes",
+  37: "Pandas DataFrame Methods",
+  38: "Pandas DataFrame Methods",
+  39: "Pandas DataFrame col: rename",
+  40: "Pandas Inplace Parameter",
+  41: "Pandas Handling Missing Values",
+  42: "Pandas Handling Missing Values",
+  43: "Pandas Data Selection: loc & iloc",
+  44: "Pandas Data Selection: loc & iloc",
+  45: "Pandas Filtering",
+  46: "Pandas Sorting",
+  47: "Pandas Groupby",
+  48: "Pandas Groupby",
+  49: "Pandas Join/Merge",
+  50: "Pandas Join/Merge",
+  51: "Pandas Concatenation",
+  52: "Pandas add/remove col/index",
+  53: "Pandas Date & Time Operations",
+  54: "Pandas Concatenating Multiple CSV Files",
+  55: "Machine Learning – Introduction",
+  56: "Machine Learning – Introduction",
+  57: "Machine Learning – Terminology",
+  58: "Machine Learning – Terminology",
+  59: "Data and ML Algorithms",
+  60: "Data and ML Algorithms",
+  61: "Learning Function",
+  62: "Learning Function",
+  63: "Types of the Model (Feature and Label)",
+  64: "Types of the Model (Feature and Label)",
+  65: "Life Cycle",
+  66: "Life Cycle",
+  67: "Train & Test Datasets",
+  68: "Train & Test Datasets",
+  69: "R Value",
+  70: "R Value",
+  71: "Simple Linear Regression",
+  72: "Simple Linear Regression",
+  73: "Simple Linear Regression",
+  74: "Polynomial Features",
+  75: "Polynomial Features",
+  76: "Multiple Linear Regression",
+  77: "Multiple Linear Regression",
+  78: "Pickling and Unpickling",
+  79: "Pickling and Unpickling",
+  80: "Save Model using Joblib and Pickling",
+  81: "Save Model using Joblib and Pickling",
+  82: "Cost Function",
+  83: "Cost Function",
+  84: "Regression Cost Functions",
+  85: "Regression Cost Functions",
+  86: "Dummy Variable & OneHotEncoding",
+  87: "Dummy Variable & OneHotEncoding",
+  88: "Gradient Descent Algorithm",
+  89: "Gradient Descent Algorithm",
+  90: "Logistic Regression",
+  91: "Logistic Regression",
+  92: "Logistic Regression",
+  93: "Logistic Regression – Multiclass Classification",
+  94: "Logistic Regression – Multiclass Classification",
+  95: "Decision Tree",
+  96: "Decision Tree",
+  97: "Decision Tree",
+  98: "Confusion Matrix",
+  99: "Confusion Matrix",
+  100: "Bias-Variance Tradeoff",
+  101: "Bias-Variance Tradeoff",
+  102: "Random Forest Algorithm",
+  103: "Random Forest Algorithm",
+  104: "Random Forest Algorithm",
+  105: "K-Fold Cross Validation",
+  106: "K-Fold Cross Validation",
+  107: "Support Vector Machine",
+  108: "Support Vector Machine",
+  109: "Underfitting and Overfitting",
+  110: "Underfitting and Overfitting",
+  111: "Lasso and Ridge Regression",
+  112: "Lasso and Ridge Regression",
+  113: "K-Means Clustering",
+  114: "K-Means Clustering",
+  115: "K-Means Clustering",
+  116: "K Nearest Neighbor",
+  117: "K Nearest Neighbor",
+  118: "Naive Bayes Classifier",
+  119: "Naive Bayes Classifier",
+  120: "Hyperparameter Tuning - GridSearchCV",
+  121: "Hyperparameter Tuning - GridSearchCV",
+  122: "XGBoost",
+  123: "XGBoost",
+  124: "XGBoost",
+  125: "DL - Introduction",
+  126: "DL - Libraries",
+  127: "DL - Terminology",
+  128: "DL - MLP Steps",
+  129: "DL - MLP Steps",
+  130: "DL - DL Codebase",
+  131: "DL - DL Codebase",
+  132: "DL - Model Evaluation",
+  133: "DL - Save Model",
+  134: "DL - Model Best Checkpoints",
+  135: "DL - Viz Model Acc & Loss",
+  136: "DL - Fine Tuning Parameters",
+  137: "DL - Fine Tuning Parameters",
+  138: "DL - CNN & Computer Vision",
+  139: "DL - CNN & Computer Vision",
+  140: "DL - CNN & Computer Vision",
+  141: "DL - RNN",
+  142: "DL - RNN",
+  143: "DL - RNN",
+  144: "DL - Loss, Optimization, Activation Functions",
+  145: "DL - Loss, Optimization, Activation Functions",
+  146: "DL - Real-World Structured Code",
+  147: "DL - Real-World Structured Code",
+  148: "NLP - Introduction",
+  149: "NLP - Text Wrangling and Cleaning",
+  150: "NLP - Text Wrangling and Cleaning",
+  151: "NLP - Replacing and Correcting Words",
+  152: "NLP - Use Case",
+  153: "NLP - Use Case",
+  154: "NLP - Bag of Words, TF-IDF",
+  155: "NLP - Bag of Words, TF-IDF",
+  156: "NLP - Twitter Sentiment Analysis",
+  157: "NLP - Twitter Sentiment Analysis",
+  158: "NLP - Spacy Library",
+  159: "NLP - Spacy Library",
+  160: "Introduction to Gen-AI (Overview)",
+  161: "Introduction to Gen-AI (Overview)",
+  162: "AI Powered Transformers",
+  163: "AI Powered Transformers",
+  164: "AI Powered Transformers",
+  165: "Prompt Engineering",
+  166: "Prompt Engineering",
+  167: "Prompt Engineering",
+  168: "Prompting Techniques for Generative Models",
+  169: "Prompting Techniques for Generative Models",
+  170: "Introduction to Vector DB",
+  171: "Introduction to Vector DB",
+  172: "Introduction to Retrieval-Augmented Generation (RAG)",
+  173: "Introduction to Retrieval-Augmented Generation (RAG)",
+  174: "Introduction to Retrieval-Augmented Generation (RAG)",
+  175: "ML Capstone Project",
+  176: "ML Capstone Project",
+  177: "ML Capstone Project",
+  178: "ML Capstone Project",
+  179: "ML Capstone Project",
+  180: "Deep Learning Capstone Project",
+  181: "Deep Learning Capstone Project",
+  182: "Deep Learning Capstone Project",
+  183: "Deep Learning Capstone Project",
+  184: "Deep Learning Capstone Project",
+  185: "NLP Capstone Project",
+  186: "NLP Capstone Project",
+  187: "NLP Capstone Project",
+  188: "NLP Capstone Project",
+  189: "GenAI / RAG Capstone Project",
+  190: "GenAI / RAG Capstone Project",
+  191: "GenAI / RAG Capstone Project",
+  192: "GenAI / RAG Capstone Project",
+  193: "Resume Building",
+  194: "Resume Building",
+  195: "Resume Building",
+  196: "Mock Interviews",
+  197: "Mock Interviews",
+  198: "Mock Interviews",
+  199: "Full-Length Mock Test",
+  200: "Full-Length Mock Test",
+};
 
-  if (course.slug === "python") {
-    if (relativeDay <= 5) return "Python: Syntax, Variables & Types";
-    if (relativeDay <= 10) return "Python: Loops, Control flow & Comp.";
-    if (relativeDay <= 15) return "Python: Custom Functions & Scope";
-    if (relativeDay <= 20) return "Python: Comprehensive Data Structures";
-    if (relativeDay <= 25) return "Python: Exception Handling & Files";
-    return "Python: Classes & Object-Oriented Design";
-  }
-  if (course.slug === "numpy") {
-    if (relativeDay <= 5) return "NumPy: Array Creation & Shapes";
-    if (relativeDay <= 10) return "NumPy: Slicing, Copying & Vectors";
-    return "NumPy: Broadcasting & Matrix Algebra";
-  }
-  if (course.slug === "pandas") {
-    if (relativeDay <= 5) return "Pandas: DataFrames & I/O Methods";
-    if (relativeDay <= 10) return "Pandas: Selection, Filters & Slicing";
-    if (relativeDay <= 15) return "Pandas: Data Cleaning & fillna";
-    if (relativeDay <= 20) return "Pandas: GroupBy & Aggregations";
-    if (relativeDay <= 25) return "Pandas: Merge, Joins & Reshape";
-    return "Pandas: Pivot Tables & Time Series";
-  }
-  if (course.slug === "ml") {
-    if (relativeDay <= 5) return "ML: Regressions & Scikit-Learn";
-    if (relativeDay <= 10) return "ML: Dec Trees & Ensemble Methods";
-    if (relativeDay <= 15) return "ML: SVM classifiers & KNN Models";
-    if (relativeDay <= 20) return "ML: Clustering (KMeans) & PCA";
-    if (relativeDay <= 25) return "ML: Cross-Validation & Tuning";
-    return "ML: Feature Pipelines & Transformers";
-  }
-  if (course.slug === "dl") {
-    if (relativeDay <= 5) return "DL: Perceptron & Activation Units";
-    if (relativeDay <= 10) return "DL: Deep MLPs & Backpropagation";
-    if (relativeDay <= 15) return "DL: Optimizers (Adam) & Weights";
-    if (relativeDay <= 20) return "DL: ConvNets (CNN) for Images";
-    if (relativeDay <= 25) return "DL: Sequence LSTMs & RNN cells";
-    return "DL: Underfit Prevention & Dropout";
-  }
-  if (course.slug === "nlp") {
-    if (relativeDay <= 5) return "NLP: Preprocessing & Lemmatization";
-    if (relativeDay <= 10) return "NLP: Bag of Words & Vectorizers";
-    if (relativeDay <= 15) return "NLP: Embeddings (Word2Vec, GloVe)";
-    if (relativeDay <= 20) return "NLP: Neural Sequence Translators";
-    if (relativeDay <= 25) return "NLP: Transformers & BERT pipelines";
-    return "NLP: Part of Speech & Sentiment";
-  }
-  if (course.slug === "genai") {
-    if (relativeDay <= 5) return "GenAI: Primers on prompt models";
-    if (relativeDay <= 10) return "GenAI: ChromaDB Vector Stores & RAG";
-    if (relativeDay <= 15) return "GenAI: LangChain Chains & Agents";
-    if (relativeDay <= 20) return "GenAI: Fine-Tuning or LoRA Weights";
-    if (relativeDay <= 25) return "GenAI: Gemini API Orchestration";
-    return "GenAI: Safe Guardrails & Quality Metrics";
-  }
-  // eda
-  if (relativeDay <= 2) return "EDA: Distribution & Sizing Methods";
-  if (relativeDay <= 4) return "EDA: Matplotlib Figure Structures";
-  return "EDA: Advanced Seaborn Heatmap Schemes";
+export function getTopicTitleForDay(day: number): string {
+  return DAY_TOPIC_MAP[day] || getCourseForDay(day).name;
 }
 
 export interface InterviewMessage {
--- a/src/curriculumData.ts
+++ b/src/curriculumData.ts
@@ -1,209 +1,13 @@
 import { DayQuiz, MCQQuestion, CodingQuestion, getCourseForDay, getTopicTitleForDay } from "./types.js";
 
-// Days matching the OCR pdf screenshots exactly
-export const PRESET_DAILY_QUIZZES: Record<number, { topicTitle: string; mcqs: MCQQuestion[]; coding: CodingQuestion[] }> = {
-  1: {
-    topicTitle: "Python | Variables & Data Types",
-    mcqs: [
-      {
-        questionText: "What is the output of bool('') in Python?",
-        options: ["True", "False", "None", "Error"],
-        correctOption: 1,
-        explanation: "In Python, empty strings are evaluated as falsy. Therefore, bool('') evaluates to False."
-      },
-      {
-        questionText: "Which method removes and returns the last item of a list?",
-        options: ["remove()", "del()", "pop()", "discard()"],
-        correctOption: 2,
-        explanation: "The pop() method removes and returns the last item from a list (or at the specified index if supplied)."
-      },
-      {
-        questionText: "What does the // operator do in Python?",
-        options: ["Division", "Floor division", "Modulo", "Power"],
-        correctOption: 1,
-        explanation: "The // operator performs floor division, which divides the numbers and rounds down to the nearest integer."
-      },
-      {
-        questionText: "What is the correct way to open a file for writing?",
-        options: ["open('f','r')", "open('f','w')", "open('f','a+')", "open('f','x')"],
-        correctOption: 1,
-        explanation: "Using mode 'w' to open a file gets it ready specifically for writing, clearing existing contents if any."
-      },
-      {
-        questionText: "Which of these is immutable in Python?",
-        options: ["list", "dict", "set", "tuple"],
-        correctOption: 3,
-        explanation: "Tuples are immutable sequence types in Python. Lists, dicts, and sets can be mutated after creation."
-      },
-      {
-        questionText: "What does enumerate() return?",
-        options: ["A list", "A dict", "An iterator of (index, value) tuples", "A set"],
-        correctOption: 2,
-        explanation: "The built-in function enumerate() takes a collection and returns an enumerate object as an iterator of tuples containing (index, item)."
-      },
-      {
-        questionText: "What is the output of [x**2 for x in range(4)]?",
-        options: ["[1,4,9,16]", "[0,1,4,9]", "[0,1,2,3]", "[1,2,3,4]"],
-        correctOption: 1,
-        explanation: "The range(4) contains values 0, 1, 2, 3. Squaring each yields [0, 1, 4, 9]."
-      },
-      {
-        questionText: "Which keyword exits a loop immediately?",
-        options: ["exit", "pass", "continue", "break"],
-        correctOption: 3,
-        explanation: "The break statement terminates the current loop and continues execution at the next outer block statement."
-      }
-    ],
-    coding: [
-      {
-        questionText: "Write a function factorial(n) using recursion.",
-        starterCode: "def factorial(n):\n    pass",
-        expectedKeywords: ["def", "if", "<=", "return", "*"],
-        solutionDescription: "def factorial(n):\n    if n <= 1: return 1\n    return n * factorial(n-1)"
-      },
-      {
-        questionText: "Write a generator function that yields squares of numbers 1 to n.",
-        starterCode: "def squares(n):\n    pass",
-        expectedKeywords: ["yield", "for", "range", "**"],
-        solutionDescription: "def squares(n):\n    for i in range(1, n+1):\n        yield i**2"
-      }
-    ]
-  },
-  2: {
-    topicTitle: "Python | Strings & String Methods",
-    mcqs: [
-      {
-        questionText: "What does *args collect in a function?",
-        options: ["Keyword args", "Positional args as tuple", "Dict of args", "Default args"],
-        correctOption: 1,
-        explanation: "*args allows a function to accept any number of positional arguments as a tuple."
-      },
-      {
-        questionText: "What is a Python decorator?",
-        options: ["A comment style", "A function that wraps another function", "A class method", "A module"],
-        correctOption: 1,
-        explanation: "A decorator takes a function, wraps its behavior in another helper, and returns the modified function."
-      },
-      {
-        questionText: "Which built-in sorts a list in-place?",
-        options: ["sorted()", "list.sort()", "order()", "arrange()"],
-        correctOption: 1,
-        explanation: "list.sort() modifies the original list in-place. sorted() returns a new sorted list."
-      },
-      {
-        questionText: "What does zip([1,2],[3,4]) produce?",
-        options: ["[(1,2),(3,4)]", "[(1,3),(2,4)]", "[1,2,3,4]", "Error"],
-        correctOption: 1,
-        explanation: "zip aggregates elements from each iterable in order, pairing 1 with 3, and 2 with 4."
-      },
-      {
-        questionText: "How do you inherit from Animal class in Python?",
-        options: ["class Dog extends Animal", "class Dog(Animal):", "class Dog inherits Animal", "def Dog(Animal):"],
-        correctOption: 1,
-        explanation: "Python specifies inheritance by putting parent classes inside parentheses after the class name."
-      },
-      {
-        questionText: "What is the default return value of a function with no return?",
-        options: ["0", "''", "None", "False"],
-        correctOption: 2,
-        explanation: "If no return expression is executed, Python functions return None by default."
-      },
-      {
-        questionText: "Which module is used for regular expressions?",
-        options: ["regex", "re", "regexp", "string"],
-        correctOption: 1,
-        explanation: "The standard library module 're' provides comprehensive regex search and match tools."
-      },
-      {
-        questionText: "What does dict.get('key','default') do?",
-        options: ["Sets a key", "Returns value or default if missing", "Deletes a key", "Raises KeyError"],
-        correctOption: 1,
-        explanation: "get() returns the key's value if present; otherwise, it fallback-returns the default argument without raising an exception."
-      }
-    ],
-    coding: [
-      {
-        questionText: "Write a class Rectangle with area() and perimeter() methods.",
-        starterCode: "class Rectangle:\n    pass",
-        expectedKeywords: ["class", "__init__", "self", "return"],
-        solutionDescription: "class Rectangle:\n    def __init__(self, w, h):\n        self.w = w\n        self.h = h\n    def area(self):\n        return self.w * self.h\n    def perimeter(self):\n        return 2 * (self.w + self.h)"
-      },
-      {
-        questionText: "Using try/except, write code that converts input to int and handles ValueError.",
-        starterCode: "def safe_int(val):\n    pass",
-        expectedKeywords: ["try", "except", "ValueError", "return"],
-        solutionDescription: "def safe_int(val):\n    try:\n        return int(val)\n    except ValueError:\n        return None"
-      }
-    ]
-  },
-  3: {
-    topicTitle: "Python | Lists & Tuples",
-    mcqs: [
-      {
-        questionText: "Which is the correct lambda to square a number?",
-        options: ["lambda x: x*x", "def sq(x): x*x", "x => x*x", "lambda(x) x**2"],
-        correctOption: 0,
-        explanation: "The syntax 'lambda x: x*x' creates an anonymous online function squaring input."
-      },
-      {
-        questionText: "What does 'with open(file) as f:' ensure?",
-        options: ["File is created", "File is auto-closed after block", "File is read only", "File is deleted"],
-        correctOption: 1,
-        explanation: "The with statement uses python context managers to guarantee file close streams clean up after local block endings."
-      },
-      {
-        questionText: "What does set([1,1,2,3,3]) return?",
-        options: ["{1,1,2,3,3}", "{1,2,3}", "[1,2,3]", "Error"],
-        correctOption: 1,
-        explanation: "Sets represent unique elements, stripping out the duplicate 1 and 3 integers."
-      },
-      {
-        questionText: "Which method joins a list of strings into a single string?",
-        options: ["list.join()", "str.join(list)", "''.join(list)", "join(list)"],
-        correctOption: 2,
-        explanation: "Using an empty delimiter ''.join(list) concatenates all list string parts synchronously."
-      },
-      {
-        questionText: "What is the output of bool('') in Python?",
-        options: ["True", "False", "None", "Error"],
-        correctOption: 1,
-        explanation: "Empty strings are evaluated as falsy. So, bool('') yields False."
-      },
-      {
-        questionText: "Which method removes and returns the last item of a list?",
-        options: ["remove()", "del()", "pop()", "discard()"],
-        correctOption: 2,
-        explanation: "pop() operates in-place, removing and returning the element at the requested or last index."
-      },
-      {
-        questionText: "What does the // operator do in Python?",
-        options: ["Division", "Floor division", "Modulo", "Power"],
-        correctOption: 1,
-        explanation: "Floor division rounds down to the nearest integer below."
-      },
-      {
-        questionText: "What is the correct way to open a file for writing?",
-        options: ["open('f','r')", "open('f','w')", "open('f','a+')", "open('f','x')"],
-        correctOption: 1,
-        explanation: "'w' is the write flag context for standard open file operations."
-      }
-    ],
-    coding: [
-      {
-        questionText: "Write a decorator 'timer' that prints execution time of any function.",
-        starterCode: "import time\n\ndef timer(func):\n    pass",
-        expectedKeywords: ["def", "time", "wrapper", "return"],
-        solutionDescription: "def timer(func):\n    def wrapper(*a,**k):\n        s=time.time(); r=func(*a,**k)\n        print(f'{func.__name__}: {time.time()-s:.4f}s')\n        return r\n    return wrapper"
-      },
-      {
-        questionText: "Write a function factorial(n) using recursion.",
-        starterCode: "def factorial(n):\n    pass",
-        expectedKeywords: ["factorial", "return", "if"],
-        solutionDescription: "def factorial(n):\n    if n <= 1: return 1\n    return n * factorial(n-1)"
-      }
-    ]
-  }
-};
+// NOTE: This used to contain hand-written MCQ/coding presets for Day 1-3, written against the
+// OLD syllabus (Variables & Data Types / Strings / Lists & Tuples). The syllabus has since been
+// updated to the latest 200-Day Complete Schedule, where Day 1-3 now cover different topics
+// (Python Installation, Python Introduction, Python Keywords). The old presets have been removed
+// so they don't show mismatched content. Every day now automatically gets its quiz from the AI
+// generator (or the procedural fallback) using the correct topic title, sourced from
+// DAY_TOPIC_MAP in types.ts, which reflects the new schedule exactly.
+export const PRESET_DAILY_QUIZZES: Record<number, { topicTitle: string; mcqs: MCQQuestion[]; coding: CodingQuestion[] }> = {};
 
 // Generate high quality presets for any remaining days
 export function getStaticPresetQuiz(dayNumber: number): DayQuiz | null {
