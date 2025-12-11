// app/news/page.js  (KHÔNG đặt 'use client')
import Link from "next/link";
import { getNewsList } from "../../lib/news";   // <= có ngoặc nhọn

export default function NewsPage() {
  const items = getNewsList(); // [{slug, title, excerpt, tag}]
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Tin tức</h1>
        <div className="cards cards--compact">
          {items.map((it) => (
            <Link key={it.slug} href={`/news/${it.slug}`} className="card card--compact no-underline">
              <div className="card-header">
                <span className="level-badge">{it.tag}</span>
              </div>
              <h3 className="clamp-1">{it.title}</h3>
              <p className="clamp-2">{it.excerpt}</p>
              <div className="card-footer">
                <span>Đọc</span>
                <div className="dots"><span className="dot"/><span className="dot dot-primary"/><span className="dot dot-accent"/></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
