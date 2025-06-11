
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
      <div className="relative overflow-hidden bg-gradient-to-br from-stone-50 via-stone-25 to-blue-50/30 min-h-screen flex items-center justify-center pt-32">
        <div className="relative z-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-4">
                  <span className="text-gray-900">Test Language Proficiency</span>
                  <span className="block text-blue-600">& Emotional Intelligence</span>
                </h1>
                
                <div className="inline-flex items-center rounded-full bg-blue-50 border border-blue-200 px-6 py-3 text-sm font-medium text-blue-700 mb-8 shadow-sm">
                  🚀 AI-Powered Assessment Platform
                </div>
                
                <p className="text-xl sm:text-2xl leading-relaxed text-gray-600 max-w-3xl mx-auto font-medium px-4 mb-12">
                  Enterprise-grade assessments for language proficiency and emotional intelligence. 
                  <span className="text-blue-600 font-semibold"> Scale your global workforce</span> with comprehensive evaluation tools.
                </p>
                
                <div className="flex items-center justify-center gap-6 flex-wrap px-4 mb-16">
                  <Button size="lg" className="px-10 py-5 text-lg font-semibold bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl" onClick={handleTrialClick}>
                    Start Your Trial
                  </Button>
                  <Button variant="outline" size="lg" className="px-10 py-5 text-lg font-semibold border-2 border-blue-200 text-blue-700 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 rounded-xl" asChild>
                    <Link to="#features">
                      <span className="text-blue-600 font-bold">
                        Enterprise Solutions
                      </span>
                    </Link>
                  </Button>
                </div>
                
                <div className="flex items-center justify-center gap-4 text-sm text-gray-600 flex-wrap px-4 mb-8">
                  <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="font-medium">CEFR Language Tests</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="font-medium">EQ/EI Assessments</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-medium">Enterprise Ready</span>
                  </div>
                </div>

                {/* Assessment Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <span className="text-2xl">🗣️</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Language Proficiency</h3>
                    <p className="text-gray-600 mb-4">CEFR-aligned assessment with AI-powered speaking tests for global communication readiness.</p>
                    <div className="flex gap-2 text-sm text-blue-600 font-medium">
                      <span>• Speaking Tests</span>
                      <span>• CEFR Certified</span>
                      <span>• Instant Results</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <span className="text-2xl">🧠</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Emotional Intelligence</h3>
                    <p className="text-gray-600 mb-4">Comprehensive EQ/EI evaluation for leadership, teamwork, and client interaction excellence.</p>
                    <div className="flex gap-2 text-sm text-purple-600 font-medium">
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
