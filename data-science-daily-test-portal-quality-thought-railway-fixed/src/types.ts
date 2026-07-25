export interface Student {
  id: string;
  name: string;
  rollNumber: string;
  email: string;
  batch: string;
  phoneNumber?: string;
  interviewPermission?: boolean; // Allowed access by teacher
  placementPermission?: boolean; // Allowed placement gateway access by teacher
  interviewRewritePermission?: boolean; // Allowed rewrite/reattempt of the AI mock interview
  rewriteDays?: number[]; // Day numbers allowed for rewriting exams
  placementDetails?: {
    linkedin?: string;
    indeed?: string;
    naukri?: string;
    glassdoor?: string;
    foundit?: string;
    shine?: string;
    timesjobs?: string;
    internshala?: string;
    wellfound?: string;
    apna?: string;
    submittedAt?: string;
  };
}

export interface AttendanceLog {
  id: string;
  studentId: string;
  dayNumber: number;
  status: "offline" | "online" | "absent";
  zoomUrl?: string;
  markedAt: string;
}

export interface Batch {
  id: string;
  name: string;
  createdAt: string;
}

export interface CourseLockState {
  batchName: string;
  unlockedCourses: string[]; // e.g., ['python', 'numpy']
  unlockedDays: number[];    // individual days unlocked, e.g., [1, 2, 3]
  courseLockState: Record<string, boolean>; // course slug -> locked boolean
  featureLocks?: {
    interview: boolean;
    resume: boolean;
    monthlyTest: boolean;
  };
}

export interface MCQQuestion {
  questionText: string;
  options: string[];
  correctOption: number; // 0-3
  explanation: string;
}

export interface CodingQuestion {
  questionText: string;
  starterCode: string;
  expectedKeywords: string[]; // basic validation keywords
  solutionDescription: string;
}

export interface DayQuiz {
  dayNumber: number;
  courseSlug: string;
  topicTitle: string;
  mcqs: MCQQuestion[];
  coding: CodingQuestion[];
}

export interface Submission {
  id: string;
  studentId: string;
  studentName: string;
  rollNumber: string;
  batch: string;
  dayNumber: number;
  courseSlug: string;
  score: number; // e.g. 8 points for MCQs, coding can be self-evaluated or checked
  mcqScores: number;
  codingSubmissions: {
    questionText: string;
    submittedCode: string;
  }[];
  selectedMCQAnswers?: Record<number, number>;
  submittedAt: string;
  previousAttempts?: {
    score: number;
    mcqScores: number;
    codingSubmissions: {
      questionText: string;
      submittedCode: string;
    }[];
    submittedAt: string;
  }[];
}

// Map day numbers (1-200) to courses
export interface CourseSyllabus {
  slug: string;
  name: string;
  startDay: number;
  endDay: number;
  icon: string;
  description: string;
}

