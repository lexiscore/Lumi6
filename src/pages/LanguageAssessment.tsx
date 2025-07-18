
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, BookOpen, MessageSquare, Target, Zap, Shield, Users, Globe, Award, Star, Clock, TrendingUp } from "lucide-react";
import TrialFormModal from "@/components/landing/TrialFormModal";
import { useState } from "react";

const LanguageAssessment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Language Assessment
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Unlock Language Proficiency with <span className="text-blue-600">Precision</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              CEFR-aligned English language assessments designed for smarter hiring, onboarding, and skill development—powered by Lumi6.
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg"
                onClick={() => window.location.href = '#contact'}
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-3 text-lg"
                onClick={() => window.location.href = '#how-it-works'}
              >
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Two Products Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              🧩 Two Powerful Language Products
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Proficiency Test */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">1. Proficiency Test</h3>
                  <p className="text-gray-600">Grammar, vocabulary, reading & listening skills</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                Assess grammar, vocabulary, reading comprehension, and listening skills—accurately and at scale.
                Our AI-driven test evaluates core English proficiency through multi-format questions.
              </p>
              
              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-gray-900">Test Components:</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Grammar & Sentence Construction</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Vocabulary Range & Usage</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Reading Comprehension</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Audio-Based Listening Tasks</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Key Features:</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>CEFR-aligned scoring (A1 to C2)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-500" />
                    <span>Adaptive difficulty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>Anti-cheating features</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-purple-500" />
                    <span>Anti-guessing design logic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>Immediate reports with skill breakdowns</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Speaking Test */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-900">2. Speaking Test</h3>
                  <p className="text-gray-600">AI-powered spoken English fluency evaluation</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                Evaluate spoken English fluency with real-world speech scenarios.
                Candidates speak answers into a microphone. Our engine transcribes and analyzes.
              </p>
              
              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-gray-900">Analysis Components:</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Pronunciation & Accent Influence</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Fluency & Hesitation Detection</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Lexical Resource & Coherence</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Discourse Management</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-sm text-purple-800 font-medium">
                  Provides CEFR score with anti-cheating and proctoring features
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Lumi6 Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <Zap className="w-8 h-8 text-blue-600" />
              Why Lumi6 Language Assessment?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Built for Hiring Teams</h3>
              </div>
              <p className="text-gray-600 text-sm">Screen candidates in global support, tech, and operations roles.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Powered by CEFR</h3>
              </div>
              <p className="text-gray-600 text-sm">Transparent, internationally recognized scale.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Bias-Reduced AI</h3>
              </div>
              <p className="text-gray-600 text-sm">Smart logic prevents guesswork and detects inconsistency.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Fast & Scalable</h3>
              </div>
              <p className="text-gray-600 text-sm">1000s of candidates, evaluated in minutes.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Human-Level Accuracy</h3>
              </div>
              <p className="text-gray-600 text-sm">Benchmarked against certified IELTS & TOEFL evaluators.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              👤 Use Cases
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">International Hiring</h3>
              <p className="text-gray-600 text-sm">Ensure English fluency across borders.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Remote Work Onboarding</h3>
              <p className="text-gray-600 text-sm">Verify language confidence for async teams.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">L&D Language Programs</h3>
              <p className="text-gray-600 text-sm">Track progression and measure outcomes.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Academic Placement</h3>
              <p className="text-gray-600 text-sm">Use as CEFR benchmarking for admissions or exit tests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Language Assessment?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of organizations using Lumi6 for accurate, scalable language evaluation.
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg"
              onClick={() => setIsModalOpen(true)}
            >
              Start Your Free Trial
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      
      <TrialFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default LanguageAssessment;
