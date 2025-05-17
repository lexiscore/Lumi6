
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="flex items-center gap-1">
              <span className="text-xl font-bold text-blue-600">Lexi</span>
              <span className="text-xl font-semibold">Score</span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-10">
            <a href="#features" className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>
          
          {/* Authentication buttons for desktop */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 gap-4">
            <Button variant="ghost" asChild>
              <Link to="/admin-login">Admin Login</Link>
            </Button>
            <Button asChild>
              <Link to="/sign-up">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 p-4 animate-fade-in">
          <nav className="flex flex-col gap-4">
            <a 
              href="#features" 
              className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#pricing" 
              className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
              <Button variant="outline" className="w-full" asChild>
                <Link to="/admin-login">Admin Login</Link>
              </Button>
              <Button className="w-full" asChild>
                <Link to="/sign-up">Sign Up</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
