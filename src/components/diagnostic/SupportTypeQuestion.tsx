
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { Control } from "react-hook-form";
import { DiagnosticFormValues } from "@/schemas/diagnosticFormSchema";

interface SupportTypeQuestionProps {
  control: Control<DiagnosticFormValues>;
}

const SupportTypeQuestion = ({ control }: SupportTypeQuestionProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <FormField
          control={control}
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
  );
};

export default SupportTypeQuestion;
