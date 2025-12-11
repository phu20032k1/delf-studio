"use client";

export default function UploadPage() {
  async function handleUpload(e) {
    e.preventDefault();

    const file = e.target.file.files[0];
    if (!file) {
      alert("Chưa chọn file");
      return;
    }

    const form = new FormData();
    form.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: form,
    });

    const data = await res.json();

    if (data.error) {
      alert("Lỗi: " + data.error);
    } else {
      alert("Upload xong! Đường dẫn ảnh: " + data.url);
    }
  }

  return (
    <div className="container section">
      <h1>Upload ảnh</h1>
      <form onSubmit={handleUpload}>
        <input type="file" name="file" accept="image/*" />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
