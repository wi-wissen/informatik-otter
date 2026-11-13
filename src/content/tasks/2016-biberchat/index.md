---
short: S6PH
title: Biberchat
summary: Ein Chat wertet Wörter in Nachrichten aus und zeigt passende Werbebilder an. Welches Bild gehört zu welcher Nachricht?
grades:
  "7-8": medium
gi:
  content: [society]
  process: [reasoning, modelling]
topics: [society]
methods: []
mascot: beaver
interaction:
  format: place
  props:
    reusable: true
    trayLabel: Bilder
    zones:
      - { id: a, label: "A) Liebe Freunde, der Sommer kommt, und ich suche nach einer netten Unterkunft nahe am Rhein. Danke für eure Vorschläge, Richie." }
      - { id: b, label: "B) Arriba! Jemand hier?" }
      - { id: c, label: "C) @Mia: <3 <3 <3" }
      - { id: d, label: "D) das passt. gr8. thx" }
    items:
      - { id: strand, image: ./img/strand.png, alt: Strandbild }
      - { id: surf, image: ./img/surf.png, alt: Surfbild }
      - { id: eiffel, image: ./img/eiffel.png, alt: Bild des Eiffelturms }
source:
  type: original
  work: Informatik-Biber 2016
  year: 2016
  page: 10
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2016/Biberheft2016-mit-Loesungen.pdf
  country: DE
  license: CC BY-SA 3.0
---
Der Biberchat kann kostenlos verwendet werden und wird dann durch Werbung finanziert. Der Reiseveranstalter „Sunshine Travel“ verwendet dabei Werbebilder für unterschiedliche Zielgruppen.

Sendet ein Biber eine Nachricht, wird darin nach bestimmten Wörtern gesucht. Die Wörter werden mit Hilfe dieser Regeln bewertet:

- Die Anrede „Liebe“ wird gerne von älteren Bibern verwendet und bringt zwei Punkte.
- Die Anreden „Hi“, „Hey“ und „Arriba“ sind unter jüngeren Bibern populär und bringen jeweils zwei Minuspunkte.
- Die Abkürzungen „bf“, „gr8“, „np“ und „thx“ bringen je einen Minuspunkt.
- Jedes Wort mit zehn oder mehr Buchstaben bringt einen Punkt.

Sendet ein Biber eine Nachricht, wird er anhand der Gesamtpunktzahl seiner Nachricht einer Zielgruppe zugeordnet. Dann wird ein passendes Bild angezeigt:

| Gesamtpunktzahl | Zielgruppe | passendes Bild |
|---|---|---|
| > 0 (größer Null) | Senior | Strandbild |
| < 0 (kleiner Null) | Jugendlich | Surfbild |
| = 0 (gleich Null) | keine Zuordnung | Eiffelturm |

**Welche Bilder werden zu den folgenden Nachrichten angezeigt?** Ziehe zu jeder Nachricht das passende Bild (Strand, Surfer oder Eiffelturm). Ein Bild kann mehrfach verwendet werden.
