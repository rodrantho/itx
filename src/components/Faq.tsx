
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useIntersectionObserver } from '@/lib/animations';

const Faq = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  const faqs = [
    {
      question: "¿Trabajan solo en Montevideo?",
      answer: "No, damos soporte remoto en todo Uruguay. Para servicios presenciales, cubrimos Montevideo y zonas aledañas."
    },
    {
      question: "¿Tienen contrato mínimo?",
      answer: "No, podés probar nuestros servicios sin compromiso y decidir si continuamos trabajando juntos."
    },
    {
      question: "¿Cuánto demoran en responder?",
      answer: "Para clientes con mantenimiento mensual, la respuesta es inmediata en horario laboral. Para servicios puntuales, generalmente respondemos en menos de 4 horas."
    },
    {
      question: "¿Trabajan con hardware también?",
      answer: "Sí, podemos asesorarte en la compra de equipos y también configurarlos. Trabajamos con equipos existentes o nuevos según tus necesidades."
    },
    {
      question: "¿Cómo funcionan los pagos?",
      answer: "Aceptamos transferencias bancarias, pagos con tarjeta y efectivo. Para clientes con mantenimiento mensual, facturamos al inicio de cada mes."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-itx-lightest">
      <div 
        className="container mx-auto"
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        <div className={`text-center mb-12 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="section-title">Preguntas Frecuentes</h2>
          <p className="section-subtitle mx-auto">
            Algunas dudas comunes sobre nuestros servicios.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-itx-dark">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-itx-gray">
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
