import type { Phase } from '../types/course'

export const phases: Phase[] = [
  { id: 1, title: 'AI Agent 基礎', shortTitle: 'AI 基礎', description: '建立 LLM、Agent、Tool 與 Workflow 的正確心智模型。', status: 'available', color: '#2563eb' },
  { id: 2, title: 'Coze 起步', shortTitle: 'Coze', description: '從第一個 Agent 到 Start → LLM → End。', status: 'available', color: '#e89a22' },
  { id: 3, title: 'Hermes Agent', shortTitle: 'Hermes', description: '從 Coze Workflow 走向可使用工具、Skills、Memory 的 Agent Runtime。', status: 'available', color: '#ff5a1f' },
  { id: 4, title: 'Workflow 思維', shortTitle: 'Workflow', description: '分支、重試、路由、並行與人工批准。', status: 'locked', color: '#87919d' },
  { id: 5, title: 'API + JSON', shortTitle: 'API', description: '理解兩個軟體如何交換資料。', status: 'locked', color: '#87919d' },
  { id: 6, title: 'n8n 自動化', shortTitle: 'n8n', description: '建立可觸發、可判斷、可除錯的自動化。', status: 'locked', color: '#87919d' },
  { id: 7, title: 'Dify + RAG', shortTitle: 'Dify', description: '建立公司 AI 知識助手。', status: 'locked', color: '#87919d' },
  { id: 8, title: 'MCP', shortTitle: 'MCP', description: '用統一方式讓 AI 連接工具與資源。', status: 'locked', color: '#87919d' },
  { id: 9, title: 'Agent 所需 Python', shortTitle: 'Python', description: '只學 Agent 開發真正需要的 Python。', status: 'locked', color: '#87919d' },
  { id: 10, title: 'LangChain / LangGraph', shortTitle: 'LangGraph', description: '從元件串接到可追蹤狀態圖。', status: 'locked', color: '#87919d' },
  { id: 11, title: 'Multi-Agent', shortTitle: '多智能體', description: '完成 AI Command Center。', status: 'locked', color: '#87919d' },
]
