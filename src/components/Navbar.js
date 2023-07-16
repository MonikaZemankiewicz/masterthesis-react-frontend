import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <a href="/">
            <img src={logo} alt="landing page" />
          </a>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FaAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <a href="/" className="nav-link">
            home
          </a>
          <a href="/about" className="nav-link">
            about
          </a>
          <a href="/gallery" className="nav-link">
            gallery
          </a>
          <a href="/contact" className="nav-link">
            contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
