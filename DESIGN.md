---
name: "Agent Path — Creator Hardware Console"
description: "把 AI Agent 學習路徑做成一台有清楚實體回饋的創作者控制器。"
colors:
  ink: "#1c1e1f"
  muted: "#666862"
  paper: "#f8f7f2"
  ground: "#e9e8e3"
  line: "#cfcdc4"
  line-strong: "#a9a79f"
  safety-orange: "#ff5a1f"
  action-orange: "#ff692f"
  action-orange-hover: "#ff7b47"
  action-orange-dark: "#bd3511"
  amber-status: "#e7a923"
  amber-soft: "#fff0c7"
  success: "#217658"
  success-soft: "#dff1e8"
  danger: "#bd3d37"
  danger-soft: "#f9e4df"
  gunmetal: "#1b1e20"
typography:
  display:
    fontFamily: "Figtree Variable, Noto Sans TC Variable, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3.7rem)"
    fontWeight: 760
    lineHeight: 1.08
    letterSpacing: "-0.045em"
  lesson-display:
    fontFamily: "Figtree Variable, Noto Sans TC Variable, sans-serif"
    fontSize: "clamp(2.7rem, 5vw, 4.7rem)"
    fontWeight: 760
    lineHeight: 1.08
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Figtree Variable, Noto Sans TC Variable, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 750
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Figtree Variable, Noto Sans TC Variable, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono Variable, monospace"
    fontSize: "0.72rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  gauge: "3px"
  display: "4px"
  key-sm: "5px"
  key: "6px"
  control: "7px"
  panel-sm: "8px"
  panel: "9px"
  chassis: "10px"
  full: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "18px"
  lg: "24px"
  xl: "30px"
  2xl: "36px"
  3xl: "52px"
components:
  button-primary:
    backgroundColor: "{colors.action-orange}"
    textColor: "#281008"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "15px 18px 13px 20px"
    height: "46px"
  button-primary-hover:
    backgroundColor: "{colors.action-orange-hover}"
    textColor: "#281008"
    rounded: "{rounded.control}"
  button-primary-disabled:
    backgroundColor: "#c8c7c1"
    textColor: "#6e706c"
    rounded: "{rounded.control}"
    height: "46px"
  button-secondary:
    backgroundColor: "#f4f2eb"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.key}"
    padding: "0 15px"
    height: "42px"
  navigation-key:
    backgroundColor: "#232729"
    textColor: "#afb3ae"
    rounded: "{rounded.control}"
    padding: "10px 12px"
    height: "44px"
  navigation-key-active:
    backgroundColor: "#f0eee7"
    textColor: "#16191a"
    rounded: "{rounded.control}"
    padding: "10px 12px"
    height: "44px"
  hardware-card:
    backgroundColor: "#f7f5ef"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "28px 30px"
  status-display:
    backgroundColor: "#1c2022"
    textColor: "{colors.amber-status}"
    typography: "{typography.label}"
    rounded: "{rounded.key}"
    padding: "13px 15px"
  search-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel-sm}"
    padding: "13px 16px"
  quiz-option:
    backgroundColor: "#f8f6f0"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "8px 13px"
    height: "50px"
  progress-gauge:
    backgroundColor: "#dad8d1"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.gauge}"
    height: "10px"
---

# Design System: Agent Path — Creator Hardware Console

## Overview

**Creative North Star: "Creator Hardware Console"**

Agent Path 不是一般的企業訓練後台，而是一台可逐鍵掌握的創作者控制器。骨白與 putty 鍵帽承載長時間閱讀，gunmetal 機身收納導覽與固定控制，琥珀狀態窗顯示版本與驗證訊號；每個學習狀態都要像硬體回饋一樣清楚、可信、可操作。

