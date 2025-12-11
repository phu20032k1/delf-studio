import "./globals.css";

export const metadata = {
  title: "DELF Study Platform",
  description: "Luyện thi DELF A1–B2 với đề thi, từ vựng, tài liệu và hướng dẫn.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        {/* Nền orb pastel động */}
        <div className="bg-orb orb-1" />
        <div className="bg-orb orb-2" />
        <div className="bg-orb orb-3" />

        {/* HEADER + NAV */}
        <header className="site-header">
          <div className="container header-inner">
            <div className="logo">DELF STUDIO</div>
            <nav className="nav">
              <a href="/">Trang chủ</a>
              <a href="/exams">Đề thi</a>
              <a href="/vocabulary">Từ vựng</a>
              <a href="/books">Sách</a>
              <a href="/documents">Tài liệu</a>
              <a href="/news">Tin tức</a>
              <a href="/guide">Hướng dẫn</a>
            </nav>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          © 2026 <span>DELF Study Web</span> – Web của Nguyễn Minh Phú.
        </footer>
      </body>
    </html>
  );
}
