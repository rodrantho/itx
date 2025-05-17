
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Plans from '@/components/Plans';
import Contact from '@/components/Contact';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { handleInitialScroll } from '@/lib/scroll-utils';

const Index = () => {
  // Update document title
  useEffect(() => {
    document.title = "ITX - Tu equipo de IT, sin contratar uno | itxuy.com";
    
    // Manejar scroll inicial si hay un hash en la URL
    handleInitialScroll();
    
    // También manejar cambios en el hash mientras se está en la página
    const handleHashChange = () => {
      handleInitialScroll();
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Plans />
      <Contact />
      <Faq />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
