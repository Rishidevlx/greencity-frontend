import React, { useState, useEffect } from 'react';
import './Products.css';
const Products = () => {
  const [products, setProducts] = useState([
    {
      img: "/uploads/2025/05/jeevamrutham.jpg",
      title: "Bio-Fertilizer",
      subtitle: "",
      subtext: "• Azospirillum • Phosopho Bacteria • Potassium Mobilizing Bacteria(KMB) • Zinc Solubilizing Bacteria (ZnSB) • Vesicular Arbuscular Mycorrhiza (VAM)"
    },
    {
      img: "/uploads/2025/05/bio-control-agents.jpg",
      title: "Bio-Control Agents",
      subtitle: "",
      subtext: "• Pseudomonas Fluorescens • Trichoderma Viride • Verticillum lacani • Bacillus substilis • Beauveria bassiana •"
    },
    {
      img: "/uploads/2025/06/IMG-20250609-WA0438-1.jpg",
      title: "Bio-Pesticide",
      subtitle: "",
      subtext: "Green City Bio-Tech"
    },
    {
      img: "/uploads/2025/05/enrichl-liquid-fertilizer-1.jpg",
      title: "Enriched Liquid & Fertilizer Organic Manure",
      subtitle: "",
      subtext: "• Fish Amino Acid • Amirtha Karaisal • Organic Growth Boosters • Pachakavya • Jeevamrutham • EM-Solution • Humic Acid •Vermicompost"
    },
    {
      img: "/uploads/2025/05/biochar.jpg",
      title: "Enriched Vermicompost",
      subtitle: "",
      subtext: "Green City Bio-Tech"
    },
    {
      img: "/uploads/2025/05/neem-oil.jpg",
      title: "EM Solution & Humic Acid",
      subtitle: "",
      subtext: "Green City Bio-Tech"
    },
    {
      img: "/uploads/2025/05/IMG-20250516-WA0454.jpg",
      title: "Neem Cake",
      subtitle: "",
      subtext: "Green City Bio-Tech"
    }
  ]);

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
  return (
    <div className="products-page">
      <div className="container text-center">
        <h2 className="products-title">
          <span>OUR</span> PRODUCTS
        </h2>
        <div className="products-grid-3">
          {products.slice(0, 3).map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-img-wrapper">
                <img src={product.img} alt={product.title} />
              </div>
              <div className="product-content">
                <h3>{product.title}</h3>
                <p>{product.subtext}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="products-grid-4">
          {products.slice(3).map((product, index) => (
            <div className="product-card" key={index + 3}>
              <div className="product-img-wrapper">
                <img src={product.img} alt={product.title} />
              </div>
              <div className="product-content">
                <h3>{product.title}</h3>
                <p>{product.subtext}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-wrapper">
          <button className="view-all-btn">View All</button>
        </div>
      </div>
    </div>
  );
};
export default Products;