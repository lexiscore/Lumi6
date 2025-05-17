
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-8">
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-20 sm:py-24">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                <span className="text-blue-600">CEFR</span>-Based Language Proficiency Testing
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Accurate assessment, detailed feedback, and certification for language learners and professionals worldwide. 
                Test your speaking and proficiency against international standards.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button size="lg" className="px-6">Start Free Trial</Button>
                <Button variant="outline" size="lg" className="px-6">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background design elements */}
      <div className="absolute top-0 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
        <div 
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-cefr-b2 to-cefr-c2 opacity-20" 
          style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}
        />
      </div>
      <div className="absolute left-0 bottom-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
        <div 
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-cefr-a1 to-cefr-b1 opacity-20" 
          style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}
        />
      </div>
    </div>
  );
}
