// app/books/[slug]/page.js
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BookDetailPage({ params }) {
  const { slug } = params;
  const p = path.join(process.cwd(), "data", "books", `${slug}.md`);

  if (!fs.existsSync(p)) {
    return (
      <section className="section">
        <div className="container"><h1>Chưa có nội dung cho sách này.</h1></div>
      </section>
    );
  }

  const raw = fs.readFileSync(p, "utf8");

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <h1 className="section-title">{slug.replace(/-/g, " ")}</h1>
            <p className="section-subtitle">Sách ôn tập</p>
          </div>
        </div>
        <article className="prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{raw}</ReactMarkdown>
        </article>
      </div>
    </section>
  );
}
