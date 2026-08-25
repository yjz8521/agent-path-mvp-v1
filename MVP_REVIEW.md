# MVP V1 驗收報告

驗收日期：2026-08-25  
版本：Course 0.1.0  
結論：MVP V1 可在本機啟動並完成主要學習流程；Phase 3–10 尚未實作，只保留鎖定路線圖。

## 1. Product Review

### 已完成

- Dashboard：目前站點、16 課進度、測驗平均、下一課、Project 證據狀態。
- Phase 1：10 堂完整基礎課，涵蓋 LLM、Prompt、Agent、Tool、Workflow、Skill、Plugin、Memory、Knowledge Base。
- Phase 2：6 堂 Coze 起步課，完成最小 `Start → LLM → End` Workflow 心智模型。
- 每課包含學習目標、白話與正式定義、比喻、圖解、案例、操作、練習、測驗、Debug、總結與官方來源。
- 名詞百科、Debug Lab、可複製的 AI Tutor 提示詞。
- localStorage 保存課程完成、測驗答案／分數、最後課程與 Project 證據。
- Lesson 16 使用獨立 Project 證據 Gate；勾完課程不會自動冒充專案完成。

### 未完成（刻意排除於 MVP V1）

- Phase 3–10 課程內容與實作。
- 後端、帳號、多裝置同步、雲端資料庫、管理後台。
- 分析追蹤、課程內容 CMS。
- Coze 雲端介面的逐按鈕自動驗收；介面與命名會改版，仍需在使用者目前登入版本確認。

## 2. Technical Review

### 已確認

- `npm run build`：TypeScript 與 Vite production build 通過。
- 真實 Chromium 操作：Dashboard、Lesson、Quiz、Project Gate、來源切換與手機版皆可操作。
- Quiz 狀態隔離：Lesson 1 送出後切到 Lesson 2，沒有殘留選項或解析，送出按鈕維持停用。
- Project 證據：Lesson 16 記錄後重新載入仍存在；Dashboard 顯示 `1/1`。
- 來源對應：Lesson 1 與 Lesson 13 顯示不同且與課程主題相符的官方來源。
- 響應式：320／375／390／480／780／1080px 實際 Chromium 檢查；Lesson 內容在 1080px 以下均為單欄，320px 仍保有 300px 可讀內容寬度，且各尺寸沒有水平溢出。
- 瀏覽器 console / page errors：0。
- 字型：Figtree、JetBrains Mono 與 Noto Sans TC 均由套件自帶，不依賴遠端字型服務。

### 已修正問題

1. Lesson 切換時 Quiz local state 可能延續到下一課：以 lesson id 重新掛載 LessonPage。
2. 有效的 0 分曾被 Dashboard 顯示成 `—`：改為判斷是否已有測驗紀錄。
3. Project 完成度曾可能由最後一課完成狀態推論：改為獨立證據狀態。
4. 所有課曾共用固定 Coze 來源：改為每課結構化官方來源。
5. 中文字型原先依賴系統 fallback：改為自帶 Noto Sans TC Variable。
6. 進度站點缺少明確回饋：新增一次性站點確認動效，並支援 reduced motion。
7. 第一版視覺過度接近藍色企業內訓後台：重構為 Creator Hardware Console，以骨白／putty 表面、石墨機身、琥珀狀態窗與單一安全橘主操作鍵建立一致產品語言；課程內容與互動邏輯不變。
8. v2 CSS 無條件雙欄規則覆蓋舊版行動斷點：改為 1081px 以上才使用課程控制面板雙欄，1080px 以下固定單欄，並移除公開 HTML 的設計流程內部註解。

## 3. UX / Accessibility Review

### 已確認

- 桌面固定課程導覽，手機改為抽屜式導覽。
- 焦點可見、跳到主要內容、表單 fieldset／legend、狀態 aria、按鈕文字與鎖定狀態均可讀。
- 測驗必須先自行作答；提示與答案解析分開，答錯會顯示「所選答案、正確答案、原因」。
- 重構後的桌面與手機 full-page 截圖已重新人工檢查，沒有遮擋、截斷或不可讀區塊。
- Impeccable 規則偵測器因本機缺少 parser modules 以降級模式執行；已人工排除剩餘的誤判並補做瀏覽器視覺檢查。

## 4. Content / Source Review

### 已確認

- 穩定概念使用官方文件優先，來源清單集中於 `docs/OFFICIAL_SOURCES.md`。
- Coze `Start → LLM → End` 依官方 Coze Studio 固定 commit 文件核對。
- 版本敏感內容會顯示「版本敏感」與待依目前官方介面確認的說明。
- 所有商業／金融案例均標示為模擬案例；未提供即時行情、投資建議或虛構來源。

### 待確認

- 使用者實際 Coze 帳號、地區與當前 UI 版本中的入口名稱、按鈕位置、節點面板位置。
- 使用者是否能在 Coze 留下三組 Run Log 並獨立修改一項輸出需求；這是人工能力證據，不由網站假裝驗證。

## 下一版本優先順序

1. 先以 3–5 位初學者完成 Phase 1–2 可用性測試，觀察卡點與完成時間。
2. 根據測試結果修正課程密度、題目難度與 Coze 版本差異提示。
3. 再決定是否進入 Phase 3 Workflow 思維；不得一次展開 Phase 3–10。
