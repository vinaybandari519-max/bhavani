import { DayQuiz, MCQQuestion, CodingQuestion, getCourseForDay, getTopicTitleForDay } from "./types.js";
import { QUESTION_BANK } from "./questionBank.js";

// NOTE: This used to contain hand-written MCQ/coding presets for Day 1-3, written against the
// OLD syllabus (Variables & Data Types / Strings / Lists & Tuples). The syllabus has since been
// updated to the latest 200-Day Complete Schedule. Curated content for all 101 topics now lives
// in questionBank.ts (QUESTION_BANK), keyed by topic title, sourced from the
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
