import Link from "next/link";
import docs from "@/data/documents/documents.json";

export default function DocumentsPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Tài liệu</h1>
        <p className="section-subtitle">Danh sách lấy từ /data/documents/documents.json</p>

        <div className="cards cards--compact">
          {docs.map((doc) => (
            <Link key={doc.slug} href={`/documents/${doc.slug}`} className="card card--compact no-underline">
              <div className="card-header">
                <span className="level-badge">{doc.type}</span>
              </div>
              <h3 className="clamp-1">{doc.title}</h3>
              {doc.note && <p className="clamp-2">{doc.note}</p>}
              <div className="card-footer">
                <span>Quản lý bằng file</span>
                <div className="dots"><span className="dot"/><span className="dot dot-accent"/><span className="dot"/></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
