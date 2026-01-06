import React, { useState, useEffect, useRef } from "react";
import "./css/PortfolioPage.css";
import {
  FaPause,
  FaPlay,
  FaSlidersH,
  FaTh,
  FaChevronLeft,
  FaChevronRight,
  FaCode,
} from "react-icons/fa";

import image12 from "./assets/portfolio/image_12.png";
import image13 from "./assets/portfolio/image_13.png";
import image14 from "./assets/portfolio/image_14.jpg";
import image15 from "./assets/portfolio/image_15.jpg";
import image16 from "./assets/portfolio/image_16.jpg";
import image17 from "./assets/portfolio/image_17.png";
import image18 from "./assets/portfolio/image_18.png";
import image19 from "./assets/portfolio/image_19.png";
import image20 from "./assets/portfolio/image_20.png";
import image21 from "./assets/portfolio/image_21.png";
import image22 from "./assets/portfolio/image_22.png";
import image23 from "./assets/portfolio/image_23.png";
import image24 from "./assets/portfolio/image_24.png";
import image25 from "./assets/portfolio/image_25.png";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <ClientWorksSection />
      <BinaryRecruitmentSection />
      <MenuDesignSection />
    </div>
  );
};

// ---------------- CLIENT WORKS ----------------

const ClientWorksSection = () => {
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    document.body.style.overflow = previewImage ? "hidden" : "auto";
  }, [previewImage]);

  return (
    <section className="client-works-section">
      <div className="client-works-bg"></div>

      <div className="client-container">
        <div className="client-header">
          <h1 className="client-title">Client Works</h1>
          <img src={image13} alt="Vet N Pet Logo" className="client-logo" />
        </div>

        <div className="client-subheading">
          <h2>Vet N Pet</h2>
          <p>
            A modern, intuitive, and responsive web solution designed for pet
            lovers and veterinary professionals — delivering both style and
            seamless usability.
          </p>
        </div>

        <div
          className="client-showcase"
          onClick={() => setPreviewImage(image12)}
        >
          <img src={image12} alt="Vet N Pet Combined Works" />
        </div>
      </div>

      {previewImage && (
        <div className="preview-overlay">
          <button className="close-btn" onClick={() => setPreviewImage(null)}>
            &times;
          </button>
          <img src={previewImage} alt="Preview" className="preview-img" />
        </div>
      )}
    </section>
  );
};

// ---------------- BINARY RECRUITMENT ----------------

const BinaryRecruitmentSection = () => {
  const [currentView, setCurrentView] = useState("slider");
  const [isPlaying, setIsPlaying] = useState(true);
  const [previewImage, setPreviewImage] = useState(null);
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const scrollSpeed = 1;

  const slides = [
    { id: 1, src: image14, title: "Unlock Top Talent" },
    { id: 2, src: image15, title: "Build Your Dream Team" },
    { id: 3, src: image16, title: "Why Binary?" },
    { id: 4, src: image17, title: "Services" },
    { id: 5, src: image18, title: "Power Up Your Team" },
    { id: 6, src: image19, title: "Looking For Best Talent" },
    { id: 7, src: image20, title: "Hiring Process" },
    { id: 8, src: image21, title: "Find The Best Talent" },
    { id: 9, src: image22, title: "Partner With Binary" },
  ];

  const loopSlides = [...slides, ...slides];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const smoothScroll = () => {
      if (scrollContainer && isPlaying) {
        scrollContainer.scrollLeft += scrollSpeed;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(smoothScroll);
    };
    animationRef.current = requestAnimationFrame(smoothScroll);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isPlaying]);

  return (
    <section className="binary-section">
      <div className="binary-bg"></div>

      <div className="binary-container">
        <h1>Binary Recruitment Posters</h1>

        <div className="binary-toggle">
          <button
            className={currentView === "slider" ? "active" : ""}
            onClick={() => setCurrentView("slider")}
          >
            <FaSlidersH /> Slider View
          </button>
          <button
            className={currentView === "grid" ? "active" : ""}
            onClick={() => setCurrentView("grid")}
          >
            <FaTh /> Grid View
          </button>
        </div>

        {currentView === "slider" && (
          <div
            ref={scrollRef}
            className="binary-slider"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            {loopSlides.map((slide, i) => (
              <div
                key={i}
                className="binary-slide"
                onClick={() => setPreviewImage(slide.src)}
              >
                <img src={slide.src} alt={slide.title} />
              </div>
            ))}
          </div>
        )}

        {currentView === "grid" && (
          <div className="binary-grid">
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="binary-grid-item"
                onClick={() => setPreviewImage(slide.src)}
              >
                <img src={slide.src} alt={slide.title} />
              </div>
            ))}
          </div>
        )}
      </div>

      {previewImage && (
        <div className="preview-overlay">
          <button className="close-btn" onClick={() => setPreviewImage(null)}>
            &times;
          </button>
          <img src={previewImage} alt="Preview" className="preview-img" />
        </div>
      )}
    </section>
  );
};

// ---------------- MENU DESIGN ----------------

const MenuDesignSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const menuItems = [
    { id: 1, src: image23, alt: "Restaurant Menu 1" },
    { id: 2, src: image24, alt: "Restaurant Menu 2" },
    { id: 3, src: image25, alt: "Restaurant Menu 3" },
  ];

  return (
    <section className="menu-section">
      <div className="menu-bg"></div>

      <div className="menu-container">
        <h1>Restaurants Menu Design</h1>

        <div className="menu-row">
          {menuItems.slice(0, 2).map((item) => (
            <div
              key={item.id}
              className="menu-item"
              onClick={() => setSelectedImage(item.src)}
            >
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>

        <div className="menu-center">
          <div
            className="menu-item large"
            onClick={() => setSelectedImage(menuItems[2].src)}
          >
            <img src={menuItems[2].src} alt={menuItems[2].alt} />
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="preview-overlay">
          <button className="close-btn" onClick={() => setSelectedImage(null)}>
            &times;
          </button>
          <img src={selectedImage} alt="Preview" className="preview-img" />
        </div>
      )}
    </section>
  );
};

export default Portfolio;
