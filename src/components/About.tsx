
import { useIntersectionObserver } from '@/lib/animations';

const CertificationBadge = ({ name }: { name: string }) => {
  return (
    <span className="inline-block bg-blue-50 text-itx-blue px-3 py-1 rounded-full text-sm font-medium m-1">
      {name}
    </span>
  );
};

const About = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const { ref: ref2, isVisible: isVisible2 } = useIntersectionObserver({ threshold: 0.2 });
  
  const certifications = [
    "MikroTik MTCNA",
    "AWS Cloud Practitioner",
    "UniFi Full Stack"
  ];

  return (
    <section id="sobre-nosotros" className="section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <div 
            className="w-full lg:w-1/2"
            ref={ref as React.RefObject<HTMLDivElement>}
          >
            <div className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h2 className="section-title">Sobre ITX</h2>
              <p className="text-itx-gray mb-6">
                Somos una startup uruguaya que entiende que las pequeñas empresas también merecen una infraestructura tecnológica segura, ágil y profesional.
              </p>
              <p className="text-itx-gray mb-6">
                Nos enfocamos en atención directa, sin burocracia. Sabemos que tu tiempo vale y que necesitás soluciones, no problemas.
              </p>
              <div className="mb-6">
                <p className="font-medium text-itx-dark mb-3">Contamos con certificaciones como:</p>
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
            <div className={`bg-gradient-to-br from-blue-500 to-green-400 rounded-lg p-1 shadow-xl transition-all duration-700 ${
              isVisible2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="bg-white rounded-lg p-8">
                <blockquote>
                  <p className="text-xl italic text-itx-dark mb-4">
                    "La tecnología debe funcionar para ti, no al revés. En ITX entendemos que tus sistemas deben impulsarte, no frenarte."
                  </p>
                  <footer className="font-medium text-itx-blue">
                    — Equipo ITX
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
