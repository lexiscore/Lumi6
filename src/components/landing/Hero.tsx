import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30 min-h-screen flex items-center justify-center">
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 leading-tight mb-8">
                <span className="text-gray-900">Test Your Language</span>
                <span className="block text-blue-600">Proficiency</span>
              </h1>
              
              <div className="inline-flex items-center rounded-full bg-blue-50 border border-blue-200 px-6 py-3 text-sm font-medium text-blue-700 mb-12 shadow-sm mt-4">
                🚀 AI-Powered Language Assessment
              </div>
              
              <p className="text-xl sm:text-2xl leading-relaxed text-gray-600 max-w-3xl mx-auto font-medium px-4 mb-12">
                Enterprise-grade CEFR-based assessment with AI-powered speaking tests. 
                <span className="text-blue-600 font-semibold"> Scale your global workforce</span> with accurate, comprehensive language certification.
              </p>
              
              <div className="flex items-center justify-center gap-6 flex-wrap px-4 mb-16">
                <Button size="lg" className="px-10 py-5 text-lg font-semibold bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl" asChild>
                  <Link to="/sign-up">Start Your Trial</Link>
                </Button>
                <Button variant="outline" size="lg" className="px-10 py-5 text-lg font-semibold border-2 border-blue-200 text-blue-700 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 rounded-xl" asChild>
                  <Link to="#features">
                    <span className="text-blue-600 font-bold">
                      Enterprise Solutions
                    </span>
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-8 text-sm text-gray-600 flex-wrap px-4">
                <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="font-medium">Instant Results</span>
                </div>
                <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="font-medium">CEFR Certified</span>
                </div>
                <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="font-medium">Enterprise Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Minimal background elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-gray-100/30 rounded-full blur-3xl" />
    </div>
  );
}
