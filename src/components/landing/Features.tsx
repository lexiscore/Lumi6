
import { 
  BookOpen, 
  Award, 
  Globe, 
  MessageSquare, 
  File, 
  Presentation 
} from "lucide-react";

const features = [
  {
    name: 'CEFR Aligned Assessment',
    description: 'Meticulously designed tests that align with all CEFR levels from A1 to C2, ensuring internationally recognized standards and accuracy.',
    icon: BookOpen,
    color: 'from-emerald-500 to-lime-500',
  },
  {
    name: 'AI-Powered Speaking Tests',
    description: 'Advanced AI technology evaluates speaking proficiency with human-like accuracy, providing detailed feedback on pronunciation and fluency.',
    icon: MessageSquare,
    color: 'from-lime-500 to-green-500',
  },
  {
    name: 'Instant Results',
    description: 'Get comprehensive assessment results immediately after completing your test, with detailed breakdowns across all language skills.',
    icon: File,
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Multiple Languages',
    description: 'Test your proficiency in numerous languages including English, Spanish, French, German, Chinese, and many more worldwide.',
    icon: Globe,
    color: 'from-emerald-500 to-lime-600',
  },
  {
    name: 'Official Certification',
    description: 'Receive official CEFR-aligned digital certificates that can be shared with educational institutions and employers globally.',
    icon: Award,
    color: 'from-lime-500 to-green-600',
  },
  {
    name: 'Progress Tracking',
    description: 'Monitor your language learning journey with detailed analytics and personalized recommendations for continuous improvement.',
    icon: Presentation,
    color: 'from-green-500 to-emerald-600',
  },
];

export default function Features() {
  return (
    <div id="features" className="bg-white py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-emerald-50/30" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl lg:text-center">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-100 to-lime-100 px-4 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200 mb-6">
            Comprehensive Testing
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 bg-gradient-to-r from-slate-900 via-emerald-600 to-lime-600 bg-clip-text text-transparent">
            Everything you need for language assessment
          </h2>
          <p className="mt-6 text-xl leading-8 text-slate-600">
            Our platform offers a complete suite of tools to accurately measure, certify, and improve your language skills based on the internationally-recognized CEFR framework.
          </p>
        </div>
        <div className="mx-auto mt-20 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
            {features.map((feature, index) => (
              <div key={feature.name} className="group relative p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-lime-50/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${feature.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-7 w-7 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors duration-300">
                    {feature.name}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
