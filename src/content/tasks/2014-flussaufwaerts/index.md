---
short: c1WY
title: Flussaufwärts
summary: Der Biber hat sich 15 Zweige angefuttert. Welchen Weg durch das Flusssystem kann er mit dieser Energie schaffen?
grades:
  "5-6": medium
  "7-8": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [dijkstra]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: "Start → C → E → Ziel" }
      - { id: b, label: "Start → A → C → E → D → Ziel" }
      - { id: c, label: "Start → B → C → D → E → Ziel" }
      - { id: d, label: "Start → B → C → D → Ziel" }
source:
  type: original
  work: Informatik-Biber 2014
  year: 2014
  page: 23
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2014/Biberheft2014-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Um zu seinem Ziel zu kommen, muss der Biber einen passenden Weg durch das Flusssystem nehmen. Auf seinem Weg muss er Hindernisse überwinden. Dabei verbraucht der Biber folgende Mengen an Energie:

![Tabelle: Blätter kosten 2 Zweige, Steine kosten 3 Zweige, ein Holzzaun kostet 5 Zweige](./img/legend.png)

Um genug Energie zu haben, isst der Biber vor dem Start 15 Zweige. Im abgebildeten Flusssystem siehst du die Hindernisse. A, B, C, D und E sind die Zwischenstationen auf den möglichen Wegen.

![Das Flusssystem mit Start unten und Ziel oben, den Stationen A bis E und den Hindernissen auf den Flussabschnitten](./img/river.png)

**Welchen der folgenden Wege wird der Biber nehmen? Beachte, dass er vor dem Start nur 15 Zweige gegessen hat.**
