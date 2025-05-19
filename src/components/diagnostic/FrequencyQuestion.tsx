
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { Control } from "react-hook-form";
import { DiagnosticFormValues } from "@/schemas/diagnosticFormSchema";

interface FrequencyQuestionProps {
  control: Control<DiagnosticFormValues>;
}

const FrequencyQuestion = ({ control }: FrequencyQuestionProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <FormField
          control={control}
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
  );
};

export default FrequencyQuestion;
