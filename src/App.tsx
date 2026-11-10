
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import "./App.css";

// Lazy loading：延遲載入頁面元件
const Home = lazy(() => import("./pages/Home"));
const PlaceholderPage = lazy(
  () => import("./pages/PlaceholderPage"),
);

const pages = [
  { path: "/about", title: "關於我" },
  { path: "/education", title: "教育背景" },
  { path: "/research", title: "研究歷程" },
  { path: "/projects", title: "專案作品" },
  { path: "/achievements", title: "學術成就" },
  { path: "/interview", title: "面試資料" },
  { path: "/resume", title: "個人履歷" },
];

function App() {
  return (
    <>
      <Navbar />

      <Suspense
        fallback={
          <main className="page-placeholder">
            <p>頁面載入中...</p>
          </main>
        }
      >
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
      </Suspense>
    </>
  );
}

export default App;
