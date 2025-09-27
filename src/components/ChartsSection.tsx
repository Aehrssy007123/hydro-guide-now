import { useState } from "react";
import { TrendingUp, TrendingDown, BarChart3, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const ChartsSection = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("7d");
  const [selectedMetric, setSelectedMetric] = useState("water-levels");

  const waterLevels = [
    { name: "Khadakwasla Dam", level: 85, capacity: "100%", status: "Normal", trend: "up" },
    { name: "Panshet Dam", level: 78, capacity: "92%", status: "Normal", trend: "down" },
    { name: "Varasgaon Dam", level: 65, capacity: "78%", status: "Low", trend: "down" },
    { name: "Temghar Dam", level: 92, capacity: "98%", status: "High", trend: "up" },
  ];

  const usageStats = [
    { area: "Pune Camp", usage: "2.3M L", change: "+12%", trend: "up" },
    { area: "Kothrud", usage: "1.8M L", change: "-5%", trend: "down" },
    { area: "Hinjewadi", usage: "3.1M L", change: "+18%", trend: "up" },
    { area: "Wakad", usage: "1.5M L", change: "+8%", trend: "up" },
  ];

  const priceData = [
    { supplier: "AquaSupply", price: "₹200", change: "No change", trend: "stable" },
    { supplier: "Blue Drop", price: "₹180", change: "-₹10", trend: "down" },
    { supplier: "Crystal Clear", price: "₹190", change: "+₹5", trend: "up" },
    { supplier: "Pure Water", price: "₹220", change: "+₹15", trend: "up" },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "normal": return "bg-green-500/10 text-green-700 border-green-200";
      case "low": return "bg-yellow-500/10 text-yellow-700 border-yellow-200";
      case "high": return "bg-blue-500/10 text-blue-700 border-blue-200";
      default: return "bg-gray-500/10 text-gray-700 border-gray-200";
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return <TrendingUp className="h-4 w-4 text-green-600" />;
      case "down": return <TrendingDown className="h-4 w-4 text-red-600" />;
      default: return <Activity className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <section className="py-16 px-4 bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Water Analytics & Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time data on water levels, consumption patterns, and pricing trends
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <Select value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
            <SelectTrigger className="flex-1">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24 Hours</SelectItem>
              <SelectItem value="7d">Last 7 Days</SelectItem>
              <SelectItem value="30d">Last 30 Days</SelectItem>
              <SelectItem value="90d">Last 90 Days</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedMetric} onValueChange={setSelectedMetric}>
            <SelectTrigger className="flex-1">
              <SelectValue placeholder="Metric" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="water-levels">Water Levels</SelectItem>
              <SelectItem value="consumption">Usage Patterns</SelectItem>
              <SelectItem value="pricing">Price Trends</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart Area */}
          <div className="lg:col-span-2">
            <Card className="shadow-water">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  {selectedMetric === "water-levels" && "Dam Water Levels"}
                  {selectedMetric === "consumption" && "Water Consumption Trends"}
                  {selectedMetric === "pricing" && "Price Trend Analysis"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative bg-gradient-wave rounded-lg overflow-hidden" style={{ height: "350px" }}>
                  {/* Chart Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center bg-muted/20 backdrop-blur-sm">
                    <div className="text-center space-y-4">
                      <BarChart3 className="h-16 w-16 text-primary mx-auto animate-float" />
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Interactive Charts Loading...
                        </h3>
                        <p className="text-muted-foreground mb-4 max-w-md">
                          Connect external APIs (CWC/WRIS for dam levels, OpenWeather for rainfall) 
                          to display real-time analytics and trends.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Sample Chart Bars */}
                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-around h-full p-8">
                    <div className="w-8 bg-primary/60 rounded-t animate-pulse" style={{ height: "60%" }}></div>
                    <div className="w-8 bg-accent/60 rounded-t animate-pulse delay-200" style={{ height: "80%" }}></div>
                    <div className="w-8 bg-green-500/60 rounded-t animate-pulse delay-400" style={{ height: "45%" }}></div>
                    <div className="w-8 bg-blue-500/60 rounded-t animate-pulse delay-600" style={{ height: "70%" }}></div>
                    <div className="w-8 bg-yellow-500/60 rounded-t animate-pulse delay-800" style={{ height: "55%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Data Tables */}
          <div className="space-y-6">
            {selectedMetric === "water-levels" && (
              <Card className="shadow-water">
                <CardHeader>
                  <CardTitle className="text-lg">Dam Water Levels</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {waterLevels.map((dam, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground text-sm">{dam.name}</h4>
                        <p className="text-xs text-muted-foreground">{dam.capacity}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getStatusColor(dam.status)}>
                          {dam.status}
                        </Badge>
                        {getTrendIcon(dam.trend)}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {selectedMetric === "consumption" && (
              <Card className="shadow-water">
                <CardHeader>
                  <CardTitle className="text-lg">Area Consumption</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {usageStats.map((area, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground text-sm">{area.area}</h4>
                        <p className="text-xs text-muted-foreground">{area.usage}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className={area.trend === "up" ? "text-green-600" : "text-red-600"}>
                          {area.change}
                        </span>
                        {getTrendIcon(area.trend)}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {selectedMetric === "pricing" && (
              <Card className="shadow-water">
                <CardHeader>
                  <CardTitle className="text-lg">Price Updates</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {priceData.map((supplier, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground text-sm">{supplier.supplier}</h4>
                        <p className="text-xs text-muted-foreground">{supplier.price}/1000L</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className={
                          supplier.trend === "up" ? "text-red-600" : 
                          supplier.trend === "down" ? "text-green-600" : "text-gray-600"
                        }>
                          {supplier.change}
                        </span>
                        {getTrendIcon(supplier.trend)}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Weather Alert Card */}
            <Card className="shadow-water bg-gradient-wave">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Activity className="h-5 w-5 text-accent" />
                  Weather Alert
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-yellow-500/10 text-yellow-700 border-yellow-200">
                      Moderate Rain
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">
                    IMD forecasts 15-25mm rainfall in next 24 hours. Dam levels may rise.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartsSection;