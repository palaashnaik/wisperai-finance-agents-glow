import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";

const ComparisonSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-wisper-blue/10 to-wisper-purple/10 opacity-60" />
      <div className="container relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            The Difference: <span className="gradient-text">Beyond Automation</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our vision goes beyond simple automation to truly autonomous financial operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Traditional Automation Card */}
          <Card className="border border-border bg-background/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Traditional Automation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <p>Follows rigid scripts</p>
              </div>
              <div className="flex items-start">
                <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <p>Breaks when interfaces change</p>
              </div>
              <div className="flex items-start">
                <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <p>Operates in isolation</p>
              </div>
              <div className="flex items-start">
                <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <p>Executes but doesn't optimize</p>
              </div>
            </CardContent>
          </Card>

          {/* WisperAI Autonomous Agents Card */}
          <Card className="border-2 border-wisper-purple/50 shadow-lg shadow-wisper-purple/10 bg-background/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">WisperAI Autonomous Agents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p>Adapt to changing environments</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p>Work collaboratively in teams</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p>Apply intelligence to optimize outcomes</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p>Plan and execute toward complex goals</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
