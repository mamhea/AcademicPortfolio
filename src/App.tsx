
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import "./App.css";

const pages = [
  { path: "/about", title: "關於我" },
  { path: "/education", title: "教育背景" },
  { path: "/research", title: "研究歷程" },
  { path: "/projects", title: "專案作品" },
  { path: "/achievements", title: "學術成就" },
  { path: "/interview", title: "面試資料" },
  { path: "/resume", title: "個人履歷" },
];

function Home() {
  return (
    <main className="page-placeholder">
      <p className="page-eyebrow">ACADEMIC PORTFOLIO</p>
      <h1>個人學術歷程與升學面試平台</h1>
      <p>探索學習歷程、研究成果與技術實作。</p>
    </main>
  );
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <main className="page-placeholder">
      <p className="page-eyebrow">ACADEMIC PORTFOLIO</p>
      <h1>{title}</h1>
      <p>此頁面目前正在開發中。</p>
    </main>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {pages.map((page) => (
          <Route
            key={page.path}
            path={page.path}
            element={<PlaceholderPage title={page.title} />}
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
