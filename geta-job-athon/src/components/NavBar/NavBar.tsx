import * as React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse, faAddressCard, faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
      <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={`main-nav ${isOpen ? 'active' : ''}`}>
      <ul>
          <li>
            <Link to="/" className="nav-links">
            <FontAwesomeIcon icon={faHouse} />
              <span className="menu-text">Home</span>
            </Link></li>
          <li>
            <Link to="/about" className="nav-links">
            <FontAwesomeIcon icon={faAddressCard} />
              <span className="menu-text">About</span>
            </Link></li>
          <li>
            <Link to="/contact" className="nav-links">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="menu-text">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
