---
short: 9ZtN
title: Brücken bauen!
summary: Bianca baut Brücken von Insel zu Insel und nimmt dabei Baumstämme mit. Wie wenige braucht sie bis zur Schule?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [algorithms, information-data]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [backtracking]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: edges
    width: 457
    height: 223
    background: ./img/map.png
    hideNodes: true
    nodes:
      - { id: A, x: 61, y: 111 }
      - { id: T, x: 133, y: 33 }
      - { id: M, x: 143, y: 101 }
      - { id: B, x: 145, y: 171 }
      - { id: C, x: 199, y: 135 }
      - { id: N, x: 219, y: 61 }
      - { id: D1, x: 273, y: 35 }
      - { id: D2, x: 261, y: 70 }
      - { id: D3, x: 275, y: 50 }
      - { id: D4, x: 270, y: 173 }
      - { id: D5, x: 278, y: 157 }
      - { id: D6, x: 261, y: 185 }
      - { id: S, x: 259, y: 205 }
      - { id: G, x: 323, y: 69 }
      - { id: H, x: 421, y: 83 }
      - { id: F, x: 310, y: 115 }
      - { id: E, x: 323, y: 163 }
      - { id: U, x: 358, y: 114 }
      - { id: V, x: 377, y: 183 }
    edges:
      - { id: AT, from: A, to: T }
      - { id: AB, from: A, to: B }
      - { id: TM, from: T, to: M }
      - { id: MB, from: M, to: B }
      - { id: MC, from: M, to: C }
      - { id: BC, from: B, to: C }
      - { id: NC, from: N, to: C }
      - { id: TD, from: T, to: D1 }
      - { id: ND, from: N, to: D2 }
      - { id: DG, from: D3, to: G }
      - { id: BD, from: B, to: D4 }
      - { id: DE, from: D5, to: E }
      - { id: DS, from: D6, to: S }
      - { id: GH, from: G, to: H }
      - { id: GF, from: G, to: F }
      - { id: FU, from: F, to: U }
      - { id: FE, from: F, to: E }
      - { id: UH, from: U, to: H }
      - { id: SV, from: S, to: V }
      - { id: VH, from: V, to: H }
source:
  type: original
  work: Informatik-Biber 2023
  year: 2023
  page: 17
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2023/Biberheft_2023_web_komplett.pdf
  country: NZ
  license: CC BY-SA 4.0
---
Auf der Insel ganz links sind Kinder eingezogen. Bianca soll Brücken bauen, über die die Kinder zur Schule auf der Insel ganz rechts gehen können.

Die Insel-Karte zeigt, wie viele Baumstämme es auf jeder Insel gibt. Diese Baumstämme kann Bianca nehmen, um an den Linien Brücken zu bauen. Die Zahl an einer Linie sagt, wie viele Baumstämme dort für eine Brücke benutzt werden. Sobald es zwischen zwei Inseln eine Brücke gibt, kann Bianca darüber gehen und Stämme, die sie noch hat, mitnehmen. Natürlich kann sie jeden Baumstamm nur für eine Brücke benutzen.

Bianca fängt auf der Insel links an. Ihr Ziel ist, möglichst wenige Baumstämme zu benutzen.

**An welchen Linien soll Bianca Brücken bauen, damit sie ihr Ziel erreicht?**
