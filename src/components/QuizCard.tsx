import { useMemo, useState } from 'react'
import { CheckCircle2, CircleAlert, Lightbulb, RotateCcw } from 'lucide-react'
import type { QuizQuestion } from '../types/course'

interface QuizCardProps {
  lessonId: string
  questions: QuizQuestion[]
  savedAnswers?: Record<string, number>
  onSave: (answers: Record<string, number>, score: number) => void
}

export function QuizCard({ lessonId, questions, savedAnswers, onSave }: QuizCardProps) {
  const [answers, setAnswers] = useState<Record<string, number>>(savedAnswers ?? {})
  const [submitted, setSubmitted] = useState(Boolean(savedAnswers))
  const [showHint, setShowHint] = useState<Record<string, boolean>>({})

  const score = useMemo(() => {
    const correct = questions.filter((item) => answers[item.id] === item.answer).length
    return Math.round((correct / questions.length) * 100)
  }, [answers, questions])

  const submit = () => {
    if (Object.keys(answers).length !== questions.length) return
    setSubmitted(true)
    onSave(answers, score)
  }

  const reset = () => {
    setAnswers({})
    setSubmitted(false)
    setShowHint({})
  }

  return (
    <section className="quiz-section" aria-labelledby={`${lessonId}-quiz-title`}>
      <div className="section-heading">
        <span className="section-mark" aria-hidden="true" />
        <div>
          <h2 id={`${lessonId}-quiz-title`}>小測驗</h2>
          <p>先做判斷，再看逐題原因。答錯不是退步，而是找到下一個要修正的概念。</p>
        </div>
      </div>

      {questions.map((item, index) => {
        const selected = answers[item.id]
        const isCorrect = selected === item.answer
        return (
          <fieldset className="question" key={item.id}>
            <legend>{index + 1}. {item.prompt}</legend>
            <div className="answer-options">
              {item.options.map((option, optionIndex) => {
                const selectedOption = selected === optionIndex
                const correctOption = submitted && item.answer === optionIndex
                const wrongOption = submitted && selectedOption && !isCorrect
                return (
                  <label
                    className={`answer-option${selectedOption ? ' is-selected' : ''}${correctOption ? ' is-correct' : ''}${wrongOption ? ' is-wrong' : ''}`}
                    key={option}
                  >
                    <input
                      type="radio"
                      name={`${lessonId}-${item.id}`}
                      value={optionIndex}
                      checked={selectedOption}
                      onChange={() => {
                        setAnswers((current) => ({ ...current, [item.id]: optionIndex }))
                        setSubmitted(false)
                      }}
                    />
                    <span className="option-key">{String.fromCharCode(65 + optionIndex)}</span>
                    <span>{option}</span>
                  </label>
                )
              })}
            </div>

            {!submitted && (
              <button
                className="hint-button"
                type="button"
                onClick={() => setShowHint((current) => ({ ...current, [item.id]: !current[item.id] }))}
              >
                <Lightbulb size={17} aria-hidden="true" />
                {showHint[item.id] ? '收起提示' : '給我一個提示'}
              </button>
            )}
            {!submitted && showHint[item.id] && <p className="hint-text">提示：{item.hint}</p>}

            {submitted && (
              <div className={`quiz-feedback ${isCorrect ? 'is-correct' : 'is-wrong'}`} role="status">
                {isCorrect ? <CheckCircle2 size={20} aria-hidden="true" /> : <CircleAlert size={20} aria-hidden="true" />}
                <div>
                  <strong>{isCorrect ? '正確' : `你選的是 ${item.options[selected] ?? '未作答'}；正確答案是 ${item.options[item.answer]}`}</strong>
                  <p>{item.explanation}</p>
                </div>
              </div>
            )}
          </fieldset>
        )
      })}

      <div className="quiz-actions">
        <button className="primary-button" type="button" onClick={submit} disabled={Object.keys(answers).length !== questions.length}>
          提交並查看解析
        </button>
        {submitted && (
          <button className="text-button" type="button" onClick={reset}>
            <RotateCcw size={16} aria-hidden="true" /> 重新作答
          </button>
        )}
        <span className="quiz-score" aria-live="polite">{submitted ? `本次得分 ${score}` : `已作答 ${Object.keys(answers).length}/${questions.length}`}</span>
      </div>
    </section>
  )
}
