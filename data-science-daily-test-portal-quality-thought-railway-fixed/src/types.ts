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

export const SYLLABUS: CourseSyllabus[] = [
  {
    slug: "python",
    name: "Python Programming",
    startDay: 1,
    endDay: 21,
    icon: "Code2",
    description: "Syntax, variables, keywords, data types, functions, OOP, and exception handling.",
  },
  {
    slug: "pandas",
    name: "Pandas Data Wrangling",
    startDay: 22,
    endDay: 42,
    icon: "Table2",
    description: "Series, DataFrames, missing values, selection, filtering, groupby, merge, and time series.",
  },
  {
    slug: "ml",
    name: "Machine Learning (ML)",
    startDay: 43,
    endDay: 74,
    icon: "Brain",
    description: "Regression, classification, model evaluation, ensembles, clustering, and hyperparameter tuning.",
  },
  {
    slug: "dl",
    name: "Deep Learning (DL)",
    startDay: 75,
    endDay: 88,
    icon: "Cpu",
    description: "MLPs, model training/evaluation, checkpoints, CNNs, RNNs, and loss/optimization fundamentals.",
  },
  {
    slug: "nlp",
    name: "Natural Language Processing (NLP)",
    startDay: 89,
    endDay: 95,
    icon: "Languages",
    description: "Text cleaning, tokenization, bag-of-words/TF-IDF, sentiment analysis, and spaCy.",
  },
  {
    slug: "genai",
    name: "Generative AI",
    startDay: 96,
    endDay: 101,
    icon: "Sparkles",
    description: "Prompt engineering, transformers, vector databases, and retrieval-augmented generation.",
  },
];


export function getCourseForDay(day: number): CourseSyllabus {
  const found = SYLLABUS.find(s => day >= s.startDay && day <= s.endDay);
  return found || SYLLABUS[0];
}

const DAY_TOPIC_TITLES: Record<number, string> = {
  1: "Python: Python Installation in Local",
  2: "Python: Python Introduction",
  3: "Python: Python Keywords",
  4: "Python: Python Hello World Program",
  5: "Python: Python Naming Conventions",
  6: "Python: Python Variables",
  7: "Python: Python Data Types",
  8: "Python: Python Operators",
  9: "Python: Python Input & Output",
  10: "Python: Python Flow Control",
  11: "Python: Python String",
  12: "Python: Python Functions Part 1",
  13: "Python: Python Functions Part 2",
  14: "Python: Python Module",
  15: "Python: Python Package",
  16: "Python: List Data Structure",
  17: "Python: Tuple Data Structure",
  18: "Python: Set Data Structure",
  19: "Python: Dictionary Data Structure",
  20: "Python: Object Oriented Program",
  21: "Python: Exception Handling",
  22: "Pandas: Pandas Introduction",
  23: "Pandas: Pandas Series Introduction",
  24: "Pandas: Pandas NaN Value Intro",
  25: "Pandas: Pandas Series Attributes",
  26: "Pandas: Pandas Series Methods",
  27: "Pandas: Pandas DataFrame Introduction",
  28: "Pandas: Pandas Loading Files",
  29: "Pandas: Pandas DataFrame Attributes",
  30: "Pandas: Pandas DataFrame Methods",
  31: "Pandas: Pandas DataFrame col: rename",
  32: "Pandas: Pandas Inplace Parameter",
  33: "Pandas: Pandas Handling Missing Values",
  34: "Pandas: Pandas Data Selection: loc & iloc",
  35: "Pandas: Pandas Filtering",
  36: "Pandas: Pandas Sorting",
  37: "Pandas: Pandas Groupby",
  38: "Pandas: Pandas Join/Merge",
  39: "Pandas: Pandas Concatenation",
  40: "Pandas: Pandas add/remove col/index",
  41: "Pandas: Pandas Date & Time Operations",
  42: "Pandas: Pandas Concatenating Multiple CSV Files",
  43: "ML: Machine Learning \u2013 Introduction",
  44: "ML: Machine Learning \u2013 Terminology",
  45: "ML: Data and ML Algorithms",
  46: "ML: Learning Function",
  47: "ML: Types of the Model (Feature and Label)",
  48: "ML: Life Cycle",
  49: "ML: Train & Test Datasets",
  50: "ML: R Value",
  51: "ML: Simple Linear Regression",
  52: "ML: Polynomial Features",
  53: "ML: Multiple Linear Regression",
  54: "ML: Pickling and Unpickling",
  55: "ML: Save Model using Joblib and Pickling",
  56: "ML: Cost Function",
  57: "ML: Regression Cost Functions",
  58: "ML: Dummy Variable & OneHotEncoding",
  59: "ML: Gradient Descent Algorithm",
  60: "ML: Logistic Regression",
  61: "ML: Logistic Regression \u2013 Multiclass Classification",
  62: "ML: Decision Tree",
  63: "ML: Confusion Matrix",
  64: "ML: Bias-Variance Tradeoff",
  65: "ML: Random Forest Algorithm",
  66: "ML: K-Fold Cross Validation",
  67: "ML: Support Vector Machine",
  68: "ML: Underfitting and Overfitting",
  69: "ML: Lasso and Ridge Regression",
  70: "ML: K-Means Clustering",
  71: "ML: K Nearest Neighbor",
  72: "ML: Naive Bayes Classifier",
  73: "ML: Hyperparameter Tuning - GridSearchCV",
  74: "ML: XGBoost",
  75: "DL: DL - Introduction",
  76: "DL: DL - Libraries",
  77: "DL: DL - Terminology",
  78: "DL: DL - MLP Steps",
  79: "DL: DL - DL Codebase",
  80: "DL: DL - Model Evaluation",
  81: "DL: DL - Save Model",
  82: "DL: DL - Model Best Checkpoints",
  83: "DL: DL - Viz Model Acc & Loss",
  84: "DL: DL - Fine Tuning Parameters",
  85: "DL: DL - CNN & Computer Vision",
  86: "DL: DL - RNN",
  87: "DL: DL - Loss, Optimization, Activation Functions",
  88: "DL: DL - Real-World Structured Code",
  89: "NLP: NLP - Introduction",
  90: "NLP: NLP - Text Wrangling and Cleaning",
  91: "NLP: NLP - Replacing and Correcting Words",
  92: "NLP: NLP - Use Case",
  93: "NLP: NLP - Bag of Words, TF-IDF",
  94: "NLP: NLP - Twitter Sentiment Analysis",
  95: "NLP: NLP - Spacy Library",
  96: "Genai: Introduction to Gen-AI (Overview)",
  97: "Genai: AI Powered Transformers",
  98: "Genai: Prompt Engineering",
  99: "Genai: Prompting Techniques for Generative Models",
  100: "Genai: Introduction to Vector DB",
  101: "Genai: Introduction to Retrieval-Augmented Generation (RAG)",
};

export function getTopicTitleForDay(day: number): string {
  return DAY_TOPIC_TITLES[day] || getCourseForDay(day).name;
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

export interface QuestionComparison {
  question: string;
  studentAnswer: string;
  idealAnswer: string;
  comparisonAnalysis: string;
  correctnessPercentage: number;
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
  voiceAnalysis?: VoiceAnalysis;
  questionComparisons?: QuestionComparison[];
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


