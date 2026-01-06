import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="footer-advanced"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h3>Let’s Talk</h3>
      <p>
        Whether you’re launching something new or refreshing what you already
        have, we’d love to help you tell your story.
      </p>

      <div className="footer-links">
        <p>🌐 <a href="https://www.vaidpr.com" target="_blank" rel="noreferrer">www.vaidpr.com</a></p>
        <p>📧 <a href="mailto:info@vaidpr.com">info@vaidpr.com</a></p>
        <p>📞 <a href="tel:+918130573690">+91 8130573690</a></p>
      </div>
    </motion.footer>
  );
};

export default Footer;
