import { ArrowLeft, ArrowRight, BookOpenCheck, Check, CircleAlert, Clock3, ExternalLink, Flag, Lightbulb, ListChecks, ShieldCheck } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { Lesson } from '../types/course'
import { QuizCard } from './QuizCard'

interface LessonPageProps {
  lesson: Lesson
  isCompleted: boolean
  savedAnswers?: Record<string, number>
  onToggleComplete: () => void
  onQuizSave: (answers: Record<string, number>, score: number) => void
  onPrevious?: () => void
  onNext?: () => void
  projectEvidenceComplete?: boolean
  onToggleProjectEvidence?: () => void
}

export function LessonPage({ lesson, isCompleted, savedAnswers, onToggleComplete, onQuizSave, onPrevious, onNext, projectEvidenceComplete, onToggleProjectEvidence }: LessonPageProps) {
  const [showExerciseAnswer, setShowExerciseAnswer] = useState(false)

  useEffect(() => {
    setShowExerciseAnswer(false)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [lesson.id])

  return (
    <main className="page lesson-page" id="main-content">
      <header className="lesson-header">
        <div className="lesson-coordinate"><span>Phase {lesson.phase}</span><span>Lesson {String(lesson.lessonNumber).padStart(2, '0')}</span></div>
        <h1>{lesson.title}</h1>
        <p className="lesson-subtitle">{lesson.subtitle}</p>
        <div className="lesson-facts">
          <span><Clock3 size={17} />約 {lesson.duration} 分鐘</span>
          <span className={`verification-status status-${lesson.verification}`}>{lesson.verification}</span>
          {lesson.lessonNumber === 10 && <span><Flag size={16} />Phase 1 Mastery Check</span>}
        </div>
      </header>

      <div className="lesson-layout">
        <article className="lesson-content">
          <section className="learning-goals">
            <div className="section-heading"><span className="section-mark" /><div><h2>預計學習目標</h2><p>{lesson.description}</p></div></div>
            <ul>{lesson.objectives.map((objective) => <li key={objective}><Check size={17} />{objective}</li>)}</ul>
            <p className="prerequisites"><strong>前置知識：</strong>{lesson.prerequisites.join('、')}</p>
          </section>

          <section>
            <div className="section-heading"><span className="section-mark" /><div><h2>核心概念</h2><p>先用白話建立直覺，再進入正式定義。</p></div></div>
            <div className="concept-list">
              {lesson.concepts.map((concept) => (
                <article className="concept-entry" key={concept.term}>
                  <h3>{concept.term} <span>{concept.chinese}</span></h3>
                  <dl>
                    <div><dt>白話</dt><dd>{concept.plain}</dd></div>
                    <div><dt>正式定義</dt><dd>{concept.definition}</dd></div>
                    <div><dt>為什麼需要</dt><dd>{concept.why}</dd></div>
                    <div><dt>實際例子</dt><dd>{concept.example}</dd></div>
                    {concept.commonConfusion && <div><dt>常見混淆</dt><dd>{concept.commonConfusion}</dd></div>}
                  </dl>
                </article>
              ))}
            </div>
          </section>

          <section className="metaphor-section">
            <Lightbulb size={22} aria-hidden="true" />
            <div><h2>生活比喻</h2><p>{lesson.metaphor}</p></div>
          </section>

          <section>
            <div className="section-heading"><span className="section-mark" /><div><h2>技術解釋</h2><p>把剛才的比喻換成系統裡真正發生的事。</p></div></div>
            <ol className="technical-steps">{lesson.technicalExplanation.map((item, index) => <li key={item}><span>{index + 1}</span>{item}</li>)}</ol>
          </section>

          <section>
            <div className="section-heading"><span className="section-mark" /><div><h2>圖解</h2><p>沿著資料方向，由上而下讀。</p></div></div>
            <div className="flow-diagram" aria-label={lesson.diagram.join('，然後')}>
              {lesson.diagram.map((item, index) => (
                <div key={`${item}-${index}`}><span>{item}</span>{index < lesson.diagram.length - 1 && <ArrowRight aria-hidden="true" size={18} />}</div>
              ))}
            </div>
          </section>

          <section className="case-study">
            <span className="case-label">{lesson.caseStudy.label}</span>
            <div><h2>{lesson.caseStudy.title}</h2><p>{lesson.caseStudy.description}</p></div>
          </section>

          <section>
            <div className="section-heading"><span className="section-mark" /><div><h2>Step-by-Step 操作</h2><p>一次只做一站，看到結果再往下。</p></div></div>
            <ol className="operation-list">{lesson.steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><p>{step}</p></li>)}</ol>
          </section>

          <section className="exercise-section">
            <div className="exercise-title"><ListChecks size={22} /><div><h2>動手練習</h2><p>{lesson.exercise.prompt}</p></div></div>
            <div className="success-criteria"><strong>完成標準</strong><ul>{lesson.exercise.success.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <p className="exercise-hint"><Lightbulb size={17} />提示：{lesson.exercise.hint}</p>
            <button className="secondary-button" type="button" onClick={() => setShowExerciseAnswer((visible) => !visible)}>
              {showExerciseAnswer ? '收起參考答案' : '查看參考答案'}
            </button>
            {showExerciseAnswer && <div className="exercise-answer" role="status"><strong>參考答案</strong><p>{lesson.exercise.answer}</p><small>看完後請關閉答案，從空白重新說一次，再改一項需求。</small></div>}
          </section>

          <QuizCard lessonId={lesson.id} questions={lesson.quiz} savedAnswers={savedAnswers} onSave={onQuizSave} />

          {onToggleProjectEvidence && (
            <section className="project-evidence" aria-labelledby="project-evidence-title">
              <div><ShieldCheck size={24} /><h2 id="project-evidence-title">Project 證據 Gate</h2></div>
              <p>完成課程不等於完成專案。請在你真的留下以下證據後，再記錄通關：</p>
              <ul>
                <li>已保存正常、空白、衝突三組 Run Log。</li>
                <li>能不用看答案解釋 Start、LLM、End 的輸入與輸出。</li>
                <li>已修改一項輸出需求，並重新測試成功。</li>
              </ul>
              <button className={projectEvidenceComplete ? 'complete-button is-complete' : 'complete-button'} type="button" onClick={onToggleProjectEvidence}>
                <Check size={18} />{projectEvidenceComplete ? '已記錄 Project 證據' : '我已備妥以上證據'}
              </button>
            </section>
          )}

          <section>
            <div className="section-heading"><span className="section-mark" /><div><h2>常見錯誤與 Debug</h2><p>先定位第一個不符合預期的地方。</p></div></div>
            <div className="error-table">
              {lesson.commonErrors.map((error) => <div key={error.mistake}><strong><CircleAlert size={17} />{error.mistake}</strong><p><b>原因：</b>{error.cause}</p><p><b>修復：</b>{error.fix}</p></div>)}
            </div>
            <ol className="debug-track">{lesson.debugSteps.map((step, index) => <li key={step}><span>{index + 1}</span>{step}</li>)}</ol>
          </section>

          <section className="lesson-summary">
            <BookOpenCheck size={23} /><div><h2>本課總結</h2><ul>{lesson.summary.map((item) => <li key={item}>{item}</li>)}</ul><p>{lesson.nextLesson}</p></div>
          </section>

          <section className="source-note">
            <strong>內容驗證狀態</strong>
            <p>{lesson.sourceNote}</p>
            <ul className="source-links">
              {lesson.sources.map((source) => (
                <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.title} <ExternalLink size={15} /></a></li>
              ))}
            </ul>
          </section>
        </article>

        <aside className="lesson-station-panel" aria-label="本課進度">
          <span className="signal-label">Lesson {String(lesson.lessonNumber).padStart(2, '0')}</span>
          <strong>{isCompleted ? '本課已完成' : '完成閱讀與練習後標記'}</strong>
          <button className={isCompleted ? 'complete-button is-complete' : 'complete-button'} type="button" onClick={onToggleComplete}>
            <Check size={18} />{isCompleted ? '取消完成' : '完成本課'}
          </button>
          <div className="lesson-nav-buttons">
            <button type="button" onClick={onPrevious} disabled={!onPrevious}><ArrowLeft size={17} />上一課</button>
            <button type="button" onClick={onNext} disabled={!onNext}>下一課<ArrowRight size={17} /></button>
          </div>
        </aside>
      </div>
    </main>
  )
}
