
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-16 pb-12">
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl py-24 sm:py-32">
            <div className="text-center">
              <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 ring-1 ring-blue-200 mb-8">
                🚀 AI-Powered Language Assessment
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent leading-tight">
                Master Your Language
                <span className="block text-blue-600">Proficiency</span>
              </h1>
              <p className="mt-8 text-xl leading-8 text-slate-600 max-w-2xl mx-auto font-light">
                Get instant CEFR-based assessment with AI-powered speaking tests. 
                Accurate, comprehensive, and internationally recognized certification for professionals worldwide.
              </p>
              <div className="mt-12 flex items-center justify-center gap-6 flex-wrap">
                <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" asChild>
                  <Link to="/sign-up">Start Free Assessment</Link>
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300" asChild>
                  <Link to="#features">Explore Features</Link>
                </Button>
              </div>
              
              <div className="mt-16 flex items-center justify-center gap-8 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Instant Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>CEFR Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>AI-Powered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modern background elements */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-gradient-to-tr from-indigo-400/20 to-cyan-600/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl" />
    </div>
  );
}
