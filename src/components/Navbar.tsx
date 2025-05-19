
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Calendar } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { scrollToSection } from '@/lib/scroll-utils';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavigation = (sectionId: string) => {
    // Cerrar el menú móvil si está abierto
    closeMenu();
    
    // Si ya estamos en la página principal, solo hacer scroll a la sección
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      // Si estamos en otra página, navegar a la página principal con el hash
      navigate(`/#${sectionId}`);
    }
  };
  
  const navigateTo = (path: string) => {
    closeMenu();
    navigate(path);
  };

  const navLinks = [
    { name: 'Servicios', id: 'servicios' },
    { name: 'Sobre ITX', id: 'sobre-nosotros' },
    { name: 'Planes', id: 'planes' },
    { name: 'Contacto', id: 'contacto' },
    { name: 'FAQ', id: 'faq' },
  ];

  const contactOptions = [
    { 
      label: "WhatsApp",
      icon: <svg viewBox="0 0 24 24" className="h-4 w-4 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.88 11.94l.14.23-1.1 4.03 4.13-1.08.22.13A7.94 7.94 0 0 0 20.05 12v-.05a7.85 7.85 0 0 0-2.44-5.63ZM12.05 19.8a6.6 6.6 0 0 1-3.36-.92l-.24-.15-2.53.67.67-2.46-.15-.25a6.6 6.6 0 0 1-1.01-3.5 6.59 6.59 0 0 1 6.62-6.58c1.77 0 3.43.69 4.68 1.94a6.58 6.58 0 0 1 1.95 4.68 6.62 6.62 0 0 1-6.63 6.58Z"/>
        <path d="M16.35 13.94c-.17-.09-.99-.49-1.15-.55-.16-.06-.27-.09-.37.1-.1.18-.4.53-.5.65-.08.11-.17.12-.35.04-.17-.09-.72-.26-1.37-.84a5.15 5.15 0 0 1-.95-1.18c-.1-.17-.01-.26.07-.35.08-.1.18-.23.28-.35.09-.11.12-.19.18-.31.06-.13.03-.23-.01-.33-.04-.09-.37-.9-.51-1.24-.14-.33-.27-.27-.37-.28h-.32c-.1 0-.28.05-.43.23-.15.17-.55.53-.55 1.32 0 .79.58 1.54.67 1.67.08.12 1.16 1.77 2.81 2.48.4.16.7.26.94.34.4.13.76.11 1.05.09.32-.05.99-.4 1.13-.8.14-.38.14-.72.1-.79-.05-.07-.17-.11-.34-.19Z"/>
      </svg>,
      action: () => window.open("https://wa.me/+598604031", "_blank")
    },
    { 
      label: "Agendar una meet",
      icon: <Calendar className="h-4 w-4 mr-2" />,
      action: () => {} // Se maneja con el diálogo
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
          className="flex items-center space-x-2"
        >
          <span className="text-xl font-bold text-itx-blue">ITX</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <button 
              key={link.name}
              onClick={() => handleNavigation(link.id)}
              className="text-sm text-itx-dark hover:text-itx-blue transition-colors"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => navigateTo('/blog')}
            className="text-sm text-itx-dark hover:text-itx-blue transition-colors"
          >
            Blog
          </button>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                size="sm"
                className="bg-itx-blue hover:bg-itx-blue/90"
              >
                Agendá una consulta
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Elegí un método de contacto</DialogTitle>
                <DialogDescription>
                  Selecciona cómo te gustaría coordinar la consulta con nosotros
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                {contactOptions.map((option, index) => (
                  index === 1 ? (
                    <Dialog key={option.label}>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full flex items-center justify-center">
                          {option.icon}
                          {option.label}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Agendar una meet</DialogTitle>
                        </DialogHeader>
                        {/* Aquí irá el calendario de Google cuando esté disponible */}
                        <div className="h-96 bg-gray-100 dark:bg-gray-800 flex items-center justify-center rounded-md">
                          <p className="text-center text-gray-500 dark:text-gray-400">
                            El calendario de citas estará disponible pronto
                          </p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <Button
                      key={option.label}
                      variant="outline"
                      onClick={option.action}
                      className="w-full flex items-center justify-center"
                    >
                      {option.icon}
                      {option.label}
                    </Button>
                  )
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-itx-dark"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.id)}
                className="text-sm py-2 text-itx-dark hover:text-itx-blue transition-colors text-left"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => navigateTo('/blog')}
              className="text-sm py-2 text-itx-dark hover:text-itx-blue transition-colors text-left"
            >
              Blog
            </button>
            
            <div className="pt-2 grid grid-cols-1 gap-2">
              <Button
                onClick={() => window.open("https://wa.me/+598604031", "_blank")}
                className="w-full flex items-center justify-center bg-green-600 hover:bg-green-700"
                size="sm"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.88 11.94l.14.23-1.1 4.03 4.13-1.08.22.13A7.94 7.94 0 0 0 20.05 12v-.05a7.85 7.85 0 0 0-2.44-5.63ZM12.05 19.8a6.6 6.6 0 0 1-3.36-.92l-.24-.15-2.53.67.67-2.46-.15-.25a6.6 6.6 0 0 1-1.01-3.5 6.59 6.59 0 0 1 6.62-6.58c1.77 0 3.43.69 4.68 1.94a6.58 6.58 0 0 1 1.95 4.68 6.62 6.62 0 0 1-6.63 6.58Z"/>
                  <path d="M16.35 13.94c-.17-.09-.99-.49-1.15-.55-.16-.06-.27-.09-.37.1-.1.18-.4.53-.5.65-.08.11-.17.12-.35.04-.17-.09-.72-.26-1.37-.84a5.15 5.15 0 0 1-.95-1.18c-.1-.17-.01-.26.07-.35.08-.1.18-.23.28-.35.09-.11.12-.19.18-.31.06-.13.03-.23-.01-.33-.04-.09-.37-.9-.51-1.24-.14-.33-.27-.27-.37-.28h-.32c-.1 0-.28.05-.43.23-.15.17-.55.53-.55 1.32 0 .79.58 1.54.67 1.67.08.12 1.16 1.77 2.81 2.48.4.16.7.26.94.34.4.13.76.11 1.05.09.32-.05.99-.4 1.13-.8.14-.38.14-.72.1-.79-.05-.07-.17-.11-.34-.19Z"/>
                </svg>
                WhatsApp
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className="w-full flex items-center justify-center"
                    size="sm"
                    variant="outline"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Agendar una meet
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Agendar una meet</DialogTitle>
                  </DialogHeader>
                  {/* Aquí irá el calendario de Google cuando esté disponible */}
                  <div className="h-96 bg-gray-100 dark:bg-gray-800 flex items-center justify-center rounded-md">
                    <p className="text-center text-gray-500 dark:text-gray-400">
                      El calendario de citas estará disponible pronto
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
