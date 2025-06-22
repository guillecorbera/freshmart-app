// src/components/Hero.jsx
import { useState } from 'react';
import Gallery from './Gallery';
import '../styles/Hero.css';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [showGallery, setShowGallery] = useState(false);
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">
            Trabajos de Calidad y <span className="highlight">Rapidez</span>
          </h1>
          <p className="hero-description">
            Su proyecto, nuestro compromiso: colores vibrantes, resultados duraderos y espacios que reflejan estilo y profesionalidad.
          </p>

  <Link to="/gallery" className="hero-cta-link">
    Ver Galería de trabajos
  </Link>
        </div>
        <div className="hero-image">
          <img
            src="/images/istockphoto-508451296-612x612.jpg"
            alt="Painter worker"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
}