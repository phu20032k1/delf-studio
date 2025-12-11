"use client";
import { useState } from "react";

export default function ExamClient({ exam }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (sectionIndex, questionIndex, answerIndex) => {
    if (submitted) return;
    setAnswers((prev) => ({
      ...prev,
      [`${sectionIndex}-${questionIndex}`]: answerIndex,
    }));
  };

  const computeScore = () => {
    let correct = 0;
    let total = 0;

    exam.sections.forEach((sec, sIdx) => {
      if (!sec.questions) return;
      sec.questions.forEach((q, qIdx) => {
        total++;
        const key = `${sIdx}-${qIdx}`;
        if (answers[key] === q.correct) correct++;
      });
    });

    return { correct, total };
  };

  const { correct, total } = computeScore();

  return (
    <section className="section">
      <div className="container">
        {/* TIÊU ĐỀ ĐỀ THI */}
        <h1 className="section-title">{exam.title}</h1>
        <p className="section-subtitle">{exam.description}</p>

        {/* TẤT CẢ SECTION */}
        {exam.sections.map((sec, sIdx) => (
          <div key={sIdx} style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 12 }}>{sec.title}</h2>

            {/* AUDIO CHO LISTENING */}
            {sec.type === "listening" && sec.audio && (
              <audio
                controls
                src={sec.audio}
                style={{
                  width: "100%",
                  marginBottom: 20,
                  borderRadius: 10,
                }}
              />
            )}

            {/* HIỂN THỊ TẤT CẢ CÂU HỎI */}
            {sec.questions &&
              sec.questions.map((q, qIdx) => {
                const key = `${sIdx}-${qIdx}`;
                const selected = answers[key];

                return (
                  <div
                    key={qIdx}
                    style={{
                      marginBottom: 22,
                      padding: 18,
                      background: "white",
                      borderRadius: 12,
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    {/* TEXT ĐỌC HIỂU */}
                    {q.text && (
                      <div
                        style={{
                          padding: 14,
                          marginBottom: 12,
                          background: "#f9fafb",
                          borderRadius: 10,
                          border: "1px solid #e5e7eb",
                        }}
                      >
                        {q.text}
                      </div>
                    )}

                    {/* CÂU HỎI */}
                    <div
                      style={{
                        fontSize: 17,
                        fontWeight: 600,
                        marginBottom: 12,
                      }}
                    >
                      Câu {qIdx + 1}: {q.question}
                    </div>

                    {/* ĐÁP ÁN */}
                    {q.answers.map((ans, aIdx) => {
                      const isCorrect = submitted && aIdx === q.correct;
                      const isSelected = selected === aIdx;

                      return (
                        <div
                          key={aIdx}
                          onClick={() =>
                            handleSelect(sIdx, qIdx, aIdx)
                          }
                          style={{
                            padding: "10px 14px",
                            marginBottom: 8,
                            borderRadius: 10,
                            cursor: submitted ? "default" : "pointer",

                            border: isSelected
                              ? "2px solid #4f46e5"
                              : "1px solid #cbd5e1",

                            background: submitted
                              ? isCorrect
                                ? "#dcfce7"
                                : isSelected
                                ? "#fee2e2"
                                : "white"
                              : isSelected
                              ? "#eef2ff"
                              : "white",
                          }}
                        >
                          {String.fromCharCode(65 + aIdx)}. {ans}
                        </div>
                      );
                    })}

                    {/* GIẢI THÍCH SAU KHI NỘP */}
                    {submitted && (
                      <div
                        style={{
                          marginTop: 12,
                          padding: 12,
                          background: "#eef2ff",
                          borderRadius: 10,
                          borderLeft: "4px solid #4f46e5",
                        }}
                      >
                        <strong>Đáp án đúng:</strong>{" "}
                        {String.fromCharCode(65 + q.correct)}
                        <br />

                        {q.explanation && (
                          <>
                            <strong>Giải thích:</strong> {q.explanation}
                            <br />
                          </>
                        )}

                        {q.transcript && (
                          <>
                            <strong>Transcript:</strong> {q.transcript}
                          </>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        ))}

        {/* NỘP BÀI */}
        {!submitted ? (
          <button
            onClick={() => setSubmitted(true)}
            style={{
              padding: "12px 20px",
              borderRadius: 12,
              border: "none",
              background: "#4f46e5",
              color: "white",
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            NỘP BÀI
          </button>
        ) : (
          <div style={{ marginTop: 20, fontSize: 20 }}>
            🎉 Bạn đúng {correct}/{total} câu
          </div>
        )}
      </div>
    </section>
  );
}