視覺密度接近工作台：有明確軌道、刻度、讀值與實體邊界，但不追求裝飾性機械細節。介面以一個 safety-orange 主操作鍵建立當下承諾，其餘操作退回骨白或深色控制鍵；不使用漸層，動態只用來確認狀態、揭示層級或模擬按鍵深度。

**Key Characteristics:**

- 骨白／putty 閱讀表面與 gunmetal 固定機架形成清楚的工作區分層。
- safety-orange 只保留給每個畫面的單一主要承諾動作，小面積刻度與狀態訊號可沿用同一色相。
- 琥珀色只代表狀態窗、提示與待注意資訊，不與主要行動競爭。
- 底緣、內嵌高光、軌道與刻度提供可感知的實體回饋；沒有純裝飾陰影。
- 中文長文保持舒適，英文座標、版本、課次與數值使用等寬遙測語言。

## Colors

整體色盤像經常使用但保養良好的硬體工作台：暖中性色降低長時間閱讀疲勞，深色機身穩住架構，橘與琥珀只在需要回應的地方發光。

### Primary

- **Safety Orange** (`safety-orange` / `action-orange`): `safety-orange` 用於窄型章節標記、進度填色與定位訊號；`action-orange` 用於唯一的實心主要操作鍵，hover 只變亮，不改變色相。
- **Burnt Orange Depth** (`action-orange-dark`): 只用於主要按鍵的下緣與深色連結語氣，讓主鍵看起來可按而不是平面色塊。

### Secondary

- **Amber Status** (`amber-status`): 用於版本狀態窗、提示燈與重要但非主要行動的訊號。
- **Amber Putty** (`amber-soft`): 用於生活比喻、Debug 情境與待注意資訊的暖色底面。

### Tertiary

- **Verified Green** (`success` / `success-soft`): 用於已確認、答對與 Project 證據完成；必須同時搭配文字或圖示。
- **Fault Red** (`danger` / `danger-soft`): 用於答錯、錯誤與失敗狀態；不得只靠紅色傳達結果。

### Neutral

- **Ink Black** (`ink`): 主要閱讀文字與高對比標題。
- **Muted Utility** (`muted`): 說明、次要資訊與輔助讀值，仍需維持可讀對比。
- **Bone Paper** (`paper`): 乾淨的內容面、輸入欄與鍵帽表面。
- **Putty Ground** (`ground`): 全頁底盤，讓骨白模組有細微但可辨識的層次。
- **Hairline Putty** (`line`) 與 **Strong Rail** (`line-strong`): 分別負責內部分隔與結構邊界。
- **Gunmetal Chassis** (`gunmetal`): 桌機固定側欄、課程控制面板與總結模組。

### Named Rules

**The One Orange Key Rule.** 每個畫面只能有一個實心 safety-orange 主要操作鍵；其他橘色只能作為小面積刻度、軌道或非互動訊號。

**The Signal, Not Decoration Rule.** 橘、琥珀、綠、紅都必須對應行動或狀態，不可把高彩度色當作無意義裝飾。

## Typography

**Display Font:** Figtree Variable（中文缺字回退至 Noto Sans TC Variable）  
**Body Font:** Figtree Variable（中文缺字回退至 Noto Sans TC Variable）  
**Label/Mono Font:** JetBrains Mono Variable

**Character:** 比例字體提供緊湊、有工具感的標題與舒適中文閱讀；等寬字體負責 Course、Phase、Lesson、版本、百分比與座標，像硬體面板上的遙測讀值。三套字型均隨專案本地載入，不依賴遠端服務。

### Hierarchy

- **Display**（760，`clamp(2.25rem, 4vw, 3.7rem)`，1.08）：Dashboard 與功能頁主標題；Lesson hero 使用更大的 `lesson-display` 角色。
- **Headline**（750，1.35rem，1.2）：模組標題與內容節點，維持緊湊但不使用全大寫。
- **Title**（720–750，1.08–1.45rem，1.2）：卡片、課程概念與操作段落標題。
- **Body**（400，1rem，1.65）：主要教學內容；說明文字控制在約 62–75ch 內。
- **Label**（700，0.72rem，0.08em）：Course、Phase、Lesson、版本、狀態與讀值；英文可使用 uppercase，中文不強制轉換。

