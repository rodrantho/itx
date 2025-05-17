
/**
 * Utilidad para manejar la navegación con enlaces de anclaje
 */
export const scrollToSection = (sectionId: string) => {
  // Pequeño retraso para permitir que se complete el cambio de página si es necesario
  setTimeout(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Elemento con ID "${sectionId}" no encontrado`);
    }
  }, 100);
};

/**
 * Hook para manejar el scroll inicial cuando la página se carga con un hash en la URL
 */
export const handleInitialScroll = () => {
  const hash = window.location.hash;
  if (hash) {
    // Eliminar el # del inicio
    const sectionId = hash.substring(1);
    scrollToSection(sectionId);
  }
};
