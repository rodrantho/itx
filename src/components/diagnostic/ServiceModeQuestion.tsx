
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { Control } from "react-hook-form";
import { DiagnosticFormValues } from "@/schemas/diagnosticFormSchema";

interface ServiceModeQuestionProps {
  control: Control<DiagnosticFormValues>;
}

const ServiceModeQuestion = ({ control }: ServiceModeQuestionProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <FormField
          control={control}
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
  );
};

export default ServiceModeQuestion;
