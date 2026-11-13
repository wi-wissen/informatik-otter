---
short: xdq6
title: Pip der Pirat
summary: Pip sucht einen Schatz in einem von 16 Quadraten und darf den Papagei nach Mengen von Quadraten fragen. Wie viele Fragen braucht er mindestens?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [searching]
methods: [binary-search]
mascot: beaver
interaction:
  format: input
  props:
    kind: number
    placeholder: Anzahl der Fragen
source:
  type: original
  work: Informatik-Biber 2024
  year: 2024
  page: 45
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2024/Biberheft_2024_web_komplett.pdf
  country: HU
  license: CC BY-SA 4.0
---
Pip der Pirat sucht einen Schatz auf einer einsamen Insel. Pip hat einen Plan der Insel. Der Plan ist in 16 Quadrate eingeteilt.

![Der Inselplan mit 16 Quadraten in vier Reihen und vier Spalten. Drei Quadrate sind orange markiert](./img/map.png)

Plapper, Pips Papagei, weiß, in welchem Quadrat der Schatz ist. Pip kann Plapper nach einer beliebigen Menge von Quadraten fragen. Plapper sagt ihm dann, ob der Schatz in irgendeinem dieser Quadrate ist oder nicht.

Ein Beispiel: Pip fragt nach den drei Quadraten, die im Bild markiert sind. Wenn Plapper „ja“ sagt, weiß Pip, dass der Schatz in irgendeinem dieser drei Quadrate ist – aber nicht, in welchem.

Pip will so schnell wie möglich sicher wissen, in welchem Quadrat der Schatz ist.

**Wie oft muss Pip dazu mindestens nach Quadraten fragen?**
