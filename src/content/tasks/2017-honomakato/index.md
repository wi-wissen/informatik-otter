---
short: 5MRy
title: Honomakato
summary: Fünf Inseln hängen über Kupferkabel am Internet. Mit zwei neuen Kabeln soll es robust werden.
grades:
  "5-6": hard
  "7-8": medium
  "9-10": easy
gi:
  content: [information-data, algorithms]
  process: [modelling, reasoning]
topics: [graphs, networks]
methods: [graph-connectivity]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: edges
    width: 270
    height: 269
    background: ./img/islands.png
    hideNodes: true
    nodes:
      - { id: Ho, x: 63, y: 146, label: Ho }
      - { id: No, x: 127, y: 49, label: No }
      - { id: Ma, x: 230, y: 112, label: Ma }
      - { id: Ka, x: 155, y: 134, label: Ka }
      - { id: To, x: 131, y: 238, label: To }
    edges:
      - { id: HoMa, from: Ho, to: Ma }
      - { id: HoTo, from: Ho, to: To }
      - { id: NoKa, from: No, to: Ka }
      - { id: NoMa, from: No, to: Ma }
      - { id: NoTo, from: No, to: To }
      - { id: MaTo, from: Ma, to: To }
source:
  type: original
  work: Informatik-Biber 2017
  year: 2017
  page: 25
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2017/Biberheft2017-mit-Loesungen.pdf
  country: DE
  license: CC BY-SA 4.0
---
Die Inselgruppe Honomakato besteht aus den fünf Inseln Ho, No, Ma, Ka und To. Die Hauptinsel Ho ist über ein Glasfaserkabel mit dem Internet verbunden. Außerdem sind einige Kupferkabel verlegt: zwischen Ho und No, Ho und Ka, Ka und Ma sowie Ka und To. So sind alle Inseln mit Ho verbunden und dadurch auch mit dem Internet.

Die Bewohner von Honomakato möchten eine robuste Verbindung aller Inseln mit dem Internet: Auch wenn irgendeines der Kupferkabel beschädigt würde, sollte jede Insel noch mit dem Internet verbunden sein.

**Sorge dafür, dass Honomakato eine robuste Verbindung mit dem Internet bekommt. Verlege dazu zwei weitere Kupferkabel zwischen den Inseln.**

Klicke auf die Verbindungslinien, die du als Kabel verlegen möchtest. Es gibt mehrere richtige Antworten.
