export const header = {
  title: 'Tegneserie-duell',
  intro:
    'To lag på fire lager hver sin tegneserie på seks ruter, og vi avslutter med en liten utstilling og morsomme priser. Konkurransen gir litt driv, men poenget er å samarbeide og le av resultatet.',
  highlight: 'Strektegninger er helt innafor – ingen trenger å kunne tegne!',
}

export const program = {
  title: 'Program',
  nowLabel: 'Nå',
  items: [
    {
      start: '13:00',
      end: '13:15',
      activity: 'Oppvarming',
      description:
        'Alle tegner en figur på 30 sekunder og sender arket videre. Neste person legger til noe – slik fortsetter vi noen runder.',
    },
    {
      start: '13:15',
      end: '13:25',
      activity: 'Oppstart',
      description: 'Vi deler inn i lag, går gjennom reglene, og hvert lag trekker tema.',
    },
    {
      start: '13:25',
      end: '13:45',
      activity: 'Idé og manus',
      description: 'Bli enige om handlingen og lag en enkel skisse av de seks rutene.',
    },
    {
      start: '13:45',
      end: '14:30',
      activity: 'Produksjon',
      description: 'Tegn, skriv tekst og gjør ferdig. Ta gjerne en kort pause underveis.',
    },
    {
      start: '14:30',
      end: '14:50',
      activity: 'Utstilling',
      description: 'Seriene henges opp, og lagene leser dem høyt eller viser dem frem.',
    },
    {
      start: '14:50',
      end: '15:00',
      activity: 'Priser og avslutning',
      description: 'Prisene deles ut, og vi runder av.',
    },
  ],
}

export const roles = {
  title: 'Roller',
  intro: 'Fordel rollene selv – alle bidrar til idéen.',
  items: [
    { name: 'Regissør', description: 'Holder oversikt over historien og tiden.' },
    { name: 'Manusforfatter', description: 'Skriver replikker og tekstbokser.' },
    { name: 'Tegner', description: 'Tegner figurer og bakgrunner. Gjerne to personer.' },
    { name: 'Fargelegger og tekster', description: 'Fargelegger og skriver ferdig teksten i snakkeboblene.' },
  ],
  tip: 'Bytt gjerne oppgaver underveis, så blir ingen låst til å tegne eller lede.',
}

export const themes = {
  title: 'Tema',
  intro: 'Hvert lag trekker én lapp fra hver bunke.',
  piles: [
    {
      id: 'hero',
      name: 'Helt',
      options: ['En sliten superhelt', 'En katt', 'En vaktmester', 'En robot som nettopp har fått følelser'],
    },
    {
      id: 'place',
      name: 'Sted',
      options: ['En bussholdeplass', 'En romstasjon', 'Et serverrom', 'En dagligvarebutikk i Ørsta'],
    },
    {
      id: 'problem',
      name: 'Problem',
      options: ['Kaffen er tom', 'Wi-Fi-en er borte', 'Noen har stjålet alle sokkene', '«Alt fungerte i går»'],
    },
  ],
  teams: [
    { id: 'team1', name: 'Lag 1', tone: 'accent' },
    { id: 'team2', name: 'Lag 2', tone: 'sky' },
  ],
  drawLabel: 'Trekk tema',
  redrawLabel: 'Trekk på nytt',
  pendingLabel: '?',
}

export const prizes = {
  title: 'Priser',
  intro: 'Ingen samlet vinner – vi deler ut priser, så begge lag får noe.',
  items: ['Beste vri', 'Beste replikk', 'Mest kaotiske historie', 'Beste strektegning', 'Figuren vi vil se mer av'],
  votingNote: 'Stem med klistremerker direkte på tegneseriene!',
}
