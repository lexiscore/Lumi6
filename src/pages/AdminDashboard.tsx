
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, ArrowRight, Link, CheckCircle } from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [candidateEmail, setCandidateEmail] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const handleCreateTest = () => {
    setIsDialogOpen(true);
  };

  const generateTestLink = () => {
    if (!candidateEmail) {
      toast({
        title: "Email Required",
        description: "Please enter candidate email address",
        variant: "destructive",
      });
      return;
    }

    // Generate a random test ID
    const testId = Math.random().toString(36).substring(2, 10);
    
    // Generate a simple password (in a real app, you'd want better security)
    const password = Math.random().toString(36).substring(2, 10);
    
    // Create the full URL
    const baseUrl = window.location.origin;
    const testUrl = `${baseUrl}/test/${testId}`;
    
    setGeneratedLink(testUrl);
    setGeneratedPassword(password);
    
    toast({
      title: "Test Created",
      description: "English Speaking Test has been created successfully",
    });
  };

  const copyLinkToClipboard = () => {
    if (generatedLink) {
      navigator.clipboard.writeText(
        `Test link: ${generatedLink}\nEmail: ${candidateEmail}\nPassword: ${generatedPassword}`
      );
      setIsLinkCopied(true);
      toast({
        title: "Copied!",
        description: "Test details copied to clipboard",
      });
      
      setTimeout(() => {
        setIsLinkCopied(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="flex-1" style={{ marginLeft: sidebarOpen ? "16rem" : "5rem" }}>
        <AdminHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        
        <main className="p-6 sm:p-10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome to the LexiScore admin dashboard</p>
          </div>
          
          <div className="mt-6">
            <Card className="hover:shadow-lg transition-shadow max-w-lg mx-auto">
              <CardHeader className="bg-blue-50 rounded-t-lg border-b border-blue-100">
                <div className="flex items-center">
                  <Mic className="h-10 w-10 mr-4 text-blue-600 p-2 bg-blue-100 rounded-full" />
                  <div>
                    <CardTitle className="text-2xl">Speaking Assessment</CardTitle>
                    <CardDescription className="text-blue-700 mt-1">
                      Create speaking assessments for CEFR-aligned oral proficiency
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-gray-800">Assessment includes:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span>5 questions including introduction and picture descriptions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span>20-second preparation time before each answer</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span>Video recording with 60-second time limits</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span>CEFR-aligned scoring methodology</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="pt-0 flex justify-end">
                <Button 
                  onClick={handleCreateTest}
                  className="gap-2"
                >
                  Create Speaking Test
                  <ArrowRight size={16} />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
      
      {/* Dialog for creating test and generating link */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create English Speaking Test</DialogTitle>
            <DialogDescription>
              Generate a link to send to candidates for the English Speaking Test.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="email">Candidate Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="candidate@example.com"
                value={candidateEmail}
                onChange={(e) => setCandidateEmail(e.target.value)}
              />
            </div>
            
            {generatedLink && (
              <div className="space-y-4 mt-4 p-4 bg-gray-50 rounded-md">
                <div className="space-y-1">
                  <Label className="text-sm text-gray-500">Test Link</Label>
                  <div className="text-sm font-medium break-all">{generatedLink}</div>
                </div>
                
                <div className="space-y-1">
                  <Label className="text-sm text-gray-500">Candidate Credentials</Label>
                  <div className="text-sm">Email: {candidateEmail}</div>
                  <div className="text-sm">Password: {generatedPassword}</div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-2 gap-2" 
                  onClick={copyLinkToClipboard}
                >
                  {isLinkCopied ? (
                    <>
                      <CheckCircle className="h-4 w-4" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Link className="h-4 w-4" />
                      Copy Details
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
          
          <DialogFooter className="flex space-x-2 sm:justify-end">
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            {!generatedLink ? (
              <Button type="submit" onClick={generateTestLink}>
                Generate Test Link
              </Button>
            ) : (
              <Button onClick={() => setIsDialogOpen(false)}>
                Done
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
