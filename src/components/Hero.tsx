import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bar" />
      <div className="hero-grid">
        <div className="hero-left">
          <div className="wordmark">
            <span className="wm-ink">INK</span>
            <span className="wm-empire">Empire</span>
            <div className="wm-foot">
              <span className="wm-rule" />
              <span className="wm-sub">Tools for independent creators</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <p className="hero-statement">
            Your work shouldn't depend on an algorithm. We build spaces where{' '}
            <em>independent creators get found on merit, not reach.</em>
          </p>
          <div className="hero-cta">
            <a href="#contact">Get in touch &nbsp;&rarr;</a>
          </div>
        </div>
      </div>
      <div className="hero-foot">
        <div className="hf-item">
          <span className="hf-num">01</span>
          <span className="hf-label">Products in market</span>
        </div>
        <div className="hf-item">
          <span className="hf-num">&mdash;</span>
          <span className="hf-label">Indie studio, NZ</span>
        </div>
        <div className="hf-item">
          <span className="hf-num">&infin;</span>
          <span className="hf-label">Artists we'll never slow down</span>
        </div>
      </div>
    </section>
  );
}
