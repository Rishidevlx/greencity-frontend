import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const heroImages = [
    "/uploads/2025/06/Grey-and-Green-Modern-Minimalist-Garden-Services-Banner.jpg",
    "/uploads/2025/05/image-1.jpg"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [
    "https://res.cloudinary.com/dmhytkejj/image/upload/v1786286186/achievements_slider/jfvvtwxcbzxzkbv2nsjv.png",
    "https://res.cloudinary.com/dmhytkejj/image/upload/v1786286187/achievements_slider/lehnxogqskmtxr6b7jpm.png",
    "https://res.cloudinary.com/dmhytkejj/image/upload/v1786286188/achievements_slider/ub66td5xpnhwyab8yf4g.png",
    "https://res.cloudinary.com/dmhytkejj/image/upload/v1786286189/achievements_slider/v74zqsjtxdspoygx7kl6.png",
    "https://res.cloudinary.com/dmhytkejj/image/upload/v1786286190/achievements_slider/hzjhbdkmut8s6gram4xd.png",
    "https://res.cloudinary.com/dmhytkejj/image/upload/v1786286191/achievements_slider/gltnnrjdx9ebl4sgxnwu.png",
    "https://res.cloudinary.com/dmhytkejj/image/upload/v1786286192/achievements_slider/by6szwbnxdufdqimufs3.png",
    "https://res.cloudinary.com/dmhytkejj/image/upload/v1786286194/achievements_slider/gelkv3ib1vnhhpwutrb5.png"
  ];

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
        const res = await fetch(import.meta.env.VITE_API_URL + '/api/services');
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

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_API_URL + '/api/products');
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            setProducts(data);
          }
        }
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="home-page">
      
      {/* 1. News Ticker Section */}
      <section className="news-ticker">
        <div className="ticker-wrapper">
          <div className="ticker-content">
            <span>Green City Biotech.... Farm is Yours, Care is Ours...</span>
            <span>Green City Biotech.... Farm is Yours, Care is Ours...</span>
            <span>Green City Biotech.... Farm is Yours, Care is Ours...</span>
          </div>
        </div>
      </section>

      {/* 2. Hero Image Slider */}
      <section className="hero-slider" style={{ position: 'relative' }}>
        <div className="slider-nav prev" onClick={prevSlide} style={{ position: 'absolute', top: '50%', left: '20px', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: '10px 15px', cursor: 'pointer', zIndex: 10, borderRadius: '5px' }}>
          <i className="fas fa-chevron-left"></i>
        </div>
        <img 
          src={heroImages[currentSlide]} 
          alt={`Green City Slider ${currentSlide + 1}`} 
          className="slider-image"
          style={{ width: '100%', height: 'auto', display: 'block', transition: 'opacity 0.5s ease-in-out' }}
        />
        <div className="slider-nav next" onClick={nextSlide} style={{ position: 'absolute', top: '50%', right: '20px', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: '10px 15px', cursor: 'pointer', zIndex: 10, borderRadius: '5px' }}>
          <i className="fas fa-chevron-right"></i>
        </div>
        <div className="hero-slider-dots" style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px', zIndex: 10 }}>
          {heroImages.map((_, index) => (
            <span 
              key={index} 
              onClick={() => setCurrentSlide(index)}
              style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: currentSlide === index ? '#82cc00' : 'rgba(255,255,255,0.7)', cursor: 'pointer', transition: 'background-color 0.3s' }}
            ></span>
          ))}
        </div>
      </section>

      {/* 3. About Us Section */}
      <section className="about-section container">
        <div className="about-grid mt-4">
          {/* Left Side */}
          <div className="about-left">
            <div className="section-subtitle">
              <span className="heading-line">About Us</span>
            </div>
            
            <div className="gradient-heading-box">
              <h2>WE GREEN CITY BIOTECH</h2>
              <h2>ESTABLISHED IN 2019</h2>
            </div>
            
            <h3 className="italic-heading">A Unit Of Ganapathy Group Of Companies</h3>
            
            <div className="partnership-box">
              <div className="play-icon">
                <i className="fas fa-play-circle"></i>
              </div>
              <div className="partnership-text">
                LATER CONVERTED TO PARTNESHIP FIRM...
              </div>
            </div>
          </div>
          
          {/* Right Side */}
          <div className="about-right">
            <p>
              We Green City Bio-Tech established in 2020-2021 from its parent company a 24-year-old Green World Biotech (GWB) established in 1992 with the main focus on Agriculture, Horticulture, Coconut, Spices & Herbs.
            </p>
            <p>
              We feel proud to introduce ourselves as one of the pioneers in the field of HI-TECH AGRIHORTI consultancy and services, the fine art of Natural Science combined with the Innovative Technology has brought great success in the field of Research and Development.
            </p>
            <Link to="/about-us" className="btn-solid-green">More About</Link>
          </div>
        </div>
      </section>

      {/* 4. Parallax Expert Banner */}
      <section className="expert-parallax mt-4">
        <div className="parallax-overlay"></div>
        <div className="parallax-content container">
          <h2>We are Expert in Conversion of Waste to Wealth and Barren Land into Cultivable Land</h2>
        </div>
      </section>

      {/* 5. Consultancy Services Grid */}
      <section className="services-section container">
        <div className="section-header text-center">
          <div className="section-subtitle">
            <span className="heading-line">WHAT WE DO</span>
          </div>
          <h2 className="services-title">CONSULTANCY SERVICES <span>& TECHNICAL SUPPORT</span></h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div 
                className="card-image bg-gray"
                style={service.img && !service.img.includes('placeholder') ? { backgroundImage: `url(${service.img})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
              ></div>
              <div className="card-content">
                <h3>{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5.5 Advertisement Banner */}
      <section className="banner-section container" style={{ marginTop: '40px', marginBottom: '40px' }}>
        <img 
          src="/uploads/2025/05/WhatsApp-Image-2025-05-16-at-2.27.57-PM.jpeg" 
          alt="Green City Biotech Banner" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} 
        />
      </section>

      {/* 6. Our Products Section */}
      <section className="products-section container">
        <div className="section-header text-center">
          <h2 className="products-title"><span className="green-text">OUR</span> <span className="light-green-text">PRODUCTS</span></h2>
        </div>

        {/* Top 3 Cards */}
        <div className="products-grid top-row">
          {products.slice(0, 3).map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-image" style={{backgroundImage: `url('${product.img}')`}}></div>
              <div className="product-content">
                <h3>{product.title}</h3>
                {product.subtext && <p>{product.subtext}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 4 Cards */}
        <div className="products-grid bottom-row">
          {products.slice(3, 7).map((product, index) => (
            <div className="product-card" key={index + 3}>
              <div className="product-image" style={{backgroundImage: `url('${product.img}')`}}></div>
              <div className="product-content">
                <h3>{product.title}</h3>
                {product.subtext && <p>{product.subtext}</p>}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-4">
          <Link to="/products" className="btn-solid-green">View All</Link>
        </div>
      </section>

      {/* 7. What We Did Section */}
      <section className="what-we-did-section container">
        <h2 className="what-we-did-title">WHAT WE DID......</h2>
        <p className="what-we-did-subtitle">RECENT PROJECTS..</p>
        
        <div className="projects-grid">
          {/* Row 1 */}
          <div className="project-item">
            <img src="/uploads/2025/05/1-1.jpg" alt="Before" />
            <h4>BEFORE</h4>
          </div>
          <div className="project-item">
            <img src="/uploads/2025/07/1-Copy.jpg" alt="After 1.0" />
            <h4>AFTER-1.O</h4>
          </div>
          <div className="project-item">
            <img src="/uploads/2025/07/1-Copy-2-1.jpg" alt="After Planting" />
            <h4>AFTER-Planting</h4>
          </div>

          {/* Row 2 */}
          <div className="project-item">
            <img src="/uploads/2025/07/NEW-1.jpg" alt="Before" />
            <h4>BEFORE</h4>
          </div>
          <div className="project-item">
            <img src="/uploads/2025/07/NEW-2.jpg" alt="After" />
            <h4>AFTER</h4>
          </div>
          <div className="project-item empty-item"></div>

          {/* Row 3 */}
          <div className="project-item">
            <img src="/uploads/2025/07/NEW-3.jpg" alt="Before" />
            <h4>BEFORE</h4>
          </div>
          <div className="project-item">
            <img src="/uploads/2025/07/NEW-4.jpg" alt="After Planting" />
            <h4>AFTER-Planting</h4>
          </div>
          <div className="project-item empty-item"></div>
        </div>
      </section>

      {/* 8. Stats Parallax Section */}
      <section className="stats-section">
        <div className="stats-overlay"></div>
        <div className="container stats-content">
          <h2 className="stats-heading">
            The Company Has Undertaken Research And Development In Various Fields, To Apply Scientific Knowledge To The Design, Development, Processing And Distribution Of Alternative <strong>1 BIO-INPUTS (Bio-Fertilizer, Bio-Control agents, Enriched Manures, Bio Fungicides, Bio-Pesticides</strong>
          </h2>
          
          <div className="stats-grid">
            <div className="stat-item">
              <i className="fas fa-fan stat-icon"></i>
              <h3>100+</h3>
              <p>Bio-Fertilizers</p>
            </div>
            <div className="stat-item">
              <i className="fas fa-apple-alt stat-icon"></i>
              <h3>98+</h3>
              <p>Bio-Control agents</p>
            </div>
            <div className="stat-item">
              <i className="fas fa-money-bill-wave stat-icon"></i>
              <h3>68+</h3>
              <p>Enriched Manures</p>
            </div>
            <div className="stat-item">
              <i className="fas fa-tint stat-icon"></i>
              <h3>89+</h3>
              <p>Bio Fungicides & Pesticides</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Global Collaboration Section */}
      <section className="collaboration-section container text-center">
        <h2 className="collab-title">OUR GLOBAL COLLABORATION WITH</h2>
        <h3 className="collab-subtitle">MONTE VIVO - SANJUKU INTERNATIONAL Australia.</h3>
        
        <div className="collab-slider">
          <div className="collab-nav prev"><i className="fas fa-chevron-left"></i></div>
          <div className="collab-logos">
            <img src="/uploads/2025/06/images.jpg" alt="Sanjuku International" className="collab-logo" />
            <img src="/uploads/2025/06/favicon-removebg-preview.png" alt="Monte Vivo" className="collab-logo" />
          </div>
          <div className="collab-nav next"><i className="fas fa-chevron-right"></i></div>
        </div>
        <div className="slider-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
        </div>
      </section>

      {/* 10. Achievements Section */}
      <section className="achievements-section container text-center">
        <h2 className="achievements-title">OUR ACHIEVEMENTS, AWARDS & RECOGNITIONS</h2>
        <div className="achievements-divider"></div>
        
        <div className="achievement-card">
          <img src="/uploads/2025/05/ACHIVEMENTS-2.jpeg" alt="Achievements" className="achievement-img" />
          
          <div className="achievement-details">
            <h3 className="achievement-text">
              Green City Bio-Tech participated in the Reverse Buyer-Seller Meet held on January 11th and 12th, 2025, at the Chennai Trade Centre, where a Memorandum of Understanding (MoU) was signed with Sanjuku International, Australia.
            </h3>
            <p className="achievement-author">GREEN CITY BIO TECH</p>
            <Link to="#" className="achievement-btn">READ MORE</Link>
          </div>
        </div>
      </section>

      {/* 11. Certifications Logos */}
      <section className="certifications-section container ">
        <div className="cert-logos-slider mt-4">
          <div className="cert-logos-track mt-4">
            {/* Duplicate the logos array twice to create a seamless infinite scroll effect */}
            {[...sliderImages, ...sliderImages].map((imgUrl, index) => (
              <img key={index} src={imgUrl} alt={`Certification Logo ${index + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* 12. Recent Events Section */}
      <section className="recent-events-section container mt-4">
        <div className="section-heading mt-4" style={{textAlign: 'center'}}>
          <h2>REC<span className="highlight-underline">ENT</span> EVENTS</h2>
          <p className="subtitle">TRY OUR NEW TASTES</p>
        </div>

        <div className="events-grid">
          {/* Row 1 */}
          <div className="event-item">
            <img src="/uploads/2025/06/IMG-20250608-WA0031.jpg" alt="Event" />
            <p className="event-caption" style={{color: '#66b5ff', fontSize: '14px', textAlign: 'left'}}>Participated as a Delegate in Second International Conference on Biological control and Biocontrol contribution to one health @ Radassion blu Atria, Bangalore, meeting with Dr.Johannes JKI Institute Greman</p>
          </div>
          <div className="event-item">
            <img src="/uploads/2025/06/IMG-20250608-WA0032-1.jpg" alt="Event" />
            <p className="event-caption" style={{color: '#66b5ff', fontSize: '14px', textAlign: 'left'}}>Delegate Participation with GIZ and Anna University on Benefits and usage GRE Tools with Farmers @ Rajapalayam.</p>
          </div>

          {/* Row 2 */}
          <div className="event-item">
            <img src="/uploads/2025/06/IMG-20250609-WA0441-1.jpg" alt="Event" />
            <p className="event-caption" style={{color: '#66b5ff', fontSize: '14px', textAlign: 'left'}}>Discussion with Virudhunagar Collectrate on Sustainable Farming and climate change</p>
          </div>
          <div className="event-item">
            <img src="/uploads/2025/06/IMG-20250609-WA0442.jpg" alt="Event" />
            <p className="event-caption" style={{color: '#66b5ff', fontSize: '14px', textAlign: 'left'}}>Meeting @ Collectorate with Entrepreneurs on Sustainable and Bio-inputs usage and helps in Climate change.</p>
          </div>
        </div>

        <div className="agri-expo-heading" style={{textAlign: 'center', color: '#8a8a8a', fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase', margin: '40px 0 20px 0'}}>
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
            <p className="event-caption" style={{color: '#66b5ff', fontSize: '14px', textAlign: 'left'}}>Meeting with VC TNAU, Coimbatore, Tamilnadu, South India.</p>
          </div>
          <div className="event-item">
            <img src="/uploads/2025/06/IMG-20250609-WA0444-1.jpg" alt="Agri Expo" />
          </div>

          {/* Row 5 */}
          <div className="event-item">
            <img src="/uploads/2025/06/IMG-20250609-WA0443.jpg" alt="Event" />
            <p className="event-caption" style={{color: '#66b5ff', fontSize: '14px', textAlign: 'left'}}>Green City Casuarina Research Farm, Rajapalayam</p>
          </div>
          <div className="event-item">
            <img src="/uploads/2025/06/IMG-20250609-WA0448.jpg" alt="Event" />
            <p className="event-caption" style={{color: '#66b5ff', fontSize: '14px', textAlign: 'left'}}>Farm visit along with EBTI Team Ru0026D on Agar wood @ Assam</p>
          </div>

          {/* Row 6 */}
          <div className="event-item">
            <img src="/uploads/2025/06/IMG-20250609-WA0445.jpg" alt="Event" />
            <p className="event-caption" style={{color: '#66b5ff', fontSize: '14px', textAlign: 'left'}}>Germplasm collection of Agar wood</p>
          </div>
          <div className="event-item">
            <img src="/uploads/2025/06/IMG-20250609-WA0449.jpg" alt="Event" />
            <p className="event-caption" style={{color: '#66b5ff', fontSize: '14px', textAlign: 'left'}}>Conference on Conversion of Bamboo into Biochar @IFGTB, Coimbatore</p>
          </div>

          {/* Row 7 */}
          <div className="event-item">
            <img src="/uploads/2025/06/IMG-20250608-WA0034.jpg" alt="Event" />
            <p className="event-caption" style={{color: '#66b5ff', fontSize: '14px', textAlign: 'left'}}>Participated as a Delegate in Second International Conference on Biological control and Biocontrol contribution to one health @ Radassion Blu Atria, Bangalore, meeting with Dr.Shiroma Italy Forest FAO</p>
          </div>
          <div className="event-item">
            <img src="/uploads/2025/06/IMG-20250608-WA0037-1.jpg" alt="Event" />
            <p className="event-caption" style={{color: '#66b5ff', fontSize: '14px', textAlign: 'left'}}>Conversion of Agriculture Biomass into wealth</p>
          </div>

          {/* Row 8 */}
          <div className="event-item">
            <img src="/uploads/2025/06/IMG-20250609-WA0446.jpg" alt="Event" />
            <p className="event-caption" style={{color: '#66b5ff', fontSize: '14px', textAlign: 'left'}}>Field Visit @ Protected Cultivation of Cauliflower</p>
          </div>
          <div className="event-item">
            <img src="/uploads/2025/06/IMG-20250608-WA0036.jpg" alt="Event" />
            <p className="event-caption" style={{color: '#66b5ff', fontSize: '14px', textAlign: 'left'}}>Betelvine Farm Visit @ Trichy</p>
          </div>

          {/* Row 9 */}
          <div className="event-item">
            <img src="/uploads/2025/06/IMG-20250608-WA0038.jpg" alt="Event" />
            <p className="event-caption" style={{color: '#66b5ff', fontSize: '14px', textAlign: 'left'}}>Biofuels Germplasm collection on Jatropha</p>
          </div>
          <div className="event-item">
            <img src="/uploads/2025/06/IMG-20250608-WA0036.jpg" alt="Event" />
            <p className="event-caption" style={{color: '#66b5ff', fontSize: '14px', textAlign: 'left'}}>Betelvine Farm Visit @ Trichy</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
