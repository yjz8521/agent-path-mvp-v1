# AI Agent 自學系統｜課程架構

> 狀態：MVP V1 架構基準  
> 建立日期：2026-08-24  
> 核心原則：理解 > 速度；能力證據 > 完成勾選；26 週是核心期，不是自動畢業期限。

## 1. 學習成果

完成核心課程並通過能力檢核後，學習者應能：

1. 把一個模糊需求拆成 Trigger、固定步驟、AI 判斷、Tool、API、人工審核與輸出。
2. 判斷何時適合 Agent、Workflow、API、MCP 或傳統程式。
3. 在 Coze、n8n、Dify 中建立與調試基礎流程。
4. 用 Python 呼叫 API、處理 JSON、驗證輸入輸出與處理錯誤。
5. 用 LangChain / LangGraph 建立可追蹤狀態、可重試、可人工介入的 Agent 流程。
6. 設計具來源驗證、權限、成本、日誌與人工批准邊界的 Multi-Agent 系統。

## 2. 進度與通關規則

- 核心期：至少 26 週，每週 3 至 5 課，每次 30 至 60 分鐘。
- 每課：內容閱讀、動手練習、Quiz、反思或 Debug 證據。
- 每 Phase：Mastery Check，不只考名詞記憶。
- 建議通關門檻：Quiz 平均 80 分以上、實作完成、能用自己的話解釋設計、能修改一項新需求。
- 未達門檻：進入 Review / Repeat；依 1 至 2 個明確弱點安排 Week 27+ 補強，不自動畢業。
- AI 協助預設：先給 Level 1 提示；20 分鐘仍無進展才逐級增加，完整答案必須由獨立控制揭示。

## 3. 10 大 Phase 與 15 個 Level

| Phase | Level | 核心主題 | 核心產出 | 建議週次 |
|---|---|---|---|---|
| 1 | 0–1 | AI、LLM、Prompt、Agent、Tool、Workflow、Skill、Plugin、Memory、Knowledge Base | Agent vs Workflow 決策圖 | Week 1–3 |
| 2 | 2–3 | Coze Agent 與基礎 Workflow | AI 商業分析助手 | Week 4–6 |
| 3 | 3–4 | Sequential、Branch、Condition、Loop、Retry、Approval、Router、Parallel | 詢價流程設計稿 | Week 7–8 |
| 4 | 4–6 | Variable、JSON、API、Request/Response、Webhook | 可讀懂並測試 API | Week 9–11 |
| 5 | 7 | n8n Trigger、Node、HTTP、IF、Switch、Merge、Loop、Error Workflow | AI 新聞分析 Workflow | Week 12–14 |
| 6 | 8–9 | Dify Application、Chatflow、Workflow、Dataset、RAG、Retrieval | 公司知識助手 | Week 15–16 |
| 7 | 10 | MCP Host、Client、Server、Tool、Resource、Prompt、Transport | MCP 連接設計 | Week 17–18 |
| 8 | 11 | Agent 開發所需 Python、JSON、HTTP、環境變數、Exception | Python API 小工具 | Week 19–21 |
| 9 | 12–13 | LangChain 與 LangGraph Node、Edge、State、Router、Loop、HITL、Persistence | Planner–Research–Reviewer Graph | Week 22–24 |
| 10 | 14–15 | Multi-Agent、Shared Memory、Task State、Permission、Logging、Retry、Cost、Model Routing | AI Command Center | Week 25–26+ |

## 4. MVP V1 的完整可學範圍

MVP 只把以下 16 課標記為「完整課程」。其餘 Phase 在 UI 中只顯示路線圖與「尚未開放」，不能計入已完成課程。

### Phase 1｜AI Agent 基礎（Lesson 01–10）

1. LLM（大型語言模型）是什麼
2. Prompt（提示詞）是什麼
3. Agent（智能體）是什麼
4. Tool（工具）是什麼
5. Workflow（工作流）是什麼
6. Agent vs Workflow：怎麼判斷
7. Skill（技能）是什麼
8. Plugin（外掛）是什麼
9. Memory（記憶）是什麼
10. Knowledge Base（知識庫）是什麼

Phase 1 Mastery Check：面對「每日固定抓新聞」與「開放式研究問題」，能說出哪一個更適合 Workflow、哪一個可能需要 Agent，以及理由與人工審核位置。

### Phase 2｜Coze 起步（Lesson 11–16）

11. Coze 是什麼，以及何時使用
12. 建立第一個 Agent
13. 建立第一個 Workflow
14. Start Node（開始節點）
15. LLM Node（大型語言模型節點）
16. End Node（結束節點）與完整測試

Phase 2 初始成果：完成 `Start → LLM → End` 的 AI 商業分析助手。所有 UI 名稱與位置屬版本敏感內容；課程先教穩定概念，操作畫面需依當前官方版本核對。

## 5. 後續完整課程地圖

### Phase 3｜Workflow 思維

- Sequential Flow、Branch、Condition、Loop
- Retry、Error Handling、Human Approval
- Router、Parallel Task、合併輸出
- Mastery：設計「詢價 → 查資料 → 生成回覆 → 主管批准 → 寄出」流程

