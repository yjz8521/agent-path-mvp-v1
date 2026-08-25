# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: React + TypeScript + Vite，採單頁前端、靜態課程資料與 localStorage；依使用者要求選擇簡單、穩定、易學、易維護的方案。

## Users

- 主要使用者是完全沒有正式程式設計基礎、以中文學習的成人初學者。
- 使用者需要在不被大量術語與程式碼淹沒的情況下，逐步建立 AI Agent、Workflow、API、MCP 與多智能體系統的獨立分析與實作能力。
- 技術英文術語保留英文，首次出現時同時提供繁體中文與白話解釋。

## Product Purpose

建立可在本機運行的互動式學習課程，讓學習者從 AI 基礎概念開始，依序完成 Coze、Workflow、API、n8n、Dify、RAG、MCP、Python、LangChain、LangGraph 與 Multi-Agent 的理解、練習與能力檢核。成功不是看完內容，而是能獨立判斷任務應使用 Agent、Workflow、Tool、API、MCP 或人工審核，並能完成系統設計。

## Positioning

課程不是工具操作手冊，而是一條以「先判斷、再搭建、最後獨立解題」為核心的能力路徑：每個概念都從生活比喻進入，接著用系統案例、動手操作、情境測驗、Debug 與 Mastery Check 驗證理解。

## Operating Context

- 桌面瀏覽器為主要學習場景，並支援手機閱讀。
- 每次學習約 30 至 60 分鐘，每週建議 3 至 5 課。
- MVP V1 先完整提供 Phase 1、Phase 2 初始課程、Quiz、Progress Tracking 與 Glossary。
- 課程內容需要能顯示版本、最後更新日期、工具版本與驗證狀態。

## Capabilities and Constraints

- Dashboard 顯示總進度、已完成課程、目前與下一課、測驗平均分與專案進度。
- 可展開的 Phase Sidebar、課程閱讀頁、完成本課、localStorage 進度、逐題 Quiz 回饋、Glossary 與 Debug Lab。
- 課程內容資料化，不把全部內容寫死在單一 component。
- 每課最多引入 3 至 5 個核心新概念，並遵守固定教學順序與禁止跳級。
- 版本敏感的 Coze、Dify、n8n、MCP、LangChain、LangGraph、OpenAI 與 Anthropic 內容以官方來源為優先；無法確認時明示「需要依目前官方版本確認」。
- MVP 不加入資料庫、登入、付費、Redis、Kubernetes、微服務或複雜 Docker。
- 金融案例必須標示資料日期、來源與驗證狀態，不得把模型記憶當即時行情，也不得暗示自動實盤交易。
- 課程全體規劃至少 26 週；是否完成以能力證據為準，不以週數自動畢業，必要時安排 Week 27+ 補強。

## Brand Commitments

- 專業、簡潔、AI / Developer Dashboard 風格；避免幼稚與過度遊戲化。
- 中文閱讀舒適；語氣耐心、清楚、誠實，不用空泛鼓勵取代具體回饋。
- AI Tutor 不直接洩漏完整答案：先指出概念混淆，再提供分段提示，最後由獨立控制揭示答案。

## Evidence on Hand

- 使用者提供的完整需求文件：`C:\Users\yjz85\.codex\attachments\436d81d1-dd56-4681-bb45-db26c3013f25\pasted-text.txt`。
- 專案目前沒有既有品牌資產、使用者研究、商業數據或真實學習成效證據；不得自行虛構。
- 所有教學案例若非真實外部資料，需標示為「模擬案例」或「示意資料」。

## Product Principles

1. 理解先於操作：每個工具步驟都必須回到為什麼與何時使用。
2. 少量新概念、逐步加深：每課控制認知負荷，禁止跳級。
3. 能力證據先於完成勾選：測驗、實作、Debug 與 Mastery Check 共同判斷學會。
4. 來源與版本透明：不確定就標記，不用模型記憶冒充現況。
5. 第一版保持簡單：只做能支撐完整學習迴圈的前端、靜態內容與本機狀態。

## Accessibility & Inclusion

- 鍵盤可操作、焦點清楚、語意化結構、足夠色彩對比、支援 reduced motion。
- 不以顏色作為唯一的正誤提示；測驗需同時顯示文字與視覺狀態。
- 介面以繁體中文為主，英文術語保留並提供中文與白話說明。

## Open Decisions

- 正式產品名稱與未來部署位置尚未由使用者指定；MVP 暫用「Agent Path｜AI Agent 自學系統」。
- 本次未記錄長期的 comp-first / code-first 偏好；因影像生成可用，本次新介面依技能預設採 comp-first，僅作用於本次工作。