// Updated to match the latest 200-Day Complete Schedule (7 modules, 101 topics)
export const SYLLABUS: CourseSyllabus[] = [
  {
    slug: "python",
    name: "Python Programming Fundamentals",
    startDay: 1,
    endDay: 28,
    icon: "Code2",
    description: "Installation, syntax, variables, data types, operators, flow control, strings, functions, modules, packages, lists/tuples/sets/dicts, OOP, and exception handling (21 topics).",
  },
  {
    slug: "pandas",
    name: "Pandas for Data Analysis",
    startDay: 29,
    endDay: 54,
    icon: "Table2",
    description: "Series & DataFrame fundamentals, loading files, indexing/selection, cleaning, merging/joining, grouping & aggregation, pivoting, and visualization with Pandas (21 topics).",
  },
  {
    slug: "ml",
    name: "Machine Learning",
    startDay: 55,
    endDay: 124,
    icon: "Brain",
    description: "Regression, classification, decision trees & ensembles, SVM & KNN, clustering & PCA, model evaluation, cross-validation, and hyperparameter tuning (32 topics).",
  },
  {
    slug: "dl",
    name: "Deep Learning",
    startDay: 125,
    endDay: 147,
    icon: "Cpu",
    description: "Perceptrons, activation functions, backpropagation, optimizers, CNNs, RNNs/LSTMs, and regularization techniques (14 topics).",
  },
  {
    slug: "nlp",
    name: "Natural Language Processing",
    startDay: 148,
    endDay: 159,
    icon: "Languages",
    description: "Text preprocessing, tokenization, vectorization (BoW/TF-IDF), word embeddings, and transformer-based models (7 topics).",
  },
  {
    slug: "genai",
    name: "Generative AI",
    startDay: 160,
    endDay: 174,
    icon: "Sparkles",
    description: "Prompt engineering, LLM fundamentals, vector databases, LangChain, RAG pipelines, and fine-tuning (6 topics).",
  },
  {
    slug: "capstone",
    name: "Capstone & Review",
    startDay: 175,
    endDay: 200,
    icon: "Trophy",
    description: "End-to-end capstone projects across ML/DL/NLP/GenAI, resume building, mock interviews, and a full-length mock test (7 project blocks).",
  },
];

export function getCourseForDay(day: number): CourseSyllabus {
  const found = SYLLABUS.find(s => day >= s.startDay && day <= s.endDay);
  return found || SYLLABUS[0];
}

