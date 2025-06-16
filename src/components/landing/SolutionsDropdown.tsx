
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface SolutionsDropdownProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function SolutionsDropdown({ isOpen, setIsOpen }: SolutionsDropdownProps) {
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
        Solutions
        <ChevronDown size={16} className="transform transition-transform group-hover:rotate-180" />
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
      </button>
      {isOpen && (
        <div 
          className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-6 z-50 animate-fade-in" 
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <div className="px-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              🏢 By Department
            </h3>
            <div className="space-y-2">
              <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg font-medium" onClick={() => setIsOpen(false)}>
                Talent Acquisition
              </a>
              <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg font-medium" onClick={() => setIsOpen(false)}>
                Learning & Development
              </a>
              <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg font-medium" onClick={() => setIsOpen(false)}>
                DE&I
              </a>
              <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg font-medium" onClick={() => setIsOpen(false)}>
                Internal Communication
              </a>
              <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg font-medium" onClick={() => setIsOpen(false)}>
                Customer Success
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
