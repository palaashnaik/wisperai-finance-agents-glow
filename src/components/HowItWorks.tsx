
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Connect Your Accounts",
    description: "Securely link your financial accounts to WisperAI and let our agents analyze your finances."
  },
  {
    id: 2,
    title: "AI Analyzes Your Finances",
    description: "Our AI agents scan your spending patterns, bills, income, and investment opportunities."
  },
  {
    id: 3,
    title: "Get Personalized Plans",
    description: "Receive tailored recommendations for optimizing your finances, from bill payments to investments."
  },
  {
    id: 4,
    title: "Automate & Optimize",
    description: "Let our AI agents implement your approved plans and continuously optimize your financial health."
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
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            How <span className="gradient-text">WisperAI</span> Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our AI agents work seamlessly to optimize every aspect of your finances
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
            <motion.div key={step.id} variants={item} className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white text-2xl font-bold mb-6">
                  {step.id}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="text-wisper-purple w-8 h-8 opacity-40" />
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
