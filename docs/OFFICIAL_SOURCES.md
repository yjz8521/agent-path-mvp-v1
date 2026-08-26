# MVP V1 官方來源與版本敏感性核對

- 查證基準日：2026-08-26
- 適用範圍：Phase 1「AI Agent 基礎」、Phase 2「Coze 初始課程」與 Phase 3「Hermes Agent」
- 來源限制：只使用官方文件、官方規格或官方 GitHub

## 狀態說明

- **已確認**：可由查證基準日可取得的官方來源直接支持。
- **版本敏感**：目前有官方依據，但產品 UI、翻譯、節點名稱、預覽功能或協議版本可能改變；發布操作教材前要重新核對。
- **待確認**：現有官方來源不足以證明雲端產品的可見 UI 文案或點擊路徑，不可自行補寫。

## 一、Phase 1 核心概念

### 1. LLM（大型語言模型）

- **Claim**：LLM 能理解及生成文字，也可能支援 Tool Calling（工具呼叫）、Structured Output（結構化輸出）、Multimodality（多模態）與 Reasoning（推理）；在 Agent 中，模型可作為判斷與產生回應的推理引擎。  
  **狀態**：已確認。  
  **官方來源**：[LangChain Models](https://docs.langchain.com/oss/python/langchain/models)

- **課程邊界**：不能把「LLM」直接等同「Agent」。官方資料明確說明模型可以單獨呼叫，也可以置於 Agent 中。  
  **狀態**：已確認。  
  **官方來源**：[LangChain Models](https://docs.langchain.com/oss/python/langchain/models)

### 2. Prompt（提示詞）

- **Claim**：Prompt 是送給模型的輸入或指令；文字 Prompt 可是單一字串，聊天型 Prompt 則可由 System、User、Assistant 等角色訊息組成。System Prompt 用來設定模型或 Agent 的行為、角色與規則。  
  **狀態**：已確認。  
  **官方來源**：[LangChain Messages](https://docs.langchain.com/oss/python/langchain/messages)、[LangChain Context Engineering](https://docs.langchain.com/oss/python/langchain/context-engineering)

- **課程邊界**：`System Prompt`、`User Prompt` 的概念可教；各平台實際欄位名稱、支援的角色與模板語法不可跨平台照搬。  
  **狀態**：版本敏感。  
  **官方來源**：[Dify LLM Node](https://docs.dify.ai/en/cloud/use-dify/nodes/llm)、[LangChain Agents](https://docs.langchain.com/oss/python/langchain/agents)

### 3. Agent（智能體）

- **Claim**：Agent 通常由 LLM 反覆判斷下一步，依任務動態選擇及呼叫 Tool，直到產生最終結果或符合停止條件。  
  **狀態**：已確認。  
  **官方來源**：[LangChain Agents](https://docs.langchain.com/oss/python/langchain/agents)、[Dify Agent Node](https://docs.dify.ai/en/cloud/use-dify/nodes/agent)

- **Claim**：Agent 並不代表無限制自主；可用可用工具、提示規則、迭代上限、權限與人工批准限制其行為。  
  **狀態**：已確認。  
  **官方來源**：[Dify Agent Node](https://docs.dify.ai/en/cloud/use-dify/nodes/agent)、[n8n Build and Manage Agents（官方 GitHub 文件）](https://github.com/n8n-io/n8n-docs/blob/main/docs/build/build-and-manage-agents.md)

### 4. Tool（工具）

- **Claim**：Tool 是模型或 Agent 可呼叫的能力，用於取得資料或執行動作，例如查詢資料庫、呼叫 API 或寫入檔案；Tool 名稱、描述與參數結構會影響模型如何選用它。  
  **狀態**：已確認。  
  **官方來源**：[LangChain Tools](https://docs.langchain.com/oss/python/langchain/tools)、[LangChain Quickstart](https://docs.langchain.com/oss/python/langchain/quickstart)

- **課程邊界**：`Tool` 是跨平台概念，但不代表每個平台的畫布上都存在一個逐字叫做 `Tool Node` 的節點。  
  **狀態**：版本敏感。  
  **官方來源**：[MCP Server Features](https://modelcontextprotocol.io/specification/2026-07-28/server/index)、[Dify Choose a Plugin Type](https://docs.dify.ai/en/develop-plugin/getting-started/choose-plugin-type)

### 5. Workflow（工作流）與 Agent vs Workflow

- **Claim**：Workflow 採預先決定的程式路徑與執行順序；Agent 的流程與工具使用較動態，適合問題與解法無法完整預先決定的情境。  
  **狀態**：已確認。  
  **官方來源**：[LangGraph Workflows and Agents](https://docs.langchain.com/oss/python/langgraph/workflows-agents)

- **教學判斷**：固定的「每天 08:00 取得新聞 → 摘要 → 寄信」先視為 Workflow；需要模型依中間結果自行選工具或改變步驟時，才需要 Agent。這是依官方區分所做的教學推論。  
  **狀態**：已確認。  
  **官方來源**：[LangGraph Workflows and Agents](https://docs.langchain.com/oss/python/langgraph/workflows-agents)

### 6. Skill（技能）

- **Claim**：`Skill` 不是本課所涵蓋平台共同遵循的單一標準物件；不同產品可對它給出不同結構與生命週期。n8n 目前將 Skill 描述為把指令與特定任務所需 Tool 綁在一起的可重用能力組合，但該 Agent Builder 功能仍標為 Preview。  
  **狀態**：版本敏感。  
  **官方來源**：[n8n Build and Manage Agents（官方 GitHub 文件）](https://github.com/n8n-io/n8n-docs/blob/main/docs/build/build-and-manage-agents.md)

- **課程邊界**：Phase 1 應先用「可重複使用的任務做法或能力包」作白話介紹，並註明各平台定義不同；不可把某一產品的 Skill 檔案格式當成通用標準。  
  **狀態**：待確認。  
  **官方來源**：[n8n Build and Manage Agents（官方 GitHub 文件）](https://github.com/n8n-io/n8n-docs/blob/main/docs/build/build-and-manage-agents.md)

### 7. Plugin（外掛）

- **Claim**：Plugin 是平台專用的擴充封裝，不是與 Tool 完全相同的跨平台標準。Dify Plugin 可包含 Model、Tool、Agent Strategy、Extension、Datasource、Trigger 等不同類型。  
  **狀態**：版本敏感。  
  **官方來源**：[Dify Plugin](https://docs.dify.ai/en/develop-plugin/getting-started/getting-started-dify-plugin)、[Dify Choose a Plugin Type](https://docs.dify.ai/en/develop-plugin/getting-started/choose-plugin-type)

- **Claim**：Coze Studio 開源版將 Plugin Tool 定義為擴充 LLM 外部能力的方式，並區分官方內建、自訂與商業版 Plugin。  
  **狀態**：版本敏感。  
  **官方來源**：[Coze Studio Plugin Configuration](https://github.com/coze-dev/coze-studio/wiki/4.-Plugin-Configuration)

### 8. Memory（記憶）

- **Claim**：Memory 是保存並取回過往互動資訊的系統；Short-term Memory（短期記憶）通常以單一 Thread／對話的狀態為範圍，Long-term Memory（長期記憶）可跨 Thread／Session 保存。  
  **狀態**：已確認。  
  **官方來源**：[LangChain Memory Overview](https://docs.langchain.com/oss/python/concepts/memory)、[LangChain Short-term Memory](https://docs.langchain.com/oss/python/langchain/short-term-memory)、[LangChain Long-term Memory](https://docs.langchain.com/oss/python/langchain/long-term-memory)

- **課程邊界**：不能把聊天歷史、執行中的 State、長期偏好資料與 Knowledge Base 全部稱為同一種 Memory。  
  **狀態**：已確認。  
  **官方來源**：[LangChain Context Overview](https://docs.langchain.com/oss/python/concepts/context)、[Dify Knowledge](https://docs.dify.ai/en/cloud/use-dify/knowledge/readme)

### 9. Knowledge Base（知識庫）

- **Claim**：Knowledge Base 保存自有資料；系統可先檢索相關內容，再把內容與使用者問題一起提供給 LLM，形成 RAG（Retrieval-Augmented Generation，檢索增強生成）。  
  **狀態**：已確認。  
  **官方來源**：[Dify Knowledge](https://docs.dify.ai/en/cloud/use-dify/knowledge/readme)、[Dify Knowledge Retrieval Node](https://docs.dify.ai/en/cloud/use-dify/nodes/knowledge-retrieval)

- **課程邊界**：Knowledge Base 是供檢索的資料集合；Memory 則著重保存互動狀態或過往資訊。兩者可配合，但不可互換。  
  **狀態**：已確認。  
  **官方來源**：[Dify Knowledge](https://docs.dify.ai/en/cloud/use-dify/knowledge/readme)、[LangChain Memory Overview](https://docs.langchain.com/oss/python/concepts/memory)

## 二、Phase 2 Coze 初始課程

### 1. Coze、Agent 與 Workflow

- **Claim**：Coze Studio 是一站式 AI Agent 開發工具，官方明列建立 Agent、建立 AI App 與建立 Workflow；Agent 可透過 LLM 呼叫 Plugin 或 Workflow，Workflow 可處理較複雜且需要穩定性的邏輯。  
  **狀態**：版本敏感。  
  **官方來源**：[Coze Studio — What is Coze Studio](https://github.com/coze-dev/coze-studio/wiki/1.-What-is-Coze-Studio)

### 2. 第一個 Workflow：Start → LLM → End

- **Claim**：Coze Studio 官方原始碼中，三個節點的英文顯示名稱為 `Start`、`LLM`、`End`；課程可使用「開始節點（Start Node）」「LLM 節點」「結束節點（End Node）」。內部型別名稱 `Entry`／`Exit` 不應當作學員看到的 UI 名稱。  
  **狀態**：版本敏感。  
  **官方來源**：[Coze Studio node_meta.go（固定 commit）](https://github.com/coze-dev/coze-studio/blob/fefb05ff27be1da939612fbf9faf5db62583b8ae/backend/domain/workflow/entity/node_meta.go#L241-L294)

- **Claim**：Start 用於設定啟動 Workflow 所需資訊；LLM 呼叫大型語言模型並使用輸入與 Prompt 產生結果；End 回傳 Workflow 執行結果。  
  **狀態**：已確認。  
  **官方來源**：[Coze Studio node_meta.go（固定 commit）](https://github.com/coze-dev/coze-studio/blob/fefb05ff27be1da939612fbf9faf5db62583b8ae/backend/domain/workflow/entity/node_meta.go#L241-L294)

- **Claim**：官方開發文件指出一個 Coze Studio Workflow 至少包含 Start 與 End，因此 `Start → LLM → End` 是合理的初學者最小教學骨架。  
  **狀態**：已確認。  
  **官方來源**：[Coze Studio — Add New Workflow Node Types](https://github.com/coze-dev/coze-studio/wiki/11.-Add-new-workflow-node-types-%28backend%29)

### 3. 不能提前寫死的 Coze UI 名稱

- **Claim**：條件節點的官方實作同時出現內部名稱 `Selector`、DisplayKey `If` 與英文名稱 `Condition`；課程應寫成「Condition（條件；部分版本可能顯示 If／Selector）」並在操作前依當前 UI 核對。  
  **狀態**：版本敏感。  
  **官方來源**：[Coze Studio node_meta.go — Condition（固定 commit）](https://github.com/coze-dev/coze-studio/blob/fefb05ff27be1da939612fbf9faf5db62583b8ae/backend/domain/workflow/entity/node_meta.go#L350-L362)

- **Claim**：`Variable` 應先當成資料概念教學，不宜宣稱 Coze 只有一個固定名稱為 `Variable` 的節點；官方實作另有 `Input`、`Set Variable`、`Variable Merge`、`Variable assign` 等不同節點。  
  **狀態**：版本敏感。  
  **官方來源**：[Input](https://github.com/coze-dev/coze-studio/blob/fefb05ff27be1da939612fbf9faf5db62583b8ae/backend/domain/workflow/entity/node_meta.go#L467-L479)、[Set Variable／Variable Merge](https://github.com/coze-dev/coze-studio/blob/fefb05ff27be1da939612fbf9faf5db62583b8ae/backend/domain/workflow/entity/node_meta.go#L570-L613)、[Variable assign](https://github.com/coze-dev/coze-studio/blob/fefb05ff27be1da939612fbf9faf5db62583b8ae/backend/domain/workflow/entity/node_meta.go#L662-L674)

- **Claim**：Coze Studio 開源版 Workflow 的正式節點名稱是 `Plugin`；它透過加入 Tool 取得即時資料或執行外部操作。初級操作課不可自行把它改稱為已確認存在的 `Tool Node`。  
  **狀態**：版本敏感。  
  **官方來源**：[Coze Studio node_meta.go — Plugin（固定 commit）](https://github.com/coze-dev/coze-studio/blob/fefb05ff27be1da939612fbf9faf5db62583b8ae/backend/domain/workflow/entity/node_meta.go#L295-L311)

- **Claim**：Coze Studio 官方前端程式碼包含 System Prompt 與 User Prompt 元件，但這不足以保證所有 Coze 雲端版本都逐字顯示相同欄位標題。  
  **狀態**：待確認。  
  **官方來源**：[System Prompt 元件（固定 commit）](https://github.com/coze-dev/coze-studio/blob/fefb05ff27be1da939612fbf9faf5db62583b8ae/frontend/packages/workflow/playground/src/nodes-v2/llm/system-prompt/index.tsx)、[User Prompt 元件（固定 commit）](https://github.com/coze-dev/coze-studio/blob/fefb05ff27be1da939612fbf9faf5db62583b8ae/frontend/packages/workflow/playground/src/nodes-v2/llm/user-prompt/index.tsx)

### 4. Coze 雲端版的待確認事項

- **Claim**：Coze 官方雲端文件存在 Workflow 與 Chatflow 導覽，但頁面為動態內容；僅憑目前可抓取文字不足以確認 2026-08-24 每個按鈕、選單與點擊路徑。
  **狀態**：待確認。
  **官方來源**：[Coze Workflow and Chatflow](https://www.coze.com/open/docs/guides/workflow_and_chatflow)、[Coze Use Workflow](https://www.coze.com/open/docs/use_workflow)

## 三、Phase 3 Hermes Agent

### 1. Hermes 的定位與執行入口

- **Claim**：Hermes Agent 是由 Nous Research 維護的自主 Agent 系統，提供 CLI、Desktop 與 Gateway 等入口，並以工具、Skills、Memory、排程與訊息平台延伸工作能力；它不是單獨一個模型。
  **狀態**：已確認。
  **官方來源**：[Hermes Agent 官方文件](https://hermes-agent.nousresearch.com/docs/)、[Hermes Features Overview](https://hermes-agent.nousresearch.com/docs/user-guide/features/overview)

- **教學判斷**：Coze 偏向視覺化建置與發布 Agent／Workflow；Hermes 偏向讓 Agent 在本機、遠端或雲端環境使用工具持續完成任務。這是依兩個官方產品定位所做的課程分層推論，不表示兩者不能一起使用。
  **狀態**：已確認（教學推論）。
  **官方來源**：[Coze 低代碼工作流](https://docs.coze.cn/guides_workflow)、[Hermes Agent 官方文件](https://hermes-agent.nousresearch.com/docs/)

### 2. 安裝與 Provider

- **Claim**：Hermes 可透過 Desktop 或命令列安裝；使用前需要至少設定一個模型 Provider，官方支援雲端 Provider 與 OpenAI-compatible custom endpoint。
  **狀態**：版本敏感。
  **官方來源**：[Hermes Installation](https://hermes-agent.nousresearch.com/docs/getting-started/installation/)、[Hermes AI Providers](https://hermes-agent.nousresearch.com/docs/integrations/providers/)

- **課程邊界**：不在教材中保存 API 金鑰，不把某一個模型、價格、按鈕位置或登入流程寫成永久不變；實際可用 Provider、模型與上下文需求依官方目前版本與帳號確認。
  **狀態**：版本敏感。
  **官方來源**：[Hermes Quickstart](https://hermes-agent.nousresearch.com/docs/getting-started/quickstart/)、[Hermes AI Providers](https://hermes-agent.nousresearch.com/docs/integrations/providers/)

### 3. Tools、Toolsets、Skills 與 Memory

- **Claim**：Hermes 將 web、file、terminal、browser、memory、delegation 等能力分成可管理的 Toolset；Skill 是可按需載入的程序文件，用來保存任務方法與規則，不等於外部 Tool。
  **狀態**：已確認。
  **官方來源**：[Hermes Tools & Toolsets](https://hermes-agent.nousresearch.com/docs/user-guide/features/tools/)、[Hermes Skills System](https://hermes-agent.nousresearch.com/docs/user-guide/features/skills/)

- **Claim**：Hermes 提供跨工作階段的持久記憶與 Session／歷史查找能力，但記憶仍需範圍、來源與敏感資料邊界；不應把完整秘密或所有對話無限保存。
  **狀態**：已確認（安全教學邊界）。
  **官方來源**：[Hermes Features Overview](https://hermes-agent.nousresearch.com/docs/user-guide/features/overview)、[Hermes Slash Commands](https://hermes-agent.nousresearch.com/docs/reference/slash-commands)

### 4. MCP 與安全執行

- **Claim**：Hermes 可透過 MCP 連接外部工具與資源，動態 MCP 工具會以獨立 Toolset 管理；實際 Server、Transport、憑證與工具選擇仍需個別核對。
  **狀態**：版本敏感。
  **官方來源**：[Hermes Toolsets Reference](https://hermes-agent.nousresearch.com/docs/reference/toolsets-reference)、[Hermes Quickstart — MCP](https://hermes-agent.nousresearch.com/docs/getting-started/quickstart/)

- **Claim**：Hermes 的安全設計包含危險命令批准、使用者授權、容器／遠端隔離、MCP 憑證過濾與輸入檢查；批准提示不是作業系統級 containment 的替代品。
  **狀態**：已確認。
  **官方來源**：[Hermes Security](https://hermes-agent.nousresearch.com/docs/user-guide/security/)、[Hermes SECURITY.md](https://github.com/NousResearch/hermes-agent/blob/main/SECURITY.md)

## 四、其他平台的版本敏感核對

### Dify

- **Claim**：Dify 現行 Start 類別可由 `User Input` 或 Trigger 啟動；Chatflow 固定從 User Input 開始，Workflow 才能使用 Trigger。  
  **狀態**：版本敏感。  
  **官方來源**：[Dify Start Node](https://docs.dify.ai/en/cloud/use-dify/nodes/start)、[Dify User Input](https://docs.dify.ai/en/cloud/use-dify/nodes/user-input)

- **Claim**：Dify 現行 Workflow 的 `Output` 節點以前叫 `End`，現在是可選；沒有 Output 的分支仍可執行，但不會把資料回傳給呼叫者。不可把舊教材的 `End` 名稱套用到現行 Dify UI。  
  **狀態**：版本敏感。  
  **官方來源**：[Dify Output Node](https://docs.dify.ai/en/cloud/use-dify/nodes/output)

- **Claim**：Dify 目前仍有 `LLM` 與 `Agent` 節點；LLM 節點呼叫模型處理輸入，Agent 節點則讓 LLM 反覆決定何時及如何使用 Tool。  
  **狀態**：版本敏感。  
  **官方來源**：[Dify LLM Node](https://docs.dify.ai/en/cloud/use-dify/nodes/llm)、[Dify Agent Node](https://docs.dify.ai/en/cloud/use-dify/nodes/agent)

### n8n

- **Claim**：n8n Workflow 是一組用來自動化流程的 Node；官方 Glossary 也分別定義 AI Agent、AI Memory 與 AI Tool。這些概念可用來交叉驗證 Phase 1，但不可拿 n8n 節點名替代 Coze 節點名。  
  **狀態**：已確認。  
  **官方來源**：[n8n Glossary（官方 GitHub 文件）](https://github.com/n8n-io/n8n-docs/blob/main/docs/get-started/key-concept-glossary.md)

- **Claim**：n8n 的第一級 Agent Builder、Skill、Knowledge Base 與 Episodic Memory 文件目前標為 Preview，行為可能改變。  
  **狀態**：版本敏感。  
  **官方來源**：[n8n Build and Manage Agents（官方 GitHub 文件）](https://github.com/n8n-io/n8n-docs/blob/main/docs/build/build-and-manage-agents.md)

### MCP

- **Claim**：查證日的 Current MCP Protocol Version 是 `2026-07-28`。此版為 Stateless（無狀態）協議，每個 Request 自帶版本與 Client Capabilities；不可沿用 2025 年教材的初始化 Session 敘述。  
  **狀態**：版本敏感。  
  **官方來源**：[MCP Versioning](https://modelcontextprotocol.io/docs/2026-07-28/learn/versioning)、[MCP 2026-07-28 Architecture](https://modelcontextprotocol.io/specification/2026-07-28/architecture)

- **Claim**：MCP 採 Host–Client–Server 架構；一個 Host 可管理多個 Client，而每個 Client 與一個特定 Server 溝通。Server 可暴露 `Prompts`、`Resources`、`Tools`。  
  **狀態**：已確認。  
  **官方來源**：[MCP Architecture](https://modelcontextprotocol.io/specification/2026-07-28/architecture)、[MCP Server Features](https://modelcontextprotocol.io/specification/2026-07-28/server/index)

- **Claim**：現行標準 Transport 包括 `stdio` 與 `Streamable HTTP`；Transport 細節屬協議版本內容，不應在 Phase 1 提前深入。  
  **狀態**：版本敏感。  
  **官方來源**：[MCP Transports](https://modelcontextprotocol.io/specification/2026-07-28/basic/transports)

### LangChain

- **Claim**：LangChain 現行官方定位是提供預建 Agent 架構及模型、Tool 整合；`create_agent` 的執行底層使用 LangGraph。  
  **狀態**：版本敏感。  
  **官方來源**：[LangChain Overview](https://docs.langchain.com/oss/python/langchain/overview)、[LangChain Agents](https://docs.langchain.com/oss/python/langchain/agents)

- **Claim**：Phase 1 可使用 LangChain 官方 Agent、Tool、Memory 定義建立概念，但不得在此階段把 `create_agent` 程式碼當成零基礎必學內容。  
  **狀態**：已確認。  
  **官方來源**：[LangChain Agents](https://docs.langchain.com/oss/python/langchain/agents)、[LangChain Tools](https://docs.langchain.com/oss/python/langchain/tools)、[LangChain Memory Overview](https://docs.langchain.com/oss/python/concepts/memory)

### LangGraph

- **Claim**：LangGraph 是低階 Agent Orchestration Framework／Runtime；其核心圖由 `State`、`Nodes` 與 `Edges` 組成，適用於需要更細緻控制的 Stateful Agent 與 Workflow。  
  **狀態**：已確認。  
  **官方來源**：[LangGraph Overview](https://docs.langchain.com/oss/python/langgraph/overview)、[LangGraph Graph API](https://docs.langchain.com/oss/python/langgraph/graph-api)

- **Claim**：LangGraph 程式 API 確實使用 `START` 與 `END`，但這是 LangGraph 的圖形 API 常數，不是 Coze UI 名稱的證據。  
  **狀態**：已確認。  
  **官方來源**：[LangGraph Overview](https://docs.langchain.com/oss/python/langgraph/overview)、[LangGraph Graph API](https://docs.langchain.com/oss/python/langgraph/graph-api)

## 五、MVP V1 內容採用結論

1. Phase 1 可正式教授：LLM、Prompt、Agent、Tool、Workflow、Agent vs Workflow、Memory、Knowledge Base。
2. Skill 與 Plugin 必須標註「平台定義不同」，避免塑造成業界唯一標準。
3. Phase 2 初始六課可保留：Coze 是什麼、建立第一個 Agent、建立第一個 Workflow、Start Node、LLM Node、End Node。
4. 第一個 Coze Workflow 可使用 `Start → LLM → End`；這三個名稱已有固定官方 commit 佐證。
5. Coze 的 Condition、Variable、Plugin、System Prompt／User Prompt 可見文案與所有點擊路徑要標示版本日期，並在發布操作課前以目標 Coze 雲端環境重新核對。
6. Phase 3 Hermes 可正式教授 Runtime、Provider、Tools、Toolsets、Skills、Memory 與安全邊界；不把特定命令、模型價格或本機路徑寫成永久不變。
7. Dify、n8n、MCP、LangChain、LangGraph 的深度操作仍保留在後續 Phase，不因 Hermes 的 MCP 內容提前展開完整 MCP 課程。

## 六、發布前重新驗證清單

- [ ] 登入課程實際使用的 Coze 區域與帳號方案，核對建立 Agent／Workflow 的選單與按鈕名稱。
- [ ] 實際建立並 Test Run `Start → LLM → End`，核對輸入、Prompt、輸出與錯誤面板。
- [ ] 逐張更新 Coze 操作截圖，標示產品、區域、查證日期與介面語言。
- [ ] 若教材提到 Dify，重新核對 Start／User Input／Trigger／Output 名稱，不引用舊 `End` 教學。
- [ ] 若教材提到 MCP，重新核對 Current Protocol Version，不把 2025 年 Session 架構當成現行規格。
- [ ] 若教材提到 n8n Agent Builder 或 Skill，重新確認 Preview 狀態。
- [ ] 若教材出現 LangChain／LangGraph 程式碼，鎖定套件版本並以該版本官方文件驗證。
- [ ] Hermes 若出現 Provider、命令、Toolset、MCP 或安全設定，重新核對目前官方版本與本機安裝結果。
