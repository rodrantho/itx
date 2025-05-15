
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/lib/animations';
import { Network, CircuitBoard, Zap } from 'lucide-react';

const Hero = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <section 
      id="hero" 
      className="pt-28 pb-20 md:pt-36 md:pb-32 px-4 relative"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cyber-grid"></div>
        <div className="absolute top-20 left-10 w-60 h-60 bg-itx-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-itx-green/10 rounded-full blur-3xl"></div>
      </div>
      
      <div 
        className={`container mx-auto text-center max-w-5xl relative transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex justify-center mb-8 animate-bounce-subtle">
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 p-5 rounded-full border border-blue-500/30 shadow-lg shadow-blue-500/20">
            <CircuitBoard size={50} className="text-itx-blue" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
          Tu equipo de IT, sin contratar uno.
        </h1>
        
        <div className="max-w-3xl mx-auto mb-10 relative">
          <p className="text-xl md:text-2xl text-blue-100">
            Soluciones IT flexibles para negocios que recién empiezan o ya están creciendo.
          </p>
          <div className="neon-line mx-auto mt-8 w-24"></div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-itx-blue to-blue-600 hover:from-itx-blue/90 hover:to-blue-600/90 text-white text-lg py-6 px-8 shadow-lg shadow-blue-900/30 border border-blue-500/30 transition-all duration-300"
            onClick={() => window.location.href = '#contacto'}
          >
            <Zap size={20} className="mr-2" />
            Agendá una consulta gratis
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-itx-blue bg-transparent backdrop-blur-sm text-itx-blue hover:bg-blue-500/10 text-lg py-6 px-8 shadow-md transition-all duration-300"
            onClick={() => window.location.href = '#servicios'}
          >
            <Network size={20} className="mr-2" />
            Conocer servicios
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
