import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useIntersectionObserver } from '@/lib/animations';
import { SendHorizonal, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { ref, isVisible } = useIntersectionObserver();

  // Check for selected plan on component mount
  useEffect(() => {
    const selectedPlan = sessionStorage.getItem('selectedPlan');
    if (selectedPlan) {
      setFormData(prev => ({
        ...prev,
        message: `Estoy interesado en el plan "${selectedPlan}". Me gustaría recibir más información.`
      }));
      // Clear sessionStorage after using it
      sessionStorage.removeItem('selectedPlan');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Email service integration - this will need to be implemented with a proper backend service
      // You can use EmailJS, FormSubmit, or any other service that allows you to send emails from client-side
      // For demonstration, we'll just simulate the API call
      
      // This is where you'll integrate with an email sending service to admin@itxuy.com
      console.log('Form submitted with data:', formData);
      
      // For a real implementation, you would use something like:
      // await fetch('https://formsubmit.co/admin@itxuy.com', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     name: formData.name,
      //     email: formData.email,
      //     message: formData.message,
      //   }),
      // });
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensaje enviado",
        description: "¡Gracias por contactarnos! Nos comunicaremos contigo a la brevedad.",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error al enviar mensaje",
        description: "Por favor intenta nuevamente más tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="section-padding">
      {/* Tech background */}
      <div className="cyber-grid"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
      
      <div 
        className="container mx-auto relative z-10"
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        <div className={`text-center mb-16 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex justify-center mb-4">
            <Mail size={32} className="text-itx-blue" />
          </div>
          <h2 className="section-title">Contacto</h2>
          <div className="neon-line mx-auto mb-6 w-24"></div>
          <p className="section-subtitle mx-auto">
            ¿Tenés una duda? Escribinos y vemos cómo potenciar tu tecnología. El primer diagnóstico es gratis.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="tech-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blue-300 mb-1">
                  Nombre
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  className="w-full bg-blue-900/20 border-blue-500/30 text-white placeholder:text-blue-400/60 focus:border-itx-blue focus:ring-itx-blue/30"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-300 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                  className="w-full bg-blue-900/20 border-blue-500/30 text-white placeholder:text-blue-400/60 focus:border-itx-blue focus:ring-itx-blue/30"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-300 mb-1">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="¿En qué podemos ayudarte?"
                  required
                  rows={5}
                  className="w-full bg-blue-900/20 border-blue-500/30 text-white placeholder:text-blue-400/60 focus:border-itx-blue focus:ring-itx-blue/30"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-itx-blue to-blue-600 hover:from-itx-blue/90 hover:to-blue-600/90 text-white border border-blue-500/50 shadow-lg shadow-blue-900/20"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : (
                  <>
                    <SendHorizonal size={18} className="mr-2" />
                    Enviar mensaje
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
