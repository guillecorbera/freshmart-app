// src/components/About.jsx
import React from 'react';
import '../styles/About.css'; // Archivo CSS que crearemos

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Imagen */}
        <div className="about-image-wrapper">
          <img
            src="/images/istockphoto-1340466022-612x612.jpg"
            alt="About Pinturapid Team"
            className="about-image"
          />
        </div>

        {/* Contenido */}
        <div className="about-text-content">
          <h2 className="about-title">Acerca de PintuRapid</h2>
          <p className="about-paragraph">
            Fundada con una pasión por la transformación de espacios y la excelencia en acabados, PintuRapid tiene como objetivo hacer que renovar tu hogar o edificio sea una experiencia sencilla y satisfactoria.
            Nos asociamos con proveedores de pintura de confianza y utilizamos materiales de alta calidad para ofrecer resultados duraderos y estéticamente impecables.
            Nuestra misión es simple: brindar servicios de pintura profesional que combinen calidad, puntualidad y atención al detalle, haciendo que cada espacio luzca exactamente como lo imaginaste.
          </p>
          <p className="about-paragraph">
            Nuestra misión es simple: proporcionar soluciones de pintura eficientes y de alta durabilidad, empleando materiales de primera calidad y técnicas profesionales, para garantizar acabados resistentes y un servicio excepcional en la renovación de hogares y edificios.
          </p>
        </div>
      </div>
    </section>
  );
}