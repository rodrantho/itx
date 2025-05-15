
import { useIntersectionObserver } from '@/lib/animations';
import { Network, Headphones, Shield, Lock, Camera, Server } from 'lucide-react';

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
      className={`tech-card glow-effect backdrop-blur-sm transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-700/20 mb-5 border border-blue-500/30 shadow-inner">
        <Icon className="w-7 h-7 text-itx-blue" />
      </div>
      <h3 className="text-2xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-blue-100">{description}</p>
      
      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent my-4"></div>
      
      <div className="flex justify-end">
        <span className="text-xs uppercase tracking-wider text-blue-400 font-medium">Explorar</span>
      </div>
    </div>
  );
};

const Services = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  const services = [
    {
      icon: Network,
      title: "Redes y conectividad",
      description: "Instalación, configuración y mantenimiento de redes físicas y WiFi de alto rendimiento para tu empresa."
    },
    {
      icon: Headphones,
      title: "Soporte técnico",
      description: "Soluciones rápidas para equipos, sistemas y usuarios, de forma remota o presencial cuando más lo necesites."
    },
    {
      icon: Shield,
      title: "Seguridad informática",
      description: "Protección avanzada con antivirus, firewalls, backups y sistemas contra accesos no autorizados."
    },
    {
      icon: Lock,
      title: "VPN y accesos seguros",
      description: "Conexiones cifradas para acceder a tu red desde cualquier lugar con máxima seguridad y privacidad."
    },
    {
      icon: Server,
      title: "Google Workspace y Microsoft 365",
      description: "Configuración profesional y administración eficiente de cuentas corporativas y dominios empresariales."
    },
    {
      icon: Camera,
      title: "Cámaras y control de acceso",
      description: "Sistemas de vigilancia inteligentes y soluciones de acceso integradas a tu infraestructura de red."
    }
  ];

  return (
    <section id="servicios" className="section-padding">
      {/* Tech background */}
      <div className="cyber-grid"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      
      <div 
        className="container mx-auto relative"
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        <div className={`text-center mb-16 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="section-title">Nuestros Servicios</h2>
          <div className="neon-line mx-auto mb-6 w-24"></div>
          <p className="section-subtitle mx-auto">
            Soluciones tecnológicas de vanguardia adaptadas para potenciar el crecimiento de tu negocio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
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
