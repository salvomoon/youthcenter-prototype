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
  const [selectedSite, setSelectedSite] = useState("centro");

  const events = {
    centro: [
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
    palestra: [
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
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5 text-primary" />
            Eventi in Programma
          </CardTitle>
        </CardHeader>
        <CardContent>

      <Tabs value={selectedSite} onValueChange={setSelectedSite} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="centro" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Sede Centro
          </TabsTrigger>
          <TabsTrigger value="palestra" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Sede Palestra
          </TabsTrigger>
        </TabsList>

            <TabsContent value="centro" className="mt-6">
              {events.centro.length > 0 ? (
                <div className="space-y-4">
                  {events.centro
                    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                    .map((event) => (
                    <Card key={event.id} className="border-l-4 border-l-blue-500 hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-2xl">{getEventTypeIcon(event.type)}</span>
                              <h3 className="font-semibold text-lg">{event.title}</h3>
                              <Badge className={getEventTypeColor(event.type)}>
                                {event.type === "tournament" ? "Torneo" : 
                                 event.type === "workshop" ? "Workshop" : "Evento"}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground mb-3">{formatDate(event.date)}</p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Clock className="h-4 w-4 text-primary" />
                                <span className="font-medium">{event.time}</span>
                              </div>
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Users className="h-4 w-4 text-primary" />
                                <span className="font-medium">{event.participants}/{event.maxParticipants}</span>
                              </div>
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Star className="h-4 w-4 text-primary" />
                                <span className="font-medium">+{event.points} punti</span>
                              </div>
                            </div>
                          </div>
                          <div className="ml-4">
                            {event.participants < event.maxParticipants ? (
                              <Button size="sm" className="animate-pulse">Partecipa</Button>
                            ) : (
                              <Badge variant="outline">Completo</Badge>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <CalendarIcon className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">Nessun evento programmato per questo periodo.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="palestra" className="mt-6">
              {events.palestra.length > 0 ? (
                <div className="space-y-4">
                  {events.palestra
                    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                    .map((event) => (
                    <Card key={event.id} className="border-l-4 border-l-green-500 hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-2xl">{getEventTypeIcon(event.type)}</span>
                              <h3 className="font-semibold text-lg">{event.title}</h3>
                              <Badge className={getEventTypeColor(event.type)}>
                                {event.type === "tournament" ? "Torneo" : 
                                 event.type === "workshop" ? "Workshop" : "Evento"}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground mb-3">{formatDate(event.date)}</p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Clock className="h-4 w-4 text-primary" />
                                <span className="font-medium">{event.time}</span>
                              </div>
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Users className="h-4 w-4 text-primary" />
                                <span className="font-medium">{event.participants}/{event.maxParticipants}</span>
                              </div>
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Star className="h-4 w-4 text-primary" />
                                <span className="font-medium">+{event.points} punti</span>
                              </div>
                            </div>
                          </div>
                          <div className="ml-4">
                            {event.participants < event.maxParticipants ? (
                              <Button size="sm" className="animate-pulse">Partecipa</Button>
                            ) : (
                              <Badge variant="outline">Completo</Badge>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <CalendarIcon className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">Nessun evento programmato per questo periodo.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

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