import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Trophy, 
  Medal, 
  Star, 
  TrendingUp,
  Target,
  Zap,
  Crown,
  Award
} from "lucide-react";

const Leaderboard = () => {
  const generalLeaderboard = [
    { id: 1, name: "Marco Rossi", points: 2450, level: 12, position: 1, change: 0 },
    { id: 2, name: "Sofia Bianchi", points: 2380, level: 11, position: 2, change: 1 },
    { id: 3, name: "Luca Verdi", points: 2290, level: 11, position: 3, change: -1 },
    { id: 4, name: "Giulia Neri", points: 2150, level: 10, position: 4, change: 2 },
    { id: 5, name: "Alessandro Blu", points: 2050, level: 10, position: 5, change: 0 },
    { id: 6, name: "Martina Rosa", points: 1980, level: 9, position: 6, change: -2 },
    { id: 7, name: "Federico Viola", points: 1850, level: 9, position: 7, change: 1 },
    { id: 8, name: "Camilla Oro", points: 1720, level: 8, position: 8, change: -1 },
  ];

  const pingPongLeaderboard = [
    { id: 1, name: "Luca Verdi", level: 15, wins: 45, losses: 12, winRate: 78.9 },
    { id: 2, name: "Marco Rossi", level: 12, wins: 38, losses: 15, winRate: 71.7 },
    { id: 3, name: "Sofia Bianchi", level: 11, wins: 32, losses: 18, winRate: 64.0 },
    { id: 4, name: "Alessandro Blu", level: 10, wins: 28, losses: 22, winRate: 56.0 },
    { id: 5, name: "Giulia Neri", level: 9, wins: 25, losses: 25, winRate: 50.0 },
  ];

  const calcettoLeaderboard = [
    { id: 1, name: "Alessandro Blu", level: 14, goals: 28, matches: 20, avgGoals: 1.4 },
    { id: 2, name: "Federico Viola", level: 12, goals: 22, matches: 18, avgGoals: 1.2 },
    { id: 3, name: "Marco Rossi", level: 11, goals: 19, matches: 17, avgGoals: 1.1 },
    { id: 4, name: "Luca Verdi", level: 10, goals: 15, matches: 15, avgGoals: 1.0 },
    { id: 5, name: "Martina Rosa", level: 9, goals: 12, matches: 14, avgGoals: 0.9 },
  ];

  const achievements = [
    { title: "Prima vittoria", icon: Trophy, description: "Vinci la tua prima partita", rarity: "common" },
    { title: "Studioso", icon: Star, description: "Completa 10 sessioni di studio", rarity: "common" },
    { title: "Asso del ping pong", icon: Target, description: "Raggiungi livello 10 nel ping pong", rarity: "rare" },
    { title: "Re del calcetto", icon: Crown, description: "Segna 25 gol", rarity: "rare" },
    { title: "Veterano", icon: Medal, description: "100 giorni consecutivi di attività", rarity: "epic" },
    { title: "Leggenda", icon: Award, description: "Raggiungi il livello 20", rarity: "legendary" },
  ];

  const getPositionIcon = (position: number) => {
    switch (position) {
      case 1: return <Crown className="h-5 w-5 text-yellow-500" />;
      case 2: return <Medal className="h-5 w-5 text-gray-400" />;
      case 3: return <Award className="h-5 w-5 text-orange-500" />;
      default: return <span className="text-muted-foreground">#{position}</span>;
    }
  };

  const getChangeIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="h-4 w-4 text-success" />;
    if (change < 0) return <TrendingUp className="h-4 w-4 text-destructive rotate-180" />;
    return <div className="w-4 h-4" />;
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common": return "bg-gray-500";
      case "rare": return "bg-blue-500";
      case "epic": return "bg-purple-500";
      case "legendary": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  const getRarityText = (rarity: string) => {
    switch (rarity) {
      case "common": return "Comune";
      case "rare": return "Raro";
      case "epic": return "Epico";
      case "legendary": return "Leggendario";
      default: return rarity;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Classifiche</h1>
        <p className="text-muted-foreground">Vedi come ti posizioni tra i migliori del centro</p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">Generale</TabsTrigger>
          <TabsTrigger value="pingpong">Ping Pong</TabsTrigger>
          <TabsTrigger value="calcetto">Calcetto</TabsTrigger>
          <TabsTrigger value="achievements">Trofei</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-warning" />
                Classifica Generale
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {generalLeaderboard.map((user, index) => (
                  <div
                    key={user.id}
                    className={`flex items-center justify-between p-4 rounded-lg border ${
                      user.name === "Marco Rossi" ? "border-primary bg-primary/10" : "border-border"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 min-w-[60px]">
                        {getPositionIcon(user.position)}
                        {getChangeIcon(user.change)}
                      </div>
                      
                      <Avatar>
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div>
                        <div className="font-semibold">{user.name}</div>
                        <div className="text-sm text-muted-foreground">
                          Livello {user.level}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-bold text-lg">{user.points.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">punti</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pingpong" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-500" />
                Classifica Ping Pong
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {pingPongLeaderboard.map((user, index) => (
                  <div
                    key={user.id}
                    className={`flex items-center justify-between p-4 rounded-lg border ${
                      user.name === "Marco Rossi" ? "border-primary bg-primary/10" : "border-border"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 min-w-[40px]">
                        {getPositionIcon(index + 1)}
                      </div>
                      
                      <Avatar>
                        <AvatarFallback className="bg-blue-500 text-white">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div>
                        <div className="font-semibold">{user.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {user.wins}W - {user.losses}L
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <Badge className="bg-blue-500 text-white">
                        Livello {user.level}
                      </Badge>
                      <div className="text-sm text-muted-foreground mt-1">
                        {user.winRate}% vittorie
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calcetto" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-green-500" />
                Classifica Calcetto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {calcettoLeaderboard.map((user, index) => (
                  <div
                    key={user.id}
                    className={`flex items-center justify-between p-4 rounded-lg border ${
                      user.name === "Marco Rossi" ? "border-primary bg-primary/10" : "border-border"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 min-w-[40px]">
                        {getPositionIcon(index + 1)}
                      </div>
                      
                      <Avatar>
                        <AvatarFallback className="bg-green-500 text-white">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div>
                        <div className="font-semibold">{user.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {user.goals} gol in {user.matches} partite
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <Badge className="bg-green-500 text-white">
                        Livello {user.level}
                      </Badge>
                      <div className="text-sm text-muted-foreground mt-1">
                        {user.avgGoals} gol/partita
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-warning" />
                Trofei e Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className={`p-3 rounded-full ${getRarityColor(achievement.rarity)}`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">{achievement.title}</h4>
                          <Badge variant="outline" className={`text-xs ${getRarityColor(achievement.rarity)} text-white border-0`}>
                            {getRarityText(achievement.rarity)}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">I tuoi trofei</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-warning">12</div>
                <p className="text-sm text-muted-foreground">Sbloccati su 24 totali</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Completamento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">50%</div>
                <div className="w-full bg-muted rounded-full h-2 mt-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Prossimo obiettivo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold">Asso del ping pong</div>
                <p className="text-sm text-muted-foreground">Livello 8/10</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Leaderboard;