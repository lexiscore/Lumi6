
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
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-6xl">
              <div className="text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
                  <span className="text-gray-900">Test Language Proficiency</span>
                  <span className="block text-blue-600">& Emotional Intelligence</span>
                </h1>
                
                <div className="inline-flex items-center rounded-full bg-blue-50 border border-blue-200 px-6 py-3 text-base font-medium text-blue-700 mb-8 shadow-sm">
                  🚀 AI-Powered Assessment Platform
                </div>
                
                <p className="text-xl sm:text-2xl leading-relaxed text-gray-600 max-w-5xl mx-auto font-medium px-6 mb-10">
                  Enterprise-grade assessments for language proficiency and emotional intelligence. 
                  <span className="text-blue-600 font-semibold"> Scale your global workforce</span> with comprehensive evaluation tools.
                </p>
                
                <div className="flex items-center justify-center gap-6 flex-wrap px-6 mb-12">
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
                
                <div className="flex items-center justify-center gap-4 text-sm text-gray-600 flex-wrap px-6 mb-16">
                  <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="font-medium">CEFR Language Tests</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="font-medium">EQ/EI Assessments</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-medium">Enterprise Ready</span>
                  </div>
                </div>

                {/* Assessment Options - Larger and more spaced */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                  <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl p-10 hover:shadow-xl transition-all duration-300 hover:border-blue-200">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <span className="text-2xl">🗣️</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Language Proficiency</h3>
                    <p className="text-gray-600 mb-6 text-base leading-relaxed">CEFR-aligned assessment with AI-powered speaking tests for global communication readiness.</p>
                    
                    {/* Language Flags */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                      <div className="flex items-center gap-2 bg-blue-50 rounded-lg px-3 py-2">
                        <span className="text-lg">🇺🇸</span>
                        <span className="text-sm font-medium text-blue-700">EN</span>
                      </div>
                      <div className="flex items-center gap-2 bg-blue-50 rounded-lg px-3 py-2">
                        <span className="text-lg">🇪🇸</span>
                        <span className="text-sm font-medium text-blue-700">ES</span>
                      </div>
                      <div className="flex items-center gap-2 bg-blue-50 rounded-lg px-3 py-2">
                        <span className="text-lg">🇫🇷</span>
                        <span className="text-sm font-medium text-blue-700">FR</span>
                      </div>
                      <div className="flex items-center gap-2 bg-blue-50 rounded-lg px-3 py-2">
                        <span className="text-lg">🇩🇪</span>
                        <span className="text-sm font-medium text-blue-700">DE</span>
                      </div>
                      <div className="flex items-center gap-2 bg-blue-50 rounded-lg px-3 py-2">
                        <span className="text-lg">🇯🇵</span>
                        <span className="text-sm font-medium text-blue-700">JP</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 text-sm text-blue-600 font-medium justify-center">
                      <span>• Speaking Tests</span>
                      <span>• CEFR Certified</span>
                      <span>• Instant Results</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl p-10 hover:shadow-xl transition-all duration-300 hover:border-purple-200">
                    <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <span className="text-2xl">🧠</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Emotional Intelligence</h3>
                    <p className="text-gray-600 mb-6 text-base leading-relaxed">Comprehensive EQ/EI evaluation for leadership, teamwork, and client interaction excellence.</p>
                    
                    {/* EI Framework Badges */}
                    <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
                      <div className="bg-purple-50 rounded-lg px-3 py-2">
                        <span className="text-sm font-medium text-purple-700">Goleman Framework</span>
                      </div>
                      <div className="bg-purple-50 rounded-lg px-3 py-2">
                        <span className="text-sm font-medium text-purple-700">MSCEIT</span>
                      </div>
                      <div className="bg-purple-50 rounded-lg px-3 py-2">
                        <span className="text-sm font-medium text-purple-700">EQ-i 2.0</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 text-sm text-purple-600 font-medium justify-center">
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
