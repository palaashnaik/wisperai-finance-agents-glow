
import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  targetRelease?: string;
}

const FeatureCard = ({ icon, title, description, targetRelease }: FeatureCardProps) => {
  return (
    <Card className="border border-border hover:border-wisper-purple/40 transition-all hover:shadow-md hover:shadow-wisper-purple/10 bg-background/80 backdrop-blur-sm">
      <CardHeader>
        <div className="w-12 h-12 rounded-full flex items-center justify-center gradient-bg text-white mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      {targetRelease && (
        <CardFooter className="pt-0">
          <div className="text-sm text-muted-foreground flex items-center">
            <span className="font-medium">Target release:</span>
            <span className="ml-2">{targetRelease}</span>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default FeatureCard;
