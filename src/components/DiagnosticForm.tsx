
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle2 } from 'lucide-react';

const diagnosticSchema = z.object({
  supportType: z.enum(['pc', 'network', 'security', 'unsure'], {
    required_error: "Por favor selecciona un tipo de soporte",
  }),
  frequency: z.enum(['occasional', 'frequent', 'continuous'], {
    required_error: "Por favor selecciona la frecuencia",
  }),
  ownSystems: z.enum(['yes', 'no', 'unknown'], {
    required_error: "Por favor selecciona una opción",
  }),
  serviceMode: z.enum(['remote', 'presential', 'both'], {
    required_error: "Por favor selecciona un modo de servicio",
  }),
  name: z.string().min(2, {
    message: "Por favor ingresa tu nombre",
  }),
  contactInfo: z.string().min(5, {
    message: "Por favor ingresa un email o teléfono válido",
  }),
});

type DiagnosticFormValues = z.infer<typeof diagnosticSchema>;

const DiagnosticForm = () => {
  const [result, setResult] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const form = useForm<DiagnosticFormValues>({
    resolver: zodResolver(diagnosticSchema),
    defaultValues: {
      supportType: undefined,
      frequency: undefined,
      ownSystems: undefined,
      serviceMode: undefined,
      name: "",
      contactInfo: "",
    },
  });

  const onSubmit = (data: DiagnosticFormValues) => {
    // Determinar el plan recomendado basado en las respuestas
    let recommendedPlan = "";
    
    if (data.frequency === 'occasional') {
      recommendedPlan = "Plan Básico - Ideal para asistencias puntuales";
    } else if (data.frequency === 'frequent' && data.ownSystems === 'yes') {
      recommendedPlan = "Plan Premium - Recomendado para empresas con sistemas propios y necesidades frecuentes";
    } else if (data.frequency === 'continuous') {
      recommendedPlan = "Plan Empresa - Perfecto para soporte continuo y gestión completa de IT";
    } else {
      recommendedPlan = "Plan Estándar - Buena opción para asistencia regular";
    }

    setResult(recommendedPlan);
    
    // Enviar el formulario con los datos y el resultado
    setTimeout(() => {
      // Simular envío de formulario
      toast.success("Tu diagnóstico ha sido enviado correctamente");
      
      console.log("Datos del diagnóstico:", {
        ...data,
        recommendedPlan
      });
      
      // Aquí se implementaría el envío real al backend
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-itx-blue hover:bg-itx-blue/90 tech-card">
          Diagnóstico Express
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">Diagnóstico Express</DialogTitle>
          <DialogDescription>
            Respondé estas preguntas para ayudarte a elegir el plan ideal para tu negocio.
          </DialogDescription>
        </DialogHeader>
        
        {result ? (
          <div className="space-y-4 py-4 text-center">
            <CheckCircle2 className="w-16 h-16 mx-auto text-green-500" />
            <h3 className="text-lg font-medium">¡Plan recomendado!</h3>
            <p className="text-lg font-bold text-blue-500">{result}</p>
            <p className="text-sm text-muted-foreground">
              Nos contactaremos contigo pronto para brindarte más detalles.
            </p>
            <Button 
              onClick={() => {
                setResult(null);
                form.reset();
                setOpen(false);
              }} 
              className="w-full mt-2"
            >
              Cerrar
            </Button>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <FormField
                    control={form.control}
                    name="supportType"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>¿Qué tipo de soporte necesitás hoy?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-2"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="pc" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Problemas técnicos en PCs
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="network" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Redes, WiFi o Internet
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="security" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Accesos, seguridad o backups
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="unsure" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                No estoy seguro
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <FormField
                    control={form.control}
                    name="frequency"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>¿Con qué frecuencia necesitás ayuda técnica?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-2"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="occasional" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Solo a veces (1 vez al mes o menos)
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="frequent" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Varias veces por mes
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="continuous" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Todo el tiempo / soporte continuo
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <FormField
                    control={form.control}
                    name="ownSystems"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>¿Tu empresa usa alguna plataforma o sistema propio?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-2"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="yes" />
                              </FormControl>
                              <FormLabel className="font-normal">Sí</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="no" />
                              </FormControl>
                              <FormLabel className="font-normal">No</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="unknown" />
                              </FormControl>
                              <FormLabel className="font-normal">No sé</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <FormField
                    control={form.control}
                    name="serviceMode"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>¿Preferís atención remota, presencial o ambas?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-2"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="remote" />
                              </FormControl>
                              <FormLabel className="font-normal">Solo remota</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="presential" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Presencial cuando se necesite
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="both" />
                              </FormControl>
                              <FormLabel className="font-normal">Ambas</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tu nombre:</FormLabel>
                        <FormControl>
                          <Input placeholder="Nombre y apellido" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="contactInfo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tu email o teléfono:</FormLabel>
                        <FormControl>
                          <Input placeholder="Email o WhatsApp" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button type="submit" className="bg-itx-blue hover:bg-itx-blue/90">
                  Obtener recomendación
                </Button>
              </div>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DiagnosticForm;
