import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  QrCode, 
  MapPin, 
  Calendar, 
  Users, 
  Shield, 
  Microscope,
  Package,
  CheckCircle,
  AlertCircle,
  ExternalLink
} from "lucide-react";
import { useState } from "react";

// Mock provenance data
const mockProvenanceData = {
  herbId: "ASH-2024-0847",
  herbName: "Ashwagandha (Withania somnifera)",
  currentStatus: "Consumer Ready",
  batchId: "BTH-ASH-240328-01",
  qrCode: "QR-ASH-847-2024",
  
  collection: {
    location: "Mandsaur, Madhya Pradesh, India",
    coordinates: "24.0734° N, 75.0705° E",
    collector: "Ramesh Kumar Cooperative",
    date: "2024-03-28",
    weather: "Sunny, 28°C",
    soilType: "Black Cotton Soil",
    harvestMethod: "Hand-picked at dawn"
  },
  
  testing: {
    laboratory: "AIIA Quality Control Lab",
    date: "2024-04-02",
    moisture: "8.2%",
    pesticides: "Not Detected",
    heavyMetals: "Within Limits",
    dnaAuthenticity: "Confirmed - W. somnifera",
    withanolides: "3.2% (Premium Grade)"
  },
  
  processing: [
    {
      stage: "Primary Drying",
      facility: "Mandsaur Processing Unit",
      date: "2024-03-29",
      temperature: "45°C",
      duration: "72 hours"
    },
    {
      stage: "Quality Grading",
      facility: "Mandsaur Processing Unit", 
      date: "2024-04-01",
      grade: "A+ Premium",
      moisture: "8.5%"
    },
    {
      stage: "Powder Processing",
      facility: "Ayurvedic Formulations Pvt Ltd",
      date: "2024-04-15",
      meshSize: "80 mesh",
      batchSize: "500 kg"
    }
  ],
  
  sustainability: {
    organicCertified: true,
    fairTrade: true,
    carbonFootprint: "Low",
    biodiversityImpact: "Positive",
    waterUsage: "Rain-fed cultivation"
  }
};

export const QRScanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleScan = () => {
    setError(null);
    setIsScanning(true);
    // Simulate scanning delay and possible failure
    setTimeout(() => {
      const failed = Math.random() < 0.15;
      if (failed) {
        setIsScanning(false);
        setError("Failed to retrieve provenance data. Please try again.");
        return;
      }

      setIsScanning(false);
      setShowResults(true);
    }, 2000);
  };

  const ProvenanceTimeline = ({ data }: { data: typeof mockProvenanceData }) => (
    <div className="space-y-6">
      {/* Collection */}
      <Card className="p-6 border-herb-primary/20 shadow-botanical">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-herb-primary/10 rounded-full">
            <MapPin className="h-6 w-6 text-herb-primary" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-semibold text-foreground">Collection</h3>
              <Badge variant="outline" className="border-herb-primary/30 text-herb-primary">
                <CheckCircle className="h-3 w-3 mr-1" />
                Verified
              </Badge>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Location</p>
                <p className="font-medium">{data.collection.location}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Collector</p>
                <p className="font-medium">{data.collection.collector}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Date</p>
                <p className="font-medium">{data.collection.date}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Method</p>
                <p className="font-medium">{data.collection.harvestMethod}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Testing */}
      <Card className="p-6 border-trust-blue/20 shadow-trust">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-trust-blue/10 rounded-full">
            <Microscope className="h-6 w-6 text-trust-blue" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-semibold text-foreground">Quality Testing</h3>
              <Badge variant="outline" className="border-success-green/30 text-success-green">
                <CheckCircle className="h-3 w-3 mr-1" />
                Passed
              </Badge>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">DNA Authenticity</p>
                <p className="font-medium text-success-green">{data.testing.dnaAuthenticity}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Pesticides</p>
                <p className="font-medium text-success-green">{data.testing.pesticides}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Active Compounds</p>
                <p className="font-medium text-herb-primary">{data.testing.withanolides}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Processing */}
      <Card className="p-6 border-herb-secondary/20 shadow-botanical">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-herb-secondary/10 rounded-full">
            <Package className="h-6 w-6 text-herb-secondary" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-4">Processing Steps</h3>
            <div className="space-y-3">
              {data.processing.map((step, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <div className="w-2 h-2 bg-herb-secondary rounded-full" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{step.stage}</p>
                    <p className="text-xs text-muted-foreground">{step.facility} • {step.date}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Verified
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-trust-blue/20 text-trust-blue">
            <QrCode className="mr-2 h-4 w-4" />
            Consumer Transparency
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Scan & Verify Authenticity
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scan any QR code on our products to instantly access the complete journey 
            of your Ayurvedic herbs from farm to shelf.
          </p>
        </div>

  {!showResults ? (
          <div className="max-w-md mx-auto">
            <Card className="p-8 text-center shadow-elevation">
              <div className="mb-6">
                <div className="mx-auto w-24 h-24 bg-gradient-botanical rounded-full flex items-center justify-center mb-4">
                  <QrCode className="h-12 w-12 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {isScanning ? "Scanning QR Code..." : "Ready to Scan"}
                </h3>
                <p className="text-muted-foreground">
                  {isScanning 
                    ? "Retrieving provenance data from blockchain..." 
                    : "Click below to simulate scanning a product QR code"
                  }
                </p>
              </div>
              
              {error ? (
                <div className="space-y-3">
                  <div className="rounded-md bg-destructive/10 border border-destructive p-4 text-sm text-destructive">{error}</div>
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={() => { setError(null); handleScan(); }}>Retry</Button>
                    <Button variant="botanical" size="lg" onClick={handleScan} disabled={isScanning} className="flex-1">
                      {isScanning ? (
                        <>
                          <div className="animate-spin mr-2 h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full" />
                          Scanning...
                        </>
                      ) : (
                        <>
                          <QrCode className="mr-2 h-4 w-4" />
                          Demo Scan QR Code
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              ) : (
                <Button 
                  variant="botanical" 
                  size="lg" 
                  onClick={handleScan}
                  disabled={isScanning}
                  className="w-full shadow-botanical"
                >
                  {isScanning ? (
                    <>
                      <div className="animate-spin mr-2 h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full" />
                      Scanning...
                    </>
                  ) : (
                    <>
                      <QrCode className="mr-2 h-4 w-4" />
                      Demo Scan QR Code
                    </>
                  )}
                </Button>
              )}
            </Card>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <Card className="p-6 mb-8 bg-gradient-trust text-primary-foreground shadow-trust">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{mockProvenanceData.herbName}</h3>
                  <div className="flex items-center gap-4 text-sm">
                    <span>Batch: {mockProvenanceData.batchId}</span>
                    <span>•</span>
                    <span>ID: {mockProvenanceData.herbId}</span>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className="bg-success-green text-success-green-foreground mb-2">
                    <Shield className="h-3 w-3 mr-1" />
                    100% Verified
                  </Badge>
                  <p className="text-sm opacity-90">Blockchain Secured</p>
                </div>
              </div>
            </Card>

            {/* Provenance Timeline */}
            <ProvenanceTimeline data={mockProvenanceData} />

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
              <Button variant="earth" onClick={() => setShowResults(false)}>
                Scan Another Product
              </Button>
              <Button variant="outline">
                <ExternalLink className="mr-2 h-4 w-4" />
                View on Blockchain
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};