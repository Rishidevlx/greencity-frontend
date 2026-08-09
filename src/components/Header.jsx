import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="header-logo">
          <Link to="/" className="logo-link">
            <img 
              src="https://greencitybiotech.com/wp-content/uploads/2025/05/Picture1.png" 
              alt="Green City Biotech Logo" 
              className="logo-img"
            />
            <span className="logo-text">GREEN CITY BIOTECH</span>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="header-nav">
          <ul className="nav-menu">
            <li><Link to="/" className={isActive('/')}>HOME</Link></li>
            <li><Link to="/about" className={isActive('/about')}>ABOUT US</Link></li>
            <li><Link to="/about-ceo" className={isActive('/about-ceo')}>ABOUT CEO</Link></li>
            <li className="has-dropdown">
              <Link to="/products" className={isActive('/products')}>
                PRODUCTS <i className="fas fa-caret-down"></i>
              </Link>
              <ul className="sub-menu">
                <li><Link to="/bio-control-agents">Bio-Control Agents</Link></li>
                <li><Link to="/bio-fertilizer">Bio-Fertilizer</Link></li>
                <li><Link to="/enriched-organic-manure">Enriched Organic Manure</Link></li>
                <li><Link to="/bio-pesticide">Bio-Pesticide</Link></li>
                <li><Link to="/enrich-liquid-fertilizer">Enrich Liquid Fertilizer</Link></li>
              </ul>
            </li>
            <li className="has-dropdown">
              <Link to="/our-facilities" className={isActive('/our-facilities')}>
                OUR FACILITIES <i className="fas fa-caret-down"></i>
              </Link>
              <ul className="sub-menu">
                <li><Link to="/our-facilities">Research Farms</Link></li>
              </ul>
            </li>
            <li><Link to="/our-services" className={isActive('/our-services')}>OUR SERVICES</Link></li>
            <li><Link to="/gallery" className={isActive('/gallery')}>GALLERY</Link></li>
            <li><Link to="/contact" className={isActive('/contact')}>CONTACT</Link></li>
          </ul>
        </nav>

        {/* Contact Button */}
        <div className="header-action">
          <Link to="/contact" className="header-btn">CONTACT</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
