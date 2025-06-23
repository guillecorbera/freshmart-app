import { Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // ✅ Importamos

// Animaciones
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

// Components
import Categories from './components/Categories';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

// Páginas (puedes crear estas vistas si no existen)
// import Home from './pages/Home'; // Recomendado: crea un componente Home.jsx que incluya Hero, etc.
//import NotFound from './pages/NotFound'; // Opcional: página 404

export default function App() {

const location = useLocation();

  return (
    <div className="app-container">
      <ScrollToTop /> {/* ✅ Aquí activamos el scroll suave */}
      <Header />

      <main>
         <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
          <Route path="/" element={
              <PageTransition>
                <Hero />
              </PageTransition>
            } />
        
          <Route path="/gallery" element={
              <PageTransition>
                <Gallery />
              </PageTransition>
            } />
          <Route path="/categories" element={
              <PageTransition>
                <Categories />
              </PageTransition>
            } />
          <Route path="/testimonials" element={
              <PageTransition>
                <Testimonials />
              </PageTransition>
            } />
          <Route path="/about" element={
              <PageTransition>
                <About />
              </PageTransition>
            } />
          
          {/* Ruta comodín para 404 */}
         {/*  <Route path="*" element={<NotFound />} /> */}
        </Routes>
         </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
