
import { useState } from "react";
import { Menu, X, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

export const VideographyHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Camera className="w-8 h-8 text-yellow-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              CineVision
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</a>
            <a href="#services" className="text-gray-300 hover:text-yellow-400 transition-colors">Services</a>
            <a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors">About</a>
            <a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600">
              Free Consultation
            </Button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <nav className="flex flex-col gap-4 pt-4">
              <a href="#home" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</a>
              <a href="#services" className="text-gray-300 hover:text-yellow-400 transition-colors">Services</a>
              <a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors">About</a>
              <a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact</a>
              <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 w-fit">
                Free Consultation
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
