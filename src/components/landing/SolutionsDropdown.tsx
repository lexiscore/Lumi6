
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
          className="absolute top-full left-0 mt-1 w-[650px] bg-white rounded-xl shadow-xl border border-gray-200 py-6 z-50 animate-fade-in" 
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <div className="grid grid-cols-2 gap-8 px-6">
            {/* By Department */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                🏢 By Department
              </h3>
              <div className="space-y-2">
                <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg" onClick={() => setIsOpen(false)}>
                  <div className="font-medium">Talent Acquisition</div>
                  <div className="text-xs text-gray-500">Screen candidates with language proficiency & EQ tests for global hiring. Reduce time-to-hire with automated assessments and ensure cultural fit through emotional intelligence evaluation.</div>
                </a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg" onClick={() => setIsOpen(false)}>
                  <div className="font-medium">Learning & Development</div>
                  <div className="text-xs text-gray-500">Track skill progression, identify training needs, and measure learning outcomes. Use pre/post assessments to validate training effectiveness and create personalized development paths.</div>
                </a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg" onClick={() => setIsOpen(false)}>
                  <div className="font-medium">DE&I</div>
                  <div className="text-xs text-gray-500">Eliminate bias in hiring through standardized assessments. Ensure fair evaluation regardless of background and promote inclusive hiring practices with objective language & EQ measurements.</div>
                </a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg" onClick={() => setIsOpen(false)}>
                  <div className="font-medium">Internal Communication</div>
                  <div className="text-xs text-gray-500">Enhance team collaboration and cross-cultural understanding. Assess communication effectiveness and build stronger internal relationships through EQ development programs.</div>
                </a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg" onClick={() => setIsOpen(false)}>
                  <div className="font-medium">Customer Experience</div>
                  <div className="text-xs text-gray-500">Ensure service excellence through EQ assessments for customer-facing roles. Improve client satisfaction by hiring emotionally intelligent staff who can handle diverse customer needs.</div>
                </a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg" onClick={() => setIsOpen(false)}>
                  <div className="font-medium">Sales Excellence</div>
                  <div className="text-xs text-gray-500">Build empathetic, persuasive sales teams through EQ evaluation. Assess communication skills for client presentations and develop high-performing sales professionals.</div>
                </a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg" onClick={() => setIsOpen(false)}>
                  <div className="font-medium">People Strategy</div>
                  <div className="text-xs text-gray-500">Make data-driven workforce planning decisions. Use assessment insights for succession planning, team composition, and strategic talent development initiatives.</div>
                </a>
              </div>
            </div>

            {/* By Industry */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                🏭 By Industry
              </h3>
              <div className="space-y-2">
                <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors rounded-lg" onClick={() => setIsOpen(false)}>
                  <div className="font-medium">BPO/ITES</div>
                  <div className="text-xs text-gray-500">Assess global communication skills for international clients. Evaluate language proficiency for voice & non-voice processes, ensure quality service delivery across time zones.</div>
                </a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors rounded-lg" onClick={() => setIsOpen(false)}>
                  <div className="font-medium">Retail</div>
                  <div className="text-xs text-gray-500">Evaluate customer service skills and multilingual capabilities for diverse customer bases. Assess EQ for sales roles and leadership positions in retail management.</div>
                </a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors rounded-lg" onClick={() => setIsOpen(false)}>
                  <div className="font-medium">Hospitality</div>
                  <div className="text-xs text-gray-500">Test multilingual service capabilities and cultural sensitivity. Evaluate emotional intelligence for guest relations and assess communication skills for international hospitality standards.</div>
                </a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors rounded-lg" onClick={() => setIsOpen(false)}>
                  <div className="font-medium">Education</div>
                  <div className="text-xs text-gray-500">Assess teacher communication effectiveness and student placement accuracy. Evaluate language proficiency for international programs and EQ for educational leadership roles.</div>
                </a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors rounded-lg" onClick={() => setIsOpen(false)}>
                  <div className="font-medium">Healthcare</div>
                  <div className="text-xs text-gray-500">Evaluate patient communication skills and empathy levels for healthcare professionals. Assess multilingual capabilities for diverse patient populations and cultural competency.</div>
                </a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors rounded-lg" onClick={() => setIsOpen(false)}>
                  <div className="font-medium">Banking & Finance</div>
                  <div className="text-xs text-gray-500">Test client advisory communication skills and regulatory compliance understanding. Evaluate EQ for relationship management and assess language skills for international banking.</div>
                </a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors rounded-lg" onClick={() => setIsOpen(false)}>
                  <div className="font-medium">Government</div>
                  <div className="text-xs text-gray-500">Assess public service communication effectiveness and multilingual capabilities for citizen services. Evaluate cultural competency for diverse community engagement.</div>
                </a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors rounded-lg" onClick={() => setIsOpen(false)}>
                  <div className="font-medium">RCM</div>
                  <div className="text-xs text-gray-500">Evaluate communication skills for revenue cycle management processes. Assess client interaction capabilities and problem-solving communication for financial operations.</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
