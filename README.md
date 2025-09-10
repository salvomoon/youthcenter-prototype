# 🏢 Centro Giovani - App Web

Una web app moderna e personalizzabile per centri giovani, realizzata con React, TypeScript e Tailwind CSS.

## 📋 Caratteristiche

- ✅ Dashboard personalizzata con statistiche utente
- ✅ Sistema di prenotazione spazi studio
- ✅ Calendario eventi
- ✅ Classifiche e gamificazione
- ✅ Scanner QR per check-in
- ✅ Supporto multilingua (Italiano, Inglese, Spagnolo, Arabo, Cinese)
- ✅ Tema scuro/chiaro
- ✅ Design responsivo per mobile e desktop

## 🚀 Guida per Principianti

### 1. Prerequisiti

Prima di iniziare, installa questi programmi sul tuo computer:

**A. Node.js** (necessario per far funzionare l'app)
1. Vai su [nodejs.org](https://nodejs.org)
2. Scarica la versione LTS (raccomandata)
3. Installala seguendo la procedura guidata
4. Verifica l'installazione: apri il terminale/prompt dei comandi e scrivi:
   ```bash
   node --version
   npm --version
   ```

**B. Git** (per scaricare il codice)
1. Vai su [git-scm.com](https://git-scm.com)
2. Scarica e installa Git per il tuo sistema operativo
3. Verifica l'installazione:
   ```bash
   git --version
   ```

**C. Editor di codice** (per modificare i file)
- Consigliato: [Visual Studio Code](https://code.visualstudio.com) (gratuito)

### 2. Scaricare il Progetto

1. **Apri il terminale/prompt dei comandi**
   - Windows: Cerca "cmd" o "PowerShell"
   - Mac: Cerca "Terminal"
   - Linux: Ctrl+Alt+T

2. **Naviga nella cartella dove vuoi scaricare il progetto**
   ```bash
   cd Desktop
   # oppure cd Documents/MieiProgetti
   ```

3. **Clona il repository**
   ```bash
   git clone [URL-DEL-TUO-REPOSITORY-GITHUB]
   cd centro-giovani-app
   ```

4. **Installa le dipendenze**
   ```bash
   npm install
   ```

5. **Avvia l'app in modalità sviluppo**
   ```bash
   npm run dev
   ```

6. **Apri il browser** all'indirizzo mostrato (solitamente `http://localhost:5173`)

### 3. Personalizzazione

#### 🎨 Cambiare Colori e Tema

I colori sono centralizzati nel file `src/index.css`. Apri questo file e modifica le variabili CSS:

```css
:root {
  /* Colore principale del tuo centro */
  --primary: 220 90% 56%;  /* Blu di default */
  
  /* Colori di successo, avviso, errore */
  --success: 142 71% 45%;   /* Verde */
  --warning: 38 92% 50%;    /* Arancione */
  --destructive: 0 72% 51%; /* Rosso */
  
  /* Colori di sfondo */
  --background: 0 0% 3.9%;     /* Sfondo scuro */
  --card: 0 0% 14.9%;          /* Card scure */
}
```

**Come scegliere i colori:**
1. Usa uno strumento come [HSL Color Picker](https://hslpicker.com)
2. Converti i tuoi colori in formato HSL
3. Inserisci i valori senza "hsl()" - solo i numeri separati da spazi

**Esempio per un centro con colori verdi:**
```css
:root {
  --primary: 142 71% 45%;  /* Verde principale */
  --primary-foreground: 0 0% 98%;
}
```

#### 🏢 Cambiare Nome e Logo del Centro

1. **Nome del centro**: Modifica il file `src/contexts/LanguageContext.tsx`
   ```typescript
   // Cerca questa sezione per ogni lingua
   centerName: "Il Tuo Centro Giovani",
   centerTagline: "Il tuo nuovo slogan",
   ```

2. **Logo**: 
   - Sostituisci il file `public/favicon.ico` con il tuo logo (formato .ico)
   - Per un logo nell'header, aggiungi la tua immagine in `public/` e modifica il componente Navigation

#### 📝 Personalizzare Testi

Tutti i testi sono nel file `src/contexts/LanguageContext.tsx`. Modifica le traduzioni per ogni lingua supportata:

```typescript
const translations = {
  it: {
    welcome: "Benvenuto",
    centerName: "Il Tuo Centro",
    // ... altri testi
  },
  en: {
    welcome: "Welcome", 
    centerName: "Your Center",
    // ... altri testi
  }
  // ... altre lingue
};
```

#### 🖼️ Aggiungere Immagini

1. Metti le tue immagini nella cartella `public/`
2. Usale nei componenti con il percorso relativo:
   ```typescript
   <img src="/nome-tua-immagine.jpg" alt="Descrizione" />
   ```

### 4. Test in Locale

Prima di deployare, testa sempre le modifiche:

```bash
# Avvia l'app in sviluppo
npm run dev

# Oppure crea una versione di produzione per testare
npm run build
npm run preview
```

### 5. Deploy (Pubblicazione Online)

#### Opzione A: Vercel (Gratis e Facile)

1. **Crea account su [Vercel](https://vercel.com)**
2. **Connetti il tuo repository GitHub**
3. **Clicca "Import Project"**
4. **Seleziona il tuo repository**
5. **Clicca "Deploy"**
6. **Il tuo sito sarà live in pochi minuti!**

#### Opzione B: Netlify (Gratis e Facile)

1. **Crea account su [Netlify](https://netlify.com)**
2. **Trascina la cartella `dist/` (dopo aver fatto `npm run build`) nel pannello Netlify**
3. **Oppure connetti direttamente GitHub per deploy automatici**

#### Opzione C: Server Proprio

Se hai un tuo server:

1. **Crea la versione di produzione**
   ```bash
   npm run build
   ```

2. **La cartella `dist/` contiene tutti i file da caricare sul server**

3. **Carica tutto il contenuto di `dist/` nella cartella web del tuo server**

### 6. Aggiornamenti

Per aggiornare la tua versione con nuove funzionalità:

```bash
# Scarica gli aggiornamenti
git pull origin main

# Reinstalla dipendenze (se necessario)
npm install

# Ricostruisci per la produzione
npm run build
```

## 🛠️ Struttura del Progetto

```
src/
├── components/          # Componenti riutilizzabili
│   ├── ui/             # Componenti base (bottoni, card, ecc.)
│   ├── Navigation.tsx   # Menu di navigazione
│   └── ...
├── contexts/           # Contesti React (lingua, tema)
├── pages/              # Pagine dell'app
├── hooks/              # Hook personalizzati
└── lib/                # Utilità e configurazioni
```

## 🎯 Personalizzazioni Avanzate

### Aggiungere Nuove Pagine

1. Crea un nuovo file in `src/pages/NuovaPagina.tsx`
2. Aggiungi la route in `src/App.tsx`
3. Aggiungi il link nella navigazione in `src/components/Navigation.tsx`

### Modificare il Database

L'app è configurata per Supabase. Per cambiare database:
1. Modifica le configurazioni in `src/lib/`
2. Aggiorna le chiamate API nei componenti

### Aggiungere Nuove Lingue

1. Aggiungi la nuova lingua in `src/contexts/LanguageContext.tsx`
2. Traduci tutti i testi
3. Aggiungi l'opzione nel `LanguageSwitcher`

## 🆘 Risoluzione Problemi

**Errore "command not found"**
- Assicurati di aver installato Node.js e riavviato il terminale

**App non si avvia**
- Controlla di essere nella cartella giusta
- Esegui `npm install` prima di `npm run dev`

**Modifiche non visibili**
- Ricarica la pagina (Ctrl+F5)
- Verifica di aver salvato i file modificati

**Build fallisce**
- Controlla la console per errori di sintassi
- Verifica che tutti i file importati esistano

## 📞 Supporto

- **Issues GitHub**: Apri un issue per bug o richieste
- **Documentazione**: [React](https://react.dev), [Tailwind CSS](https://tailwindcss.com)
- **Community**: Cerca aiuto su Stack Overflow con tag "react", "typescript", "tailwindcss"

## 📄 Licenza

Questo progetto è open source. Sentiti libero di utilizzarlo e modificarlo per il tuo centro giovani!

---

**Buona personalizzazione! 🚀**
