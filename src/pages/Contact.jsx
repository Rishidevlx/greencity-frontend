import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>CONTACT US</h1>
        <div className="gradient-bar">
          <h2>GREEN CITY BIO-TECH</h2>
        </div>
      </div>

      <div className="contact-info-grid">
        {/* Column 1 */}
        <div className="info-column">
          <div className="icon-wrapper">
            <i className="fas fa-city icon"></i>
          </div>
          <h3>CORPORATE OFFICE</h3>
          <p>GANAPATHY GARDENS</p>
          <p>30/114, SANJEEVINATHAPURAM</p>
          <p>STREET</p>
          <p>T.P.MILLS ROAD, RAJAPALAYAM</p>
          <p>VIRUDHUNAGAR DISTRICT-626 117</p>
          <p>TAMIL NADU, INDIA.</p>
        </div>

        {/* Column 2 */}
        <div className="info-column">
          <div className="icon-wrapper">
            <i className="fas fa-phone-alt icon"></i>
          </div>
          <h3>PHONES</h3>
          <p>+91 95856 27360</p>
          <p>+91 98430 67360</p>
          <p>+91 98433 67360</p>
          <p>+91 94433 67360</p>
          <p>+91 95852 22360</p>
        </div>

        {/* Column 3 */}
        <div className="info-column">
          <div className="icon-wrapper">
            <i className="far fa-envelope icon"></i>
          </div>
          <h3>CONTACT</h3>
          <p>-------</p>
          <p>ganapathysanthosh6066@gmail.com</p>
        </div>

        {/* Column 4 */}
        <div className="info-column">
          <div className="icon-wrapper">
            <i className="fas fa-home icon"></i>
          </div>
          <h3>WORKING HOOURS</h3>
          <p>MONDAY-FRIDAY: 9:00 - 18:00</p>
          <p>SATURDAY: 11:00 - 17:00</p>
          <p>SUNDAY: CLOSED</p>
        </div>
      </div>

    </div>
  );
};

export default Contact;
