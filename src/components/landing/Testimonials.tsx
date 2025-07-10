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
    <div className="bg-stone-50 py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-stone-25 to-cyan-50/30" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl lg:text-center">
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-200 mb-6">
            Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent">
            Trusted by language learners worldwide
          </h2>
          <p className="mt-6 text-xl leading-8 text-slate-600">
            See what our users have to say about their experience with LexiScore.
          </p>
        </div>
        
        <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group bg-stone-25/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-8 relative">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 italic mb-8 text-lg leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4 ring-2 ring-blue-100">
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-slate-900 text-lg">{testimonial.author}</div>
                    <div className="text-slate-600">{testimonial.role}</div>
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
