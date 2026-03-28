import SectionHeader from './SectionHeader';
import './Mission.css';

export default function Mission() {
  return (
    <div className="container">
      <section className="mission">
        <SectionHeader label="Mission" />
        <div className="mission-layout">
          <p className="mission-pull">
            Independent creators build the culture. We build the tools.
          </p>
          <div className="mission-copy">
            <p>
              Ink Empire makes software that puts skilled artists and craftspeople
              in control of their own discovery, bookings, and business. No
              middlemen, no compromise.
            </p>
            <p>
              We start where the gap is biggest. InkedIn is our first platform — a
              home for tattoo artists and the clients who are looking for them. More
              tools, more industries, more creators in control.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
