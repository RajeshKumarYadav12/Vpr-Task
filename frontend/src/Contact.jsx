import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import "./css/ContactPage.css";

const Contact = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <>
      <section className="contact-section">
        <div className="contact-container">
          <h2 className="contact-heading">Stay in touch with Vaid PR</h2>

          <div className="contact-content">
            {/* MAP */}
            <div className="map-container">
              <iframe
                title="Vaid PR Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.747165930796!2d77.50588427471355!3d28.470580791229295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc17c6e55b1c1%3A0xa6db438412d7dbd7!2sVaid%20PR%2C%20Saini%2C%20Sunpura%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20203207!5e0!3m2!1sen!2sin!4v1730278132302!5m2!1sen!2sin"
                loading="lazy"
              ></iframe>

              <div className="map-location">
                <MapPin size={18} />
                <span>Vaid PR, Saini, Sunpura, Greater Noida, Uttar Pradesh 203207</span>
              </div>
            </div>


            {/* NEWSLETTER */}
            <div className="newsletter-box">
              <h3>Our Newsletters</h3>
              <p>
                Stay updated with the latest in branding, PR, and innovation from{" "}
                <strong>VaidPR</strong>.
              </p>

              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email"
              />

              <button onClick={handleSubscribe} className="newsletter-btn">
                Subscribe
              </button>

              {subscribed && (
                <p className="success-message">✔ You have subscribed successfully!</p>
              )}
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="contact-info">
            <div className="info-card">
              <div className="icon">
                <Phone size={28} />
              </div>
              <h4>
                <a href="tel:+918766212132">(+91) 8766212132</a>
              </h4>
              <p>We're here to assist you with your creative & tech needs.</p>
            </div>

            <div className="info-card">
              <div className="icon">
                <Mail size={28} />
              </div>
              <h4>
                <a href="mailto:support@vaidpr.com">support@vaidpr.com</a>
              </h4>
              <p>Reach out for queries, collaborations, or media assistance.</p>
            </div>

            <div className="info-card">
              <div className="icon">
                <MapPin size={28} />
              </div>
              <h4>Greater Noida, India</h4>
              <p>Proudly building brands from India to the world.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;