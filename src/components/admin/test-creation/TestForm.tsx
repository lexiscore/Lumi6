
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

interface TestFormProps {
  candidateEmail: string;
  setCandidateEmail: (email: string) => void;
  handleTestGeneration: () => void;
  loading: boolean;
}

export function TestForm({ candidateEmail, setCandidateEmail, handleTestGeneration, loading }: TestFormProps) {
  return (
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
  );
}
