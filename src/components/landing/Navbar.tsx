
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
          {/* Clay.com-inspired: logo, menu, CTA in a single compact row */}
          <div className="flex items-center w-full">
            {/* Logo flush left */}
            <Link to="/" className="flex items-center group mr-2 sm:mr-4">
              <div className="relative">
                <Logo className="w-12 h-12 sm:w-16 sm:h-16 group-hover:scale-105 transition-transform duration-300" />
              </div>
            </Link>
            {/* Menu items, tight spacing, regular font, subtle hover underline */}
            <nav className="hidden md:flex gap-3">
              <ProductsDropdown isOpen={isProductsOpen} setIsOpen={setIsProductsOpen} />
              <SolutionsDropdown isOpen={isSolutionsOpen} setIsOpen={setIsSolutionsOpen} />
              <a 
                href="#how-it-works" 
                className="text-neutral-700 hover:text-purple-600 transition-all font-normal relative group text-sm lg:text-base px-2 py-1"
              >
                How It Works
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <Link 
                to="/cefr-guide" 
                className="text-neutral-700 hover:text-purple-600 transition-all font-normal relative group text-sm lg:text-base px-2 py-1"
              >
                CEFR Guide
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                to="/why-eq-test" 
                className="text-neutral-700 hover:text-purple-600 transition-all font-normal relative group text-sm lg:text-base px-2 py-1"
              >
                Why EQ Test
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <a 
                href="#contact" 
                className="text-neutral-700 hover:text-purple-600 transition-all font-normal relative group text-sm lg:text-base px-2 py-1"
              >
                Contact
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>
            {/* CTA right after menu, with margin-left */}
            <div className="hidden md:flex items-center ml-4">
              <Button 
                className="bg-gradient-purple hover:shadow-purple-glow transition-all duration-300 font-semibold rounded-xl text-white border-0 group text-sm lg:text-base px-4 sm:px-6 py-2 sm:py-3" 
                onClick={handleTrialClick}
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover:animate-pulse" />
                Start Your Trial
              </Button>
            </div>
            {/* Mobile menu button flush right */}
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
