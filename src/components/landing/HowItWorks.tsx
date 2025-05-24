
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    title: 'Select Your Test',
    description: 'Choose the language and specific test type you want to take from our comprehensive assessment options.',
    color: 'from-blue-500 to-cyan-500',
    number: '1'
  },
  {
    title: 'Complete Assessment',
    description: 'Take the interactive AI-powered test that evaluates your speaking skills based on CEFR standards.',
    color: 'from-purple-500 to-pink-500',
    number: '2'
  },
  {
    title: 'Receive Results',
    description: 'Get a comprehensive breakdown of your performance with specific CEFR level indicators instantly.',
    color: 'from-green-500 to-emerald-500',
    number: '3'
  },
  {
    title: 'Get Certified',
    description: 'Download your official CEFR-aligned digital certificate to share with employers or institutions.',
    color: 'from-orange-500 to-red-500',
    number: '4'
  }
];

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-400/10 to-cyan-600/10 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl lg:text-center">
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-200 mb-6">
            Simple Process
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent">
            How LexiScore Works
          </h2>
          <p className="mt-6 text-xl leading-8 text-slate-600 font-light">
            Our platform makes language assessment straightforward, accurate, and insightful with these simple steps.
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
                  <p className="text-slate-600 leading-relaxed font-light">{step.description}</p>
                </CardContent>
                
                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-slate-300 to-transparent z-10" />
                )}
              </Card>
            ))}
          </div>
          
          <div className="mt-20 flex justify-center">
            <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8 max-w-4xl border border-blue-200/50 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Common European Framework of Reference (CEFR)</h3>
              <p className="text-slate-600 leading-relaxed mb-6 font-light">
                Our tests follow the internationally recognized CEFR scale, from A1 (beginner) to C2 (mastery), 
                providing a clear and standardized way to measure language proficiency across all skills.
              </p>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map((level, index) => (
                  <div 
                    key={level} 
                    className={`rounded-xl p-4 font-bold text-center text-white bg-gradient-to-r transition-all duration-300 hover:scale-105 shadow-lg ${
                      index === 0 ? 'from-blue-400 to-blue-500' :
                      index === 1 ? 'from-blue-500 to-blue-600' :
                      index === 2 ? 'from-indigo-500 to-indigo-600' :
                      index === 3 ? 'from-purple-500 to-purple-600' :
                      index === 4 ? 'from-pink-500 to-pink-600' :
                      'from-red-500 to-red-600'
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
