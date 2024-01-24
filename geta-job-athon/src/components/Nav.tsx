import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  // State to toggle the mobile menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="nav-container">
      <ul className={`nav-list ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <li>
          <NavLink to='/' className={({ isActive }) => isActive ? 'active' : undefined} end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' className={({ isActive }) => isActive ? 'active' : undefined} end>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' className={({ isActive }) => isActive ? 'active' : undefined} end>
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {/* Add a menu icon here */}
        <div className="menu-bar">
          
        </div>
        <div className="menu-bar"></div>
        <div className="menu-bar"></div>
      </div>
    </div>
    

    
  );
};

export default Nav;
