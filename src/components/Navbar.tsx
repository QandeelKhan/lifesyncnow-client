import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './css/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleToggle = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">YOUR LOGO HERE</Link>
      </div>
      <button
        className={`navbar-toggle ${menuActive ? 'active' : ''}`}
        onClick={handleToggle}
      >
        {menuActive ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>
      <ul className={`navbar-menu ${menuActive ? 'active' : ''}`}>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/skin-care-tips">SKIN-CARE TIPS</Link>
        </li>
        <li>
          <Link to="/food-and-nutrition">FOOD AND NUTRITION</Link>
        </li>
        <li>
          <Link to="holistic-treatment">HOLISTIC TREATMENT</Link>
        </li>
        <li>
          <Link to="/fitness-tips">FITNESS TIPS</Link>
        </li>
        <li>
          <Link to="/relationship-tips">RELATIONSHIP TIPS</Link>
        </li>
        <li>
          <Link to="/entertairment">ENTERTAIRMENT</Link>
        </li>
      </ul>
      <button
        className={`navbar-close ${menuActive ? 'active' : ''}`}
        onClick={handleToggle}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </nav>
  );
};

export default Navbar;
