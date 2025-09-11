import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "@/hooks/useAuth";
import ProtectedRoute from "@/components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import Booking from "./pages/Booking";
import Leaderboard from "./pages/Leaderboard";
import QRScanner from "./pages/QRScanner";
import Profile from "./pages/Profile";
import Navigation from "./components/Navigation";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {

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
            <AuthProvider>
              <Routes>
                <Route path="/auth" element={<Auth />} />
                <Route path="/" element={
                  <ProtectedRoute>
                    <div className="flex min-h-screen bg-background transition-colors duration-300">
                      <Navigation />
                      <main className="flex-1 md:ml-0 pt-16 md:pt-0 p-6 md:p-8">
                        <Dashboard />
                      </main>
                    </div>
                  </ProtectedRoute>
                } />
                <Route path="/calendar" element={
                  <ProtectedRoute>
                    <div className="flex min-h-screen bg-background transition-colors duration-300">
                      <Navigation />
                      <main className="flex-1 md:ml-0 pt-16 md:pt-0 p-6 md:p-8">
                        <Calendar />
                      </main>
                    </div>
                  </ProtectedRoute>
                } />
                <Route path="/booking" element={
                  <ProtectedRoute>
                    <div className="flex min-h-screen bg-background transition-colors duration-300">
                      <Navigation />
                      <main className="flex-1 md:ml-0 pt-16 md:pt-0 p-6 md:p-8">
                        <Booking />
                      </main>
                    </div>
                  </ProtectedRoute>
                } />
                <Route path="/leaderboard" element={
                  <ProtectedRoute>
                    <div className="flex min-h-screen bg-background transition-colors duration-300">
                      <Navigation />
                      <main className="flex-1 md:ml-0 pt-16 md:pt-0 p-6 md:p-8">
                        <Leaderboard />
                      </main>
                    </div>
                  </ProtectedRoute>
                } />
                <Route path="/qr-scanner" element={
                  <ProtectedRoute>
                    <div className="flex min-h-screen bg-background transition-colors duration-300">
                      <Navigation />
                      <main className="flex-1 md:ml-0 pt-16 md:pt-0 p-6 md:p-8">
                        <QRScanner />
                      </main>
                    </div>
                  </ProtectedRoute>
                } />
                <Route path="/profile" element={
                  <ProtectedRoute>
                    <div className="flex min-h-screen bg-background transition-colors duration-300">
                      <Navigation />
                      <main className="flex-1 md:ml-0 pt-16 md:pt-0 p-6 md:p-8">
                        <Profile />
                      </main>
                    </div>
                  </ProtectedRoute>
                } />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
  );
};

export default App;
