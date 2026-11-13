---
short: i3gQ
title: Kugelbahn
summary: Vier Wippen kippen bei jeder Kugel um. Was zeigen sie, nachdem fünf Kugeln durchgerollt sind?
grades:
  "9-10": medium
  "11-13": easy
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [encoding, computer-architecture]
methods: [binary-numbers]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 3
    options:
      - { id: "0011", label: "0011" }
      - { id: "0100", label: "0100" }
      - { id: "0101", label: "0101" }
      - { id: "0111", label: "0111" }
      - { id: "1010", label: "1010" }
      - { id: "1100", label: "1100" }
source:
  type: original
  work: Informatik-Biber 2019
  year: 2019
  page: 24
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2019/Biberheft2019-mit-Loesungen.pdf
  country: AT
  license: CC BY-SA 4.0
---
Eine Kugelbahn hat vier Wippen. Jede Wippe kann auf zwei Positionen stehen:

- Ist die Wippe nach links geneigt, steht sie auf Position 0.
- Ist die Wippe nach rechts geneigt, steht sie auf Position 1.

Wenn eine Kugel auf eine Wippe trifft, ändert die Wippe ihre Position und die Kugel rollt weiter, wie die drei Bilder zeigen: Eine Wippe auf 0 kippt auf 1, und die Kugel rollt nach rechts weiter.

![Drei Bilder: Eine Kugel fällt auf eine Wippe in Position 0, die Wippe kippt auf Position 1, und die Kugel rollt nach rechts weg.](./img/rocker.png)

Hier ist eine Animation der Kugelbahn. Zu Beginn stehen alle Wippen auf Position 0; die Wippen zeigen insgesamt also: 0000. Dann rollen nacheinander zwei Kugeln. Danach zeigen die Wippen: 0010.

![Die Kugelbahn mit vier Wippen, die schräg von oben rechts nach unten links angeordnet sind. Alle zeigen 0.](./img/track.png)

Die Kugelbahn wird zurückgesetzt, und die Wippen zeigen wieder 0000. Nun rollen nacheinander fünf Kugeln.

**Was zeigen die Wippen jetzt?**
