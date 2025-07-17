
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Brain, Users, TrendingUp, Target, Shield, CheckCircle, Star, Award, BookOpen, Lightbulb, BarChart3 } from "lucide-react";

const EQAssessment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              EQ Assessment
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Unlock <span className="text-purple-600">Emotional Intelligence</span> Potential
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive emotional intelligence assessments for leadership development, learning programs, talent management, and organizational growth.
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                className="bg-purple-600 hover:bg-purple-700 px-8 py-3 text-lg"
                onClick={() => window.location.href = '#contact'}
              >
                Start Assessment
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-3 text-lg"
                onClick={() => window.location.href = '#how-it-works'}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is EQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is Emotional Intelligence?
              </h2>
              <p className="text-gray-600 mb-6">
                Emotional Intelligence (EQ) is the ability to understand, use, and manage emotions effectively. 
                It's a critical factor in leadership success, team collaboration, and personal development.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Self-awareness and emotional regulation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Empathy and social awareness</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Relationship management skills</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Motivation and resilience</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-8 text-center">
              <Brain className="w-24 h-24 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">90% of Top Performers</h3>
              <p className="text-gray-600">have high emotional intelligence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Components Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our EQ Assessment Components
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive evaluation across four core emotional intelligence domains
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Self-Awareness</h3>
              <p className="text-gray-600 text-sm">Understanding your emotions, strengths, and limitations</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Self-Management</h3>
              <p className="text-gray-600 text-sm">Regulating emotions and adapting to change</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Social Awareness</h3>
              <p className="text-gray-600 text-sm">Reading others' emotions and organizational dynamics</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Relationship Management</h3>
              <p className="text-gray-600 text-sm">Influencing, coaching, and managing conflict</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perfect for Every Organizational Need
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-purple-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-purple-900">Leadership Development</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>Identify high-potential leaders</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>Executive coaching and development</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>Succession planning</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>Leadership competency mapping</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-green-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-900">Learning & Development</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-green-500" />
                  <span>Personalized learning paths</span>
                </li>
                <li className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-green-500" />
                  <span>Skill gap analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-green-500" />
                  <span>Training effectiveness measurement</span>
                </li>
                <li className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-green-500" />
                  <span>Professional development planning</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Talent Management</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span>Recruitment and selection</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span>Performance management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span>Team composition optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span>Career development guidance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-orange-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-orange-900">Organizational Development</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-orange-500" />
                  <span>Culture transformation</span>
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-orange-500" />
                  <span>Change management</span>
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-orange-500" />
                  <span>Team effectiveness</span>
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-orange-500" />
                  <span>Employee engagement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-purple-600">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Our EQ Assessment?
            </h2>
            <p className="text-purple-100 max-w-2xl mx-auto">
              Scientifically validated, actionable insights for real organizational impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Scientifically Validated</h3>
              <p className="text-purple-100">Based on latest research in emotional intelligence</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Actionable Insights</h3>
              <p className="text-purple-100">Detailed reports with development recommendations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Easy Implementation</h3>
              <p className="text-purple-100">Seamless integration with your existing processes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Develop Emotional Intelligence?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Transform your organization with comprehensive EQ assessment and development.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 text-lg">
              Start EQ Assessment
            </Button>
            <Button variant="outline" className="px-8 py-3 text-lg">
              Request Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EQAssessment;
