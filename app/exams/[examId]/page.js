import fs from "fs";
import path from "path";
import ExamClient from "./ExamClient";

function getExamData(examId) {
  const [level, ...rest] = examId.split("-");
  const fileName = rest.join("-") + ".json";
  const filePath = path.join(process.cwd(), "data", "exams", level, fileName);

  if (!fs.existsSync(filePath)) {
    throw new Error("JSON not found");
  }

  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw);
}

export default function ExamPage({ params }) {
  const { examId } = params;

  let exam;
  try {
    exam = getExamData(examId);
  } catch (e) {
    return (
      <section className="section">
        <div className="container">
          <h1 className="section-title">Không tìm thấy đề thi</h1>
          <p className="section-subtitle">
            File không tồn tại: <code>{examId}</code>
          </p>
        </div>
      </section>
    );
  }

  return <ExamClient exam={exam} examId={examId} />;
}
