
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

interface ContactFormProps {
  onSubmit?: (data: z.infer<typeof formSchema>) => void;
  onClose?: () => void;
  ctaText?: string;
}

export function ContactForm({ 
  onSubmit, 
  onClose, 
  ctaText = "Submit"
}: ContactFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function handleSubmit(data: z.infer<typeof formSchema>) {
    // Here you would typically send this data to your backend
    console.log("Form submitted with:", data);
    toast.success("Thank you for your interest! We'll be in touch soon.");
    
    if (onSubmit) {
      onSubmit(data);
    }
    
    if (onClose) {
      onClose();
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="name@company.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="flex justify-end">
          <Button type="submit">{ctaText}</Button>
        </div>
      </form>
    </Form>
  );
}
