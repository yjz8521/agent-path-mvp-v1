import type { LearningState } from '../types/course'

const STORAGE_KEY = 'agent-path-learning-state-v1'

export const initialLearningState: LearningState = {
  version: 1,
  completedLessonIds: [],
  quizScores: {},
  quizAnswers: {},
  lastLessonId: 'lesson-01',
  projectEvidenceIds: [],
}

export function loadLearningState(): LearningState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return initialLearningState
    const parsed = JSON.parse(raw) as Partial<LearningState>
    if (parsed.version !== 1) return initialLearningState
    return {
      ...initialLearningState,
      ...parsed,
      completedLessonIds: Array.isArray(parsed.completedLessonIds) ? parsed.completedLessonIds : [],
      quizScores: parsed.quizScores && typeof parsed.quizScores === 'object' ? parsed.quizScores : {},
      quizAnswers: parsed.quizAnswers && typeof parsed.quizAnswers === 'object' ? parsed.quizAnswers : {},
      projectEvidenceIds: Array.isArray(parsed.projectEvidenceIds) ? parsed.projectEvidenceIds : [],
    }
  } catch {
    return initialLearningState
  }
}

export function saveLearningState(state: LearningState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}
