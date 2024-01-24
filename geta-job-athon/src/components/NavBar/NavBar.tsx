import React, { useState } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'; // Ensure the path is correct

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    console.log("Before toggle: ", isOpen);
    setIsOpen(!isOpen);
    console.log("After toggle: ", isOpen);
  };

  return (
    <nav className="navbar">
      <button className="navbar-toggle" onClick={handleClick}>
      <span className="hamburger-icon"></span>
      </button>
      <div className={`main-nav ${isOpen ? 'active' : ''}`}>
      <ul>
          <li><Link to="/" className="nav-links">Home</Link></li>
          <li><Link to="/about" className="nav-links">About</Link></li>
          <li><Link to="/contact" className="nav-links">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
