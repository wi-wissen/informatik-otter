---
short: w9Gq
title: Pumpsystem
summary: Eine Gartenpumpe läuft nicht mehr. Welche Strategie findet das defekte Teil sicher?
grades:
  "11-13": easy
gi:
  content: [algorithms]
  process: [reasoning]
topics: [algorithm-analysis, error-detection]
methods: [binary-search]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 1
    options:
      - { id: a, label: Der Biber muss zuerst die Pumpe austauschen, denn sie ist das wichtigste Teil. }
      - { id: b, label: "Der Biber soll die Teile nach und nach einzeln durch die Ersatzteile austauschen. Wenn das System nach dem Austausch eines Teils wieder funktioniert, dann war dieses Teil defekt." }
      - { id: c, label: Der Biber sollte lieber neue Teile besorgen. Die Ersatzteile sind ja schon gebraucht. }
      - { id: d, label: "Der Biber sollte nach und nach immer zwei Teile gleichzeitig austauschen. So kommt er schnell zum Ziel." }
source:
  type: original
  work: Informatik-Biber 2017
  year: 2017
  page: 50
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2017/Biberheft2017-mit-Loesungen.pdf
  country: AT
  license: CC BY-SA 4.0
---
Ein Biber hat für seinen Gemüsegarten ein elektrisches Pumpsystem gebaut. Es ist über eine Steckdose mit dem Stromnetz verbunden und besteht aus diesen Teilen:

- einem langen Kabel,
- einem kurzen Kabel,
- einer Sicherung und
- einer Pumpe.

![Das Pumpsystem: Von der Steckdose führt das lange Kabel zum kurzen Kabel, das zur Pumpe führt. An der Pumpe sitzt die Sicherung. Die Pumpe saugt Wasser aus einem Behälter.](./img/system.png)

Eines Tages funktioniert das Pumpsystem nicht mehr. Der Biber nimmt an, dass nur ein Teil defekt ist. Das möchte er finden, indem er Teile austauscht. Er hat nämlich gebrauchte, aber garantiert voll funktionstüchtige Ersatzteile.

Von seinen Freunden erhält der Biber verschiedene Empfehlungen, wie er vorgehen soll.

**Wie soll der Biber vorgehen? Wähle die Empfehlung, mit der der Biber ein einzelnes defektes Teil sicher finden wird.**
