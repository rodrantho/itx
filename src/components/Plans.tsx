
import { useIntersectionObserver } from '@/lib/animations';
import { scrollToSection } from '@/lib/scroll-utils';
import { Clock, LayoutPanelLeft, CalendarClock } from 'lucide-react';

const PlanCard = ({
  icon: Icon,
  title,
  description,
  delay = 0
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay?: number;
}) => {
  const { ref, isVisible } = useIntersectionObserver();

  const handleMoreInfo = () => {
    // Navigate to contact section and set the plan information in sessionStorage
    sessionStorage.setItem('selectedPlan', title);
    scrollToSection('contacto');
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`tech-card glow-effect transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay * 150}ms` }}
    >
      <div className="flex flex-col items-center text-center p-4">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-700/20 mb-6 border border-blue-500/30 shadow-inner">
          <Icon className="w-8 h-8 text-itx-blue" />
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
        <div className="w-12 h-0.5 bg-itx-blue mb-4"></div>
        <p className="text-blue-100 mb-4">{description}</p>
        
        <div className="mt-4 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        
        <button 
          onClick={handleMoreInfo}
          className="mt-4 pb-2 hover:text-itx-blue transition-colors cursor-pointer"
        >
          <span className="text-sm uppercase tracking-wider text-blue-400 hover:text-itx-blue font-medium">Más Información</span>
        </button>
      </div>
    </div>
  );
};

const Plans = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  const plans = [
    {
      icon: Clock,
      title: "Por hora",
      description: "Ideal para tareas puntuales que requieren atención inmediata y específica sin compromisos a largo plazo."
    },
    {
      icon: LayoutPanelLeft,
      title: "Por proyecto",
      description: "Implementaciones, migraciones e instalaciones completas con alcance y precio definidos para tu tranquilidad."
    },
    {
      icon: CalendarClock,
      title: "Mantenimiento mensual",
      description: "Soporte completo para tu infraestructura con precios predecibles y asistencia continua, sin sorpresas."
    }
  ];

  return (
    <section id="planes" className="section-padding">
      {/* Tech background */}
      <div className="cyber-grid"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div 
          className="text-center mb-16"
          ref={ref as React.RefObject<HTMLDivElement>}
        >
          <div className={`transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="section-title">Nuestros Planes</h2>
            <div className="neon-line mx-auto mb-6 w-24"></div>
            <p className="section-subtitle mx-auto">
              Adaptamos nuestra tecnología y forma de trabajo a lo que realmente necesita tu negocio para crecer.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PlanCard
              key={index}
              icon={plan.icon}
              title={plan.title}
              description={plan.description}
              delay={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <p className="text-white bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-5 rounded-xl shadow-lg border border-blue-500/20 inline-block backdrop-blur-sm">
            👉 <span className="font-medium">Todos nuestros planes son sin permanencia mínima.</span> <br/>
            <span className="text-blue-200">Solo pagás por lo que realmente necesitas.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Plans;
