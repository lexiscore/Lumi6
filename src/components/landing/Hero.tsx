import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TrialFormModal from "./TrialFormModal";
import { ArrowRight, Sparkles, Star } from "lucide-react";

export default function Hero() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const handleTrialClick = () => {
    setIsTrialModalOpen(true);
  };
  
  return (
    <>
      <div className="relative overflow-hidden bg-gradient-subtle min-h-screen flex items-center justify-center pt-32 pb-16">
        {/* Subtle background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl animate-subtle-glow"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-vibrant-100/30 rounded-full blur-3xl animate-subtle-glow delay-1000"></div>
        </div>
        
        {/* Minimal grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
        
        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-5xl">
              <div className="text-center">
                {/* Minimal badge */}
                <div className="inline-flex items-center rounded-full bg-white/80 backdrop-blur-sm border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700 mb-8 shadow-subtle">
                  <Sparkles className="w-4 h-4 mr-2 text-purple-500" />
                  AI-Powered Assessment Platform
                </div>
                
                {/* Clean, minimal heading */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-900 leading-[0.95] mb-8">
                  <span className="block text-neutral-900">Transform Your</span>
                  <span className="block bg-gradient-purple bg-clip-text text-transparent font-display">
                    Workforce
                  </span>
                  <span className="block text-neutral-900 text-4xl sm:text-5xl md:text-6xl mt-4">
                    with Intelligence
                  </span>
                </h1>
                
                {/* Refined description */}
                <p className="text-xl sm:text-2xl leading-relaxed text-neutral-600 max-w-3xl mx-auto font-normal mb-12">
                  Revolutionary <span className="text-purple-600 font-semibold">emotional intelligence</span> and 
                  <span className="text-vibrant-600 font-semibold"> language proficiency</span> assessments 
                  powered by cutting-edge AI technology.
                </p>
                
                {/* Clean CTA buttons */}
                <div className="flex items-center justify-center gap-6 flex-wrap mb-16">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold bg-gradient-purple hover:shadow-purple-glow transition-all duration-300 rounded-xl text-white border-0 group" 
                    onClick={handleTrialClick}
                  >
                    <Sparkles className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold border-2 border-neutral-300 text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50 transition-all duration-300 rounded-xl bg-white/80 backdrop-blur-sm group" 
                    asChild
                  >
                    <Link to="#features">
                      <Star className="w-5 h-5 mr-2 group-hover:animate-spin" />
                      Explore Features
                    </Link>
                  </Button>
                </div>

                {/* Clean assessment cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {/* EQ Assessment Card */}
                  <div className="group relative bg-white/90 backdrop-blur-sm border border-neutral-200 rounded-2xl p-8 shadow-medium hover:shadow-large transition-all duration-300 hover:scale-[1.02]">
                    <div className="w-16 h-16 bg-gradient-purple rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-purple-glow">
                      <span className="text-3xl">🧠</span>
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-4 font-display">EQ Assessment</h3>
                    <p className="text-neutral-600 mb-6 text-lg leading-relaxed">
                      Evaluate emotional intelligence across four core competencies for workplace success and leadership development.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium border border-purple-200">Self-Awareness</span>
                      <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium border border-purple-200">Self-Management</span>
                      <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium border border-purple-200">Social Awareness</span>
                      <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium border border-purple-200">Relationship Management</span>
                    </div>
                  </div>
                  
                  {/* Language Assessment Card */}
                  <div className="group relative bg-white/90 backdrop-blur-sm border border-neutral-200 rounded-2xl p-8 shadow-medium hover:shadow-large transition-all duration-300 hover:scale-[1.02]">
                    <div className="w-16 h-16 bg-gradient-vibrant rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-vibrant-glow">
                      <span className="text-3xl">🗣️</span>
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-4 font-display">Language Proficiency</h3>
                    <p className="text-neutral-600 mb-6 text-lg leading-relaxed">
                      CEFR-aligned assessment with AI-powered speaking, proficiency and writing tests for global communication readiness.
                    </p>
                    
                    <div className="flex items-center justify-center gap-3">
                      <div className="flex items-center gap-2 bg-neutral-50 rounded-full px-3 py-1 border border-neutral-200">
                        <span className="text-lg">🇺🇸</span>
                        <span className="text-sm font-semibold text-neutral-700">EN</span>
                      </div>
                      <div className="flex items-center gap-2 bg-neutral-50 rounded-full px-3 py-1 border border-neutral-200">
                        <span className="text-lg">🇪🇸</span>
                        <span className="text-sm font-semibold text-neutral-700">ES</span>
                      </div>
                      <div className="flex items-center gap-2 bg-neutral-50 rounded-full px-3 py-1 border border-neutral-200">
                        <span className="text-lg">🇫🇷</span>
                        <span className="text-sm font-semibold text-neutral-700">FR</span>
                      </div>
                      <div className="flex items-center gap-2 bg-neutral-50 rounded-full px-3 py-1 border border-neutral-200">
                        <span className="text-lg">🇩🇪</span>
                        <span className="text-sm font-semibold text-neutral-700">DE</span>
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
    </>
  );
}