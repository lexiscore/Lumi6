
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
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen flex items-center justify-center pt-32 pb-16">
        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-5xl">
              <div className="text-center">
                {/* Main heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
                  <span className="text-gray-900">Professional Assessment Platform</span>
                  <span className="block modern-text-gradient font-display">EQ & Language Testing</span>
                </h1>
                
                {/* Badge */}
                <div className="inline-flex items-center rounded-full bg-blue-50 border border-blue-200 px-4 py-2 text-sm font-medium text-blue-700 mb-6">
                  🎯 Enterprise-Grade Assessments
                </div>
                
                {/* Description */}
                <p className="text-lg sm:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto font-normal mb-8">
                  Comprehensive emotional intelligence and language proficiency assessments 
                  <span className="text-blue-600 font-medium"> powered by AI technology</span> for modern workplaces.
                </p>
                
                {/* Buttons */}
                <div className="flex items-center justify-center gap-4 flex-wrap mb-12">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-base font-medium bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow-md transition-all duration-200 rounded-lg" 
                    onClick={handleTrialClick}
                  >
                    Start Assessment
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="px-8 py-4 text-base font-medium border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 rounded-lg" 
                    asChild
                  >
                    <Link to="#features">
                      Learn More
                    </Link>
                  </Button>
                </div>

                {/* Assessment Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="modern-card p-8">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <span className="text-xl">🧠</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 font-display">EQ Assessment</h3>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">Evaluate emotional intelligence across four core competencies for workplace success.</p>
                    
                    <div className="flex flex-wrap gap-2 text-xs text-blue-600 font-medium justify-center">
                      <span className="bg-blue-50 px-2 py-1 rounded">Self-Awareness</span>
                      <span className="bg-blue-50 px-2 py-1 rounded">Self-Management</span>
                      <span className="bg-blue-50 px-2 py-1 rounded">Social Awareness</span>
                      <span className="bg-blue-50 px-2 py-1 rounded">Relationship Management</span>
                    </div>
                  </div>
                  
                  <div className="modern-card p-8">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <span className="text-xl">🗣️</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 font-display">Language Proficiency</h3>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">CEFR-aligned assessment with AI-powered speaking, proficiency and writing tests for global communication readiness.</p>
                    
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <div className="flex items-center gap-1 bg-green-50 rounded px-2 py-1">
                        <span className="text-sm">🇺🇸</span>
                        <span className="text-xs font-medium text-green-700">EN</span>
                      </div>
                      <div className="flex items-center gap-1 bg-green-50 rounded px-2 py-1">
                        <span className="text-sm">🇪🇸</span>
                        <span className="text-xs font-medium text-green-700">ES</span>
                      </div>
                      <div className="flex items-center gap-1 bg-green-50 rounded px-2 py-1">
                        <span className="text-sm">🇫🇷</span>
                        <span className="text-xs font-medium text-green-700">FR</span>
                      </div>
                      <div className="flex items-center gap-1 bg-green-50 rounded px-2 py-1">
                        <span className="text-sm">🇩🇪</span>
                        <span className="text-xs font-medium text-green-700">DE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <TrialFormModal 
        isOpen={isTrialModalOpen} 
        onClose={() => setIsTrialModalOpen(false)} 
      />
    </>
  );
}
