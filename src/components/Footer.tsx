import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span className="footer-copy">
          &copy; {new Date().getFullYear()} Ink Empire Limited. All rights reserved.
        </span>
        <span className="footer-reg">New Zealand Registered Company</span>
      </div>
    </footer>
  );
}
