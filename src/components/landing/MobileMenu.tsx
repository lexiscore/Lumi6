
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
    <div className="md:hidden bg-white border-t border-gray-200 p-6 animate-fade-in shadow-lg">
      <nav className="flex flex-col gap-6">
        <div className="space-y-2">
          <div className="font-medium text-gray-900 mb-2">Products</div>
          <Link to="/language-assessment" className="block pl-4 text-gray-700 hover:text-blue-600 transition-colors" onClick={onClose}>
            Language Assessment
          </Link>
          <Link to="/eq-assessment" className="block pl-4 text-gray-700 hover:text-purple-600 transition-colors" onClick={onClose}>
            EQ Assessment
          </Link>
          <Link to="/custom-assessments" className="block pl-4 text-gray-700 hover:text-green-600 transition-colors" onClick={onClose}>
            Custom Assessments
          </Link>
        </div>
        
        <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={onClose}>
          Features
        </a>
        <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={onClose}>
          How It Works
        </a>
        <Link to="/cefr-guide" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={onClose}>
          Assessment Guide
        </Link>
        <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={onClose}>
          Contact
        </a>
        <div className="pt-4 border-t border-gray-200">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 shadow-lg font-semibold rounded-xl" onClick={handleTrialClick}>
            Start Your Trial
          </Button>
        </div>
      </nav>
    </div>
  );
}
