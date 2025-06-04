import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CTASection() {
  const handleTrialClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSendQKtE9ngg8AheBMQxdhUF9Teqes-OkxvjGG66d2cJ960Zw/viewform?usp=header', '_blank');
  };

  return (
    <div className="bg-blue-600 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40 relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full bg-white/20 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/30 mb-8 backdrop-blur-sm">
            ✨ Trusted by enterprise teams worldwide
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Ready to scale your
            <span className="block text-blue-100">global workforce?</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-blue-100">
            Join thousands of businesses and HR teams who trust Lumi6 for accurate, scalable language assessment with enterprise-grade security and instant results.
          </p>
          <div className="mt-12 flex items-center justify-center gap-6 flex-wrap">
            <Button size="lg" variant="secondary" className="px-10 py-5 text-lg font-semibold bg-white text-blue-700 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl" onClick={handleTrialClick}>
              Start Enterprise Trial
            </Button>
            <Button size="lg" className="px-10 py-5 text-lg font-semibold bg-white/20 text-white border-2 border-white/50 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 rounded-xl" asChild>
              <Link to="#features">
                <span className="font-bold text-white">Enterprise Solutions</span>
              </Link>
            </Button>
          </div>
          
          <div className="mt-16 flex items-center justify-center gap-8 text-blue-200 flex-wrap">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="font-medium text-sm">Bulk Assessment</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="font-medium text-sm">API Integration</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="font-medium text-sm">Enterprise Security</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Minimal background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
    </div>
  );
}
