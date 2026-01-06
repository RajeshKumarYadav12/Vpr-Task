
import React from "react";
import { motion } from "framer-motion";

const services = [
  "Brand Identity",
  "Brand Activation",
  "Website Development",
  "Brand Strategy",
  "Video Production",
  "Integrated Marketing",
  "Brand Strategy & Positioning",
  "Graphic Design Services",
];

// 8 soft gradient colors for variety
const colors = [
  "linear-gradient(135deg, #A18CD1 0%, #FBC2EB 100%)",
  "linear-gradient(135deg, #84FAB0 0%, #8FD3F4 100%)",
  "linear-gradient(135deg, #FCCF31 0%, #F55555 100%)",
  "linear-gradient(135deg, #5EE7DF 0%, #B490CA 100%)",
  "linear-gradient(135deg, #FF9A9E 0%, #FAD0C4 100%)",
  "linear-gradient(135deg, #89F7FE 0%, #66A6FF 100%)",
  "linear-gradient(135deg, #F6D365 0%, #FDA085 100%)",
  "linear-gradient(135deg, #C6EA8D 0%, #FE90AF 100%)",
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ServiceList = () => {
  return (
    <motion.section
      className="services-grid"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {services.map((service, index) => (
        <motion.div
          className="service-card"
          key={index}
          style={{ background: colors[index % colors.length] }}
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(120, 80, 255, 0.4)",
          }}
          transition={{ type: "spring", stiffness: 180, damping: 12 }}
        >
          <h3>{service}</h3>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default ServiceList;

