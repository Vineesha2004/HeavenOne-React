import "../styles/sell.css";
import heroBg from "../assets/images/hero/projects-hero-bg.jpg";

function Sell() {
  return (
    <>
      {/* HERO */}
      <section
        className="sell-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="sell-overlay">
          <h1>Sell Your Property With Confidence</h1>
          <p>
            Get the best market value with expert guidance and verified buyers.
          </p>
          <a href="#sell-form" className="btn-primary">
            List Your Property
          </a>
        </div>
      </section>

      {/* WHY SELL */}
      <section className="why-sell">
        <div className="container">
          <h2>Why Sell With HeavenOne?</h2>

          <div className="why-grid">
            <div className="why-card">
              <h3>Verified Buyers</h3>
              <p>
                We connect you with serious and verified buyers to ensure smooth transactions.
              </p>
            </div>

            <div className="why-card">
              <h3>Market Expertise</h3>
              <p>
                Our advisors analyze market trends to help you get the best price.
              </p>
            </div>

            <div className="why-card">
              <h3>End-to-End Support</h3>
              <p>
                From listing to documentation, we guide you at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sell-process">
        <div className="container">
          <h2>How It Works</h2>

          <div className="process-steps">
            <div className="step">
              <span>1</span>
              <p>Submit Property Details</p>
            </div>

            <div className="step">
              <span>2</span>
              <p>Property Evaluation</p>
            </div>

            <div className="step">
              <span>3</span>
              <p>Connect With Buyers</p>
            </div>

            <div className="step">
              <span>4</span>
              <p>Close The Deal</p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="sell-form-section" id="sell-form">
        <div className="container form-wrapper">
          <h2>Submit Your Property</h2>

          <form className="sell-form">
            <input type="text" placeholder="Full Name" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Property Location" required />
            <input type="text" placeholder="Expected Price" required />
            <textarea placeholder="Property Details"></textarea>

            <button type="submit" className="btn-primary">
              Submit Property
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Sell;