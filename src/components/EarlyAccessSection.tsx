import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const EarlyAccessSection = () => {
  return (
    <section id="early-access" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-bl from-wisper-purple/15 to-wisper-blue/15 opacity-70" />
      <div className="container relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Early Access <span className="gradient-text">Program</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join our early adopters and help shape the future of financial operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* What you'll get */}
          <Card className="border border-border bg-background/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl">What you'll get</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-wisper-purple mr-2 mt-0.5 flex-shrink-0" />
                <p>First access when capabilities are released</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-wisper-purple mr-2 mt-0.5 flex-shrink-0" />
                <p>Implementation support</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-wisper-purple mr-2 mt-0.5 flex-shrink-0" />
                <p>Favorable early adopter pricing</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-wisper-purple mr-2 mt-0.5 flex-shrink-0" />
                <p>Input into agent development priorities</p>
              </div>
            </CardContent>
          </Card>

          {/* What we ask */}
          <Card className="border border-border bg-background/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl">What we ask</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-wisper-purple mr-2 mt-0.5 flex-shrink-0" />
                <p>Vision for transforming financial operations</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-wisper-purple mr-2 mt-0.5 flex-shrink-0" />
                <p>Commitment to exploring autonomous intelligence</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-wisper-purple mr-2 mt-0.5 flex-shrink-0" />
                <p>Willingness to provide feedback on agent performance</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessSection;
