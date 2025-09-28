import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Leaf, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Twitter, 
  Linkedin,
  Shield,
  Users,
  Book
} from "lucide-react";

const footerLinks = {
  platform: [
    { name: "For Farmers", href: "#farmers" },
    { name: "For Processors", href: "#processors" },
    { name: "For Labs", href: "#labs" },
    { name: "For Consumers", href: "#consumers" }
  ],
  resources: [
    { name: "Documentation", href: "#docs" },
    { name: "API Reference", href: "#api" },
    { name: "Blockchain Explorer", href: "#explorer" },
    { name: "Quality Standards", href: "#standards" }
  ],
  support: [
    { name: "Help Center", href: "#help" },
    { name: "Contact Support", href: "#support" },
    { name: "Training", href: "#training" },
    { name: "Community Forum", href: "#forum" }
  ]
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-herb-primary rounded-lg">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">HerbTrace</h3>
                <Badge variant="secondary" className="text-xs bg-herb-primary/20 text-herb-primary border-herb-primary/30">
                  Blockchain Verified
                </Badge>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Revolutionary blockchain-based traceability system ensuring authenticity 
              and sustainability of Ayurvedic medicinal plants from farm to shelf.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-herb-primary" />
                <span className="text-primary-foreground/80">All India Institute of Ayurveda, New Delhi</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-herb-primary" />
                <span className="text-primary-foreground/80">herbtrace@aiia.gov.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-herb-primary" />
                <span className="text-primary-foreground/80">+91-11-2610-8989</span>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4 flex items-center gap-2">
              <Users className="h-4 w-4 text-herb-primary" />
              Platform
            </h4>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-herb-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4 flex items-center gap-2">
              <Book className="h-4 w-4 text-herb-primary" />
              Resources
            </h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-herb-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4 flex items-center gap-2">
              <Shield className="h-4 w-4 text-herb-primary" />
              Support
            </h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-herb-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:bg-herb-primary/20">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-herb-primary/20">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-herb-primary/20">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/80">
              © 2024 HerbTrace - Ministry of Ayush, Government of India. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#privacy" className="text-primary-foreground/80 hover:text-herb-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-primary-foreground/80 hover:text-herb-primary transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-primary-foreground/80 hover:text-herb-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
          
          {/* Certification Badges */}
          <div className="flex justify-center items-center gap-4 mt-6 pt-6 border-t border-primary-foreground/10">
            <Badge variant="outline" className="border-herb-primary/30 text-herb-primary">
              <Shield className="h-3 w-3 mr-1" />
              Blockchain Secured
            </Badge>
            <Badge variant="outline" className="border-success-green/30 text-success-green">
              ISO 27001 Certified
            </Badge>
            <Badge variant="outline" className="border-trust-blue/30 text-trust-blue">
              AYUSH Approved
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  );
};