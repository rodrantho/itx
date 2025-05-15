
import { useState } from 'react';
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // For now, we're simulating a form submission
      // In a real implementation, you'd send this data to a backend service
      // that would handle the email sending to admin@itxuy.com
      
      // Email service integration placeholder
      console.log('Form data submitted to admin@itxuy.com:', formData);
      
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
          <div className="inline-block bg-gradient-to-r from-blue-500/20 to-blue-700/20 px-4 py-2 rounded-lg border border-blue-500/30 shadow-inner">
            <p className="text-sm text-blue-300 flex items-center justify-center">
              <Mail size={14} className="mr-2 text-itx-blue" />
              Tu mensaje será enviado a: <span className="font-semibold text-white ml-1">admin@itxuy.com</span>
            </p>
          </div>
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
