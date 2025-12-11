import Link from "next/link";

export default function VocabularyLevelCard({ level, topicCount, wordCount }) {
  return (
    <Link
      href={`/vocabulary/${level.toLowerCase()}`}
      className="exam-card"
    >
      <div className="exam-card-header">
        <span className="exam-number">Cấp độ {level}</span>
        <span className="exam-level-badge">{level}</span>
      </div>

      <h3 className="exam-title">Tổng quan từ vựng</h3>

      <p className="exam-desc">
        {topicCount} chủ đề • {wordCount} từ vựng
      </p>
    </Link>
  );
}
