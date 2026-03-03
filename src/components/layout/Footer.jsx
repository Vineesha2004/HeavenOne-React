import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-col">
          <h3>About HeavenOne</h3>
          <p>
            HeavenOne is a trusted real estate platform helping buyers,
            sellers, and investors make confident property decisions with
            transparency and expert guidance.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3>Property Type</h3>
          <ul>
            <li>Property sale in Hyderabad</li>
            <li>Property sale in Bangalore</li>
            <li>Property sale in Visakhapatnam</li>
            <li>Property sale in Vizianagaram</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h3>Useful Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h3>Office Address</h3>
          <p>
            HeavenOne Office,<br />
            Lawsons Bay Colony,<br />
            Visakhapatnam, AP - 530017<br />
            Phone: +91 9988775125<br />
            Email: info@heavenone.com
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 HeavenOne. All Rights Reserved.</p>

        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;