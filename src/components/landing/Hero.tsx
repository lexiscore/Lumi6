
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-16 pb-8">
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl py-12 sm:py-16 lg:py-20">
            <div className="text-center">
              <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1.5 text-xs sm:text-sm font-medium text-blue-700 ring-1 ring-blue-200 mb-4 sm:mb-6">
                🚀 AI-Powered Language Assessment for Business
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent leading-tight">
                Test Your Language
                <span className="block text-blue-600">Proficiency</span>
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-6 sm:leading-7 lg:leading-8 text-slate-600 max-w-2xl mx-auto font-light px-4">
                Enterprise-grade CEFR-based assessment with AI-powered speaking tests. 
                Scale your global workforce with accurate, comprehensive language certification for businesses worldwide.
              </p>
              <div className="mt-6 sm:mt-8 flex items-center justify-center gap-3 sm:gap-4 lg:gap-6 flex-wrap px-4">
                <Button size="lg" className="px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" asChild>
                  <Link to="/sign-up">Start Business Assessment</Link>
                </Button>
                <Button variant="outline" size="lg" className="px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300" asChild>
                  <Link to="#features">Enterprise Features</Link>
                </Button>
              </div>
              
              <div className="mt-8 sm:mt-12 flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-slate-500 flex-wrap px-4">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                  <span>Instant Results</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
                  <span>CEFR Certified</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full"></div>
                  <span>Enterprise Ready</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full"></div>
                  <span>B2B Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modern background elements */}
      <div className="absolute top-0 right-0 -z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-tr from-indigo-400/20 to-cyan-600/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-96 h-96 sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl" />
    </div>
  );
}
