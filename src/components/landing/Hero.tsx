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
      <div className="relative overflow-hidden bg-gradient-to-br from-stone-50 via-stone-25 to-blue-50/30 min-h-screen flex items-center justify-center pt-32 pb-8">
        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-6xl">
              <div className="text-center">
                {/* Main heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-4">
                  <span className="text-gray-900">Test Language Proficiency</span>
                  <span className="block text-blue-600">& EQ</span>
                </h1>
                
                {/* Badge */}
                <div className="inline-flex items-center rounded-full bg-blue-50 border border-blue-200 px-6 py-2 text-sm font-medium text-blue-700 mb-4 shadow-sm">
                  🚀 AI-Powered Assessment Platform
                </div>
                
                {/* Description */}
                <p className="text-lg sm:text-xl leading-relaxed text-gray-600 max-w-4xl mx-auto font-medium px-4 mb-6">
                  Enterprise-grade assessments for language proficiency and EQ. 
                  <span className="text-blue-600 font-semibold"> Scale your global workforce</span> with comprehensive evaluation tools.
                </p>
                
                {/* Buttons */}
                <div className="flex items-center justify-center gap-4 flex-wrap px-4 mb-6">
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
                
                {/* Feature badges */}
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

                {/* Assessment Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-blue-200">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <span className="text-xl">🗣️</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Language Proficiency</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">CEFR-aligned assessment with AI-powered speaking tests for global communication readiness.</p>
                    
                    {/* Language Flags - more compact */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <div className="flex items-center gap-1 bg-blue-50 rounded-lg px-2 py-1">
                        <span className="text-base">🇺🇸</span>
                        <span className="text-xs font-medium text-blue-700">EN</span>
                      </div>
                      <div className="flex items-center gap-1 bg-blue-50 rounded-lg px-2 py-1">
                        <span className="text-base">🇪🇸</span>
                        <span className="text-xs font-medium text-blue-700">ES</span>
                      </div>
                      <div className="flex items-center gap-1 bg-blue-50 rounded-lg px-2 py-1">
                        <span className="text-base">🇫🇷</span>
                        <span className="text-xs font-medium text-blue-700">FR</span>
                      </div>
                      <div className="flex items-center gap-1 bg-blue-50 rounded-lg px-2 py-1">
                        <span className="text-base">🇩🇪</span>
                        <span className="text-xs font-medium text-blue-700">DE</span>
                      </div>
                      <div className="flex items-center gap-1 bg-blue-50 rounded-lg px-2 py-1">
                        <span className="text-base">🇯🇵</span>
                        <span className="text-xs font-medium text-blue-700">JP</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 text-xs text-blue-600 font-medium justify-center">
                      <span>• Speaking Tests</span>
                      <span>• CEFR Certified</span>
                      <span>• Instant Results</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-purple-200">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <span className="text-xl">🧠</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">EQ</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">Comprehensive EQ/EI evaluation for leadership, teamwork, and client interaction excellence.</p>
                    
                    {/* EI Framework Badges - more compact */}
                    <div className="flex items-center justify-center gap-2 mb-4 flex-wrap">
                      <div className="bg-purple-50 rounded-lg px-2 py-1">
                        <span className="text-xs font-medium text-purple-700">Goleman Framework</span>
                      </div>
                      <div className="bg-purple-50 rounded-lg px-2 py-1">
                        <span className="text-xs font-medium text-purple-700">MSCEIT</span>
                      </div>
                      <div className="bg-purple-50 rounded-lg px-2 py-1">
                        <span className="text-xs font-medium text-purple-700">EQ-i 2.0</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 text-xs text-purple-600 font-medium justify-center">
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
      
      {/* Enhanced background elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-50/10 to-purple-50/10 rounded-full blur-3xl" />
      
      <TrialFormModal 
        isOpen={isTrialModalOpen} 
        onClose={() => setIsTrialModalOpen(false)} 
      />
    </>
  );
}
