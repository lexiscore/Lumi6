import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TrialFormModal from "./TrialFormModal";

export default function CTASection() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  const handleTrialClick = () => {
    setIsTrialModalOpen(true);
  };

  return (
    <>
      <div className="brand-gradient relative overflow-hidden py-32 sm:py-40">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center rounded-full glass-card px-8 py-4 text-sm font-semibold text-background mb-12 glow-effect">
              ✨ Trusted by enterprise teams worldwide
            </div>
            <h2 className="text-5xl sm:text-7xl font-bold tracking-tight text-background leading-tight mb-8">
              Ready to scale your
              <span className="block text-background/80">global workforce?</span>
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-background/90">
              Join thousands of businesses and HR teams who trust Lumi6 for accurate, scalable language assessment with enterprise-grade security and instant results.
            </p>
            <div className="mt-16 flex items-center justify-center gap-8 flex-wrap">
              <Button size="lg" className="px-12 py-6 text-xl font-bold bg-background text-primary hover:bg-background/90 hover:scale-105 shadow-2xl hover:glow-effect transition-all duration-500 rounded-2xl" onClick={handleTrialClick}>
                Start Enterprise Trial
              </Button>
              <Button size="lg" className="px-12 py-6 text-xl font-semibold glass-card text-background border-2 border-background/50 hover:border-background hover:bg-background/10 transition-all duration-500 rounded-2xl hover:glow-effect" asChild>
                <Link to="#features">
                  Enterprise Solutions
                </Link>
              </Button>
            </div>
            
            <div className="mt-20 flex items-center justify-center gap-10 text-background/90 flex-wrap">
              <div className="flex items-center gap-4 glass-card rounded-full px-8 py-4 hover:glow-effect transition-all duration-300">
                <div className="w-3 h-3 bg-background rounded-full glow-effect"></div>
                <span className="font-semibold">Bulk Assessment</span>
              </div>
              <div className="flex items-center gap-4 glass-card rounded-full px-8 py-4 hover:glow-effect transition-all duration-300">
                <div className="w-3 h-3 bg-background rounded-full glow-effect"></div>
                <span className="font-semibold">API Integration</span>
              </div>
              <div className="flex items-center gap-4 glass-card rounded-full px-8 py-4 hover:glow-effect transition-all duration-300">
                <div className="w-3 h-3 bg-background rounded-full glow-effect"></div>
                <span className="font-semibold">Enterprise Security</span>
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
