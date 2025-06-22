import { useEffect } from 'react';

export default function TestDarkMode() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 p-6">
      <h1 className="text-3xl font-bold">Modo Oscuro Activado</h1>
      <p className="mt-4">Este texto debería ser blanco sobre fondo negro.</p>
    </div>

  );
}