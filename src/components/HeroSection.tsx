
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";

const HeroSection = () => {
  const [isCapabilityDemoOpen, setIsCapabilityDemoOpen] = useState(false);

  return (
    <section className="pt-20 pb-10 md:pb-20 overflow-hidden">
      <div className="container flex flex-col lg:flex-row items-center pt-16 md:pt-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 pr-0 lg:pr-10 text-center lg:text-left mb-10 lg:mb-0"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter mb-4">
            Your competitors have AI. <span className="gradient-text">You need agents</span> that actually do things.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
            WisperAI builds autonomous agent infrastructure that extracts data, navigates complex systems, 
            and executes critical tasks for financial services and fintech leaders.
          </p>

          <p className="text-lg md:text-xl font-medium mb-8 max-w-2xl mx-auto lg:mx-0">
            Because in finance, talking about problems doesn't solve them. <span className="gradient-text font-bold">Doing does.</span>
          </p>
          
          <div className="flex justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="gradient-bg hover:opacity-90 transition-opacity text-white flex items-center gap-2"
              onClick={() => setIsCapabilityDemoOpen(true)}
            >
              Book a Capability Demo
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 relative"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-wisper-purple/30 to-wisper-blue/30 rounded-full blur-[120px] opacity-60" />
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Autonomous Agent Infrastructure" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-3 -right-3 bg-wisper-purple/10 w-full h-full rounded-lg -z-10"></div>
          </div>
        </motion.div>
      </div>
      
      <div className="container mt-16 md:mt-24">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">Data</p>
            <p className="text-sm text-muted-foreground">Extraction</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">Legacy</p>
            <p className="text-sm text-muted-foreground">System Navigation</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">Secure</p>
            <p className="text-sm text-muted-foreground">Authentication</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">Dynamic</p>
            <p className="text-sm text-muted-foreground">Adaptation</p>
          </div>
        </div>
      </div>

      {/* Capability Demo Dialog */}
      <Dialog open={isCapabilityDemoOpen} onOpenChange={setIsCapabilityDemoOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Book a Capability Demo</DialogTitle>
          </DialogHeader>
          <ContactForm 
            onClose={() => setIsCapabilityDemoOpen(false)} 
            ctaText="Book Demo"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
