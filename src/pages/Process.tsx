import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { 
  Package, 
  Thermometer, 
  Clock, 
  Scale, 
  Droplets,
  Wind,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Settings
} from "lucide-react";
import { useState } from "react";

const processingStages = [
  {
    id: 1,
    name: "Primary Drying",
    status: "completed",
    startTime: "2024-03-29 06:00",
    endTime: "2024-04-01 06:00",
    temperature: "45°C",
    humidity: "15%",
    duration: "72 hours"
  },
  {
    id: 2,
    name: "Quality Grading",
    status: "completed",
    startTime: "2024-04-01 08:00",
    endTime: "2024-04-01 12:00",
    grade: "A+ Premium",
    moistureLevel: "8.5%",
    duration: "4 hours"
  },
  {
    id: 3,
    name: "Size Grading",
    status: "in-progress",
    startTime: "2024-04-01 14:00",
    progress: 65,
    meshSize: "80 mesh",
    batchSize: "500 kg"
  },
  {
    id: 4,
    name: "Final Packaging",
    status: "pending",
    estimatedStart: "2024-04-02 10:00",
    packagingType: "Food Grade Bags",
    batchSize: "25kg units"
  }
];

const activeBatches = [
  {
    batchId: "BTH-ASH-240328-01",
    herb: "Ashwagandha",
    quantity: "500 kg",
    currentStage: "Size Grading",
    progress: 65,
    priority: "high"
  },
  {
    batchId: "BTH-TUR-240329-02",
    herb: "Turmeric",
    quantity: "750 kg",
    currentStage: "Quality Grading",
    progress: 90,
    priority: "medium"
  },
  {
    batchId: "BTH-BRA-240330-01",
    herb: "Brahmi",
    quantity: "200 kg",
    currentStage: "Primary Drying",
    progress: 40,
    priority: "low"
  }
];

