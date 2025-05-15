import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";
import { Vortex } from "@/components/ui/vortex";

const HeroSection = () => {
  const [isCapabilityDemoOpen, setIsCapabilityDemoOpen] = useState(false);

  return (
    <section className="min-h-screen overflow-hidden relative flex flex-col justify-center items-center bg-background">
      <Vortex
        rangeY={800}
        particleCount={700}
        baseHue={275}
        rangeHue={40}
        rangeSpeed={2}
        baseRadius={1.5}
        rangeRadius={3}
        containerClassName="absolute inset-0 z-0 opacity-70 dark:opacity-100"
      />
      <div className="container mx-auto flex flex-col items-center justify-center py-16 md:py-20 relative z-10 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter mb-6 text-foreground">
            Beyond automation. <span className="gradient-text">Beyond AI assistants.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-6 mx-auto">
            This is intelligent, autonomous finance.
          </p>

          <p className="text-lg md:text-xl text-foreground font-medium mb-8 mx-auto">
            WisperAI is developing a new class of financial agents that work in concert, applying intelligence to navigate complex environments and accomplish sophisticated goals <span className="gradient-text font-bold">without human intervention.</span>
          </p>
          
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button 
              size="lg" 
              className="gradient-bg hover:opacity-90 transition-opacity text-white flex items-center gap-2"
              onClick={() => setIsCapabilityDemoOpen(true)}
            >
              JOIN WAITLIST 
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="container mt-8 md:mt-16 relative z-10 px-4 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">Coming</p>
            <p className="text-sm text-muted-foreground">in 2025</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">Join</p>
            <p className="text-sm text-muted-foreground">the waitlist</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">Early</p>
            <p className="text-sm text-muted-foreground">Access</p>
          </div>
        </div>
      </motion.div>

      {/* Capability Demo Dialog */}
      <Dialog open={isCapabilityDemoOpen} onOpenChange={setIsCapabilityDemoOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Join Waitlist for Early Access</DialogTitle>
          </DialogHeader>
          <ContactForm 
            onClose={() => setIsCapabilityDemoOpen(false)} 
            ctaText="Join Waitlist"
            source="hero_capability_demo"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
