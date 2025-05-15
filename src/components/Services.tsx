
import { useIntersectionObserver } from '@/lib/animations';
import { Network, Headphones, Shield, Lock, Camera } from 'lucide-react';

const ServiceCard = ({ 
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
      className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 mb-5">
        <Icon className="w-6 h-6 text-itx-blue" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-itx-dark">{title}</h3>
      <p className="text-itx-gray">{description}</p>
    </div>
  );
};

const Services = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  const services = [
    {
      icon: Network,
      title: "Redes y conectividad",
      description: "Instalación, configuración y mantenimiento de redes físicas y WiFi."
    },
    {
      icon: Headphones,
      title: "Soporte técnico",
      description: "Soluciones rápidas para equipos, sistemas y usuarios, de forma remota o presencial."
    },
    {
      icon: Shield,
      title: "Seguridad informática",
      description: "Antivirus, firewalls, backups y protección contra accesos no autorizados."
    },
    {
      icon: Lock,
      title: "VPN y accesos seguros",
      description: "Accedé a tu red desde cualquier lugar de forma segura."
    },
    {
      icon: Network,
      title: "Google Workspace y Microsoft 365",
      description: "Alta, configuración y administración de cuentas y dominios."
    },
    {
      icon: Camera,
      title: "Cámaras y control de acceso",
      description: "Soluciones físicas integradas a la red."
    }
  ];

  return (
    <section id="servicios" className="section-padding bg-itx-lightest">
      <div 
        className="container mx-auto"
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        <div className={`text-center mb-12 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle mx-auto">
            Soluciones completas adaptadas a las necesidades de tu negocio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description}
              delay={index % 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
