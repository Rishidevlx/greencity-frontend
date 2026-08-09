import React, { useState, useEffect } from 'react';
import WhatWeDo from '../components/WhatWeDo';
import './Services.css';

const Services = () => {
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
    <div className="services-page">
      {/* 1. Page Header (Optional, if we need space at top) */}
      <div className="services-header"></div>

      {/* 2. What We Do Section */}
      <WhatWeDo items={services} />

      {/* 4. Advertisement Poster */}
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

export default Services;
