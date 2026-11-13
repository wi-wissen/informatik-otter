---
short: 1R1z
title: Stadtverkehr
summary: Ein Taxifahrer merkt sich in einer Tabelle, wo er welche Straße befahren darf. Wie sieht die Tabelle für Beavertown aus?
grades:
  "5-6": hard
gi:
  content: [information-data]
  process: [modelling, representing]
topics: [graphs, modelling]
methods: []
mascot: beaver
interaction:
  format: pixel-grid
  props:
    rows: 5
    cols: 5
    palette: ["#ffffff", "#a6e05c"]
    locked: [[true, false, false, false, false], [false, true, false, false, false], [false, false, true, false, false], [false, false, false, true, false], [false, false, false, false, true]]
source:
  type: original
  work: Informatik-Biber 2014
  year: 2014
  page: 44
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2014/Biberheft2014-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
In Beaver Springs wurde neulich die Pine Street zur Einbahnstraße gemacht. Nun muss Jack, der einzige Taxifahrer in der Gegend, sich neu merken, wie er von einem Ort zum anderen kommt. Für die drei Knotenpunkte 1, 2 und 3 legt Jack die folgende Tabelle an. Er setzt Häkchen in einige Felder der Tabelle, um sich zu merken, in welche Richtungen er welche Straßen befahren darf.

![Die Orte 1, 2 und 3: Beaver Ave verbindet 1 und 2 in beiden Richtungen, die Pine St führt als Einbahnstraße von 2 nach 3](./img/springs.png)

![Tabelle mit Häkchen in den Feldern (1,2), (2,1) und (2,3)](./img/example-table.png)

Auch im Nachbarort Beavertown wurden einige Straßen zu Einbahnstraßen gemacht.

![Karte von Beavertown mit den Knotenpunkten A bis E. E Walnut St führt als Einbahnstraße von B nach A, N Sassafras St als Einbahnstraße von B nach D, Plum Ln als Einbahnstraße von B nach C. Center St (A–E) und Mulberry Alley (E–D–C) sind in beiden Richtungen befahrbar](./img/town.png)

Jack braucht also auch für Beavertown eine Tabelle mit Häkchen. Die Tabelle hat fünf Zeilen (A bis E von oben nach unten) und fünf Spalten (A bis E von links nach rechts). Ein Häkchen in Zeile X und Spalte Y bedeutet: Jack darf von X nach Y fahren. Die Felder auf der Diagonale (von A nach A usw.) sind gesperrt.

**Setze die Häkchen in die richtigen Felder! Tippe dazu auf die Felder (grün = Häkchen).**
