import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useLocation } from "react-router-dom";
import { 
  Leaf, 
  Menu, 
  X, 
  MapPin, 
  Microscope, 
  Package, 
  QrCode,
  Users,
  Shield
} from "lucide-react";
import { useState } from "react";

const navigationItems = [
  { name: "Collect", href: "/collect", icon: MapPin },
  { name: "Process", href: "/process", icon: Package },
  { name: "Test", href: "/test", icon: Microscope },
  { name: "Scan", href: "/scan", icon: QrCode },
  { name: "Dashboard", href: "/dashboard", icon: Shield },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-herb-primary/20 shadow-botanical">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-botanical rounded-lg shadow-botanical">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">HerbTrace</h1>
              <Badge variant="outline" className="text-xs border-herb-primary/30 text-herb-primary">
                Blockchain Verified
              </Badge>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                size="sm"
                asChild
                className={`text-muted-foreground hover:text-foreground hover:bg-herb-primary/10 ${
                  location.pathname === item.href ? 'text-foreground bg-herb-primary/10' : ''
                }`}
              >
                <Link to={item.href}>
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.name}
                </Link>
              </Button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="botanical" size="sm" className="shadow-botanical">
              <Users className="h-4 w-4 mr-2" />
              Join Network
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-herb-primary/20">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  asChild
                  className={`justify-start text-muted-foreground hover:text-foreground hover:bg-herb-primary/10 ${
                    location.pathname === item.href ? 'text-foreground bg-herb-primary/10' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Link to={item.href}>
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.name}
                  </Link>
                </Button>
              ))}
              <div className="pt-2">
                <Button variant="botanical" className="w-full shadow-botanical">
                  <Users className="h-4 w-4 mr-2" />
                  Join Network
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};