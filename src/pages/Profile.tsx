import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { User, Trophy, Star, Calendar, Target, Settings, Crown, Gamepad2, BookOpen, Users, Award, Zap } from "lucide-react";

const Profile = () => {
  const user = {
    name: "Marco Rossi",
    email: "marco.rossi@email.com",
    level: 12,
    points: 2450,
    joinDate: "Settembre 2023",
    rank: 1,
    nextLevelPoints: 2800,
    currentLevelProgress: ((2450 - 2000) / (2800 - 2000)) * 100 // 56%
  };

  const badges = [
    { id: 1, name: "Socio Fondatore", description: "Uno dei primi membri", icon: Crown, earned: true, color: "bg-yellow-500" },
    { id: 2, name: "Re del Ping Pong", description: "10 vittorie consecutive", icon: Trophy, earned: true, color: "bg-blue-500" },
    { id: 3, name: "Mago dei Compiti", description: "50 ore di studio", icon: BookOpen, earned: true, color: "bg-green-500" },
    { id: 4, name: "Socializzatore", description: "20 eventi partecipati", icon: Users, earned: false, color: "bg-purple-500" },
    { id: 5, name: "Campione", description: "Primo in classifica", icon: Award, earned: true, color: "bg-orange-500" },
    { id: 6, name: "Energico", description: "7 giorni consecutivi", icon: Zap, earned: false, color: "bg-red-500" }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-6">
            <Avatar className="w-24 h-24">
              <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                {user.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <p className="text-muted-foreground">{user.email}</p>
              <div className="space-y-3 mt-3">
                <div className="flex items-center gap-4">
                  <Badge className="bg-primary text-lg px-3 py-1">Livello {user.level}</Badge>
                  <Badge variant="outline">#{user.rank} in classifica</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progresso al Livello {user.level + 1}</span>
                    <span className="font-medium">{user.points}/{user.nextLevelPoints} punti</span>
                  </div>
                  <Progress value={user.currentLevelProgress} className="h-3" />
                  <p className="text-xs text-muted-foreground">
                    {user.nextLevelPoints - user.points} punti al prossimo livello
                  </p>
                </div>
              </div>
            </div>
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Impostazioni
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Statistiche
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span>Punti totali</span>
              <span className="font-bold">{user.points.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Membro dal</span>
              <span>{user.joinDate}</span>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Ping Pong</span>
                  <span className="text-sm font-medium">Livello 8</span>
                </div>
                <Progress value={75} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">125/200 punti al Livello 9</p>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Calcetto</span>
                  <span className="text-sm font-medium">Livello 6</span>
                </div>
                <Progress value={40} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">80/150 punti al Livello 7</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Azioni rapide</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <Calendar className="h-4 w-4 mr-2" />
              Visualizza calendario
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Target className="h-4 w-4 mr-2" />
              Prenota spazio compiti
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Star className="h-4 w-4 mr-2" />
              I miei trofei
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Badge e Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className={`relative p-4 rounded-lg border transition-all duration-200 ${
                  badge.earned 
                    ? 'bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:border-primary/50' 
                    : 'bg-muted/50 border-muted opacity-60'
                }`}
              >
                <div className="text-center space-y-2">
                  <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center ${badge.color} ${badge.earned ? '' : 'grayscale'}`}>
                    <badge.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-medium text-sm">{badge.name}</h4>
                  <p className="text-xs text-muted-foreground">{badge.description}</p>
                </div>
                {badge.earned && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Star className="h-3 w-3 text-white fill-white" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Progresso Achievements</h4>
                <p className="text-sm text-muted-foreground">
                  {badges.filter(b => b.earned).length} di {badges.length} completati
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">
                  {Math.round((badges.filter(b => b.earned).length / badges.length) * 100)}%
                </div>
                <Progress 
                  value={(badges.filter(b => b.earned).length / badges.length) * 100} 
                  className="w-20 h-2 mt-1" 
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;