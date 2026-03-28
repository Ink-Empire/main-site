import SectionHeader from './SectionHeader';
import './Products.css';

export default function Products() {
  return (
    <div className="container">
      <section className="products">
        <SectionHeader label="Our Products" />
        <div className="product-card">
          <div>
            <div className="product-flag">Flagship — iOS</div>
            <h2 className="product-name">InkedIn</h2>
            <p className="product-desc">
              Discover tattoo artists, explore their portfolios, and book
              appointments — all in one place. InkedIn is the home for tattoo
              culture on mobile.
            </p>
          </div>
          <div className="product-cta">
            <a
              href="https://apps.apple.com/app/get-inkedin/id6758900984"
              className="btn-app-store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="small">Download on the</span>
              <span className="large">App Store</span>
            </a>
            <a
              href="https://getinked.in"
              className="btn-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit getinked.in
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
