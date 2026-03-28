import './Hero.css';

export default function Hero() {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-left">
          <div className="hero-kicker">Tools for Independent Creators</div>
          <h1 className="hero-title">
            Ink
            <span className="italic-line">Empire</span>
            <span className="sub-line">Limited</span>
          </h1>
        </div>
        <div className="hero-right">
          <div className="hero-rule" />
          <p className="hero-description">
            Your work shouldn't depend on an algorithm. We build spaces where{' '}
            <strong>independent creators get found on merit, not reach.</strong>
          </p>
        </div>
      </section>
    </div>
  );
}
