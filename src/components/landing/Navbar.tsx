import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="flex items-center gap-4 group">
              <div className="bg-white rounded-lg p-2 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img 
                  src="/lovable-uploads/f4c6f163-6636-4514-aeb4-a5a68f70db19.png" 
                  alt="Lumi6 Logo" 
                  className="w-16 h-16 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
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
            <div className="relative group">
              <button 
                className="text-slate-700 hover:text-violet-600 transition-colors font-medium relative group flex items-center gap-1"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                Products & Solutions
                <ChevronDown size={16} className="transform transition-transform group-hover:rotate-180" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              {isProductsOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-slate-200 py-4 z-50"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <a href="#features" className="block px-6 py-3 text-slate-700 hover:text-violet-600 hover:bg-violet-50 transition-colors">
                    <div className="font-medium">Language Assessment</div>
                    <div className="text-sm text-slate-500">CEFR-based testing platform</div>
                  </a>
                  <a href="#features" className="block px-6 py-3 text-slate-700 hover:text-violet-600 hover:bg-violet-50 transition-colors">
                    <div className="font-medium">Enterprise Solutions</div>
                    <div className="text-sm text-slate-500">Bulk testing & API integration</div>
                  </a>
                  <a href="#features" className="block px-6 py-3 text-slate-700 hover:text-violet-600 hover:bg-violet-50 transition-colors">
                    <div className="font-medium">AI Speaking Tests</div>
                    <div className="text-sm text-slate-500">Advanced voice evaluation</div>
                  </a>
                </div>
              )}
            </div>
            <a href="#features" className="text-slate-700 hover:text-violet-600 transition-colors font-medium relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#how-it-works" className="text-slate-700 hover:text-violet-600 transition-colors font-medium relative group">
              How It Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-slate-700 hover:text-violet-600 transition-colors font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
          
          {/* Authentication button for desktop */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 gap-4">
            <Button className="bg-gradient-to-r from-blue-500 via-violet-500 to-purple-600 hover:from-blue-600 hover:via-violet-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold" asChild>
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
              className="text-slate-700 hover:text-violet-600 transition-colors font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Products & Solutions
            </a>
            <a 
              href="#features" 
              className="text-slate-700 hover:text-violet-600 transition-colors font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-slate-700 hover:text-violet-600 transition-colors font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#contact" 
              className="text-slate-700 hover:text-violet-600 transition-colors font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-4 border-t border-slate-200">
              <Button className="w-full bg-gradient-to-r from-blue-500 via-violet-500 to-purple-600 hover:from-blue-600 hover:via-violet-600 hover:to-purple-700 shadow-lg font-semibold" asChild>
                <Link to="/admin-login">Admin Login</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
