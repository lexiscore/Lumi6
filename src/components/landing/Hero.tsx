import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TrialFormModal from "./TrialFormModal";
export default function Hero() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const handleTrialClick = () => {
    setIsTrialModalOpen(true);
  };
  return <>
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen flex items-center justify-center pt-32 pb-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-5xl">
              <div className="text-center">
                {/* Main heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-8">
                  <span className="text-slate-900">Corporate</span>
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent font-display mx-0 px-0 my-0 py-[10px]">EQ Assessment</span>
                </h1>
                
                {/* Badge */}
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 px-6 py-3 text-sm font-medium text-blue-700 mb-8 shadow-sm">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
                  The Future of Hiring is Emotional Intelligence
                </div>
                
                {/* Description */}
                <p className="text-xl sm:text-2xl leading-relaxed text-slate-600 max-w-4xl mx-auto font-normal mb-12">
                  Comprehensive emotional intelligence assessment 
                  <span className="text-blue-600 font-semibold"> powered by AI technology</span> to identify emotionally intelligent leaders in the age of AI.
                </p>
                
                {/* Buttons */}
                <div className="flex items-center justify-center gap-6 flex-wrap mb-16">
                  <Button size="lg" className="px-10 py-5 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl text-white border-0" onClick={handleTrialClick}>
                    Start Assessment
                  </Button>
                  <Button variant="outline" size="lg" className="px-10 py-5 text-lg font-semibold border-2 border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 rounded-2xl bg-white/80 backdrop-blur-sm" asChild>
                    <Link to="#features">
                      Learn More
                    </Link>
                  </Button>
                </div>

                {/* EQ Assessment Features */}
                <div className="max-w-4xl mx-auto">
                  <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-8 mx-auto">
                      <span className="text-4xl">🧠</span>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-6 font-display text-center">Emotional Intelligence Assessment</h3>
                    <p className="text-slate-600 mb-10 text-xl leading-relaxed text-center max-w-3xl mx-auto">
                      Evaluate emotional intelligence across four core competencies that predict workplace success and leadership effectiveness in the age of AI.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold">1</span>
                        </div>
                        <h4 className="font-semibold text-purple-900 mb-2">Self-Awareness</h4>
                        <p className="text-purple-700 text-sm">Understanding your emotions and their impact</p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold">2</span>
                        </div>
                        <h4 className="font-semibold text-blue-900 mb-2">Self-Management</h4>
                        <p className="text-blue-700 text-sm">Controlling emotions and adapting to change</p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold">3</span>
                        </div>
                        <h4 className="font-semibold text-green-900 mb-2">Social Awareness</h4>
                        <p className="text-green-700 text-sm">Reading others' emotions and organizational dynamics</p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold">4</span>
                        </div>
                        <h4 className="font-semibold text-orange-900 mb-2">Relationship Management</h4>
                        <p className="text-orange-700 text-sm">Influencing and managing conflict effectively</p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <Button size="lg" className="px-10 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl text-white border-0" asChild>
                        <Link to="/eq-assessment">
                          Take EQ Assessment
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <TrialFormModal isOpen={isTrialModalOpen} onClose={() => setIsTrialModalOpen(false)} />
    </>;
}