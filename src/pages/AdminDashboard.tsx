
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Mic, FilePlus } from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleCreateTest = (testType: string) => {
    navigate(`/admin/create-test/${testType}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="flex-1">
        <AdminHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        
        <main className="p-6 sm:p-10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome to the LexiScore admin dashboard</p>
          </div>
          
          <Tabs defaultValue="create-test" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="create-test">Create Test</TabsTrigger>
              <TabsTrigger value="test-library">Test Library</TabsTrigger>
              <TabsTrigger value="results">Results</TabsTrigger>
            </TabsList>
            
            <TabsContent value="create-test" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <FileText className="h-8 w-8 mb-2 text-blue-600" />
                    <CardTitle>Proficiency Test</CardTitle>
                    <CardDescription>
                      Create tests for grammar, comprehension, reading and listening
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      Evaluate language proficiency with comprehensive assessments across multiple skill areas.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full" 
                      onClick={() => handleCreateTest("proficiency")}
                    >
                      Create Test
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Mic className="h-8 w-8 mb-2 text-blue-600" />
                    <CardTitle>Speaking Assessment</CardTitle>
                    <CardDescription>
                      Create speaking-only assessments for oral proficiency
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      Evaluate pronunciation, fluency, coherence and overall speaking ability.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full" 
                      onClick={() => handleCreateTest("speaking")}
                    >
                      Create Test
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <FilePlus className="h-8 w-8 mb-2 text-blue-600" />
                    <CardTitle>Complete Assessment</CardTitle>
                    <CardDescription>
                      Create comprehensive tests combining proficiency and speaking
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      Full language assessment covering all skills including speaking, listening, reading, and grammar.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full" 
                      onClick={() => handleCreateTest("complete")}
                    >
                      Create Test
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="test-library">
              <Card>
                <CardHeader>
                  <CardTitle>Your Test Library</CardTitle>
                  <CardDescription>
                    View and manage all your created tests
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center py-8 text-gray-500">
                    You haven't created any tests yet. Create your first test to get started!
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="results">
              <Card>
                <CardHeader>
                  <CardTitle>Test Results</CardTitle>
                  <CardDescription>
                    Review candidate performance and test outcomes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center py-8 text-gray-500">
                    No test results available yet. Results will appear here once candidates complete tests.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
