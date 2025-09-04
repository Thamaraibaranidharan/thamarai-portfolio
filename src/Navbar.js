import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // external CSS

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Portfolio</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
