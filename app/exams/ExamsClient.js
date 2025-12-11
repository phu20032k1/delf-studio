"use client";

import { useState } from "react";
import Link from "next/link";

export default function ExamsClient({ exams }) {
  const [filter, setFilter] = useState("all");

  const filtered = exams.filter(
    (e) => filter === "all" || e.level.toLowerCase() === filter
  );

  const levels = ["all", "a1", "a2", "b1", "b2"];

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Danh sách đề thi</h1>

        {/* NÚT FILTER CẤP ĐỘ */}
        <div
          style={{
            display: "flex",
            gap: 12,
            marginBottom: 20,
            flexWrap: "wrap",
          }}
        >
          {levels.map((lv) => (
            <button
              key={lv}
              onClick={() => setFilter(lv)}
              style={{
                padding: "8px 16px",
                borderRadius: 10,
                border: "1px solid #cbd5e1",
                cursor: "pointer",
                background: filter === lv ? "#4f46e5" : "white",
                color: filter === lv ? "#fff" : "#334155",
              }}
            >
              {lv === "all" ? "Tất cả" : lv.toUpperCase()}
            </button>
          ))}
        </div>

        {/* DANH SÁCH ĐỀ */}
        <div className="grid">
          {filtered.map((exam, index) => (
            <Link key={exam.id} href={`/exams/${exam.id}`} className="card">
              <div className="card-header-row">
                <span className="card-label">Đề {index + 1}</span>
                <span className="level-badge">{exam.level}</span>
              </div>

              <h3>{exam.title}</h3>
              <p>{exam.description}</p>
            </Link>
          ))}

          {filtered.length === 0 && <p>Không có đề thi nào.</p>}
        </div>
      </div>
    </section>
  );
}
