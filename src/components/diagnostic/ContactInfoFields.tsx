
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Control } from "react-hook-form";
import { DiagnosticFormValues } from "@/schemas/diagnosticFormSchema";

interface ContactInfoFieldsProps {
  control: Control<DiagnosticFormValues>;
}

const ContactInfoFields = ({ control }: ContactInfoFieldsProps) => {
  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        <FormField
          control={control}
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
          control={control}
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
  );
};

export default ContactInfoFields;