### Named Rules

**The Telemetry Rule.** 只有座標、版本、課次、狀態與數值使用 JetBrains Mono；長篇中文、按鈕與教學敘述維持比例字體。

## Layout

桌機採固定硬體機架：側欄寬 276px，主要內容向右避讓同等距離；頁面寬度為 `min(1220px, calc(100% - 72px))`，上下留白 44px／88px。Dashboard 以狀態總覽、目前站點、進度儀表與完整路線自上而下排列；Lesson 在寬螢幕使用內容加 260px 控制面板的雙欄配置，欄距 52px。

在 1080px 以下，機架收窄為 252px，Lesson 控制面板離開 sticky 雙欄並併入內容流；在 780px 以下，固定側欄改為頂部 62px 狀態列與抽屜導覽，主內容取消左側位移，頁面寬度縮為 `min(100% - 28px, 680px)`。在 480px 以下，頁邊距收至 10px，表格與雙欄資訊改為單欄，但保留按鍵深度與狀態語意。

主要節奏由 8、12、18、24、30、36、52px 組成。內容段落以 58px 垂直分隔，硬體卡片內距多為 24–36px；更小的 7–14px 間距只用於鍵帽、圖示與遙測標籤。

### Named Rules

**The Rack-to-Drawer Rule.** 桌機導覽固定成機架，手機導覽必須成為可關閉的抽屜；不可把 276px 側欄硬縮進窄螢幕。

## Elevation & Depth

深度是結構性的混合系統，不是漂浮卡片的堆疊。骨白面板以 1px 內嵌高光、細邊框與 3–5px 深色下緣表現厚度；gunmetal 控制鍵使用短而硬的底影；大型表面只用低幅度、長距離陰影把模組從 putty 底盤分離。禁止漸層與無來源的環境光暈。

### Shadow Vocabulary

- **Hardware Surface** (`0 1px 0 rgb(255 255 255 / 80%) inset, 0 9px 22px -18px rgb(25 27 28 / 70%)`): 一般骨白面板與路線卡。
- **Station Slab** (`0 1px 0 #fff inset, 0 14px 26px -20px #2a2b29`): 目前站點等主要硬體模組。
- **Chassis Key** (`0 2px 0 #101213, inset 0 1px 0 #414648`): 深色側欄控制鍵。
- **Console Panel** (`0 1px 0 #505557 inset, 0 16px 30px -24px #000`): Lesson sticky 控制面板。

### Named Rules

**The Structural Depth Rule.** 陰影必須說明零件的層級、按壓方向或機身接縫；若移除陰影不影響結構理解，就不應加入。

## Shapes

形狀語言來自實體控制台而非軟糖式卡片。主要機身與大型卡片使用 8–10px 的輕微圓角，鍵帽與控制項使用 5–7px，狀態窗可縮至 4px；進度槽僅 3px。圓形只保留給路線節點、狀態燈與步驟編號，不用於一般容器。

按鍵與卡片以較深底邊形成實體厚度，active 狀態向下位移 2px 並縮短底邊。軌道、刻度、垂直章節標記與面板接縫應保持直線、克制且可對齊。

### Named Rules

**The Pressable Geometry Rule.** 可按元件必須以底緣、位移或狀態面提供可感知回饋；靜態容器不得假裝成可按鍵帽。

## Components

### Buttons

