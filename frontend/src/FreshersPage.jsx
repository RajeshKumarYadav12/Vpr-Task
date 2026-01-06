import React, { useState, useMemo } from "react";
import posterImage1 from "./assets/freshers/poster1.png";
import posterImage2 from "./assets/freshers/poster2.png";
import posterImage3 from "./assets/freshers/poster3.png";
import posterImage4 from "./assets/freshers/poster4.jpeg";
import posterImage5 from "./assets/freshers/poster5.jpeg";
import posterImage6 from "./assets/freshers/poster6.jpeg";
import "./css/FreshersPage.css";

const originalPosters = [
  { id: 1, src: posterImage1, title: "Elegant Night Party" },
  { id: 2, src: posterImage2, title: "Neon City Freshers" },
  { id: 3, src: posterImage3, title: "Retro Future Bash" },
  { id: 4, src: posterImage4, title: "Freshers at a college" },
  { id: 5, src: posterImage5, title: "At night show" },
  { id: 6, src: posterImage6, title: "Enjoy the day" },
];

function FreshersPage() {
  const [modalSrc, setModalSrc] = useState(null);

  
  const posters = useMemo(() => [...originalPosters, ...originalPosters], []);

  return (
    <div className="freshers-wrapper">
      <header>
        <h1 className="page-title">OUR NEW POSTERS</h1>
      </header>

      <main>
        {/* Auto-scrolling slider */}
        <section className="slider-section">
          <div className="slider-track">
            {posters.map((poster, index) => (
              <div
                key={`${poster.id}-${index}`}
                className="slide"
                onClick={() => setModalSrc(poster.src)}
              >
                <div className="slide-content">
                  <img src={poster.src} alt={poster.title} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Poster grid */}
        <section className="poster-grid-container">
          <h2>All POSTERS</h2>
          <div className="grid">
            {originalPosters.map((poster, index) => (
              <div
                key={`${poster.id}-grid-${index}`}
                className="grid-item"
                onClick={() => setModalSrc(poster.src)}
              >
                <img src={poster.src} alt={poster.title} loading="lazy" />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Modal */}
      {modalSrc && (
        <div className="modal" onClick={() => setModalSrc(null)}>
          <span className="close-button" onClick={() => setModalSrc(null)}>
            &times;
          </span>
          <img
            className="modal-content"
            src={modalSrc}
            alt="Poster"
            onClick={(e) => e.stopPropagation()}
            loading="lazy"
          />
        </div>
      )}

      {/* Feedback section */}
      <div className="feedback-section">
        <h2 className="feedback-heading">Feedback</h2>
        <div className="testimonial-card">
          <p className="testimonial-author">
            Karan Mehta – Director, Mehta Jewels
          </p>
          <blockquote className="testimonial-text">
            We've worked with agencies before, but Vaid PR brought a different
            level of personal touch. They didn't just run campaigns—they created
            experiences that our customers still remember.
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default FreshersPage;
