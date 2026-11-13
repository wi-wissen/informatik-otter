---
short: T3gf
title: Erdbeerklau
summary: Anjas Bruder hat die Erdbeere aufgegessen. Mit einer neuen Sache und einem Ast weniger soll es niemand merken.
grades:
  "5-6": hard
  "7-8": medium
  "9-10": easy
gi:
  content: [information-data, algorithms]
  process: [modelling, reasoning]
topics: [graphs, modelling]
methods: [graph-coloring]
mascot: beaver
interaction:
  format: custom
  props:
    background: ./img/art.png
    width: 783
    height: 441
    fixed: { TL: acorn, TM: hazelnut, TR: acorn, BL: stone, BR: stone }
    gap: { id: BM, x: 362, y: 352, w: 106, h: 86, label: Stelle der Erdbeere }
    labels: { TL: Eichel links oben, TM: Haselnuss oben, TR: Eichel rechts oben, BL: Stein links unten, BM: die Stelle der Erdbeere, BR: Stein rechts unten }
    pieces:
      - { id: acorn, label: Eichel, image: ./img/acorn.png }
      - { id: hazelnut, label: Haselnuss, image: ./img/hazelnut.png }
      - { id: stone, label: Stein, image: ./img/stone.png }
    edges:
      - { id: tl-tm, from: TL, to: TM, x1: 140, y1: 65, x2: 352, y2: 28 }
      - { id: tm-tr, from: TM, to: TR, x1: 457, y1: 30, x2: 668, y2: 38 }
      - { id: tl-bl, from: TL, to: BL, x1: 95, y1: 108, x2: 70, y2: 322 }
      - { id: tr-br, from: TR, to: BR, x1: 715, y1: 95, x2: 755, y2: 335 }
      - { id: tl-bm, from: TL, to: BM, x1: 112, y1: 92, x2: 352, y2: 342 }
      - { id: tm-bl, from: TM, to: BL, x1: 360, y1: 100, x2: 95, y2: 342 }
      - { id: tm-br, from: TM, to: BR, x1: 455, y1: 95, x2: 700, y2: 345 }
      - { id: tr-bm, from: TR, to: BM, x1: 690, y1: 90, x2: 440, y2: 345 }
      - { id: tm-bm, from: TM, to: BM, x1: 415, y1: 98, x2: 403, y2: 332 }
      - { id: bl-bm, from: BL, to: BM, x1: 145, y1: 408, x2: 355, y2: 410 }
      - { id: bm-br, from: BM, to: BR, x1: 470, y1: 410, x2: 665, y2: 390 }
source:
  type: original
  work: Informatik-Biber 2021
  year: 2021
  page: 23
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2021/Biberheft_2021_mit_Loesungen_web.pdf
  country: CH
  license: CC BY-SA 4.0
---
Anja will im Garten ein Kunstwerk herstellen und hat dafür Sachen gesammelt: Eicheln, Haselnüsse, Steine und eine Erdbeere. Sie legt einige Sachen auf den Rasen. Danach legt Anja Äste zwischen die Sachen. Dafür hat sie diese Regel: Ein Ast darf nicht zwischen zwei gleichen Sachen liegen – zum Beispiel nicht zwischen zwei Eicheln.

Das ist das fertige Kunstwerk:

![Oben liegen eine Eichel, eine Haselnuss und eine Eichel, unten ein Stein, eine Erdbeere und ein Stein. Äste verbinden: oben die Eichel mit der Haselnuss und die Haselnuss mit der Eichel, links und rechts außen oben mit unten, die Haselnuss mit der Erdbeere, außerdem kreuzen sich links und rechts je zwei Äste schräg. Unten verbinden Äste den Stein mit der Erdbeere und die Erdbeere mit dem anderen Stein.](./img/art-start.png)

Als Anja weg ist, kommt ihr Bruder und isst die Erdbeere.

**Kannst du ihm helfen, die Tat zu verschleiern?**
Lege eine andere Sache an die Stelle der Erdbeere und entferne genau einen Ast. Am Ende soll Anjas Regel auch für das veränderte Kunstwerk gelten.
