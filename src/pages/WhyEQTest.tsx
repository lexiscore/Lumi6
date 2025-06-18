
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Brain, Heart, Users, TrendingUp, CheckCircle, XCircle } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const WhyEQTest = () => {
  const aiCapabilities = [
    "GPT-4 can write code, blogs, legal summaries",
    "Copilots assist in software engineering", 
    "AI design tools generate branding in seconds",
    "Data bots analyze spreadsheets in milliseconds"
  ];

  const humanTraits = [
    { trait: "Empathy", aiCapability: "Limited simulation", canDo: false },
    { trait: "Emotional regulation", aiCapability: "Not self-aware", canDo: false },
    { trait: "Conflict resolution", aiCapability: "No real intent", canDo: false },
    { trait: "Moral judgment", aiCapability: "Context-blind", canDo: false },
    { trait: "Human trust & credibility", aiCapability: "Not earned emotionally", canDo: false }
  ];

  const comparisonData = [
    { attribute: "Speed", iq: true, ai: "high", eq: false },
    { attribute: "Accuracy", iq: true, ai: "high", eq: false },
    { attribute: "Adaptability", iq: "medium", ai: true, eq: "high" },
    { attribute: "Empathy", iq: false, ai: false, eq: "high" },
    { attribute: "Collaboration", iq: "medium", ai: false, eq: "high" },
    { attribute: "Leadership", iq: "medium", ai: false, eq: "high" }
  ];

  const companyExamples = [
    { company: "Google", insight: "Project Oxygen found EQ skills more predictive of success than STEM skills." },
    { company: "LinkedIn", insight: "Emotional intelligence ranks among the top 5 skills in demand." },
    { company: "McKinsey", insight: "Empathy-based leadership is key in AI-augmented teams." }
  ];

  const eqBenefits = [
    "Build resilient, people-first cultures",
    "Identify emotionally intelligent leaders early",
    "Improve team communication and reduce conflicts", 
    "Enable better cross-functional and remote collaboration"
  ];

  const renderCapabilityIcon = (value: boolean | string) => {
    if (value === "high") return <span className="text-green-600 font-bold">✅✅✅</span>;
    if (value === true) return <span className="text-green-600">✅</span>;
    if (value === "medium") return <span className="text-yellow-600">⚠️</span>;
    return <span className="text-red-600">❌</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <ArrowLeft size={20} />
                Back to Home
              </Link>
            </Button>
            
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                🌟 Why Emotional Intelligence (EQ) Is the Ultimate Skill in the Age of AI
              </h1>
              <blockquote className="text-xl italic text-gray-600 border-l-4 border-purple-500 pl-6 mb-8">
                "AI can think fast, but only humans can think with heart."
              </blockquote>
            </div>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              As artificial intelligence continues to redefine work, creativity, and communication, we are standing at the edge of a profound shift. Tasks once reserved for highly skilled professionals — analyzing data, writing content, solving logic problems — are now being done faster, cheaper, and more efficiently by machines.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>So what does that mean for human potential?</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Ironically, it's the most <em>human</em> trait of all — <strong className="text-purple-600">Emotional Intelligence (EQ)</strong> — that's becoming the most valuable skill in the workplace.
            </p>
          </div>

          {/* What AI Can Do */}
          <Card className="mb-12 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6">
              <h2 className="text-2xl font-bold flex items-center gap-3 mb-4">
                <Brain size={28} />
                🤖 What AI Can Do Now
              </h2>
            </div>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    {aiCapabilities.map((capability, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="AI technology" 
                    className="rounded-xl shadow-lg max-w-full h-auto"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What AI Can't Do */}
          <Card className="mb-12">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6">
              <h2 className="text-2xl font-bold flex items-center gap-3 mb-4">
                <Heart size={28} />
                💡 What AI Can't Do (Yet)
              </h2>
            </div>
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-4 border border-gray-200 font-semibold">Human Trait</th>
                      <th className="text-left p-4 border border-gray-200 font-semibold">AI Capability</th>
                    </tr>
                  </thead>
                  <tbody>
                    {humanTraits.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="p-4 border border-gray-200 font-medium">{item.trait}</td>
                        <td className="p-4 border border-gray-200">
                          <span className="flex items-center gap-2">
                            <XCircle className="text-red-500" size={16} />
                            {item.aiCapability}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Why EQ is the Future */}
          <Card className="mb-12">
            <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6">
              <h2 className="text-2xl font-bold flex items-center gap-3 mb-4">
                <TrendingUp size={28} />
                🌱 Why EQ is the Skill of the Future
              </h2>
            </div>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">Emotional Intelligence (EQ) is the ability to:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Understand your own emotions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Manage reactions and triggers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Read and influence the emotions of others</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>Build trust, inspire, and resolve conflicts</span>
                  </li>
                </ul>
                <div className="flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Person working with emotional intelligence" 
                    className="rounded-xl shadow-lg max-w-full h-auto"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* EQ vs IQ vs AI Comparison */}
          <Card className="mb-12">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6">
              <h2 className="text-2xl font-bold mb-4">🧠 EQ vs IQ vs AI</h2>
            </div>
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-4 border border-gray-200 font-semibold">Attribute</th>
                      <th className="text-center p-4 border border-gray-200 font-semibold">IQ</th>
                      <th className="text-center p-4 border border-gray-200 font-semibold">AI</th>
                      <th className="text-center p-4 border border-gray-200 font-semibold">EQ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="p-4 border border-gray-200 font-medium">{item.attribute}</td>
                        <td className="p-4 border border-gray-200 text-center">{renderCapabilityIcon(item.iq)}</td>
                        <td className="p-4 border border-gray-200 text-center">{renderCapabilityIcon(item.ai)}</td>
                        <td className="p-4 border border-gray-200 text-center">{renderCapabilityIcon(item.eq)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Companies Shifting */}
          <Card className="mb-12">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6">
              <h2 className="text-2xl font-bold flex items-center gap-3 mb-4">
                <Users size={28} />
                📊 Companies Are Already Shifting
              </h2>
            </div>
            <CardContent className="p-6">
              <div className="space-y-6">
                {companyExamples.map((example, index) => (
                  <div key={index} className="border-l-4 border-orange-500 pl-6">
                    <h3 className="font-bold text-lg text-gray-900">{example.company}:</h3>
                    <p className="text-gray-700">{example.insight}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Why EQ Tests Are Crucial */}
          <Card className="mb-12">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-6">
              <h2 className="text-2xl font-bold mb-4">🎯 Why EQ Tests Are Crucial</h2>
            </div>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-6">Hiring for EQ helps organizations:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {eqBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-cyan-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* The Human Edge */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🌍 The Human Edge in an AI World</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              AI can <strong>out-process</strong>, <strong>out-calculate</strong>, and <strong>out-learn</strong> us —<br />
              But only humans can <strong className="text-purple-600">feel</strong>, <strong className="text-purple-600">connect</strong>, and <strong className="text-purple-600">lead</strong> with empathy.
            </p>
            <blockquote className="text-2xl italic text-gray-700 border-l-4 border-purple-500 pl-6 inline-block">
              "Emotional Intelligence is not soft — it's the <strong className="text-purple-600">new superpower</strong>."
            </blockquote>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Test Your EQ?
            </h2>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              Discover your emotional intelligence level with our comprehensive AI-powered assessment. 
              Build the skills that matter most in the age of AI.
            </p>
            <Button size="lg" className="px-8 py-4 text-lg bg-purple-600 hover:bg-purple-700" asChild>
              <Link to="/eq-assessment">Start Your EQ Assessment</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WhyEQTest;
