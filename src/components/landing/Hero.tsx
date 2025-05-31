
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50 min-h-screen flex items-center justify-center">
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-100 to-lime-100 px-4 py-2 text-sm font-medium text-emerald-800 ring-1 ring-emerald-200 mb-6">
                🚀 B2B AI-Powered Language Assessment
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-800 bg-gradient-to-r from-emerald-600 via-lime-600 to-green-600 bg-clip-text text-transparent leading-tight">
                Test Your Language
                <span className="block bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-transparent">Proficiency</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl leading-8 text-slate-700 max-w-2xl mx-auto font-medium px-4">
                Enterprise-grade CEFR-based assessment with AI-powered speaking tests. 
                Scale your global workforce with accurate, comprehensive language certification for businesses worldwide.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4 flex-wrap px-4">
                <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-emerald-500 via-lime-500 to-green-600 hover:from-emerald-600 hover:via-lime-600 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" asChild>
                  <Link to="/sign-up">Start Your Trial</Link>
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold border-2 border-emerald-400 text-emerald-700 hover:border-emerald-600 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300" asChild>
                  <Link to="#features">
                    <span className="bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent font-bold">
                      B2B Solutions
                    </span>
                  </Link>
                </Button>
              </div>
              
              <div className="mt-12 flex items-center justify-center gap-6 text-sm text-slate-600 flex-wrap px-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-medium">Instant Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="font-medium">CEFR Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-lime-500 rounded-full"></div>
                  <span className="font-medium">Enterprise Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="font-medium">B2B Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modern background elements with emerald-lime theme */}
      <div className="absolute top-0 right-0 -z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-emerald-400/20 to-lime-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-tr from-lime-400/20 to-green-600/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-96 h-96 sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] bg-gradient-to-r from-emerald-100/30 to-lime-100/30 rounded-full blur-3xl" />
    </div>
  );
}
