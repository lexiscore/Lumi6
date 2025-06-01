
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 min-h-screen flex items-center justify-center">
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 text-sm font-medium text-slate-700 ring-1 ring-blue-200/50 mb-8 backdrop-blur-sm shadow-sm">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">🚀 AI-Powered Language Assessment</span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-800 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Test Your Language</span>
                <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">Proficiency</span>
              </h1>
              <p className="mt-8 text-xl sm:text-2xl leading-relaxed text-slate-600 max-w-3xl mx-auto font-medium px-4">
                Enterprise-grade CEFR-based assessment with AI-powered speaking tests. 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold"> Scale your global workforce</span> with accurate, comprehensive language certification.
              </p>
              <div className="mt-12 flex items-center justify-center gap-6 flex-wrap px-4">
                <Button size="lg" className="px-10 py-5 text-lg font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-2xl" asChild>
                  <Link to="/sign-up">Start Your Trial</Link>
                </Button>
                <Button variant="outline" size="lg" className="px-10 py-5 text-lg font-semibold border-2 border-purple-300 text-purple-700 hover:border-purple-500 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 rounded-2xl backdrop-blur-sm" asChild>
                  <Link to="#features">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
                      Enterprise Solutions
                    </span>
                  </Link>
                </Button>
              </div>
              
              <div className="mt-16 flex items-center justify-center gap-8 text-sm text-slate-600 flex-wrap px-4">
                <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  <span className="font-medium">Instant Results</span>
                </div>
                <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  <span className="font-medium">CEFR Certified</span>
                </div>
                <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></div>
                  <span className="font-medium">Enterprise Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* iOS-style background elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-purple-400/20 to-pink-600/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/30 via-purple-100/30 to-pink-100/30 rounded-full blur-3xl" />
    </div>
  );
}
