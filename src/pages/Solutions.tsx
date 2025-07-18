import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Briefcase, Repeat, TrendingUp, Building2, Users, BookOpen, HeartHandshake, MessageSquare, Headphones, UserCog } from "lucide-react";

export default function Solutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-x-hidden">
      {/* Animated Gradient Accent (static now) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[220px] bg-gradient-to-r from-purple-400/30 via-blue-400/20 to-pink-400/20 blur-2xl rounded-full z-0" aria-hidden />
      <Navbar />
      <main className="pt-28 pb-16 px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Intro */}
          <section className="text-center mb-8">
            <h1 className="text-4xl font-bold text-neutral-900 mb-3 font-display">Explore Lumi6 Solutions</h1>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">See how our EQ and Language Assessment tools empower every stage of the talent journey and every department.</p>
          </section>

          {/* Use Cases by Talent Journey */}
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Where Lumi6 Makes an Impact</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Hiring */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-purple-100 p-6 flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-6 h-6 text-purple-600" />
                  <span className="font-semibold text-lg">Hiring</span>
                </div>
                <p className="text-neutral-700">Streamline candidate selection with objective language and EQ screening. Identify top talent faster and reduce bias.</p>
                <span className="text-xs text-neutral-500 mt-1">Automated scoring, instant reports, and fairer hiring for all roles.</span>
              </div>
              {/* Crossboarding */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-2">
                  <Repeat className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-lg">Crossboarding</span>
                </div>
                <p className="text-neutral-700">Support internal mobility and role changes by assessing readiness for new responsibilities and communication demands.</p>
                <span className="text-xs text-neutral-500 mt-1">Empower promotions and lateral moves with confidence.</span>
              </div>
              {/* Talent Development */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-green-100 p-6 flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                  <span className="font-semibold text-lg">Talent Development</span>
                </div>
                <p className="text-neutral-700">Track and boost employee growth in communication and emotional skills with ongoing, actionable insights.</p>
                <span className="text-xs text-neutral-500 mt-1">Personalized learning journeys and measurable progress.</span>
              </div>
              {/* Organization Development */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-indigo-100 p-6 flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-6 h-6 text-indigo-600" />
                  <span className="font-semibold text-lg">Organization Development</span>
                </div>
                <p className="text-neutral-700">Drive culture, leadership, and change with data-driven insights into language and emotional intelligence across teams.</p>
                <span className="text-xs text-neutral-500 mt-1">Benchmark teams, identify gaps, and foster growth at scale.</span>
              </div>
            </div>
          </section>

          {/* Solutions by Department */}
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Solutions by Department</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Talent Acquisition */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border border-purple-100 shadow-md p-6">
                <div className="flex items-center gap-2 mb-2"><Users className="w-6 h-6 text-purple-600" /><span className="font-bold text-lg">Talent Acquisition</span></div>
                <p className="text-neutral-700 mb-2 text-sm">Find and hire the right people with strong communication and emotional readiness.</p>
                <ul className="list-disc ml-6 text-neutral-700 text-sm mb-2">
                  <li>Screen candidates for English fluency and soft skills</li>
                  <li>Reduce interview time with automated assessments</li>
                </ul>
                <div className="text-xs text-blue-700 font-medium">Use Case: Recruiters shortlist top applicants for sales roles based on language and EQ scores.</div>
              </div>
              {/* Learning & Development */}
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl border border-blue-100 shadow-md p-6">
                <div className="flex items-center gap-2 mb-2"><BookOpen className="w-6 h-6 text-blue-600" /><span className="font-bold text-lg">Learning & Development</span></div>
                <p className="text-neutral-700 mb-2 text-sm">Empower employees to grow language and emotional skills for better performance and collaboration.</p>
                <ul className="list-disc ml-6 text-neutral-700 text-sm mb-2">
                  <li>Track progress in language and EQ over time</li>
                  <li>Personalize training based on assessment data</li>
                </ul>
                <div className="text-xs text-blue-700 font-medium">Use Case: L&D teams measure training impact with ongoing assessments.</div>
              </div>
              {/* DE&I */}
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl border border-pink-100 shadow-md p-6">
                <div className="flex items-center gap-2 mb-2"><HeartHandshake className="w-6 h-6 text-pink-600" /><span className="font-bold text-lg">Diversity, Equity & Inclusion (DE&I)</span></div>
                <p className="text-neutral-700 mb-2 text-sm">Promote fairness and belonging by objectively measuring communication and emotional skills.</p>
                <ul className="list-disc ml-6 text-neutral-700 text-sm mb-2">
                  <li>Reduce bias in hiring and promotion</li>
                  <li>Support inclusive leadership development</li>
                </ul>
                <div className="text-xs text-blue-700 font-medium">Use Case: DE&I teams use Lumi6 to ensure fair, data-driven talent decisions.</div>
              </div>
              {/* Internal Communications */}
              <div className="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-2xl border border-yellow-100 shadow-md p-6">
                <div className="flex items-center gap-2 mb-2"><MessageSquare className="w-6 h-6 text-yellow-600" /><span className="font-bold text-lg">Internal Communications</span></div>
                <p className="text-neutral-700 mb-2 text-sm">Enhance team collaboration and clarity with strong language and EQ skills.</p>
                <ul className="list-disc ml-6 text-neutral-700 text-sm mb-2">
                  <li>Identify communication gaps across teams</li>
                  <li>Support change management with better messaging</li>
                </ul>
                <div className="text-xs text-blue-700 font-medium">Use Case: Comms teams use Lumi6 to improve internal messaging and engagement.</div>
              </div>
              {/* Customer Success */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl border border-green-100 shadow-md p-6">
                <div className="flex items-center gap-2 mb-2"><Headphones className="w-6 h-6 text-green-600" /><span className="font-bold text-lg">Customer Success</span></div>
                <p className="text-neutral-700 mb-2 text-sm">Deliver better client experiences with teams skilled in empathy and clear communication.</p>
                <ul className="list-disc ml-6 text-neutral-700 text-sm mb-2">
                  <li>Assess and coach support teams on language and EQ</li>
                  <li>Boost customer satisfaction and loyalty</li>
                </ul>
                <div className="text-xs text-blue-700 font-medium">Use Case: Customer Success teams use Lumi6 to train and benchmark support staff.</div>
              </div>
              {/* People Strategy / HR */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-indigo-100 shadow-md p-6">
                <div className="flex items-center gap-2 mb-2"><UserCog className="w-6 h-6 text-indigo-600" /><span className="font-bold text-lg">People Strategy / HR</span></div>
                <p className="text-neutral-700 mb-2 text-sm">Align talent strategy with business goals using data on language and emotional intelligence.</p>
                <ul className="list-disc ml-6 text-neutral-700 text-sm mb-2">
                  <li>Benchmark teams and leaders for succession planning</li>
                  <li>Inform HR policy with real assessment data</li>
                </ul>
                <div className="text-xs text-blue-700 font-medium">Use Case: HR teams use Lumi6 to guide talent reviews and planning.</div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center pt-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Ready to transform your organization?</h3>
            <p className="text-lg text-neutral-700 mb-6">Start your free trial or talk to our team to see Lumi6 in action.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform">Start Free Trial</a>
              <a href="#contact" className="bg-white border border-purple-200 text-purple-700 font-semibold px-8 py-3 rounded-xl shadow hover:bg-purple-50 transition">Contact Sales</a>
            </div>
          </section>
        </div>
        {/* Floating CTA for mobile */}
        <a href="#" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform block sm:hidden">Start Free Trial</a>
      </main>
      <Footer />
    </div>
  );
} 