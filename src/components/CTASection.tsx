
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";

const CTASection = () => {
  const [isBriefingOpen, setIsBriefingOpen] = useState(false);

  return (
    <section className="py-20">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl overflow-hidden relative"
        >
          <div className="absolute inset-0 gradient-bg opacity-95" />
          
          <div className="relative p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Bottom Line
            </h2>
            
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-4">
              While your competition debates AI strategy, you could be deploying autonomous agents that execute it.
            </p>
            
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
              The financial services leaders of tomorrow aren't just implementing AI. They're putting it to work.
            </p>
            
            <div className="flex justify-center">
              <Button 
                className="bg-white text-wisper-purple hover:bg-white/90 px-6 flex items-center gap-2"
                onClick={() => setIsBriefingOpen(true)}
              >
                Book a Capability Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Technical Briefing Dialog */}
      <Dialog open={isBriefingOpen} onOpenChange={setIsBriefingOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Book a Capability Demo</DialogTitle>
          </DialogHeader>
          <ContactForm 
            onClose={() => setIsBriefingOpen(false)} 
            ctaText="Book Demo"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CTASection;
