import fs from "fs";
import path from "path";
import Link from "next/link";
import VocabularyLevelCard from "@/components/VocabularyLevelCard";



function getVocabularySummary() {
  const baseDir = path.join(process.cwd(), "data", "vocabulary");

  if (!fs.existsSync(baseDir)) return [];

  const files = fs.readdirSync(baseDir).filter((f) => f.endsWith(".json"));

  const levels = files
    .map((file) => {
      const full = path.join(baseDir, file);
      const raw = fs.readFileSync(full, "utf8").trim();
      if (!raw) return null;

      let json;
      try {
        json = JSON.parse(raw);
      } catch (e) {
        console.error("JSON lỗi:", file);
        return null;
      }

      const topics = json.topics || [];
      const totalWords = topics.reduce(
        (sum, t) => sum + (t.items?.length || 0),
        0
      );

      return {
        level: json.level || file.replace(".json", "").toUpperCase(),
        topicCount: topics.length,
        wordCount: totalWords,
      };
    })
    .filter(Boolean);

  return levels.sort((a, b) => a.level.localeCompare(b.level));
}

export default function VocabularyPage() {
  const levels = getVocabularySummary();

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Từ vựng theo cấp độ</h1>

        <div className="grid">
          {levels.map((v) => (
            <VocabularyLevelCard
              key={v.level}
              level={v.level}
              topicCount={v.topicCount}
              wordCount={v.wordCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

