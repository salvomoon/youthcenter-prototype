import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  Calendar, 
  BookOpen, 
  Target, 
  Zap,
  Star,
  TrendingUp,
  Users
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Dashboard = () => {
  const { t } = useLanguage();
  
  const userStats = {
    name: "Marco",
    level: 12,
    points: 2450,
    nextLevelPoints: 2800,
    pingPongLevel: 8,
    calcettoLevel: 6,
    activitiesThisWeek: 3,
    studyHours: 12
  };

  const recentActivities = [
    { type: "study", description: "Spazio compiti completato", points: 50, time: "2 ore fa" },
    { type: "pingpong", description: "Partita ping pong vinta", points: 75, time: "1 giorno fa" },
    { type: "event", description: "Partecipazione torneo", points: 100, time: "2 giorni fa" },
  ];

  const quickActions = [
    { title: t("bookStudySpace"), icon: BookOpen, path: "/booking", color: "bg-primary" },
    { title: t("viewCalendar"), icon: Calendar, path: "/calendar", color: "bg-success" },
    { title: t("scanQR"), icon: Target, path: "/qr-scanner", color: "bg-warning" },
    { title: t("leaderboards"), icon: Trophy, path: "/leaderboard", color: "bg-accent" },
  ];

  const progressPercentage = ((userStats.points - (userStats.nextLevelPoints - 350)) / 350) * 100;

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Welcome Section - Enhanced following Refactoring UI principles */}
      <div className="bg-gradient-primary rounded-xl p-8 text-white shadow-elegant">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-3">{t("welcome")} {userStats.name}! 👋</h1>
            <p className="text-xl opacity-90">{t("welcomeSubtitle")}</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{t("level")} {userStats.level}</div>
            <div className="text-lg opacity-80">{userStats.points} {t("points")}</div>
          </div>
        </div>
        
        {/* Progress Bar - Improved visual hierarchy */}
        <div className="mt-6">
          <div className="flex justify-between text-sm mb-2 font-medium">
            <span>{t("progressToLevel")} {userStats.level + 1}</span>
            <span>{userStats.nextLevelPoints - userStats.points} {t("pointsMissing")}</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3">
            <div 
              className="bg-white rounded-full h-3 transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Quick Actions - Enhanced with better spacing and visual hierarchy */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Link key={index} to={action.path} className="group">
              <Card className="hover:scale-105 hover:shadow-elegant transition-all duration-300 cursor-pointer border-0 shadow-card">
                <CardContent className="p-6 text-center">
                  <div className={`${action.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">{action.title}</p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Main Content Grid - Better visual hierarchy */}
      <div className="grid lg:grid-cols-3 gap-8">
        <Card className="shadow-card border-0">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-lg">
              <Calendar className="h-6 w-6 text-primary" />
              {t("upcomingAppointments")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-muted/50 rounded-xl">
                <div>
                  <p className="font-semibold">Studio con Marco</p>
                  <p className="text-sm text-muted-foreground">Oggi, 15:00-17:00</p>
                </div>
                <Badge className="bg-success text-success-foreground">{t("confirmed")}</Badge>
              </div>
              <div className="flex justify-between items-center p-4 bg-muted/50 rounded-xl">
                <div>
                  <p className="font-semibold">Torneo Ping Pong</p>
                  <p className="text-sm text-muted-foreground">Domani, 16:00</p>
                </div>
                <Badge variant="outline">{t("pending")}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-elegant border-0">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-lg">
              <Trophy className="h-6 w-6 text-primary" />
              {t("yourPoints")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-3">{userStats.points}</div>
              <p className="text-muted-foreground font-medium">{t("totalPointsEarned")}</p>
              <div className="mt-6">
                <Progress value={progressPercentage} className="h-3" />
                <p className="text-sm text-muted-foreground mt-3 font-medium">
                  {userStats.nextLevelPoints - userStats.points} {t("pointsToNextLevel")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-success" />
              {t("yourStats")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground font-medium">{t("activitiesWeek")}</span>
              <Badge variant="secondary" className="font-semibold">{userStats.activitiesThisWeek}</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground font-medium">{t("studyHours")}</span>
              <Badge variant="secondary" className="font-semibold">{userStats.studyHours}h</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground font-medium">Ping Pong</span>
              <Badge className="bg-primary font-semibold">Livello {userStats.pingPongLevel}</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground font-medium">Calcetto</span>
              <Badge className="bg-success font-semibold">Livello {userStats.calcettoLevel}</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Secondary Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">

        <Card className="shadow-card border-0">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center gap-3">
              <Zap className="h-6 w-6 text-warning" />
              {t("recentActivities")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-xl">
                <div>
                  <p className="text-sm font-semibold">{activity.description}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
                <Badge variant="outline" className="text-success border-success font-semibold">
                  +{activity.points}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-card border-0">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center gap-3">
              <Star className="h-6 w-6 text-warning" />
              {t("weeklyGoals")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="space-y-3">
              <div className="flex justify-between text-sm font-medium">
                <span>Studia 15 ore</span>
                <span>12/15</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-primary h-3 rounded-full transition-all duration-500" style={{ width: '80%' }}></div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm font-medium">
                <span>5 attività centro</span>
                <span>3/5</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-warning h-3 rounded-full transition-all duration-500" style={{ width: '60%' }}></div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm font-medium">
                <span>Partite giocate</span>
                <span>4/3 ✓</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-success h-3 rounded-full transition-all duration-500" style={{ width: '100%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Community Section - Full width with better visual impact */}
      <Card className="shadow-card border-0 lg:col-span-3">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center gap-3 text-xl">
            <Users className="h-7 w-7 text-primary" />
            {t("centerNews")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-primary pl-6 bg-primary/5 p-4 rounded-r-xl">
              <h4 className="font-bold text-lg mb-2">Torneo di Ping Pong - Iscrizioni Aperte!</h4>
              <p className="text-muted-foreground mb-3">
                Si terrà sabato prossimo. Premi fantastici per i vincitori!
              </p>
              <p className="text-xs text-muted-foreground font-medium">Pubblicato 2 ore fa</p>
            </div>
            
            <div className="border-l-4 border-success pl-6 bg-success/5 p-4 rounded-r-xl">
              <h4 className="font-bold text-lg mb-2">Nuovo orario spazio compiti</h4>
              <p className="text-muted-foreground mb-3">
                Da lunedì il supporto compiti sarà disponibile anche il sabato mattina!
              </p>
              <p className="text-xs text-muted-foreground font-medium">Pubblicato 1 giorno fa</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;