# Agent Path｜AI Agent 自學系統 MVP V1

本機互動式繁體中文課程，提供：

- Dashboard、16 堂完整課程（Phase 1 十課、Phase 2 六課）
- 逐題 Quiz 診斷、分段提示與獨立答案揭示
- localStorage 完成進度與測驗分數
- 名詞百科、Debug Lab、AI Tutor Prompt
- 桌面與手機響應式介面

Phase 3–10 目前只顯示路線圖與「尚未開放」，不屬於已完成課程。

## 最簡單的啟動方式

雙擊 `啟動課程.bat`。視窗顯示 Vite 已啟動後，瀏覽器會開啟：

`http://127.0.0.1:5173/`

第一次啟動若尚未安裝套件，批次檔會先執行 `npm install`。

## 終端機啟動

```powershell
npm install
npm run dev
```

## 品質檢查

```powershell
npm run typecheck
npm run build
```

## 重要文件

- `PRODUCT.md`：產品真相與邊界
- `COURSE_ARCHITECTURE.md`：完整路線與 MVP 範圍
- `ROADMAP.md`：開發階段
- `docs/OFFICIAL_SOURCES.md`：官方來源與版本敏感性
- `MVP_REVIEW.md`：最終四類 Review

## 資料與隱私

第一版沒有帳號、資料庫或雲端同步。完成狀態和測驗答案只保存在目前瀏覽器的 localStorage；清除瀏覽器網站資料會移除進度。
