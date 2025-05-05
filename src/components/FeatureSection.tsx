
import FeatureCard from "./FeatureCard";
import { CreditCard, PieChart, BarChart, TrendingUp, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Intelligent Investing",
    description: "Our AI agents analyze market trends and your risk profile to optimize your investment portfolio for maximum returns."
  },
  {
    icon: <CreditCard className="h-6 w-6" />,
    title: "Smart Bill Management",
    description: "Never miss a payment again. WisperAI schedules and optimizes your bill payments to minimize fees and maximize cash flow."
  },
  {
    icon: <PieChart className="h-6 w-6" />,
    title: "Budget Optimization",
    description: "Automatically allocate your income to different spending categories based on your financial goals and habits."
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Financial Insights",
    description: "Gain deep insights into your spending patterns and receive personalized recommendations to improve your financial health."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Future Planning",
    description: "Our AI agents help you plan for major life events and long-term goals, from buying a home to retirement."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Secure Automation",
    description: "Bank-level encryption and security measures keep your financial data protected while our agents work for you."
  }
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Advanced Features Powered by <span className="gradient-text">AI Agents</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our army of specialized AI agents works continuously to optimize every aspect of your finances
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
