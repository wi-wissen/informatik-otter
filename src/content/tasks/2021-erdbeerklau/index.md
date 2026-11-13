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
methods: []
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: edges
    width: 313
    height: 176
    background: ./img/art.png
    hideNodes: true
    nodes:
      - { id: TL, x: 35, y: 18, label: Eichel links oben }
      - { id: TM, x: 162, y: 18, label: Haselnuss oben }
      - { id: TR, x: 289, y: 18, label: Eichel rechts oben }
      - { id: BL, x: 37, y: 156, label: Stein links unten }
      - { id: BM, x: 164, y: 156, label: Stelle der Erdbeere }
      - { id: BR, x: 289, y: 156, label: Stein rechts unten }
    edges:
      - { id: TL-TM, from: TL, to: TM }
      - { id: TM-TR, from: TM, to: TR }
      - { id: TL-BL, from: TL, to: BL }
      - { id: TR-BR, from: TR, to: BR }
      - { id: TL-BM, from: TL, to: BM }
      - { id: BL-TM, from: BL, to: TM }
      - { id: TM-BM, from: TM, to: BM }
      - { id: TM-BR, from: TM, to: BR }
      - { id: BM-TR, from: BM, to: TR }
      - { id: BL-BM, from: BL, to: BM }
      - { id: BM-BR, from: BM, to: BR }
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

Kannst du ihm helfen, die Tat zu verschleiern? Er legt eine andere Sache an die Stelle der Erdbeere (Eichel, Haselnuss oder Stein) und entfernt genau einen Ast. Am Ende soll Anjas Regel auch für das veränderte Kunstwerk gelten.

**Welchen Ast muss er entfernen? Tippe ihn im Bild an. Überlege dir dazu, welche Sache er an die Stelle der Erdbeere legt.**
