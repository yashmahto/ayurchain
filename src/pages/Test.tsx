import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Microscope, 
  FlaskConical, 
  Shield, 
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
  Download,
  Upload,
  Beaker,
  Dna,
  Bug
} from "lucide-react";

const testBatches = [
  {
    batchId: "BTH-ASH-240328-01",
    herb: "Ashwagandha",
    submittedBy: "Mandsaur Processing Unit",
    submissionDate: "2024-04-02",
    status: "completed",
    priority: "high",
    tests: {
      moisture: { value: "8.2%", status: "passed", limit: "<10%" },
      pesticides: { value: "Not Detected", status: "passed", limit: "Below LOD" },
      heavyMetals: { value: "Within Limits", status: "passed", limit: "USP Standards" },
      dnaAuthenticity: { value: "W. somnifera Confirmed", status: "passed", limit: "Species Match" },
      activeCompounds: { value: "3.2% Withanolides", status: "passed", limit: ">3.0%" },
      microbial: { value: "Clean", status: "passed", limit: "USP Standards" }
    }
  },
  {
    batchId: "BTH-TUR-240329-02",
    herb: "Turmeric",
    submittedBy: "Gujarat Spice Processors",
    submissionDate: "2024-04-03",
    status: "in-progress",
    priority: "medium",
    tests: {
      moisture: { value: "7.8%", status: "passed", limit: "<10%" },
      pesticides: { value: "Testing...", status: "testing", limit: "Below LOD" },
      heavyMetals: { value: "Pending", status: "pending", limit: "USP Standards" },
      dnaAuthenticity: { value: "C. longa Confirmed", status: "passed", limit: "Species Match" },
      activeCompounds: { value: "Testing...", status: "testing", limit: ">3.0% Curcumin" },
      microbial: { value: "Pending", status: "pending", limit: "USP Standards" }
    }
  },
  {
    batchId: "BTH-BRA-240330-01",
    herb: "Brahmi",
    submittedBy: "Kerala Herb Collective",
    submissionDate: "2024-04-04",
    status: "pending",
    priority: "low",
    tests: {
      moisture: { value: "Pending", status: "pending", limit: "<10%" },
      pesticides: { value: "Pending", status: "pending", limit: "Below LOD" },
      heavyMetals: { value: "Pending", status: "pending", limit: "USP Standards" },
      dnaAuthenticity: { value: "Pending", status: "pending", limit: "Species Match" },
      activeCompounds: { value: "Pending", status: "pending", limit: ">0.5% Bacosides" },
      microbial: { value: "Pending", status: "pending", limit: "USP Standards" }
    }
  }
];

const equipmentStatus = [
  { name: "HPLC System", status: "operational", lastCalibration: "2024-03-15", nextService: "2024-05-15" },
  { name: "DNA Sequencer", status: "operational", lastCalibration: "2024-03-20", nextService: "2024-05-20" },
  { name: "Pesticide Analyzer", status: "maintenance", lastCalibration: "2024-02-28", nextService: "2024-04-10" },
  { name: "Moisture Analyzer", status: "operational", lastCalibration: "2024-04-01", nextService: "2024-06-01" }
];

