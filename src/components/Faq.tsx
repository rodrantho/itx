
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useIntersectionObserver } from '@/lib/animations';
import { HelpCircle } from 'lucide-react';

const Faq = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  const faqs = [
    {
      question: "¿Trabajan solo en Montevideo?",
      answer: "No, damos soporte remoto en todo Uruguay utilizando tecnologías avanzadas de conexión segura. Para servicios presenciales, cubrimos Montevideo y zonas aledañas con respuesta rápida."
    },
    {
      question: "¿Tienen contrato mínimo?",
      answer: "No, podés probar nuestros servicios sin compromiso y decidir si continuamos trabajando juntos. Creemos en ganarnos tu confianza con resultados."
    },
    {
      question: "¿Cuánto demoran en responder?",
      answer: "Para clientes con mantenimiento mensual, la respuesta es inmediata en horario laboral mediante nuestro sistema de tickets prioritarios. Para servicios puntuales, generalmente respondemos en menos de 4 horas."
    },
    {
      question: "¿Trabajan con hardware también?",
      answer: "Sí, podemos asesorarte en la compra de equipos con las especificaciones óptimas para tu negocio y también configurarlos. Trabajamos con equipos existentes o nuevos según tus necesidades."
    },
    {
      question: "¿Cómo funcionan los pagos?",
      answer: "Aceptamos transferencias bancarias, pagos con tarjeta y efectivo. Para clientes con mantenimiento mensual, facturamos al inicio de cada mes con sistema automatizado de recordatorios."
    }
  ];

  return (
    <section id="faq" className="section-padding">
      {/* Tech background */}
      <div className="cyber-grid"></div>
      <div className="absolute top-40 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      
      <div 
        className="container mx-auto relative z-10"
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        <div className={`text-center mb-16 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex justify-center mb-4">
            <HelpCircle size={32} className="text-itx-blue" />
          </div>
          <h2 className="section-title">Preguntas Frecuentes</h2>
          <div className="neon-line mx-auto mb-6 w-24"></div>
          <p className="section-subtitle mx-auto">
            Resolvemos tus dudas sobre nuestros servicios tecnológicos.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto tech-card">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-blue-700/30">
                <AccordionTrigger className="text-left font-medium text-blue-100 hover:text-white py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-blue-200 bg-blue-900/20 p-4 rounded-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
