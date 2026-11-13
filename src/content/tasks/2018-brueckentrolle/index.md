---
short: 3QWz
title: Brückentrolle
summary: Trolle unter Brücken tauschen Holz, Fisch und Karotte aus. Was muss Katja in den Fluss werfen, damit bei Justus Holz ankommt?
grades:
  "5-6": hard
  "7-8": medium
  "9-10": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming]
methods: [sequence]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: Sie lässt einen Fisch in Fluss 1 fallen. }
      - { id: b, label: Sie lässt einen Fisch in Fluss 2 fallen. }
      - { id: c, label: Sie lässt eine Karotte in Fluss 3 fallen. }
      - { id: d, label: Sie lässt ein Stück Holz in Fluss 3 fallen. }
source:
  type: original
  work: Informatik-Biber 2018
  year: 2018
  page: 18
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2018/Biberheft2018-mit-Loesungen.pdf
  country: HU
  license: CC BY-SA 4.0
---
Von einem Berg kommen drei Flüsse. Sie fließen unter Brücken hindurch.

Katja kann einen Gegenstand in einen der drei Flüsse fallen lassen: ein Stück Holz, einen Fisch oder eine Karotte.

Unter allen Brücken sitzen Trolle. Sie ersetzen Gegenstände, die unter den Brücken hindurch fließen. Der Troll unter der Brücke oben links ersetzt zum Beispiel jede Karotte durch einen Fisch:

![Eine Brücke, an der eine Karotte durch einen Fisch ersetzt wird](./img/example.png)

![Drei Flüsse (1, 2, 3) vom Berg. Fluss 1: Karotte wird zu Fisch. Fluss 2: erst Fisch wird zu Holz, dann Karotte wird zu Fisch. Fluss 3: Holz wird zu Fisch, dann Karotte wird zu Fisch. Danach vereinigen sich die Flüsse 1 und 2, es folgt Holz wird zu Karotte. Beide vereinigen sich mit Fluss 3, danach folgen Karotte wird zu Holz und Fisch wird zu Karotte. Justus wartet am Ende.](./img/rivers.png)

Justus wartet hinter der letzten Brücke. Er möchte ein Stück Holz bekommen. Katja weiß, was die Brückentrolle machen.

**Was muss Katja tun, damit Justus Holz bekommt?**
