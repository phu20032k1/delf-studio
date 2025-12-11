export default function LevelsPage() {
  const levels = ["A1", "A2", "B1", "B2"];

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Chọn cấp độ DELF</h1>
        <p className="section-subtitle">
          Chọn cấp độ để xem các đề thi tương ứng.
        </p>

        <div className="grid">
          {levels.map((level) => (
            <a
              key={level}
              className="card"
              href={`/exams?level=${level.toLowerCase()}`}
            >
              <div className="card-header-row">
                <span className="card-label">Cấp độ</span>
                <span className="level-badge">{level}</span>
              </div>
              <h3>DELF {level}</h3>
              <p>Các đề thi theo cấp độ {level}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
