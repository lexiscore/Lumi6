
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useParams } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Mic, Video } from "lucide-react";

// Updated questions with introduction first and remaining scenario-based questions
const questions = [
  "Please introduce yourself.",
  "Look at this picture of a busy city street. Describe what you can see and what might be happening.",
  "Imagine you are planning a trip to another country. Describe where you would go and what activities you would do there.",
  "Look at this picture of a family gathering. Describe the scene and talk about a similar experience you've had.",
  "Discuss a challenging situation you've faced and how you dealt with it."
];

export default function CandidateTest() {
  const { testId } = useParams();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [isPreparing, setIsPreparing] = useState(false);
  const [timer, setTimer] = useState(20); // 20 seconds preparation time
  const [recordingTime, setRecordingTime] = useState(0);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation for demo
    if (email && password) {
      setIsLoggedIn(true);
      toast({
        title: "Login successful",
        description: "Welcome to the English Speaking Test",
      });
    } else {
      toast({
        title: "Login failed",
        description: "Please enter your email and password",
        variant: "destructive",
      });
    }
  };

  const startTest = () => {
    setShowInstructions(false);
  };

  const startPreparation = () => {
    setIsPreparing(true);
    setTimer(20); // Reset to 20 seconds preparation time
    
    // Countdown timer for preparation
    const countdownInterval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          startRecording();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const startRecording = () => {
    setIsPreparing(false);
    setIsRecording(true);
    setRecordingTime(0);
    
    // Simulate recording time
    const recordingInterval = setInterval(() => {
      setRecordingTime((prev) => {
        if (prev >= 60) { // 60 seconds recording time
          clearInterval(recordingInterval);
          handleSubmit();
          return 0;
        }
        return prev + 1;
      });
    }, 1000);
  };

  const handleSubmit = () => {
    setIsRecording(false);
    setRecordingTime(0);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      toast({
        title: "Answer submitted",
        description: "Moving to the next question",
      });
    } else {
      toast({
        title: "Test completed!",
        description: "Thank you for completing the speaking assessment",
      });
      // Would redirect to a completion page in a real implementation
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <Card className="w-full max-w-md p-6">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">Lexi</span>
              <span className="text-2xl font-semibold">Score</span>
            </div>
          </div>
          
          <h1 className="text-xl font-semibold text-center mb-6">English Speaking Test</h1>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            
            <Button type="submit" className="w-full">
              Start Test
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  if (showInstructions) {
    return (
      <div className="min-h-screen bg-white p-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <img src="/placeholder.svg" alt="English Speaking Test" className="w-10 h-10 rounded-full" />
            <h1 className="text-2xl font-bold text-blue-700">English Speaking Test</h1>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl text-blue-700">Take 5 minutes to find your speaking level.</h2>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Ready to start the test?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mic className="text-gray-600 mt-1 flex-shrink-0" />
                  <p>Your audio and video devices should be enabled.</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-1">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <p>You cannot pause, exit and return to finish the test. You need to complete it in one go. If you close the page, you will lose access to the test and will not be able to continue.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">How does the test work?</h3>
              
              <ul className="list-disc space-y-4 pl-6">
                <li>You'll be tested on your speaking skills.</li>
                <li>The assessment includes five (5) questions. The first one is an introduction question.</li>
                <li>For each of the questions, you will have:
                  <ul className="list-disc pl-8 mt-2 space-y-2">
                    <li>20 seconds to read the question and prepare your answer. The recording will start automatically when time is up.</li>
                    <li>60 seconds to record your answer. Your answer will be automatically submitted after this time.</li>
                  </ul>
                </li>
              </ul>
            </div>
            
            <Button onClick={startTest} className="w-full md:w-auto">
              Start the Assessment
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Question area */}
      <div className="flex-1 p-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className={`mb-4 ${currentQuestion === 0 ? "bg-blue-100 text-blue-800 p-2 rounded inline-block" : ""}`}>
            {currentQuestion === 0 ? "Introduction question" : "Question " + currentQuestion}
          </div>
          
          <h2 className="text-xl font-semibold mb-8">
            Read the question and record your answer.
          </h2>
          
          <p className="text-lg mb-8">
            {questions[currentQuestion]}
          </p>
          
          {(currentQuestion === 1 || currentQuestion === 3) && (
            <div className="mb-8 border rounded-md overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Description task" 
                className="w-full object-cover h-80" 
              />
            </div>
          )}
        </div>
      </div>
      
      {/* Right side - Recording area */}
      <div className="flex-1 bg-gray-50 p-8 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center max-w-md mx-auto w-full">
          {/* Video preview area */}
          <div className="w-full aspect-video bg-gray-700 rounded-lg mb-8 relative overflow-hidden">
            {/* This would be a real video preview in a production app */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Video className="h-16 w-16 text-gray-400" />
            </div>
            
            {/* Timer */}
            {(isRecording || isPreparing) && (
              <div className="absolute top-4 right-4 bg-white bg-opacity-80 rounded-full h-16 w-16 flex items-center justify-center">
                <div className="text-xl font-bold text-blue-600">
                  {isPreparing ? timer : recordingTime}
                </div>
              </div>
            )}
          </div>
          
          {/* Action buttons */}
          {!isPreparing && !isRecording ? (
            <Button 
              onClick={startPreparation} 
              size="lg" 
              className="w-full md:w-auto"
            >
              Start preparation (20s)
            </Button>
          ) : isRecording && recordingTime >= 30 ? (
            <Button
              onClick={handleSubmit}
              size="lg"
              className="w-full md:w-auto"
            >
              Submit
            </Button>
          ) : (
            <div className="text-center text-gray-500 text-sm">
              {isPreparing ? 
                `Preparation time: ${timer} seconds remaining` : 
                `Recording: ${recordingTime}/60 seconds`}
            </div>
          )}
          
          <p className="text-center text-sm text-gray-500 mt-4">
            {isPreparing ? 
              "The recording will automatically start when preparation time ends." :
              isRecording ? 
                "The recording will automatically end after 60 seconds." : 
                "Take your time to understand the question before starting."}
          </p>
        </div>
      </div>
    </div>
  );
}
