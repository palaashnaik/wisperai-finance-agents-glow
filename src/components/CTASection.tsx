
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
          <div className="absolute inset-0 bg-gradient-to-r from-wisper-purple to-wisper-blue opacity-95" />
          
          <div className="relative p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Journey
            </h2>
            
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-4">
              Financial services is about to undergo its most significant transformation yet—from automation to autonomous intelligence.
            </p>
            
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
              The leaders of tomorrow are exploring the possibilities today.
            </p>
            
            <div className="flex justify-center">
              <Button 
                className="bg-white text-wisper-purple hover:bg-white/90 px-6 flex items-center gap-2"
                onClick={() => setIsBriefingOpen(true)}
              >
                JOIN EARLY ACCESS WAITLIST
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
            <DialogTitle>Join Waitlist for Early Access</DialogTitle>
          </DialogHeader>
          <ContactForm 
            onClose={() => setIsBriefingOpen(false)} 
            ctaText="Join Waitlist"
            source="cta_capability_demo"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CTASection;
