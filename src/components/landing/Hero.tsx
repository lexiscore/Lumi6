import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TrialFormModal from "./TrialFormModal";
export default function Hero() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const handleTrialClick = () => {
    setIsTrialModalOpen(true);
  };
  return <>
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen flex items-center justify-center pt-32 pb-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-5xl">
              <div className="text-center">
                {/* Main heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-8">
                  <span className="text-slate-900">Corporate EQ and</span>
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent font-display mx-0 px-0 my-0 py-[10px]">Language Assessment</span>
                </h1>
                
                {/* Badge */}
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 px-6 py-3 text-sm font-medium text-blue-700 mb-8 shadow-sm">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
                  For people-first organizations
                </div>
                
                {/* Description */}
                <p className="text-xl sm:text-2xl leading-relaxed text-slate-600 max-w-4xl mx-auto font-normal mb-12">
                  Comprehensive emotional intelligence and language proficiency assessments 
                  <span className="text-blue-600 font-semibold"> powered by AI technology</span> for modern workplaces.
                </p>
                
                {/* Buttons */}
                <div className="flex items-center justify-center gap-6 flex-wrap mb-16">
                  <Button size="lg" className="px-10 py-5 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl text-white border-0" onClick={handleTrialClick}>
                    Start Assessment
                  </Button>
                  <Button variant="outline" size="lg" className="px-10 py-5 text-lg font-semibold border-2 border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 rounded-2xl bg-white/80 backdrop-blur-sm" asChild>
                    <Link to="#features">
                      Learn More
                    </Link>
                  </Button>
                </div>

                {/* Assessment Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <span className="text-3xl">🧠</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">EQ Assessment</h3>
                    <p className="text-slate-600 mb-8 text-lg leading-relaxed">Evaluate emotional intelligence across four core competencies for workplace success and leadership development.</p>
                    
                    <div className="flex flex-wrap gap-3 justify-center">
                      <span className="bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">Self-Awareness</span>
                      <span className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">Self-Management</span>
                      <span className="bg-gradient-to-r from-green-50 to-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">Social Awareness</span>
                      <span className="bg-gradient-to-r from-orange-50 to-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">Relationship Management</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <span className="text-3xl">🗣️</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">Language Proficiency</h3>
                    <p className="text-slate-600 mb-8 text-lg leading-relaxed">CEFR-aligned assessment with AI-powered speaking, proficiency and writing tests for global communication readiness.</p>
                    
                    <div className="flex items-center justify-center gap-3 mb-6">
                      <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full px-4 py-2">
                        <span className="text-lg">🇺🇸</span>
                        <span className="text-sm font-semibold text-blue-700">EN</span>
                      </div>
                      <div className="flex items-center gap-2 bg-gradient-to-r from-green-50 to-green-100 rounded-full px-4 py-2">
                        <span className="text-lg">🇪🇸</span>
                        <span className="text-sm font-semibold text-green-700">ES</span>
                      </div>
                      <div className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-purple-100 rounded-full px-4 py-2">
                        <span className="text-lg">🇫🇷</span>
                        <span className="text-sm font-semibold text-purple-700">FR</span>
                      </div>
                      <div className="flex items-center gap-2 bg-gradient-to-r from-orange-50 to-orange-100 rounded-full px-4 py-2">
                        <span className="text-lg">🇩🇪</span>
                        <span className="text-sm font-semibold text-orange-700">DE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <TrialFormModal isOpen={isTrialModalOpen} onClose={() => setIsTrialModalOpen(false)} />
    </>;
}