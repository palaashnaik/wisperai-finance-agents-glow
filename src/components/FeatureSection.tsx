
import FeatureCard from "./FeatureCard";
import { Database, Globe, Shield, ArrowRight, Clock, Zap } from "lucide-react";
import BackgroundGradient from "./BackgroundGradient";

const features = [
  {
    icon: <Database className="h-6 w-6" />,
    title: "Multi-Agent Orchestration",
    description: "Our platform will coordinate specialized agents that share information and work together toward common goals—like a team of financial experts tackling different aspects of the same challenge.",
    targetRelease: "Q3 2025"
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Dynamic Environment Navigation",
    description: "Unlike fragile automation that breaks when interfaces change, our agents will understand context and adapt to evolving environments—from legacy banking platforms to modern fintech interfaces.",
    targetRelease: "Q3 2025"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "ML-Powered Optimization",
    description: "Our agents won't just execute—they'll optimize. By applying machine learning to financial operations, they'll continuously improve strategies based on outcomes and changing conditions.",
    targetRelease: "Q4 2025"
  },
  {
    icon: <ArrowRight className="h-6 w-6" />,
    title: "Goal-Oriented Planning",
    description: "Rather than following rigid scripts, our agents will understand high-level financial objectives and autonomously plan the optimal path to achieve them, handling obstacles as they arise.",
    targetRelease: "Q1 2026"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Secure Execution Framework",
    description: "Our comprehensive security architecture will enable agents to handle sensitive financial operations with robust authentication, granular permissions, and complete audit trails.",
    targetRelease: "Q4 2025"
  }
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <BackgroundGradient className="opacity-30 blur-[80px]" />
      <div className="container relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Core Capabilities <span className="gradient-text">In Development</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The future of financial services isn't just automated processes or chat assistants.
            It's orchestrated teams of autonomous agents that plan, navigate, optimize, and execute complex financial operations with minimal human oversight.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              targetRelease={feature.targetRelease}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
