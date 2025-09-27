import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import WaterSourceCard from "@/components/WaterSourceCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Droplets } from "lucide-react";

// Mock ATM data
const atmSources = [
  {
    id: "1",
    name: "Smart Water ATM - Station Road",
    type: "atm" as const,
    contact: "+91-98765-43211",
    address: "Station Road, Pune 411005",
    distance: 0.8,
    price: "₹1/L",
    availability: "available" as const,
    capacity: "20L/min",
    hours: "24/7",
  },
  {
    id: "2",
    name: "Pure Water ATM - Mall Plaza",
    type: "atm" as const,
    contact: "+91-98765-43213",
    address: "FC Road, Pune 411004",
    distance: 1.8,
    price: "₹0.50/L",
    availability: "available" as const,
    capacity: "15L/min",
    hours: "24/7",
  },
  {
    id: "3",
    name: "Quick Water ATM - Tech Park",
    type: "atm" as const,
    contact: "+91-98765-43215",
    address: "Hinjewadi, Pune 411057",
    distance: 4.1,
    price: "₹1.20/L",
    availability: "available" as const,
    capacity: "25L/min",
    hours: "24/7",
  },
  {
    id: "4",
    name: "Eco Water ATM - University",
    type: "atm" as const,
    contact: "+91-98765-43217",
    address: "University Road, Pune 411007",
    distance: 2.3,
    price: "₹0.80/L",
    availability: "limited" as const,
    capacity: "12L/min",
    hours: "6:00 AM - 11:00 PM",
  },
  {
    id: "5",
    name: "Smart H2O ATM - Market Square",
    type: "atm" as const,
    contact: "+91-98765-43218",
    address: "Market Yard, Pune 411037",
    distance: 3.7,
    price: "₹1.50/L",
    availability: "unavailable" as const,
    capacity: "18L/min",
    hours: "24/7",
  },
];

const WaterATMs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleCallPress = (contact: string) => {
    window.open(`tel:${contact}`, '_self');
    toast({
      title: "Calling ATM support",
      description: `Connecting to ${contact}...`,
    });
  };

  const handleNavigatePress = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
    toast({
      title: "Opening navigation",
      description: "Redirecting to Google Maps...",
    });
  };

  const filteredSources = atmSources.filter(source => {
    const matchesSearch = source.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         source.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === "all" || source.availability === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 px-4">
        <div className="container mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-accent/10 rounded-full">
                <Droplets className="h-12 w-12 text-accent animate-float" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Water ATMs Network
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access purified water instantly from our automated dispensing machines across the city
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search ATMs by location or area..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={selectedFilter} onValueChange={setSelectedFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All ATMs</SelectItem>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="limited">Limited Stock</SelectItem>
                <SelectItem value="unavailable">Under Maintenance</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Results */}
          <div className="mb-6 text-center text-muted-foreground">
            Showing {filteredSources.length} of {atmSources.length} water ATMs
          </div>

          {/* ATM Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSources.map((source) => (
              <WaterSourceCard
                key={source.id}
                source={source}
                onCallPress={handleCallPress}
                onNavigatePress={handleNavigatePress}
              />
            ))}
          </div>

          {filteredSources.length === 0 && (
            <div className="text-center py-12">
              <Droplets className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No ATMs found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </div>
          )}

          {/* ATM Info Section */}
          <div className="mt-16 bg-secondary/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              How Water ATMs Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💳</span>
                </div>
                <h3 className="font-semibold mb-2">Pay & Select</h3>
                <p className="text-sm text-muted-foreground">
                  Use coins, cards, or mobile payment to select water quantity
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💧</span>
                </div>
                <h3 className="font-semibold mb-2">Pure & Fresh</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced RO filtration ensures clean, safe drinking water
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="font-semibold mb-2">24/7 Available</h3>
                <p className="text-sm text-muted-foreground">
                  Access clean water anytime with our automated systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterATMs;