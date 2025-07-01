
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductsDropdownProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function ProductsDropdown({ isOpen, setIsOpen }: ProductsDropdownProps) {
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative group">
      <button 
        className="text-gray-700 hover:text-blue-600 transition-all font-medium relative group flex items-center gap-1" 
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onClick={() => setIsOpen(!isOpen)}
      >
        Products
        <ChevronDown size={16} className="transform transition-transform group-hover:rotate-180" />
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
      </button>
      {isOpen && (
        <div 
          className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-xl border border-gray-200 py-4 z-50 animate-fade-in" 
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <div className="px-2">
            <Link 
              to="/eq-assessment" 
              className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              <div className="font-medium flex items-center gap-2">
                ❤️ EQ Assessment
              </div>
              <div className="text-sm text-gray-500">For leadership, learning, talent and org development</div>
            </Link>

            <Link 
              to="/language-assessment" 
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              <div className="font-medium flex items-center gap-2">
                🧩 Language Assessment
              </div>
              <div className="text-sm text-gray-500">CEFR-aligned English assessments for hiring & development</div>
            </Link>
            
            <Link 
              to="/custom-assessments" 
              className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors rounded-lg"
              onClick={() => setIsOpen(false)}
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
  );
}
