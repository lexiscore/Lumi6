
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    title: 'Select your test',
    description: 'Choose the language and specific test type (general proficiency, speaking, business language, etc.) you want to take.',
    color: 'bg-cefr-a1',
    number: '1'
  },
  {
    title: 'Complete the assessment',
    description: 'Take the interactive test that evaluates your reading, writing, listening, and speaking skills based on CEFR standards.',
    color: 'bg-cefr-b1',
    number: '2'
  },
  {
    title: 'Receive detailed results',
    description: 'Get a comprehensive breakdown of your performance across all language skills with specific CEFR level indicators.',
    color: 'bg-cefr-c1',
    number: '3'
  },
  {
    title: 'Get your certification',
    description: 'Download your official CEFR-aligned digital certificate to share with employers or educational institutions.',
    color: 'bg-cefr-c2',
    number: '4'
  }
];

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Simple Process</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How CEFR FluentHub Works
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform makes language assessment straightforward, accurate, and insightful with these simple steps.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <Card key={step.number} className="overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className={`${step.color} p-4 text-white`}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <span className="text-xl font-bold opacity-80">{step.number}</span>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            <div className="rounded-md bg-blue-50 p-8 max-w-3xl">
              <h3 className="text-xl font-semibold text-blue-800">Common European Framework of Reference (CEFR)</h3>
              <p className="mt-2 text-blue-600">
                Our tests follow the internationally recognized CEFR scale, from A1 (beginner) to C2 (mastery), 
                providing a clear and standardized way to measure language proficiency across all skills.
              </p>
              <div className="mt-4 grid grid-cols-3 md:grid-cols-6 gap-2 text-center">
                {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map((level) => (
                  <div 
                    key={level} 
                    className={`rounded-md p-2 font-semibold bg-cefr-${level.toLowerCase()} bg-opacity-20 border border-cefr-${level.toLowerCase()} text-gray-800`}
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
