---
short: 5chc
title: Postkutschen
summary: Postkutschen verbinden acht Siedlungen, jede fährt nur an einem Wochentag. Welche Route bringt ein Paket am schnellsten ans Ziel?
grades:
  "5-6": hard
  "7-8": medium
  "9-10": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [routing]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: 1 - 2 - 5 - 8 }
      - { id: b, label: 1 - 2 - 6 - 8 }
      - { id: c, label: 1 - 3 - 6 - 8 }
      - { id: d, label: 1 - 4 - 7 - 8 }
source:
  type: original
  work: Informatik-Biber 2012
  year: 2012
  page: 32
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2012/Biberheft2012-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Im Wilden Westen, wo die Cowboy-Biber leben, hat die Bebras Stagecoach Company Postkutschenlinien zwischen acht Siedlungen (1 bis 8) eingerichtet. Im Fahrplan steht neben jeder Siedlung, an welchem Wochentag eine Postkutsche abfährt. Sie fährt jeweils frühmorgens los und erreicht am Abend desselben Tages die nächste Siedlung.

![Fahrplan als Graph: 1 (Donnerstag) → 2 (Samstag), 3 (Mittwoch), 4 (Sonntag); 2 → 5 (Mittwoch) und 6 (Montag); 3 → 6; 4 → 7 (Samstag); 5, 6 und 7 → 8 (Freitag)](./img/network.png)

**Über welche Route wird ein Paket am schnellsten von Siedlung 1 nach Siedlung 8 transportiert?**
