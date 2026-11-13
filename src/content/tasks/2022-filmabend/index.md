---
short: jN4G
title: Filmabend
summary: Sechs Freunde bewerten sieben Filme, doch keiner ist für alle der Favorit. Wer muss seine Bewertung ändern?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [algorithm-analysis, optimization]
methods: []
mascot: beaver
interaction:
  format: custom
  props:
    rows:
      - { id: ada, label: Ada, ratings: [g, g, g, g, g, g, g] }
      - { id: nancy, label: Nancy, ratings: [m, m, g, m, m, g, g] }
      - { id: niklaus, label: Niklaus, ratings: [s, s, s, m, s, s, s] }
      - { id: grace, label: Grace, ratings: [s, m, m, m, s, m, s] }
      - { id: edsger, label: Edsger, ratings: [g, m, s, s, m, g, g] }
      - { id: rozsa, label: Rozsa, ratings: [m, s, m, s, g, m, m] }
source:
  type: original
  work: Informatik-Biber 2022
  year: 2022
  page: 27
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2022/Biberheft_2022_mit_Loesungen_web.pdf
  country: DE
  license: CC BY-SA 4.0
---
Ein paar Freunde möchten einen Film miteinander anschauen. Zur Auswahl stehen sieben Filme. Um eine Entscheidung zu fällen, bewertet jede Person jeden Film, und zwar mit **gut** (grünes lachendes Gesicht), **mittel** (gelbes Gesicht) oder **schlecht** (rotes trauriges Gesicht).

Das Ergebnis siehst du unten. Leider gibt es keinen Favoriten für den Filmabend. Ein Film ist ein „Favorit“, wenn jede Person diesem Film die eigene beste Bewertung gegeben hat. Film 1 zum Beispiel ist kein Favorit, weil Niklaus seine beste Bewertung einem anderen Film gegeben hat, nämlich Film 4.

Ada möchte nun so wenige Freunde wie möglich überzeugen, ihre Bewertung zu ändern, damit es doch einen Favoriten gibt. Aber welche?

**Hilf Ada und ändere so wenige Bewertungen wie möglich, so dass es einen Favoriten gibt.**
