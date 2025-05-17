
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, ArrowRight } from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { useToast } from "@/components/ui/use-toast";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false); // Default collapsed
  const { toast } = useToast();

  const handleCreateTest = () => {
    navigate("/admin/create-test/speaking");
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
    </div>
  );
}
