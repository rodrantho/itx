
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { diagnosticSchema, DiagnosticFormValues } from "@/schemas/diagnosticFormSchema";

// Import sub-components
import SupportTypeQuestion from './diagnostic/SupportTypeQuestion';
import FrequencyQuestion from './diagnostic/FrequencyQuestion';
import OwnSystemsQuestion from './diagnostic/OwnSystemsQuestion';
import ServiceModeQuestion from './diagnostic/ServiceModeQuestion';
import ContactInfoFields from './diagnostic/ContactInfoFields';
import DiagnosticResult from './diagnostic/DiagnosticResult';

// Import services
import { getDiagnosticResult, submitDiagnosticData } from '@/services/diagnosticService';

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
    const recommendedPlan = getDiagnosticResult(data);
    setResult(recommendedPlan);
    
    // Enviar el formulario con los datos y el resultado
    setTimeout(async () => {
      await submitDiagnosticData(data, recommendedPlan);
      toast.success("Tu diagnóstico ha sido enviado correctamente");
    }, 1000);
  };

  const handleReset = () => {
    setResult(null);
    form.reset();
    setOpen(false);
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
          <DiagnosticResult result={result} onClose={handleReset} />
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <SupportTypeQuestion control={form.control} />
              <FrequencyQuestion control={form.control} />
              <OwnSystemsQuestion control={form.control} />
              <ServiceModeQuestion control={form.control} />
              <ContactInfoFields control={form.control} />

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
