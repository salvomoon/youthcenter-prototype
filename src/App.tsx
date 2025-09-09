import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "next-themes";
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import Booking from "./pages/Booking";
import Leaderboard from "./pages/Leaderboard";
import QRScanner from "./pages/QRScanner";
import Profile from "./pages/Profile";
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound";
import OnboardingTour from "./components/OnboardingTour";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [showTour, setShowTour] = useState(false);

  useEffect(() => {
    const hasSeenTour = localStorage.getItem('hasSeenTour');
    if (!hasSeenTour) {
      // Show tour after a short delay to let the app render
      setTimeout(() => setShowTour(true), 1000);
    }
  }, []);

  return (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider 
      attribute="class" 
      defaultTheme="dark" 
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <OnboardingTour>
              <div className="flex min-h-screen bg-background transition-colors duration-300">
                <Navigation />
                <main className="flex-1 md:ml-0 pt-16 md:pt-0 p-6 md:p-8">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                    <Route path="/qr-scanner" element={<QRScanner />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </div>
            </OnboardingTour>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
  );
};

export default App;
