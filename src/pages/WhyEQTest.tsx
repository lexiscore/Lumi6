
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Brain, Heart, Users, TrendingUp, CheckCircle, XCircle, Star, Award, Target, Shield, Zap } from "lucide-react";
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

  const eqComponents = [
    {
      title: "Self-Awareness",
      description: "Understanding your emotions, strengths, and triggers",
      icon: Brain,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Self-Management", 
      description: "Controlling reactions and adapting to change",
      icon: Shield,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Social Awareness",
      description: "Reading others' emotions and organizational dynamics",
      icon: Users,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Relationship Management",
      description: "Influencing, inspiring, and resolving conflicts",
      icon: Heart,
      color: "from-pink-500 to-pink-600"
    }
  ];

  const renderCapabilityIcon = (value: boolean | string) => {
    if (value === "high") return <span className="text-green-600 font-bold">✅✅✅</span>;
    if (value === true) return <span className="text-green-600">✅</span>;
    if (value === "medium") return <span className="text-yellow-600">⚠️</span>;
    return <span className="text-red-600">❌</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-purple-50">
      <Navbar />
      
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          {/* Header */}
          <div className="mb-12 sm:mb-16">
            <Button variant="ghost" asChild className="mb-6 sm:mb-8">
              <Link to="/" className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors">
                <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Back to Home</span>
              </Link>
            </Button>
            
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center rounded-full bg-purple-100/80 backdrop-blur-sm border border-purple-200 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-purple-700 mb-6 sm:mb-8 shadow-subtle">
                <Brain className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Emotional Intelligence
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 sm:mb-8 leading-tight font-display">
                Why EQ is the
                <span className="block bg-gradient-purple bg-clip-text text-transparent">Ultimate Skill</span>
                <span className="block text-neutral-900">in the AI Age</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed font-normal">
                As AI redefines work, creativity, and communication, the most <strong className="text-purple-600">human trait</strong> becomes the most valuable skill.
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12 sm:mb-16">
            <p className="text-neutral-700 leading-relaxed mb-6 text-base sm:text-lg">
              Artificial intelligence continues to redefine work, creativity, and communication. Tasks once reserved for highly skilled professionals — analyzing data, writing content, solving logic problems — are now being done faster, cheaper, and more efficiently by machines.
            </p>
            <p className="text-neutral-700 leading-relaxed mb-4 text-base sm:text-lg">
              <strong>So what does that mean for human potential?</strong>
            </p>
            <p className="text-neutral-700 leading-relaxed mb-8 text-base sm:text-lg">
              Ironically, it's the most <em>human</em> trait of all — <strong className="text-purple-600">Emotional Intelligence (EQ)</strong> — that's becoming the most valuable skill in the workplace.
            </p>
          </div>

          {/* What AI Can Do */}
          <Card className="mb-12 sm:mb-16 overflow-hidden border-0 shadow-medium">
            <div className={`bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 sm:p-8`}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center gap-3 mb-4">
                <Brain size={24} className="sm:w-7 sm:h-7" />
                🤖 What AI Can Do Now
              </h2>
            </div>
            <CardContent className="p-6 sm:p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <ul className="space-y-4">
                    {aiCapabilities.map((capability, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="text-blue-500 mt-1 flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
                        <span className="text-neutral-700 text-sm sm:text-base">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 w-full max-w-md">
                    <div className="text-center">
                      <div className="text-4xl sm:text-6xl mb-4">🚀</div>
                      <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-2">AI Capabilities</h3>
                      <p className="text-sm sm:text-base text-neutral-600">Processing, analyzing, and generating at unprecedented speeds</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What AI Can't Do */}
          <Card className="mb-12 sm:mb-16 border-0 shadow-medium">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center gap-3 mb-4">
                <Heart size={24} className="sm:w-7 sm:h-7" />
                💡 What AI Can't Do (Yet)
              </h2>
            </div>
            <CardContent className="p-6 sm:p-8">
              <div className="grid gap-4 sm:gap-6">
                {humanTraits.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 sm:p-6 bg-neutral-50 rounded-xl border border-neutral-200">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                      </div>
                      <span className="font-semibold text-neutral-900 text-sm sm:text-base">{item.trait}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <XCircle className="text-red-500 w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-neutral-600 text-sm sm:text-base">{item.aiCapability}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* EQ Components */}
          <div className="mb-12 sm:mb-16">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-display">
                The Four Pillars of EQ
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg max-w-3xl mx-auto">
                Emotional Intelligence consists of four core competencies that define human leadership
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {eqComponents.map((component, index) => (
                <Card key={index} className="border-0 shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1">
                  <div className={`bg-gradient-to-r ${component.color} p-6 sm:p-8 text-white`}>
                    <component.icon className="w-8 h-8 sm:w-10 sm:h-10 mb-4" />
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{component.title}</h3>
                    <p className="text-sm sm:text-base opacity-90">{component.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* EQ vs IQ vs AI Comparison */}
          <Card className="mb-12 sm:mb-16 border-0 shadow-medium">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">🧠 EQ vs IQ vs AI</h2>
            </div>
            <CardContent className="p-6 sm:p-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-neutral-50">
                      <th className="text-left p-4 border border-neutral-200 font-semibold text-sm sm:text-base">Attribute</th>
                      <th className="text-center p-4 border border-neutral-200 font-semibold text-sm sm:text-base">IQ</th>
                      <th className="text-center p-4 border border-neutral-200 font-semibold text-sm sm:text-base">AI</th>
                      <th className="text-center p-4 border border-neutral-200 font-semibold text-sm sm:text-base">EQ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((item, index) => (
                      <tr key={index} className="hover:bg-neutral-50 transition-colors">
                        <td className="p-4 border border-neutral-200 font-medium text-sm sm:text-base">{item.attribute}</td>
                        <td className="p-4 border border-neutral-200 text-center">{renderCapabilityIcon(item.iq)}</td>
                        <td className="p-4 border border-neutral-200 text-center">{renderCapabilityIcon(item.ai)}</td>
                        <td className="p-4 border border-neutral-200 text-center">{renderCapabilityIcon(item.eq)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Companies Shifting */}
          <Card className="mb-12 sm:mb-16 border-0 shadow-medium">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center gap-3 mb-4">
                <Users size={24} className="sm:w-7 sm:h-7" />
                📊 Companies Are Already Shifting
              </h2>
            </div>
            <CardContent className="p-6 sm:p-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {companyExamples.map((example, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <Star className="w-5 h-5 text-orange-600" />
                      </div>
                      <h3 className="font-bold text-lg text-neutral-900">{example.company}</h3>
                    </div>
                    <p className="text-neutral-700 text-sm sm:text-base">{example.insight}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Why EQ Tests Are Crucial */}
          <Card className="mb-12 sm:mb-16 border-0 shadow-medium">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">🎯 Why EQ Tests Are Crucial</h2>
            </div>
            <CardContent className="p-6 sm:p-8">
              <p className="text-neutral-700 mb-6 text-base sm:text-lg">Hiring for EQ helps organizations:</p>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {eqBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-cyan-50 rounded-xl border border-cyan-200">
                    <CheckCircle className="text-cyan-500 mt-1 flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="text-neutral-700 text-sm sm:text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* The Human Edge */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 sm:p-8 mb-12 sm:mb-16 text-center border border-purple-200">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-6 font-display">🌍 The Human Edge in an AI World</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 mb-6 leading-relaxed">
              AI can <strong>out-process</strong>, <strong>out-calculate</strong>, and <strong>out-learn</strong> us —<br />
              But only humans can <strong className="text-purple-600">feel</strong>, <strong className="text-purple-600">connect</strong>, and <strong className="text-purple-600">lead</strong> with empathy.
            </p>
            <blockquote className="text-xl sm:text-2xl italic text-neutral-700 border-l-4 border-purple-500 pl-6 inline-block">
              "Emotional Intelligence is not soft — it's the <strong className="text-purple-600">new superpower</strong>."
            </blockquote>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white/90 backdrop-blur-sm border border-neutral-200 rounded-2xl p-6 sm:p-8 shadow-large">
            <div className="inline-flex items-center rounded-full bg-purple-100/80 backdrop-blur-sm border border-purple-200 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-purple-700 mb-6 shadow-subtle">
              <Target className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Ready to Discover Your EQ?
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-display">
              Start Your EQ Assessment
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover your emotional intelligence level with our comprehensive AI-powered assessment. 
              Build the skills that matter most in the age of AI.
            </p>
            <Button size="lg" className="px-8 py-4 text-lg bg-gradient-purple hover:shadow-purple-glow transition-all duration-300 font-semibold rounded-xl text-white border-0 group" asChild>
              <Link to="/eq-assessment" className="flex items-center gap-2">
                <Zap className="w-5 h-5 group-hover:animate-pulse" />
                Start Your EQ Assessment
                <Award className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WhyEQTest;