// Exact day-by-day topic map derived from the latest 200-Day Complete Schedule
export const DAY_TOPIC_MAP: Record<number, string> = {
  1: "Python Installation in Local",
  2: "Python Introduction",
  3: "Python Keywords",
  4: "Python Hello World Program",
  5: "Python Naming Conventions",
  6: "Python Variables",
  7: "Python Data Types",
  8: "Python Operators",
  9: "Python Input & Output",
  10: "Python Flow Control",
  11: "Python Flow Control",
  12: "Python String",
  13: "Python String",
  14: "Python Functions Part 1",
  15: "Python Functions Part 2",
  16: "Python Module",
  17: "Python Package",
  18: "List Data Structure",
  19: "List Data Structure",
  20: "Tuple Data Structure",
  21: "Set Data Structure",
  22: "Dictionary Data Structure",
  23: "Dictionary Data Structure",
  24: "Object Oriented Program",
  25: "Object Oriented Program",
  26: "Object Oriented Program",
  27: "Exception Handling",
  28: "Exception Handling",
  29: "Pandas Introduction",
  30: "Pandas Series Introduction",
  31: "Pandas NaN Value Intro",
  32: "Pandas Series Attributes",
  33: "Pandas Series Methods",
  34: "Pandas DataFrame Introduction",
  35: "Pandas Loading Files",
  36: "Pandas DataFrame Attributes",
  37: "Pandas DataFrame Methods",
  38: "Pandas DataFrame Methods",
  39: "Pandas DataFrame col: rename",
  40: "Pandas Inplace Parameter",
  41: "Pandas Handling Missing Values",
  42: "Pandas Handling Missing Values",
  43: "Pandas Data Selection: loc & iloc",
  44: "Pandas Data Selection: loc & iloc",
  45: "Pandas Filtering",
  46: "Pandas Sorting",
  47: "Pandas Groupby",
  48: "Pandas Groupby",
  49: "Pandas Join/Merge",
  50: "Pandas Join/Merge",
  51: "Pandas Concatenation",
  52: "Pandas add/remove col/index",
  53: "Pandas Date & Time Operations",
  54: "Pandas Concatenating Multiple CSV Files",
  55: "Machine Learning – Introduction",
  56: "Machine Learning – Introduction",
  57: "Machine Learning – Terminology",
  58: "Machine Learning – Terminology",
  59: "Data and ML Algorithms",
  60: "Data and ML Algorithms",
  61: "Learning Function",
  62: "Learning Function",
  63: "Types of the Model (Feature and Label)",
  64: "Types of the Model (Feature and Label)",
  65: "Life Cycle",
  66: "Life Cycle",
  67: "Train & Test Datasets",
  68: "Train & Test Datasets",
  69: "R Value",
  70: "R Value",
  71: "Simple Linear Regression",
  72: "Simple Linear Regression",
  73: "Simple Linear Regression",
  74: "Polynomial Features",
  75: "Polynomial Features",
  76: "Multiple Linear Regression",
  77: "Multiple Linear Regression",
  78: "Pickling and Unpickling",
  79: "Pickling and Unpickling",
  80: "Save Model using Joblib and Pickling",
  81: "Save Model using Joblib and Pickling",
  82: "Cost Function",
  83: "Cost Function",
  84: "Regression Cost Functions",
  85: "Regression Cost Functions",
  86: "Dummy Variable & OneHotEncoding",
  87: "Dummy Variable & OneHotEncoding",
  88: "Gradient Descent Algorithm",
  89: "Gradient Descent Algorithm",
  90: "Logistic Regression",
  91: "Logistic Regression",
  92: "Logistic Regression",
  93: "Logistic Regression – Multiclass Classification",
  94: "Logistic Regression – Multiclass Classification",
  95: "Decision Tree",
  96: "Decision Tree",
  97: "Decision Tree",
  98: "Confusion Matrix",
  99: "Confusion Matrix",
  100: "Bias-Variance Tradeoff",
  101: "Bias-Variance Tradeoff",
  102: "Random Forest Algorithm",
  103: "Random Forest Algorithm",
  104: "Random Forest Algorithm",
  105: "K-Fold Cross Validation",
  106: "K-Fold Cross Validation",
  107: "Support Vector Machine",
  108: "Support Vector Machine",
  109: "Underfitting and Overfitting",
  110: "Underfitting and Overfitting",
  111: "Lasso and Ridge Regression",
  112: "Lasso and Ridge Regression",
  113: "K-Means Clustering",
  114: "K-Means Clustering",
  115: "K-Means Clustering",
  116: "K Nearest Neighbor",
  117: "K Nearest Neighbor",
  118: "Naive Bayes Classifier",
  119: "Naive Bayes Classifier",
  120: "Hyperparameter Tuning - GridSearchCV",
  121: "Hyperparameter Tuning - GridSearchCV",
  122: "XGBoost",
  123: "XGBoost",
  124: "XGBoost",
  125: "DL - Introduction",
  126: "DL - Libraries",
  127: "DL - Terminology",
  128: "DL - MLP Steps",
  129: "DL - MLP Steps",
  130: "DL - DL Codebase",
  131: "DL - DL Codebase",
  132: "DL - Model Evaluation",
  133: "DL - Save Model",
  134: "DL - Model Best Checkpoints",
  135: "DL - Viz Model Acc & Loss",
  136: "DL - Fine Tuning Parameters",
  137: "DL - Fine Tuning Parameters",
  138: "DL - CNN & Computer Vision",
  139: "DL - CNN & Computer Vision",
  140: "DL - CNN & Computer Vision",
  141: "DL - RNN",
  142: "DL - RNN",
  143: "DL - RNN",
  144: "DL - Loss, Optimization, Activation Functions",
  145: "DL - Loss, Optimization, Activation Functions",
  146: "DL - Real-World Structured Code",
  147: "DL - Real-World Structured Code",
  148: "NLP - Introduction",
  149: "NLP - Text Wrangling and Cleaning",
  150: "NLP - Text Wrangling and Cleaning",
  151: "NLP - Replacing and Correcting Words",
  152: "NLP - Use Case",
  153: "NLP - Use Case",
  154: "NLP - Bag of Words, TF-IDF",
  155: "NLP - Bag of Words, TF-IDF",
  156: "NLP - Twitter Sentiment Analysis",
  157: "NLP - Twitter Sentiment Analysis",
  158: "NLP - Spacy Library",
  159: "NLP - Spacy Library",
  160: "Introduction to Gen-AI (Overview)",
  161: "Introduction to Gen-AI (Overview)",
  162: "AI Powered Transformers",
  163: "AI Powered Transformers",
  164: "AI Powered Transformers",
  165: "Prompt Engineering",
  166: "Prompt Engineering",
  167: "Prompt Engineering",
  168: "Prompting Techniques for Generative Models",
  169: "Prompting Techniques for Generative Models",
  170: "Introduction to Vector DB",
  171: "Introduction to Vector DB",
  172: "Introduction to Retrieval-Augmented Generation (RAG)",
  173: "Introduction to Retrieval-Augmented Generation (RAG)",
  174: "Introduction to Retrieval-Augmented Generation (RAG)",
  175: "ML Capstone Project",
  176: "ML Capstone Project",
  177: "ML Capstone Project",
  178: "ML Capstone Project",
  179: "ML Capstone Project",
  180: "Deep Learning Capstone Project",
  181: "Deep Learning Capstone Project",
  182: "Deep Learning Capstone Project",
  183: "Deep Learning Capstone Project",
  184: "Deep Learning Capstone Project",
  185: "NLP Capstone Project",
  186: "NLP Capstone Project",
  187: "NLP Capstone Project",
  188: "NLP Capstone Project",
  189: "GenAI / RAG Capstone Project",
  190: "GenAI / RAG Capstone Project",
  191: "GenAI / RAG Capstone Project",
  192: "GenAI / RAG Capstone Project",
  193: "Resume Building",
  194: "Resume Building",
  195: "Resume Building",
  196: "Mock Interviews",
  197: "Mock Interviews",
  198: "Mock Interviews",
  199: "Full-Length Mock Test",
  200: "Full-Length Mock Test",
};

