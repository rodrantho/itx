
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/lib/animations';
import { Network } from 'lucide-react';

const Hero = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <section 
      id="hero" 
      className="pt-28 pb-16 md:pt-32 md:pb-24 px-4"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div 
        className={`container mx-auto text-center max-w-5xl transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex justify-center mb-6">
          <div className="bg-blue-50 p-4 rounded-full">
            <Network size={40} className="text-itx-blue" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-itx-dark mb-6">
          Tu equipo de IT, sin contratar uno.
        </h1>
        <p className="text-xl md:text-2xl text-itx-gray max-w-3xl mx-auto mb-10">
          Soluciones IT flexibles para negocios que recién empiezan o ya están creciendo.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="lg"
            className="bg-itx-blue hover:bg-itx-blue/90 text-white text-lg py-6 px-8"
            onClick={() => window.location.href = '#contacto'}
          >
            Agendá una consulta gratis
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-itx-blue text-itx-blue hover:bg-blue-50 text-lg py-6 px-8"
            onClick={() => window.location.href = '#servicios'}
          >
            Conocer servicios
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
