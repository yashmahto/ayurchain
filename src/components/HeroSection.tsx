import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, MapPin, Shield, Users } from "lucide-react";
import heroImage from "@/assets/hero-botanical.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-botanical">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-herb-primary/80 to-herb-secondary/90" />
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <Badge variant="secondary" className="mb-6 bg-herb-primary/20 text-primary border-herb-primary/30">
              <Leaf className="mr-2 h-4 w-4" />
              Blockchain-Powered Traceability
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Track Your
              <span className="block text-herb-primary animate-float">
                Ayurvedic Herbs
              </span>
              from Farm to Shelf
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl">
              A revolutionary blockchain-based system ensuring complete transparency and authenticity 
              of Ayurvedic medicinal plants from geo-tagged harvest to final product.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="botanical" size="lg" className="shadow-elevation">
                <MapPin className="mr-2 h-5 w-5" />
                Start Tracing
              </Button>
              <Button variant="earth" size="lg" className="shadow-botanical">
                <Shield className="mr-2 h-5 w-5" />
                View Demo
              </Button>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 backdrop-blur-sm bg-card/80 border-herb-primary/20 shadow-botanical">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Herbs Tracked</p>
                  <p className="text-2xl font-bold text-herb-primary">2,847</p>
                </div>
                <Leaf className="h-8 w-8 text-herb-primary animate-pulse-slow" />
              </div>
            </Card>
            
            <Card className="p-6 backdrop-blur-sm bg-card/80 border-herb-secondary/20 shadow-botanical">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Farmers Connected</p>
                  <p className="text-2xl font-bold text-herb-secondary">156</p>
                </div>
                <Users className="h-8 w-8 text-herb-secondary animate-pulse-slow" />
              </div>
            </Card>
            
            <Card className="p-6 backdrop-blur-sm bg-card/80 border-trust-blue/20 shadow-trust col-span-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Blockchain Transactions</p>
                  <p className="text-3xl font-bold text-trust-blue">98,234</p>
                  <p className="text-xs text-success-green">100% Verified</p>
                </div>
                <Shield className="h-10 w-10 text-trust-blue animate-float" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};