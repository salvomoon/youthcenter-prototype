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
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { path: "/", label: t("home"), icon: Home },
    { path: "/calendar", label: t("calendar"), icon: Calendar },
    { path: "/booking", label: t("booking"), icon: BookOpen },
    { path: "/leaderboard", label: t("leaderboard"), icon: Trophy },
    { path: "/qr-scanner", label: t("qrScanner"), icon: QrCode },
    { path: "/profile", label: t("profile"), icon: User },
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
      <div className="hidden md:flex w-64 min-h-screen bg-card border-r border-border shadow-card transition-colors duration-300">
        <div className="w-full p-6 flex flex-col">
          <div className="mb-8">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              {t("centerName")}
            </h1>
            <p className="text-sm text-muted-foreground mt-1">{t("centerTagline")}</p>
          </div>
          <NavContent />
          <div className="mt-auto pt-8 space-y-2">
            <div className="flex items-center justify-between">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-card transition-colors duration-300">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {t("centerName")}
          </h1>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-6">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold">{t("menu")}</h2>
                </div>
                <NavContent />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;