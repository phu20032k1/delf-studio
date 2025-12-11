import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function DocumentDetailPage({ params }) {
  const { slug } = params;
  const p = path.join(process.cwd(), "data", "documents", `${slug}.md`);
  if (!fs.existsSync(p)) {
    return <section className="section"><div className="container"><h1>Chưa có nội dung cho tài liệu này.</h1></div></section>;
  }
  const raw = fs.readFileSync(p, "utf8");

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <h1 className="section-title">{slug.replace(/-/g," ")}</h1>
            <p className="section-subtitle">Tài liệu</p>
          </div>
        </div>
        <article className="prose">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: (props) => <a {...props} target="_blank" rel="noopener noreferrer" />,
              img: (props) => <img {...props} className="md-img" />
            }}
          >
            {raw}
          </ReactMarkdown>
        </article>
      </div>
    </section>
  );
}
