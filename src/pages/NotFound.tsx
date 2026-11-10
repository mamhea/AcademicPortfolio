
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-content">
        <p className="not-found-eyebrow">
          ACADEMIC PORTFOLIO
        </p>

        <h1 className="not-found-code">404</h1>

        <h2>找不到頁面</h2>

        <p className="not-found-description">
          很抱歉，您所尋找的頁面不存在，
          可能已經移動或網址輸入錯誤。
        </p>

        <Link to="/" className="not-found-button">
          返回首頁
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
