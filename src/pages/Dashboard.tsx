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

const Dashboard = () => {
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
    { title: "Prenota Spazio Compiti", icon: BookOpen, path: "/booking", color: "bg-blue-500" },
    { title: "Vedi Calendario", icon: Calendar, path: "/calendar", color: "bg-green-500" },
    { title: "Scansiona QR", icon: Target, path: "/qr-scanner", color: "bg-purple-500" },
    { title: "Classifiche", icon: Trophy, path: "/leaderboard", color: "bg-yellow-500" },
  ];

  const progressPercentage = ((userStats.points - (userStats.nextLevelPoints - 350)) / 350) * 100;

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-6 text-primary-foreground">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Ciao {userStats.name}! 👋</h1>
            <p className="text-lg opacity-90">Benvenuto nel tuo centro giovani digitale</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">Livello {userStats.level}</div>
            <div className="text-sm opacity-80">{userStats.points} punti</div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span>Progresso verso il livello {userStats.level + 1}</span>
            <span>{userStats.nextLevelPoints - userStats.points} punti mancanti</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-white rounded-full h-2 transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Link key={index} to={action.path}>
              <Card className="hover:scale-105 transition-transform cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className={`${action.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-sm font-medium">{action.title}</p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Prossimi Appuntamenti */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Prossimi Appuntamenti
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">Studio con Marco</p>
                  <p className="text-sm text-muted-foreground">Oggi, 15:00-17:00</p>
                </div>
                <Badge>Confermato</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">Torneo Ping Pong</p>
                  <p className="text-sm text-muted-foreground">Domani, 16:00</p>
                </div>
                <Badge variant="outline">In attesa</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              I tuoi punti
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{userStats.points}</div>
              <p className="text-muted-foreground">Punti totali guadagnati</p>
              <div className="mt-4">
                <Progress value={progressPercentage} className="h-2" />
                <p className="text-sm text-muted-foreground mt-2">
                  {userStats.nextLevelPoints - userStats.points} punti al prossimo livello
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-success" />
              Le tue statistiche
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Attività settimana</span>
              <Badge variant="secondary">{userStats.activitiesThisWeek}</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Ore studio</span>
              <Badge variant="secondary">{userStats.studyHours}h</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Ping Pong</span>
              <Badge className="bg-blue-500">Livello {userStats.pingPongLevel}</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Calcetto</span>
              <Badge className="bg-green-500">Livello {userStats.calcettoLevel}</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Zap className="h-5 w-5 text-warning" />
              Attività recenti
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{activity.description}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
                <Badge variant="outline" className="text-success border-success">
                  +{activity.points}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Star className="h-5 w-5 text-warning" />
              Obiettivi settimanali
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Studia 15 ore</span>
                <span>12/15</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>5 attività centro</span>
                <span>3/5</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Partite giocate</span>
                <span>4/3 ✓</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-success h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Community Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Novità dal centro
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold">Torneo di Ping Pong - Iscrizioni Aperte!</h4>
              <p className="text-sm text-muted-foreground">
                Si terrà sabato prossimo. Premi fantastici per i vincitori!
              </p>
              <p className="text-xs text-muted-foreground mt-1">Pubblicato 2 ore fa</p>
            </div>
            
            <div className="border-l-4 border-accent pl-4">
              <h4 className="font-semibold">Nuovo orario spazio compiti</h4>
              <p className="text-sm text-muted-foreground">
                Da lunedì il supporto compiti sarà disponibile anche il sabato mattina!
              </p>
              <p className="text-xs text-muted-foreground mt-1">Pubblicato 1 giorno fa</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;