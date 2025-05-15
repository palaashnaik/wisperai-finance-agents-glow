
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";
import { Menu, X } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-2 glass-effect shadow-sm" : "py-4 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-bold gradient-text">WisperAI</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#vision" className="text-sm font-medium hover:text-wisper-purple transition-colors">
            Our Vision
          </a>
          <a href="#features" className="text-sm font-medium hover:text-wisper-purple transition-colors">
            Capabilities
          </a>
          <a href="#industries" className="text-sm font-medium hover:text-wisper-purple transition-colors">
            Industries
          </a>
          <a href="#early-access" className="text-sm font-medium hover:text-wisper-purple transition-colors">
            Early Access
          </a>
          <Button 
            className="gradient-bg hover:opacity-90 transition-opacity"
            onClick={() => setIsEarlyAccessOpen(true)}
          >
            Get Early Access
          </Button>
        </div>

        <div className="md:hidden">
          {isMobile ? (
            <Drawer open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="h-[60vh] px-4 py-6 flex flex-col">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xl font-bold gradient-text">WisperAI</span>
                  <DrawerClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                    </Button>
                  </DrawerClose>
                </div>
                <div className="flex flex-col space-y-6">
                  <a href="#vision" className="text-lg font-medium hover:text-wisper-purple transition-colors">
                    Our Vision
                  </a>
                  <a href="#features" className="text-lg font-medium hover:text-wisper-purple transition-colors">
                    Capabilities
                  </a>
                  <a href="#industries" className="text-lg font-medium hover:text-wisper-purple transition-colors">
                    Industries
                  </a>
                  <a href="#early-access" className="text-lg font-medium hover:text-wisper-purple transition-colors">
                    Early Access
                  </a>
                  <Button 
                    className="gradient-bg hover:opacity-90 transition-opacity w-full mt-4"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsEarlyAccessOpen(true);
                    }}
                  >
                    Get Early Access
                  </Button>
                </div>
              </DrawerContent>
            </Drawer>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          )}
        </div>
      </div>

      {/* Early Access Dialog */}
      <Dialog open={isEarlyAccessOpen} onOpenChange={setIsEarlyAccessOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Get Early Access</DialogTitle>
          </DialogHeader>
          <ContactForm 
            onClose={() => setIsEarlyAccessOpen(false)} 
            ctaText="Submit Request"
            source="navbar_early_access"
          />
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navbar;
