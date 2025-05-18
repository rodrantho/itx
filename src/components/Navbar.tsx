
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { scrollToSection } from '@/lib/scroll-utils';

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

  const navLinks = [
    { name: 'Servicios', id: 'servicios' },
    { name: 'Sobre ITX', id: 'sobre-nosotros' },
    { name: 'Planes', id: 'planes' },
    { name: 'Contacto', id: 'contacto' },
    { name: 'FAQ', id: 'faq' },
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
          <Button 
            size="sm"
            onClick={() => handleNavigation('contacto')}
            className="bg-itx-blue hover:bg-itx-blue/90"
          >
            Agendá una consulta
          </Button>
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
            <Button
              size="sm"
              onClick={() => handleNavigation('contacto')}
              className="bg-itx-blue hover:bg-itx-blue/90 w-full mt-2"
            >
              Agendá una consulta
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
