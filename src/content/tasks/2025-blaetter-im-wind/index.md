---
short: x9Ps
title: Blätter im Wind
summary: Ein Entscheidungsbaum hat seine Blätter verloren. Mit der Tabelle der zehn Früchte findest du heraus, wohin sie gehören.
grades:
  "7-8": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [trees, ai]
methods: [decision-tree]
mascot: beaver
interaction:
  format: place
  props:
    background: ./img/tree.png
    width: 244
    height: 278
    trayLabel: Blätter mit Früchten
    zones:
      - { id: l1, label: "Blatt-Stelle ganz links", x: 3, y: 139, w: 42, h: 50 }
      - { id: l3, label: "Blatt-Stelle unten, zweite von links", x: 64, y: 220, w: 42, h: 50 }
      - { id: l4, label: "Blatt-Stelle unten, dritte von links", x: 120, y: 218, w: 44, h: 50 }
      - { id: l5, label: "Blatt-Stelle rechts unten", x: 176, y: 193, w: 44, h: 50 }
      - { id: l6, label: "Blatt-Stelle rechts oben", x: 196, y: 120, w: 44, h: 50 }
    items:
      - { id: wassermelone, image: ./img/fruit-wassermelone.png, alt: Wassermelone }
      - { id: banane, image: ./img/fruit-banane.png, alt: Banane }
      - { id: apfel, image: ./img/fruit-apfel.png, alt: Apfel }
      - { id: weintraube, image: ./img/fruit-weintraube.png, alt: Weintraube }
      - { id: erdbeere, image: ./img/fruit-erdbeere.png, alt: Erdbeere }
source:
  type: original
  work: Informatik-Biber 2025
  year: 2025
  page: 26
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2025/Biberheft_2025_web_komplett.pdf
  country: AT
  license: CC BY-SA 4.0
---
In einer Schulklasse werden Früchte analysiert. Für jede Frucht werden drei Eigenschaften betrachtet und aus den Werten die Fruchtsorte bestimmt. Die Eigenschaften sind: Äußere Farbe, Anzahl der Samen und Essbarkeit der Schale. Für zehn Früchte hat die Klasse deren Werte und die daraus bestimmten Fruchtsorten in einer Tabelle notiert:

| Farbe | Anzahl Samen | Schale essbar? | Fruchtsorte |
|---|---:|---|---|
| grün | 391 | nein | Wassermelone |
| gelb | 5 | ja | Apfel |
| orange | 9 | nein | Orange |
| gelb | 0 | nein | Banane |
| rot | 5 | ja | Apfel |
| grün | 0 | ja | Weintraube |
| rot | 206 | ja | Erdbeere |
| grün | 6 | ja | Apfel |
| orange | 10 | nein | Orange |
| rot | 173 | ja | Erdbeere |

Die Fruchtsorten werden mit dem Entscheidungsbaum oben bestimmt. Ein Entscheidungsbaum sieht aus wie ein Baum, der auf dem Kopf steht: Oben ist die Wurzel und unten sind die Blätter. Außerdem sind die Wurzel und die Astgabeln mit Fragen beschriftet, die man mit ja oder nein beantworten kann.

Zur Bestimmung der Fruchtsorte werden die Fragen im Baum anhand der Werte beantwortet. Das geht so: Beginne oben an der Wurzel. Beantworte die Frage dort und gehe auf den passenden Ast mit der richtigen Antwort (ja oder nein). Beantworte die nächste Frage und gehe auf den nächsten passenden Ast. Mache so weiter, bis du ein Blatt erreicht hast. Das Blatt zeigt die Fruchtsorte.

Nach den zehn Früchten ist der Entscheidungsbaum leider kaputt gegangen: Fast alle Blätter sind abgefallen. Nur das Blatt mit der Orange ist noch da.

**An welchen Stellen waren die Blätter?**
