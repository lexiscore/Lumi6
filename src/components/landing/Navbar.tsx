
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
      <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10 shadow-2xl">
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
              <ProductsDropdown isOpen={isProductsOpen} setIsOpen={setIsProductsOpen} />
              <SolutionsDropdown isOpen={isSolutionsOpen} setIsOpen={setIsSolutionsOpen} />
              
              <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-all font-medium relative group">
                How It Works
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 glow-effect"></span>
              </a>
              <Link to="/cefr-guide" className="text-muted-foreground hover:text-primary transition-all font-medium relative group">
                CEFR Guide
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 glow-effect"></span>
              </Link>
              <Link to="/why-eq-test" className="text-muted-foreground hover:text-primary transition-all font-medium relative group">
                Why EQ Test
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 glow-effect"></span>
              </Link>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-all font-medium relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 glow-effect"></span>
              </a>
            </nav>
            
            {/* Authentication button for desktop */}
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 gap-4">
              <Button className="brand-gradient hover:scale-105 shadow-lg hover:glow-effect transition-all duration-500 font-semibold rounded-xl text-background" onClick={handleTrialClick}>
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
