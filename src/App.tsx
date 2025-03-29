
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CallHistory from "./pages/CallHistory";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import NumberTracker from "./pages/NumberTracker";
import IndianLaws from "./pages/IndianLaws";
import LawDetail from "./pages/LawDetail";
import GovernmentDocuments from "./pages/GovernmentDocuments";
import DocumentDetail from "./pages/DocumentDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/history" element={<CallHistory />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tracker" element={<NumberTracker />} />
          <Route path="/laws" element={<IndianLaws />} />
          <Route path="/law/:id" element={<LawDetail />} />
          <Route path="/documents" element={<GovernmentDocuments />} />
          <Route path="/document/:id" element={<DocumentDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
