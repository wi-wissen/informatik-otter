---
short: XVE7
title: Weihnachtsbaum
summary: Vater Biber baut seinen Weihnachtsbaum nach acht Ersetzungsregeln. Welcher der vier Bäume ist regelgerecht gebaut?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [languages-automata]
  process: [modelling, reasoning]
topics: [formal-languages]
methods: [context-free-grammar]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, image: ./img/baum-a.png, alt: "Baum A: ein Baum mit Zweigen, ohne Stern; oben ein einzelner Zweig, an den Zweigen Engel und Kerzen" }
      - { id: b, image: ./img/baum-b.png, alt: "Baum B: ein Baum mit roten Kugeln an den unteren Zweigen und Zweigen oben mit Kerze" }
      - { id: c, image: ./img/baum-c.png, alt: "Baum C: ein Baum mit Stern an der Spitze, Engeln und einer roten Kugel" }
      - { id: d, image: ./img/baum-d.png, alt: "Baum D: ein Baum mit Stern an der Spitze, Kerzen und roten Kugeln" }
source:
  type: original
  work: Informatik-Biber 2011
  year: 2011
  page: 37
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2011/Biberheft2011-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0 DE
---
Die Weihnachtszeit naht, und Vater Biber will für den Weihnachtsbaum sorgen. Er baut ihn, wie jedes Jahr, aus einzelnen Teilen. Dabei befolgt er genau die unten abgebildeten acht Regeln.

Jede Regel hat ein Ersetzungsfeld (gelber Kasten mit Buchstaben), von dem ein oder mehrere Pfeile ausgehen. Beim Bauen eines Baumes ersetzt Vater Biber ein solches Feld durch den Teil der Regel, auf den ein Pfeil zeigt. Dieser Teil kann wieder Ersetzungsfelder enthalten. Gibt es zwei oder mehr Pfeile, wie bei der Regel für das Ersetzungsfeld „A“, dann kann er sich für eine der Ersetzungen entscheiden.

![Die acht Regeln als Bild: S wird durch einen Christbaumständer mit den Feldern A, B, C darüber ersetzt; C durch einen Zweig oder einen Zweig mit Stern; E durch einen Engel, eine rote Kugel oder eine Kerze; für A, B, D, D1 und D2 zeigen Pfeile auf Stammstücke, Zweige und weitere Ersetzungsfelder](./img/regeln.png)

Vater Biber beginnt immer mit der Regel für „S“.

Unten sind vier Weihnachtsbäume abgebildet. Nur einer davon wurde nach den obigen Regeln gebaut – der ist also von Vater Biber.

**Welcher?**
