export type VerificationStatus = '已確認' | '概念已確認' | '版本敏感' | '待確認'

export interface Concept {
  term: string
  chinese: string
  plain: string
  definition: string
  why: string
  example: string
  commonConfusion?: string
}

export interface QuizQuestion {
  id: string
  type: 'single' | 'true-false' | 'scenario'
  prompt: string
  options: string[]
  answer: number
  explanation: string
  hint: string
}

export interface CommonError {
  mistake: string
  cause: string
  fix: string
}

export interface Lesson {
  id: string
  phase: number
  lessonNumber: number
  title: string
  subtitle: string
  duration: number
  description: string
  objectives: string[]
  prerequisites: string[]
  concepts: Concept[]
  metaphor: string
  technicalExplanation: string[]
  diagram: string[]
  caseStudy: {
    title: string
    label: string
    description: string
  }
  steps: string[]
  exercise: {
    prompt: string
    success: string[]
    hint: string
    answer: string
  }
  quiz: QuizQuestion[]
  commonErrors: CommonError[]
  debugSteps: string[]
  summary: string[]
  nextLesson: string
  verification: VerificationStatus
  sourceNote: string
  sources: { title: string; url: string }[]
}

export interface Phase {
  id: number
  title: string
  shortTitle: string
  description: string
  status: 'available' | 'locked'
  color: string
}

export interface GlossaryTerm {
  term: string
  chinese: string
  plain: string
  definition: string
  why: string
  example: string
  mistakes: string
  related: string
  lessonId: string
}

export interface LearningState {
  version: 1
  completedLessonIds: string[]
  quizScores: Record<string, number>
  quizAnswers: Record<string, Record<string, number>>
  lastLessonId: string
  projectEvidenceIds: string[]
}
