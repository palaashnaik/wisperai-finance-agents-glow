
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
          <a href="#features" className="text-sm font-medium hover:text-wisper-purple transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-wisper-purple transition-colors">
            How It Works
          </a>
          <a href="#roadmap" className="text-sm font-medium hover:text-wisper-purple transition-colors">
            Roadmap
          </a>
          <Button className="gradient-bg hover:opacity-90 transition-opacity">
            Get Early Access
          </Button>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
