
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

interface TrialFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TrialFormModal({ isOpen, onClose }: TrialFormModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit to Google Forms with the actual form URL
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSendQKtE9ngg8AheBMQxdhUF9Teqes-OkxvjGG66d2cJ960Zw/formResponse';
    
    const formDataToSubmit = new FormData();
    // These entry IDs would need to be extracted from the actual Google Form
    // For now, we'll open the form in a new tab as a fallback
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSendQKtE9ngg8AheBMQxdhUF9Teqes-OkxvjGG66d2cJ960Zw/viewform?usp=header', '_blank');
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white border border-gray-200 shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 text-center">
            Start Your Enterprise Trial
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        
        <div className="mt-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center rounded-full bg-blue-50 border border-blue-200 px-4 py-2 text-sm font-medium text-blue-700 mb-4">
              🚀 Join thousands of businesses using Lumi6
            </div>
            <p className="text-gray-600">
              Get instant access to our enterprise-grade language assessment platform
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Work Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                Company Name *
              </Label>
              <Input
                id="company"
                name="company"
                type="text"
                required
                value={formData.company}
                onChange={handleInputChange}
                className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your company name"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                Tell us about your needs
              </Label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleInputChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="How many employees need language assessment? Any specific requirements?"
              />
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Enterprise Trial
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              By submitting this form, you agree to our Terms of Service and Privacy Policy.
              We'll contact you within 24 hours to set up your trial.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
