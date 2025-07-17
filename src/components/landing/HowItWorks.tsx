
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    title: 'Select Assessment',
    description: 'Choose from EQ assessment for emotional intelligence or language proficiency tests based on CEFR standards.',
    color: 'from-purple-500 to-purple-600',
    number: '1'
  },
  {
    title: 'Complete Assessment',
    description: 'Take the AI-powered test with advanced proctoring features including face recognition, audio monitoring, and browser lockdown.',
    color: 'from-vibrant-500 to-vibrant-600',
    number: '2'
  },
  {
    title: 'Detailed Analysis',
    description: 'Receive comprehensive reports with EQ breakdowns (self-awareness, social skills) or CEFR level indicators with speaking analysis.',
    color: 'from-neutral-500 to-neutral-600',
    number: '3'
  },
  {
    title: 'Certification & Insights',
    description: 'Download official certificates and access actionable insights for talent development, hiring decisions, and team optimization.',
    color: 'from-purple-600 to-vibrant-600',
    number: '4'
  }
];

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="bg-neutral-50 py-24 sm:py-32 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-vibrant-100/30 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl lg:text-center">
          <div className="inline-flex items-center rounded-full bg-white/80 backdrop-blur-sm border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700 mb-6 shadow-subtle">
            Simple Process
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 font-display">
            How Lumi6 Works
          </h2>
          <p className="mt-6 text-xl leading-8 text-neutral-600 font-normal">
            Our platform makes EQ and language assessment straightforward, secure, and insightful with these simple steps.
          </p>
        </div>
        
        <div className="mx-auto mt-20 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <Card key={step.number} className="group relative overflow-hidden border-0 shadow-medium hover:shadow-large transition-all duration-500 hover:-translate-y-1 bg-white/90 backdrop-blur-sm">
                <div className={`bg-gradient-to-r ${step.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold font-display">{step.title}</h3>
                      <span className="text-3xl font-bold opacity-80">{step.number}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="pt-6 pb-8 px-6">
                  <p className="text-base leading-relaxed text-neutral-600 font-normal">{step.description}</p>
                </CardContent>
                
                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-neutral-300 to-transparent z-10" />
                )}
              </Card>
            ))}
          </div>
          
          <div className="mt-20 space-y-12">
            {/* EQ Assessment Flow */}
            <div className="rounded-2xl bg-white/90 backdrop-blur-sm p-8 border border-neutral-200 shadow-medium">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2 font-display">
                <span className="text-2xl">🧠</span> EQ Assessment Process
              </h3>
              <p className="text-base leading-relaxed mb-6 text-neutral-600 font-normal">
                Our EQ assessment evaluates four core competencies: self-awareness, self-management, social awareness, and relationship management using validated psychological frameworks.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Self-Awareness', color: 'from-purple-400 to-purple-500', icon: '🔍' },
                  { label: 'Self-Management', color: 'from-purple-500 to-purple-600', icon: '🎯' },
                  { label: 'Social Awareness', color: 'from-vibrant-500 to-vibrant-600', icon: '👥' },
                  { label: 'Relationship Management', color: 'from-vibrant-600 to-vibrant-700', icon: '🤝' }
                ].map((competency, index) => (
                  <div 
                    key={competency.label} 
                    className={`rounded-xl p-4 text-center text-white bg-gradient-to-r transition-all duration-300 hover:scale-105 shadow-medium ${competency.color}`}
                  >
                    <div className="text-2xl mb-2">{competency.icon}</div>
                    <div className="text-sm font-medium">{competency.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Advanced Proctoring Features */}
            <div className="rounded-2xl bg-white/90 backdrop-blur-sm p-8 border border-neutral-200 shadow-medium">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2 font-display">
                <span className="text-2xl">🔒</span> Advanced Proctoring Features
              </h3>
              <p className="text-base leading-relaxed mb-6 text-neutral-600 font-normal">
                Ensure assessment integrity with our comprehensive proctoring system that maintains security without compromising user experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-neutral-50 rounded-xl p-6 shadow-subtle border border-neutral-200">
                  <div className="text-2xl mb-3">📷</div>
                  <h4 className="font-semibold text-neutral-900 mb-2 font-display">Face Recognition</h4>
                  <p className="text-sm text-neutral-600 font-normal">Continuous identity verification throughout the assessment</p>
                </div>
                <div className="bg-neutral-50 rounded-xl p-6 shadow-subtle border border-neutral-200">
                  <div className="text-2xl mb-3">🎧</div>
                  <h4 className="font-semibold text-neutral-900 mb-2 font-display">Audio Monitoring</h4>
                  <p className="text-sm text-neutral-600 font-normal">Detects unusual sounds and potential assistance</p>
                </div>
                <div className="bg-neutral-50 rounded-xl p-6 shadow-subtle border border-neutral-200">
                  <div className="text-2xl mb-3">🖥️</div>
                  <h4 className="font-semibold text-neutral-900 mb-2 font-display">Browser Lockdown</h4>
                  <p className="text-sm text-neutral-600 font-normal">Prevents tab switching and unauthorized applications</p>
                </div>
              </div>
            </div>

            {/* CEFR Framework */}
            <div className="rounded-2xl bg-white/90 backdrop-blur-sm p-8 border border-neutral-200 shadow-medium">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4 font-display">Common European Framework of Reference (CEFR)</h3>
              <p className="text-base leading-relaxed mb-6 text-neutral-600 font-normal">
                Our language tests follow the internationally recognized CEFR scale, from A1 (beginner) to C2 (mastery), 
                providing a clear and standardized way to measure language proficiency across all skills.
              </p>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map((level, index) => (
                  <div 
                    key={level} 
                    className={`rounded-xl p-4 font-bold text-center text-white bg-gradient-to-r transition-all duration-300 hover:scale-105 shadow-medium ${
                      index === 0 ? 'from-vibrant-400 to-vibrant-500' :
                      index === 1 ? 'from-vibrant-500 to-vibrant-600' :
                      index === 2 ? 'from-neutral-500 to-neutral-600' :
                      index === 3 ? 'from-vibrant-500 to-neutral-600' :
                      index === 4 ? 'from-vibrant-600 to-neutral-700' :
                      'from-neutral-600 to-vibrant-700'
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
