import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Cargar tema guardado o preferencia del sistema
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark'); // ✅ Aquí se aplica
      setDarkMode(true);
    }
  }, []);

  // Función para cambiar entre modos
  const toggleDarkMode = () => {
    const newMode = !darkMode;

    if (newMode) {
      document.documentElement.classList.add('dark'); // ✅ Aplicamos clase 'dark'
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark'); // ✅ Quitamos clase 'dark'
      localStorage.setItem('theme', 'light');
    }

    setDarkMode(newMode);
  };

  return [darkMode, toggleDarkMode];
};