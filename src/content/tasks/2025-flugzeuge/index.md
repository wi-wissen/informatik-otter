---
short: Ua4N
title: Flugzeuge
summary: Sieben Flugzeuge warten auf drei Rollbahnen und dürfen einander nicht überholen. Wer startet wann?
grades:
  "3-4": easy
  "5-6": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization, sorting]
methods: [scheduling]
mascot: beaver
interaction:
  format: custom
  props:
    background: ./img/plan.png
    width: 166.4
    height: 320.4
    zones:
      - { id: t1045, label: "10:45 Uhr", x: 76, y: 36, w: 64, h: 44 }
      - { id: t1055, label: "10:55 Uhr", x: 76, y: 116, w: 64, h: 44 }
      - { id: t1100, label: "11:00 Uhr", x: 76, y: 196, w: 64, h: 44 }
      - { id: t1111, label: "11:11 Uhr", x: 76, y: 276, w: 64, h: 44 }
    items:
      - { id: yellow, image: ./img/p-yellow.png, alt: Gelbes Flugzeug mit blauen Punkten }
      - { id: red, image: ./img/p-red.png, alt: Rotes Flugzeug mit Dreiecksmuster }
      - { id: green, image: ./img/p-green.png, alt: Hellgrünes Flugzeug }
      - { id: purple, image: ./img/p-purple.png, alt: Violettes Flugzeug mit gelben Streifen }
source:
  type: original
  work: Informatik-Biber 2025
  year: 2025
  page: 38
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2025/Biberheft_2025_web_komplett.pdf
  country: LT
  license: CC BY-SA 4.0
---
Heute Morgen wollen sieben Flugzeuge starten. Alle starten auf derselben Startbahn rechts. Die Flugzeuge fahren auf den Linien vorwärts und können einander nicht überholen.

![Flughafen: Auf drei Rollbahnen übereinander stehen sechs Flugzeuge hintereinander, jeweils zwei pro Bahn (Bahn oben: pink-blaues und gelbes Flugzeug, Bahn Mitte: grün gestreiftes und rotes Flugzeug, Bahn unten: violettes und blau gestreiftes Flugzeug). Die Bahnen laufen rechts zusammen, dort steht das hellgrüne Flugzeug schon auf der Startbahn](./img/airport.png)

Der Startplan zeigt, in welcher Reihenfolge die sieben Flugzeuge starten. Einige Flugzeuge fehlen aber noch.

**Ergänze die fehlenden Flugzeuge im Startplan.**
