import { BookOpenText, Bug, Check, ChevronDown, Gauge, Library, LockKeyhole, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { lessons } from '../course/lessons'
import { phases } from '../course/phases'

interface SidebarProps {
  activeView: string
  selectedLessonId: string
  completedLessonIds: string[]
  onView: (view: 'dashboard' | 'glossary' | 'debug') => void
  onLesson: (lessonId: string) => void
}

export function Sidebar({ activeView, selectedLessonId, completedLessonIds, onView, onLesson }: SidebarProps) {
  const [expanded, setExpanded] = useState<number[]>([1, 2, 3])
  const [mobileOpen, setMobileOpen] = useState(false)

  const togglePhase = (phaseId: number) => {
    setExpanded((current) => current.includes(phaseId) ? current.filter((id) => id !== phaseId) : [...current, phaseId])
  }

  const closeAnd = (action: () => void) => {
    action()
    setMobileOpen(false)
  }

  return (
    <>
      <header className="mobile-header">
        <button className="icon-button" type="button" onClick={() => setMobileOpen(true)} aria-label="開啟課程導覽">
          <Menu size={22} />
        </button>
        <strong>Agent Path</strong>
        <span className="mobile-status">MVP V1</span>
      </header>
      {mobileOpen && <button className="sidebar-scrim" aria-label="關閉課程導覽" onClick={() => setMobileOpen(false)} />}
      <aside className={`sidebar${mobileOpen ? ' is-open' : ''}`} aria-label="課程導覽">
        <div className="brand-block">
          <div className="brand-symbol" aria-hidden="true"><span /><span /><span /></div>
          <div><strong>Agent Path</strong><small>AI Agent 自學系統</small></div>
          <button className="icon-button sidebar-close" type="button" onClick={() => setMobileOpen(false)} aria-label="關閉導覽"><X size={20} /></button>
        </div>

        <nav className="primary-nav" aria-label="主要功能">
          <button className={activeView === 'dashboard' ? 'is-active' : ''} onClick={() => closeAnd(() => onView('dashboard'))}>
            <Gauge size={18} />學習總站
          </button>
          <button className={activeView === 'glossary' ? 'is-active' : ''} onClick={() => closeAnd(() => onView('glossary'))}>
            <Library size={18} />名詞百科
          </button>
          <button className={activeView === 'debug' ? 'is-active' : ''} onClick={() => closeAnd(() => onView('debug'))}>
            <Bug size={18} />Debug Lab
          </button>
        </nav>

        <div className="route-legend"><span>課程路線</span><span>{completedLessonIds.length}/{lessons.length}</span></div>
        <div className="phase-list">
          {phases.map((phase) => {
            const phaseLessons = lessons.filter((lesson) => lesson.phase === phase.id)
            const isExpanded = expanded.includes(phase.id)
            return (
              <div className={`phase-group${phase.status === 'locked' ? ' is-locked' : ''}`} key={phase.id}>
                <button
                  className="phase-toggle"
                  type="button"
                  onClick={() => togglePhase(phase.id)}
                  aria-expanded={phase.status === 'available' ? isExpanded : undefined}
                  aria-label={phase.status === 'locked' ? `Phase ${phase.id} ${phase.shortTitle}，尚未開放` : undefined}
                  disabled={phase.status === 'locked'}
                >
                  <span className="phase-line" style={{ '--phase-color': phase.color } as React.CSSProperties} />
                  <span><small>Phase {phase.id}</small>{phase.shortTitle}</span>
                  {phase.status === 'locked' ? <LockKeyhole size={15} /> : <ChevronDown className={isExpanded ? 'is-rotated' : ''} size={16} />}
                </button>
                {phase.status === 'available' && isExpanded && (
                  <div className="lesson-links">
                    {phaseLessons.map((lesson) => (
                      <button
                        key={lesson.id}
                        className={activeView === 'lesson' && selectedLessonId === lesson.id ? 'is-current' : ''}
                        onClick={() => closeAnd(() => onLesson(lesson.id))}
                      >
                        <span className={`station-dot${completedLessonIds.includes(lesson.id) ? ' is-complete' : ''}`}>
                          {completedLessonIds.includes(lesson.id) && <Check size={10} />}
                        </span>
                        <span><small>Lesson {String(lesson.lessonNumber).padStart(2, '0')}</small>{lesson.title}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
        <div className="sidebar-version"><BookOpenText size={16} /><span>Course 0.2.0<br /><small>更新：2026-08-26</small></span></div>
      </aside>
    </>
  )
}
