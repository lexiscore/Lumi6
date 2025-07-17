
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import TrialFormModal from "./TrialFormModal";
import ProductsDropdown from "./ProductsDropdown";
import SolutionsDropdown from "./SolutionsDropdown";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  const handleTrialClick = () => {
    setIsTrialModalOpen(true);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-subtle">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/" className="flex items-center group">
                <div className="relative">
                  <Logo className="w-10 h-10 group-hover:scale-105 transition-transform duration-300" textClassName="text-lg" />
                </div>
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                aria-label="Toggle menu" 
                className="hover:bg-neutral-100 text-neutral-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
            
            {/* Desktop menu */}
            <nav className="hidden md:flex space-x-8">
              <ProductsDropdown isOpen={isProductsOpen} setIsOpen={setIsProductsOpen} />
              <SolutionsDropdown isOpen={isSolutionsOpen} setIsOpen={setIsSolutionsOpen} />
              
              <a 
                href="#how-it-works" 
                className="text-neutral-700 hover:text-neutral-900 transition-all font-medium relative group"
              >
                How It Works
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <Link 
                to="/cefr-guide" 
                className="text-neutral-700 hover:text-neutral-900 transition-all font-medium relative group"
              >
                CEFR Guide
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                to="/why-eq-test" 
                className="text-neutral-700 hover:text-neutral-900 transition-all font-medium relative group"
              >
                Why EQ Test
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <a 
                href="#contact" 
                className="text-neutral-700 hover:text-neutral-900 transition-all font-medium relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>
            
            {/* Authentication button for desktop */}
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 gap-4">
              <Button 
                className="bg-gradient-purple hover:shadow-purple-glow transition-all duration-300 font-semibold rounded-xl text-white border-0 group" 
                onClick={handleTrialClick}
              >
                <Sparkles className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                Start Your Trial
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <MobileMenu 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)} 
          onTrialClick={handleTrialClick}
        />
      </header>
      
      <TrialFormModal 
        isOpen={isTrialModalOpen} 
        onClose={() => setIsTrialModalOpen(false)} 
      />
    </>
  );
}
