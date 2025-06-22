// src/components/Gallery.jsx
import ProductCard from "./ProductCard";
import Products from "../data/products";
import '../styles/Gallery.css';

export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <h2 className="gallery-title">Galería de trabajos</h2>
        <div className="gallery-grid">
          {Products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}