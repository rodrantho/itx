
import { useIntersectionObserver } from '@/lib/animations';
import { useState } from 'react';
import { Network, Headphones, Shield, Camera, Server, Bug } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description,
  details,
  delay = 0
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  details: string;
  delay?: number;
}) => {
  const { ref, isVisible } = useIntersectionObserver();
  const [showDetails, setShowDetails] = useState(false);
  
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
        <Button 
          variant="ghost" 
          className="text-xs uppercase tracking-wider text-blue-400 font-medium hover:text-blue-300 hover:bg-blue-900/30"
          onClick={() => setShowDetails(true)}
        >
          Explorar
        </Button>
      </div>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="bg-slate-900 text-white border-blue-500/50 max-w-3xl">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-700/30 border border-blue-500/30">
                <Icon className="w-5 h-5 text-itx-blue" />
              </div>
              <DialogTitle className="text-2xl font-bold text-white">{title}</DialogTitle>
            </div>
            <DialogDescription className="text-blue-200 text-base">
              {description}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <div dangerouslySetInnerHTML={{ __html: details }} className="text-blue-100 leading-relaxed" />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const Services = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  const services = [
    {
      icon: Network,
      title: "Redes y conectividad",
      description: "Instalación, configuración y mantenimiento de redes físicas, WiFi de alto rendimiento y accesos VPN seguros para tu empresa.",
      details: `
        <p>Nuestros servicios de redes, conectividad y accesos seguros incluyen:</p>
        <ul class="list-disc pl-5 mt-3 space-y-2">
          <li>Diseño e implementación de redes empresariales de alto rendimiento</li>
          <li>Instalación y configuración de infraestructura WiFi profesional</li>
          <li>Optimización de redes existentes para mejorar velocidad y confiabilidad</li>
          <li>Segmentación de redes para mejor seguridad y rendimiento</li>
          <li>Monitoreo proactivo de la salud de la red</li>
          <li>Solución de problemas de conectividad y rendimiento</li>
          <li>Implementación de VPN site-to-site para conexiones entre oficinas</li>
          <li>Configuración de VPN de acceso remoto para empleados</li>
          <li>Soluciones de autenticación multifactor (MFA)</li>
          <li>Control de acceso basado en roles e identidades</li>
          <li>Cifrado de tráfico de extremo a extremo</li>
          <li>Monitoreo de accesos y alertas de seguridad</li>
        </ul>
        <p class="mt-4">Trabajamos con equipamiento profesional para garantizar conexiones estables y seguras para todos los dispositivos de tu empresa, sin importar desde dónde accedan tus colaboradores.</p>
      `
    },
    {
      icon: Headphones,
      title: "Soporte técnico",
      description: "Soluciones rápidas para equipos, sistemas y usuarios, de forma remota o presencial cuando más lo necesites.",
      details: `
        <p>Nuestro soporte técnico integral incluye:</p>
        <ul class="list-disc pl-5 mt-3 space-y-2">
          <li>Mesa de ayuda para usuarios finales (Nivel 1)</li>
          <li>Soporte avanzado para problemas complejos (Nivel 2)</li>
          <li>Atención remota para soluciones inmediatas</li>
          <li>Visitas presenciales cuando sea necesario</li>
          <li>Mantenimiento preventivo de equipos</li>
          <li>Resolución de problemas de hardware y software</li>
          <li>Recuperación y respaldo de datos críticos</li>
          <li>Actualización y parches de sistemas operativos</li>
          <li>Asistencia fuera de horario para emergencias</li>
        </ul>
        <p class="mt-4">Nuestro equipo de técnicos certificados está disponible para resolver cualquier incidencia tecnológica de manera rápida y eficiente, minimizando el tiempo de inactividad.</p>
      `
    },
    {
      icon: Shield,
      title: "Seguridad informática",
      description: "Protección avanzada con antivirus, firewalls, backups y sistemas contra accesos no autorizados.",
      details: `
        <p>Nuestra solución de seguridad informática incluye:</p>
        <ul class="list-disc pl-5 mt-3 space-y-2">
          <li>Implementación de soluciones antivirus empresariales</li>
          <li>Configuración y mantenimiento de firewalls</li>
          <li>Sistema automatizado de copias de seguridad (backups)</li>
          <li>Protección contra ransomware y malware avanzado</li>
          <li>Auditorías de seguridad periódicas</li>
          <li>Gestión de parches y actualizaciones de seguridad</li>
          <li>Protección de endpoints para equipos remotos</li>
          <li>Políticas de seguridad y capacitación para usuarios</li>
          <li>Planes de recuperación ante desastres</li>
        </ul>
        <p class="mt-4">Protegemos tu información crítica y sistemas contra las amenazas digitales cada vez más sofisticadas, manteniendo la integridad de tus datos empresariales.</p>
      `
    },
    {
      icon: Bug,
      title: "Testing funcional y validación",
      description: "Evaluamos plataformas internas, apps o sistemas web para detectar errores, mejorar la experiencia y asegurar su correcto funcionamiento.",
      details: `
        <p>Nuestros servicios de testing funcional y validación incluyen:</p>
        <ul class="list-disc pl-5 mt-3 space-y-2">
          <li>Pruebas funcionales completas de sistemas</li>
          <li>Validación de flujos de procesos</li>
          <li>Pruebas de experiencia de usuario</li>
          <li>Detección de errores y problemas de rendimiento</li>
          <li>Reportes claros de incidencias encontradas</li>
          <li>Recomendaciones para mejoras</li>
          <li>Pruebas de regresión después de cambios</li>
          <li>Validación de integración entre sistemas</li>
          <li>Testing en múltiples dispositivos y navegadores</li>
        </ul>
        <p class="mt-4">Ideal para empresas que desarrollan o utilizan sistemas propios y necesitan garantizar que todo funcione correctamente, optimizando la productividad y la satisfacción de los usuarios.</p>
      `
    },
    {
      icon: Server,
      title: "Google Workspace y Microsoft 365",
      description: "Configuración profesional y administración eficiente de cuentas corporativas y dominios empresariales.",
      details: `
        <p>Nuestros servicios para plataformas colaborativas incluyen:</p>
        <ul class="list-disc pl-5 mt-3 space-y-2">
          <li>Migración de correo a Google Workspace o Microsoft 365</li>
          <li>Configuración de dominios corporativos personalizados</li>
          <li>Administración de usuarios, grupos y permisos</li>
          <li>Implementación de políticas de seguridad y cumplimiento</li>
          <li>Capacitación para usuarios en herramientas colaborativas</li>
          <li>Configuración de aplicaciones adicionales del ecosistema</li>
          <li>Soporte técnico para resolución de problemas</li>
          <li>Optimización del uso de almacenamiento en la nube</li>
          <li>Automatización de procesos con aplicaciones integradas</li>
        </ul>
        <p class="mt-4">Maximizamos la productividad de tu equipo con soluciones colaborativas profesionales, facilitando la comunicación y el trabajo en conjunto desde cualquier lugar.</p>
      `
    },
    {
      icon: Camera,
      title: "Cámaras y control de acceso",
      description: "Sistemas de vigilancia inteligentes y soluciones de acceso integradas a tu infraestructura de red.",
      details: `
        <p>Nuestras soluciones de seguridad física incluyen:</p>
        <ul class="list-disc pl-5 mt-3 space-y-2">
          <li>Instalación de cámaras IP de vigilancia HD/4K</li>
          <li>Sistemas de grabación NVR con almacenamiento en red</li>
          <li>Control de acceso biométrico y con tarjetas</li>
          <li>Integración de sistemas de alarma con la red</li>
          <li>Monitoreo remoto desde dispositivos móviles</li>
          <li>Detección de movimiento y alertas inteligentes</li>
          <li>Análisis de video con IA para detección de eventos</li>
          <li>Control de acceso por horarios y niveles de autorización</li>
          <li>Mantenimiento preventivo de sistemas de seguridad</li>
        </ul>
        <p class="mt-4">Protegemos tus instalaciones físicas con tecnología avanzada de vigilancia y control de acceso, integrada perfectamente con tu infraestructura de red existente.</p>
      `
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
              details={service.details}
              delay={index % 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
