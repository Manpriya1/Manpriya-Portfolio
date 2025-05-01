import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = () => {
    const scrollPos = window.scrollY + 100;

    const sections = ["home", "about", "resume", "projects", "contact"];
    for (let sec of sections) {
      const element = document.getElementById(sec);
      if (element && scrollPos >= element.offsetTop) {
        setActive(sec);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobile(!isMobile);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="logo">Manpriya Dhanju</a>
        <div className={`nav-links ${isMobile ? "active" : ""}`}>
          {["home", "about", "resume", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={active === item ? "active" : ""}
              onClick={() => setIsMobile(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
        <div className="hamburger" onClick={toggleMobileMenu}>
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
