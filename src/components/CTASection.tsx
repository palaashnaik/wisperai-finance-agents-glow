
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const CTASection = () => {
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
              Ready to Transform Your Finances?
            </h2>
            
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Join the waitlist today and be among the first to experience the power of AI-driven financial management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Button className="bg-white text-wisper-purple hover:bg-white/90 px-6">
                Join Waitlist
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
