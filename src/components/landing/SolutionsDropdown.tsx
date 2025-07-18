
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface SolutionsDropdownProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function SolutionsDropdown({ isOpen, setIsOpen }: SolutionsDropdownProps) {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
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
      setSelectedDepartment(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const departmentDetails = {
    "talent-acquisition": {
      title: "🔷 Talent Acquisition",
      content: (
        <div className="space-y-4">
          <div>
            <span className="font-semibold text-blue-600">🎯 Goal:</span>
            <p className="text-sm text-gray-700 mt-1">Hire the right people with strong communication and emotional readiness.</p>
          </div>
          
          <div>
            <span className="font-semibold text-red-600">🚫 Challenges:</span>
            <ul className="text-sm text-gray-700 mt-1 space-y-1">
              <li>• Inconsistent spoken English among candidates</li>
              <li>• Soft skills like empathy and stress tolerance hard to evaluate in interviews</li>
            </ul>
          </div>

          <div>
            <span className="font-semibold text-green-600">✅ Lumi6 Solution:</span>
            <div className="text-sm text-gray-700 mt-1 space-y-2">
              <p><strong>Language Assessment:</strong> CEFR-aligned test for speaking, listening, grammar, and comprehension to evaluate real-world fluency.</p>
              <p><strong>EQ Assessment:</strong> AI-based test for self-awareness, regulation, and decision-making — built to detect behavioral traits.</p>
            </div>
          </div>

          <div>
            <span className="font-semibold text-purple-600">💼 Use Case:</span>
            <p className="text-sm text-gray-700 mt-1">A recruiter shortlists 50 applicants for a sales role. Lumi6 auto-tests their English fluency and filters top 10 based on empathy and resilience, helping reduce interview time by 60%.</p>
          </div>
        </div>
      )
    },
    "learning-development": {
      title: "🔷 Learning & Development (L&D)",
      content: (
        <div className="space-y-4">
          <div>
            <span className="font-semibold text-blue-600">🎯 Goal:</span>
            <p className="text-sm text-gray-700 mt-1">Upskill employees in communication and soft skills.</p>
          </div>
          
          <div>
            <span className="font-semibold text-red-600">🚫 Challenges:</span>
            <ul className="text-sm text-gray-700 mt-1 space-y-1">
              <li>• No baseline for language or soft skills</li>
              <li>• Difficult to measure progress after training</li>
            </ul>
          </div>

          <div>
            <span className="font-semibold text-green-600">✅ Lumi6 Solution:</span>
            <div className="text-sm text-gray-700 mt-1 space-y-2">
              <p><strong>Language Assessment:</strong> Identify current CEFR level, track improvement over time.</p>
              <p><strong>EQ Assessment:</strong> Run periodic EQ tests to measure growth in self-management, teamwork, and empathy.</p>
            </div>
          </div>

          <div>
            <span className="font-semibold text-purple-600">💼 Use Case:</span>
            <p className="text-sm text-gray-700 mt-1">L&D runs quarterly communication training. Lumi6 provides before-and-after scores for both fluency and emotional regulation, helping demonstrate ROI to management.</p>
          </div>
        </div>
      )
    },
    "dei": {
      title: "🔷 Diversity, Equity & Inclusion (DE&I)",
      content: (
        <div className="space-y-4">
          <div>
            <span className="font-semibold text-blue-600">🎯 Goal:</span>
            <p className="text-sm text-gray-700 mt-1">Build inclusive, emotionally safe teams.</p>
          </div>
          
          <div>
            <span className="font-semibold text-red-600">🚫 Challenges:</span>
            <ul className="text-sm text-gray-700 mt-1 space-y-1">
              <li>• Hidden biases and emotional blind spots in teams</li>
              <li>• Lack of visibility into how language barriers affect inclusion</li>
            </ul>
          </div>

          <div>
            <span className="font-semibold text-green-600">✅ Lumi6 Solution:</span>
            <div className="text-sm text-gray-700 mt-1 space-y-2">
              <p><strong>EQ Assessment:</strong> Detects bias awareness, empathy, emotional triggers.</p>
              <p><strong>Language Assessment:</strong> Ensures all team members are confident communicating — regardless of background or accent.</p>
            </div>
          </div>

          <div>
            <span className="font-semibold text-purple-600">💼 Use Case:</span>
            <p className="text-sm text-gray-700 mt-1">A DE&I officer uses Lumi6 to run EQ tests across departments. Results show a team struggling with empathy, leading to targeted coaching and improved feedback culture.</p>
          </div>
        </div>
      )
    },
    "internal-communication": {
      title: "🔷 Internal Communication",
      content: (
        <div className="space-y-4">
          <div>
            <span className="font-semibold text-blue-600">🎯 Goal:</span>
            <p className="text-sm text-gray-700 mt-1">Ensure clarity, tone, and inclusivity in company-wide messaging.</p>
          </div>
          
          <div>
            <span className="font-semibold text-red-600">🚫 Challenges:</span>
            <ul className="text-sm text-gray-700 mt-1 space-y-1">
              <li>• Misunderstandings in global teams</li>
              <li>• Communication anxiety due to fluency gaps</li>
            </ul>
          </div>

          <div>
            <span className="font-semibold text-green-600">✅ Lumi6 Solution:</span>
            <div className="text-sm text-gray-700 mt-1 space-y-2">
              <p><strong>Language Assessment:</strong> Identifies employees with weak comprehension or unclear expression.</p>
              <p><strong>EQ Assessment:</strong> Tests tone control, emotional triggers, and message interpretation.</p>
            </div>
          </div>

          <div>
            <span className="font-semibold text-purple-600">💼 Use Case:</span>
            <p className="text-sm text-gray-700 mt-1">An internal comms team rolls out company-wide assessments to identify teams struggling with tone misinterpretation in written updates. Training follows for better message delivery.</p>
          </div>
        </div>
      )
    },
    "customer-success": {
      title: "🔷 Customer Success / Support",
      content: (
        <div className="space-y-4">
          <div>
            <span className="font-semibold text-blue-600">🎯 Goal:</span>
            <p className="text-sm text-gray-700 mt-1">Delight and retain customers through great service.</p>
          </div>
          
          <div>
            <span className="font-semibold text-red-600">🚫 Challenges:</span>
            <ul className="text-sm text-gray-700 mt-1 space-y-1">
              <li>• Frontline teams may have language gaps or poor emotional control</li>
              <li>• Difficult to assess real-time composure under stress</li>
            </ul>
          </div>

          <div>
            <span className="font-semibold text-green-600">✅ Lumi6 Solution:</span>
            <div className="text-sm text-gray-700 mt-1 space-y-2">
              <p><strong>Language Assessment:</strong> Tests speaking/listening skills critical in calls or chats.</p>
              <p><strong>EQ Assessment:</strong> Measures patience, emotion control, and empathy for high-pressure situations.</p>
            </div>
          </div>

          <div>
            <span className="font-semibold text-purple-600">💼 Use Case:</span>
            <p className="text-sm text-gray-700 mt-1">A SaaS company uses Lumi6 to screen support reps in India and Philippines. It benchmarks their language and EQ, then aligns training to boost NPS scores.</p>
          </div>
        </div>
      )
    },
    "people-strategy": {
      title: "🔷 People Strategy / HR Analytics",
      content: (
        <div className="space-y-4">
          <div>
            <span className="font-semibold text-blue-600">🎯 Goal:</span>
            <p className="text-sm text-gray-700 mt-1">Build data-driven HR strategies around talent, communication, and team health.</p>
          </div>
          
          <div>
            <span className="font-semibold text-red-600">🚫 Challenges:</span>
            <ul className="text-sm text-gray-700 mt-1 space-y-1">
              <li>• Lack of standardized soft skill data</li>
              <li>• No scalable way to benchmark communication capability across regions</li>
            </ul>
          </div>

          <div>
            <span className="font-semibold text-green-600">✅ Lumi6 Solution:</span>
            <div className="text-sm text-gray-700 mt-1 space-y-2">
              <p><strong>Language Assessment:</strong> Generates CEFR-level data for strategic talent placement.</p>
              <p><strong>EQ Assessment:</strong> Creates soft-skill heatmaps for leadership planning and internal promotions.</p>
            </div>
          </div>

          <div>
            <span className="font-semibold text-purple-600">💼 Use Case:</span>
            <p className="text-sm text-gray-700 mt-1">HR strategy team uses Lumi6 assessments to identify high-EQ, fluent communicators for internal leadership programs across Asia-Pacific offices.</p>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="relative group">
      <button 
        className="text-neutral-700 hover:text-neutral-900 transition-all font-medium relative group flex items-center gap-1 text-sm" 
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onClick={() => setIsOpen(!isOpen)}
      >
        Solutions
        <ChevronDown size={16} className="transform transition-transform group-hover:rotate-180" />
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
      </button>
      {isOpen && (
        <div 
          className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-200 py-6 z-50 animate-fade-in" 
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <div className="flex">
            {/* Department List */}
            <div className="w-64 px-6 border-r border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                🏢 By Department
              </h3>
              <div className="space-y-2">
                <button 
                  className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg font-medium"
                  onMouseEnter={() => setSelectedDepartment("talent-acquisition")}
                  onClick={() => setIsOpen(false)}
                >
                  Talent Acquisition
                </button>
                <button 
                  className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg font-medium"
                  onMouseEnter={() => setSelectedDepartment("learning-development")}
                  onClick={() => setIsOpen(false)}
                >
                  Learning & Development
                </button>
                <button 
                  className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg font-medium"
                  onMouseEnter={() => setSelectedDepartment("dei")}
                  onClick={() => setIsOpen(false)}
                >
                  DE&I
                </button>
                <button 
                  className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg font-medium"
                  onMouseEnter={() => setSelectedDepartment("internal-communication")}
                  onClick={() => setIsOpen(false)}
                >
                  Internal Communication
                </button>
                <button 
                  className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg font-medium"
                  onMouseEnter={() => setSelectedDepartment("customer-success")}
                  onClick={() => setIsOpen(false)}
                >
                  Customer Success
                </button>
                <button 
                  className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg font-medium"
                  onMouseEnter={() => setSelectedDepartment("people-strategy")}
                  onClick={() => setIsOpen(false)}
                >
                  People Strategy
                </button>
              </div>
            </div>
            
            {/* Department Details */}
            {selectedDepartment && (
              <div className="w-96 px-6">
                <h4 className="font-semibold text-gray-900 mb-4">
                  {departmentDetails[selectedDepartment as keyof typeof departmentDetails].title}
                </h4>
                <div className="max-h-96 overflow-y-auto">
                  {departmentDetails[selectedDepartment as keyof typeof departmentDetails].content}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
