// src/components/ThemeToggle.jsx
import { useDarkMode } from '../hooks/useDarkMode';
import { FaSun, FaMoon } from 'react-icons/fa'; // Iconos modernos
import { Tooltip } from 'react-tooltip';
import '../styles/ThemeToggle.css';

const ThemeToggle = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const tooltipText = darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';

  return (
    <div className="theme-toggle-wrapper" title={tooltipText}>
      <button
        onClick={toggleDarkMode}
        className="theme-toggle"
        aria-label={tooltipText}
      >
        <div className="icon-container">
          <FaSun className={`icon sun-icon ${darkMode ? 'fade-out' : 'fade-in'}`} />
          <FaMoon className={`icon moon-icon ${darkMode ? 'fade-in' : 'fade-out'}`} />
        </div>
      </button>
      <Tooltip id={tooltipText}/>
    </div>
  );
};
export default ThemeToggle;