
import { 
  BookOpen, 
  Award, 
  Globe, 
  MessageSquare, 
  File, 
  Presentation,
  Brain,
  Users,
  Heart
} from "lucide-react";

const features = [
  {
    name: 'CEFR Aligned Assessment',
    description: 'Meticulously designed tests that align with all CEFR levels from A1 to C2, ensuring internationally recognized standards and accuracy.',
    icon: BookOpen,
    color: 'text-vibrant-600',
    bgColor: 'bg-vibrant-50',
    borderColor: 'border-vibrant-200',
    category: 'language'
  },
  {
    name: 'AI-Powered Speaking Tests',
    description: 'Advanced AI technology evaluates speaking proficiency with human-like accuracy, providing detailed feedback on pronunciation and fluency.',
    icon: MessageSquare,
    color: 'text-vibrant-600',
    bgColor: 'bg-vibrant-50',
    borderColor: 'border-vibrant-200',
    category: 'language'
  },
  {
    name: 'EQ Leadership Assessment',
    description: 'Comprehensive EQ evaluation using Daniel Goleman\'s framework for self-awareness, empathy, and social skills.',
    icon: Brain,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    category: 'ei'
  },
  {
    name: 'Multiple Languages',
    description: 'Test your proficiency in numerous languages including English, Spanish, French, German, Chinese, and many more worldwide.',
    icon: Globe,
    color: 'text-vibrant-600',
    bgColor: 'bg-vibrant-50',
    borderColor: 'border-vibrant-200',
    category: 'language'
  },
  {
    name: 'Team Dynamics Evaluation',
    description: 'Assess empathy, teamwork capabilities, and cross-cultural adaptability for role transitions and collaborative environments.',
    icon: Users,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    category: 'ei'
  },
  {
    name: 'Instant Results',
    description: 'Get comprehensive assessment results immediately after completing your test, with detailed breakdowns across all evaluation areas.',
    icon: File,
    color: 'text-neutral-600',
    bgColor: 'bg-neutral-50',
    borderColor: 'border-neutral-200',
    category: 'both'
  },
  {
    name: 'Official Certification',
    description: 'Receive official CEFR-aligned and EQ framework-based digital certificates that can be shared with institutions and employers.',
    icon: Award,
    color: 'text-neutral-600',
    bgColor: 'bg-neutral-50',
    borderColor: 'border-neutral-200',
    category: 'both'
  },
  {
    name: 'Stress & Impulse Control',
    description: 'Evaluate emotional regulation, stress management, and impulse control capabilities for high-pressure work environments.',
    icon: Heart,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    category: 'ei'
  },
  {
    name: 'Progress Tracking',
    description: 'Monitor your language learning and EQ development with detailed analytics and personalized recommendations.',
    icon: Presentation,
    color: 'text-neutral-600',
    bgColor: 'bg-neutral-50',
    borderColor: 'border-neutral-200',
    category: 'both'
  },
];

export default function Features() {
  return (
    <div id="features" className="bg-neutral-50 py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-vibrant-100/30 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl lg:text-center">
          <div className="inline-flex items-center rounded-full bg-white/80 backdrop-blur-sm border border-neutral-200 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-neutral-700 mb-6 sm:mb-8 shadow-subtle">
            Comprehensive Assessment Platform
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-neutral-900 mb-4 sm:mb-6 font-display">
            Everything you need for
            <span className="block bg-gradient-purple bg-clip-text text-transparent">workforce evaluation</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-8 text-neutral-600 max-w-2xl mx-auto font-normal px-4">
            Our platform offers a complete suite of tools to accurately measure language proficiency and EQ based on internationally-recognized frameworks.
          </p>
        </div>
        <div className="mx-auto mt-12 sm:mt-16 md:mt-20 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.name} 
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl border border-neutral-200 p-6 sm:p-8 hover:border-neutral-300 hover:shadow-medium transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative">
                  <div className={`inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl ${feature.bgColor} border ${feature.borderColor} ${feature.color} group-hover:shadow-lg transition-all duration-300`}>
                    <feature.icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-neutral-900 font-display">
                    {feature.name}
                  </h3>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-7 text-neutral-600 font-normal">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
