---
short: Z2H8
title: Serielle Übertragung
summary: Alice und Bob senden sich mit Taschenlampen Ziffernblöcke aus Nullen und Einsen. Welche Blöcke kommen hier an?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [information-data, systems]
  process: [representing, reasoning]
topics: [encoding, networks]
methods: [binary-numbers]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: Die Ziffernblöcke 0011 und 1100 }
      - { id: b, label: Die Ziffernblöcke 1100 und 0011 }
      - { id: c, label: Nur der Ziffernblock 0101 }
      - { id: d, label: Die Ziffernblöcke 0011 und 1110 }
source:
  type: original
  work: Informatik-Biber 2013
  year: 2013
  page: 42
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2013/Biberheft2013-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Alice und Bob möchten nachts mit ihren Taschenlampen Nachrichten übertragen. Sie senden sich Blöcke von vier Ziffern. Die Ziffern sind 0 oder 1. Zum Start eines Ziffernblocks schalten sie die Taschenlampe für eine Sekunde ein. Danach kommen die vier Ziffern im Sekundentakt. Taschenlampe an bedeutet 1, Taschenlampe aus bedeutet 0. Bis zum nächsten Block kommt dann eine Pause von mindestens einer Sekunde, mit Taschenlampe aus.

Das Beispiel zeigt die Übertragung der Ziffernblöcke 0110 und 1001:

![Zeitdiagramm (An/Aus) in Sekunden: Start (an), dann 0 (aus), 1 (an), 1 (an), 0 (aus); Pause; Start (an), 1 (an), 0 (aus), 0 (aus), 1 (an)](./img/example.png)

![Zeitdiagramm mit An/Aus über der Zeit in Sekunden, siehe Frage](./img/signal.png)

**Welche Ziffernblöcke werden hier übertragen?**
