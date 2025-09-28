import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Dashboard } from "@/components/Dashboard";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-earth">
      <Navigation />
      <main className="pt-16">
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
}