// lib/news.js  (KHÔNG đặt 'use client')
import fs from "fs";
import path from "path";

export function getNewsList() {
  const dir = path.join(process.cwd(), "data", "news");
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  return files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(dir, file), "utf8");

    const titleMatch = raw.match(/^#\s+(.*)$/m);
    const title = titleMatch ? titleMatch[1].trim() : slug.replace(/-/g, " ");

    const body = raw.replace(/^#.*$/m, "").trim();
    const firstLine = body.split("\n").find((l) => l.trim());
    const excerpt = firstLine ? firstLine.trim().slice(0, 140) : "Xem chi tiết…";

    const tagMatch = raw.match(/^Tag:\s*(.+)$/mi);
    const tag = tagMatch ? tagMatch[1].trim() : "Tin tức";

    return { slug, title, excerpt, tag };
  });
}
