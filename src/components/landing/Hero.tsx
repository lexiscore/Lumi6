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
    <div className="relative overflow-hidden warm-section min-h-screen flex items-center justify-center pt-32 pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted))_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
        
        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-5xl">
              <div className="text-center">
                {/* Main heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-8">
                  <span className="text-foreground">Corporate EQ and</span>
                  <span className="block corporate-text-gradient font-display mx-0 px-0 my-0 py-[10px]">Language Assessment</span>
                </h1>
                
                {/* Badge */}
                <div className="inline-flex items-center rounded-full bg-secondary border border-border px-6 py-3 text-sm font-medium text-secondary-foreground mb-8 shadow-sm">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></span>
                  For people-first organizations
                </div>
                
                {/* Description */}
                <p className="text-xl sm:text-2xl leading-relaxed text-muted-foreground max-w-4xl mx-auto font-normal mb-12">
                  Comprehensive emotional intelligence and language proficiency assessments 
                  <span className="text-primary font-semibold"> powered by AI technology</span> for modern workplaces.
                </p>
                
                {/* Buttons */}
                <div className="flex items-center justify-center gap-6 flex-wrap mb-16">
                  <Button size="lg" className="px-10 py-5 text-lg font-semibold corporate-gradient hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl text-primary-foreground border-0" onClick={handleTrialClick}>
                    Start Assessment
                  </Button>
                  <Button variant="outline" size="lg" className="px-10 py-5 text-lg font-semibold border-2 border-border text-foreground hover:border-primary hover:bg-secondary transition-all duration-300 rounded-2xl bg-card/80 backdrop-blur-sm" asChild>
                    <Link to="#features">
                      Learn More
                    </Link>
                  </Button>
                </div>

                {/* Assessment Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="modern-card backdrop-blur-sm border border-border rounded-3xl p-10 elegant-shadow hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <span className="text-3xl">🧠</span>
                    </div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-4 font-display">EQ Assessment</h3>
                    <p className="text-muted-foreground mb-8 text-lg leading-relaxed">Evaluate emotional intelligence across four core competencies for workplace success and leadership development.</p>
                    
                    <div className="flex flex-wrap gap-3 justify-center">
                      <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">Self-Awareness</span>
                      <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">Self-Management</span>
                      <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">Social Awareness</span>
                      <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">Relationship Management</span>
                    </div>
                  </div>
                  
                  <div className="modern-card backdrop-blur-sm border border-border rounded-3xl p-10 elegant-shadow hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <span className="text-3xl">🗣️</span>
                    </div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-4 font-display">Language Proficiency</h3>
                    <p className="text-muted-foreground mb-8 text-lg leading-relaxed">CEFR-aligned assessment with AI-powered speaking, proficiency and writing tests for global communication readiness.</p>
                    
                    <div className="flex items-center justify-center gap-3 mb-6">
                      <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
                        <span className="text-lg">🇺🇸</span>
                        <span className="text-sm font-semibold text-secondary-foreground">EN</span>
                      </div>
                      <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
                        <span className="text-lg">🇪🇸</span>
                        <span className="text-sm font-semibold text-secondary-foreground">ES</span>
                      </div>
                      <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
                        <span className="text-lg">🇫🇷</span>
                        <span className="text-sm font-semibold text-secondary-foreground">FR</span>
                      </div>
                      <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
                        <span className="text-lg">🇩🇪</span>
                        <span className="text-sm font-semibold text-secondary-foreground">DE</span>
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