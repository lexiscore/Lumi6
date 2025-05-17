
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to certify your language proficiency?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
            Join thousands of language learners and professionals who trust LexiScore for accurate, comprehensive language assessment.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" variant="secondary" className="bg-white text-blue-700" asChild>
              <Link to="/sign-up">Create Free Account</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700" asChild>
              <Link to="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
