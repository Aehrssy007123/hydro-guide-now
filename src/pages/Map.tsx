import Header from "@/components/Header";
import MapSection from "@/components/MapSection";

const Map = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <MapSection />
      </div>
    </div>
  );
};

export default Map;