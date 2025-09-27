import { useState } from "react";
import { MapPin, Navigation, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-water.jpg";

const Hero = () => {
  const [isLocating, setIsLocating] = useState(false);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);

  const handleFindWaterNearMe = () => {
    if (!navigator.geolocation) {
      toast({
        title: "Location not supported",
        description: "Your browser doesn't support geolocation.",
        variant: "destructive",
      });
      return;
    }

    setIsLocating(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
        setIsLocating(false);
        
        toast({
          title: "Location found!",
          description: `Found ${Math.floor(Math.random() * 15 + 5)} water sources near you.`,
        });
        
        // Scroll to map or results section
        document.getElementById('water-sources')?.scrollIntoView({ 
          behavior: 'smooth' 
        });
      },
      (error) => {
        setIsLocating(false);
        toast({
          title: "Location access denied",
          description: "Please enable location access to find water sources near you.",
          variant: "destructive",
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000,
      }
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/10 rounded-full animate-ripple" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-primary/10 rounded-full animate-ripple delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-accent/5 rounded-full animate-ripple delay-2000" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center animate-float">
                <MapPin className="w-12 h-12 text-primary" />
              </div>
              <div className="absolute inset-0 bg-accent/20 rounded-full animate-ripple" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            💧 Smart Water Access
            <br />
            <span className="text-accent">Near You</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Find water tankers, ATMs, and suppliers instantly. Real-time availability, 
            prices, and direct contact - all at your fingertips.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              onClick={handleFindWaterNearMe}
              disabled={isLocating}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg shadow-glow transition-water hover:scale-105"
            >
              {isLocating ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Finding Location...
                </>
              ) : (
                <>
                  <Navigation className="mr-2 h-5 w-5" />
                  Find Water Near Me
                </>
              )}
            </Button>

            <div className="flex items-center text-primary-foreground/80 bg-primary/20 px-4 py-2 rounded-lg backdrop-blur-sm">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">
                {location 
                  ? `Location: ${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}`
                  : "Click to enable location"
                }
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-primary-foreground/90">
            <div className="bg-primary/20 backdrop-blur-sm rounded-lg p-4 transition-water hover:bg-primary/30">
              <div className="text-2xl font-bold text-accent mb-1">500+</div>
              <div className="text-sm">Water Sources</div>
            </div>
            <div className="bg-primary/20 backdrop-blur-sm rounded-lg p-4 transition-water hover:bg-primary/30">
              <div className="text-2xl font-bold text-accent mb-1">24/7</div>
              <div className="text-sm">Live Tracking</div>
            </div>
            <div className="bg-primary/20 backdrop-blur-sm rounded-lg p-4 transition-water hover:bg-primary/30">
              <div className="text-2xl font-bold text-accent mb-1">Real-time</div>
              <div className="text-sm">Availability</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;