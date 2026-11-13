---
short: EQv7
title: Rekursive Malerei
summary: Zwei Malanweisungskarten, von denen eine auf sich selbst verweist, bemalen einen Museumsboden. Wie sieht er am Ende aus?
grades:
  "11-13": hard
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [recursion, programming]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, label: A, image: ./img/a.png, alt: "Bild A" }
      - { id: b, label: B, image: ./img/b.png, alt: "Bild B" }
      - { id: c, label: C, image: ./img/c.png, alt: "Bild C" }
      - { id: d, label: D, image: ./img/d.png, alt: "Bild D" }
source:
  type: original
  work: Informatik-Biber 2023
  year: 2023
  page: 48
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2023/Biberheft_2023_web_komplett.pdf
  country: AT
  license: CC BY-SA 4.0
---
Tina und Tom helfen bei der Vorbereitung einer Sonderausstellung im Informatik-Museum. Auf den Boden eines Ausstellungsraums sollen sie ein 16 × 16 Meter großes Bild malen.

Vom Künstler bekommen sie einen Satz Malanweisungskarten in dessen berühmter Malkartensprache, mit Hinweisen zu den Bildelementen, Maßen und Drehungen.

Auf manchen Malanweisungskarten sind nummerierte Felder, die auf andere Karten verweisen.

Hier ein Beispiel aus einem früheren Malkartenprojekt. Wenn man diese drei Karten richtig ausführt, entsteht ein Bild des Bibers:

![Drei Malanweisungskarten: Karte 1 (10 m breit) hat zwei Felder 2 und 3, die auf die Karten 2 und 3 (je 5 m breit) mit je einem Teil des Biberbildes verweisen](./img/beispiel-1.png) ![Karte 2: ein Teil des Biberbildes, 5 m breit](./img/beispiel-2.png) ![Karte 3: ein weiterer Teil des Biberbildes, 5 m breit](./img/beispiel-3.png)

Für die Sonderausstellung bekommen Tina und Tom nun diese zwei Karten:

![Linke Karte 1 (Breiten 16 m, 8 m, ..., 1 m): links ein dunkler Halbkreis, rechts zwei Felder mit der Nummer 1, die um 180 Grad gedreht sind](./img/karte-links.png) ![Rechte Karte 1 (Breite 0,5 m): eine ganz ausgefüllte Fläche ohne Verweis](./img/karte-rechts.png)

Tom runzelt die Stirn. „Wie soll das gehen? Die linke Karte verweist auf sich selbst, und außerdem haben beide Karten dieselbe Nummer!“ Tina lacht: „Wir kriegen das hin! Zuerst verwenden wir nur die linke Karte. Die rechte Karte wird uns später anweisen, wann wir mit dem Malen aufhören sollen.“

**Wie wird der Boden des Ausstellungsraums aussehen?**
