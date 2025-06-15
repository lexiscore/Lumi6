import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, BookOpen, MessageSquare, Award, Users, Globe, Zap, Shield, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import TrialFormModal from "./TrialFormModal";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  const handleTrialClick = () => {
    setIsTrialModalOpen(true);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/" className="flex items-center">
                <Logo className="w-12 h-12" textClassName="text-xl" />
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="hover:bg-gray-100">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
            
            {/* Desktop menu */}
            <nav className="hidden md:flex space-x-8">
              <div className="relative group">
                <button 
                  className="text-gray-700 hover:text-blue-600 transition-all font-medium relative group flex items-center gap-1" 
                  onMouseEnter={() => setIsProductsOpen(true)} 
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  Products
                  <ChevronDown size={16} className="transform transition-transform group-hover:rotate-180" />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </button>
                {isProductsOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-xl shadow-xl border border-gray-200 py-6 z-50 animate-fade-in" 
                    onMouseEnter={() => setIsProductsOpen(true)} 
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    {/* Language Assessment Section */}
                    <div className="px-6 mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">Language Assessment</h3>
                          <p className="text-sm text-gray-600">CEFR-aligned English assessments powered by Lumi6</p>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">🧩 Two Powerful Language Products</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-white rounded-lg p-4 border border-blue-200 hover:shadow-md transition-all">
                            <div className="flex items-center gap-2 mb-2">
                              <Target className="w-4 h-4 text-blue-600" />
                              <h5 className="font-semibold text-blue-900">1. Proficiency Test</h5>
                            </div>
                            <p className="text-xs text-gray-600 mb-2">Grammar, vocabulary, reading & listening skills</p>
                            <div className="text-xs text-gray-500 space-y-1">
                              <div>• Grammar & Sentence Construction</div>
                              <div>• Vocabulary Range & Usage</div>
                              <div>• Reading Comprehension</div>
                              <div>• Audio-Based Listening Tasks</div>
                            </div>
                          </div>
                          
                          <div className="bg-white rounded-lg p-4 border border-purple-200 hover:shadow-md transition-all">
                            <div className="flex items-center gap-2 mb-2">
                              <MessageSquare className="w-4 h-4 text-purple-600" />
                              <h5 className="font-semibold text-purple-900">2. Speaking Test</h5>
                            </div>
                            <p className="text-xs text-gray-600 mb-2">AI-powered spoken English fluency evaluation</p>
                            <div className="text-xs text-gray-500 space-y-1">
                              <div>• Pronunciation & Accent Analysis</div>
                              <div>• Fluency & Hesitation Detection</div>
                              <div>• Lexical Resource & Coherence</div>
                              <div>• Discourse Management</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <Zap className="w-4 h-4 text-blue-600" />
                            Why Lumi6?
                          </h4>
                          <div className="space-y-2 text-xs text-gray-600">
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              <span>Built for Hiring Teams</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              <span>CEFR-Aligned Scoring</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              <span>Anti-Cheating Features</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              <span>Human-Level Accuracy</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <Users className="w-4 h-4 text-purple-600" />
                            Use Cases
                          </h4>
                          <div className="space-y-2 text-xs text-gray-600">
                            <div className="flex items-center gap-2">
                              <Globe className="w-3 h-3 text-blue-500" />
                              <span>International Hiring</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-3 h-3 text-blue-500" />
                              <span>Remote Work Onboarding</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <BookOpen className="w-3 h-3 text-blue-500" />
                              <span>L&D Language Programs</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Award className="w-3 h-3 text-blue-500" />
                              <span>Academic Placement</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4">
                      <div className="grid grid-cols-2 gap-4 px-6">
                        <a href="#features" className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors rounded-lg">
                          <div className="font-medium">EQ Assessment</div>
                          <div className="text-sm text-gray-500">For leadership, learning, talent and org development</div>
                        </a>
                        <a href="#features" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors rounded-lg">
                          <div className="font-medium">Custom Assessments</div>
                          <div className="text-sm text-gray-500">Custom tests, frameworks, API integration, bulk testing</div>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="relative group">
                <button 
                  className="text-gray-700 hover:text-blue-600 transition-all font-medium relative group flex items-center gap-1" 
                  onMouseEnter={() => setIsSolutionsOpen(true)} 
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                >
                  Solutions
                  <ChevronDown size={16} className="transform transition-transform group-hover:rotate-180" />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </button>
                {isSolutionsOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 py-4 z-50" 
                    onMouseEnter={() => setIsSolutionsOpen(true)} 
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                  >
                  </div>
                )}
              </div>
              
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-all font-medium relative group">
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-all font-medium relative group">
                How It Works
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <Link to="/cefr-guide" className="text-gray-700 hover:text-blue-600 transition-all font-medium relative group">
                Assessment Guide
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-all font-medium relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>
            
            {/* Authentication button for desktop */}
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold rounded-xl" onClick={handleTrialClick}>
                Start Your Trial
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 p-6 animate-fade-in shadow-lg">
            <nav className="flex flex-col gap-6">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg" onClick={() => setIsMenuOpen(false)}>
                Products
              </a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg" onClick={() => setIsMenuOpen(false)}>
                Solutions
              </a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg" onClick={() => setIsMenuOpen(false)}>
                Features
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg" onClick={() => setIsMenuOpen(false)}>
                How It Works
              </a>
              <Link to="/cefr-guide" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg" onClick={() => setIsMenuOpen(false)}>
                Assessment Guide
              </Link>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
              <div className="pt-4 border-t border-gray-200">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 shadow-lg font-semibold rounded-xl" onClick={handleTrialClick}>
                  Start Your Trial
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
      
      <TrialFormModal 
        isOpen={isTrialModalOpen} 
        onClose={() => setIsTrialModalOpen(false)} 
      />
    </>
  );
}
