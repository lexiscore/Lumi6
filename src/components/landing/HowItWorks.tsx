
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    title: 'Select Assessment',
    description: 'Choose from EQ assessment for emotional intelligence or language proficiency tests based on CEFR standards.',
    color: 'from-purple-500 to-blue-500',
    number: '1'
  },
  {
    title: 'Complete Assessment',
    description: 'Take the AI-powered test with advanced proctoring features including face recognition, audio monitoring, and browser lockdown.',
    color: 'from-blue-500 to-cyan-500',
    number: '2'
  },
  {
    title: 'Detailed Analysis',
    description: 'Receive comprehensive reports with EQ breakdowns (self-awareness, social skills) or CEFR level indicators with speaking analysis.',
    color: 'from-cyan-500 to-blue-500',
    number: '3'
  },
  {
    title: 'Certification & Insights',
    description: 'Download official certificates and access actionable insights for talent development, hiring decisions, and team optimization.',
    color: 'from-blue-500 to-purple-600',
    number: '4'
  }
];

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="bg-gradient-to-br from-slate-50 via-white to-cyan-50 py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-400/10 to-purple-600/10 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl lg:text-center">
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-200 mb-6">
            Simple Process
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent">
            How Lumi6 Works
          </h2>
          <p className="mt-6 text-xl leading-8 text-slate-600">
            Our platform makes EQ and language assessment straightforward, secure, and insightful with these simple steps.
          </p>
        </div>
        
        <div className="mx-auto mt-20 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <Card key={step.number} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <div className={`bg-gradient-to-r ${step.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold">{step.title}</h3>
                      <span className="text-3xl font-bold opacity-80">{step.number}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="pt-6 pb-8 px-6">
                  <p className="text-base leading-relaxed text-slate-600">{step.description}</p>
                </CardContent>
                
                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-slate-300 to-transparent z-10" />
                )}
              </Card>
            ))}
          </div>
          
          <div className="mt-20 space-y-12">
            {/* EQ Assessment Flow */}
            <div className="rounded-2xl bg-gradient-to-r from-purple-50 to-blue-50 p-8 border border-purple-200/50 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🧠</span> EQ Assessment Process
              </h3>
              <p className="text-base leading-relaxed mb-6 text-slate-600">
                Our EQ assessment evaluates four core competencies: self-awareness, self-management, social awareness, and relationship management using validated psychological frameworks.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Self-Awareness', color: 'from-purple-400 to-purple-500', icon: '🔍' },
                  { label: 'Self-Management', color: 'from-purple-500 to-purple-600', icon: '🎯' },
                  { label: 'Social Awareness', color: 'from-blue-500 to-blue-600', icon: '👥' },
                  { label: 'Relationship Management', color: 'from-blue-600 to-blue-700', icon: '🤝' }
                ].map((competency, index) => (
                  <div 
                    key={competency.label} 
                    className={`rounded-xl p-4 text-center text-white bg-gradient-to-r transition-all duration-300 hover:scale-105 shadow-lg ${competency.color}`}
                  >
                    <div className="text-2xl mb-2">{competency.icon}</div>
                    <div className="text-sm font-medium">{competency.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Advanced Proctoring Features */}
            <div className="rounded-2xl bg-gradient-to-r from-slate-50 to-blue-50 p-8 border border-slate-200/50 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🔒</span> Advanced Proctoring Features
              </h3>
              <p className="text-base leading-relaxed mb-6 text-slate-600">
                Ensure assessment integrity with our comprehensive proctoring system that maintains security without compromising user experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="text-xl mb-2">📷</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Face Recognition</h4>
                  <p className="text-sm text-gray-600">Continuous identity verification throughout the assessment</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="text-xl mb-2">🎧</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Audio Monitoring</h4>
                  <p className="text-sm text-gray-600">Detects unusual sounds and potential assistance</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="text-xl mb-2">🖥️</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Browser Lockdown</h4>
                  <p className="text-sm text-gray-600">Prevents tab switching and unauthorized applications</p>
                </div>
              </div>
            </div>

            {/* CEFR Framework */}
            <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 p-8 border border-blue-200/50 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Common European Framework of Reference (CEFR)</h3>
              <p className="text-base leading-relaxed mb-6 text-slate-600">
                Our language tests follow the internationally recognized CEFR scale, from A1 (beginner) to C2 (mastery), 
                providing a clear and standardized way to measure language proficiency across all skills.
              </p>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map((level, index) => (
                  <div 
                    key={level} 
                    className={`rounded-xl p-4 font-bold text-center text-white bg-gradient-to-r transition-all duration-300 hover:scale-105 shadow-lg ${
                      index === 0 ? 'from-blue-400 to-blue-500' :
                      index === 1 ? 'from-blue-500 to-blue-600' :
                      index === 2 ? 'from-cyan-500 to-cyan-600' :
                      index === 3 ? 'from-blue-500 to-cyan-600' :
                      index === 4 ? 'from-blue-600 to-cyan-700' :
                      'from-cyan-600 to-blue-700'
                    }`}
                  >
                    {level}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
