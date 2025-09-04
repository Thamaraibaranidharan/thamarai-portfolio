import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Navigation */}
        <div className="footer-links">
          <Link to="/faq">FAQ</Link>
          <Link to="/help">Help</Link>
          <Link to="/about">About</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="footer-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:youremail@example.com">
            <FaEnvelope />
          </a>
        </div>

        {/* Copy Right */}
        <p className="footer-text">© 2025 My Portfolio. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
