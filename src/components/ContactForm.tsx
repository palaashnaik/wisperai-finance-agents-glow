
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

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
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
                <Input placeholder="name@company.com" {...field} />
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
    </Form>
  );
}
