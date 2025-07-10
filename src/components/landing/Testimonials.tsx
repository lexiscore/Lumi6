import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    text: "The LexiScore platform helped me accurately assess my Spanish level before moving to Madrid. The detailed feedback on my speaking skills was especially valuable.",
    author: "Sarah Johnson",
    role: "Marketing Professional",
    avatar: "SJ",
    rating: 5
  },
  {
    text: "As a language school director, I've found this platform invaluable for placing new students in appropriate class levels. The alignment with CEFR standards is spot-on.",
    author: "Dr. Michael Chen",
    role: "Language School Director",
    avatar: "MC",
    rating: 5
  },
  {
    text: "The certification I received helped me secure my dream job at an international company. The speaking test was particularly thorough and the feedback very constructive.",
    author: "Elena Petrova",
    role: "International Business Analyst",
    avatar: "EP",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <div className="bg-background py-32 sm:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-4xl lg:text-center">
          <div className="inline-flex items-center rounded-full glass-card px-8 py-4 text-sm font-semibold text-foreground mb-12 glow-effect">
            Testimonials
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-gradient mb-8">
            Trusted by language learners worldwide
          </h2>
          <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
            See what our users have to say about their experience with Lumi6.
          </p>
        </div>
        
        <div className="mx-auto mt-24 grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group glass-card hover:scale-105 hover:glow-effect transition-all duration-500 border-0 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-10 relative">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-primary fill-current glow-effect" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground italic mb-10 text-xl leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <Avatar className="h-16 w-16 mr-6 ring-2 ring-primary/50 glow-effect">
                    <AvatarFallback className="brand-gradient text-background font-bold text-lg">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-foreground text-xl mb-1">{testimonial.author}</div>
                    <div className="text-muted-foreground text-lg">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
