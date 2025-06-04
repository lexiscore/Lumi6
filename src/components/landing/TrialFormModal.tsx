
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface TrialFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TrialFormModal({ isOpen, onClose }: TrialFormModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] bg-white border border-gray-200 shadow-xl">
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
              Fill out the form below to get instant access to our enterprise-grade language assessment platform
            </p>
          </div>

          <div className="w-full">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSendQKtE9ngg8AheBMQxdhUF9Teqes-OkxvjGG66d2cJ960Zw/viewform?embedded=true"
              width="100%"
              height="400"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-lg border border-gray-200"
            >
              Loading…
            </iframe>
          </div>

          <div className="mt-4 text-center">
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
