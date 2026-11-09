# AcademicPortfolio

![CI](https://github.com/mamhea/AcademicPortfolio/actions/workflows/ci.yml/badge.svg)

**個人學術歷程與升學面試平台**

AcademicPortfolio 是一個以 React 與 TypeScript 開發的個人學術作品集網站，旨在完整呈現個人的學習歷程、研究成果、專案作品及學術成就，作為高中升學、特色招生、資優班申請及面試審查的展示平台。

網站以專業、簡潔及科技感為主要設計方向，讓審查者能夠快速了解個人的學術背景、研究能力、技術實作能力與表達能力。

## Features

預計提供以下功能：

- **Home**：個人介紹與學術歷程總覽
- **About**：個人背景、興趣與學習理念
- **Education**：教育背景與學習經歷
- **Research**：研究動機、研究方法、實驗過程與研究成果
- **Projects**：程式設計及其他實作專案
- **Achievements**：競賽成果、獎項及學術成就
- **Interview**：自我介紹、面試準備與個人理念
- **Resume**：個人履歷與 PDF 文件

## Tech Stack

| Technology | Purpose |
|---|---|
| React | 前端介面與元件開發 |
| TypeScript | 型別安全與程式維護 |
| Vite | 開發伺服器與建置工具 |
| CSS | 網站視覺設計與響應式排版 |
| React Router | 頁面路由管理 |
| Git | 版本控制 |
| GitHub | 程式碼儲存與專案管理 |
| Vercel | 預計使用的網站部署平台 |

## Project Structure

```text
AcademicPortfolio/
├── public/
│   ├── images/
│   ├── documents/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── data/
│   ├── styles/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

開始之前，請先安裝：

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/mamhea/AcademicPortfolio.git
```

進入專案目錄：

```bash
cd AcademicPortfolio
```

安裝依賴套件：

```bash
npm install
```

啟動開發伺服器：

```bash
npm run dev
```

開啟終端機顯示的本機網址，即可預覽網站。

### Build

建立正式部署版本：

```bash
npm run build
```

預覽正式建置結果：

```bash
npm run preview
```

## Design Philosophy

本專案遵循以下設計原則：

1. **Professional**：呈現專業、可信賴的學術形象。
2. **Minimalist**：保持簡潔的版面與清晰的資訊層級。
3. **Technology-oriented**：運用現代網頁技術呈現科技感。
4. **Responsive**：支援電腦、平板及手機等不同裝置。
5. **Content-focused**：重視研究過程、實作能力與學習成果。

## Development Status

<text>目前處於初期開發階段。</text>

- [x] 建立 React + TypeScript + Vite 專案
- [x] 初始化 Git 版本控制
- [ ] 建立網站整體視覺設計
- [ ] 開發首頁與導覽列
- [ ] 建立個人介紹及教育背景頁面
- [ ] 建立研究與專案展示頁面
- [ ] 建立學術成就頁面
- [ ] 建立面試與履歷頁面
- [ ] 響應式設計與網站測試
- [ ] 部署至 Vercel

## License

The software source code is licensed under the MIT License.

Personal academic content, research materials, photographs, and other
original materials are excluded from the MIT License.

See [CONTENT-LICENSE.md](CONTENT-LICENSE.md) for details.