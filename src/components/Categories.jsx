// src/components/Categories.jsx
import React, { useState, useEffect, useRef } from 'react';

// Importar imágenes locales
import resintImg from '../assets/resint.jpg';
import resextImg from '../assets/resext.jpg';
import indusImg from '../assets/indus.jpg';
import decorImg from '../assets/decor.jpg';
import imperImg from '../assets/imper.jpg';
import reparImg from '../assets/repar.jpg';

import '../styles/Categories.css'; // Archivo CSS que crearemos ahora

export default function Categories() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const modalRef = useRef(null); // Referencia al modal

  const categories = [
    {
      id: 'resint',
      name: 'Pintura Residencial Interior',
      image: resintImg,
      description: 'Incluye trabajos de pintura en paredes, techos, molduras y detalles decorativos dentro de viviendas particulares.'
    },
    {
      id: 'resext',
      name: 'Pintura Residencial Exterior',
      image: resextImg,
      description: 'Cubre pintura en fachadas, muros exteriores, ventanas, puertas y otros elementos visibles del hogar.'
    },
    {
      id: 'indus',
      name: 'Pintura Comercial e Industrial',
      image: indusImg,
      description: 'Aplicada en oficinas, centros comerciales, bodegas, naves industriales y otros espacios dedicados a actividades laborales o empresariales.'
    },
    {
      id: 'decor',
      name: 'Pintura Decorativa y Diseño de Interiores',
      image: decorImg,
      description: 'Incluye técnicas especiales como texturizados, estampados, pintura en relieve, colores combinados y otros acabados estéticos.'
    },
    {
      id: 'imper',
      name: 'Impermeabilización y Protecciones superficiales',
      image: imperImg,
      description: 'Trabajos relacionados con la aplicación de productos que protegen las superficies contra la humedad, el clima y el desgaste.'
    },
    {
      id: 'repar',
      name: 'Reparación y Mantenimiento de Superficies Pintadas',
      image: reparImg,
      description: 'Incluye lijado, retoques, eliminación de grietas, humedad y restauración de áreas dañadas antes de volver a pintar.'
    }
  ];

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  const handleCloseModal = () => {
    setSelectedCategoryId(null);
  };

  // Cerrar modal al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        selectedCategoryId &&
        modalRef.current &&
        !modalRef.current.contains(e.target)
      ) {
        handleCloseModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedCategoryId]);

  const selectedCategory = categories.find(c => c.id === selectedCategoryId);

  return (
    <section id="categories" className="categories-section">
      <div className="categories-container">
        <h2 className="categories-title">Categorías</h2>

        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-item">
              <button
                type="button"
                onClick={() => handleCategoryClick(category.id)}
                className="category-button"
              >
                <img
                  src={category.image}
                  alt={`${category.name}`}
                  className="category-image"
                />
                <span className="category-name">{category.name}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCategoryId && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div
            ref={modalRef}
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={handleCloseModal} aria-label="Cerrar">×</button>

            <div className="modal-image-wrapper">
              <img
                src={selectedCategory.image}
                alt={selectedCategory.name}
                className="modal-image"
              />
            </div>

            <h3 className="modal-title">{selectedCategory.name}</h3>
            <p className="modal-description">{selectedCategory.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}