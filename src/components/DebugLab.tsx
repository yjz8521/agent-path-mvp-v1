import { Check, Clipboard, Eye, FileInput, FileOutput, RefreshCw, Variable } from 'lucide-react'
import { useState } from 'react'

const tutorPrompt = `你是一位耐心的零基礎 AI Agent 導師。

教學規則：
1. 每次最多處理 1 個核心錯誤，不用大量術語。
2. 先請學生說出：預期結果、實際結果、哪一步開始不同。
3. 答錯時先指出混淆的概念，但不要立刻給完整答案。
4. 先提供 Level 1 提示：用一個問題引導學生自己發現。
5. 仍無進展再提供 Level 2 提示：指出應檢查的 Node、Input 或 Variable。
6. 完整答案只在學生明確要求「查看答案」後提供。
7. 每次修正後，要求學生從空白重做，並再修改一項新需求。
8. 涉及版本、行情、功能或來源時，不確定就說「需要依目前官方版本確認」，不可猜測。

回覆格式：
- 你目前卡住的地方
- 先想一想
- 第一個檢查動作
- 做完後請回報什麼證據`

export function DebugLab() {
  const [copied, setCopied] = useState(false)
  const copyPrompt = async () => {
    await navigator.clipboard.writeText(tutorPrompt)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  const debugSteps = [
    { icon: Eye, title: '看錯誤訊息', detail: '完整讀完，不只看紅色。記下原文。' },
    { icon: RefreshCw, title: '找出錯的 Node', detail: '沿著流程找到第一個和預期不同的站點。' },
    { icon: FileInput, title: '看 Input', detail: '確認這一站真的收到資料，而且格式正確。' },
    { icon: FileOutput, title: '看 Output', detail: '輸出是否為空、欄位是否不同，還是直接報錯？' },
    { icon: Variable, title: '看 Variable', detail: '名稱、類型與映射來源是否一致。' },
    { icon: Check, title: '只改一項再測', detail: '用同一筆輸入重跑，留下前後證據。' },
  ]

  return (
    <main className="page debug-page" id="main-content">
      <header className="page-header compact-header"><div><h1>Debug Lab</h1><p>錯誤不是要躲過的紅字，而是系統告訴你「從哪一站開始不一樣」。</p></div><RefreshCw size={38} /></header>
      <section className="debug-route" aria-labelledby="debug-route-title">
        <h2 id="debug-route-title">標準排錯路線</h2>
        <div className="debug-steps">{debugSteps.map(({ icon: Icon, title, detail }, index) => <article key={title}><span>{index + 1}</span><Icon size={21} /><div><h3>{title}</h3><p>{detail}</p></div></article>)}</div>
      </section>
      <section className="debug-case">
        <div><h2>練習情境</h2><span className="case-label">模擬案例</span></div>
        <p>Start 已經看到 company_description，LLM Node 的 Input 卻是空白。不要先換模型；先用上面的路線判斷第一個檢查動作。</p>
        <details><summary>查看 Level 1 提示</summary><p>資料在 Start 還存在，但下一站沒收到。兩站之間負責傳資料的是什麼？</p></details>
        <details><summary>查看 Level 2 提示</summary><p>檢查 LLM Node 的輸入映射與 Prompt 是否引用了正確的 Start 變數。</p></details>
      </section>
      <section className="tutor-prompt" aria-labelledby="tutor-title">
        <div className="tutor-heading"><div><h2 id="tutor-title">AI Tutor Prompt</h2><p>可貼到你使用的 AI 對話工具，讓它先引導，不直接把答案全部交出來。</p></div><button type="button" className="secondary-button" onClick={copyPrompt}><Clipboard size={17} />{copied ? '已複製' : '複製 Prompt'}</button></div>
        <pre><code>{tutorPrompt}</code></pre>
      </section>
    </main>
  )
}
