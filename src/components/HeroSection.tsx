
import ThreeMascot from "./ThreeMascot";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
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
            Your Finances, Managed by <span className="gradient-text">AI Agents</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
            WisperAI deploys an army of specialized AI agents to optimize your investments, 
            manage bills, and plan your financial future—all working silently in the background.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="gradient-bg hover:opacity-90 transition-opacity text-white">
              Get Early Access
            </Button>
            <Button size="lg" variant="outline" className="border-wisper-purple text-wisper-purple hover:bg-wisper-purple/10">
              See How It Works
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
          <ThreeMascot />
        </motion.div>
      </div>
      
      <div className="container mt-16 md:mt-24">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">28%</p>
            <p className="text-sm text-muted-foreground">Average Returns</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">$2.4B</p>
            <p className="text-sm text-muted-foreground">Managed Assets</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">15.7K</p>
            <p className="text-sm text-muted-foreground">Happy Clients</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">99.9%</p>
            <p className="text-sm text-muted-foreground">Secure Uptime</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
