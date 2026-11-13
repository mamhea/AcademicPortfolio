
import { education } from "../data/education";

import "./Education.css";

function EducationPage() {
  return (
    <main className="education-page">
      <div className="education-container">
        <header className="education-header">
          <p className="education-eyebrow">
            ACADEMIC BACKGROUND
          </p>

          <h1>教育背景</h1>

          <p className="education-subtitle">
            我的學習歷程與教育經驗。
          </p>
        </header>

        <section className="education-timeline">
          {education.map((item) => (
            <article
              className="education-item"
              key={item.id}
            >
              <div className="education-marker" />

              <div className="education-card">
                <p className="education-period">
                  {item.startDate}
                  {" – "}
                  {item.endDate ?? "至今"}
                </p>

                <h2>{item.school}</h2>

                {item.department && (
                  <p className="education-department">
                    {item.department}
                  </p>
                )}

                {item.degree && (
                  <p className="education-degree">
                    {item.degree}
                  </p>
                )}

                {item.description && (
                  <p className="education-description">
                    {item.description}
                  </p>
                )}
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

export default EducationPage;
