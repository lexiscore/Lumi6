
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, SendIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface TestCreationSuccessProps {
  testLink: string;
  candidateEmail: string;
  copyLinkToClipboard: () => void;
  sendEmailToCandidate: () => void;
}

export function TestCreationSuccess({ 
  testLink, 
  candidateEmail, 
  copyLinkToClipboard, 
  sendEmailToCandidate 
}: TestCreationSuccessProps) {
  const navigate = useNavigate();
  
  return (
    <Card>
      <CardHeader className="bg-green-50 border-b">
        <div className="flex items-center gap-2">
          <div className="bg-green-100 p-2 rounded-full">
            <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <CardTitle>Test Created Successfully!</CardTitle>
            <CardDescription className="text-green-700">
              Share this link with your candidate
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div>
          <h3 className="font-medium mb-2">Test Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Test Name</p>
              <p className="font-medium">English Speaking Test</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Candidate</p>
              <p className="font-medium">{candidateEmail}</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label>Test Link (Valid for 7 days)</Label>
          <div className="flex gap-2">
            <Input value={testLink} readOnly className="bg-gray-50" />
            <Button variant="outline" size="icon" onClick={copyLinkToClipboard}>
              <Copy size={16} />
            </Button>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="emailMessage">Email Message (Optional)</Label>
          <Textarea 
            id="emailMessage"
            placeholder="Add a personalized message for the candidate"
            className="h-24"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-3 justify-end">
        <Button 
          variant="outline" 
          onClick={() => navigate("/admin-dashboard")}
        >
          Back to Dashboard
        </Button>
        <Button
          onClick={sendEmailToCandidate}
          className="gap-2"
        >
          <SendIcon size={16} />
          Send Email to Candidate
        </Button>
      </CardFooter>
    </Card>
  );
}
