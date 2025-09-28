import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Microscope, 
  Package, 
  QrCode, 
  ArrowRight,
  Leaf,
  Shield,
  Users
} from "lucide-react";

const processSteps = [
  {
    icon: MapPin,
    title: "Geo-Tagged Collection",
    description: "Farmers and collectors log harvest data with precise GPS coordinates",
    badge: "GPS Verified",
    color: "herb-primary"
  },
  {
    icon: Microscope,
    title: "Quality Testing",
    description: "Laboratory analysis for moisture, pesticides, and DNA authentication",
    badge: "Lab Certified",
    color: "trust-blue"
  },
  {
    icon: Package,
    title: "Processing Steps",
    description: "Drying, grinding, and storage conditions tracked in real-time",
    badge: "Process Tracked",
    color: "herb-secondary"
  },
  {
    icon: QrCode,
    title: "Consumer Scanning",
    description: "End customers scan QR codes to view complete provenance history",
    badge: "Full Transparency",
    color: "success-green"
  }
];

export const ProcessFlow = () => {
  return (
    <section className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-herb-primary/20 text-primary">
            <Shield className="mr-2 h-4 w-4" />
            End-to-End Traceability
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            From Harvest to Health
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our blockchain-powered system creates an immutable record of every step 
            in your Ayurvedic herb's journey, ensuring complete transparency and trust.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-6 h-full shadow-botanical hover:shadow-trust transition-all duration-300 border-2 hover:border-primary/20">
                <div className="flex flex-col items-center text-center">
                  <div className={`mb-4 p-4 rounded-full bg-${step.color}/10 ring-2 ring-${step.color}/20`}>
                    <step.icon className={`h-8 w-8 text-${step.color}`} />
                  </div>
                  
                  <Badge variant="outline" className={`mb-3 border-${step.color}/30 text-${step.color}`}>
                    {step.badge}
                  </Badge>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
              
              {/* Arrow connector (hidden on last item) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-herb-primary animate-pulse-slow" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="inline-block p-8 bg-gradient-trust text-primary-foreground shadow-elevation">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary-foreground/20 rounded-full">
                <Leaf className="h-8 w-8" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-2">Ready to Start Tracking?</h3>
                <p className="text-primary-foreground/90">Join the revolution in botanical transparency</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};