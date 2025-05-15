
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Banking & Financial Services",
    description: "Transform customer journeys with agents that navigate systems, verify information, and execute operations across your entire tech stack."
  },
  {
    id: 2,
    title: "Payments & Processing",
    description: "Deploy agent teams that reconcile transactions, optimize payment routing, and autonomously resolve exceptions across multiple platforms."
  },
  {
    id: 3,
    title: "Lending & Credit",
    description: "Enable end-to-end lending operations with agents that verify applicants, optimize terms, and navigate the entire origination process."
  },
  {
    id: 4,
    title: "Wealth & Investment",
    description: "Transform portfolio management with agents that consolidate data, execute rebalancing, and continuously optimize strategies across custodial boundaries."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const HowItWorks = () => {
  return (
    <section id="industries" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-wisper-blue/15 to-wisper-purple/15 opacity-60" />
      <div className="container relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            For Forward-Thinking <span className="gradient-text">Financial Leaders</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're building intelligent agents that work together to solve intricate financial challenges no single system could tackle alone.
          </p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {steps.map((step, index) => (
            <motion.div key={step.id} variants={item} className="flex flex-col items-center text-center relative">
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white text-2xl font-bold">
                  {step.id}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 left-full -translate-y-1/2 items-center w-full">
                    <div className="h-[2px] bg-wisper-purple/40 w-[50px] mx-1"></div>
                    <ArrowRight className="text-wisper-purple w-5 h-5 opacity-60" />
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
