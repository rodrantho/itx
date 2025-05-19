
import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from 'lucide-react';

interface DiagnosticResultProps {
  result: string;
  onClose: () => void;
}

const DiagnosticResult = ({ result, onClose }: DiagnosticResultProps) => {
  return (
    <div className="space-y-4 py-4 text-center">
      <CheckCircle2 className="w-16 h-16 mx-auto text-green-500" />
      <h3 className="text-lg font-medium">¡Plan recomendado!</h3>
      <p className="text-lg font-bold text-blue-500">{result}</p>
      <p className="text-sm text-muted-foreground">
        Nos contactaremos contigo pronto para brindarte más detalles.
      </p>
      <Button 
        onClick={onClose} 
        className="w-full mt-2"
      >
        Cerrar
      </Button>
    </div>
  );
};

export default DiagnosticResult;
