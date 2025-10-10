import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Pune coordinates as default
const defaultPosition: [number, number] = [18.5204, 73.8567]; 

// Icons for different categories
const userIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const damIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const atmIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const tankerIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/orange-dot.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

// Example water locations with categories
const waterLocations = [
  { name: "Pashan Lake", lat: 18.5200, lng: 73.7900, category: "Dam" },
  { name: "Khadakwasla Dam", lat: 18.4205, lng: 73.7972, category: "Dam" },
  { name: "Water ATM - Kothrud", lat: 18.5015, lng: 73.8170, category: "ATM" },
  { name: "Tanker Service - Shivajinagar", lat: 18.5290, lng: 73.8437, category: "Tanker" },
];

// Component to move map to user location
function LocateUser() {
  const map = useMap();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userCoords: [number, number] = [
            position.coords.latitude,
            position.coords.longitude,
          ];
          map.setView(userCoords, 13);
          L.marker(userCoords, { icon: userIcon })
            .addTo(map)
            .bindPopup("<b>You are here!</b>")
            .openPopup();
        },
        () => alert("Location access denied.")
      );
    }
  }, [map]);

  return null;
}

export default function MapView() {
  const [filter, setFilter] = useState<string>("All"); // Filter state

  // Function to get icon based on category
  const getIcon = (category: string) => {
    switch (category) {
      case "Dam":
        return damIcon;
      case "ATM":
        return atmIcon;
      case "Tanker":
        return tankerIcon;
      default:
        return damIcon;
    }
  };

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Filter buttons */}
      <div className="flex justify-center gap-4 p-4 bg-gray-100 shadow-md">
        {["All", "Dam", "ATM", "Tanker"].map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded ${
              filter === cat ? "bg-blue-500 text-white" : "bg-white border"
            }`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Map */}
      <div className="flex-1">
        <MapContainer center={defaultPosition} zoom={12} className="w-full h-full">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Water locations markers */}
          {waterLocations
            .filter((loc) => filter === "All" || loc.category === filter)
            .map((loc, i) => (
              <Marker key={i} position={[loc.lat, loc.lng]} icon={getIcon(loc.category)}>
                <Popup>
                  <b>{loc.name}</b>
                  <br />
                  {loc.category}
                </Popup>
              </Marker>
            ))}

          {/* User location */}
          <LocateUser />
        </MapContainer>
      </div>
    </div>
  );
}
