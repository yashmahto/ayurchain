import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart, 
  MapPin, 
  Leaf, 
  Users, 
  Shield, 
  TrendingUp,
  Package,
  AlertTriangle,
  CheckCircle,
  Clock
} from "lucide-react";

const statsCards = [
  {
    title: "Total Herbs Tracked",
    value: "2,847",
    change: "+12.3%",
    changeType: "positive",
    icon: Leaf,
    color: "herb-primary"
  },
  {
    title: "Active Farmers",
    value: "156",
    change: "+8.1%",
    changeType: "positive", 
    icon: Users,
    color: "herb-secondary"
  },
  {
    title: "Blockchain Transactions",
    value: "98,234",
    change: "+24.7%",
    changeType: "positive",
    icon: Shield,
    color: "trust-blue"
  },
  {
    title: "Quality Tests Passed",
    value: "99.2%",
    change: "+0.8%",
    changeType: "positive",
    icon: CheckCircle,
    color: "success-green"
  }
];

const recentActivity = [
  {
    id: 1,
    type: "collection",
    herb: "Ashwagandha",
    location: "Mandsaur, MP",
    farmer: "Ramesh Kumar",
    time: "2 hours ago",
    status: "verified"
  },
  {
    id: 2,
    type: "testing",
    herb: "Turmeric",
    location: "AIIA Lab Delhi",
    farmer: "Quality Control",
    time: "4 hours ago",
    status: "passed"
  },
  {
    id: 3,
    type: "processing",
    herb: "Brahmi",
    location: "Ayur Processing Unit",
    farmer: "Production Team",
    time: "6 hours ago",
    status: "completed"
  },
  {
    id: 4,
    type: "collection",
    herb: "Neem",
    location: "Rajasthan",
    farmer: "Collective Group",
    time: "8 hours ago",
    status: "pending"
  }
];

const topRegions = [
  { name: "Madhya Pradesh", herbs: 1247, percentage: 43.8 },
  { name: "Rajasthan", herbs: 856, percentage: 30.1 },
  { name: "Gujarat", herbs: 432, percentage: 15.2 },
  { name: "Uttarakhand", herbs: 312, percentage: 11.0 }
];

export const Dashboard = () => {
  return (
    <section className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-trust-blue/20 text-trust-blue">
            <BarChart className="mr-2 h-4 w-4" />
            Real-time Analytics
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Network Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Monitor the entire Ayurvedic herb supply chain in real-time with 
            blockchain-verified data and comprehensive analytics.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statsCards.map((stat, index) => (
            <Card key={index} className="p-6 shadow-botanical hover:shadow-trust transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                  <p className={`text-2xl font-bold text-${stat.color}`}>{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="h-3 w-3 text-success-green mr-1" />
                    <span className="text-xs text-success-green">{stat.change}</span>
                  </div>
                </div>
                <div className={`p-3 bg-${stat.color}/10 rounded-full`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}`} />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <Card className="lg:col-span-2 p-6 shadow-elevation">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-foreground">Recent Activity</h3>
              <Button variant="outline" size="sm">
                <Clock className="h-4 w-4 mr-2" />
                View All
              </Button>
            </div>
            
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                  <div className={`p-2 rounded-full ${
                    activity.type === 'collection' ? 'bg-herb-primary/10' :
                    activity.type === 'testing' ? 'bg-trust-blue/10' :
                    'bg-herb-secondary/10'
                  }`}>
                    {activity.type === 'collection' ? 
                      <MapPin className={`h-4 w-4 ${
                        activity.type === 'collection' ? 'text-herb-primary' :
                        activity.type === 'testing' ? 'text-trust-blue' :
                        'text-herb-secondary'
                      }`} /> :
                      activity.type === 'testing' ?
                      <Shield className="h-4 w-4 text-trust-blue" /> :
                      <Package className="h-4 w-4 text-herb-secondary" />
                    }
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium text-foreground">{activity.herb}</p>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          activity.status === 'verified' || activity.status === 'passed' || activity.status === 'completed' 
                            ? 'border-success-green/30 text-success-green' 
                            : 'border-warning-amber/30 text-warning-amber'
                        }`}
                      >
                        {activity.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {activity.location} • {activity.farmer}
                    </p>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Top Regions */}
          <Card className="p-6 shadow-botanical">
            <h3 className="text-xl font-semibold text-foreground mb-6">Top Collection Regions</h3>
            
            <div className="space-y-4">
              {topRegions.map((region, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-foreground">{region.name}</p>
                    <span className="text-sm text-muted-foreground">{region.herbs}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-botanical h-2 rounded-full transition-all duration-500"
                      style={{ width: `${region.percentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">{region.percentage}% of total</p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <Button variant="herb" size="sm" className="w-full">
                <MapPin className="h-4 w-4 mr-2" />
                View Regional Map
              </Button>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="inline-block p-8 bg-gradient-trust text-primary-foreground shadow-elevation">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-primary-foreground/20 rounded-full">
                <Shield className="h-10 w-10" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">Join the Network</h3>
                <p className="text-primary-foreground/90 mb-4">
                  Become part of the transparent Ayurvedic supply chain
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" className="bg-primary-foreground text-trust-blue border-primary-foreground hover:bg-primary-foreground/90">
                    For Farmers
                  </Button>
                  <Button variant="outline" className="bg-primary-foreground text-trust-blue border-primary-foreground hover:bg-primary-foreground/90">
                    For Processors
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};