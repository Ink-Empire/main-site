import './Products.css';

export default function Products() {
  return (
    <section className="products">
      <div className="products-head">
        <h3>Products</h3>
        <span>02 / Portfolio</span>
      </div>
      <div className="product-row">
        <div className="pr-name">
          <span className="pr-title">InkedIn</span>
          <span className="pr-status">Live on App Store</span>
        </div>
        <div className="pr-desc">
          A tattoo marketplace connecting artists and clients through search,
          booking, and scheduling — built so artists own their presence, not a
          platform.
        </div>
        <div className="pr-link">
          <a href="https://getinked.in" target="_blank" rel="noopener noreferrer">
            getinked.in
          </a>
        </div>
      </div>
    </section>
  );
}
