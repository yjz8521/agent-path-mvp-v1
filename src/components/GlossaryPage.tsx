import { ArrowRight, BookMarked, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { glossary } from '../course/glossary'

interface GlossaryPageProps { onLesson: (lessonId: string) => void }

export function GlossaryPage({ onLesson }: GlossaryPageProps) {
  const [query, setQuery] = useState('')
  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return glossary
    return glossary.filter((item) => [item.term, item.chinese, item.plain, item.definition].join(' ').toLowerCase().includes(normalized))
  }, [query])

  return (
    <main className="page glossary-page" id="main-content">
      <header className="page-header compact-header">
        <div><h1>名詞百科</h1><p>不是背英文。先用白話理解，再把它放回真正的系統場景。</p></div>
        <BookMarked size={38} aria-hidden="true" />
      </header>
      <label className="search-field">
        <Search size={19} aria-hidden="true" />
        <span className="sr-only">搜尋名詞</span>
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜尋 Agent、工作流、記憶……" />
        <span>{results.length} 個名詞</span>
      </label>
      {results.length ? (
        <div className="glossary-list">
          {results.map((item) => (
            <article className="glossary-entry" key={`${item.term}-${item.lessonId}`}>
              <div className="glossary-term"><h2>{item.term}</h2><strong>{item.chinese}</strong></div>
              <p className="glossary-plain">{item.plain}</p>
              <dl>
                <div><dt>正式定義</dt><dd>{item.definition}</dd></div>
                <div><dt>為什麼需要</dt><dd>{item.why}</dd></div>
                <div><dt>例子</dt><dd>{item.example}</dd></div>
                <div><dt>常見錯誤</dt><dd>{item.mistakes}</dd></div>
                <div><dt>相關名詞</dt><dd>{item.related}</dd></div>
              </dl>
              <button type="button" className="text-button" onClick={() => onLesson(item.lessonId)}>回到出現這個名詞的課程 <ArrowRight size={16} /></button>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state"><Search size={28} /><h2>找不到這個名詞</h2><p>試著輸入英文、中文或較短的關鍵字。</p></div>
      )}
    </main>
  )
}
