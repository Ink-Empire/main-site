import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <span className="header-left">Tools for Independent Creators</span>
        <a href="/" className="header-wordmark">Ink Empire</a>
        <a href="#contact" className="header-right">Contact</a>
      </div>
    </header>
  );
}