- **Shape:** 主要鍵為 7px 圓角、1px 外框與 4px 深色底緣；次要鍵為 6px 圓角與 3px 底緣。
- **Primary:** `action-orange` 表面、深棕文字與 46px 最小高度；同一畫面只保留一個實心主鍵。
- **Hover / Focus:** hover 變成 `action-orange-hover` 並上移 1px；active 下移 2px且底緣縮為 2px；focus-visible 使用 3px 橘色外框與 3px offset。
- **Secondary:** 骨白鍵帽、深色文字與灰色底緣；hover 變白並上移 1px。
- **Disabled / Complete:** disabled 使用低對比灰色但仍保持文字可讀；complete 改為綠色實體鍵，並保留完成文字與圖示。

### Chips

- **Style:** 課程座標、版本狀態與路線狀態採 4–7px 圓角、細框與 JetBrains Mono；不是裝飾性膠囊。
- **State:** 橘色為目前位置，琥珀為版本敏感／提示，綠色為已確認，紅色為錯誤；鎖定使用中性灰並搭配文字。

### Cards / Containers

- **Corner Style:** 一般內容面 8–9px，大型站點機身 10px。
- **Background:** 骨白／putty 負責閱讀，gunmetal 負責導覽、控制與總結。
- **Shadow Strategy:** 使用 Elevation & Depth 的結構性陰影與 3–5px 底緣，不使用漂浮玻璃卡。
- **Border:** 1px 暖灰邊界；主要模組可用頂部或底部粗邊表達狀態。
- **Internal Padding:** 一般 24–30px，目前站點可增至 36px。

### Inputs / Fields

- **Style:** 骨白背景、8px 圓角、1px 外框加 4px 深色底緣；文字欄本體保持透明。
- **Focus:** 使用全域 3px 橘色 focus-visible 外框，不移除鍵盤焦點。
- **Error / Disabled:** 錯誤使用紅色邊界、紅色軟底與文字說明；disabled 降低表面與文字對比但不可消失。

### Navigation

桌機導覽是 276px gunmetal 機架。一般項目像深色鍵帽，active 項目翻為骨白鍵帽、深色文字與橘色圖示；Lesson 路線使用細軌、圓形站點與完成勾選。手機使用 62px 頂部狀態列與可關閉抽屜，背景 scrim 明確隔離層級。

### Progress Gauge

進度不是裝飾圖表，而是硬體讀值組：大號等寬百分比、10px 內嵌槽、橘色填色、0／4／8／12／16 刻度與下方五欄數值。任何新進度視圖都要同時提供文字、數值與可存取的 progressbar 語意。

### Lesson Station Panel

Lesson 控制面板使用 gunmetal 機身、內嵌琥珀狀態窗、唯一主要完成鍵與兩個深色前後鍵。寬螢幕 sticky，1080px 以下進入內容流；完成後主鍵改為綠色，不再與橘色進行中狀態混淆。

## Do's and Don'ts

### Do:

- **Do** 讓每個畫面只有一個實心 safety-orange 主操作鍵，其他操作使用骨白或 gunmetal 次要鍵。
- **Do** 以底緣厚度、1–2px 位移、狀態燈與明確文字提供按壓和完成回饋。
- **Do** 使用 Noto Sans TC Variable／Figtree 支撐中文閱讀，JetBrains Mono 只處理課次、版本、座標與數值。
- **Do** 在 780px 以下改用抽屜導覽，在 1080px 以下把 Lesson 控制面板併入內容流。
- **Do** 保留 3px focus-visible 外框、文字加圖示的狀態表達與 reduced-motion 支援。

### Don't:

- **Don't** 使用漸層、玻璃擬態、霓虹泛光或沒有結構理由的柔霧陰影。
- **Don't** 同時放置多個實心橘色 CTA，或讓琥珀提示看起來比主要行動更強。
- **Don't** 把所有容器做成膠囊、過度圓角卡片或沒有底緣深度的平面按鈕。
- **Don't** 只靠顏色傳達答對、答錯、鎖定或完成；必須同時提供文字、圖示或形狀。
- **Don't** 在手機保留固定寬側欄、縮小桌面雙欄，或造成水平捲動。
