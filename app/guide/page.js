import Link from "next/link";
// nếu alias '@' chưa nhận, dùng đường dẫn tương đối như dưới:
import guides from "../../data/guide/guides.json";

export default function GuidePage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Hướng dẫn thi DELF</h1>
        <p className="section-subtitle">Mẹo & chiến lược quan trọng.</p>

        <div className="cards cards--compact">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/guide/${g.slug}`}
              className="card card--compact no-underline"
            >
              <div className="card-header">
                <span className="level-badge">Conseil</span>
              </div>
              <h3 className="clamp-1">{g.title}</h3>
              {g.desc && <p className="clamp-2">{g.desc}</p>}
              <div className="card-footer">
                <span>Chuẩn bị tự tin</span>
                <div className="dots">
                  <span className="dot" /><span className="dot dot-primary" /><span className="dot dot-accent" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

