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
      <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-vibrant-500/10 rounded-full blur-3xl" />
        
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 text-sm font-medium text-white mb-8 shadow-subtle">
              ✨ Trusted by enterprise teams worldwide
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight font-display">
              Ready to scale your
              <span className="block bg-gradient-to-r from-purple-400 to-vibrant-400 bg-clip-text text-transparent">global workforce?</span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-neutral-200 font-normal">
              Join thousands of businesses and HR teams who trust Lumi6 for accurate, scalable language assessment with enterprise-grade security and instant results.
            </p>
            <div className="mt-12 flex items-center justify-center gap-6 flex-wrap">
              <Button 
                size="lg" 
                variant="secondary" 
                className="px-10 py-5 text-lg font-semibold bg-white text-neutral-900 hover:bg-neutral-100 shadow-large hover:shadow-xl transition-all duration-300 rounded-xl font-display" 
                onClick={handleTrialClick}
              >
                Start Enterprise Trial
              </Button>
              <Button 
                size="lg" 
                className="px-10 py-5 text-lg font-semibold bg-white/10 text-white border-2 border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 rounded-xl font-display" 
                asChild
              >
                <Link to="#features">
                  <span className="font-bold text-white">Enterprise Solutions</span>
                </Link>
              </Button>
            </div>
            
            <div className="mt-16 flex items-center justify-center gap-8 text-neutral-300 flex-wrap">
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                <div className="w-2 h-2 bg-vibrant-400 rounded-full"></div>
                <span className="font-medium text-sm">Bulk Assessment</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="font-medium text-sm">API Integration</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
                <span className="font-medium text-sm">Enterprise Security</span>
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
