
import { DiagnosticFormValues } from "@/schemas/diagnosticFormSchema";

export const getDiagnosticResult = (data: DiagnosticFormValues): string => {
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
  
  return recommendedPlan;
};

export const submitDiagnosticData = async (data: DiagnosticFormValues, recommendedPlan: string): Promise<void> => {
  // Aquí se implementaría el envío real al backend
  console.log("Datos del diagnóstico:", {
    ...data,
    recommendedPlan
  });
  
  // Esta función es asíncrona para permitir futura implementación de API real
  return Promise.resolve();
};
