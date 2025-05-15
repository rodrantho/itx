
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

const Index = () => {
  // Update document title
  useEffect(() => {
    document.title = "ITX - Tu equipo de IT, sin contratar uno | itxuy.com";
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
