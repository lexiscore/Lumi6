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
      <div className="relative overflow-hidden bg-background min-h-screen flex items-center justify-center pt-32 pb-16">
        {/* Animated Background */}
        <div className="absolute inset-0 brand-gradient-subtle"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Particle Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_0.5px,transparent_0.5px)] bg-[size:50px_50px] opacity-20"></div>
        
        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-6xl">
              <div className="text-center">
                {/* Main heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8">
                  <span className="text-foreground">Corporate EQ and</span>
                  <span className="block text-gradient font-display mx-0 px-0 my-0 py-[10px] drop-shadow-2xl">Language Assessment</span>
                </h1>
                
                {/* Badge */}
                <div className="inline-flex items-center rounded-full glass-card px-8 py-4 text-sm font-semibold text-foreground mb-12 glow-effect">
                  <span className="w-3 h-3 bg-primary rounded-full mr-4 animate-pulse glow-effect"></span>
                  For people-first organizations
                </div>
                
                {/* Description */}
                <p className="text-xl sm:text-2xl leading-relaxed text-muted-foreground max-w-4xl mx-auto font-normal mb-16">
                  Comprehensive emotional intelligence and language proficiency assessments 
                  <span className="text-primary font-semibold glow-effect"> powered by AI technology</span> for modern workplaces.
                </p>
                
                {/* Buttons */}
                <div className="flex items-center justify-center gap-8 flex-wrap mb-20">
                  <Button size="lg" className="px-12 py-6 text-xl font-bold brand-gradient hover:scale-105 shadow-2xl hover:glow-effect transition-all duration-500 rounded-2xl text-background border-0 hover:shadow-[0_25px_50px_-12px_hsl(var(--primary)_/_0.5)]" onClick={handleTrialClick}>
                    Start Assessment
                  </Button>
                  <Button variant="outline" size="lg" className="px-12 py-6 text-xl font-semibold border-2 border-primary/50 text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-500 rounded-2xl glass-card hover:glow-effect" asChild>
                    <Link to="#features">
                      Learn More
                    </Link>
                  </Button>
                </div>

                {/* Assessment Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                  <div className="glass-card p-12 hover:scale-105 transition-all duration-500 floating">
                    <div className="w-20 h-20 brand-gradient rounded-3xl flex items-center justify-center mb-8 mx-auto glow-effect">
                      <span className="text-4xl">🧠</span>
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-6 font-display">EQ Assessment</h3>
                    <p className="text-muted-foreground mb-10 text-lg leading-relaxed">Evaluate emotional intelligence across four core competencies for workplace success and leadership development.</p>
                    
                    <div className="flex flex-wrap gap-4 justify-center">
                      <span className="glass-card text-primary px-6 py-3 rounded-full text-sm font-semibold hover:glow-effect transition-all duration-300">Self-Awareness</span>
                      <span className="glass-card text-accent px-6 py-3 rounded-full text-sm font-semibold hover:glow-effect transition-all duration-300">Self-Management</span>
                      <span className="glass-card text-brand-tertiary px-6 py-3 rounded-full text-sm font-semibold hover:glow-effect transition-all duration-300">Social Awareness</span>
                      <span className="glass-card text-brand-secondary px-6 py-3 rounded-full text-sm font-semibold hover:glow-effect transition-all duration-300">Relationship Management</span>
                    </div>
                  </div>
                  
                  <div className="glass-card p-12 hover:scale-105 transition-all duration-500 floating delay-200">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent to-brand-tertiary rounded-3xl flex items-center justify-center mb-8 mx-auto glow-effect">
                      <span className="text-4xl">🗣️</span>
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-6 font-display">Language Proficiency</h3>
                    <p className="text-muted-foreground mb-10 text-lg leading-relaxed">CEFR-aligned assessment with AI-powered speaking, proficiency and writing tests for global communication readiness.</p>
                    
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <div className="flex items-center gap-3 glass-card rounded-full px-6 py-3 hover:glow-effect transition-all duration-300">
                        <span className="text-xl">🇺🇸</span>
                        <span className="text-sm font-bold text-primary">EN</span>
                      </div>
                      <div className="flex items-center gap-3 glass-card rounded-full px-6 py-3 hover:glow-effect transition-all duration-300">
                        <span className="text-xl">🇪🇸</span>
                        <span className="text-sm font-bold text-accent">ES</span>
                      </div>
                      <div className="flex items-center gap-3 glass-card rounded-full px-6 py-3 hover:glow-effect transition-all duration-300">
                        <span className="text-xl">🇫🇷</span>
                        <span className="text-sm font-bold text-brand-secondary">FR</span>
                      </div>
                      <div className="flex items-center gap-3 glass-card rounded-full px-6 py-3 hover:glow-effect transition-all duration-300">
                        <span className="text-xl">🇩🇪</span>
                        <span className="text-sm font-bold text-brand-tertiary">DE</span>
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