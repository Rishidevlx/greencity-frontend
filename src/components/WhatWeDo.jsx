import React from 'react';
import './WhatWeDo.css';

const WhatWeDo = ({ items }) => {
  return (
    <section className="what-we-do-section container text-center">
      <div className="section-subtitle">
        <span className="line"></span>
        <h4>WHAT WE DO</h4>
        <span className="line"></span>
      </div>
      <h2 className="section-main-title">
        CONSULTANCY SERVICES <span className="ampersand">&</span> TECHNICAL SUPPORT
      </h2>

      <div className="services-grid">
        {items.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-img-wrapper">
              <img src={service.img} alt={service.title} />
            </div>
            <div className="service-card-title">
              <h3>{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
