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
    endDay: 30,
    icon: "Code2",
    description: "Syntax, variables, data types, functions, OOP, comprehensions, decorators, and file handling.",
  },
  {
    slug: "pandas",
    name: "Pandas Data Wrangling",
    startDay: 31,
    endDay: 60,
    icon: "Table2",
    description: "Series, DataFrames, missing values, selection, groupby, merging, reshaping, and export.",
  },
  {
    slug: "numpy",
    name: "NumPy Essentials",
    startDay: 61,
    endDay: 70,
    icon: "Grid3x3",
    description: "Array creation, indexing, broadcasting, math/statistical functions, and linear algebra.",
  },
  {
    slug: "maths",
    name: "Statistics & Maths for DS",
    startDay: 71,
    endDay: 80,
    icon: "Sigma",
    description: "Descriptive statistics, outliers, distributions, regression basics, and matrices.",
  },
  {
    slug: "feature-eng",
    name: "Feature Engineering",
    startDay: 81,
    endDay: 85,
    icon: "SlidersHorizontal",
    description: "Data preprocessing, encoding techniques, feature scaling, and feature selection.",
  },
  {
    slug: "ml",
    name: "Machine Learning (ML)",
    startDay: 86,
    endDay: 117,
    icon: "Brain",
    description: "Regression, classification, model evaluation, ensembles, clustering, and hyperparameter tuning.",
  },
  {
    slug: "dl",
    name: "Deep Learning (DL)",
    startDay: 118,
    endDay: 147,
    icon: "Cpu",
    description: "MLPs, CNNs, RNNs, LSTMs, transformers, GANs, and model training/deployment.",
  },
  {
    slug: "nlp",
    name: "Natural Language Processing (NLP)",
    startDay: 148,
    endDay: 167,
    icon: "Languages",
    description: "Text cleaning, tokenization, embeddings, POS tagging, NER, and transformer-based NLP.",
  },
  {
    slug: "genai",
    name: "Generative AI & LLMs",
    startDay: 168,
    endDay: 192,
    icon: "Sparkles",
    description: "Prompt engineering, diffusion models, fine-tuning, RLHF, AI agents, and LLM evaluation.",
  },
  {
    slug: "rag",
    name: "RAG & Vector Databases",
    startDay: 193,
    endDay: 202,
    icon: "Database",
    description: "Retrieval-augmented generation, chunking, embeddings, and vector database platforms.",
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
  22: "Python: Python Lambda Functions",
  23: "Python: Python List Comprehensions",
  24: "Python: Python Dictionary & Set Comprehensions",
  25: "Python: Python Iterators & Generators",
  26: "Python: Python Decorators",
  27: "Python: Python File Handling (Read/Write)",
  28: "Python: Python Regular Expressions (re module)",
  29: "Python: Python Multithreading & Multiprocessing",
  30: "Python: Python Virtual Environments & Package Management",
  31: "Pandas: Pandas Introduction",
  32: "Pandas: Pandas Series Introduction",
  33: "Pandas: Pandas NaN Value Intro",
  34: "Pandas: Pandas Series Attributes",
  35: "Pandas: Pandas Series Methods",
  36: "Pandas: Pandas DataFrame Introduction",
  37: "Pandas: Pandas Loading Files",
  38: "Pandas: Pandas DataFrame Attributes",
  39: "Pandas: Pandas DataFrame Methods",
  40: "Pandas: Pandas DataFrame col: rename",
  41: "Pandas: Pandas Inplace Parameter",
  42: "Pandas: Pandas Handling Missing Values",
  43: "Pandas: Pandas Data Selection: loc & iloc",
  44: "Pandas: Pandas Filtering",
  45: "Pandas: Pandas Sorting",
  46: "Pandas: Pandas Groupby",
  47: "Pandas: Pandas Join/Merge",
  48: "Pandas: Pandas Concatenation",
  49: "Pandas: Pandas add/remove col/index",
  50: "Pandas: Pandas Date & Time Operations",
  51: "Pandas: Pandas Concatenating Multiple CSV Files",
  52: "Pandas: Pandas Pivot Tables & Crosstab",
  53: "Pandas: Pandas apply, map & applymap",
  54: "Pandas: Pandas MultiIndex (Hierarchical Indexing)",
  55: "Pandas: Pandas Window Functions (Rolling & Expanding)",
  56: "Pandas: Pandas Categorical Data Type",
  57: "Pandas: Pandas String/Text Methods (.str accessor)",
  58: "Pandas: Pandas Reshaping: melt, stack, unstack",
  59: "Pandas: Pandas Performance Optimization",
  60: "Pandas: Pandas Exporting Data (to_csv, to_excel, to_sql)",
  61: "NumPy: NumPy - Introduction",
  62: "NumPy: NumPy - Fundamentals",
  63: "NumPy: NumPy - Attributes",
  64: "NumPy: NumPy - Methods",
  65: "NumPy: NumPy Array Creation & Reshaping",
  66: "NumPy: NumPy Indexing, Slicing & Boolean Masking",
  67: "NumPy: NumPy Broadcasting",
  68: "NumPy: NumPy Mathematical & Statistical Functions",
  69: "NumPy: NumPy Linear Algebra Operations",
  70: "NumPy: NumPy Random Module",
  71: "Maths: Maths Part 1 - Population, Sample, Types of Variables",
  72: "Maths: Maths Part 2 - Mode, Median, Mean, Range, Standard Deviation, Variance",
  73: "Maths: Maths Part 3 - Outliers",
  74: "Maths: Maths Part 4 - The Five Number Summary, Box Plot, Outlier",
  75: "Maths: Maths Part 5 - Symmetry and Skewness",
  76: "Maths: Maths Part 6 - Explanatory and Responsive Variables",
  77: "Maths: Maths Part 7 - Regression and R Squared",
  78: "Maths: Maths Part 8 - Residual",
  79: "Maths: Maths Part 9 - The Normal Distribution and 68-95-99.7 Rule",
  80: "Maths: Maths Part 10 - Matrix",
  81: "FeatEng: Feature Engineering - Data Preprocessing Part 1",
  82: "FeatEng: Feature Engineering - Data Preprocessing Part 2",
  83: "FeatEng: Feature Engineering - Encoding Techniques",
  84: "FeatEng: Feature Engineering - Feature Scaling",
  85: "FeatEng: Feature Engineering - Feature Selection Techniques",
  86: "ML: Machine Learning \u2013 Introduction",
  87: "ML: Machine Learning \u2013 Terminology",
  88: "ML: Data and ML Algorithms",
  89: "ML: Learning Function",
  90: "ML: Types of the Model (Feature and Label)",
  91: "ML: Life Cycle",
  92: "ML: Train & Test Datasets",
  93: "ML: R Value",
  94: "ML: Simple Linear Regression",
  95: "ML: Polynomial Features",
  96: "ML: Multiple Linear Regression",
  97: "ML: Pickling and Unpickling",
  98: "ML: Save Model using Joblib and Pickling",
  99: "ML: Cost Function",
  100: "ML: Regression Cost Functions",
  101: "ML: Dummy Variable & OneHotEncoding",
  102: "ML: Gradient Descent Algorithm",
  103: "ML: Logistic Regression",
  104: "ML: Logistic Regression \u2013 Multiclass Classification",
  105: "ML: Decision Tree",
  106: "ML: Confusion Matrix",
  107: "ML: Bias-Variance Tradeoff",
  108: "ML: Random Forest Algorithm",
  109: "ML: K-Fold Cross Validation",
  110: "ML: Support Vector Machine",
  111: "ML: Underfitting and Overfitting",
  112: "ML: Lasso and Ridge Regression",
  113: "ML: K-Means Clustering",
  114: "ML: K Nearest Neighbor",
  115: "ML: Naive Bayes Classifier",
  116: "ML: Hyperparameter Tuning - GridSearchCV",
  117: "ML: XGBoost",
  118: "DL: DL - Introduction",
  119: "DL: DL - Libraries",
  120: "DL: DL - Terminology",
  121: "DL: DL - MLP Steps",
  122: "DL: DL - DL Codebase",
  123: "DL: DL - Model Evaluation",
  124: "DL: DL - Save Model",
  125: "DL: DL - Model Best Checkpoints",
  126: "DL: DL - Viz Model Acc & Loss",
  127: "DL: DL - Fine Tuning Parameters",
  128: "DL: DL - CNN & Computer Vision",
  129: "DL: DL - RNN",
  130: "DL: DL - Loss, Optimization, Activation Functions",
  131: "DL: DL - Real-World Structured Code",
  132: "DL: DL - Perceptron & Neural Network Basics",
  133: "DL: DL - Forward & Backward Propagation",
  134: "DL: DL - Weight Initialization Techniques",
  135: "DL: DL - Batch Normalization",
  136: "DL: DL - Dropout & Regularization in DL",
  137: "DL: DL - Vanishing & Exploding Gradients",
  138: "DL: DL - LSTM & GRU",
  139: "DL: DL - Autoencoders",
  140: "DL: DL - Transfer Learning",
  141: "DL: DL - Data Augmentation",
  142: "DL: DL - Transformer Architecture & Attention Mechanism",
  143: "DL: DL - GANs (Generative Adversarial Networks)",
  144: "DL: DL - TensorFlow vs PyTorch",
  145: "DL: DL - Hyperparameter Tuning in Deep Learning",
  146: "DL: DL - Object Detection & Image Segmentation",
  147: "DL: DL - Deploying Deep Learning Models",
  148: "NLP: NLP - Introduction",
  149: "NLP: NLP - Text Wrangling and Cleaning",
  150: "NLP: NLP - Replacing and Correcting Words",
  151: "NLP: NLP - Use Case",
  152: "NLP: NLP - Bag of Words, TF-IDF",
  153: "NLP: NLP - Twitter Sentiment Analysis",
  154: "NLP: NLP - Spacy Library",
  155: "NLP: NLP - Tokenization Techniques",
  156: "NLP: NLP - Stemming & Lemmatization",
  157: "NLP: NLP - Stopwords & Text Normalization",
  158: "NLP: NLP - Part-of-Speech Tagging",
  159: "NLP: NLP - Named Entity Recognition (NER)",
  160: "NLP: NLP - N-grams Language Models",
  161: "NLP: NLP - Word Embeddings (Word2Vec, GloVe)",
  162: "NLP: NLP - Text Classification Pipelines",
  163: "NLP: NLP - Topic Modeling (LDA)",
  164: "NLP: NLP - Sequence-to-Sequence Models",
  165: "NLP: NLP - Attention in NLP",
  166: "NLP: NLP - Transformers for NLP (BERT, GPT)",
  167: "NLP: NLP - Text Summarization & Machine Translation",
  168: "GenAI: Introduction to Gen-AI (Overview)",
  169: "GenAI: AI Powered Transformers",
  170: "GenAI: Prompt Engineering",
  171: "GenAI: Prompting Techniques for Generative Models",
  172: "GenAI: Gen AI - Discriminative vs Generative Models",
  173: "GenAI: Gen AI - Diffusion Models",
  174: "GenAI: Gen AI - Text-to-Image Generation",
  175: "GenAI: Gen AI - Multimodal Generative Models",
  176: "GenAI: Gen AI - Foundation Models Overview",
  177: "GenAI: Gen AI - Fine-Tuning vs Prompting",
  178: "GenAI: Gen AI - Instruction Tuning",
  179: "GenAI: Gen AI - RLHF (Reinforcement Learning from Human Feedback)",
  180: "GenAI: Gen AI - Evaluation of Generative Models",
  181: "GenAI: Gen AI - Ethics, Bias & Responsible AI",
  182: "GenAI: Gen AI - Hallucination & Mitigation Strategies",
  183: "GenAI: Gen AI - AI Agents Overview",
  184: "GenAI: Gen AI - Tool Use / Function Calling",
  185: "GenAI: Gen AI - Copyright & IP Considerations",
  186: "GenAI: Gen AI - Gen AI Application Architecture",
  187: "GenAI: Gen AI - Cost & Latency Optimization",
  188: "GenAI: LLM - Tokenizers & Tokenization in LLMs",
  189: "GenAI: LLM - Context Window & Positional Encoding",
  190: "GenAI: LLM - Fine-Tuning LLMs (LoRA, PEFT)",
  191: "GenAI: LLM - LLM Evaluation Benchmarks",
  192: "GenAI: LLM - Popular LLM Families (GPT, Claude, Llama, Gemini)",
  193: "RAG: Introduction to Retrieval-Augmented Generation (RAG)",
  194: "RAG: RAG - Chunking Strategies",
  195: "RAG: RAG - Embedding Models for Retrieval",
  196: "RAG: RAG - Advanced RAG (Hybrid Search, Reranking)",
  197: "RAG: RAG - Evaluating RAG Pipelines",
  198: "RAG: Introduction to Vector DB",
  199: "RAG: Vector DB - Indexing Algorithms (HNSW, IVF)",
  200: "RAG: Vector DB - Similarity Metrics (Cosine, Euclidean, Dot Product)",
  201: "RAG: Vector DB - Popular Vector Database Platforms Comparison",
  202: "RAG: Vector DB - Scaling & Production Considerations",
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


