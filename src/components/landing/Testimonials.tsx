
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    text: "The CEFR FluentHub platform helped me accurately assess my Spanish level before moving to Madrid. The detailed feedback on my speaking skills was especially valuable.",
    author: "Sarah Johnson",
    role: "Marketing Professional",
    avatar: "SJ"
  },
  {
    text: "As a language school director, I've found this platform invaluable for placing new students in appropriate class levels. The alignment with CEFR standards is spot-on.",
    author: "Dr. Michael Chen",
    role: "Language School Director",
    avatar: "MC"
  },
  {
    text: "The certification I received helped me secure my dream job at an international company. The speaking test was particularly thorough and the feedback very constructive.",
    author: "Elena Petrova",
    role: "International Business Analyst",
    avatar: "EP"
  }
];

export default function Testimonials() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by language learners worldwide
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See what our users have to say about their experience with CEFR FluentHub.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarFallback className="bg-blue-100 text-blue-800">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
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
