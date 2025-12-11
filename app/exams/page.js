import fs from "fs";
import path from "path";
import ExamsClient from "./ExamsClient";

function getAllExams() {
  const baseDir = path.join(process.cwd(), "data", "exams");

  const levels = fs
    .readdirSync(baseDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const exams = [];

  levels.forEach((level) => {
    const dir = path.join(baseDir, level);
    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));

    files.forEach((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8").trim();
      if (!raw) return;
      const json = JSON.parse(raw);

      exams.push({
        id: `${level}-${file.replace(".json", "")}`,
        level: json.level || level.toUpperCase(),
        title: json.title,
        description: json.description || "",
      });
    });
  });

  return exams;
}

export default function ExamsPage() {
  const exams = getAllExams();
  return <ExamsClient exams={exams} />;
}
