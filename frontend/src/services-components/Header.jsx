import React, { useState, useEffect } from "react";
import "../css/App.css";

const Header = () => {
  const brandMain = "Vaid PR";
  const colors = ["#FFD700", "#00FFFF", "#FF4D94", "#33FF99", "#FFA500"]; // 5 colors
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex(prev => (prev + 1) % colors.length);
    }, 6000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header-advanced">
      <div className="header-content">
        <h2 className="brand-name">Vaid Public Relation</h2>
        <h1 className="brand-main">
          {brandMain.split("").map((char, index) => (
            <span
              key={index}
              className="animated-letter"
              style={{ color: colors[index % colors.length] }}
            >
              {char}
            </span>
          ))}
        </h1>

        <div className="tagline-container">
          <p
            className="brand-tagline"
            style={{ color: colors[colorIndex] }}
          >
            Beyond The Buzz, We Build Trust
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
