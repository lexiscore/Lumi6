
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { TestCreationLayout } from "@/components/admin/test-creation/TestCreationLayout";
import { TestForm } from "@/components/admin/test-creation/TestForm";
import { TestCreationSuccess } from "@/components/admin/test-creation/TestCreationSuccess";

export default function CreateSpeakingTest() {
  const [candidateEmail, setCandidateEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [testCreated, setTestCreated] = useState(false);
  const [testLink, setTestLink] = useState("");
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
    <TestCreationLayout>
      {!testCreated ? (
        <TestForm 
          candidateEmail={candidateEmail}
          setCandidateEmail={setCandidateEmail}
          handleTestGeneration={handleTestGeneration}
          loading={loading}
        />
      ) : (
        <TestCreationSuccess 
          testLink={testLink}
          candidateEmail={candidateEmail}
          copyLinkToClipboard={copyLinkToClipboard}
          sendEmailToCandidate={sendEmailToCandidate}
        />
      )}
    </TestCreationLayout>
  );
}
