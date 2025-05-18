import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useIntersectionObserver } from '@/lib/animations';

// Define blog post type
type BlogPost = {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  content: string;
  image?: string;
};

const Blog = () => {
  // Set document title
  React.useEffect(() => {
    document.title = "Blog - ITX Uruguay | Novedades y recursos tecnológicos";
  }, []);
  
  const navigate = useNavigate();
  const { ref, isVisible } = useIntersectionObserver();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  // Sample blog posts
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "ITaaS: Entendiendo el IT como Servicio",
      description: "Descubre cómo las empresas están adoptando modelos de IT as a Service para optimizar costos y mejorar su eficiencia operativa.",
      date: "15 de mayo, 2025",
      category: "tendencias",
      content: `
        <h2>¿Qué es ITaaS?</h2>
        <p>IT as a Service (ITaaS) es un modelo operativo que permite a las empresas consumir servicios de tecnología de la información bajo demanda, sin la necesidad de grandes inversiones iniciales en infraestructura o personal especializado.</p>
        <p>Este enfoque transforma los tradicionales departamentos de IT, centrados en la gestión de activos, en proveedores de servicios ágiles orientados a satisfacer las necesidades del negocio.</p>
        
        <h2>Ventajas del modelo ITaaS</h2>
        <ul>
          <li><strong>Costos predecibles:</strong> Transforma gastos de capital en gastos operativos mediante un modelo de suscripción.</li>
          <li><strong>Escalabilidad:</strong> Adapta los recursos tecnológicos según las necesidades puntuales del negocio.</li>
          <li><strong>Acceso a especialistas:</strong> Aprovecha conocimientos técnicos avanzados sin necesidad de contrataciones permanentes.</li>
          <li><strong>Enfoque en el core business:</strong> Permite que la empresa se concentre en su negocio principal mientras expertos gestionan su infraestructura tecnológica.</li>
        </ul>
        
        <h2>¿Por qué las pymes están adoptando este modelo?</h2>
        <p>Para pequeñas y medianas empresas, mantener un departamento de IT interno representa desafíos significativos: costos fijos elevados, dificultad para atraer talento especializado y limitaciones para mantenerse actualizados con las últimas tecnologías.</p>
        <p>ITaaS resuelve estos problemas ofreciendo flexibilidad, conocimiento especializado y tecnología actualizada sin las cargas operativas y financieras tradicionales.</p>
        
        <h2>ITX y el modelo ITaaS</h2>
        <p>En ITX llevamos el concepto de IT as a Service al siguiente nivel, con planes personalizados que permiten a nuestros clientes escalar sus recursos tecnológicos según sus necesidades reales. Contactanos para diseñar un plan que se adapte perfectamente a los requerimientos de tu negocio.</p>
      `,
    },
    {
      id: 2,
      title: "5 consejos para proteger tu negocio de ciberataques",
      description: "Estrategias prácticas para mejorar la seguridad informática de tu empresa sin grandes inversiones.",
      date: "2 de mayo, 2025",
      category: "seguridad",
      content: `
        <h2>La ciberseguridad ya no es opcional</h2>
        <p>Los ciberataques a pequeñas y medianas empresas han aumentado significativamente en los últimos años. Contrario a lo que muchos piensan, el tamaño de la empresa no es un factor disuasorio para los ciberdelincuentes; de hecho, las pymes suelen ser objetivos atractivos por sus generalmente menores medidas de protección.</p>
        
        <h2>5 medidas básicas para proteger tu negocio</h2>
        <ol>
          <li><strong>Implementa autenticación en dos factores (2FA):</strong> Esta simple medida puede prevenir el 99.9% de los ataques automatizados a cuentas. Actívalo en todas las plataformas críticas de tu negocio.</li>
          <li><strong>Mantén tus sistemas actualizados:</strong> Muchos ataques aprovechan vulnerabilidades conocidas que ya han sido parcheadas en versiones más recientes del software.</li>
          <li><strong>Capacita a tu personal:</strong> El eslabón más débil en la cadena de seguridad suele ser el factor humano. Cursos básicos de concientización pueden marcar una gran diferencia.</li>
          <li><strong>Implementa copias de seguridad regulares:</strong> Asegúrate de tener respaldos periódicos y verificados de tu información crítica, preferiblemente en ubicaciones diferentes.</li>
          <li><strong>Utiliza un gestor de contraseñas:</strong> Facilita la creación y almacenamiento de contraseñas robustas y únicas para cada servicio.</li>
        </ol>
        
        <h2>¿Necesitas ayuda con la seguridad de tu negocio?</h2>
        <p>En ITX ofrecemos servicios de evaluación de seguridad y podemos implementar medidas preventivas adaptadas a tu presupuesto y necesidades específicas. Contactanos para una evaluación inicial sin compromiso.</p>
      `,
    },
    {
      id: 3,
      title: "¿Cómo elegir el proveedor de IT adecuado para tu empresa?",
      description: "Guía práctica para seleccionar al mejor proveedor tecnológico según las necesidades específicas de tu negocio.",
      date: "20 de abril, 2025",
      category: "consejos",
      content: `
        <h2>La importancia de una buena elección</h2>
        <p>Seleccionar al proveedor de servicios tecnológicos adecuado puede marcar la diferencia entre potenciar tu negocio o enfrentar constantes obstáculos operativos. Esta decisión impactará directamente en tu productividad, seguridad y capacidad de crecimiento.</p>
        
        <h2>Factores clave a considerar</h2>
        <ul>
          <li><strong>Experiencia específica en tu industria:</strong> Busca proveedores que entiendan los desafíos particulares de tu sector.</li>
          <li><strong>Modelo de servicio:</strong> ¿Ofrecen soporte reactivo, preventivo o una combinación? ¿Tienen SLAs claros?</li>
          <li><strong>Capacidad de escalar:</strong> El proveedor debe poder acompañar el crecimiento de tu empresa.</li>
          <li><strong>Referencias verificables:</strong> Solicita casos de éxito y contacta a clientes actuales.</li>
          <li><strong>Comunicación y transparencia:</strong> Evalúa cómo manejan las consultas durante el proceso de selección.</li>
        </ul>
        
        <h2>Preguntas que deberías hacer</h2>
        <ol>
          <li>¿Cuál es su tiempo promedio de respuesta ante incidentes?</li>
          <li>¿Cómo manejan la documentación de mi infraestructura?</li>
          <li>¿Qué medidas de seguridad implementan para proteger mis datos?</li>
          <li>¿Qué sucede si mi problema requiere conocimientos muy específicos?</li>
          <li>¿Cómo se facturan los servicios no incluidos en el contrato base?</li>
        </ol>
        
        <h2>Evaluando costos más allá del precio mensual</h2>
        <p>Al comparar propuestas, considera el costo total de propiedad: un servicio aparentemente más económico puede resultar costoso si genera tiempos de inactividad prolongados o no previene problemas adecuadamente.</p>
      `,
    }
  ];
  
  // Filter blog posts based on active category
  const filteredPosts = activeCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);
  
  // Handle view post
  const handleViewPost = (post: BlogPost) => {
    setSelectedPost(post);
    window.scrollTo(0, 0);
  };
  
  // Handle back to list
  const handleBackToList = () => {
    setSelectedPost(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Tech background elements */}
        <div className="cyber-grid"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          {!selectedPost ? (
            <>
              <div 
                ref={ref as React.RefObject<HTMLDivElement>}
                className={`text-center mb-16 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <h1 className="section-title">Blog ITX</h1>
                <div className="neon-line mx-auto mb-6 w-24"></div>
                <p className="section-subtitle mx-auto">
                  Recursos, guías y tendencias tecnológicas para potenciar tu negocio
                </p>
              </div>
              
              {/* Category filter */}
              <Tabs defaultValue="all" className="max-w-3xl mx-auto mb-12">
                <TabsList className="grid grid-cols-4 w-full bg-blue-900/20">
                  <TabsTrigger 
                    value="all" 
                    onClick={() => setActiveCategory("all")}
                    className="data-[state=active]:bg-itx-blue"
                  >
                    Todos
                  </TabsTrigger>
                  <TabsTrigger 
                    value="tendencias" 
                    onClick={() => setActiveCategory("tendencias")}
                    className="data-[state=active]:bg-itx-blue"
                  >
                    Tendencias
                  </TabsTrigger>
                  <TabsTrigger 
                    value="seguridad" 
                    onClick={() => setActiveCategory("seguridad")}
                    className="data-[state=active]:bg-itx-blue"
                  >
                    Seguridad
                  </TabsTrigger>
                  <TabsTrigger 
                    value="consejos" 
                    onClick={() => setActiveCategory("consejos")}
                    className="data-[state=active]:bg-itx-blue"
                  >
                    Consejos
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value={activeCategory} className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPosts.map((post, index) => (
                      <Card key={post.id} className="tech-card hover:border-itx-blue/50 transition-all duration-300">
                        <CardHeader>
                          <div className="text-xs text-blue-300 mb-2">{post.date}</div>
                          <CardTitle className="text-xl text-white">{post.title}</CardTitle>
                          <CardDescription className="text-blue-200">{post.description}</CardDescription>
                        </CardHeader>
                        <CardFooter>
                          <Button 
                            onClick={() => handleViewPost(post)}
                            className="bg-blue-900/30 hover:bg-blue-700/40 text-blue-300 hover:text-white border border-blue-700/30"
                          >
                            Leer más
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </>
          ) : (
            <div className="max-w-4xl mx-auto">
              <Button 
                onClick={handleBackToList}
                variant="outline" 
                className="mb-6 bg-blue-900/30 hover:bg-blue-700/40 text-blue-300 border border-blue-700/30"
              >
                ← Volver a artículos
              </Button>
              
              <Card className="tech-card p-8">
                <CardHeader className="px-0">
                  <div className="text-sm text-blue-300 mb-2">{selectedPost.date}</div>
                  <CardTitle className="text-3xl text-white mb-4">{selectedPost.title}</CardTitle>
                  <div className="w-20 h-1 bg-itx-blue mb-6"></div>
                </CardHeader>
                <CardContent className="px-0">
                  <div 
                    className="prose prose-invert max-w-none prose-headings:text-blue-100 prose-a:text-itx-blue"
                    dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                  />
                </CardContent>
                <CardFooter className="px-0 mt-8 pt-8 border-t border-blue-900/30">
                  <Button
                    onClick={() => navigate('/#contacto')}
                    className="bg-gradient-to-r from-itx-blue to-blue-600 hover:from-itx-blue/90 hover:to-blue-600/90"
                  >
                    ¿Necesitas ayuda con esto? Contáctanos
                  </Button>
                </CardFooter>
              </Card>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