### Phase 4｜API + JSON

- 軟體之間如何溝通、Endpoint、Request、Response
- GET、POST、Header、API Key、Parameter、Body、Status Code
- JSON 的 object、array、string、number、boolean、null
- Webhook 與同步／事件觸發的差異

### Phase 5｜n8n

- AI 新聞分析工作流：Schedule → 取得 → 分類 → 摘要 → 判斷 → 儲存 → 報告
- 商業詢價助手：接收 → 分類 → 查詢 → 草稿 → 人工確認 → 寄送
- Credentials、HTTP Request、IF、Switch、Merge、Loop、Code Node、Error Workflow

### Phase 6｜Dify + RAG

- Application、Chatflow、Workflow、Dataset、Knowledge Retrieval
- Model Provider、API、Agent、Tool
- Coze vs Dify：使用情境、知識管理與部署控制的比較

### Phase 7｜MCP

- MCP 為何出現、傳統 API Integration vs MCP
- Host、Client、Server、Tool、Resource、Prompt、Transport
- 權限最小化、可見資源與可執行工具的差異

### Phase 8｜Agent 所需 Python

- variable、string、int、float、bool、list、dict
- if、for、function、import、package、pip、virtual environment
- JSON、HTTP Request、environment variable、exception
- 所有範例與 Agent 輸入、Tool、API 回應或錯誤處理連結

### Phase 9｜LangChain + LangGraph

- LangChain：LLM + Prompt + Tool + Memory + Agent
- LangGraph：Node、Edge、State、Conditional Edge、Router、Loop
- Human-in-the-loop、Persistence、Reviewer 與 Retry

### Phase 10｜Multi-Agent

- Chief Agent、Planner、Router、專業 Agent、Reviewer、Output
- Shared Memory、Task State、Logging、Permission、Human Approval
- Source Verification、Retry、Cost Control、Model Routing
- Final Capstone：AI Command Center

## 6. 五個累進專案

| 專案 | 難度 | 核心能力 | 資料邊界 |
|---|---:|---|---|
| AI 商業分析助手 | ★☆☆☆☆ | Prompt、Agent、基本 Workflow | 使用模擬公司案例 |
| AI 新聞分析工作流 | ★★☆☆☆ | Trigger、分類、摘要、重要性、儲存 | 未接即時來源時必須標示離線示意 |
| AI 公司知識庫助手 | ★★★☆☆ | Dataset、RAG、Retrieval、引用 | 只回答已提供文件，無來源則說不知道 |
| AI 股票研究集合智能體 | ★★★★☆ | 多角色研究、來源驗證、Reviewer、風險 | 只分析／模擬；不虛構行情、不自動實盤下單 |
| AI 公司營運集合智能體 | ★★★★★ | Router、權限、共用狀態、人工批准 | 發信、付款、刪除、簽核等動作需人工確認 |

## 7. 每課固定資料結構

每課資料物件必須能表示：

- 課名、目標、前置知識、3–5 個核心概念
- 是什麼、為什麼需要、生活比喻、AI 系統案例
- 圖解、Step-by-Step、動手練習
- Quiz、答案與原因、常見錯誤、Debug 方法
- 本課總結、下一課預告、版本／來源狀態

Quiz 回饋規則：提交後逐題顯示「正確」或「你選的是／正確答案」，並解釋原因；實作題先給針對性提示，完整答案放在獨立揭示控制中。

## 8. 技術架構

```text
React + TypeScript + Vite
│
├─ Static Course Data
│  ├─ phases
│  ├─ lessons
│  ├─ glossary
│  └─ projects
├─ App State
│  ├─ current view
│  ├─ selected lesson
│  └─ quiz draft
├─ localStorage
│  ├─ completed lesson ids
│  ├─ quiz attempts / scores
│  └─ last visited lesson
└─ UI
   ├─ Dashboard
   ├─ Expandable Sidebar
   ├─ Lesson Page
   ├─ Quiz Feedback
   ├─ Glossary
   └─ Roadmap / locked phases
```

第一版不使用後端、登入或資料庫。localStorage schema 要有版本號，以便未來遷移。

## 9. 內容真實性與版本治理

- 官方來源索引：`docs/OFFICIAL_SOURCES.md`。
- 課程首頁顯示 Course Version、最後更新日期、內容驗證狀態。
- 穩定概念與 UI 點擊位置分開撰寫；UI 位置一律視為版本敏感。
- 無法從官方來源確認時，顯示「需要依目前官方版本確認」。
- 所有模擬案例與模擬資料必須明確標示。

## 10. MVP 驗收標準

- 16 課都有完整固定欄位，不是標題占位。
- Dashboard、Sidebar、Lesson、Quiz、Progress、Glossary 可操作。
- 重整瀏覽器後完成狀態與測驗分數仍存在。
- 錯題逐題顯示診斷與原因，不只顯示總分。
- 桌面與手機不水平溢出；鍵盤可操作；reduced motion 可用。
- `npm run build` 與 TypeScript 檢查通過，瀏覽器 console 無錯誤。
- 產出 `MVP_REVIEW.md`，明確區分已完成、未完成、Bug、改善建議與下一版。
