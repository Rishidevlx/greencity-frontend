import React, { useState, useEffect } from 'react';
import WhatWeDo from '../components/WhatWeDo';
import './Facilities.css';

const Facilities = () => {
  const [services, setServices] = useState([
    { title: "Hi-Tech Agri-Horti", img: "/uploads/2025/05/hi-tech-agri-horti.jpg" },
    { title: "Organic Farming", img: "/uploads/2025/05/organic-farming.jpg" },
    { title: "Terrace Gardening", img: "/uploads/2025/05/terrace-urban-farming.jpg" },
    { title: "Agro-Forestry", img: "/uploads/2025/05/agro-forestry.jpg" },
    { title: "Contract Farming", img: "/uploads/2025/05/contract-farming-1.jpg" },
    { title: "Drip-Irrigation", img: "/uploads/2025/05/drip-irrigation.jpg" },
    { title: "Vertical Farming", img: "/uploads/2025/05/vertical-farming.jpg" },
    { title: "Carbon Credit", img: "/uploads/2025/05/biochar.jpg" }
  ]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch((import.meta.env.VITE_API_URL || '') + '/api/services');
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            setServices(data);
          }
        }
      } catch (err) {
        console.error("Failed to fetch services:", err);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="facilities-page">
      {/* 1. What We Do Section */}
      <WhatWeDo items={services} />

      {/* 2. About Us Section */}
      <section className="fac-about-section container">
        <div className="fac-about-grid">
          <div className="fac-about-left">
            <h5 className="fac-about-label">ABOUT US</h5>
            <h2 className="fac-about-title">WE GREEN CITY BIO-TECH ESTABLISHED IN 2019</h2>
            <h3 className="fac-about-subtitle">A Unit Of Ganapathy Group Of Companies</h3>
            
            <div className="fac-play-box">
              <div className="play-btn-wrapper">
                <i className="fas fa-play"></i>
              </div>
              <div className="play-text">
                <p><strong>LATER CONVERTED TO PARTNERSHIP FIRM...</strong><br/>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
          </div>
          
          <div className="fac-about-right">
            <p className="fac-about-desc">
              We Green City Bio-Tech established in 2020-2021 from its parent company a 24-year-old Green World Biotech (GWB) established in 1992 with the main focus on Agriculture, Horticulture, Coconut, Spices & Herbs. We feel proud to introduce ourselves as one of the pioneers in the field of HI-TECH AGRIHORTI consultancy and services, the fine art of Natural Science combined with the Innovative Technology has brought great success in the field of Research and Development.
            </p>
            <button className="fac-more-btn">More About</button>
          </div>
        </div>
      </section>

      {/* 3. Parallax Banner */}
      <section className="fac-parallax-banner">
        <div className="fac-parallax-overlay">
          <h2>We are Expert in Conversion of Waste to Wealth and Barren Land<br/>into Cultivable Land</h2>
        </div>
      </section>

      {/* 4. What We Did Section */}
      <section className="fac-what-we-did container">
        <h2 className="fac-wwd-title">WHAT WE DID.......</h2>
        <p className="fac-wwd-subtitle">RECENT PROJECTS...</p>

        <div className="fac-projects-grid">
          {/* Row 1 */}
          <div className="fac-project-item">
            <img src="/uploads/2025/05/1-1.jpg" alt="Before" />
            <h4>BEFORE</h4>
          </div>
          <div className="fac-project-item">
            <img src="/uploads/2025/07/1-Copy.jpg" alt="After 1.O" />
            <h4>AFTER-1.O</h4>
          </div>
          <div className="fac-project-item">
            <img src="/uploads/2025/07/1-Copy-2-1.jpg" alt="After Planting" />
            <h4>AFTER-Planting</h4>
          </div>

          {/* Row 2 */}
          <div className="fac-project-item">
            <img src="/uploads/2025/07/NEW-1.jpg" alt="Before" />
            <h4>BEFORE</h4>
          </div>
          <div className="fac-project-item">
            <img src="/uploads/2025/07/NEW-2.jpg" alt="After" />
            <h4>AFTER</h4>
          </div>
          <div className="fac-project-item empty-item"></div>

          {/* Row 3 */}
          <div className="fac-project-item">
            <img src="/uploads/2025/07/NEW-3.jpg" alt="Before" />
            <h4>BEFORE</h4>
          </div>
          <div className="fac-project-item">
            <img src="/uploads/2025/07/NEW-4.jpg" alt="After Planting" />
            <h4>AFTER-Planting</h4>
          </div>
          <div className="fac-project-item empty-item"></div>
        </div>
      </section>

      {/* 5. Advertisement Poster */}
      <section className="services-advertisement container text-center">
        <img 
          src="/uploads/2025/05/WhatsApp-Image-2025-05-16-at-2.27.57-PM.jpeg" 
          alt="Advertisement" 
          className="advertisement-poster" 
        />
      </section>
    </div>
  );
};

export default Facilities;
