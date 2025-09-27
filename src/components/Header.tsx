import { useState } from "react";
import { Menu, X, Droplets, MapPin, Truck, Zap, Bell, Phone, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", icon: Droplets },
    { name: "Map", href: "/map", icon: MapPin },
    { name: "Suppliers", href: "/suppliers", icon: Truck },
    { name: "Water ATMs", href: "/atms", icon: Zap },
    { name: "Alerts", href: "/alerts", icon: Bell },
    { name: "Contact", href: "/contact", icon: Phone },
    { name: "About", href: "/about", icon: Info },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b shadow-water">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 transition-water hover:scale-105">
            <div className="relative">
              <Droplets className="h-8 w-8 text-primary animate-float" />
              <div className="absolute inset-0 bg-accent/20 rounded-full animate-ripple" />
            </div>
            <div>
              <span className="font-bold text-lg text-primary">💧 Smart Water Access</span>
              <p className="text-xs text-muted-foreground hidden sm:block">Near You</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.name} to={item.href}>
                  <Button
                    variant={isActive(item.href) ? "default" : "ghost"}
                    size="sm"
                    className="flex items-center space-x-2 transition-water"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden lg:block">{item.name}</span>
                  </Button>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-card border-b shadow-water animate-slide-up">
            <nav className="flex flex-col space-y-1 p-4">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button
                      variant={isActive(item.href) ? "default" : "ghost"}
                      size="sm"
                      className="w-full flex items-center space-x-2 justify-start"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Button>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;