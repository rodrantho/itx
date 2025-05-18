
/**
 * Utilidad para manejar la navegación con enlaces de anclaje
 */
export const scrollToSection = (sectionId: string) => {
  // Pequeño retraso para permitir que se complete el cambio de página si es necesario
  setTimeout(() => {
    // Remover cualquier barra diagonal del principio del ID (en caso de que se pase '/' o '#/')
    const cleanSectionId = sectionId.replace(/^\/+|^#+\/+/, '');
    
    const element = document.getElementById(cleanSectionId);
    if (element) {
      // Ajustar el scroll para tener en cuenta la altura de la barra de navegación
      const navbarHeight = 80; // Altura aproximada de la barra de navegación
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      console.error(`Elemento con ID "${cleanSectionId}" no encontrado`);
    }
  }, 100);
};

/**
 * Hook para manejar el scroll inicial cuando la página se carga con un hash en la URL
 */
export const handleInitialScroll = () => {
  const hash = window.location.hash;
  if (hash) {
    // Eliminar el # del inicio y cualquier barra diagonal
    const sectionId = hash.substring(1).replace(/^\/+/, '');
    scrollToSection(sectionId);
  }
};
