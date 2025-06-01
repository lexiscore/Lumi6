
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40 relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full bg-white/20 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/30 mb-8 backdrop-blur-sm shadow-lg">
            ✨ Trusted by enterprise teams worldwide
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Ready to scale your
            <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">global workforce?</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-blue-100">
            Join thousands of businesses and HR teams who trust Lumi6 for accurate, scalable language assessment with enterprise-grade security and instant results.
          </p>
          <div className="mt-12 flex items-center justify-center gap-6 flex-wrap">
            <Button size="lg" variant="secondary" className="px-10 py-5 text-lg font-semibold bg-white text-purple-700 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-2xl" asChild>
              <Link to="/admin-login">Start Enterprise Trial</Link>
            </Button>
            <Button size="lg" className="px-10 py-5 text-lg font-semibold bg-white/20 text-white border-2 border-white/50 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 rounded-2xl" asChild>
              <Link to="#features">
                <span className="font-bold text-white">Enterprise Solutions</span>
              </Link>
            </Button>
          </div>
          
          <div className="mt-16 flex items-center justify-center gap-8 text-purple-200 flex-wrap">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="font-medium text-sm">Bulk Assessment</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
              <span className="font-medium text-sm">API Integration</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="font-medium text-sm">Enterprise Security</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* iOS-style background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-pink-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-400/20 to-purple-600/20 rounded-full blur-3xl" />
    </div>
  );
}
