import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


function getNewsContent(slug) {
const p = path.join(process.cwd(), "data", "news", `${slug}.md`);
if (!fs.existsSync(p)) return null;
return fs.readFileSync(p, "utf8");
}


export default function NewsDetailPage({ params }) {
const { slug } = params;
const raw = getNewsContent(slug);


if (!raw) {
return (
<section className="section">
<div className="container"><h1>Không tìm thấy bài viết.</h1></div>
</section>
);
}


return (
<section className="section">
<div className="container">
<div className="section-header">
<div>
<h1 className="section-title">{slug.replace(/-/g, " ")}</h1>
<p className="section-subtitle">Tin tức</p>
</div>
</div>
<article className="prose">
<ReactMarkdown remarkPlugins={[remarkGfm]}>{raw}</ReactMarkdown>
</article>
</div>
</section>
);
}