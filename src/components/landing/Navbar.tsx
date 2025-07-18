
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
        <div className="mx-auto px-2 sm:px-4 max-w-[1100px] flex items-center h-[64px]">
          {/* Logo */}
          <Link to="/" className="flex items-center group mr-6">
            <div className="relative">
              <Logo className="w-12 h-12 sm:w-16 sm:h-16 group-hover:scale-105 transition-transform duration-300" />
            </div>
          </Link>
          
          {/* Desktop Menu - All items in one line */}
          <nav className="hidden md:flex items-center space-x-6 flex-1">
            <ProductsDropdown isOpen={isProductsOpen} setIsOpen={setIsProductsOpen} />
            <SolutionsDropdown isOpen={isSolutionsOpen} setIsOpen={setIsSolutionsOpen} />
            
            <a 
              href="#how-it-works" 
              className="text-neutral-700 hover:text-neutral-900 transition-all font-medium relative group text-sm"
            >
              How It Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <Link 
              to="/cefr-guide" 
              className="text-neutral-700 hover:text-neutral-900 transition-all font-medium relative group text-sm"
            >
              CEFR Guide
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/why-eq-test" 
              className="text-neutral-700 hover:text-neutral-900 transition-all font-medium relative group text-sm"
            >
              Why EQ Test
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <a 
              href="#contact" 
              className="text-neutral-700 hover:text-neutral-900 transition-all font-medium relative group text-sm"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
          
          {/* Sign Up Button */}
          <div className="hidden md:flex items-center ml-4">
            <Button 
              className="bg-neutral-900 hover:bg-neutral-800 transition-all duration-300 font-semibold rounded-xl text-white border-0 group text-sm px-4 py-2" 
              onClick={handleTrialClick}
            >
              <Sparkles className="w-3 h-3 mr-2 group-hover:animate-pulse" />
              Sign Up
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center ml-auto">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              aria-label="Toggle menu" 
              className="hover:bg-neutral-100 text-neutral-700 h-8 w-8 sm:h-10 sm:w-10"
            >
              {isMenuOpen ? <X size={16} className="sm:w-5 sm:h-5" /> : <Menu size={16} className="sm:w-5 sm:h-5" />}
            </Button>
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
