import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import WaterSourceCard from "@/components/WaterSourceCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Truck } from "lucide-react";

// Mock tanker data
const tankerSources = [
  {
    id: "1",
    name: "AquaSupply Tanker Service",
    type: "tanker" as const,
    contact: "+91-98765-43210",
    address: "Pune Camp, Maharashtra 411001",
    distance: 1.2,
    price: "₹200/1000L",
    availability: "available" as const,
    capacity: "5000L Tank",
    hours: "6:00 AM - 10:00 PM",
  },
  {
    id: "2",
    name: "Blue Drop Water Services",
    type: "tanker" as const,
    contact: "+91-98765-43212",
    address: "Shivaji Nagar, Pune 411016",
    distance: 2.5,
    price: "₹180/1000L",
    availability: "limited" as const,
    capacity: "3000L Tank",
    hours: "7:00 AM - 9:00 PM",
  },
  {
    id: "3",
    name: "Reliable Water Supply Co.",
    type: "tanker" as const,
    contact: "+91-98765-43214",
    address: "Kothrud, Pune 411038",
    distance: 3.2,
    price: "₹220/1000L",
    availability: "unavailable" as const,
    capacity: "8000L Tank",
    hours: "8:00 AM - 8:00 PM",
  },
  {
    id: "4",
    name: "Crystal Clear Tankers",
    type: "tanker" as const,
    contact: "+91-98765-43216",
    address: "Wakad, Pune 411057",
    distance: 4.5,
    price: "₹190/1000L",
    availability: "available" as const,
    capacity: "4000L Tank",
    hours: "5:00 AM - 11:00 PM",
  },
];

const Suppliers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleCallPress = (contact: string) => {
    window.open(`tel:${contact}`, '_self');
    toast({
      title: "Calling supplier",
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

  const filteredSources = tankerSources.filter(source => {
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
              <div className="p-3 bg-primary/10 rounded-full">
                <Truck className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Water Tanker Suppliers
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find reliable water tanker services with real-time availability and competitive pricing
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search suppliers by name or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={selectedFilter} onValueChange={setSelectedFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Suppliers</SelectItem>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="limited">Limited Stock</SelectItem>
                <SelectItem value="unavailable">Unavailable</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Results */}
          <div className="mb-6 text-center text-muted-foreground">
            Showing {filteredSources.length} of {tankerSources.length} water tanker suppliers
          </div>

          {/* Supplier Cards */}
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
              <Truck className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No suppliers found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Suppliers;