export function getTopicTitleForDay(day: number): string {
  return DAY_TOPIC_MAP[day] || getCourseForDay(day).name;
}

export interface InterviewMessage {
  role: "user" | "assistant";
  content: string;
}

export interface VoiceAnalysis {
  paceWpm: number;
  paceStatus: string;
  clarityScore: number;
  modulationStatus: string;
  fillersDetected: string[];
  fillerCount: number;
  mistakes: string[];
  improvements: string[];
}

export interface QuestionBreakdownItem {
  question: string;
  givenAnswer: string;
  idealSolution: string;
  matchPercentage: number;
  verdict: string; // "Correct" | "Partially Correct" | "Incorrect"
}

export interface AIInterviewReport {
  score: number; // out of 100
  technicalScore?: number; // out of 100
  hrScore?: number; // out of 100
  patternAnalysis?: string; // in-depth behavioral and technical answer pattern analysis
  hrSuggestions?: string[]; // specialized HR & behavioral tips
  techSuggestions?: string[]; // specialized coding & logic tips
  summary: string;
  strengths: string[];
  improvements: string[];
  detailedEvaluation: string; // Markdown text
  questionBreakdown?: QuestionBreakdownItem[];
  voiceAnalysis?: VoiceAnalysis;
}

export interface AIInterview {
  id: string;
  studentId: string;
  studentName: string;
  rollNumber: string;
  batch: string;
  subject: string; // e.g. 'python', 'pandas'
  difficulty: string; // e.g. 'Junior', 'Mid-Level', 'Senior'
  messages: InterviewMessage[];
  report?: AIInterviewReport;
  createdAt: string;
  interviewType?: "weekly" | "monthly";
  roundType?: "technical" | "hr" | "combined";
  videoUrl?: string;
  videoAccessGranted?: boolean;
  isFallback?: boolean;
}

export interface RecordedStudentVideo {
  id: string;
  interviewId: string;
  studentId: string;
  studentName: string;
  rollNumber: string;
  subject: string;
  roundType: string;
  videoUrl: string;
  createdAt: string;
  videoAccessGranted: boolean;
}


