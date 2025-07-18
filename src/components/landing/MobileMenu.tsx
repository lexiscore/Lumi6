
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onTrialClick: () => void;
}

export default function MobileMenu({ isOpen, onClose, onTrialClick }: MobileMenuProps) {
  if (!isOpen) return null;

  const handleTrialClick = () => {
    onTrialClick();
    onClose();
  };

  return (
    <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-neutral-200 p-6 animate-fade-in shadow-large">
      <nav className="flex flex-col gap-6">
        {/* Products Section */}
        <div className="space-y-3">
          <div className="font-semibold text-neutral-900 mb-3 text-lg">Products</div>
          <Link 
            to="/eq-assessment" 
            className="block pl-4 py-2 text-neutral-700 hover:text-purple-600 transition-colors rounded-lg hover:bg-purple-50" 
            onClick={onClose}
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">🧠</span>
              <div>
                <div className="font-medium">EQ Assessment</div>
                <div className="text-xs text-neutral-500">Emotional intelligence evaluation</div>
              </div>
            </div>
          </Link>
          <Link 
            to="/language-assessment" 
            className="block pl-4 py-2 text-neutral-700 hover:text-vibrant-600 transition-colors rounded-lg hover:bg-vibrant-50" 
            onClick={onClose}
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">🗣️</span>
              <div>
                <div className="font-medium">Language Assessment</div>
                <div className="text-xs text-neutral-500">CEFR-aligned proficiency tests</div>
              </div>
            </div>
          </Link>
          <Link 
            to="/custom-assessments" 
            className="block pl-4 py-2 text-neutral-700 hover:text-neutral-600 transition-colors rounded-lg hover:bg-neutral-50" 
            onClick={onClose}
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">⚙️</span>
              <div>
                <div className="font-medium">Custom Assessments</div>
                <div className="text-xs text-neutral-500">Tailored solutions</div>
              </div>
            </div>
          </Link>
        </div>

        {/* Solutions Section */}
        <div className="space-y-3">
          <Link to="/solutions" className="block pl-4 py-2 text-neutral-700 hover:text-neutral-900 transition-colors font-medium rounded-lg hover:bg-neutral-50" onClick={onClose}>
            Solutions
          </Link>
        </div>
        
        {/* Navigation Links */}
        <div className="space-y-2">
          <a 
            href="#how-it-works" 
            className="block pl-4 py-2 text-neutral-700 hover:text-neutral-900 transition-colors font-medium rounded-lg hover:bg-neutral-50" 
            onClick={onClose}
          >
            How It Works
          </a>
          <Link 
            to="/cefr-guide" 
            className="block pl-4 py-2 text-neutral-700 hover:text-neutral-900 transition-colors font-medium rounded-lg hover:bg-neutral-50" 
            onClick={onClose}
          >
            CEFR Guide
          </Link>
          <Link 
            to="/why-eq-test" 
            className="block pl-4 py-2 text-neutral-700 hover:text-neutral-900 transition-colors font-medium rounded-lg hover:bg-neutral-50" 
            onClick={onClose}
          >
            Why EQ Test
          </Link>
          <a 
            href="#contact" 
            className="block pl-4 py-2 text-neutral-700 hover:text-neutral-900 transition-colors font-medium rounded-lg hover:bg-neutral-50" 
            onClick={onClose}
          >
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <div className="pt-4 border-t border-neutral-200">
          <Button 
            className="w-full bg-neutral-900 hover:bg-neutral-800 transition-all duration-300 font-semibold rounded-xl text-white border-0 group" 
            onClick={handleTrialClick}
          >
            <Sparkles className="w-4 h-4 mr-2 group-hover:animate-pulse" />
            Sign Up
          </Button>
        </div>
      </nav>
    </div>
  );
}
