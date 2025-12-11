import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function GuideDetailPage({ params }) {
  const { slug } = params;
  const file = path.join(process.cwd(), "data", "guide", `${slug}.md`);
  if (!fs.existsSync(file)) {
    return (
      <section className="section">
        <div className="container"><h1>Chưa có nội dung cho mục này.</h1></div>
      </section>
    );
  }
  const raw = fs.readFileSync(file, "utf8");

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <h1 className="section-title">{slug.replace(/-/g, " ")}</h1>
            <p className="section-subtitle">Hướng dẫn thi</p>
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
