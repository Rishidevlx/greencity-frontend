import React from 'react';
import './About.css';

const About = () => {
  const recentEvents = [
    {
      img: "/uploads/2025/06/IMG-20250608-WA0031.jpg",
      caption: "Participated as a Delegate in Second International Conference on Biological control and Biocontrol contribution to one health @ Radassion blu Atria, Bangalore, meeting with Dr.Johannes JKI Institute Greman"
    },
    {
      img: "/uploads/2025/06/IMG-20250608-WA0032-1.jpg",
      caption: "Delegate Participation with GIZ and Anna University on Benefits and usage GRE Tools with Farmers @ Rajapalayam."
    },
    {
      img: "/uploads/2025/06/IMG-20250609-WA0441-1.jpg",
      caption: "Discussion with Virudhunagar Collectrate on Sustainable Farming and climate change"
    },
    {
      img: "/uploads/2025/06/IMG-20250609-WA0442.jpg",
      caption: "Meeting @ Collectorate with Entrepreneurs on Sustainable and Bio-inputs usage and helps in Climate change."
    }
  ];

  const agriExpoEvents = [
    { img: "/uploads/2025/06/IMG-20250609-WA0444-1.jpg" },
    { img: "/uploads/2025/06/IMG-20250609-WA0447.jpg" }
  ];

  const moreEvents = [
    {
      img: "/uploads/2025/06/IMG-20250608-WA0035.jpg",
      caption: "Meeting with VC TNAU, Coimbatore, Tamilnadu, South India."
    },
    {
      img: "/uploads/2025/06/IMG-20250609-WA0448.jpg",
      caption: "Farm visit along with EBTI Team Ru0026D on Agar wood @ Assam"
    },
    {
      img: "/uploads/2025/07/WhatsApp-Image-2025-07-03-at-2.27.03-PM.jpeg",
      caption: "Green City Casuarina Research Farm, Rajapalayam"
    },
    {
      img: "/uploads/2025/06/IMG-20250609-WA0445.jpg",
      caption: "Germplasm collection of Agar wood"
    },
    {
      img: "/uploads/2025/06/IMG-20250609-WA0449.jpg",
      caption: "Conference on Conversion of Bamboo into Biochar @IFGTB, Coimbatore"
    },
    {
      img: "/uploads/2025/06/IMG-20250608-WA0034.jpg",
      caption: "Participated as a Delegate in Second International Conference on Biological control and Biocontrol contribution to one health @ Radassion Blu Atria, Bangalore, meeting with Dr.Shiroma Italy Forest FAO"
    },
    {
      img: "/uploads/2025/06/IMG-20250608-WA0037-1.jpg",
      caption: "Conversion of Agriculture Biomass into wealth"
    },
    {
      img: "/uploads/2025/06/IMG-20250609-WA0446.jpg",
      caption: "Field Visit @ Protected Cultivation of Cauliflower"
    },
    {
      img: "/uploads/2025/06/IMG-20250608-WA0036.jpg",
      caption: "Betelvine Farm Visit @ Trichy"
    },
    {
      img: "/uploads/2025/06/IMG-20250608-WA0038.jpg",
      caption: "Biofuels Germplasm collection on Jatropha"
    },
    {
      img: "/uploads/2025/07/WhatsApp-Image-2025-07-03-at-2.31.33-PM.jpeg",
      caption: "Meeting @ FC&RI, Mettupalayam with Spain People On Trunk Injection Technology in Agro-Forestry Crops"
    },
    {
      img: "/uploads/2025/07/7.jpeg",
      caption: "R&D on Sand wood with Trunk Injection Technology@ Aruppukottai"
    },
    {
      img: "/uploads/2025/07/WhatsApp-Image-2025-07-03-at-2.31.32-PM-2.jpeg",
      caption: "Meeting With Japanese on Sustainable Farming and Benefits of Biofertilizers, Biocontrol Agents, Biopesticides"
    },
    {
      img: "/uploads/2025/07/IMG-20250703-WA0515.jpg",
      caption: "R&D On Casuarina @IFGTB,Cbe in collaboration with Spanish Team along With Scientific Research Team"
    },
    {
      img: "/uploads/2025/07/IMG-20250703-WA0517.jpg",
      caption: "Discussion with Spain Peoples Reg uses of Neem oil In Plant Disease Management"
    },
    {
      img: "/uploads/2025/07/IMG-20250703-WA0518.jpg",
      caption: "Research Trail With Spanish People on Trunk Injection Technology to Control Whitel Fly in coconut"
    }
  ];

  return (
    <div className="about-page">
      {/* 1. Page Header (Optional spacing) */}
      <div className="about-header-space"></div>

      {/* 2. About Us Section (Matches Facilities.jsx) */}
      <section className="about-intro-section container">
        <div className="about-intro-grid">
          <div className="about-intro-left">
            <h5 className="about-intro-label">ABOUT US</h5>
            <h2 className="about-intro-title">WE GREEN CITY BIO-TECH ESTABLISHED IN 2019</h2>
            <h3 className="about-intro-subtitle">A Unit Of Ganapathy Group Of Companies</h3>
            
            <div className="about-play-box">
              <div className="play-btn-wrapper">
                <i className="fas fa-play"></i>
              </div>
              <div className="play-text">
                <p><strong>LATER CONVERTED TO PARTNERSHIP FIRM...</strong><br/>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
          </div>
          
          <div className="about-intro-right">
            <p className="about-intro-desc">
              We Green City Bio-Tech established in 2020-2021 from its parent company a 24-year-old Green World Biotech (GWB) established in 1992 with the main focus on Agriculture, Horticulture, Coconut, Spices & Herbs. We feel proud to introduce ourselves as one of the pioneers in the field of HI-TECH AGRIHORTI consultancy and services, the fine art of Natural Science combined with the Innovative Technology has brought great success in the field of Research and Development.
            </p>
            <button className="about-more-btn">More About</button>
          </div>
        </div>
      </section>

      {/* 3. Parallax Banner */}
      <section className="about-parallax-banner">
        <div className="about-parallax-overlay">
          <h2>We are Expert in Conversion of Waste to Wealth and Barren Land<br/>into Cultivable Land</h2>
        </div>
      </section>

      {/* 4. Certificate of Recognition / Poster (Corrected Image) */}
      <section className="about-certificate-section container text-center">
        <img 
          src="/uploads/2025/05/WhatsApp-Image-2025-05-16-at-2.27.57-PM.jpeg" 
          alt="Certificate of Recognition" 
          className="certificate-poster" 
        />
      </section>

      {/* 5. Stats Section with Parallax Background */}
      <section className="about-stats-section">
        <div className="about-stats-overlay">
          <div className="container text-center">
            <h2 className="stats-main-title">
              The Company Has Undertaken Research And Development In Various Fields, To Apply Scientific Knowledge To The Design, Development, Processing And Distribution Of Alternative <span>1 BIO-INPUTS (Bio-Fertilizer, Bio-Control Agents, Enriched Manures, Bio Fungicides, Bio-Pesticides</span>
            </h2>
            
            <div className="stats-grid">
              <div className="stat-item">
                <i className="fas fa-fan"></i>
                <h3>100+</h3>
                <p>Bio-Fertilizers</p>
              </div>
              <div className="stat-item">
                <i className="fas fa-apple-alt"></i>
                <h3>98+</h3>
                <p>Bio-Control agents</p>
              </div>
              <div className="stat-item">
                <i className="fas fa-money-bill-alt"></i>
                <h3>68+</h3>
                <p>Enriched Manures</p>
              </div>
              <div className="stat-item">
                <i className="fas fa-tint"></i>
                <h3>89+</h3>
                <p>Bio Fungicides &<br/>Pesticides</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Global Collaboration */}
      <section className="global-collab-section container text-center">
        <div className="collab-divider"></div>
        <h2>OUR GLOBAL COLLABORATION WITH</h2>
        <h2 className="collab-highlight">MONTE VIVO - SANJUKU INTERNATIONAL Australia.</h2>
      </section>

      {/* 7. Achievements & Event */}
      <section className="achievements-section container text-center">
        <h2 className="achievements-title">OUR ACHIEVEMENTS, AWARDS & RECOGNITIONS</h2>
        <div className="achievements-divider"></div>

        <div className="event-card">
          <img src="/uploads/2025/05/ACHIVEMENTS-2.jpeg" alt="Reverse Buyer-Seller Meet" className="event-main-img" />
          <div className="event-content">
            <p>Green City Bio-Tech Participated In The Reverse Buyer-Seller Meet Held On January 11th And 12th, 2025, At The Chennai Trade Centre, Where A Memorandum Of Understanding (MoU) Was Signed With Sanjuku International, Australia.</p>
            <p className="event-company-name">GREEN CITY BIO TECH</p>
            <button className="read-more-btn">READ MORE</button>
          </div>
        </div>
      </section>

      {/* 8. Board Memberships & Recent Events */}
      <section className="recent-events-section container">
        <h3 className="board-memberships-title">BOARD MEMBERSHIPS WITH INSTITUTES & UNIVERSITIES</h3>
        <h2 className="recent-events-title">RECENT <span>E</span>VENTS</h2>
        <p className="try-tastes">TRY OUR NEW TASTES</p>

        <div className="events-grid">
          {recentEvents.map((event, index) => (
            <div className="event-item" key={index}>
              <img src={event.img} alt={`Event ${index + 1}`} />
              <p className="event-caption">{event.caption}</p>
            </div>
          ))}
        </div>
        
        <h3 className="agri-expo-title">AGRI EXPO@ NATIONAL ENGINEERING COLLEGE, KOVILPATTI</h3>
        <div className="events-grid">
          {agriExpoEvents.map((event, index) => (
            <div className="event-item" key={index}>
              <img src={event.img} alt={`Agri Expo ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="events-grid" style={{marginTop: '30px'}}>
          {moreEvents.map((event, index) => (
            <div className="event-item" key={index}>
              <img src={event.img} alt={`Event More ${index + 1}`} />
              {event.caption && <p className="event-caption">{event.caption}</p>}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;
