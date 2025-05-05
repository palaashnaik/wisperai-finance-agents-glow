
import FeatureCard from "./FeatureCard";
import { CreditCard, PieChart, BarChart, TrendingUp, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Smart Investment Planning",
    description: "Advanced investment tools analyze market trends and your risk profile to optimize your portfolio for maximum returns."
  },
  {
    icon: <CreditCard className="h-6 w-6" />,
    title: "Automated Bill Management",
    description: "Never miss a payment again. Our system schedules and optimizes your bill payments to minimize fees and maximize cash flow."
  },
  {
    icon: <PieChart className="h-6 w-6" />,
    title: "Budget Optimization",
    description: "Smart budget allocation tools distribute your income across spending categories based on your financial goals and priorities."
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Financial Analytics",
    description: "Comprehensive insights into your spending patterns with personalized recommendations to improve your financial health."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Goal-Based Planning",
    description: "Set financial milestones and track your progress with adaptive planning tools for major life events and long-term objectives."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Secure Technology",
    description: "Bank-level encryption and security measures keep your financial data protected while our systems work for you."
  }
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Advanced <span className="gradient-text">Financial Technology</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our powerful platform works continuously to optimize every aspect of your finances
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
