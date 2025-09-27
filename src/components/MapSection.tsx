import { useState } from "react";
import { MapPin, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MapSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Interactive Water Source Map
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore water sources near you with real-time availability and pricing information
          </p>
        </div>

        {/* Map Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-4xl mx-auto">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by location, area, or supplier name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <Select value={selectedFilter} onValueChange={setSelectedFilter}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sources</SelectItem>
              <SelectItem value="tanker">Water Tankers</SelectItem>
              <SelectItem value="atm">Water ATMs</SelectItem>
              <SelectItem value="available">Available Only</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="default" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            More Filters
          </Button>
        </div>

        {/* Map Placeholder */}
        <Card className="shadow-water">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Live Water Source Map
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative bg-gradient-wave rounded-lg overflow-hidden" style={{ height: "500px" }}>
              {/* Map Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-muted/30 backdrop-blur-sm">
                <div className="text-center space-y-4">
                  <MapPin className="h-16 w-16 text-primary mx-auto animate-float" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Interactive Map Loading...
                    </h3>
                    <p className="text-muted-foreground mb-4 max-w-md">
                      Connect your Mapbox or Google Maps API to display real-time water source locations with live data.
                    </p>
                    <Button variant="outline" className="transition-water hover:bg-primary hover:text-primary-foreground">
                      Setup Map Integration
                    </Button>
                  </div>
                </div>
              </div>

              {/* Sample Markers */}
              <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center animate-bounce delay-0">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <div className="absolute top-2/3 left-2/3 w-8 h-8 bg-accent rounded-full border-4 border-white shadow-lg flex items-center justify-center animate-bounce delay-500">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center animate-bounce delay-1000">
                <MapPin className="h-4 w-4 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Map Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-primary rounded-full border-2 border-white shadow"></div>
            <span className="text-sm text-muted-foreground">Water Tankers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-accent rounded-full border-2 border-white shadow"></div>
            <span className="text-sm text-muted-foreground">Water ATMs</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow"></div>
            <span className="text-sm text-muted-foreground">Available Now</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;