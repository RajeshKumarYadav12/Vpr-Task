import React, { useState } from "react";
import Header from "./services-components/Header";
import ServiceList from "./services-components/ServiceList";
import BookCallForm from "./services-components/BookCallForm";
import Footer from "./services-components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import "./css/ServicesPage.css";

const Services = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="services-page">
      <Header />
      <section className="services-hero">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="services-title">Our Services</h1>
          <p className="services-subtitle">
            We craft stories that build trust, not just buzz.
          </p>
        </motion.div>
      </section>

      <ServiceList />

      <div className="book-call-section">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="book-call-btn-advanced"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Form" : "Book a Call"}
        </motion.button>

        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5 }}
            >
              <BookCallForm />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
