---
short: fFW8
title: Zum Theater!
summary: Vier Buslinien mit unterschiedlichen Takten. Über welche Haltestellen kommt Marcus am schnellsten zum Theater?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [dynamic-programming, dijkstra]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 336
    height: 238
    background: ./img/map.png
    hideNodes: true
    nodeRadius: 12
    nodes:
      - { id: A, x: 32, y: 52 }
      - { id: B, x: 87, y: 52 }
      - { id: C, x: 218, y: 52 }
      - { id: D, x: 282, y: 52 }
      - { id: E, x: 192, y: 117 }
      - { id: F, x: 256, y: 128 }
      - { id: G, x: 125, y: 145 }
      - { id: H, x: 191, y: 184 }
      - { id: I, x: 108, y: 226 }
      - { id: J, x: 276, y: 221 }
    edges: []
source:
  type: original
  work: Informatik-Biber 2025
  year: 2025
  page: 80
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2025/Biberheft_2025_web_komplett.pdf
  country: LT
  license: CC BY-SA 4.0
---
In Marcus' Stadt gibt es vier Buslinien. Sie starten an den Haltestellen A, B, C und D. Ihre Fahrstrecken kannst du unten in der Karte sehen.

Die ersten Busse jeder Linie fahren zur gleichen Zeit von den Starthaltestellen (A, B, C, D) ab: das ist Minute 0. Danach fahren die Busse in den angegebenen Zeit-Abständen (die Zahlen über den Starthaltestellen). Von Haltestelle A zum Beispiel fahren Busse alle 3 Minuten, also an den Minuten 0, 3, 6, 9 …

Für jeden Streckenabschnitt zwischen zwei Haltestellen gibt eine Zahl an, wie viele Minuten ein Bus für den Abschnitt benötigt. Zum Beispiel hat der erste Bus, der von A abfährt, an Minute 0 + 1 + 4 + 3 = 8 die Haltestelle F erreicht.

Marcus wohnt bei Haltestelle A. Von dort aus möchte er mit dem ersten Bus zum Theater (bei Haltestelle J) fahren. An Haltestellen, an denen sich Buslinien kreuzen, kann er innerhalb von 0 Minuten umsteigen. Er kann also mit jedem Bus weiterfahren, der zur gleichen Zeit oder später als er an der Umsteige-Haltestelle ankommt. Marcus weiß, auf welcher Route er fahren und umsteigen muss, damit er so früh wie möglich beim Theater ist.

![Karte mit den Haltestellen A bis J und vier farbigen Buslinien. Gelb: A, B, E, F; Takt 3; Abschnitte A–B 1, B–E 4, E–F 3. Grün: B, G, H, I; Takt 2; B–G 7, G–H 3, H–I 2. Blau: C, E, G, I, J; Takt 4; C–E 2, E–G 1, G–I 8, I–J 6. Rosa: D, F, H, J; Takt 5; D–F 1, F–H 5, H–J 9. Das Theater liegt bei J](./img/map.png)

**Welche Haltestellen liegen auf dieser Route?**
