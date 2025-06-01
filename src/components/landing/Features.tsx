
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
    color: 'text-blue-600',
  },
  {
    name: 'AI-Powered Speaking Tests',
    description: 'Advanced AI technology evaluates speaking proficiency with human-like accuracy, providing detailed feedback on pronunciation and fluency.',
    icon: MessageSquare,
    color: 'text-blue-600',
  },
  {
    name: 'Instant Results',
    description: 'Get comprehensive assessment results immediately after completing your test, with detailed breakdowns across all language skills.',
    icon: File,
    color: 'text-blue-600',
  },
  {
    name: 'Multiple Languages',
    description: 'Test your proficiency in numerous languages including English, Spanish, French, German, Chinese, and many more worldwide.',
    icon: Globe,
    color: 'text-blue-600',
  },
  {
    name: 'Official Certification',
    description: 'Receive official CEFR-aligned digital certificates that can be shared with educational institutions and employers globally.',
    icon: Award,
    color: 'text-blue-600',
  },
  {
    name: 'Progress Tracking',
    description: 'Monitor your language learning journey with detailed analytics and personalized recommendations for continuous improvement.',
    icon: Presentation,
    color: 'text-blue-600',
  },
];

export default function Features() {
  return (
    <div id="features" className="bg-white py-24 sm:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl lg:text-center">
          <div className="inline-flex items-center rounded-full bg-blue-50 border border-blue-200 px-6 py-3 text-sm font-semibold text-blue-700 mb-8">
            Comprehensive Testing
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-gray-900 mb-6">
            Everything you need for
            <span className="block text-blue-600">language assessment</span>
          </h2>
          <p className="text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
            Our platform offers a complete suite of tools to accurately measure, certify, and improve your language skills based on the internationally-recognized CEFR framework.
          </p>
        </div>
        <div className="mx-auto mt-20 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
            {features.map((feature, index) => (
              <div key={feature.name} className="group relative p-8 bg-white rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 border border-blue-200 ${feature.color} group-hover:bg-blue-100 transition-colors duration-300`}>
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
