import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  BookOpen, 
  Clock, 
  CalendarDays,
  Users,
  CheckCircle,
  AlertCircle,
  Filter
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const { toast } = useToast();

  const subjects = [
    "Matematica", "Italiano", "Inglese", "Scienze", "Storia", 
    "Geografia", "Fisica", "Chimica", "Filosofia", "Latino"
  ];

  const timeSlots = [
    { time: "14:30-15:30", available: true, tutor: "Prof. Rossi" },
    { time: "15:30-16:30", available: true, tutor: "Prof. Bianchi" },
    { time: "16:30-17:30", available: false, tutor: "Prof. Verdi" },
    { time: "17:30-18:30", available: true, tutor: "Prof. Neri" },
    { time: "18:30-19:30", available: true, tutor: "Prof. Blu" },
  ];

  const myBookings = [
    {
      id: 1,
      date: "2024-01-15",
      time: "15:30-16:30",
      subject: "Matematica",
      tutor: "Prof. Bianchi",
      status: "confirmed"
    },
    {
      id: 2,
      date: "2024-01-17",
      time: "16:30-17:30",
      subject: "Inglese",
      tutor: "Prof. Verdi",
      status: "pending"
    }
  ];

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !selectedSubject) {
      toast({
        title: "Errore",
        description: "Compila tutti i campi per prenotare",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Prenotazione effettuata!",
      description: `Hai prenotato ${selectedSubject} per ${selectedDate} alle ${selectedTime}`,
    });

    // Reset form
    setSelectedDate("");
    setSelectedTime("");
    setSelectedSubject("");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-success text-success-foreground";
      case "pending": return "bg-warning text-warning-foreground";
      case "cancelled": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "confirmed": return "Confermata";
      case "pending": return "In attesa";
      case "cancelled": return "Annullata";
      default: return status;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Spazio Compiti</h1>
        <p className="text-muted-foreground">Prenota il tuo aiuto compiti personalizzato</p>
      </div>

      <Tabs defaultValue="book" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="book">Nuova Prenotazione</TabsTrigger>
          <TabsTrigger value="mybookings">Le Mie Prenotazioni</TabsTrigger>
        </TabsList>

        <TabsContent value="book" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Prenota una sessione
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="date">Seleziona la data</Label>
                    <Input
                      id="date"
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Materia</Label>
                    <select
                      id="subject"
                      className="w-full p-2 border border-input rounded-md bg-background"
                      value={selectedSubject}
                      onChange={(e) => setSelectedSubject(e.target.value)}
                    >
                      <option value="">Seleziona una materia</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <Label>Orari disponibili</Label>
                  <div className="space-y-2 mt-2">
                    {timeSlots.map((slot) => (
                      <div
                        key={slot.time}
                        className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                          selectedTime === slot.time
                            ? "border-primary bg-primary/10"
                            : slot.available
                            ? "border-border hover:border-primary/50"
                            : "border-muted bg-muted/50 cursor-not-allowed"
                        }`}
                        onClick={() => slot.available && setSelectedTime(slot.time)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">{slot.time}</div>
                            <div className="text-sm text-muted-foreground">{slot.tutor}</div>
                          </div>
                          {slot.available ? (
                            <CheckCircle className="h-5 w-5 text-success" />
                          ) : (
                            <AlertCircle className="h-5 w-5 text-destructive" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Riepilogo prenotazione</h4>
                <div className="space-y-1 text-sm">
                  <div>📅 Data: {selectedDate || "Non selezionata"}</div>
                  <div>⏰ Orario: {selectedTime || "Non selezionato"}</div>
                  <div>📚 Materia: {selectedSubject || "Non selezionata"}</div>
                  <div className="text-success font-medium">⭐ Punti guadagnati: +50</div>
                </div>
              </div>

              <Button 
                onClick={handleBooking} 
                className="w-full"
                disabled={!selectedDate || !selectedTime || !selectedSubject}
              >
                Conferma Prenotazione
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mybookings" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Le tue prenotazioni</h3>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filtra
            </Button>
          </div>

          <div className="space-y-4">
            {myBookings.map((booking) => (
              <Card key={booking.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <div>
                          <h4 className="font-semibold">{booking.subject}</h4>
                          <p className="text-sm text-muted-foreground">
                            con {booking.tutor}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <CalendarDays className="h-4 w-4" />
                          {new Date(booking.date).toLocaleDateString('it-IT')}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {booking.time}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Badge className={getStatusColor(booking.status)}>
                        {getStatusText(booking.status)}
                      </Badge>
                      
                      {booking.status === "confirmed" && (
                        <Button variant="outline" size="sm">
                          Annulla
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {myBookings.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Nessuna prenotazione</h3>
                <p className="text-muted-foreground mb-4">
                  Non hai ancora prenotato nessuna sessione di studio.
                </p>
                <Button onClick={() => {
                  const bookTab = document.querySelector('[data-value="book"]') as HTMLElement;
                  bookTab?.click();
                }}>
                  Prenota ora
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      {/* Info Section */}
      <Card>
        <CardHeader>
          <CardTitle>Come funziona lo spazio compiti?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">🎯 Cosa offriamo</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Supporto personalizzato per ogni materia</li>
                <li>• Tutor qualificati e preparati</li>
                <li>• Ambiente tranquillo e stimolante</li>
                <li>• Materiale didattico disponibile</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📋 Regole</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Porta sempre i tuoi materiali</li>
                <li>• Disdici almeno 2 ore prima</li>
                <li>• Rispetta gli orari prenotati</li>
                <li>• Guadagni 50 punti per sessione completata</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Booking;