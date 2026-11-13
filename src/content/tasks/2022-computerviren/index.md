---
short: Zzq7
title: Computerviren
summary: Zwei Computerviren breiten sich Tag für Tag in einem Netz aus – welcher Knoten ist am Ende womit infiziert?
grades:
  "11-13": hard
gi:
  content: [systems]
  process: [modelling, reasoning]
topics: [networks, security]
methods: [bfs]
mascot: beaver
interaction:
  format: custom
  props:
    width: 912
    height: 494
    radius: 36
    marks:
      - { id: blue, label: BlueBug, image: ./img/bluebug.png }
      - { id: red, label: RedRaptor, image: ./img/redraptor.png }
      - { id: off, label: abgeschaltet, image: ./img/off.png }
    nodes:
      - { id: R, x: 200, y: 52, start: red }
      - { id: B, x: 55, y: 152, start: blue }
      - { id: n1, x: 398, y: 52 }
      - { id: n2, x: 566, y: 52 }
      - { id: n3, x: 733, y: 52 }
      - { id: n4, x: 467, y: 152 }
      - { id: n5, x: 634, y: 152 }
      - { id: n6, x: 800, y: 152 }
      - { id: n7, x: 200, y: 248 }
      - { id: n8, x: 365, y: 248 }
      - { id: n9, x: 695, y: 248 }
      - { id: n10, x: 862, y: 248 }
      - { id: n11, x: 90, y: 347 }
      - { id: n12, x: 302, y: 347 }
      - { id: n13, x: 585, y: 385 }
      - { id: n14, x: 170, y: 445 }
      - { id: n15, x: 415, y: 445 }
    edges:
      - { from: R, to: B }
      - { from: R, to: n1 }
      - { from: B, to: n7 }
      - { from: B, to: n11 }
      - { from: n1, to: n2 }
      - { from: n2, to: n3 }
      - { from: n1, to: n4 }
      - { from: n2, to: n5 }
      - { from: n4, to: n5 }
      - { from: n5, to: n6 }
      - { from: n5, to: n9 }
      - { from: n6, to: n9 }
      - { from: n6, to: n10 }
      - { from: n4, to: n8 }
      - { from: n7, to: n8 }
      - { from: n8, to: n12 }
      - { from: n8, to: n13 }
      - { from: n12, to: n15 }
      - { from: n13, to: n9 }
      - { from: n13, to: n15 }
      - { from: n11, to: n14 }
      - { from: n14, to: n15 }
source:
  type: original
  work: Informatik-Biber 2022
  year: 2022
  page: 20
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2022/Biberheft_2022_mit_Loesungen_web.pdf
  country: NZ
  license: CC BY-SA 4.0
---
In einem Computernetz haben sich zwei Netzknoten mit Computerviren infiziert: einer mit dem Virus **BlueBug** (Käfer-Symbol), ein anderer mit dem Virus **RedRaptor** (Drachen-Symbol).

Immer am Morgen breiten sich beide Viren aus. Jedes Virus infiziert dann zusätzlich alle Knoten, die mit den von ihm bereits infizierten Knoten direkt verbunden sind. Wenn ein Knoten mit beiden Viren infiziert ist, schaltet er nach einigen Stunden wegen Überlastung ab (graues Symbol). Die Viren können sich an den folgenden Tagen von dort also nicht weiter ausbreiten.

Unten siehst du das Computernetz mit den Knoten und ihren direkten Verbindungen. Die beiden zu Beginn infizierten Knoten sind markiert. Nach einigen Tagen sind alle Knoten mit einem Virus infiziert oder sogar abgeschaltet.

**Welche Knoten sind dann mit welchem Virus infiziert oder abgeschaltet?** Wähle für jeden Knoten die richtige Markierung (auch für die beiden Knoten vom Anfang).
