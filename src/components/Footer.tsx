import { Link } from "react-router-dom";
import { MessageCircle, Mail, MapPin, Linkedin, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary neon-glow flex items-center justify-center">
                <span className="text-xl font-bold font-heading">SA</span>
              </div>
              <span className="text-lg font-heading font-bold gradient-text">
                Sole AI Agency
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Powering conversations beyond human limits with AI automation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span>Accra, Ghana</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <a href="mailto:contact@soleaiagency.com" className="hover:text-primary transition-colors">
                  contact@soleaiagency.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MessageCircle size={16} className="text-primary" />
                <a href="https://wa.me/233531423911" className="hover:text-primary transition-colors">
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Sole AI Agency. Founded by Solomon Onokerhor & Leslie Maccarthy. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/sole-ai-agency"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass flex items-center justify-center hover:border-primary transition-all opacity-75 hover:opacity-100"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://instagram.com/soleaiagency"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass flex items-center justify-center hover:border-primary transition-all opacity-75 hover:opacity-100"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://twitter.com/soleaiagency"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass flex items-center justify-center hover:border-primary transition-all opacity-75 hover:opacity-100"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://facebook.com/soleaiagency"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass flex items-center justify-center hover:border-primary transition-all opacity-75 hover:opacity-100"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>
          
          {/* Co-Founders Social Links */}
          <div className="mt-6 pt-6 border-t border-border/50">
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {/* Solomon Onokerhor */}
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-2 font-medium">Solomon Onokerhor</p>
                <div className="flex justify-center gap-2">
                  <a
                    href="https://www.instagram.com/_kerhor_?igsh=MTVkY3czMHE0MWI3Nw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg glass border border-border/50 flex items-center justify-center hover:border-primary transition-all opacity-75 hover:opacity-100"
                    aria-label="Solomon's Instagram"
                  >
                    <Instagram size={14} />
                  </a>
                  <a
                    href="https://youtube.com/@studyhacksbykerhor?si=Z7xwadUdhgmuEaje"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg glass border border-border/50 flex items-center justify-center hover:border-primary transition-all opacity-75 hover:opacity-100"
                    aria-label="Solomon's YouTube"
                  >
                    <Youtube size={14} />
                  </a>
                </div>
              </div>
              
              {/* Leslie Maccarthy */}
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-2 font-medium">Leslie Maccarthy</p>
                <div className="flex justify-center gap-2">
                  <a
                    href="https://www.linkedin.com/in/leslie-maccathy-992816382?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg glass border border-border/50 flex items-center justify-center hover:border-primary transition-all opacity-75 hover:opacity-100"
                    aria-label="Leslie's LinkedIn"
                  >
                    <Linkedin size={14} />
                  </a>
                  <a
                    href="https://www.instagram.com/datboii.leslie?igsh=b3Y1M2dudGY3cDJs&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg glass border border-border/50 flex items-center justify-center hover:border-primary transition-all opacity-75 hover:opacity-100"
                    aria-label="Leslie's Instagram"
                  >
                    <Instagram size={14} />
                  </a>
                  <a
                    href="https://x.com/slime711976?s=21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg glass border border-border/50 flex items-center justify-center hover:border-primary transition-all opacity-75 hover:opacity-100"
                    aria-label="Leslie's Twitter"
                  >
                    <Twitter size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
