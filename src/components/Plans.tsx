
import { useIntersectionObserver } from '@/lib/animations';
import { Clock, LayoutPlaneLine, CalendarClock } from 'lucide-react';

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

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-500 border border-gray-100 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay * 150}ms` }}
    >
      <div className="flex flex-col items-center text-center p-4">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-5">
          <Icon className="w-7 h-7 text-itx-blue" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-itx-dark">{title}</h3>
        <p className="text-itx-gray">{description}</p>
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
      description: "Ideal para tareas puntuales que requieren atención inmediata y específica."
    },
    {
      icon: LayoutPlaneLine,
      title: "Por proyecto",
      description: "Implementaciones, migraciones e instalaciones con alcance y precio definidos."
    },
    {
      icon: CalendarClock,
      title: "Mantenimiento mensual",
      description: "Soporte completo para tu infraestructura con precios predecibles, sin sorpresas."
    }
  ];

  return (
    <section id="planes" className="section-padding bg-itx-lightest">
      <div className="container mx-auto">
        <div 
          className="text-center mb-12"
          ref={ref as React.RefObject<HTMLDivElement>}
        >
          <div className={`transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="section-title">Nuestros Planes</h2>
            <p className="section-subtitle mx-auto">
              Adaptamos nuestra forma de trabajo a lo que realmente necesitás.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
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
        
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-itx-dark bg-white p-4 rounded-lg shadow-sm border border-gray-100 inline-block">
            👉 <span className="font-medium">Todos nuestros planes son sin permanencia mínima.</span> Solo pagás por lo que necesitás.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Plans;
