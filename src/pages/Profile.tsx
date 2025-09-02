import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User, Trophy, Star, Calendar, Target, Settings } from "lucide-react";

const Profile = () => {
  const user = {
    name: "Marco Rossi",
    email: "marco.rossi@email.com",
    level: 12,
    points: 2450,
    joinDate: "Settembre 2023",
    rank: 1
  };

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
              <div className="flex items-center gap-4 mt-2">
                <Badge className="bg-primary">Livello {user.level}</Badge>
                <Badge variant="outline">#{user.rank} in classifica</Badge>
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
            <div className="flex justify-between">
              <span>Ping Pong</span>
              <Badge className="bg-blue-500">Livello 8</Badge>
            </div>
            <div className="flex justify-between">
              <span>Calcetto</span>
              <Badge className="bg-green-500">Livello 6</Badge>
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
    </div>
  );
};

export default Profile;