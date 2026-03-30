import './Header.css';

export default function Header() {
  return (
    <nav className="nav">
      <a href="/" className="nav-logo">
        <span className="nav-ink">INK</span>
        <span className="nav-sep">&middot;</span>
        <span className="nav-empire">Empire</span>
      </a>
      <div className="nav-right">
<a href="#contact" className="nav-contact">Contact</a>
      </div>
    </nav>
  );
}
