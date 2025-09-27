import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Info, CheckCircle, Clock } from "lucide-react";

const mockAlerts = [
  {
    id: "1",
    type: "warning",
    title: "Water Supply Disruption",
    message: "Scheduled maintenance in Kothrud area from 2:00 PM - 6:00 PM today. Alternative suppliers available.",
    timestamp: "2 hours ago",
    area: "Kothrud, Pune",
  },
  {
    id: "2",
    type: "info",
    title: "New Water ATM Operational",
    message: "A new water ATM is now live at Phoenix Mall, Viman Nagar. 24/7 access with competitive rates.",
    timestamp: "5 hours ago",
    area: "Viman Nagar, Pune",
  },
  {
    id: "3",
    type: "success",
    title: "Dam Water Levels Normal",
    message: "Khadakwasla Dam water levels are at 85% capacity. No water shortage expected this month.",
    timestamp: "1 day ago",
    area: "Pune Metropolitan",
  },
  {
    id: "4",
    type: "warning",
    title: "Heavy Rainfall Alert",
    message: "IMD forecasts heavy rainfall in next 48 hours. Possible flooding in low-lying areas.",
    timestamp: "2 days ago",
    area: "Mumbai & Pune",
  },
];

const Alerts = () => {
  const getAlertIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
      case "info":
        return <Info className="h-5 w-5 text-blue-600" />;
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      default:
        return <Clock className="h-5 w-5 text-gray-600" />;
    }
  };

  const getAlertBadgeColor = (type: string) => {
    switch (type) {
      case "warning":
        return "bg-yellow-500/10 text-yellow-700 border-yellow-200";
      case "info":
        return "bg-blue-500/10 text-blue-700 border-blue-200";
      case "success":
        return "bg-green-500/10 text-green-700 border-green-200";
      default:
        return "bg-gray-500/10 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-yellow-500/10 rounded-full">
                <AlertTriangle className="h-12 w-12 text-yellow-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Water Alerts & Updates
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed about water supply status, maintenance schedules, and emergency alerts
            </p>
          </div>

          {/* Alert Cards */}
          <div className="space-y-6">
            {mockAlerts.map((alert) => (
              <Card key={alert.id} className="transition-water hover:shadow-water">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      {getAlertIcon(alert.type)}
                      <div>
                        <CardTitle className="text-lg">{alert.title}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge className={getAlertBadgeColor(alert.type)}>
                            {alert.type.charAt(0).toUpperCase() + alert.type.slice(1)}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{alert.area}</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">{alert.timestamp}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{alert.message}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Alert Subscription Section */}
          <Card className="mt-12 bg-secondary/20">
            <CardHeader>
              <CardTitle className="text-center">Stay Updated</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                Get real-time alerts about water supply, pricing, and emergency notifications
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-card rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="font-semibold mb-2">SMS Alerts</h3>
                  <p className="text-sm text-muted-foreground">
                    Instant notifications for critical water supply updates
                  </p>
                </div>
                
                <div className="p-4 bg-card rounded-lg">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📧</span>
                  </div>
                  <h3 className="font-semibold mb-2">Email Updates</h3>
                  <p className="text-sm text-muted-foreground">
                    Weekly summaries and maintenance schedules
                  </p>
                </div>
                
                <div className="p-4 bg-card rounded-lg">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🔔</span>
                  </div>
                  <h3 className="font-semibold mb-2">Push Notifications</h3>
                  <p className="text-sm text-muted-foreground">
                    Real-time app notifications for urgent alerts
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Alerts;