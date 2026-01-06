import React, { useState } from "react";
import { motion } from "framer-motion";

const BookCallForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    query: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We’ll get in touch soon.");
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      query: "",
    });
  };

  return (
    <motion.form
      className="book-call-form-advanced"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="company"
        placeholder="Company Name"
        value={formData.company}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
      />
      <textarea
        name="query"
        placeholder="Your Query"
        value={formData.query}
        onChange={handleChange}
        required
      />
      <motion.button whileHover={{ scale: 1.05 }} className="submit-btn-advanced">
        Submit
      </motion.button>
    </motion.form>
  );
};

export default BookCallForm;
