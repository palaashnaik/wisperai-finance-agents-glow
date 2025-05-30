import React, { useState } from "react";
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
import { saveEmailToFirebase } from "@/lib/firebase";

// Enhanced email validation
const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Please enter a valid email address." })
    .refine(
      (email) => {
        // Ensure email has proper domain structure with at least one dot
        const parts = email.split('@');
        return parts.length === 2 && parts[1].includes('.');
      },
      { message: "Email must have a valid domain (e.g., example.com)." }
    )
    .refine(
      (email) => {
        // Additional validation to restrict certain patterns or domains if needed
        return !email.endsWith('.test') && !email.endsWith('.example');
      },
      { message: "Please use a valid email domain." }
    ),
});

interface ContactFormProps {
  onSubmit?: (data: z.infer<typeof formSchema>) => void;
  onClose?: () => void;
  ctaText?: string;
  source?: string;
}

export function ContactForm({ 
  onSubmit, 
  onClose, 
  ctaText = "Submit",
  source = "contact_form"
}: ContactFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(data: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      // Save email to Firebase
      const result = await saveEmailToFirebase(data.email, source);
      
      if (result.success) {
        toast.success("Thank you for your interest! We'll be in touch soon.");
        
        if (onSubmit) {
          onSubmit(data);
        }
        
        if (onClose) {
          onClose();
        }
        
        // Reset the form
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
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
                <Input 
                  placeholder="name@company.com" 
                  type="email"
                  autoComplete="email"
                  autoCapitalize="none"
                  {...field} 
                  onBlur={(e) => {
                    field.onBlur();
                    // Trim the email value on blur
                    if (field.value) {
                      field.onChange(field.value.trim());
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="flex justify-end">
          <Button 
            type="submit" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : ctaText}
          </Button>
        </div>
      </form>
      
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Need help? Contact us at <a href="mailto:support@wisperai.com" className="text-blue-600 hover:text-blue-800 underline">support@wisperai.com</a>
        </p>
      </div>
    </Form>
  );
}
