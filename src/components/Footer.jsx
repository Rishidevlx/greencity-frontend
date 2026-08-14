import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Column 1: Corporate Office */}
        <div className="footer-col">
          <div className="footer-heading">
            <h2>CORPORATE OFFICE</h2>
          </div>
          <div className="footer-subheading">
            <h5>GANAPATHY GARDENS</h5>
          </div>
          <div className="footer-text">
            <h5>30/114, Sanjeevinathapuram Street</h5>
            <h5>T.P.Mills Road, Rajapalayam</h5>
            <h5>Virudhunagar District</h5>
            <h5>PIN- 626 117 Tamil Nadu,</h5>
            <h5>India.</h5>
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com/" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-snapchat-ghost"></i></a>
          </div>
        </div>

        {/* Column 2: City Office */}
        <div className="footer-col">
          <div className="footer-heading">
            <h2>CITY OFFICE</h2>
          </div>
          <div className="footer-text">
            <h5>F2 shree niketan Appartment</h5>
            <h5>vrv nagar thudiyalur</h5>
            <h5>coimbatore 641029,</h5>
            <h5>Tamilnadu India</h5>
          </div>
        </div>

        {/* Column 3: Research Farm */}
        <div className="footer-col">
          <div className="footer-heading">
            <h2>RESEARCH FARM</h2>
          </div>
          <div className="footer-text">
            <h5>Green City Integrated Agro Farms,</h5>
            <h5>Cholapuram, Rajapalayam</h5>
            <br />
            <h5>+91 95856 27360 +91 98430 67360</h5>
            <h5>+91 98433 67360 +91 94433 67360</h5>
            <h5>+91 95852 22360</h5>
            <br />
            <h5>gssg@gcbiplc.com</h5>
            <h5>ganapathysanthosh123@gmail.com</h5>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="footer-copyright">
        <Link to="/">© 2025 GREEN CITY BIO TECH</Link>
      </div>
    </footer>
  );
};

export default Footer;
