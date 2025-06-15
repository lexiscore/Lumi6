
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Settings, Code, Database, Zap, CheckCircle, Users, Target, Shield, Clock, BarChart3, Puzzle, Globe } from "lucide-react";

const CustomAssessments = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Settings className="w-4 h-4" />
              Custom Assessments
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Tailored <span className="text-green-600">Assessment Solutions</span> for Your Organization
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Custom tests, frameworks, API integration, and bulk testing solutions designed to meet your unique organizational needs and scale with your growth.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-green-600 hover:bg-green-700 px-8 py-3 text-lg">
                Get Custom Solution
              </Button>
              <Button variant="outline" className="px-8 py-3 text-lg">
                View Examples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Custom Assessment Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From simple custom tests to complex enterprise integrations, we build exactly what you need
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Custom Tests */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Puzzle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-900">Custom Tests</h3>
                  <p className="text-gray-600">Bespoke assessments for your specific requirements</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700">Industry-specific skill assessments</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700">Role-based competency evaluations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700">Custom scoring algorithms</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700">Multi-format question types</span>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-green-800">
                  Perfect for unique organizational needs that standard assessments can't address
                </p>
              </div>
            </div>

            {/* Custom Frameworks */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">Custom Frameworks</h3>
                  <p className="text-gray-600">Proprietary assessment methodologies</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span className="text-gray-700">Competency framework development</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span className="text-gray-700">Custom scoring methodologies</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span className="text-gray-700">Behavioral assessment models</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span className="text-gray-700">Performance prediction algorithms</span>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  Build assessment frameworks that align perfectly with your organizational values
                </p>
              </div>
            </div>

            {/* API Integration */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-900">API Integration</h3>
                  <p className="text-gray-600">Seamless system connectivity</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500" />
                  <span className="text-gray-700">RESTful API endpoints</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500" />
                  <span className="text-gray-700">Real-time data synchronization</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500" />
                  <span className="text-gray-700">Webhook notifications</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500" />
                  <span className="text-gray-700">Custom authentication methods</span>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-sm text-purple-800">
                  Integrate assessments directly into your existing HR systems and workflows
                </p>
              </div>
            </div>

            {/* Bulk Testing */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-orange-100 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-orange-900">Bulk Testing</h3>
                  <p className="text-gray-600">Large-scale assessment deployment</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-700">Mass candidate invitations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-700">Automated result processing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-700">Batch reporting and analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-700">Enterprise-grade infrastructure</span>
                </div>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-4">
                <p className="text-sm text-orange-800">
                  Scale your assessment programs to thousands of candidates simultaneously
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Features
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Security First</h3>
              <p className="text-gray-600 text-sm">Enterprise-grade security and compliance</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <Zap className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">High Performance</h3>
              <p className="text-gray-600 text-sm">Optimized for speed and reliability</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Scalable</h3>
              <p className="text-gray-600 text-sm">Grows with your organization</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <BarChart3 className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Analytics</h3>
              <p className="text-gray-600 text-sm">Deep insights and reporting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perfect for Various Industries & Use Cases
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Global Enterprises</h3>
              <p className="text-gray-600 text-sm">Multi-region deployment with localized assessments</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Specialized Industries</h3>
              <p className="text-gray-600 text-sm">Healthcare, finance, tech, and other specialized sectors</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Large-Scale Hiring</h3>
              <p className="text-gray-600 text-sm">Campus recruitment and mass hiring programs</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Time-Critical Projects</h3>
              <p className="text-gray-600 text-sm">Rapid deployment for urgent hiring needs</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Compliance-Heavy Industries</h3>
              <p className="text-gray-600 text-sm">Meet strict regulatory and certification requirements</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Data-Driven Organizations</h3>
              <p className="text-gray-600 text-sm">Advanced analytics and reporting requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-green-600">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Custom Development Process
            </h2>
            <p className="text-green-100 max-w-2xl mx-auto">
              From consultation to deployment, we work closely with you every step of the way
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                1
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Consultation</h3>
              <p className="text-green-100 text-sm">Understand your requirements and objectives</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                2
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Design</h3>
              <p className="text-green-100 text-sm">Create detailed specifications and prototypes</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                3
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Development</h3>
              <p className="text-green-100 text-sm">Build and test your custom solution</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                4
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Deployment</h3>
              <p className="text-green-100 text-sm">Launch with full support and training</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Build Your Custom Assessment Solution?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your unique requirements and create the perfect assessment solution for your organization.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-green-600 hover:bg-green-700 px-8 py-3 text-lg">
              Start Your Project
            </Button>
            <Button variant="outline" className="px-8 py-3 text-lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomAssessments;
