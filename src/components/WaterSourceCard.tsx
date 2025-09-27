import { Phone, MapPin, Clock, DollarSign, Truck, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface WaterSource {
  id: string;
  name: string;
  type: "tanker" | "atm";
  contact: string;
  address: string;
  distance: number;
  price: string;
  availability: "available" | "limited" | "unavailable";
  capacity?: string;
  hours?: string;
}

interface WaterSourceCardProps {
  source: WaterSource;
  onCallPress: (contact: string) => void;
  onNavigatePress: (address: string) => void;
}

const WaterSourceCard = ({ source, onCallPress, onNavigatePress }: WaterSourceCardProps) => {
  const getStatusColor = (availability: string) => {
    switch (availability) {
      case "available":
        return "bg-green-500/10 text-green-700 border-green-200";
      case "limited":
        return "bg-yellow-500/10 text-yellow-700 border-yellow-200";
      case "unavailable":
        return "bg-red-500/10 text-red-700 border-red-200";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusText = (availability: string) => {
    switch (availability) {
      case "available":
        return "Available";
      case "limited":
        return "Limited Stock";
      case "unavailable":
        return "Unavailable";
      default:
        return "Unknown";
    }
  };

  return (
    <Card className="transition-water hover:shadow-water hover:scale-[1.02] group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              {source.type === "tanker" ? (
                <Truck className="h-5 w-5 text-primary" />
              ) : (
                <Droplets className="h-5 w-5 text-accent" />
              )}
            </div>
            <div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                {source.name}
              </CardTitle>
              <div className="flex items-center space-x-2 mt-1">
                <Badge variant="outline" className="text-xs">
                  {source.type === "tanker" ? "Water Tanker" : "Water ATM"}
                </Badge>
                <Badge className={getStatusColor(source.availability)}>
                  {getStatusText(source.availability)}
                </Badge>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Distance</div>
            <div className="font-semibold text-primary">{source.distance} km</div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <span className="text-muted-foreground truncate">{source.address}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <DollarSign className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <span className="font-medium text-foreground">{source.price}</span>
          </div>
          
          {source.capacity && (
            <div className="flex items-center space-x-2">
              <Droplets className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <span className="text-muted-foreground">{source.capacity}</span>
            </div>
          )}
          
          {source.hours && (
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <span className="text-muted-foreground">{source.hours}</span>
            </div>
          )}
        </div>

        <div className="flex space-x-2 pt-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 transition-water hover:bg-primary hover:text-primary-foreground"
            onClick={() => onCallPress(source.contact)}
          >
            <Phone className="h-4 w-4 mr-2" />
            Call
          </Button>
          <Button
            size="sm"
            className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground transition-water"
            onClick={() => onNavigatePress(source.address)}
          >
            <MapPin className="h-4 w-4 mr-2" />
            Navigate
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WaterSourceCard;