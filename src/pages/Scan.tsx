import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { QRScanner } from "@/components/QRScanner";

export default function Scan() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <QRScanner />
      </main>
      <Footer />
    </div>
  );
}