import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [researchFarms, setResearchFarms] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [recentEvents, setRecentEvents] = useState([]);

  useEffect(() => {
    const fetchResearchFarms = async () => {
      try {
        const res = await fetch((import.meta.env.VITE_API_URL || '') + '/api/research-farm');
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            setResearchFarms(data);
          }
        }
      } catch (err) {
        console.error("Failed to fetch research farm images:", err);
      }
    };

    const fetchAchievements = async () => {
      try {
        const res = await fetch((import.meta.env.VITE_API_URL || '') + '/api/achievements');
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) setAchievements(data);
        }
      } catch (err) {
        console.error("Failed to fetch achievements:", err);
      }
    };

    const fetchRecentEvents = async () => {
      try {
        const res = await fetch((import.meta.env.VITE_API_URL || '') + '/api/recent-events');
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) setRecentEvents(data);
        }
      } catch (err) {
        console.error("Failed to fetch recent events:", err);
      }
    };

    fetchResearchFarms();
    fetchAchievements();
    fetchRecentEvents();
  }, []);

  return (
    <div className="gallery-page">
      {/* 1. Header Spacer */}
      <div className="gallery-header-space"></div>

      {/* 2. Top Image Strip */}
      <section className="gallery-top-strip">
        <div className="strip-images">
          <img src="/uploads/photo-gallery/thumb/Project-1-5.jpg" alt="Gallery 1" />
          <img src="/uploads/photo-gallery/thumb/Project-1-1.jpg" alt="Gallery 2" />
          <img src="/uploads/photo-gallery/thumb/Project-1-7.jpg" alt="Gallery 3" />
          <img src="/uploads/photo-gallery/thumb/Project-1-11.jpg" alt="Gallery 4" />
          <img src="/uploads/photo-gallery/thumb/Project-1-10.jpg" alt="Gallery 5" />
        </div>
      </section>

      {/* 3. Section 1: Our Research Farms */}
      <section className="research-farms-section container">
        <div className="section-heading">
          <h2>OUR <span className="highlight-underline">RESEARCH FARMS...</span></h2>
          <p className="subtitle">RECENT PROJECTS..</p>
        </div>

        {/* Project Images */}
        <div className="projects-container">
          {/* Row 1: 3 Images */}
          <div className="project-row row-3-cols">
            <div className="project-img-box">
              <img src="/uploads/2025/05/1-1.jpg" alt="Before" />
            </div>
            <div className="project-img-box">
              <img src="/uploads/2025/06/1-Copy.jpg" alt="After 1.0" />
            </div>
            <div className="project-img-box">
              <img src="/uploads/2025/06/1-Copy-2.jpg" alt="After Planting" />
            </div>
          </div>
  
          {/* Row 2: 2 Images */}
          <div className="project-row row-2-cols">
            <div className="project-img-box">
              <img src="/uploads/2025/05/2-1.jpg" alt="Before" />
            </div>
            <div className="project-img-box">
              <img src="/uploads/2025/05/2-1-1.jpg" alt="After" />
            </div>
          </div>
  
          {/* Row 3: 2 Images */}
          <div className="project-row row-2-cols">
            <div className="project-img-box">
              <img src="/uploads/2025/05/2-2.jpg" alt="Before" />
            </div>
            <div className="project-img-box">
              <img src="/uploads/2025/05/2-3.jpg" alt="After Planting" />
            </div>
          </div>
  
          {/* Row 4: 2 Images */}
          <div className="project-row row-2-cols">
            <div className="project-img-box">
              <img src="/uploads/2025/05/3-1.jpg" alt="Before" />
            </div>
            <div className="project-img-box">
              <img src="/uploads/2025/05/3-2.jpg" alt="After Planting" />
            </div>
          </div>
  
          {/* Row 5: 2 Images */}
          <div className="project-row row-2-cols">
            <div className="project-img-box">
              <img src="/uploads/2025/05/4-1.jpg" alt="Before" />
            </div>
            <div className="project-img-box">
              <img src="/uploads/2025/05/4-3.jpg" alt="After Planting" />
            </div>
          </div>
          
          {/* Row 6: 2 Images */}
          <div className="project-row row-2-cols">
            <div className="project-img-box">
              <img src="/uploads/2025/05/4-4.jpg" alt="Before" />
            </div>
            <div className="project-img-box">
              <img src="/uploads/2025/05/Slide10.jpg" alt="After Planting" />
            </div>
          </div>

          {/* Dynamically Loaded Project Images (Newly added from Admin Panel) */}
          {researchFarms.length > 0 && (
            <div className="project-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', width: '100%', marginTop: '20px' }}>
              {researchFarms.map((item, index) => (
                <div className="project-img-box" key={item._id || index} style={{ marginBottom: 0 }}>
                  <img src={item.img} alt={`Research Farm ${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* 4. Section 2: Green City Biotech */}
      <section className="green-city-section container">
        <div className="section-heading">
          <h2>GRE<span className="highlight-underline">EN CITY </span>BIOTECH</h2>
          <p className="subtitle">TRY OUR NEW TASTES</p>
        </div>

        <div className="projects-container">
          {/* Row 1: 2 Images */}
          <div className="project-row row-2-cols">
            <div className="project-img-box">
              <img src="/uploads/2025/05/5-1.jpg" alt="Farm Pond" />
              <p className="img-label" style={{position: 'absolute', bottom: '15px', left: '0', width: '100%', color: '#e52034', margin: 0, textShadow: '1px 1px 2px #fff'}}>FARM POND</p>
            </div>
            <div className="project-img-box">
              <img src="/uploads/2025/05/6-1.jpg" alt="Field" />
            </div>
          </div>

          {/* Row 2: 3 Images */}
          <div className="project-row row-3-cols">
            <div className="project-img-box">
              <img src="/uploads/2025/05/Slide13.jpg" alt="Gallery" />
            </div>
            <div className="project-img-box">
              <img src="/uploads/2025/05/8-1.jpg" alt="Gallery" />
            </div>
            <div className="project-img-box">
              <img src="/uploads/2025/05/9-1.jpg" alt="Gallery" />
            </div>
          </div>

          {/* Row 3: 3 Images */}
          <div className="project-row row-3-cols">
            <div className="project-img-box">
              <img src="/uploads/2025/05/Slide16.jpg" alt="Gallery" />
            </div>
            <div className="project-img-box">
              <img src="/uploads/2025/05/11-1-1.jpg" alt="Gallery" />
            </div>
            <div className="project-img-box">
              <img src="/uploads/2025/05/13-1.jpg" alt="Gallery" />
            </div>
          </div>

          {/* Row 4: 3 Images */}
          {/* <div className="project-row row-3-cols">
            <div className="project-img-box">
              <img src="/uploads/2025/05/ACHIVEMENTS-1.jpeg" alt="Gallery" />
            </div>
            <div className="project-img-box">
              <img src="/uploads/2025/05/ACHIVEMENTS-2.jpeg" alt="Gallery" />
            </div>
            <div className="project-img-box">
              <img src="/uploads/2025/06/IMG-20250608-WA0031.jpg" alt="Gallery" />
            </div>
          </div> */}

          {/* Row 5: 1 Image */}
          {/* <div className="project-row row-3-cols">
            <div className="project-img-box">
              <img src="/uploads/2025/06/IMG-20250608-WA0032-1.jpg" alt="Gallery" />
            </div>
          </div> */}
        </div>
      </section>

      {/* 5. Section 3: Achievements */}
      <section className="achievements-section container">
        <div className="section-heading" style={{textAlign: 'center', marginBottom: '50px'}}>
          <h2 style={{color: '#82cc00', paddingBottom: '10px'}} className="achievements-heading">OUR ACHIEVEMENTS, AWARDS & RECOGNITIONS</h2>
          <span style={{display: 'inline-block', width: '50px', height: '3px', backgroundColor: '#fdbf8e'}}></span>
        </div>

        <div className="achievements-grid">
          {/* Card 1 */}
          <div className="achievement-card">
            <div className="achievement-img">
              <img src="/uploads/2025/05/ACHIVEMENTS-1.jpeg" alt="Achievement 1" />
            </div>
            <div className="achievement-content">
              <p className="achievement-desc">Waste To Wealth Conversion Was Recognized And Awarded A Grant From By The Department Of Science And Technology (DST), Nidhi Prayas, Government Of India, For Its Potential Impact On Sustainable Agriculture And Waste Management.</p>
              <p className="achievement-company">GREEN CITY BIO TECH</p>
              <button className="read-more-btn">READ MORE</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="achievement-card">
            <div className="achievement-img">
              <img src="/uploads/2025/05/ACHIVEMENTS-2.jpeg" alt="Achievement 2" />
            </div>
            <div className="achievement-content">
              <p className="achievement-desc">Green City Bio-Tech Participated In The Reverse Buyer-Seller Meet Held On January 11th And 12th, 2025, At The Chennai Trade Centre, Where A Memorandum Of Understanding (MoU) Was Signed With Sanjuku International, Australia.</p>
              <p className="achievement-company">GREEN CITY BIO TECH</p>
              <button className="read-more-btn">READ MORE</button>
            </div>
          </div>
        </div>

        {/* Dynamically Loaded Achievements (Newly added from Admin Panel) */}
        {achievements.length > 0 && (
          <div className="achievements-grid" style={{ marginTop: '30px' }}>
            {achievements.map((item, index) => (
              <div className="achievement-card" key={item._id || index}>
                <div className="achievement-img">
                  <img src={item.img} alt="Achievement" />
                </div>
                <div className="achievement-content">
                  <p className="achievement-desc">{item.content}</p>
                  <p className="achievement-company">GREEN CITY BIO TECH</p>
                  <button className="read-more-btn">READ MORE</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 6. Section 4: Recent Events */}
      <section className="recent-events-section container">
        <div className="section-heading">
          <h2>REC<span className="highlight-underline">ENT</span> EVENTS</h2>
          <p className="subtitle">TRY OUR NEW TASTES</p>
        </div>

        <div className="events-grid">
          {/* Row 1 */}
          <div className="event-item">
            <img src="/uploads/2025/06/IMG-20250608-WA0031.jpg" alt="Event" />
            <p className="event-caption">Participated as a Delegate in Second International Conference on Biological control and Biocontrol contribution to one health @ Radassion blu Atria, Bangalore, meeting with Dr.Johannes JKI Institute Greman</p>
          </div>
          <div className="event-item">
            <img src="/uploads/2025/06/IMG-20250608-WA0032-1.jpg" alt="Event" />
            <p className="event-caption">Delegate Participation with GIZ and Anna University on Benefits and usage GRE Tools with Farmers @ Rajapalayam.</p>
          </div>

          {/* Row 2 */}
          <div className="event-item">
            <img src="/uploads/2025/06/IMG-20250609-WA0441-1.jpg" alt="Event" />
            <p className="event-caption">Discussion with Virudhunagar Collectrate on Sustainable Farming and climate change</p>
          </div>
          <div className="event-item">
            <img src="/uploads/2025/06/IMG-20250609-WA0442.jpg" alt="Event" />
            <p className="event-caption">Meeting @ Collectorate with Entrepreneurs on Sustainable and Bio-inputs usage and helps in Climate change.</p>
          </div>
        </div>

        <div className="agri-expo-heading">
          <p>AGRI EXPO@ NATIONAL ENGINEERING COLLEGE, KOVILPATTI</p>
        </div>

        <div className="events-grid">
          {/* Row 3 */}
          <div className="event-item">
            <img src="/uploads/2025/06/IMG-20250608-WA0035.jpg" alt="Agri Expo" />
          </div>
          <div className="event-item">
            <img src="/uploads/2025/06/IMG-20250609-WA0444-1.jpg" alt="Agri Expo" />
          </div>

          {/* Row 4 */}
          <div className="event-item">
            <img src="/uploads/2025/06/IMG-20250609-WA0447.jpg" alt="Event" />
            <p className="event-caption">Meeting with VC TNAU, Coimbatore, Tamilnadu, South India.</p>
          </div>

          {/* Row 5 */}
          <div className="event-item">
            <img src="/uploads/2025/06/IMG-20250609-WA0443.jpg" alt="Event" />
            <p className="event-caption">Green City Casuarina Research Farm, Rajapalayam</p>
          </div>
          <div className="event-item">
            <img src="/uploads/2025/06/IMG-20250609-WA0448.jpg" alt="Event" />
            <p className="event-caption">Farm visit along with EBTI Team Ru0026D on Agar wood @ Assam</p>
          </div>

          {/* Row 6 */}
          <div className="event-item">
            <img src="/uploads/2025/06/IMG-20250609-WA0445.jpg" alt="Event" />
            <p className="event-caption">Germplasm collection of Agar wood</p>
          </div>
          <div className="event-item">
            <img src="/uploads/2025/06/IMG-20250609-WA0449.jpg" alt="Event" />
            <p className="event-caption">Conference on Conversion of Bamboo into Biochar @IFGTB, Coimbatore</p>
          </div>

          {/* Row 7 */}
          <div className="event-item">
            <img src="/uploads/2025/06/IMG-20250608-WA0034.jpg" alt="Event" />
            <p className="event-caption">Participated as a Delegate in Second International Conference on Biological control and Biocontrol contribution to one health @ Radassion Blu Atria, Bangalore, meeting with Dr.Shiroma Italy Forest FAO</p>
          </div>
          <div className="event-item">
            <img src="/uploads/2025/06/IMG-20250608-WA0037-1.jpg" alt="Event" />
            <p className="event-caption">Conversion of Agriculture Biomass into wealth</p>
          </div>

          {/* Row 8 */}
          <div className="event-item">
            <img src="/uploads/2025/06/IMG-20250609-WA0446.jpg" alt="Event" />
            <p className="event-caption">Field Visit @ Protected Cultivation of Cauliflower</p>
          </div>
          <div className="event-item">
            <img src="/uploads/2025/06/IMG-20250608-WA0036.jpg" alt="Event" />
            <p className="event-caption">Betelvine Farm Visit @ Trichy</p>
          </div>

          {/* Row 9 */}
          <div className="event-item">
            <img src="/uploads/2025/06/IMG-20250608-WA0038.jpg" alt="Event" />
            <p className="event-caption">Biofuels Germplasm collection on Jatropha</p>
          </div>
        </div>

        {/* Dynamically Loaded Recent Events (Newly added from Admin Panel) */}
        {recentEvents.length > 0 && (
          <div className="events-grid" style={{ marginTop: '30px' }}>
            {recentEvents.map((item, index) => (
              <div className="event-item" key={item._id || index}>
                <img src={item.img} alt="Event" />
                <p className="event-caption">{item.content}</p>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
};

export default Gallery;
