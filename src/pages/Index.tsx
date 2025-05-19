
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
import DiagnosticForm from '@/components/DiagnosticForm';
import { handleInitialScroll } from '@/lib/scroll-utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Video, Calendar } from 'lucide-react';

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
      <div className="container mx-auto py-12 flex flex-col items-center justify-center space-y-8">
        <h2 className="text-3xl text-center font-bold text-white mb-6">¿No sabés por dónde empezar?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <DiagnosticForm />
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-itx-green hover:bg-itx-green/90 tech-card">
                <Calendar className="h-5 w-5 mr-2" />
                Agendar Reunión
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Agendar una reunión</DialogTitle>
              </DialogHeader>
              {/* Aquí irá el calendario de Google cuando esté disponible */}
              <div className="h-96 bg-gray-800 flex items-center justify-center rounded-md">
                <p className="text-center text-gray-400">
                  El calendario de citas estará disponible pronto
                </p>
              </div>
            </DialogContent>
          </Dialog>
          
          <Button
            onClick={() => window.open("https://wa.me/+598123456789", "_blank")}
            className="bg-green-600 hover:bg-green-700 tech-card"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 mr-2"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.88 11.94l.14.23-1.1 4.03 4.13-1.08.22.13A7.94 7.94 0 0 0 20.05 12v-.05a7.85 7.85 0 0 0-2.44-5.63ZM12.05 19.8a6.6 6.6 0 0 1-3.36-.92l-.24-.15-2.53.67.67-2.46-.15-.25a6.6 6.6 0 0 1-1.01-3.5 6.59 6.59 0 0 1 6.62-6.58c1.77 0 3.43.69 4.68 1.94a6.58 6.58 0 0 1 1.95 4.68 6.62 6.62 0 0 1-6.63 6.58Z"
              />
              <path
                d="M16.35 13.94c-.17-.09-.99-.49-1.15-.55-.16-.06-.27-.09-.37.1-.1.18-.4.53-.5.65-.08.11-.17.12-.35.04-.17-.09-.72-.26-1.37-.84a5.15 5.15 0 0 1-.95-1.18c-.1-.17-.01-.26.07-.35.08-.1.18-.23.28-.35.09-.11.12-.19.18-.31.06-.13.03-.23-.01-.33-.04-.09-.37-.9-.51-1.24-.14-.33-.27-.27-.37-.28h-.32c-.1 0-.28.05-.43.23-.15.17-.55.53-.55 1.32 0 .79.58 1.54.67 1.67.08.12 1.16 1.77 2.81 2.48.4.16.7.26.94.34.4.13.76.11 1.05.09.32-.05.99-.4 1.13-.8.14-.38.14-.72.1-.79-.05-.07-.17-.11-.34-.19Z"
              />
            </svg>
            WhatsApp
          </Button>
        </div>
      </div>
      <Contact />
      <Faq />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
