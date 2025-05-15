
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Sobre ITX', href: '#sobre-nosotros' },
    { name: 'Planes', href: '#planes' },
    { name: 'Contacto', href: '#contacto' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-itx-blue">ITX</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm text-itx-dark hover:text-itx-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button 
            size="sm"
            onClick={() => window.location.href = '#contacto'}
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
              <a
                key={link.name}
                href={link.href}
                className="text-sm py-2 text-itx-dark hover:text-itx-blue transition-colors"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}
            <Button
              size="sm"
              onClick={() => {
                window.location.href = '#contacto';
                closeMenu();
              }}
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
