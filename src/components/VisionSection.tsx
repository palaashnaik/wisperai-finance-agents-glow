import { motion } from "framer-motion";
import BackgroundGradient from "./BackgroundGradient";

const VisionSection = () => {
  return (
    <section id="vision" className="py-20 relative overflow-hidden">
      <BackgroundGradient className="opacity-40 blur-[100px]" />
      <div className="container relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Our <span className="gradient-text">Vision</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed">
              The future of financial services isn't just automated processes or chat assistants.
            </p>
            <p className="text-lg leading-relaxed">
              It's orchestrated teams of autonomous agents that plan, navigate, optimize, and execute complex financial operations with minimal human oversight.
            </p>
            <p className="text-lg leading-relaxed">
              We're building intelligent agents that work together to solve intricate financial challenges no single system could tackle alone.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-wisper-purple/30 to-wisper-blue/30 rounded-full blur-[120px] opacity-60" />
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Financial Agents Vision" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-3 -right-3 bg-wisper-purple/10 w-full h-full rounded-lg -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
