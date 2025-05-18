
import { useIntersectionObserver } from '@/lib/animations';
import { Cpu, Zap, Target, Eye } from 'lucide-react';

const CertificationBadge = ({ name }: { name: string }) => {
  return (
    <span className="inline-block bg-gradient-to-r from-blue-900/50 to-blue-800/50 text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium m-1 border border-blue-500/30 shadow-inner">
      <Zap size={12} className="inline mr-1 text-itx-blue" /> {name}
    </span>
  );
};

const MissionVisionCard = ({ 
  icon: Icon, 
  title, 
  description,
  delay
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}) => {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay * 150}ms` }}
    >
      <div className="bg-gradient-to-br from-blue-600/20 to-green-600/10 rounded-xl p-1 shadow-lg">
        <div className="bg-gradient-to-br from-card to-gray-900/80 rounded-lg p-6 border border-blue-500/30 backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-gradient-to-br from-blue-500/30 to-transparent rounded-full mr-3">
              <Icon className="text-itx-blue" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
          </div>
          <div className="h-0.5 w-12 bg-itx-blue mb-4"></div>
          <p className="text-blue-100">{description}</p>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const { ref: ref2, isVisible: isVisible2 } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: refMission, isVisible: isMissionVisible } = useIntersectionObserver({ threshold: 0.1 });
  
  const certifications = [
    "MikroTik",
    "AWS",
    "Ubiquiti",
    "PaperCut",
    "Google"
  ];

  return (
    <section id="sobre-nosotros" className="section-padding">
      {/* Tech background */}
      <div className="cyber-grid"></div>
      <div className="absolute top-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div 
            className="w-full lg:w-1/2"
            ref={ref as React.RefObject<HTMLDivElement>}
          >
            <div className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="flex items-center mb-4">
                <Cpu size={32} className="text-itx-blue mr-3" />
                <h2 className="section-title">Sobre ITX</h2>
              </div>
              <div className="neon-line w-20 mb-8"></div>
              
              <p className="text-blue-100 mb-6 text-lg">
                Somos una startup uruguaya que entiende que las pequeñas empresas también merecen una infraestructura tecnológica segura, ágil y profesional.
              </p>
              <p className="text-blue-100 mb-8 text-lg">
                Nos enfocamos en atención directa, sin burocracia. Sabemos que tu tiempo vale y que necesitás soluciones, no problemas.
              </p>
              <div className="mb-6 p-4 bg-gradient-to-br from-blue-900/20 to-blue-800/20 backdrop-blur-sm rounded-xl border border-blue-500/20">
                <p className="font-medium text-white mb-3">Trabajamos con las mejores tecnologías:</p>
                <div className="flex flex-wrap">
                  {certifications.map((cert, index) => (
                    <CertificationBadge key={index} name={cert} />
                  ))}
                  <CertificationBadge name="Y más..." />
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="w-full lg:w-1/2"
            ref={ref2 as React.RefObject<HTMLDivElement>}
          >
            <div className={`bg-gradient-to-br from-blue-600/20 to-green-600/20 rounded-xl p-1 shadow-2xl transition-all duration-700 ${
              isVisible2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="bg-gradient-to-br from-card to-gray-900/80 rounded-lg p-8 border border-blue-500/30 backdrop-blur-sm">
                <blockquote>
                  <p className="text-xl italic text-blue-100 mb-6">
                    "La tecnología debe funcionar para ti, no al revés. En ITX entendemos que tus sistemas deben impulsarte, no frenarte."
                  </p>
                  <footer className="font-medium text-itx-blue flex items-center">
                    <div className="h-0.5 w-8 bg-itx-blue mr-3"></div>
                    — Equipo ITX
                  </footer>
                </blockquote>
              </div>
            </div>
            
            {/* Floating tech elements */}
            <div className="hidden lg:block absolute -bottom-10 -right-10 w-24 h-24 border border-blue-500/20 rounded-lg" style={{transform: 'rotate(15deg)'}}></div>
            <div className="hidden lg:block absolute -top-5 -left-5 w-16 h-16 border border-green-500/20 rounded-lg" style={{transform: 'rotate(-10deg)'}}></div>
          </div>
        </div>
        
        <div 
          ref={refMission as React.RefObject<HTMLDivElement>}
          className={`mt-16 transition-all duration-700 ${
            isMissionVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h3 className="text-2xl font-semibold text-center text-white mb-8">Nuestra filosofía</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MissionVisionCard
              icon={Target}
              title="Nuestra misión"
              description="Transformar la experiencia IT de las pequeñas empresas, brindando soluciones ágiles, accesibles y humanas. Acompañamos a cada cliente como si fuéramos parte de su equipo, porque creemos que la tecnología no debería ser un obstáculo, sino una herramienta que potencie."
              delay={0}
            />
            <MissionVisionCard
              icon={Eye}
              title="Nuestra visión"
              description="Construir una nueva forma de hacer soporte IT en Uruguay, dejando atrás lo impersonal y burocrático. Queremos que cada pyme, profesional o institución pueda contar con servicios de calidad, sin importar su tamaño. ITX nace con la convicción de que podemos hacer las cosas mejor, más cerca y con sentido."
              delay={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
