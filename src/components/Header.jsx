import { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Importamos Link
import ThemeToggle from './ThemeToggle';
import { useDarkMode } from '../hooks/useDarkMode';
import '../styles//Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <header className="header">
      <nav className="header-nav">
        {/* Logo */}
        <Link to="/" className="header-logo">PintuRapid</Link> {/* ✅ Ahora es un Link */}

        {/* Navegación desktop */}
        <div className="header-desktop-links">
          <Link to="/">Inicio</Link>
          <Link to="/gallery">Galería</Link>
          <Link to="/categories">Categorías</Link>
          <Link to="/about">Acerca de</Link>
          <Link to="/contact">Contacto</Link>
        </div>

        {/* Botones de acción */}
        <div className="header-actions">
          <ThemeToggle />
        </div>

        {/* Menú móvil - botón hamburguesa */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="hamburger"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="hamburger-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Menú móvil desplegable */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
          <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Galería</Link>
          <Link to="/categories" onClick={() => setIsMenuOpen(false)}>Categorías</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>Acerca de</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
        </div>
      )}
    </header>
  );
}