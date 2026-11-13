---
short: 8dgN
title: S.O.S. aus den Bergen
summary: Zwei Bergdörfer melden S.O.S. nach einem Unwetter. Was verrät das über den Zustand der Straßen?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [systems]
  process: [modelling, reasoning]
topics: [networks, graphs]
methods: [graph-connectivity]
mascot: beaver
interaction:
  format: custom
  props:
    image: ./img/map.png
    alt: Karte mit acht Bergdörfern und Straßen dazwischen. Zwei Dörfer tragen eine gelbe S.O.S.-Fahne. Auf jeder der elf Straßen, die nicht die Hauptstraße oben links sind, liegt eine Schaltfläche.
    roads:
      - { id: ab, x: 25.7, y: 37.3 }
      - { id: ac, x: 35.7, y: 34.4 }
      - { id: ad, x: 56.9, y: 28.9 }
      - { id: cd, x: 59.0, y: 43.7 }
      - { id: cg, x: 62.4, y: 56.4 }
      - { id: bg, x: 48.4, y: 67.0 }
      - { id: be, x: 18.3, y: 76.8 }
      - { id: ef, x: 48.6, y: 86.1 }
      - { id: fg, x: 79.5, y: 71.3 }
      - { id: dg, x: 83.0, y: 45.0 }
      - { id: dh, x: 77.3, y: 20.8 }
source:
  type: original
  work: Informatik-Biber 2021
  year: 2021
  page: 48
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2021/Biberheft_2021_mit_Loesungen_web.pdf
  country: HU
  license: CC BY-SA 4.0
---
Einige Dörfer in den Bergen sind über ein Straßennetz zu erreichen. Nach einem Unwetter sind zwei Dörfer aber nicht mehr erreichbar und melden S.O.S. Daraus lässt sich auf den Zustand der Straßen schließen. Es gibt drei Möglichkeiten:

- Die Straße ist nicht befahrbar.
- Die Straße ist befahrbar.
- Ohne weitere Information kann man nicht sagen, ob die Straße befahrbar oder nicht befahrbar ist.

Unten siehst du das Straßennetz. Die Hauptstraße oben links ist befahrbar.

**Gib für jede andere Straße ihren Zustand an.**
