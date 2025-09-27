import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MapSection from "@/components/MapSection";
import WaterSourceCard from "@/components/WaterSourceCard";
import ChartsSection from "@/components/ChartsSection";
import Chatbot from "@/components/Chatbot";

// Mock data for demonstration
const mockWaterSources = [
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
    id: "3",
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
    id: "4",
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
    id: "5",
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
    id: "6",
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
];

const Index = () => {
  const [waterSources] = useState(mockWaterSources);

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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <MapSection />
      <ChartsSection />
      
      {/* Water Sources Section */}
      <section id="water-sources" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nearby Water Sources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find water tankers and ATMs closest to you with real-time availability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {waterSources.map((source) => (
              <WaterSourceCard
                key={source.id}
                source={source}
                onCallPress={handleCallPress}
                onNavigatePress={handleNavigatePress}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="text-primary hover:text-accent transition-colors font-medium">
              Load More Water Sources →
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Water Sources</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">Live Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">50K+</div>
              <div className="text-muted-foreground">Happy Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">💧 Smart Water Access</h3>
              <p className="text-sm text-muted-foreground">
                Making clean water accessible to everyone through smart technology and real-time data.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <div><a href="/map" className="text-muted-foreground hover:text-primary transition-colors">Interactive Map</a></div>
                <div><a href="/suppliers" className="text-muted-foreground hover:text-primary transition-colors">Water Suppliers</a></div>
                <div><a href="/atms" className="text-muted-foreground hover:text-primary transition-colors">Water ATMs</a></div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-foreground mb-4">Support</h4>
              <div className="space-y-2 text-sm">
                <div><a href="/alerts" className="text-muted-foreground hover:text-primary transition-colors">Water Alerts</a></div>
                <div><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></div>
                <div><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</a></div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-foreground mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>📧 support@smartwater.in</div>
                <div>📞 +91-800-WATER-1</div>
                <div>📍 Pune & Mumbai, India</div>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Smart Water Access. Built with 💙 for better water access.</p>
          </div>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
};

export default Index;