---
short: Npw7
title: Rekursive Malerei
summary: Zwei Malanweisungskarten, von denen eine auf sich selbst verweist. Wie sieht der Boden des Ausstellungsraums am Ende aus?
grades:
  "11-13": hard
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [recursion, programming]
methods: [recursion]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, label: A, image: ./img/a.png, alt: "Bild A: links ein großer Halbkreis mit runder Seite nach links, rechts davon eine senkrechte Reihe aus vielen kleiner werdenden Halbkreisen" }
      - { id: b, label: B, image: ./img/b.png, alt: "Bild B: links ein großer Halbkreis mit runder Seite nach links; rechts oben und unten je zwei kleinere Halbkreise, deren Rundung nach innen zeigt, mit weiteren kleineren Mustern" }
      - { id: c, label: C, image: ./img/c.png, alt: "Bild C: links ein großer Halbkreis, rechts daneben unten kleiner werdende Kreisformen, die sich nach rechts unten spiralartig verkleinern" }
      - { id: d, label: D, image: ./img/d.png, alt: "Bild D: links ein großer Halbkreis, rechts Halbkreise oben und unten, in der Mitte ein Muster aus vielen kleinen Halbkreisen" }
source:
  type: original
  work: Informatik-Biber 2016
  year: 2016
  page: 54
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2016/Biberheft2016-mit-Loesungen.pdf
  country: AT
  license: CC BY-SA 3.0
---
Tina und Ben helfen bei der Vorbereitung einer Sonderausstellung im Informatik-Museum. Auf den Boden eines Ausstellungsraums sollen sie ein 16 × 16 Meter großes Bild malen. Vom Künstler bekommen sie einen Satz Malanweisungskarten in dessen berühmter Malkartensprache, mit Hinweisen zu den Bildelementen, Maßen und Drehungen. Auf manchen Malanweisungskarten sind nummerierte Felder, die auf andere Malanweisungskarten verweisen.

Hier ein Beispiel aus einem früheren Malkartenprojekt. Wenn man diese drei Malanweisungskarten richtig ausführt, entsteht ein Bild des Bibers:

![Drei Malanweisungskarten. Karte 1 (10 m) hat in zwei Feldern Verweise auf die Karten 2 und 3 und zeigt den Biber; Karte 2 (5 m) zeigt den Kopf des Bibers, Karte 3 (5 m) seinen Körper](./img/beaver-cards.png)

Für die Sonderausstellung bekommen Tina und Ben nun die folgenden zwei Malanweisungskarten:

![Karte 1 (16 m, 8 m, …, 1 m): links ein Halbkreis mit runder Seite nach links, rechts zwei Felder, die beide auf Karte 1 verweisen, das obere Feld um 90° nach links gedreht, das untere um 90° nach rechts. Karte 1 (0,5 m): eine einheitlich blaue Fläche](./img/cards.png)

Ben runzelt die Stirn. „Wie soll das gehen? Die linke Karte verweist auf sich selbst, und außerdem haben beide Karten die selbe Nummer!“ Tina lacht: „Wir kriegen das hin! Zuerst verwenden wir nur die linke Karte. Die rechte Karte wird uns später anweisen, wann wir mit dem Malen aufhören sollen.“

**Wie wird der Boden des Ausstellungsraums aussehen?**
