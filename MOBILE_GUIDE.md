# 📱 Guida Completa per App Mobile

## 🚀 Configurazione Iniziale

### 1. Scarica il Progetto
```bash
git clone [il-tuo-repository-github]
cd youth-center
npm install
```

### 2. Aggiungi Piattaforme Mobile
```bash
# Per Android
npx cap add android

# Per iOS (solo su Mac)
npx cap add ios
```

## 📦 Generare APK Android

### Prerequisiti
- Installa **Android Studio** (gratuito): https://developer.android.com/studio
- Apri Android Studio e installa SDK Android

### Passi per Creare APK
```bash
# 1. Costruisci la web app
npm run build

# 2. Sincronizza con Capacitor
npx cap sync

# 3. Apri in Android Studio
npx cap open android
```

### In Android Studio:
1. **Build > Build Bundle(s) / APK(s) > Build APK(s)**
2. Aspetta la compilazione
3. Clicca su **locate** per trovare l'APK
4. L'APK sarà in: `android/app/build/outputs/apk/debug/app-debug.apk`

## 🍎 Generare App iOS

### Prerequisiti (Solo Mac)
- **Xcode** (gratuito dall'App Store)
- Account Apple Developer (gratuito per test)

### Passi per iOS:
```bash
# 1. Costruisci la web app
npm run build

# 2. Sincronizza con Capacitor
npx cap sync

# 3. Apri in Xcode
npx cap open ios
```

### In Xcode:
1. **Product > Archive**
2. **Distribute App > Development**
3. Genera file .ipa per condividere

## 📲 Distribuzione Privata

### Android APK
- **Condivisione**: WhatsApp, email, Google Drive, Telegram
- **Installazione**: Attiva "Origini sconosciute" nelle impostazioni
- **Aggiornamenti**: Condividi nuovo APK quando necessario

### iOS (3 opzioni)
1. **TestFlight** (raccomandato):
   - Fino a 100 utenti gratis
   - Aggiornamenti automatici
   - Installazione via link

2. **AltStore** (sideloading):
   - Installazione diretta senza store
   - Rinnovo settimanale necessario

3. **Enterprise Distribution**:
   - Richiede account aziendale (€300/anno)

## 🔄 Workflow Aggiornamenti

### Per Modifiche al Codice:
```bash
# 1. Modifica il codice
# 2. Rebuilda
npm run build

# 3. Sincronizza
npx cap sync

# 4. Ricompila APK/IPA
npx cap open android  # o ios
```

### Per Modifiche Live (solo styling/contenuti):
- Le modifiche alla web app si aggiornano automaticamente nell'app
- Non serve ricompilare APK/IPA

## 🛠️ Personalizzazione App

### Icona e Splash Screen
1. Sostituisci i file in:
   - `android/app/src/main/res/` (Android)
   - `ios/App/App/Assets.xcassets/` (iOS)

2. Usa tool online per generare tutte le dimensioni:
   - https://capacitorjs.com/docs/guides/splash-screens-and-icons

### Nome App
Modifica in `capacitor.config.ts`:
```typescript
appName: 'Il-Tuo-Nome-App'
```

## 📋 Checklist Pre-Distribuzione

### Android
- [ ] Testato su emulatore Android
- [ ] Testato su dispositivo fisico
- [ ] APK firmato (per produzione)
- [ ] Icona e splash screen personalizzati
- [ ] Permessi necessari configurati

### iOS
- [ ] Testato su simulatore iOS
- [ ] Testato su dispositivo fisico
- [ ] Certificati di sviluppo configurati
- [ ] TestFlight configurato (se usato)

## 🚨 Risoluzione Problemi

### Errori Comuni Android
```bash
# Pulisci build
cd android && ./gradlew clean && cd ..

# Rebuilda tutto
npm run build
npx cap sync
```

### Errori Comuni iOS
```bash
# Pulisci build
rm -rf ios/App/build
npx cap sync
```

### App Non Si Aggiorna
1. Verifica che `server.url` in `capacitor.config.ts` sia corretto
2. Ricompila: `npm run build && npx cap sync`
3. Reinstalla l'app

## 📞 Supporto

- **Documentazione Capacitor**: https://capacitorjs.com/docs
- **Community Discord**: https://discord.gg/UPYvjRaK4k
- **Guide Video**: Cerca "Capacitor APK tutorial" su YouTube

## 🎯 Pro Tips

1. **Test Frequenti**: Testa su dispositivo reale spesso
2. **Versioning**: Aggiorna `version` in `package.json` per nuove release
3. **Backup**: Salva sempre APK/IPA generati
4. **Performance**: Ottimizza immagini e bundle size per mobile
5. **Offline**: Considera PWA features per uso offline

---

✅ **Ora hai tutto per creare e distribuire la tua app mobile!**