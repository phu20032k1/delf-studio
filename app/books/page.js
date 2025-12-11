import Link from "next/link";
import books from "@/data/books/books.json";

export default function BooksPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Sách luyện thi DELF</h1>
        <p className="section-subtitle">Danh sách lấy từ /data/books/books.json.</p>

        <div className="cards cards--compact">
          {books.map((book) => (
            <Link key={book.slug} href={`/books/${book.slug}`} className="card card--compact no-underline">
              <div className="card-header">
                <span className="level-badge">{book.level}</span>
              </div>
              <h3 className="clamp-1">{book.title}</h3>
              {book.note && <p className="clamp-2">{book.note}</p>}
              <div className="card-footer">
                <span>Chi tiết</span>
                <div className="dots"><span className="dot"/><span className="dot dot-primary"/><span className="dot dot-accent"/></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
