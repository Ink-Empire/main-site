import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-logo">
        <span className="footer-ink">INK</span>
        <span className="footer-empire">Empire Limited</span>
      </div>
      <p>&copy; {new Date().getFullYear()} Ink Empire Limited. All rights reserved.</p>
    </footer>
  );
}
