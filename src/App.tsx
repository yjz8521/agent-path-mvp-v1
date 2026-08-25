import { useEffect, useMemo, useState } from 'react'
import { Dashboard } from './components/Dashboard'
import { DebugLab } from './components/DebugLab'
import { GlossaryPage } from './components/GlossaryPage'
import { LessonPage } from './components/LessonPage'
import { Sidebar } from './components/Sidebar'
import { lessons } from './course/lessons'
import { useLearningProgress } from './hooks/useLearningProgress'

type View = 'dashboard' | 'lesson' | 'glossary' | 'debug'

export default function App() {
  const { state, completedCount, progressPercent, averageScore, actions } = useLearningProgress(lessons.length)
  const [view, setView] = useState<View>('dashboard')
  const [selectedLessonId, setSelectedLessonId] = useState(state.lastLessonId)
  const selectedIndex = Math.max(0, lessons.findIndex((lesson) => lesson.id === selectedLessonId))
  const selectedLesson = lessons[selectedIndex]

  useEffect(() => {
    document.title = view === 'lesson' ? `${selectedLesson.title}｜Agent Path` : 'Agent Path｜AI Agent 自學系統'
  }, [selectedLesson.title, view])

  const navigateToLesson = (lessonId: string) => {
    setSelectedLessonId(lessonId)
    actions.setLastLesson(lessonId)
    setView('lesson')
  }

  const page = useMemo(() => {
    if (view === 'dashboard') return <Dashboard state={state} progressPercent={progressPercent} completedCount={completedCount} averageScore={averageScore} onLesson={navigateToLesson} />
    if (view === 'glossary') return <GlossaryPage onLesson={navigateToLesson} />
    if (view === 'debug') return <DebugLab />
    return (
      <LessonPage
        key={selectedLesson.id}
        lesson={selectedLesson}
        isCompleted={state.completedLessonIds.includes(selectedLesson.id)}
        savedAnswers={state.quizAnswers[selectedLesson.id]}
        onToggleComplete={() => actions.toggleLesson(selectedLesson.id)}
        onQuizSave={(answers, score) => actions.saveQuiz(selectedLesson.id, answers, score)}
        onPrevious={selectedIndex > 0 ? () => navigateToLesson(lessons[selectedIndex - 1].id) : undefined}
        onNext={selectedIndex < lessons.length - 1 ? () => navigateToLesson(lessons[selectedIndex + 1].id) : undefined}
        projectEvidenceComplete={selectedLesson.id === 'lesson-16' ? state.projectEvidenceIds.includes('coze-business-analysis') : undefined}
        onToggleProjectEvidence={selectedLesson.id === 'lesson-16' ? () => actions.toggleProjectEvidence('coze-business-analysis') : undefined}
      />
    )
  }, [view, state, progressPercent, completedCount, averageScore, selectedLesson, selectedIndex, actions])

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">跳到主要內容</a>
      <Sidebar activeView={view} selectedLessonId={selectedLessonId} completedLessonIds={state.completedLessonIds} onView={setView} onLesson={navigateToLesson} />
      <div className="app-content">{page}</div>
    </div>
  )
}
