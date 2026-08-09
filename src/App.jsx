import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

import Services from './pages/Services';
import Products from './pages/Products';
import Facilities from './pages/Facilities';
import About from './pages/About';
import AboutCeo from './pages/AboutCeo';

import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main style={{ minHeight: '60vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about-ceo" element={<AboutCeo />} />
            <Route path="/our-services" element={<Services />} />
            <Route path="/our-facilities" element={<Facilities />} />
            <Route path="/bio-control-agents" element={<Products />} />
            <Route path="/products" element={<Products />} />
            <Route path="/bio-fertilizer" element={<Products />} />
            <Route path="/enriched-organic-manure" element={<Products />} />
            <Route path="/bio-pesticide" element={<Products />} />
            <Route path="/enrich-liquid-fertilizer" element={<Products />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
