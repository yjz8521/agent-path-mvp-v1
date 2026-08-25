import { useEffect, useMemo, useState } from 'react'
import type { LearningState } from '../types/course'
import { initialLearningState, loadLearningState, saveLearningState } from '../utils/storage'

export function useLearningProgress(totalLessons: number) {
  const [state, setState] = useState<LearningState>(() =>
    typeof window === 'undefined' ? initialLearningState : loadLearningState(),
  )

  useEffect(() => {
    saveLearningState(state)
  }, [state])

  const completedCount = state.completedLessonIds.length
  const progressPercent = Math.round((completedCount / totalLessons) * 100)
  const scores = Object.values(state.quizScores)
  const averageScore = scores.length
    ? Math.round(scores.reduce((total, score) => total + score, 0) / scores.length)
    : 0

  const actions = useMemo(
    () => ({
      toggleLesson(lessonId: string) {
        setState((current) => ({
          ...current,
          completedLessonIds: current.completedLessonIds.includes(lessonId)
            ? current.completedLessonIds.filter((id) => id !== lessonId)
            : [...current.completedLessonIds, lessonId],
        }))
      },
      setLastLesson(lessonId: string) {
        setState((current) => ({ ...current, lastLessonId: lessonId }))
      },
      saveQuiz(lessonId: string, answers: Record<string, number>, score: number) {
        setState((current) => ({
          ...current,
          quizScores: { ...current.quizScores, [lessonId]: score },
          quizAnswers: { ...current.quizAnswers, [lessonId]: answers },
        }))
      },
      toggleProjectEvidence(projectId: string) {
        setState((current) => ({
          ...current,
          projectEvidenceIds: current.projectEvidenceIds.includes(projectId)
            ? current.projectEvidenceIds.filter((id) => id !== projectId)
            : [...current.projectEvidenceIds, projectId],
        }))
      },
    }),
    [],
  )

  return { state, completedCount, progressPercent, averageScore, actions }
}