export default function Test() {
  const selectedBatch = testBatches[0];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'passed': return 'border-success-green/30 text-success-green';
      case 'failed': return 'border-red-300 text-red-600';
      case 'testing': return 'border-warning-amber/30 text-warning-amber';
      default: return 'border-muted-foreground/30 text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'passed': return <CheckCircle className="h-4 w-4" />;
      case 'failed': return <AlertTriangle className="h-4 w-4" />;
      case 'testing': return <Clock className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-earth">
      <Navigation />
      
      <main className="pt-20 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-trust-blue/20 text-trust-blue">
              <Microscope className="mr-2 h-4 w-4" />
              Quality Control Laboratory
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Herb Testing & Analysis
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive quality testing including DNA authentication, pesticide screening, 
              heavy metal analysis, and active compound quantification.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="testing" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="testing">Active Testing</TabsTrigger>
                <TabsTrigger value="results">Test Results</TabsTrigger>
                <TabsTrigger value="equipment">Equipment</TabsTrigger>
                <TabsTrigger value="certificates">Certificates</TabsTrigger>
              </TabsList>

              <TabsContent value="testing" className="space-y-6">
                <div className="grid lg:grid-cols-4 gap-6">
                  {/* Test Queue */}
                  <Card className="p-6 shadow-botanical">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Test Queue</h3>
                    <div className="space-y-3">
                      {testBatches.map((batch) => (
                        <div 
                          key={batch.batchId}
                          className="p-3 rounded-lg border border-border hover:border-trust-blue/30 cursor-pointer transition-all"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <p className="font-medium text-sm">{batch.herb}</p>
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${
                                batch.status === 'completed' ? 'border-success-green/30 text-success-green' :
                                batch.status === 'in-progress' ? 'border-warning-amber/30 text-warning-amber' :
                                'border-muted-foreground/30 text-muted-foreground'
                              }`}
                            >
                              {batch.status}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground mb-1">{batch.batchId}</p>
                          <p className="text-xs text-muted-foreground">{batch.submissionDate}</p>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Main Testing Panel */}
                  <div className="lg:col-span-3 space-y-6">
                    {/* Batch Header */}
                    <Card className="p-6 shadow-trust bg-gradient-trust text-primary-foreground">
                      <div className="flex items-center justify-between">
                        <div>
                          <h2 className="text-2xl font-bold mb-2">{selectedBatch.herb} Analysis</h2>
                          <p className="text-sm opacity-90">Batch ID: {selectedBatch.batchId}</p>
                          <p className="text-sm opacity-90">Submitted by: {selectedBatch.submittedBy}</p>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-success-green text-success-green-foreground mb-2">
                            <Shield className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                          <p className="text-sm opacity-90">AIIA Lab Certified</p>
                        </div>
                      </div>
                    </Card>

                    {/* Test Results Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {Object.entries(selectedBatch.tests).map(([testName, result]) => (
                        <Card key={testName} className="p-4 shadow-elevation">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              {testName === 'dnaAuthenticity' ? <Dna className="h-4 w-4 text-trust-blue" /> :
                               testName === 'pesticides' ? <Bug className="h-4 w-4 text-herb-primary" /> :
                               testName === 'activeCompounds' ? <FlaskConical className="h-4 w-4 text-herb-secondary" /> :
                               <Beaker className="h-4 w-4 text-warning-amber" />}
                              <h4 className="font-semibold text-sm capitalize">
                                {testName.replace(/([A-Z])/g, ' $1').toLowerCase()}
                              </h4>
                            </div>
                            <Badge variant="outline" className={`text-xs ${getStatusColor(result.status)}`}>
                              {getStatusIcon(result.status)}
                              <span className="ml-1 capitalize">{result.status}</span>
                            </Badge>
                          </div>
                          
                          <div className="space-y-2">
                            <div>
                              <p className="text-xs text-muted-foreground">Result</p>
                              <p className="font-medium text-sm">{result.value}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Specification</p>
                              <p className="text-sm">{result.limit}</p>
                            </div>
                          </div>

                          {result.status === 'testing' && (
                            <div className="mt-3">
                              <Progress value={Math.random() * 100} className="h-2" />
                              <p className="text-xs text-muted-foreground mt-1">Analysis in progress...</p>
                            </div>
                          )}
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="results" className="space-y-6">
                <Card className="p-6 shadow-elevation">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Completed Test Results</h3>
                  <div className="space-y-4">
                    {testBatches.filter(batch => batch.status === 'completed').map((batch) => (
                      <div key={batch.batchId} className="p-4 border border-border rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h4 className="font-semibold">{batch.herb}</h4>
                            <p className="text-sm text-muted-foreground">{batch.batchId}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <FileText className="h-4 w-4 mr-2" />
                              View Report
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                          {Object.entries(batch.tests).map(([testName, result]) => (
                            <div key={testName} className="text-center">
                              <div className={`inline-flex p-2 rounded-full mb-1 ${
                                result.status === 'passed' ? 'bg-success-green/10' : 'bg-red-100'
                              }`}>
                                {getStatusIcon(result.status)}
                              </div>
                              <p className="text-xs text-muted-foreground capitalize">
                                {testName.replace(/([A-Z])/g, ' $1').toLowerCase()}
                              </p>
                              <p className={`text-xs font-medium ${
                                result.status === 'passed' ? 'text-success-green' : 'text-red-600'
                              }`}>
                                {result.status}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="equipment" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6 shadow-botanical">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Equipment Status</h3>
                    <div className="space-y-4">
                      {equipmentStatus.map((equipment) => (
                        <div key={equipment.name} className="flex items-center justify-between p-3 border border-border rounded-lg">
                          <div>
                            <p className="font-medium">{equipment.name}</p>
                            <p className="text-sm text-muted-foreground">
                              Last calibrated: {equipment.lastCalibration}
                            </p>
                          </div>
                          <Badge 
                            variant="outline" 
                            className={`${
                              equipment.status === 'operational' 
                                ? 'border-success-green/30 text-success-green' 
                                : 'border-warning-amber/30 text-warning-amber'
                            }`}
                          >
                            {equipment.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-6 shadow-trust">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Sample Submission</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="batch-id">Batch ID</Label>
                        <Input id="batch-id" placeholder="BTH-XXX-YYMMDD-XX" />
                      </div>
                      <div>
                        <Label htmlFor="herb-type">Herb Type</Label>
                        <Input id="herb-type" placeholder="e.g., Ashwagandha" />
                      </div>
                      <div>
                        <Label htmlFor="test-priority">Test Priority</Label>
                        <Input id="test-priority" placeholder="High, Medium, Low" />
                      </div>
                      <Button variant="botanical" className="w-full">
                        <Upload className="mr-2 h-4 w-4" />
                        Submit for Testing
                      </Button>
                    </div>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="certificates" className="space-y-6">
                <Card className="p-6 shadow-elevation">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Quality Certificates</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {testBatches.filter(batch => batch.status === 'completed').map((batch) => (
                      <div key={batch.batchId} className="p-4 border border-border rounded-lg text-center">
                        <div className="p-3 bg-trust-blue/10 rounded-full inline-block mb-3">
                          <Shield className="h-6 w-6 text-trust-blue" />
                        </div>
                        <h4 className="font-semibold mb-2">{batch.herb} Certificate</h4>
                        <p className="text-sm text-muted-foreground mb-3">{batch.batchId}</p>
                        <Badge className="mb-3 bg-success-green text-success-green-foreground">
                          All Tests Passed
                        </Badge>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <FileText className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}