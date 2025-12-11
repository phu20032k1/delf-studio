import fs from "fs";
import path from "path";

export default function VocabDetail({ params }) {
  const { level } = params;          // ví dụ: "a1"

  const filePath = path.join(
    process.cwd(),
    "data",
    "vocabulary",
    `${level}.json`                   // -> data/vocabulary/a1.json
  );

  if (!fs.existsSync(filePath)) {
    return <p>Không tìm thấy dữ liệu cho level {level}</p>;
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(raw);

  return (
    <section className="section container">
      <h1 className="section-title">Từ vựng cấp độ {data.level}</h1>

      {data.topics?.map((topic) => (
        <div className="card" key={topic.name}>
          <h2>{topic.name}</h2>

          {topic.image && (
            <img
              src={`/uploads/${topic.image}`}
              width={300}
              style={{ borderRadius: 12, marginBottom: 16 }}
            />
          )}

          <ul>
            {topic.items?.map((w, i) => (
              <li key={i}>
                <b>{w.term}</b> – {w.meaning}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
