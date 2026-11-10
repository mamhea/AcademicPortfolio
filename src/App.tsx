import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";

import "./App.css";

// ========================================
// Lazy-loaded Pages
// ========================================

const Home = lazy(() => import("./pages/Home"));

const Profile = lazy(() => import("./pages/profile"));

const NotFound = lazy(() => import("./pages/NotFound"));

const PlaceholderPage = lazy(
  () => import("./pages/PlaceholderPage"),
);

// ========================================
// Page Configuration
// ========================================

interface PageConfig {
  path: string;
  title: string;
}

const pages: PageConfig[] = [
  { path: "/education", title: "教育背景" },
  { path: "/research", title: "研究歷程" },
  { path: "/projects", title: "專案作品" },
  { path: "/achievements", title: "學術成就" },
  { path: "/interview", title: "面試資料" },
  { path: "/resume", title: "個人履歷" },
];

// ========================================
// Loading Component
// ========================================

function PageLoading() {
  return (
    <main className="page-loading" aria-live="polite">
      <p>頁面載入中...</p>
    </main>
  );
}

// ========================================
// App Component
// ========================================

function App() {
  return (
    <div className="app">
      <Navbar />

      <Suspense fallback={<PageLoading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Profile />} />

          {pages.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={<PlaceholderPage title={page.title} />}
            />
          ))}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
