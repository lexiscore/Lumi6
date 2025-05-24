
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">LexiScore</span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="hover:bg-blue-50"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-slate-700 hover:text-blue-600 transition-colors font-medium relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#how-it-works" className="text-slate-700 hover:text-blue-600 transition-colors font-medium relative group">
              How It Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
          
          {/* Authentication button for desktop */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 gap-4">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold" asChild>
              <Link to="/admin-login">Admin Login</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/50 p-6 animate-fade-in shadow-lg">
          <nav className="flex flex-col gap-6">
            <a 
              href="#features" 
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#contact" 
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-4 border-t border-slate-200">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg font-semibold" asChild>
                <Link to="/admin-login">Admin Login</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
