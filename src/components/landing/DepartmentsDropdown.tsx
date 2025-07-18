import { useRef, useEffect } from "react";
import { Sparkles } from "lucide-react";

interface DepartmentsDropdownProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function DepartmentsDropdown({ isOpen, setIsOpen }: DepartmentsDropdownProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, setIsOpen]);

  return (
    <div className="relative" ref={ref} onMouseLeave={() => setIsOpen(false)}>
      <button
        className={`text-neutral-700 hover:text-neutral-900 transition-all font-medium relative group text-sm px-2 py-1 rounded-lg ${isOpen ? "bg-neutral-100" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        type="button"
      >
        Departments
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-3 w-[420px] z-50 bg-white/80 backdrop-blur-xl border border-neutral-200 rounded-2xl shadow-2xl p-6 animate-fade-in flex flex-col gap-4">
          {/* Talent Acquisition Card */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-5 border border-purple-100 shadow-md">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xl">🔷</span>
              <span className="font-bold text-lg text-neutral-900">Talent Acquisition</span>
            </div>
            <div className="mb-2">
              <span className="font-semibold text-purple-700">🎯 Goal:</span>
              <span className="ml-2 text-neutral-800">Hire the right people with strong communication and emotional readiness.</span>
            </div>
            <div className="mb-2">
              <span className="font-semibold text-red-600">🚫 Challenges:</span>
              <ul className="list-disc ml-8 text-neutral-700 text-sm">
                <li>Inconsistent spoken English among candidates</li>
                <li>Soft skills like empathy and stress tolerance hard to evaluate in interviews</li>
              </ul>
            </div>
            <div className="mb-2">
              <span className="font-semibold text-green-700">✅ Lumi6 Solution:</span>
              <ul className="list-disc ml-8 text-neutral-700 text-sm">
                <li><b>Language Assessment:</b> CEFR-aligned test for speaking, listening, grammar, and comprehension to evaluate real-world fluency.</li>
                <li><b>EQ Assessment:</b> AI-based test for self-awareness, regulation, and decision-making — built to detect behavioral traits.</li>
              </ul>
            </div>
            <div className="mb-1">
              <span className="font-semibold text-blue-700">💼 Use Case:</span>
              <span className="ml-2 text-neutral-800">A recruiter shortlists 50 applicants for a sales role. Lumi6 auto-tests their English fluency and filters top 10 based on empathy and resilience, helping reduce interview time by 60%.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 