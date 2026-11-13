---
short: tgA1
title: Nach Hause
summary: Hase und Igel laufen geradeaus, bis ein Pfeil sie abbiegen lässt. Mit drei Pfeilen sollen beide heimfinden.
grades:
  "3-4": medium
  "5-6": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [algorithm-analysis, ai]
methods: []
mascot: beaver
interaction:
  format: custom
  props:
    image: ./img/map.png
    alt: "Karte mit drei Querstraßen und fünf Längsstraßen. Oben liegen links das Haus des Igels und rechts das Haus des Hasen, getrennt von einem Fluss mit zwei Brücken. Unten links startet der Hase, rechts in der mittleren Querstraße der Igel. Zwei Pfeile liegen schon: einer zeigt nach oben (zweite Längsstraße, mittlere Querstraße), einer nach links (vierte Längsstraße, mittlere Querstraße)"
    inventory: { up: 2, right: 1 }
    spots:
      - { id: "1a", x: 26.5, y: 60.5 }
      - { id: "1b", x: 38.3, y: 60.5 }
      - { id: "1c", x: 53.4, y: 60.5 }
      - { id: "1d", x: 72.2, y: 60.5 }
      - { id: "1e", x: 85, y: 60.5 }
      - { id: "2a", x: 26.5, y: 76.5 }
      - { id: "2c", x: 53.4, y: 76.5 }
      - { id: "2e", x: 85, y: 76.5 }
      - { id: "3a", x: 26.5, y: 95.5 }
      - { id: "3b", x: 38.3, y: 95.5 }
      - { id: "3c", x: 53.4, y: 95.5 }
      - { id: "3d", x: 72.2, y: 95.5 }
      - { id: "3e", x: 85, y: 95.5 }
source:
  type: original
  work: Informatik-Biber 2025
  year: 2025
  page: 60
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2025/Biberheft_2025_web_komplett.pdf
  country: US
  license: CC BY-SA 4.0
---
Ein Hase und ein Igel wollen nach Hause.

Jeder hat ein eigenes Haus: das Haus des Igels (blaue Tür, links oben) und das Haus des Hasen (rote Tür, rechts oben).

Hase und Igel laufen auf den Wegen, und zwar geradeaus. Nur wenn sie zu einer Kreuzung mit Pfeil kommen, folgen sie der Richtung des Pfeils.

An einigen Kreuzungen liegen schon Pfeile. Entlang der Pfeile findet der Igel nach Hause, der Hase aber nicht. Zum Glück sind noch drei Pfeile übrig: einer nach rechts und zwei nach oben.

**Zeichne die drei übrigen Pfeile auf Kreuzungen, so dass Hase und Igel beide nach Hause finden.**
