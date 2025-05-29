
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // In a real app, this would be replaced with actual authentication
      // For demo, we'll just simulate a successful login
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Login successful",
        description: "Welcome to the admin dashboard",
      });
      
      // Navigate to admin dashboard
      navigate("/admin-dashboard");
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="flex justify-center items-center mb-2">
            <img 
              src="/lovable-uploads/6cc03eb9-5444-4785-9318-f149513e03c4.png" 
              alt="Lumi6 Logo" 
              className="w-12 h-12 mr-3"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Lumi6</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold text-gray-900">Admin Login</h2>
          <p className="mt-2 text-base text-gray-600">
            Enter your credentials to access the admin dashboard
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Enterprise Admin</CardTitle>
            <CardDescription className="text-base">
              Sign in to your account to manage language tests
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@company.com"
                  className="text-base"
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-base">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-base"
                  required 
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button 
                type="submit" 
                className="w-full text-base" 
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
              <div className="mt-4 text-center">
                <p className="text-base text-gray-600">
                  Don't have an account?{" "}
                  <Button variant="link" className="p-0 text-base" onClick={() => navigate("/admin-signup")}>
                    Sign up
                  </Button>
                </p>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
