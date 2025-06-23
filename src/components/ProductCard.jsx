import { useState } from 'react';
import { detallesData } from '../data/detalles';
import '../styles/ProductCard.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

export default function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Buscar detalle del producto por ID
  const detalle = detallesData.find(d => d.id === product.id);

  // Imagen principal desde `products.js`
  const mainImage = product.image;

  // Array de imágenes desde `detalles.js` o fallback
  const images = detalle?.images || [mainImage || '/images/default.jpg'];

  // Validar que sea un array
  const validImages = Array.isArray(images) ? images : [images];

  // Funciones para navegar entre imágenes
  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? validImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === validImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Card del producto */}
      <div className="product-card" onClick={() => setIsModalOpen(true)}>
        <div className="product-image-container">
          <LazyLoadImage
            src={mainImage}
            alt={product.name}
            className="product-image"
            loading='lazy'
            effect="blur"
            onLoad={() => setIsLoaded(true)}
          />
          {!isLoaded && <div className="skeleton-loader"></div>}
        </div>
        <div className="product-info">
          <h3 className="product-title">{product.name}</h3>
        </div>
      </div>

      {/* Modal con PhotoView */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <PhotoProvider>
              <div className="carousel-container">
                {/* Botón anterior con SVG */}
                <button className="carousel-button prev" onClick={goToPrevious} aria-label="Imagen anterior">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="carousel-icon">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>

                {/* Imagen actual */}
                <PhotoView key={currentImageIndex} src={validImages[currentImageIndex]}>
                  <img
                    src={validImages[currentImageIndex]}
                    alt={`Imagen ${currentImageIndex + 1}`}
                    className="modal-image"
                  />
                </PhotoView>

                {/* Botón siguiente con SVG */}
                <button className="carousel-button next" onClick={goToNext} aria-label="Imagen siguiente">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="carousel-icon">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </PhotoProvider>

            {/* Texto personalizado encima de la imagen */}
            {detalle?.captions && detalle.captions[currentImageIndex] && (
              <div className="carousel-label">
                {detalle.captions[currentImageIndex]}
              </div>
            )}

            {/* Título y descripción */}
            <h2 className="modal-title">{product.name}</h2>
            <p className="modal-description">
              {detalle?.description || 'No hay descripción disponible.'}
            </p>

            {/* Botón de cierre */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="modal-close"
              aria-label="Cerrar modal"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}