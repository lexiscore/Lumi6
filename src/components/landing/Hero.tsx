
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TrialFormModal from "./TrialFormModal";

export default function Hero() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  const handleTrialClick = () => {
    setIsTrialModalOpen(true);
  };

  return (
    <>
      <div className="relative overflow-hidden bg-gradient-to-br from-stone-50 via-stone-25 to-blue-50/30 min-h-screen flex items-center justify-center pt-20">
        <div className="relative z-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <div className="text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-3">
                  <span className="text-gray-900">Test Language Proficiency</span>
                  <span className="block text-blue-600">& Emotional Intelligence</span>
                </h1>
                
                <div className="inline-flex items-center rounded-full bg-blue-50 border border-blue-200 px-4 py-2 text-sm font-medium text-blue-700 mb-4 shadow-sm">
                  🚀 AI-Powered Assessment Platform
                </div>
                
                <p className="text-lg sm:text-xl leading-relaxed text-gray-600 max-w-4xl mx-auto font-medium px-4 mb-6">
                  Enterprise-grade assessments for language proficiency and emotional intelligence. 
                  <span className="text-blue-600 font-semibold"> Scale your global workforce</span> with comprehensive evaluation tools.
                </p>
                
                <div className="flex items-center justify-center gap-4 flex-wrap px-4 mb-8">
                  <Button size="lg" className="px-8 py-4 text-base font-semibold bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl" onClick={handleTrialClick}>
                    Start Your Trial
                  </Button>
                  <Button variant="outline" size="lg" className="px-8 py-4 text-base font-semibold border-2 border-blue-200 text-blue-700 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 rounded-xl" asChild>
                    <Link to="#features">
                      <span className="text-blue-600 font-bold">
                        Enterprise Solutions
                      </span>
                    </Link>
                  </Button>
                </div>
                
                <div className="flex items-center justify-center gap-3 text-sm text-gray-600 flex-wrap px-4 mb-8">
                  <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-1.5 shadow-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="font-medium">CEFR Language Tests</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-1.5 shadow-sm">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="font-medium">EQ/EI Assessments</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-1.5 shadow-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-medium">Enterprise Ready</span>
                  </div>
                </div>

                {/* Assessment Options - Spread horizontally */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-3 mx-auto">
                      <span className="text-xl">🗣️</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Language Proficiency</h3>
                    <p className="text-gray-600 mb-3 text-sm">CEFR-aligned assessment with AI-powered speaking tests for global communication readiness.</p>
                    <div className="flex flex-wrap gap-1 text-xs text-blue-600 font-medium justify-center">
                      <span>• Speaking Tests</span>
                      <span>• CEFR Certified</span>
                      <span>• Instant Results</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-3 mx-auto">
                      <span className="text-xl">🧠</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Emotional Intelligence</h3>
                    <p className="text-gray-600 mb-3 text-sm">Comprehensive EQ/EI evaluation for leadership, teamwork, and client interaction excellence.</p>
                    <div className="flex flex-wrap gap-1 text-xs text-purple-600 font-medium justify-center">
                      <span>• Leadership Skills</span>
                      <span>• Team Dynamics</span>
                      <span>• Empathy Analysis</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Minimal background elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-gray-100/30 rounded-full blur-3xl" />
      
      <TrialFormModal 
        isOpen={isTrialModalOpen} 
        onClose={() => setIsTrialModalOpen(false)} 
      />
    </>
  );
}
