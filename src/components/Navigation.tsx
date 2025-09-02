import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Calendar, 
  BookOpen, 
  Trophy, 
  QrCode, 
  User,
  Menu
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/calendar", label: "Calendario", icon: Calendar },
    { path: "/booking", label: "Spazio Compiti", icon: BookOpen },
    { path: "/leaderboard", label: "Classifiche", icon: Trophy },
    { path: "/qr-scanner", label: "QR Scanner", icon: QrCode },
    { path: "/profile", label: "Profilo", icon: User },
  ];

  const NavContent = () => (
    <nav className="flex flex-col space-y-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        
        return (
          <Link key={item.path} to={item.path}>
            <Button
              variant={isActive ? "default" : "ghost"}
              className="w-full justify-start gap-3 h-12"
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Button>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex w-64 min-h-screen bg-card border-r border-border p-6">
        <div className="w-full">
          <div className="mb-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Centro Giovani
            </h1>
            <p className="text-sm text-muted-foreground mt-1">La tua app di riferimento</p>
          </div>
          <NavContent />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Centro Giovani
          </h1>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-6">
              <div className="mb-6">
                <h2 className="text-lg font-semibold">Menu</h2>
              </div>
              <NavContent />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default Navigation;