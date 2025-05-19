
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { Control } from "react-hook-form";
import { DiagnosticFormValues } from "@/schemas/diagnosticFormSchema";

interface OwnSystemsQuestionProps {
  control: Control<DiagnosticFormValues>;
}

const OwnSystemsQuestion = ({ control }: OwnSystemsQuestionProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <FormField
          control={control}
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
  );
};

export default OwnSystemsQuestion;
