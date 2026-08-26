import { ArrowRight, CheckCircle2, Clock3, Compass, Route, ShieldCheck } from 'lucide-react'
import { lessons } from '../course/lessons'
import { phases } from '../course/phases'
import type { LearningState } from '../types/course'

interface DashboardProps {
  state: LearningState
  progressPercent: number
  completedCount: number
  averageScore: number
  onLesson: (lessonId: string) => void
}

export function Dashboard({ state, progressPercent, completedCount, averageScore, onLesson }: DashboardProps) {
  const currentIndex = Math.min(
    lessons.findIndex((lesson) => !state.completedLessonIds.includes(lesson.id)),
    lessons.length - 1,
  )
  const currentLesson = lessons[currentIndex === -1 ? lessons.length - 1 : currentIndex]
  const nextLesson = lessons[Math.min((currentIndex === -1 ? lessons.length - 1 : currentIndex) + 1, lessons.length - 1)]
  const projectComplete = state.projectEvidenceIds.includes('coze-business-analysis')
  const hasQuizScores = Object.keys(state.quizScores).length > 0
  const progressTicks = Array.from({ length: 5 }, (_, index) => Math.round((lessons.length * index) / 4))

  return (
    <main className="page dashboard-page" id="main-content">
      <header className="page-header dashboard-header">
        <div>
          <h1>下一站，不是更多術語。<br />是把一個問題判斷清楚。</h1>
          <p>沿著 {lessons.length} 堂 MVP 課程，先建立心智模型，再完成 Coze Workflow 與 Hermes 只讀任務。</p>
        </div>
        <div className="course-stamp" aria-label="課程版本資訊">
          <span>Course 0.2.0</span>
          <strong>核心概念已查證</strong>
          <small>2026-08-26</small>
        </div>
      </header>

      <section className="continue-station" aria-labelledby="continue-title">
        <div className="station-rail" aria-hidden="true"><span /><span /><span /></div>
        <div className="continue-copy">
          <span className="signal-label">目前站點 · Lesson {String(currentLesson.lessonNumber).padStart(2, '0')}</span>
          <h2 id="continue-title">{currentLesson.title}</h2>
          <p>{currentLesson.description}</p>
          <div className="lesson-meta"><Clock3 size={17} />約 {currentLesson.duration} 分鐘 <span /> Phase {currentLesson.phase}</div>
        </div>
        <button className="continue-button" type="button" onClick={() => onLesson(currentLesson.id)}>
          繼續學習 <ArrowRight size={20} />
        </button>
      </section>

      <section className="progress-board" aria-labelledby="progress-title">
        <div className="progress-copy">
          <h2 id="progress-title">MVP 學習進度</h2>
          <p>完成勾選只代表讀過；真正通關還要能解釋、實作與修改需求。</p>
        </div>
        <div className="progress-scale">
          <div className="progress-readout"><strong>{progressPercent}%</strong><span>{completedCount} / {lessons.length} 課</span></div>
          <div className="progress-track" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progressPercent}>
            <span style={{ width: `${progressPercent}%` }} />
          </div>
          <div className="progress-ticks" aria-hidden="true">{progressTicks.map((tick) => <span key={tick}>{tick}</span>)}</div>
        </div>
        <dl className="metric-line">
          <div><dt>已完成課程</dt><dd>{completedCount}</dd></div>
          <div><dt>測驗平均</dt><dd>{hasQuizScores ? averageScore : '—'}{hasQuizScores ? <small>分</small> : null}</dd></div>
          <div><dt>目前課程</dt><dd>L{String(currentLesson.lessonNumber).padStart(2, '0')}</dd></div>
          <div><dt>下一課</dt><dd>L{String(nextLesson.lessonNumber).padStart(2, '0')}</dd></div>
          <div><dt>Project 證據</dt><dd>{projectComplete ? '1/1' : '0/1'}</dd></div>
        </dl>
      </section>

      <section className="route-board" aria-labelledby="route-title">
        <div className="section-heading">
          <span className="section-mark" aria-hidden="true" />
          <div><h2 id="route-title">完整路線圖</h2><p>本次只開放 Phase 1–3；後續階段保留順序，不以標題占位冒充完成內容。</p></div>
        </div>
        <div className="route-map">
          {phases.map((phase) => {
            const phaseLessons = lessons.filter((lesson) => lesson.phase === phase.id)
            const completed = phaseLessons.filter((lesson) => state.completedLessonIds.includes(lesson.id)).length
            return (
              <div className={`route-stop${phase.status === 'locked' ? ' is-locked' : ''}`} key={phase.id}>
                <span className="route-number">{String(phase.id).padStart(2, '0')}</span>
                <span className="route-node" style={{ '--phase-color': phase.color } as React.CSSProperties} />
                <div>
                  <h3>{phase.title}</h3>
                  <p>{phase.description}</p>
                </div>
                <span className="route-status">{phase.status === 'locked' ? '尚未開放' : `${completed}/${phaseLessons.length} 課`}</span>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mastery-panel" aria-labelledby="mastery-title">
        <div><Compass size={24} /><h2 id="mastery-title">Phase 1 能力測試</h2></div>
        <p>客戶詢價後，要自動查產品資料、AI 生成回覆、主管確認後寄出。你能指出 Workflow、AI、資料來源與人工審核各在哪一站嗎？</p>
        <button type="button" className="secondary-button" onClick={() => onLesson('lesson-10')}>前往能力測試 <ArrowRight size={18} /></button>
      </section>

      <section className="principle-strip" aria-label="學習原則">
        <div><Route size={19} /><span><strong>固定路徑</strong>先理解，再操作</span></div>
        <div><ShieldCheck size={19} /><span><strong>來源邊界</strong>不確定就標記</span></div>
        <div><CheckCircle2 size={19} /><span><strong>能力證據</strong>能改需求才算會</span></div>
      </section>
    </main>
  )
}
