import "../styles/contact.css";
import { useState } from "react";
import contactBg from "../assets/images/hero/projects-hero-bg.jpg";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <section
      className="contact-hero"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <div className="contact-overlay">

        <div className="container contact-wrapper">

          {/* MAP */}
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.4003337376903!2d83.31769419999999!3d17.725766399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39436aee4acfd3%3A0x681496d7414f2d80!2sCodingRoots!5e0!3m2!1sen!2sin!4v1771171654660!5m2!1sen!2sin"
              loading="lazy"
              title="map"
            ></iframe>
          </div>

          {/* FORM */}
          <div className="contact-form-box">
            <h2>Get In Touch</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button type="submit">Send Message</button>
            </form>

            <div className="contact-info">
              <h3>Our Office</h3>
              <p>HeavenOne Office</p>
              <p>Lawsons Bay Colony</p>
              <p>Visakhapatnam, AP</p>
              <p>Phone: +91 9988775125</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;