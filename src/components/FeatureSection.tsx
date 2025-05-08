
import FeatureCard from "./FeatureCard";
import { Database, Globe, Shield, ArrowRight, Clock, Zap } from "lucide-react";

const features = [
  {
    icon: <Database className="h-6 w-6" />,
    title: "Autonomous Data Extraction",
    description: "Our agents navigate dynamic environments, handle authentication challenges, and extract structured data from legacy systems that weren't designed for modern integration."
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Legacy System Navigation",
    description: "Our agents navigate interfaces like human experts would – adapting to layout changes, handling session timeouts, and managing unexpected errors."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Secure Authentication Handling",
    description: "Our agents operate within strict security parameters, handling multi-factor authentication and credential management that comply with financial regulation standards."
  },
  {
    icon: <ArrowRight className="h-6 w-6" />,
    title: "Bi-directional Data Operations",
    description: "Our agents close the loop by securely inputting data, updating records, and executing transactions across platforms with audit trails built in."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Dynamic Environment Adaptation",
    description: "Our agents detect changes, adapt their approach, and maintain operational continuity without emergency engineering interventions."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Enterprise-grade Infrastructure",
    description: "SOC2, ISO27001, GDPR, and CCPA compliant from day one, with comprehensive audit trails and model governance."
  }
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            What Makes Our <span className="gradient-text">Agents Different</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The technical truth: Our agents don't just think – they do. While most AI can analyze data that's fed to it, our agents autonomously navigate systems, extract information, and execute transactions with minimal human oversight.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
