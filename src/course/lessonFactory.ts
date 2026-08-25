import type { Lesson, QuizQuestion, VerificationStatus } from '../types/course'

type LessonInput = Omit<Lesson, 'duration' | 'debugSteps' | 'sourceNote' | 'sources'> & {
  duration?: number
  debugSteps?: string[]
  sourceNote?: string
}

const lessonSources: Record<string, Lesson['sources']> = {
  'lesson-01': [{ title: 'LangChain Models', url: 'https://docs.langchain.com/oss/python/langchain/models' }],
  'lesson-02': [{ title: 'LangChain Messages', url: 'https://docs.langchain.com/oss/python/langchain/messages' }, { title: 'LangChain Context Engineering', url: 'https://docs.langchain.com/oss/python/langchain/context-engineering' }],
  'lesson-03': [{ title: 'LangChain Agents', url: 'https://docs.langchain.com/oss/python/langchain/agents' }],
  'lesson-04': [{ title: 'LangChain Tools', url: 'https://docs.langchain.com/oss/python/langchain/tools' }],
  'lesson-05': [{ title: 'LangGraph Workflows and Agents', url: 'https://docs.langchain.com/oss/python/langgraph/workflows-agents' }],
  'lesson-06': [{ title: 'LangGraph Workflows and Agents', url: 'https://docs.langchain.com/oss/python/langgraph/workflows-agents' }],
  'lesson-07': [{ title: 'n8n Build and Manage Agents（Preview）', url: 'https://github.com/n8n-io/n8n-docs/blob/main/docs/build/build-and-manage-agents.md' }],
  'lesson-08': [{ title: 'Dify Plugin', url: 'https://docs.dify.ai/en/develop-plugin/getting-started/getting-started-dify-plugin' }, { title: 'Coze Studio Plugin Configuration', url: 'https://github.com/coze-dev/coze-studio/wiki/4.-Plugin-Configuration' }],
  'lesson-09': [{ title: 'LangChain Memory Overview', url: 'https://docs.langchain.com/oss/python/concepts/memory' }],
  'lesson-10': [{ title: 'Dify Knowledge', url: 'https://docs.dify.ai/en/cloud/use-dify/knowledge/readme' }, { title: 'Dify Knowledge Retrieval Node', url: 'https://docs.dify.ai/en/cloud/use-dify/nodes/knowledge-retrieval' }],
  'lesson-11': [{ title: 'Coze Studio — What is Coze Studio', url: 'https://github.com/coze-dev/coze-studio/wiki/1.-What-is-Coze-Studio' }],
  'lesson-12': [{ title: 'Coze Studio LLM Prompt Components（固定 commit）', url: 'https://github.com/coze-dev/coze-studio/tree/fefb05ff27be1da939612fbf9faf5db62583b8ae/frontend/packages/workflow/playground/src/nodes-v2/llm' }],
  'lesson-13': [{ title: 'Coze Studio Node Metadata（固定 commit）', url: 'https://github.com/coze-dev/coze-studio/blob/fefb05ff27be1da939612fbf9faf5db62583b8ae/backend/domain/workflow/entity/node_meta.go#L241-L294' }],
  'lesson-14': [{ title: 'Coze Studio Start Node Metadata（固定 commit）', url: 'https://github.com/coze-dev/coze-studio/blob/fefb05ff27be1da939612fbf9faf5db62583b8ae/backend/domain/workflow/entity/node_meta.go#L241-L255' }],
  'lesson-15': [{ title: 'Coze Studio LLM Node Metadata（固定 commit）', url: 'https://github.com/coze-dev/coze-studio/blob/fefb05ff27be1da939612fbf9faf5db62583b8ae/backend/domain/workflow/entity/node_meta.go#L256-L274' }],
  'lesson-16': [{ title: 'Coze Studio End Node Metadata（固定 commit）', url: 'https://github.com/coze-dev/coze-studio/blob/fefb05ff27be1da939612fbf9faf5db62583b8ae/backend/domain/workflow/entity/node_meta.go#L275-L294' }, { title: 'Coze Studio Workflow Node Guide', url: 'https://github.com/coze-dev/coze-studio/wiki/11.-Add-new-workflow-node-types-%28backend%29' }],
}

export function makeLesson(input: LessonInput): Lesson {
  return {
    ...input,
    duration: input.duration ?? 45,
    debugSteps: input.debugSteps ?? [
      '先說出你原本預期會發生什麼。',
      '找到第一個與預期不同的步驟，不要一次改很多地方。',
      '檢查輸入、輸出與名詞是否用對，再只修改一項並重試。',
      '把「錯誤現象 → 原因 → 修改 → 結果」記錄成一句話。',
    ],
    sourceNote: input.sourceNote ?? '穩定概念；已列入官方來源核對清單。',
    sources: lessonSources[input.id] ?? [],
  }
}

export function question(
  id: string,
  type: QuizQuestion['type'],
  prompt: string,
  options: string[],
  answer: number,
  explanation: string,
  hint: string,
): QuizQuestion {
  return { id, type, prompt, options, answer, explanation, hint }
}

export const stableConcept: VerificationStatus = '概念已確認'
