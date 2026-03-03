import "../styles/advisor.css";
import heroBg from "../assets/images/hero/investment-hero.jpg";

function Advisor() {
  return (
    <>
      {/* HERO */}
      <section
        className="investment-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="investment-overlay">
          <h1>Smart Real Estate Investment Starts Here</h1>
          <p>
            Strategic guidance, market insights & high-return opportunities tailored for you.
          </p>
          <a href="#consultation" className="btn-primary">
            Book Free Consultation
          </a>
        </div>
      </section>

      {/* WHY INVEST */}
      <section className="why-invest">
        <div className="container">
          <h2>Why Invest With HeavenOne?</h2>

          <div className="invest-grid">
            <div className="invest-card">
              <h3>Market Research</h3>
              <p>Data-driven analysis of growth zones and high ROI potential areas.</p>
            </div>

            <div className="invest-card">
              <h3>Risk Assessment</h3>
              <p>We evaluate legal, financial and development risks before you invest.</p>
            </div>

            <div className="invest-card">
              <h3>Long-Term Strategy</h3>
              <p>Portfolio planning designed for wealth growth and stability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="investment-services">
        <div className="container">
          <h2>Our Investment Services</h2>

          <div className="services-wrapper">
            <div className="service-box">
              <h3>Residential Investments</h3>
              <p>High-growth apartments, villas & gated communities.</p>
            </div>

            <div className="service-box">
              <h3>Commercial Assets</h3>
              <p>Office spaces, retail outlets & business hubs with strong rental yield.</p>
            </div>

            <div className="service-box">
              <h3>Land Banking</h3>
              <p>Strategic land purchases in developing corridors.</p>
            </div>

            <div className="service-box">
              <h3>Rental Yield Planning</h3>
              <p>Maximize passive income with optimized property selection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTATION */}
      <section className="consultation-section" id="consultation">
        <div className="container">
          <div className="consultation-wrapper">
            <h2>Schedule Your Investment Consultation</h2>

            <form className="consultation-form">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />

              <select>
                <option>Select Investment Budget</option>
                <option>Below ₹50L</option>
                <option>₹50L - ₹1Cr</option>
                <option>Above ₹1Cr</option>
              </select>

              <textarea placeholder="Your Investment Goals"></textarea>

              <button type="submit">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Advisor;