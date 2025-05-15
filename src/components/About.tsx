
import { useIntersectionObserver } from '@/lib/animations';
import { Cpu, Zap } from 'lucide-react';

const CertificationBadge = ({ name }: { name: string }) => {
  return (
    <span className="inline-block bg-gradient-to-r from-blue-900/50 to-blue-800/50 text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium m-1 border border-blue-500/30 shadow-inner">
      <Zap size={12} className="inline mr-1 text-itx-blue" /> {name}
    </span>
  );
};

const About = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const { ref: ref2, isVisible: isVisible2 } = useIntersectionObserver({ threshold: 0.2 });
  
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
      </div>
    </section>
  );
};

export default About;
