import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
              src="/uploads/2025/05/Picture1.png" 
              alt="Green City Biotech Logo" 
              className="logo-img"
            />
            <span className="logo-text">GREEN CITY BIOTECH</span>
          </Link>
        </div>

        {/* Navigation Menu */}
        <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <nav className={`header-nav ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
          <ul className="nav-menu">
            <li><Link to="/" className={isActive('/')} onClick={() => setIsMobileMenuOpen(false)}>HOME</Link></li>
            <li><Link to="/about" className={isActive('/about')} onClick={() => setIsMobileMenuOpen(false)}>ABOUT US</Link></li>
            <li><Link to="/about-ceo" className={isActive('/about-ceo')} onClick={() => setIsMobileMenuOpen(false)}>ABOUT CEO</Link></li>
            <li className="has-dropdown">
              <Link to="/products" className={isActive('/products')}>
                PRODUCTS <i className="fas fa-caret-down"></i>
              </Link>
              <ul className="sub-menu">
                <li><Link to="/bio-control-agents" onClick={() => setIsMobileMenuOpen(false)}>Bio-Control Agents</Link></li>
                <li><Link to="/bio-fertilizer" onClick={() => setIsMobileMenuOpen(false)}>Bio-Fertilizer</Link></li>
                <li><Link to="/enriched-organic-manure" onClick={() => setIsMobileMenuOpen(false)}>Enriched Organic Manure</Link></li>
                <li><Link to="/bio-pesticide" onClick={() => setIsMobileMenuOpen(false)}>Bio-Pesticide</Link></li>
                <li><Link to="/enrich-liquid-fertilizer" onClick={() => setIsMobileMenuOpen(false)}>Enrich Liquid Fertilizer</Link></li>
              </ul>
            </li>
            <li className="has-dropdown">
              <Link to="/our-facilities" className={isActive('/our-facilities')}>
                OUR FACILITIES <i className="fas fa-caret-down"></i>
              </Link>
              <ul className="sub-menu">
                <li><Link to="/our-facilities" onClick={() => setIsMobileMenuOpen(false)}>Research Farms</Link></li>
              </ul>
            </li>
            <li><Link to="/our-services" className={isActive('/our-services')} onClick={() => setIsMobileMenuOpen(false)}>OUR SERVICES</Link></li>
            <li><Link to="/gallery" className={isActive('/gallery')} onClick={() => setIsMobileMenuOpen(false)}>GALLERY</Link></li>
            <li><Link to="/contact" className={isActive('/contact')} onClick={() => setIsMobileMenuOpen(false)}>CONTACT</Link></li>
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
