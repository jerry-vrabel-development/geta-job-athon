import React, { useState } from 'react';
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
          <li><a href="/" className="nav-links">Home</a></li>
          <li><a href="/about" className="nav-links">About</a></li>
          <li><a href="/contact" className="nav-links">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
