import React from 'react';
import './AboutCeo.css';

const AboutCeo = () => {
  return (
    <div className="about-ceo-page">
      {/* 1. Header Spacer */}
      <div className="about-ceo-header-space"></div>

      {/* 2. CEO Intro Section */}
      <section className="ceo-intro-section container">
        <div className="ceo-intro-grid">
          <div className="ceo-intro-left">
            <img 
              src="/uploads/2025/05/CONFERENCES-SEMINARS-6.jpeg" 
              alt="Santhosh Ganapathy GS" 
              className="ceo-main-img" 
            />
          </div>
          <div className="ceo-intro-right">
            <h2>SANTHOSH GANAPATHY GS</h2>
            <h3>CEO</h3>
            <h2 className="company-name">GREEN CITY BIOTECH</h2>
            
            <div className="ceo-stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            
            <div className="ceo-divider">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Technical Director Section */}
      <section className="technical-director-section container">
        <div className="td-grid">
          <div className="td-left">
            <h2>TECHNICAL DIRECTOR</h2>
          </div>
          <div className="td-right">
            <img 
              src="/uploads/2025/05/CONFERENCES-SEMINARS-8.jpeg" 
              alt="Make Locally, Sell Globally" 
              className="td-poster-img"
            />
          </div>
        </div>
      </section>

      {/* 4. CEO Details Section */}
      <section className="ceo-details-section container">
        <div className="details-grid">
          <div className="details-left">
            <img 
              src="/uploads/2025/05/CONFERENCES-SEMINARS-7.jpeg" 
              alt="CEO and Partner" 
              className="details-img"
            />
            <a href="#" className="read-more-link">Read More &rarr;</a>
          </div>
          <div className="details-right">
            <div className="since-box">
              <span>SINCE 2019</span>
            </div>
            <h2 className="details-company-name">GREEN CITY BIO-TECH</h2>
            <h2 className="details-ceo-title">CEO</h2>
            
            <div className="details-text-box">
              <p>
                I am an accomplished CEO of Green City Bio-Tech and Technical
                Director at EBTI with extensive experience in leading agricultural
                innovation and technical operations, Providing strategic leadership to
                enhance performance efficiency, guiding the technical team in improving
                the quality of agricultural practices and outputs. I had played a vital role
                in implementing high-yielding varieties, sustainable farm management
                practices, and bio-based agricultural solutions including Bio-fertilizers,
                Bio-control agents, Bio-pesticides, Bio-enriched fertilizers and neem-based
                products. I am also a pioneer in integrating advanced agronomic
                techniques, and had led initiatives in soil and water testing, crop
                management using bio-organic inputs, and has significantly contributed to
                farmer training and extension activities under various central and state
                government schemes. I had also collaborated with international experts
                and traveled across India, Singapore and Sri Lanka for technocommercial activities in Agri-horticulture and energy crops. I have
                received specialized training in vertical farming and microalgae bioengineering from Dr. Joel Cuello of the University of Arizona. Green City
                Bio-Tech started in 2020. Later, it became a partnership firm and was
                registered in 2022-2023. I lead a company committed to sustainable
                agriculture through consultancy and innovative solutions. Green City BioTech specializes in converting agricultural waste into value-added
                products, emphasizing soil health, environmental sustainability, and the
                development of alternative bio-inputs. With a strong background in
                research and development, I constantly continue to pioneer advancements
                in agronomy, horticulture, and medicinal and aromatic crops.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ceo-parallax-banner mt-4">
        <div className="ceo-parallax-overlay">
          <h2>GREEN CITY BIO-TECH</h2>
          <p>GREEN CITY BIO-TEC</p>
          <button className="ceo-banner-btn">Read More</button>
        </div>
      </section>

      {/* 5. Polyhouse Section */}
      <section className="polyhouse-section container">
        <div className="polyhouse-grid ">
          <div className="polyhouse-left mt-4">
            <img src="/uploads/2025/05/image-1.jpg" alt="Polyhouse" />
            <a href="#" className="read-more-link-orange">Read More &rarr;</a>
          </div>
          <div className="polyhouse-right">
            <h2>GREEN CITY BIO TECH</h2>
          </div>
        </div>
      </section>
      

      {/* 6. Our Work Section */}
      <section className="our-work-section container">
        <h2>OUR WORK</h2>
        <div className="work-grid">
          <div className="work-item">
            <img src="/uploads/2025/05/11-1.jpg" alt="Project 1" />
            <div className="work-overlay">
              <h3>Project 4</h3>
            </div>
          </div>
          <div className="work-item">
            <img src="/uploads/2025/05/38-1.jpg" alt="Project 2" />
            <div className="work-overlay">
              <h3>Project 4</h3>
            </div>
          </div>
          <div className="work-item">
            <img src="/uploads/2025/05/43.jpg" alt="Project 3" />
            <div className="work-overlay">
              <h3>Project 1</h3>
            </div>
          </div>
          <div className="work-item">
            <img src="/uploads/2025/05/40-1.jpg" alt="Project 4" />
            <div className="work-overlay">
              <h3>Project 2</h3>
            </div>
          </div>
        </div>
      </section>
      {/* 7. Bottom Parallax Banner */}

    </div>
  );
};

export default AboutCeo;