export default function Process() {
  const [selectedBatch, setSelectedBatch] = useState(activeBatches[0]);

  return (
    <div className="min-h-screen bg-gradient-earth">
      <Navigation />
      
      <main className="pt-20 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-herb-secondary/20 text-herb-secondary">
              <Package className="mr-2 h-4 w-4" />
              Processing Facility
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Herb Processing Dashboard
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Monitor and control multi-stage processing operations with real-time 
              environmental tracking and quality validation.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Active Batches Sidebar */}
            <Card className="p-6 shadow-botanical">
              <h3 className="text-lg font-semibold text-foreground mb-4">Active Batches</h3>
              <div className="space-y-3">
                {activeBatches.map((batch) => (
                  <div 
                    key={batch.batchId}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      selectedBatch.batchId === batch.batchId 
                        ? 'border-herb-primary bg-herb-primary/5' 
                        : 'border-border hover:border-herb-primary/30'
                    }`}
                    onClick={() => setSelectedBatch(batch)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium text-sm">{batch.herb}</p>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          batch.priority === 'high' ? 'border-red-300 text-red-600' :
                          batch.priority === 'medium' ? 'border-warning-amber/30 text-warning-amber' :
                          'border-success-green/30 text-success-green'
                        }`}
                      >
                        {batch.priority}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{batch.batchId}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{batch.currentStage}</span>
                      <span className="text-xs font-medium">{batch.progress}%</span>
                    </div>
                    <Progress value={batch.progress} className="h-1 mt-1" />
                  </div>
                ))}
              </div>
            </Card>

            {/* Main Processing View */}
            <div className="lg:col-span-3 space-y-6">
              {/* Batch Header */}
              <Card className="p-6 shadow-trust bg-gradient-trust text-primary-foreground">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{selectedBatch.herb} Processing</h2>
                    <p className="text-sm opacity-90">Batch ID: {selectedBatch.batchId}</p>
                    <p className="text-sm opacity-90">Quantity: {selectedBatch.quantity}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold mb-1">{selectedBatch.progress}%</div>
                    <p className="text-sm opacity-90">Complete</p>
                  </div>
                </div>
              </Card>

              {/* Processing Stages */}
              <Card className="p-6 shadow-elevation">
                <h3 className="text-xl font-semibold text-foreground mb-6">Processing Pipeline</h3>
                <div className="space-y-4">
                  {processingStages.map((stage, index) => (
                    <div key={stage.id} className="relative">
                      <div className={`flex items-start gap-4 p-4 rounded-lg border ${
                        stage.status === 'completed' ? 'border-success-green/30 bg-success-green/5' :
                        stage.status === 'in-progress' ? 'border-herb-primary/30 bg-herb-primary/5' :
                        'border-border bg-muted/30'
                      }`}>
                        <div className={`p-2 rounded-full ${
                          stage.status === 'completed' ? 'bg-success-green/20' :
                          stage.status === 'in-progress' ? 'bg-herb-primary/20' :
                          'bg-muted'
                        }`}>
                          {stage.status === 'completed' ? (
                            <CheckCircle className="h-5 w-5 text-success-green" />
                          ) : stage.status === 'in-progress' ? (
                            <Settings className="h-5 w-5 text-herb-primary animate-spin" />
                          ) : (
                            <Clock className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-foreground">{stage.name}</h4>
                            <Badge 
                              variant="outline" 
                              className={`${
                                stage.status === 'completed' ? 'border-success-green/30 text-success-green' :
                                stage.status === 'in-progress' ? 'border-herb-primary/30 text-herb-primary' :
                                'border-muted-foreground/30 text-muted-foreground'
                              }`}
                            >
                              {stage.status === 'completed' ? 'Completed' :
                               stage.status === 'in-progress' ? 'In Progress' : 'Pending'}
                            </Badge>
                          </div>

                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            {stage.status === 'completed' && (
                              <>
                                <div>
                                  <p className="text-muted-foreground">Duration</p>
                                  <p className="font-medium">{stage.duration}</p>
                                </div>
                                {stage.temperature && (
                                  <div>
                                    <p className="text-muted-foreground">Temperature</p>
                                    <p className="font-medium">{stage.temperature}</p>
                                  </div>
                                )}
                                {stage.grade && (
                                  <div>
                                    <p className="text-muted-foreground">Grade</p>
                                    <p className="font-medium">{stage.grade}</p>
                                  </div>
                                )}
                              </>
                            )}

                            {stage.status === 'in-progress' && (
                              <>
                                <div>
                                  <p className="text-muted-foreground">Progress</p>
                                  <div className="flex items-center gap-2">
                                    <Progress value={stage.progress} className="h-2 flex-1" />
                                    <span className="font-medium">{stage.progress}%</span>
                                  </div>
                                </div>
                                {stage.meshSize && (
                                  <div>
                                    <p className="text-muted-foreground">Mesh Size</p>
                                    <p className="font-medium">{stage.meshSize}</p>
                                  </div>
                                )}
                                {stage.batchSize && (
                                  <div>
                                    <p className="text-muted-foreground">Batch Size</p>
                                    <p className="font-medium">{stage.batchSize}</p>
                                  </div>
                                )}
                              </>
                            )}

                            {stage.status === 'pending' && (
                              <>
                                <div>
                                  <p className="text-muted-foreground">Estimated Start</p>
                                  <p className="font-medium">{stage.estimatedStart}</p>
                                </div>
                                {stage.packagingType && (
                                  <div>
                                    <p className="text-muted-foreground">Packaging</p>
                                    <p className="font-medium">{stage.packagingType}</p>
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      {index < processingStages.length - 1 && (
                        <div className="flex justify-center py-2">
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Card>

              {/* Environmental Controls */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 shadow-botanical">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Environmental Monitoring</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-herb-primary/5 rounded-lg">
                      <Thermometer className="h-6 w-6 text-herb-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Temperature</p>
                      <p className="text-lg font-bold text-herb-primary">45°C</p>
                    </div>
                    <div className="text-center p-3 bg-trust-blue/5 rounded-lg">
                      <Droplets className="h-6 w-6 text-trust-blue mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Humidity</p>
                      <p className="text-lg font-bold text-trust-blue">15%</p>
                    </div>
                    <div className="text-center p-3 bg-herb-secondary/5 rounded-lg">
                      <Wind className="h-6 w-6 text-herb-secondary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Airflow</p>
                      <p className="text-lg font-bold text-herb-secondary">Normal</p>
                    </div>
                    <div className="text-center p-3 bg-warning-amber/5 rounded-lg">
                      <Scale className="h-6 w-6 text-warning-amber mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Weight Loss</p>
                      <p className="text-lg font-bold text-warning-amber">12%</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 shadow-elevation">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Stage Controls</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="temp-control">Target Temperature</Label>
                      <Input id="temp-control" defaultValue="45" type="number" />
                    </div>
                    <div>
                      <Label htmlFor="humidity-control">Target Humidity</Label>
                      <Input id="humidity-control" defaultValue="15" type="number" />
                    </div>
                    <div className="flex gap-2">
                      <Button variant="botanical" className="flex-1">
                        Update Settings
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Emergency Stop
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}