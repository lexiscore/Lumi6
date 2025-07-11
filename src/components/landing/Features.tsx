
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
    color: 'text-blue-600',
    category: 'language'
  },
  {
    name: 'AI-Powered Speaking Tests',
    description: 'Advanced AI technology evaluates speaking proficiency with human-like accuracy, providing detailed feedback on pronunciation and fluency.',
    icon: MessageSquare,
    color: 'text-blue-600',
    category: 'language'
  },
  {
    name: 'EQ Leadership Assessment',
    description: 'Comprehensive EQ evaluation using Daniel Goleman\'s framework for self-awareness, empathy, and social skills.',
    icon: Brain,
    color: 'text-purple-600',
    category: 'ei'
  },
  {
    name: 'Multiple Languages',
    description: 'Test your proficiency in numerous languages including English, Spanish, French, German, Chinese, and many more worldwide.',
    icon: Globe,
    color: 'text-blue-600',
    category: 'language'
  },
  {
    name: 'Team Dynamics Evaluation',
    description: 'Assess empathy, teamwork capabilities, and cross-cultural adaptability for role transitions and collaborative environments.',
    icon: Users,
    color: 'text-purple-600',
    category: 'ei'
  },
  {
    name: 'Instant Results',
    description: 'Get comprehensive assessment results immediately after completing your test, with detailed breakdowns across all evaluation areas.',
    icon: File,
    color: 'text-green-600',
    category: 'both'
  },
  {
    name: 'Official Certification',
    description: 'Receive official CEFR-aligned and EQ framework-based digital certificates that can be shared with institutions and employers.',
    icon: Award,
    color: 'text-green-600',
    category: 'both'
  },
  {
    name: 'Stress & Impulse Control',
    description: 'Evaluate emotional regulation, stress management, and impulse control capabilities for high-pressure work environments.',
    icon: Heart,
    color: 'text-purple-600',
    category: 'ei'
  },
  {
    name: 'Progress Tracking',
    description: 'Monitor your language learning and EQ development with detailed analytics and personalized recommendations.',
    icon: Presentation,
    color: 'text-green-600',
    category: 'both'
  },
];

export default function Features() {
  return (
    <div id="features" className="warm-section py-24 sm:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl lg:text-center">
          <div className="inline-flex items-center rounded-full bg-secondary border border-border px-6 py-3 text-sm font-semibold text-secondary-foreground mb-8">
            Comprehensive Assessment Platform
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-foreground mb-6">
            Everything you need for
            <span className="block text-primary">workforce evaluation</span>
          </h2>
          <p className="text-xl leading-8 text-muted-foreground max-w-2xl mx-auto">
            Our platform offers a complete suite of tools to accurately measure language proficiency and EQ based on internationally-recognized frameworks.
          </p>
        </div>
        <div className="mx-auto mt-20 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
            {features.map((feature, index) => (
              <div key={feature.name} className="group relative p-8 modern-card rounded-2xl border border-border hover:border-primary/50 elegant-shadow hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary border border-border text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300`}>
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-card-foreground">
                    {feature.name}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
