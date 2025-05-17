
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { useToast } from "@/components/ui/use-toast";
import { Copy, SendIcon } from "lucide-react";

export default function CreateSpeakingTest() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Set default to false so sidebar is collapsed
  const [candidateEmail, setCandidateEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [testCreated, setTestCreated] = useState(false);
  const [testLink, setTestLink] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  // Updated questions format with picture/scenario based questions
  const speakingQuestions = [
    "Please introduce yourself.", // First question always an introduction
    "Look at this picture of a busy city street. Describe what you can see and what might be happening.",
    "Imagine you are planning a trip to another country. Describe where you would go and what activities you would do there.",
    "Look at this picture of a family gathering. Describe the scene and talk about a similar experience you've had.",
    "Discuss a challenging situation you've faced and how you dealt with it."
  ];

  const handleTestGeneration = () => {
    if (!candidateEmail) {
      toast({
        title: "Missing information",
        description: "Please enter the candidate email address",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    // Generate a unique test ID
    const testId = `test-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 7)}`;
    
    // This would be an API call in a real implementation
    setTimeout(() => {
      setTestLink(`${window.location.origin}/test/${testId}`);
      setTestCreated(true);
      setLoading(false);

      toast({
        title: "Test created successfully!",
        description: "The test link has been generated.",
      });
    }, 1500);
  };

  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(testLink);
    toast({
      title: "Link copied!",
      description: "Test link copied to clipboard",
    });
  };

  const sendEmailToCandidate = () => {
    // This would be an actual email sending API call in a real implementation
    toast({
      title: "Email sent!",
      description: `Test invitation sent to ${candidateEmail}`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="flex-1 ml-[var(--sidebar-width)]" style={{ marginLeft: sidebarOpen ? "var(--sidebar-width)" : "var(--sidebar-width-icon)" }}>
        <AdminHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        
        <main className="p-6 sm:p-10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Create Speaking Assessment</h1>
            <p className="text-gray-600 mt-1">Generate a new English Speaking Test for candidates</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {!testCreated ? (
              <Card>
                <CardHeader>
                  <CardTitle>Test Details</CardTitle>
                  <CardDescription>
                    Fill in the candidate's email to create a new speaking assessment
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="testName">Test Name</Label>
                    <Input 
                      id="testName" 
                      value="English Speaking Test"
                      readOnly
                      className="bg-gray-50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="candidateEmail">Candidate Email</Label>
                    <Input 
                      id="candidateEmail" 
                      type="email"
                      placeholder="candidate@example.com"
                      value={candidateEmail}
                      onChange={(e) => setCandidateEmail(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Questions Format</Label>
                    <div className="border rounded-md p-4 bg-gray-50">
                      <p className="text-sm text-gray-600 mb-2">The assessment will include 5 questions:</p>
                      <ol className="list-decimal pl-4 space-y-3">
                        <li className="text-gray-800">
                          Introduction question
                        </li>
                        <li className="text-gray-800">
                          Picture description
                        </li>
                        <li className="text-gray-800">
                          Scenario-based question
                        </li>
                        <li className="text-gray-800">
                          Another picture description
                        </li>
                        <li className="text-gray-800">
                          Personal experience question
                        </li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button 
                    onClick={handleTestGeneration}
                    disabled={loading}
                  >
                    {loading ? "Generating..." : "Generate Test Link"}
                  </Button>
                </CardFooter>
              </Card>
            ) : (
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
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
