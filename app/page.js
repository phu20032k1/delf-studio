export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="badge">
            <span className="badge-dot" />
            <span>DELF A1 – B2 • Luyện thi toàn diện</span>
          </div>

          <h1 className="hero-title">Nền tảng luyện thi DELF A1-B2 miễn phí.</h1>
          <p className="hero-subtitle">
            Làm đề theo từng kỹ năng từ A1 đến B2, xem đáp án, transcript, tài liệu và sách ôn tập.
            Chức năng A.i chấm điểm dành cho phần Production Écrite và Orale
          </p>

          <div className="header-sub">
            <div className="pill">Đề thi theo sát format mới</div>
            <div className="pill">Từ vựng theo cấp độ A1 → B2</div>
            <div className="pill">Tài liệu & sách luyện thi</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Khám phá các mục chính</h2>
              <p className="section-subtitle">
                Bạn có thể chọn những mục phù hợp với nhu cầu ôn luyện của mình.
              </p>
            </div>
          </div>

          <div className="grid">
            <a className="card" href="/exams">
              <div className="card-header-row">
                <span className="card-label">Module</span>
                <span className="card-tag">DELF A1–B2</span>
              </div>
              <h3>Đề thi DELF</h3>
              <p>
                Làm đề thi Nghe, Đọc, Viết, Nói.
                Chấm điểm tự động, hiển thị đáp án, transcript và lời giải sau khi nộp bài.
              </p>
              <div className="card-footer">
                <span>Luyện theo cấp độ</span>
                <div className="dots">
                  <span className="dot dot-primary" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
              </div>
            </a>

            <a className="card" href="/vocabulary">
              <div className="card-header-row">
                <span className="card-label">Module</span>
                <span className="card-tag">Lexique</span>
              </div>
              <h3>Từ vựng</h3>
              <p>
                Từ vựng theo cấp độ và theo chủ đề: gia đình, công việc, du lịch, xã hội…
                Có nghĩa tiếng Việt và ví dụ rõ ràng.
              </p>
              <div className="card-footer">
                <span>Chủ đề quen thuộc</span>
                <div className="dots">
                  <span className="dot dot-accent" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
              </div>
            </a>

            <a className="card" href="/books">
              <div className="card-header-row">
                <span className="card-label">Module</span>
                <span className="card-tag">Ouvrages</span>
              </div>
              <h3>Sách ôn tập</h3>
              <p>
                Danh sách sách luyện thi DELF từ A1 tới B2.
                Như "Réussir le DELF", "Objectif DELF", "Alter Ego+", v.v.
              </p>
              <div className="card-footer">
                <span>Thư viện sách</span>
                <div className="dots">
                  <span className="dot" />
                  <span className="dot dot-primary" />
                  <span className="dot" />
                </div>
              </div>
            </a>

            <a className="card" href="/documents">
              <div className="card-header-row">
                <span className="card-label">Module</span>
                <span className="card-tag">Ressources</span>
              </div>
              <h3>Tài liệu</h3>
              <p>
                Lưu trữ PDF, ghi chú, file audio luyện nghe.
              </p>
              <div className="card-footer">
                <span>Quản lý bằng file</span>
                <div className="dots">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot dot-accent" />
                </div>
              </div>
            </a>

            <a className="card" href="/news">
              <div className="card-header-row">
                <span className="card-label">Module</span>
                <span className="card-tag">Actualités</span>
              </div>
              <h3>Tin tức</h3>
              <p>
                Cập nhật lịch thi, thông báo thay đổi, kinh nghiệm và mẹo thi.
                Dựa trên các kinh nghiệm thi được chia sẻ từ cộng đồng.
              </p>
              <div className="card-footer">
                <span>Cập nhật nhanh</span>
                <div className="dots">
                  <span className="dot dot-primary" />
                  <span className="dot dot-accent" />
                  <span className="dot" />
                </div>
              </div>
            </a>

            <a className="card" href="/guide">
              <div className="card-header-row">
                <span className="card-label">Module</span>
                <span className="card-tag">Guide</span>
              </div>
              <h3>Hướng dẫn thi</h3>
              <p>
                Cấu trúc đề thi, cách tính điểm, mẹo cho từng phần Nghe – Đọc – Viết – Nói,
                bám sát format DELF thực tế.
              </p>
              <div className="card-footer">
                <span>Chuẩn bị tự tin</span>
                <div className="dots">
                  <span className="dot" />
                  <span className="dot dot-primary" />
                  <span className="dot dot-accent" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
