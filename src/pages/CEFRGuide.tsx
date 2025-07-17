
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Users, Award, Target } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const CEFRGuide = () => {
  const cefrLevels = [
    {
      level: "A1",
      name: "Beginner",
      color: "bg-blue-900 text-white",
      description: "Can understand and use familiar everyday expressions and very basic phrases",
      skills: [
        "Introduce yourself and others",
        "Ask and answer simple personal questions",
        "Interact in a simple way with slow, clear speech"
      ]
    },
    {
      level: "A2", 
      name: "Elementary",
      color: "bg-blue-700 text-white",
      description: "Can deal with most situations while traveling in an area where the language is spoken. Can produce simple connected text",
      skills: [
        "Understand frequently used expressions",
        "Communicate in routine tasks",
        "Describe personal background and immediate needs"
      ]
    },
    {
      level: "B1",
      name: "Intermediate", 
      color: "bg-blue-600 text-white",
      description: "Can communicate in simple and routine tasks requiring a simple exchange of information on familiar topics",
      skills: [
        "Deal with most travel situations",
        "Produce simple connected text",
        "Describe experiences, events, and ambitions"
      ]
    },
    {
      level: "B2",
      name: "Upper Intermediate",
      color: "bg-teal-600 text-white", 
      description: "Can interact with a degree of fluency and spontaneity. Can produce clear, detailed text on a wide range of subjects",
      skills: [
        "Understand complex text on concrete and abstract topics",
        "Interact with native speakers with fluency",
        "Produce detailed text on various subjects"
      ]
    },
    {
      level: "C1",
      name: "Advanced",
      color: "bg-orange-600 text-white",
      description: "Can express ideas fluently and spontaneously. Can use language flexibly and effectively for social, academic, and professional purposes",
      skills: [
        "Understand demanding, longer texts",
        "Express ideas fluently without searching for expressions",
        "Use language flexibly for complex purposes"
      ]
    },
    {
      level: "C2",
      name: "Proficient",
      color: "bg-orange-500 text-white", 
      description: "Can express ideas fluently and spontaneously. Can use language flexibly and effectively for social, academic, and professional purposes",
      skills: [
        "Understand virtually everything heard or read",
        "Summarize information from different sources",
        "Express yourself spontaneously and precisely"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <ArrowLeft size={20} />
                Back to Home
              </Link>
            </Button>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              CEFR Language Levels Explained: A Complete Guide for Learners & Teachers
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl">
              The Common European Framework of Reference for Languages (CEFR) is an international standard 
              used to describe language ability. It describes language ability on a six-point scale, 
              from A1 for beginners, up to C2 for those who have mastered a language.
            </p>
          </div>

          {/* Visual Guide */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 mb-8">
              <img 
                src="/image-uploads/391ad250-dc25-4228-b8b0-a8f20b509049.png" 
                alt="CEFR Language Levels Visual Guide" 
                className="w-full max-w-4xl mx-auto rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Introduction */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="text-blue-600" size={24} />
                  <h3 className="text-lg font-semibold">Standardized Assessment</h3>
                </div>
                <p className="text-gray-600">
                  CEFR provides a consistent way to measure and describe language proficiency across different languages and countries.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="text-blue-600" size={24} />
                  <h3 className="text-lg font-semibold">Global Recognition</h3>
                </div>
                <p className="text-gray-600">
                  Recognized by employers, universities, and institutions worldwide as the standard for language certification.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="text-blue-600" size={24} />
                  <h3 className="text-lg font-semibold">Clear Progression</h3>
                </div>
                <p className="text-gray-600">
                  Provides clear learning objectives and milestones for language learners at every level.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Level Breakdown */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Understanding Each CEFR Level
            </h2>
            
            <div className="space-y-6">
              {cefrLevels.map((level, index) => (
                <Card key={level.level} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className={`${level.color} p-6 md:w-32 flex items-center justify-center`}>
                      <div className="text-center">
                        <div className="text-3xl font-bold">{level.level}</div>
                        <div className="text-sm font-medium">{level.name}</div>
                      </div>
                    </div>
                    <div className="p-6 flex-1">
                      <p className="text-gray-800 mb-4 text-lg">{level.description}</p>
                      <div className="grid md:grid-cols-3 gap-4">
                        {level.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Why CEFR Matters */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Why CEFR Matters for Your Career
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Award className="text-blue-600" size={24} />
                  Professional Recognition
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Globally accepted by employers and recruiters</li>
                  <li>• Required for many international job positions</li>
                  <li>• Essential for visa and immigration applications</li>
                  <li>• Recognized by professional certification bodies</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="text-blue-600" size={24} />
                  Academic Advancement
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Required for university admissions abroad</li>
                  <li>• Needed for scholarship applications</li>
                  <li>• Essential for academic exchange programs</li>
                  <li>• Recognized by educational institutions worldwide</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Test Your Language Level?
            </h2>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              Get your official CEFR certification with our AI-powered assessment platform. 
              Accurate, fast, and recognized worldwide.
            </p>
            <Button size="lg" className="px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700" asChild>
              <Link to="/sign-up">Start Your CEFR Assessment</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CEFRGuide;
