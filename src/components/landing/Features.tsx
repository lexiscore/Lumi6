
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
    <div id="features" className="bg-background py-32 sm:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-4xl lg:text-center">
          <div className="inline-flex items-center rounded-full glass-card px-8 py-4 text-sm font-semibold text-foreground mb-12 glow-effect">
            Comprehensive Assessment Platform
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight text-foreground mb-8">
            Everything you need for
            <span className="block text-gradient">workforce evaluation</span>
          </h2>
          <p className="text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
            Our platform offers a complete suite of tools to accurately measure language proficiency and EQ based on internationally-recognized frameworks.
          </p>
        </div>
        <div className="mx-auto mt-24 max-w-7xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 md:grid-cols-2">
            {features.map((feature, index) => (
              <div key={feature.name} className="group relative glass-card p-10 hover:scale-105 hover:glow-effect transition-all duration-500">
                <div className="relative">
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl brand-gradient glow-effect mb-8`}>
                    <feature.icon className="h-8 w-8 text-background" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-display">
                    {feature.name}
                  </h3>
                  <p className="text-lg leading-7 text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
