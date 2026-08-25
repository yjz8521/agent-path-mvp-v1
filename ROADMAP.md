# AI Agent 自學系統｜開發路線圖

> 原則：每一階段都先 Build、再檢查 TypeScript、瀏覽器、內容與錯誤，修復後才前進。

## Milestone 0｜產品與證據基線

- [x] 讀取完整需求
- [x] 建立 `PRODUCT.md`
- [x] 建立 `COURSE_ARCHITECTURE.md`
- [x] 建立 `ROADMAP.md`
- [ ] 完成官方來源索引 `docs/OFFICIAL_SOURCES.md`
- [ ] 建立可追蹤的版本／驗證狀態

驗收：產品邊界、MVP 範圍、完整課與未開放路線圖能清楚區分。

## Milestone 1｜Web App 基礎框架

- [ ] Vite + React + TypeScript
- [ ] 清楚的 `components/`、`course/`、`hooks/`、`types/`、`utils/` 結構
- [ ] Design tokens 與全域無障礙基線
- [ ] 桌面側欄與手機導覽
- [ ] 空白／載入／無資料狀態

驗收：首頁可開啟、無 TypeScript error、手機 320／375／390px 的核心課程頁為可讀單欄且不水平溢出。

## Milestone 2｜Dashboard

- [ ] 總進度與已完成課程
- [ ] 繼續學習／目前課程／下一課
- [ ] 測驗平均分
- [ ] Project 進度
- [ ] 10 Phase 路線圖與未開放標記

驗收：所有數字由同一份狀態推導，不使用假的即時資料。

## Milestone 3｜Lesson Page

- [ ] 固定課程欄位完整顯示
- [ ] 概念 → 比喻 → 技術 → 圖解 → 案例 → 操作 → 練習
- [ ] 版本敏感與來源狀態標籤
- [ ] 上一課／下一課／完成本課
- [ ] 閱讀位置與鍵盤焦點合理

驗收：任選 Phase 1、Phase 2 課程，都能從頭到尾完整學習。

## Milestone 4｜Progress Tracking

- [ ] `localStorage` schema v1
- [ ] 完成本課／取消完成
- [ ] 保存最後瀏覽課程
- [ ] Dashboard 即時更新
- [ ] 壞資料 fallback

驗收：重整頁面後狀態保留；清除 localStorage 後可安全回到初始狀態。

## Milestone 5｜Quiz 與錯誤學習

- [ ] 單選、判斷、情境判斷
- [ ] 逐題正誤與所選／正確答案
- [ ] 每題原因與針對性提示
- [ ] Quiz 分數保存
- [ ] Phase Mastery Check 入口
- [ ] Debug Lab 標準流程

驗收：答錯不會立即只丟完整答案；使用者可清楚知道錯在哪一個觀念。

## Milestone 6｜Glossary

- [ ] 搜尋英文、中文、白話解釋
- [ ] 英文 → 中文 → 白話 → 正式定義 → 例子 → 常見混淆
- [ ] 至少涵蓋 MVP 首次出現的所有關鍵術語
- [ ] 從課程可返回名詞百科

驗收：LLM、Prompt、Agent、Tool、Workflow、Skill、Plugin、Memory、Knowledge Base、Coze、Node 可搜尋。

## Milestone 7｜MVP 課程內容

- [ ] Phase 1 Lesson 01–10 完整內容
- [ ] Phase 1 Mastery Check
- [ ] Phase 2 Lesson 11–16 完整內容
- [ ] AI 商業分析助手練習
- [ ] Phase 2 UI 操作標記版本敏感

驗收：每課有完整資料欄位、練習、Quiz、錯誤與 Debug 方法；沒有用標題占位冒充內容。

## Milestone 8｜品質驗證

- [ ] `npm run build`
- [ ] TypeScript 檢查
- [ ] 無障礙與介面 detector
- [ ] 桌面瀏覽器流程
- [ ] 手機瀏覽器流程
- [ ] console error 檢查
- [ ] localStorage 重整驗證
- [ ] Quiz 錯題診斷驗證

驗收：保留可重現的截圖與測試結果；錯誤修復後再確認一次。

## Milestone 9｜MVP Review

- [ ] UX Review
- [ ] Code Review
- [ ] Curriculum Review
- [ ] Bug Review
- [ ] 建立 `MVP_REVIEW.md`
- [ ] 列出 V1.1 優先順序與未完成 Phase

驗收：Review 明確區分已確認事實、尚未實作、已知限制與改善選項。

## V1.1 之後（不屬本次 MVP）

1. Phase 3 Workflow Design 與 Mastery Check
2. Phase 4 API + JSON 互動練習
3. n8n / Dify / MCP 的當期官方 UI 實作教學
4. Python 沙盒或外部練習連結
5. LangGraph 視覺化狀態練習
6. Multi-Agent Capstone 與 Reviewer 評量規準
7. 匯出／匯入學習進度與跨裝置同步（需先做資料與隱私設計）
