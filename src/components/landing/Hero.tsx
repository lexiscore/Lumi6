
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen flex items-center justify-center">
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-100 to-violet-100 px-3 py-1.5 text-xs sm:text-sm font-medium text-blue-800 ring-1 ring-blue-200 mb-3 sm:mb-4">
                🚀 B2B AI-Powered Language Assessment
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-800 bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                Test Your Language
                <span className="block bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Proficiency</span>
              </h1>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg leading-5 sm:leading-6 lg:leading-7 text-slate-700 max-w-2xl mx-auto font-medium px-4">
                Enterprise-grade CEFR-based assessment with AI-powered speaking tests. 
                Scale your global workforce with accurate, comprehensive language certification for businesses worldwide.
              </p>
              <div className="mt-4 sm:mt-6 flex items-center justify-center gap-3 sm:gap-4 lg:gap-6 flex-wrap px-4">
                <Button size="lg" className="px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold bg-gradient-to-r from-blue-500 via-violet-500 to-purple-600 hover:from-blue-600 hover:via-violet-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" asChild>
                  <Link to="/sign-up">Start Your Trial</Link>
                </Button>
                <Button variant="outline" size="lg" className="px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold border-2 border-violet-400 text-violet-700 hover:border-violet-600 hover:text-violet-600 hover:bg-violet-50 transition-all duration-300" asChild>
                  <Link to="#features">
                    <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent font-bold">
                      B2B Solutions
                    </span>
                  </Link>
                </Button>
              </div>
              
              <div className="mt-8 sm:mt-12 flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-slate-600 flex-wrap px-4">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                  <span className="font-medium">Instant Results</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
                  <span className="font-medium">CEFR Certified</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-violet-500 rounded-full"></div>
                  <span className="font-medium">Enterprise Ready</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full"></div>
                  <span className="font-medium">B2B Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modern background elements with blue-violet theme */}
      <div className="absolute top-0 right-0 -z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400/20 to-violet-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-tr from-violet-400/20 to-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-96 h-96 sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] bg-gradient-to-r from-blue-100/30 to-violet-100/30 rounded-full blur-3xl" />
    </div>
  );
}
