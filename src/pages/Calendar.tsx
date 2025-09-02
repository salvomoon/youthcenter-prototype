import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar as CalendarIcon, 
  MapPin, 
  Clock, 
  Users,
  Star,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedSite, setSelectedSite] = useState("sede1");

  const events = {
    sede1: [
      {
        id: 1,
        title: "Torneo Ping Pong",
        date: "2024-01-15",
        time: "15:00",
        duration: "2 ore",
        participants: 12,
        maxParticipants: 16,
        type: "tournament",
        points: 150
      },
      {
        id: 2,
        title: "Workshop Fotografia",
        date: "2024-01-17",
        time: "16:30",
        duration: "1.5 ore",
        participants: 8,
        maxParticipants: 10,
        type: "workshop",
        points: 100
      },
      {
        id: 3,
        title: "Serata Cinema",
        date: "2024-01-19",
        time: "20:00",
        duration: "3 ore",
        participants: 25,
        maxParticipants: 30,
        type: "event",
        points: 75
      }
    ],
    sede2: [
      {
        id: 4,
        title: "Torneo Calcetto",
        date: "2024-01-16",
        time: "17:00",
        duration: "2 ore",
        participants: 14,
        maxParticipants: 20,
        type: "tournament",
        points: 150
      },
      {
        id: 5,
        title: "Laboratorio Musica",
        date: "2024-01-18",
        time: "15:00",
        duration: "2 ore",
        participants: 6,
        maxParticipants: 12,
        type: "workshop",
        points: 100
      }
    ]
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "tournament": return "bg-red-500";
      case "workshop": return "bg-blue-500";
      case "event": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case "tournament": return "🏆";
      case "workshop": return "🎨";
      case "event": return "🎬";
      default: return "📅";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('it-IT', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long' 
    });
  };

  const currentSiteEvents = events[selectedSite as keyof typeof events];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Calendario Eventi</h1>
          <p className="text-muted-foreground">Scopri tutte le attività del centro giovani</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="font-medium min-w-[120px] text-center">
            {currentDate.toLocaleDateString('it-IT', { month: 'long', year: 'numeric' })}
          </span>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs value={selectedSite} onValueChange={setSelectedSite} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="sede1" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Sede Centro
          </TabsTrigger>
          <TabsTrigger value="sede2" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Sede Palestra
          </TabsTrigger>
        </TabsList>

        <TabsContent value={selectedSite} className="space-y-4 mt-6">
          <div className="grid gap-4">
            {currentSiteEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{getEventTypeIcon(event.type)}</span>
                        <div>
                          <h3 className="text-xl font-semibold">{event.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {formatDate(event.date)}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {event.time} • {event.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {event.participants}/{event.maxParticipants} partecipanti
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-warning" />
                          +{event.points} punti
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Badge 
                          className={`${getEventTypeColor(event.type)} text-white`}
                        >
                          {event.type === "tournament" ? "Torneo" : 
                           event.type === "workshop" ? "Workshop" : "Evento"}
                        </Badge>
                        
                        <div className="flex-1">
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all duration-300"
                              style={{ 
                                width: `${(event.participants / event.maxParticipants) * 100}%` 
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="ml-4">
                      <Button 
                        className="w-full"
                        disabled={event.participants >= event.maxParticipants}
                      >
                        {event.participants >= event.maxParticipants ? "Completo" : "Partecipa"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {currentSiteEvents.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <CalendarIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Nessun evento programmato</h3>
                <p className="text-muted-foreground">
                  Al momento non ci sono eventi in programma per questa sede.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Eventi questa settimana</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">5</div>
            <p className="text-sm text-muted-foreground">+2 rispetto alla scorsa settimana</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Partecipazioni totali</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-success">89</div>
            <p className="text-sm text-muted-foreground">Partecipanti attivi</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Prossimo evento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-semibold">Torneo Ping Pong</div>
            <p className="text-sm text-muted-foreground">Domani alle 15:00</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Calendar;