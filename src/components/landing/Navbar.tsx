
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import TrialFormModal from "./TrialFormModal";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  
  const productsTimeoutRef = useRef<NodeJS.Timeout>();
  const solutionsTimeoutRef = useRef<NodeJS.Timeout>();

  const handleTrialClick = () => {
    setIsTrialModalOpen(true);
  };

  const handleProductsEnter = () => {
    if (productsTimeoutRef.current) {
      clearTimeout(productsTimeoutRef.current);
    }
    setIsProductsOpen(true);
  };

  const handleProductsLeave = () => {
    productsTimeoutRef.current = setTimeout(() => {
      setIsProductsOpen(false);
    }, 150);
  };

  const handleSolutionsEnter = () => {
    if (solutionsTimeoutRef.current) {
      clearTimeout(solutionsTimeoutRef.current);
    }
    setIsSolutionsOpen(true);
  };

  const handleSolutionsLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => {
      setIsSolutionsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (productsTimeoutRef.current) {
        clearTimeout(productsTimeoutRef.current);
      }
      if (solutionsTimeoutRef.current) {
        clearTimeout(solutionsTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/" className="flex items-center">
                <Logo className="w-12 h-12" textClassName="text-xl" />
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="hover:bg-gray-100">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
            
            {/* Desktop menu */}
            <nav className="hidden md:flex space-x-8">
              <div className="relative group">
                <button 
                  className="text-gray-700 hover:text-blue-600 transition-all font-medium relative group flex items-center gap-1" 
                  onMouseEnter={handleProductsEnter}
                  onMouseLeave={handleProductsLeave}
                >
                  Products
                  <ChevronDown size={16} className="transform transition-transform group-hover:rotate-180" />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </button>
                {isProductsOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-xl border border-gray-200 py-4 z-50 animate-fade-in" 
                    onMouseEnter={handleProductsEnter}
                    onMouseLeave={handleProductsLeave}
                  >
                    <div className="px-2">
                      <Link 
                        to="/language-assessment" 
                        className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg"
                        onClick={() => setIsProductsOpen(false)}
                      >
                        <div className="font-medium flex items-center gap-2">
                          🧩 Language Assessment
                        </div>
                        <div className="text-sm text-gray-500">CEFR-aligned English assessments for hiring & development</div>
                      </Link>
                      
                      <Link 
                        to="/eq-assessment" 
                        className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors rounded-lg"
                        onClick={() => setIsProductsOpen(false)}
                      >
                        <div className="font-medium flex items-center gap-2">
                          ❤️ EQ Assessment
                        </div>
                        <div className="text-sm text-gray-500">For leadership, learning, talent and org development</div>
                      </Link>
                      
                      <Link 
                        to="/custom-assessments" 
                        className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors rounded-lg"
                        onClick={() => setIsProductsOpen(false)}
                      >
                        <div className="font-medium flex items-center gap-2">
                          ⚙️ Custom Assessments
                        </div>
                        <div className="text-sm text-gray-500">Custom tests, frameworks, API integration, bulk testing</div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="relative group">
                <button 
                  className="text-gray-700 hover:text-blue-600 transition-all font-medium relative group flex items-center gap-1" 
                  onMouseEnter={handleSolutionsEnter}
                  onMouseLeave={handleSolutionsLeave}
                >
                  Solutions
                  <ChevronDown size={16} className="transform transition-transform group-hover:rotate-180" />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </button>
                {isSolutionsOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-xl border border-gray-200 py-4 z-50 animate-fade-in" 
                    onMouseEnter={handleSolutionsEnter}
                    onMouseLeave={handleSolutionsLeave}
                  >
                    <div className="px-2">
                      <a href="#solutions" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg">
                        <div className="font-medium">Coming Soon</div>
                        <div className="text-sm text-gray-500">More solutions in development</div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
              
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-all font-medium relative group">
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-all font-medium relative group">
                How It Works
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <Link to="/cefr-guide" className="text-gray-700 hover:text-blue-600 transition-all font-medium relative group">
                Assessment Guide
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-all font-medium relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>
            
            {/* Authentication button for desktop */}
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold rounded-xl" onClick={handleTrialClick}>
                Start Your Trial
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 p-6 animate-fade-in shadow-lg">
            <nav className="flex flex-col gap-6">
              <div className="space-y-2">
                <div className="font-medium text-gray-900 mb-2">Products</div>
                <Link to="/language-assessment" className="block pl-4 text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Language Assessment
                </Link>
                <Link to="/eq-assessment" className="block pl-4 text-gray-700 hover:text-purple-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                  EQ Assessment
                </Link>
                <Link to="/custom-assessments" className="block pl-4 text-gray-700 hover:text-green-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Custom Assessments
                </Link>
              </div>
              
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Features
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                How It Works
              </a>
              <Link to="/cefr-guide" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Assessment Guide
              </Link>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
              <div className="pt-4 border-t border-gray-200">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 shadow-lg font-semibold rounded-xl" onClick={handleTrialClick}>
                  Start Your Trial
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
      
      <TrialFormModal 
        isOpen={isTrialModalOpen} 
        onClose={() => setIsTrialModalOpen(false)} 
      />
    </>
  );
}
