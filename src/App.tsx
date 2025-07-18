
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CEFRGuide from "./pages/CEFRGuide";
import LanguageAssessment from "./pages/LanguageAssessment";
import EQAssessment from "./pages/EQAssessment";
import CustomAssessments from "./pages/CustomAssessments";
import WhyEQTest from "./pages/WhyEQTest";
import Solutions from "./pages/Solutions";

const App = () => {
  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cefr-guide" element={<CEFRGuide />} />
          <Route path="/language-assessment" element={<LanguageAssessment />} />
          <Route path="/eq-assessment" element={<EQAssessment />} />
          <Route path="/custom-assessments" element={<CustomAssessments />} />
          <Route path="/why-eq-test" element={<WhyEQTest />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  );
};

export default App;
