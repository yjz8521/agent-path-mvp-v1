import type { GlossaryTerm } from '../types/course'
import { lessons } from './lessons'

const relatedTerms: Record<string, string> = {
  LLM: 'Prompt、Agent、Tool',
  Prompt: 'System Prompt、User Prompt、LLM',
  Agent: 'Workflow、Tool、Memory',
  Tool: 'Agent、Plugin、MCP',
  Workflow: 'Node、Edge、Agent',
  Hybrid: 'Agent、Workflow、Human Approval',
  Skill: 'Tool、Plugin、Agent',
  Plugin: 'Tool、平台整合、權限',
  Memory: 'State、Knowledge Base、Context',
  'Knowledge Base': 'RAG、Retrieval、Memory',
  Coze: 'Agent、Workflow、Plugin',
  'System Prompt': 'User Prompt、Prompt',
  'User Prompt': 'System Prompt、Prompt',
  Node: 'Edge、Workflow',
  Edge: 'Node、Workflow',
  'Start Node': 'Variable、Input、End Node',
  Variable: 'Input、Output、JSON',
  'LLM Node': 'Prompt、Variable、LLM',
  'End Node': 'Output、Run Log、Start Node',
  'Run Log': 'Debug、Input、Output',
}

export const glossary: GlossaryTerm[] = lessons.flatMap((lesson) =>
  lesson.concepts.map((concept) => ({
    term: concept.term,
    chinese: concept.chinese,
    plain: concept.plain,
    definition: concept.definition,
    why: concept.why,
    example: concept.example,
    mistakes: concept.commonConfusion ?? '不要只記名詞，要回到它在系統中負責的工作。',
    related: relatedTerms[concept.term] ?? '請回到對應課程比較相鄰概念。',
    lessonId: lesson.id,
  })),
)
