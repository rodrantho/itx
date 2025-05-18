
import { useIntersectionObserver } from '@/lib/animations';
import { scrollToSection } from '@/lib/scroll-utils';
import { Clock, LayoutPanelLeft, CalendarClock } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const PlanCard = ({
  icon: Icon,
  title,
  emoji,
  headline,
  description,
  callToAction,
  buttonText,
  featured = false,
  delay = 0
}: {
  icon: React.ElementType;
  title: string;
  emoji: string;
  headline: string;
  description: string;
  callToAction: string;
  buttonText: string;
  featured?: boolean;
  delay?: number;
}) => {
  const { ref, isVisible } = useIntersectionObserver();

  const handleMoreInfo = () => {
    // Navigate to contact section and set the plan information in sessionStorage
    sessionStorage.setItem('selectedPlan', title);
    scrollToSection('contacto');
  };

  return (
    <Card
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`tech-card glow-effect transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${featured ? 'border-itx-blue/50 shadow-lg shadow-blue-900/30 relative overflow-hidden' : ''}`}
      style={{ transitionDelay: `${delay * 150}ms` }}
    >
      {featured && (
        <div className="absolute -right-12 top-6 bg-itx-blue text-white py-1 px-10 rotate-45 text-sm font-medium shadow-md">
          Recomendado
        </div>
      )}
      
      <CardContent className="flex flex-col items-center text-center p-6">
        <div className={`flex items-center justify-center w-20 h-20 rounded-full ${
          featured ? 'bg-gradient-to-br from-blue-500/30 to-blue-700/30' : 'bg-gradient-to-br from-blue-500/20 to-blue-700/20'
        } mb-6 border ${featured ? 'border-blue-500/50' : 'border-blue-500/30'} shadow-inner`}>
          <Icon className={`w-8 h-8 ${featured ? 'text-white' : 'text-itx-blue'}`} />
        </div>
        
        <div className="mb-3 text-2xl">{emoji}</div>
        <h3 className={`text-2xl font-semibold mb-2 ${featured ? 'text-itx-blue' : 'text-white'}`}>{title}</h3>
        <p className="text-lg font-medium mb-3 text-blue-100">{headline}</p>
        <div className="w-12 h-0.5 bg-itx-blue mb-4"></div>
        <p className="text-blue-100 mb-4">{description}</p>
        <p className="text-blue-200 mb-4 font-medium">{callToAction}</p>
        
        <div className="mt-4 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        
        <Button 
          onClick={handleMoreInfo}
          className={`mt-6 ${
            featured 
              ? 'bg-gradient-to-r from-itx-blue to-blue-600 hover:from-itx-blue/90 hover:to-blue-600/90 text-white shadow-lg shadow-blue-900/20' 
              : 'bg-transparent hover:bg-blue-500/10 text-blue-400 hover:text-itx-blue border border-blue-500/30'
          }`}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

const Plans = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  const plans = [
    {
      icon: CalendarClock,
      emoji: "⭐",
      title: "Plan Mensual",
      headline: "Tu equipo de IT sin contratar uno.",
      description: "Un plan flexible y completo que se adapta a tu empresa. Puede incluir soporte por horas, días o tareas específicas, o bien todo el control tecnológico.",
      callToAction: "👉 Soporte prioritario, mantenimiento preventivo y asesoramiento continuo.",
      buttonText: "Consultá este plan",
      featured: true
    },
    {
      icon: LayoutPanelLeft,
      emoji: "⚙️",
      title: "Plan por Proyecto",
      headline: "Soluciones llave en mano.",
      description: "Ideal para implementaciones puntuales como instalación de redes, migraciones, configuración de servidores o cambios estructurales.",
      callToAction: "👉 Presupuesto cerrado, planificación clara y ejecución profesional.",
      buttonText: "Solicitar cotización",
      featured: false
    },
    {
      icon: Clock,
      emoji: "⏱️",
      title: "Plan por Hora",
      headline: "Soporte puntual sin ataduras.",
      description: "Pagás solo por el tiempo que necesitás. Ideal para resolver problemas específicos o tareas aisladas, sin compromiso mensual.",
      callToAction: "👉 Tiempo mínimo claro. Remoto o presencial.",
      buttonText: "Consultar disponibilidad",
      featured: false
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
              emoji={plan.emoji}
              headline={plan.headline}
              description={plan.description}
              callToAction={plan.callToAction}
              buttonText={plan.buttonText}
              featured={plan.featured}
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
