import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Camera, 
  Leaf, 
  Calendar, 
  Users, 
  Thermometer,
  Cloud,
  CheckCircle,
  Upload,
  Navigation as NavIcon
} from "lucide-react";
import { useState } from "react";

const mockCollectionData = {
  location: {
    latitude: "24.0734° N",
    longitude: "75.0705° E",
    address: "Mandsaur, Madhya Pradesh, India"
  },
  weather: {
    temperature: "28°C",
    humidity: "65%",
    condition: "Sunny"
  },
  collector: {
    name: "Ramesh Kumar",
    id: "COL-2024-156",
    cooperative: "Mandsaur Farmers Collective"
  }
};

export default function Collect() {
  const [isCollecting, setIsCollecting] = useState(false);
  const [collectionComplete, setCollectionComplete] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleStartCollection = () => {
    setError(null);
    setIsCollecting(true);
    // Simulate API call with 80% success rate
    setTimeout(() => {
      const failed = Math.random() < 0.2;
      if (failed) {
        setIsCollecting(false);
        setError("Failed to record collection event. Network or blockchain error.");
        return;
      }

      setIsCollecting(false);
      setCollectionComplete(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-earth">
      <Navigation />
      
      <main className="pt-20 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-herb-primary/20 text-herb-primary">
              <MapPin className="mr-2 h-4 w-4" />
              Field Collection
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Herb Collection Interface
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Record geo-tagged collection events with GPS coordinates, environmental conditions, 
              and quality metrics directly from the field.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Collection Form */}
            <Card className="lg:col-span-2 p-6 shadow-botanical">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-herb-primary/10 rounded-full">
                  <Leaf className="h-5 w-5 text-herb-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">New Collection Event</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="species">Herb Species *</Label>
                    <Input 
                      id="species" 
                      placeholder="e.g., Ashwagandha" 
                      defaultValue="Ashwagandha (Withania somnifera)"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="quantity">Quantity (kg) *</Label>
                    <Input 
                      id="quantity" 
                      type="number" 
                      placeholder="0.0"
                      defaultValue="25.5"
                    />
                  </div>

                  <div>
                    <Label htmlFor="quality">Initial Quality Grade</Label>
                    <Input 
                      id="quality" 
                      placeholder="A+, A, B, C"
                      defaultValue="A+"
                    />
                  </div>

                  <div>
                    <Label htmlFor="notes">Collection Notes</Label>
                    <Textarea 
                      id="notes" 
                      placeholder="Harvesting conditions, observations..."
                      defaultValue="Hand-picked at dawn, optimal root development observed"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="date">Collection Date *</Label>
                    <Input 
                      id="date" 
                      type="date" 
                      defaultValue="2024-03-28"
                    />
                  </div>

                  <div>
                    <Label htmlFor="method">Harvesting Method</Label>
                    <Input 
                      id="method" 
                      placeholder="Hand-picked, mechanized, etc."
                      defaultValue="Hand-picked sustainable method"
                    />
                  </div>

                  <div>
                    <Label htmlFor="soil">Soil Type</Label>
                    <Input 
                      id="soil" 
                      placeholder="Black cotton, alluvial, etc."
                      defaultValue="Black Cotton Soil"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Photo Documentation</Label>
                    <Button variant="outline" className="w-full">
                      <Camera className="h-4 w-4 mr-2" />
                      Capture Photos
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                {error ? (
                  <div className="space-y-3">
                    <div className="rounded-md bg-destructive/10 border border-destructive p-4 text-sm text-destructive">
                      {error}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" onClick={() => { setError(null); handleStartCollection(); }}>
                        Retry
                      </Button>
                      <Button variant={collectionComplete ? "herb" : "botanical"} size="lg" className="flex-1" onClick={handleStartCollection} disabled={isCollecting}>
                        {isCollecting ? (
                          <>
                            <div className="animate-spin mr-2 h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full" />
                            Recording to Blockchain...
                          </>
                        ) : collectionComplete ? (
                          <>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Collection Recorded Successfully
                          </>
                        ) : (
                          <>
                            <Upload className="mr-2 h-4 w-4" />
                            Record Collection Event
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Button 
                    variant={collectionComplete ? "herb" : "botanical"} 
                    size="lg" 
                    className="w-full shadow-botanical"
                    onClick={handleStartCollection}
                    disabled={isCollecting}
                  >
                    {isCollecting ? (
                      <>
                        <div className="animate-spin mr-2 h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full" />
                        Recording to Blockchain...
                      </>
                    ) : collectionComplete ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Collection Recorded Successfully
                      </>
                    ) : (
                      <>
                        <Upload className="mr-2 h-4 w-4" />
                        Record Collection Event
                      </>
                    )}
                  </Button>
                )}
              </div>
            </Card>

            {/* Live Data Panel */}
            <div className="space-y-6">
              {/* GPS Location */}
              <Card className="p-6 shadow-trust">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-trust-blue/10 rounded-full">
                    <NavIcon className="h-5 w-5 text-trust-blue" />
                  </div>
                  <h3 className="font-semibold text-foreground">GPS Location</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Coordinates</p>
                    <p className="font-medium">{mockCollectionData.location.latitude}</p>
                    <p className="font-medium">{mockCollectionData.location.longitude}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Address</p>
                    <p className="font-medium">{mockCollectionData.location.address}</p>
                  </div>
                </div>
                <Badge variant="outline" className="mt-3 border-success-green/30 text-success-green w-full justify-center">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  GPS Signal Strong
                </Badge>
              </Card>

              {/* Weather Conditions */}
              <Card className="p-6 shadow-botanical">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-warning-amber/10 rounded-full">
                    <Thermometer className="h-5 w-5 text-warning-amber" />
                  </div>
                  <h3 className="font-semibold text-foreground">Weather Conditions</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Temperature</p>
                    <p className="font-medium">{mockCollectionData.weather.temperature}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Humidity</p>
                    <p className="font-medium">{mockCollectionData.weather.humidity}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-muted-foreground">Condition</p>
                    <div className="flex items-center gap-2">
                      <Cloud className="h-4 w-4 text-warning-amber" />
                      <p className="font-medium">{mockCollectionData.weather.condition}</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Collector Info */}
              <Card className="p-6 shadow-elevation">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-herb-secondary/10 rounded-full">
                    <Users className="h-5 w-5 text-herb-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Collector Details</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Name</p>
                    <p className="font-medium">{mockCollectionData.collector.name}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Collector ID</p>
                    <p className="font-medium">{mockCollectionData.collector.id}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Cooperative</p>
                    <p className="font-medium">{mockCollectionData.collector.cooperative}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}