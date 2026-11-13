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
  format: match
  props:
    left:
      - { id: a, label: Blatt-Stelle A }
      - { id: b, label: Blatt-Stelle B }
      - { id: c, label: Blatt-Stelle C }
      - { id: d, label: Blatt-Stelle D }
      - { id: e, label: Blatt-Stelle E }
    right:
      - { id: banane, label: Banane }
      - { id: erdbeere, label: Erdbeere }
      - { id: apfel, label: Apfel }
      - { id: wassermelone, label: Wassermelone }
      - { id: weintraube, label: Weintraube }
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

![Entscheidungsbaum mit den Fragen „Mehr als 7 Samen?“, „Weniger als 4 Samen?“, zweimal „Schale essbar?“ und „Farbe orange?“. Die sechs Blatt-Stellen von links nach rechts: A, die Orange, B, C, D, E](./img/tree.png)

Die Fruchtsorten werden mit dem Entscheidungsbaum oben bestimmt. Ein Entscheidungsbaum sieht aus wie ein Baum, der auf dem Kopf steht: Oben ist die Wurzel und unten sind die Blätter. Außerdem sind die Wurzel und die Astgabeln mit Fragen beschriftet, die man mit ja oder nein beantworten kann.

Zur Bestimmung der Fruchtsorte werden die Fragen im Baum anhand der Werte beantwortet. Das geht so: Beginne oben an der Wurzel. Beantworte die Frage dort und gehe auf den passenden Ast mit der richtigen Antwort (ja oder nein). Beantworte die nächste Frage und gehe auf den nächsten passenden Ast. Mache so weiter, bis du ein Blatt erreicht hast. Das Blatt zeigt die Fruchtsorte.

Nach den zehn Früchten ist der Entscheidungsbaum leider kaputt gegangen: Fast alle Blätter sind abgefallen. Nur das Blatt mit der Orange ist noch da.

**An welchen Stellen waren die Blätter? Ordne jeder Blatt-Stelle die passende Frucht zu.**
