# Tegneserie-duell

En morsom samarbeidsaktivitet: **to lag på fire lager hver sin tegneserie på seks ruter**, og vi avslutter med en liten utstilling og morsomme priser. Konkurransen gir litt driv, men poenget er å samarbeide og le av resultatet. Strektegninger er helt innafor, så ingen trenger å kunne tegne.

Dette repoet er infosiden som vises på storskjermen under aktiviteten. Den viser programmet, rollene, temaene og prisene, så deltakerne kan følge med og hente inspirasjon underveis.

🔗 **Live:** https://mariusrjobloop.github.io/tegneserie-duellen/

## Slik fungerer duellen

### Program

| Tid         | Aktivitet            | Innhold                                                                                     |
| ----------- | -------------------- | ------------------------------------------------------------------------------------------- |
| 13:00–13:15 | Oppvarming           | Alle tegner en figur på 30 sekunder og sender arket videre. Neste person legger til noe.     |
| 13:15–13:25 | Oppstart             | Del inn i lag, gå gjennom reglene, og hvert lag trekker tema.                               |
| 13:25–13:45 | Idé og manus         | Lagene blir enige om handlingen og lager en enkel skisse av de seks rutene.                 |
| 13:45–14:30 | Produksjon           | Tegn, skriv tekst og gjør ferdig. Ta gjerne en kort pause underveis.                        |
| 14:30–14:50 | Utstilling           | Seriene henges opp, og lagene leser dem høyt eller viser dem frem.                          |
| 14:50–15:00 | Priser og avslutning | Prisene deles ut, og vi runder av.                                                          |

### Roller

Lagene fordeler rollene selv, og alle bidrar til idéen. Bytt gjerne oppgaver underveis.

- **Regissør:** holder oversikt over historien og tiden.
- **Manusforfatter:** skriver replikker og tekstbokser.
- **Tegner:** tegner figurer og bakgrunner (gjerne to personer).
- **Fargelegger og tekster:** fargelegger og skriver ferdig teksten i snakkeboblene.

### Tema

Hvert lag trekker én lapp fra hver bunke: **Helt**, **Sted** og **Problem**. Det kan gjøres med fysiske lapper eller med «Trekk tema»-knappen på infosiden.

### Priser, en konkurranse uten tapere

Det er ingen samlet vinner. I stedet deles det ut priser, slik at begge lag får noe: *Beste vri*, *Beste replikk*, *Mest kaotiske historie*, *Beste strektegning* og *Figuren vi vil se mer av*. Stem med klistremerker direkte på tegneseriene.

## Infosiden

- Alt får plass på én skjerm, og skriften skalerer med skjermstørrelsen.
- Programposten dere er i nå, blir uthevet automatisk etter klokka.
- Digital tematrekning per lag, der to lag ikke kan få samme lapp.
- Tips: trykk **F11** for fullskjerm på storskjermen.
- Test uthevingen uten å vente på riktig tid ved å legge til `?tid=13:50` i adressen.

## Kom i gang

Krever [Node.js](https://nodejs.org/) (LTS) og git.

```bash
git clone https://github.com/mariusrjobloop/tegneserie-duellen.git
cd tegneserie-duellen
npm install
npm run dev
```

Åpne adressen som vises i terminalen (vanligvis http://localhost:5173).

### Skript

| Kommando          | Beskrivelse                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Starter utviklingsserver med hot reload      |
| `npm run build`   | Bygger produksjonsversjon til `dist/`        |
| `npm run preview` | Forhåndsviser produksjonsbygget lokalt       |
| `npm run lint`    | Sjekker koden med oxlint                     |

## Endre innhold

All tekst på siden ligger i [`src/lib/content/duel.js`](src/lib/content/duel.js): program, roller, tema og priser. Endre der, så oppdateres siden.

```
src/
  components/
    sections/   ← seksjonene på siden (header, program, tema, roller, priser)
    ui/         ← gjenbrukbare komponenter (Panel, Button)
  hooks/        ← useNow (klokke) og useThemeDraw (tematrekning)
  lib/content/  ← all tekst
  index.css     ← Tailwind v4 og design-tokens (@theme)
```

## Deploy

Siden deployes automatisk til GitHub Pages ved hver push til `main` via [GitHub Actions](.github/workflows/deploy.yml).

## Teknologi

React · Vite · Tailwind CSS v4 · JavaScript
