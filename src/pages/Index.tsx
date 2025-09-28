import { HeroSection } from "@/components/HeroSection";
import { Navigation } from "@/components/Navigation";
import { ProcessFlow } from "@/components/ProcessFlow";
import { QRScanner } from "@/components/QRScanner";
import { Dashboard } from "@/components/Dashboard";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProcessFlow />
        <QRScanner />
        <Dashboard />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
