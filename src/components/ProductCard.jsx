// src/components/ProductCard.jsx
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
              {validImages.map((img, index) => (
                <PhotoView key={index} src={img}>
                  <img
                    src={img}
                    alt={`Imagen ${index + 1}`}
                    className="modal-image"
                    style={{ display: index === currentImageIndex ? 'block' : 'none' }}
                  />
                </PhotoView>
              ))}
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