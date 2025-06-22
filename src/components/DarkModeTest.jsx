import { useState, useEffect } from 'react';

// Hook personalizado para modo oscuro
const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Cargar tema desde localStorage o sistema
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  // Función para cambiar entre modos
  const toggleDarkMode = () => {
    const newMode = !darkMode;

    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    setDarkMode(newMode);
  };

  return [darkMode, toggleDarkMode];
};

export default function DarkModeTestPage() {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">🧪 Diagnóstico del Modo Oscuro</h1>

        <div className="mb-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">¿Está funcionando el modo oscuro?</h2>
          <p className="mb-4">
            Este texto debe aparecer blanco si estás en modo oscuro. El fondo debe ser gris oscuro.
          </p>
          <p>
            Si no ves cambios al hacer clic en el botón, hay un problema con la configuración de Tailwind o CSS.
          </p>
        </div>

        <button
          onClick={toggleDarkMode}
          className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg shadow-md transition transform hover:scale-105 focus:outline-none"
        >
          {darkMode ? 'Desactivar Modo Oscuro 🌞' : 'Activar Modo Oscuro 🌙'}
        </button>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Texto y Fondo</h3>
            <p className="text-black dark:text-white">
              Este texto cambia de color gracias a <code>dark:text-white</code>.
            </p>
            <div className="mt-4 h-16 w-full bg-white dark:bg-gray-700 rounded"></div>
          </div>

          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Botón con Hover</h3>
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-white rounded">
              Botón con hover
            </button>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Código HTML directo</h3>
          <p className="font-mono text-sm bg-gray-200 dark:bg-gray-700 p-4 rounded">
            document.documentElement.classList.<span className="text-green-500">add</span>(<span className="text-yellow-500">'dark'</span>);
          </p>
        </div>
      </div>
    </div>
  );
}