
import { z } from "zod";

export const diagnosticSchema = z.object({
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

export type DiagnosticFormValues = z.infer<typeof diagnosticSchema>;
