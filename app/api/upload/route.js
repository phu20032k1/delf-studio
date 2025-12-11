import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req) {
  const form = await req.formData();
  const file = form.get("file");

  if (!file) {
    return Response.json({ error: "No file" }, { status: 400 });
  }

  // đọc file thành buffer
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // đặt tên file tránh trùng
  const fileName = Date.now() + "-" + file.name;

  // đảm bảo đã có thư mục public/uploads
  const uploadPath = path.join(process.cwd(), "public", "uploads", fileName);

  await writeFile(uploadPath, buffer);

  // trả về đường dẫn ảnh để dùng
  return Response.json({
    url: `/uploads/${fileName}`,
  });
}
