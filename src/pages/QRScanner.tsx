import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  QrCode, 
  Target, 
  Zap,
  Trophy,
  Plus,
  Minus,
  CheckCircle,
  Camera
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const QRScanner = () => {
  const [selectedGame, setSelectedGame] = useState<string>("");
  const [playerScore, setPlayerScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [opponentName, setOpponentName] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const { toast } = useToast();

  const games = [
    { 
      id: "pingpong", 
      name: "Ping Pong", 
      icon: Target, 
      color: "bg-blue-500",
      qrCode: "PP001",
      currentLevel: 8,
      nextLevel: 9,
      progress: 75
    },
    { 
      id: "calcetto", 
      name: "Calcetto", 
      icon: Zap, 
      color: "bg-green-500",
      qrCode: "FC001",
      currentLevel: 6,
      nextLevel: 7,
      progress: 45
    }
  ];

  const recentMatches = [
    { game: "pingpong", opponent: "Luca V.", result: "win", score: "11-7", points: 75, time: "2 ore fa" },
    { game: "calcetto", opponent: "Sofia B.", result: "loss", score: "2-3", points: 25, time: "1 giorno fa" },
    { game: "pingpong", opponent: "Alex B.", result: "win", score: "11-9", points: 80, time: "2 giorni fa" },
  ];

  const handleQRScan = (gameId: string) => {
    setSelectedGame(gameId);
    setIsScanning(true);
    
    // Simula la scansione del QR code
    setTimeout(() => {
      setIsScanning(false);
      toast({
        title: "QR Code scansionato!",
        description: `Sei pronto per giocare a ${games.find(g => g.id === gameId)?.name}`,
      });
    }, 2000);
  };

  const handleSubmitResult = () => {
    if (!selectedGame || !opponentName || (playerScore === 0 && opponentScore === 0)) {
      toast({
        title: "Errore",
        description: "Compila tutti i campi per registrare il risultato",
        variant: "destructive",
      });
      return;
    }

    const isWin = playerScore > opponentScore;
    const pointsEarned = isWin ? 75 : 25;
    
    toast({
      title: isWin ? "Vittoria! 🎉" : "Hai perso, ma hai guadagnato punti!",
      description: `+${pointsEarned} punti esperienza`,
    });

    // Reset form
    setSelectedGame("");
    setPlayerScore(0);
    setOpponentScore(0);
    setOpponentName("");
  };

  const selectedGameData = games.find(g => g.id === selectedGame);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">QR Scanner</h1>
        <p className="text-muted-foreground">Scansiona i QR code per registrare le tue partite</p>
      </div>

      {/* Game Selection */}
      <div className="grid md:grid-cols-2 gap-4">
        {games.map((game) => {
          const Icon = game.icon;
          return (
            <Card 
              key={game.id} 
              className={`cursor-pointer transition-all hover:scale-105 ${
                selectedGame === game.id ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => !isScanning && handleQRScan(game.id)}
            >
              <CardContent className="p-6 text-center">
                <div className={`${game.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{game.name}</h3>
                
                <div className="space-y-2">
                  <Badge className={`${game.color} text-white`}>
                    Livello {game.currentLevel}
                  </Badge>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Progresso livello {game.nextLevel}</span>
                      <span>{game.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`${game.color} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${game.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <QrCode className="h-4 w-4" />
                  QR: {game.qrCode}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* QR Scanning Interface */}
      {isScanning && (
        <Card>
          <CardContent className="p-8 text-center">
            <div className="animate-pulse">
              <Camera className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Scansionando QR Code...</h3>
              <p className="text-muted-foreground">
                Punta la fotocamera verso il QR code di {selectedGameData?.name}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Score Input */}
      {selectedGame && !isScanning && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Registra il risultato - {selectedGameData?.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="opponent">Nome avversario</Label>
              <Input
                id="opponent"
                value={opponentName}
                onChange={(e) => setOpponentName(e.target.value)}
                placeholder="Inserisci il nome dell'avversario"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <Label className="text-lg font-semibold">Tu</Label>
                <div className="mt-2 space-y-2">
                  <div className="text-4xl font-bold text-primary">{playerScore}</div>
                  <div className="flex justify-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPlayerScore(Math.max(0, playerScore - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPlayerScore(playerScore + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Label className="text-lg font-semibold">{opponentName || "Avversario"}</Label>
                <div className="mt-2 space-y-2">
                  <div className="text-4xl font-bold text-muted-foreground">{opponentScore}</div>
                  <div className="flex justify-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setOpponentScore(Math.max(0, opponentScore - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setOpponentScore(opponentScore + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Anteprima risultato</h4>
              <div className="space-y-1 text-sm">
                <div>🎯 Gioco: {selectedGameData?.name}</div>
                <div>👤 Avversario: {opponentName || "Da inserire"}</div>
                <div>📊 Risultato: {playerScore} - {opponentScore}</div>
                <div className={`font-medium ${playerScore > opponentScore ? "text-success" : playerScore < opponentScore ? "text-destructive" : "text-warning"}`}>
                  {playerScore > opponentScore ? "🏆 Vittoria!" : 
                   playerScore < opponentScore ? "😔 Sconfitta" : "🤝 Pareggio"}
                </div>
                <div className="text-success font-medium">
                  ⭐ Punti: +{playerScore > opponentScore ? 75 : 25}
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button 
                onClick={handleSubmitResult}
                className="flex-1"
                disabled={!opponentName || (playerScore === 0 && opponentScore === 0)}
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                Conferma Risultato
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setSelectedGame("")}
              >
                Annulla
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recent Matches */}
      <Card>
        <CardHeader>
          <CardTitle>Partite recenti</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentMatches.map((match, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  {match.game === "pingpong" ? (
                    <Target className="h-5 w-5 text-blue-500" />
                  ) : (
                    <Zap className="h-5 w-5 text-green-500" />
                  )}
                  <div>
                    <div className="font-medium">
                      vs {match.opponent} • {match.score}
                    </div>
                    <div className="text-sm text-muted-foreground">{match.time}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Badge 
                    className={match.result === "win" ? "bg-success text-success-foreground" : "bg-destructive text-destructive-foreground"}
                  >
                    {match.result === "win" ? "Vittoria" : "Sconfitta"}
                  </Badge>
                  <span className="text-sm text-success">+{match.points}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QRScanner;