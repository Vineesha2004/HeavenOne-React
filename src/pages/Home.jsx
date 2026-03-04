import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/home.css";

import heroBg from "../assets/images/hero/hero-bg.jpg";
import aboutImg from "../assets/images/about/about-img.jpg";

import buyIcon from "../assets/images/icons/buy.png";
import sellIcon from "../assets/images/icons/sell.png";
import rentIcon from "../assets/images/icons/rent.png";
import launchIcon from "../assets/images/icons/launch.png";
import investIcon from "../assets/images/icons/invest.png";

function Home() {

  const navigate = useNavigate();
  const location = useLocation();

  const [searchData, setSearchData] = useState({
    type: "",
    city: "",
    status: ""
  });

  const handleSearch = () => {
    if (!searchData.status) {
      alert("Please select project status");
      return;
    }

    navigate(`/${searchData.status}`, {
      state: searchData
    });
  };

  const [activeIndex, setActiveIndex] = useState(null);

  // ✅ ABOUT SCROLL FIX
  useEffect(() => {
    if (location.state?.scrollTo === "about") {
      const section = document.getElementById("about");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

      // Clear state after scrolling
      navigate("/", { replace: true });
    }
  }, [location, navigate]);

  const accordionData = [
    {
      title: "Professional Guidance",
      content: `Our experienced professionals provide honest guidance, transparent communication, and dependable support at every stage of your property journey, helping you make informed decisions with complete confidence and peace of mind. From initial consultation to final documentation, we ensure clarity in every discussion, eliminate confusion, and prioritize your best interests. Our team is committed to building long-term relationships based on trust, integrity, and accountability.`
    },
    {
      title: "Expert Advisors",
      content: `We work with qualified advisors, architects, and property experts to help you make confident real estate decisions backed by market insights and technical expertise. Our advisors analyze location advantages, growth potential, pricing trends, and legal aspects to ensure you invest wisely. With professional evaluation and personalized recommendations, we guide you toward properties that align perfectly with your goals and budget.`
    },
    {
      title: "Verified Projects",
      content: `All projects listed on HeavenOne are verified for authenticity, legal compliance, and long-term value to ensure transparency and reliability. We carefully review documentation, approvals, and developer credibility before showcasing any property on our platform. This thorough verification process protects your investment and provides assurance that every listing meets quality and regulatory standards.`
    },
    {
      title: "Customer Satisfaction",
      content: `Customer satisfaction is our top priority, ensuring a smooth, secure, and stress-free property journey from start to finish. We focus on responsive communication, timely updates, and dedicated assistance to address your queries at every step. Our goal is not just to complete transactions, but to deliver a positive experience that builds trust and lasting confidence in our services.`
    }
  ];

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-overlay">
          <div className="container hero-content">

            <h1>Find Your Perfect Plot, Home & Investment</h1>
            <p>Buy, Sell, Rent & Invest in real estate with expert guidance</p>

            <div className="action-cards">
              <Link to="/ongoing" className="action-card">
                <img src={buyIcon} alt="Buy" />
                <span>Buy</span>
              </Link>

              <Link to="/sell" className="action-card">
                <img src={sellIcon} alt="Sell" />
                <span>Sell</span>
              </Link>

              <Link to="/rent" className="action-card">
                <img src={rentIcon} alt="Rent" />
                <span>Rent</span>
              </Link>

              <Link to="/upcoming" className="action-card">
                <img src={launchIcon} alt="New" />
                <span>Newly Launched</span>
              </Link>

              <Link to="/advisor" className="action-card">
                <img src={investIcon} alt="Advisor" />
                <span>Investment Advisor</span>
              </Link>
            </div>

            <div className="search-box">

              <select
                value={searchData.type}
                onChange={(e) =>
                  setSearchData({ ...searchData, type: e.target.value })
                }
              >
                <option value="">Property Type</option>
                <option value="2 BHK">2 BHK</option>
                <option value="3 BHK">3 BHK</option>
                <option value="Villas">Villas</option>
              </select>

              <select
                value={searchData.city}
                onChange={(e) =>
                  setSearchData({ ...searchData, city: e.target.value })
                }
              >
                <option value="">Location</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Visakhapatnam">Visakhapatnam</option>
                <option value="Bangalore">Bangalore</option>
              </select>

              <select
                value={searchData.status}
                onChange={(e) =>
                  setSearchData({ ...searchData, status: e.target.value })
                }
              >
                <option value="">Project Status</option>
                <option value="ongoing">Ongoing</option>
                <option value="upcoming">Upcoming</option>
                <option value="completed">Completed</option>
              </select>

              <button
                className="btn-search"
                onClick={handleSearch}
              >
                Search
              </button>

            </div>

          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="about" id="about">
        <h2>About HeavenOne</h2>

        <div className="about-wrapper">
          <div className="about-image">
            <img src={aboutImg} alt="About HeavenOne" />
          </div>

          <div className="about-text">
            <p>
              HeavenOne is a trusted real estate platform helping individuals and families buy, sell, and invest in properties with complete confidence.
            </p>

            <p>
              We showcase premium residential and commercial projects along with verified property listings to ensure transparency and reliability.
            </p>

            <p>
              With expert advisors, market insights, and a customer-first approach, HeavenOne simplifies your property journey from search to final documentation.
            </p>

            <p>
              Built on trust and market expertise, HeavenOne ensures every listing is carefully verified, helping you make informed and confident decisions.
            </p>

            <p>
              Whether you are a first-time buyer, an investor, or looking to sell, HeavenOne is your one-stop destination for smart real estate solutions.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-choose">
        <div className="container">
          <h2>Why You Should Choose Us</h2>

          <div className="accordion">
            {accordionData.map((item, index) => (
              <div key={index} className="accordion-item">

                <button
    className={`accordion-header ${activeIndex === index ? "active" : ""}`}
  onClick={() =>
    setActiveIndex(activeIndex === index ? null : index)
  }
>
  <span className="accordion-title">{item.title}</span>
  <span className="accordion-icon">
    {activeIndex === index ? "−" : "+"}
  </span>
</button>
                <div
                  className={`accordion-content ${activeIndex === index ? "open" : ""}`}
                >
                  <p>{item.content}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;