import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/HomePage.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const navItems = ["Home", "About", "Services", "Portfolio", "Clients", "Contact"];

  
  return (
    <div className="app">
      {/* NAVBAR */}
      <nav>
        <img
          src="/logo.jpeg"
          alt="Vaid PR Logo"
          className="logo-img"
          onClick={() => navigate("/")}
        />

        <div className="nav-links">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => navigate(`/${item.toLowerCase()}`)}
            >
              {item}
            </button>
          ))}
        </div>

        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {isOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                navigate(`/${item.toLowerCase()}`);
                setIsOpen(false);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-title">VAID</h1>
          <p className="hero-subtitle">Public Relations</p>
          <p className="hero-tagline">VAIDPR.COM</p>

          <button className="explore-btn">
             Explore <span className="arrow">→</span>
          </button>
        </div>

        <div className="hero-right">
          <p>
            Vaid PR is a dynamic public relations agency dedicated to helping
            brands build their voice, elevate their presence, and leave a
            lasting impression. We believe PR isn't just about publicity — it's
            about creating authentic connections that inspire trust, loyalty,
            and growth.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
