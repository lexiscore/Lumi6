
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, CheckCircle, Sparkles, Shield, Clock, Users } from "lucide-react";
import { useState, useEffect } from "react";

interface TrialFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TrialFormModal({ isOpen, onClose }: TrialFormModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Listen for form submission events from the iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Google Forms sends a message when the form is submitted
      if (event.origin === 'https://docs.google.com' && event.data && event.data.includes('formResponse')) {
        setIsSubmitted(true);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Reset submission state when modal is closed
  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] bg-white border-0 shadow-2xl rounded-2xl overflow-hidden">
        <DialogHeader className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 sm:p-8">
          <DialogTitle className="text-2xl sm:text-3xl font-bold text-center">
            {isSubmitted ? "🎉 Thank You!" : "Start Your Free Trial"}
          </DialogTitle>
        </DialogHeader>
        
        <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Thanks for your interest in Lumi6!
              </h3>
              <p className="text-lg text-neutral-600 mb-6">
                Our team will reach out to you within 24 hours to set up your trial.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-neutral-500 mb-8">
                <Clock className="w-4 h-4" />
                <span>Response within 24 hours</span>
              </div>
              <Button 
                onClick={onClose}
                className="px-8 py-3 bg-gradient-purple hover:shadow-purple-glow text-white font-semibold rounded-xl"
              >
                Close
              </Button>
            </div>
          ) : (
            <>
              {/* Header Section */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center rounded-full bg-purple-50 border border-purple-200 px-4 py-2 text-sm font-medium text-purple-700 mb-4">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Join thousands of businesses using Lumi6
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Get instant access to our enterprise-grade platform
                </h3>
                <p className="text-neutral-600 text-sm">
                  No credit card required • 14-day free trial • Full access
                </p>
              </div>

              {/* Google Form */}
              <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSendQKtE9ngg8AheBMQxdhUF9Teqes-OkxvjGG66d2cJ960Zw/viewform?embedded=true"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="rounded-lg"
                  style={{
                    border: 'none',
                    backgroundColor: 'transparent'
                  }}
                >
                  Loading…
                </iframe>
              </div>

              {/* Footer */}
              <div className="mt-4 text-center">
                <p className="text-xs text-neutral-500 mb-2">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy.
                </p>
                <div className="flex items-center justify-center gap-4 text-xs text-neutral-400">
                  <span className="flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    Secure
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    24h Response
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    No Spam
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
