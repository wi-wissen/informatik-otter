---
short: F7Go
title: Partygäste
summary: Sarah will ihre Freunde zur Party einladen, aber manche wollen vorher wissen, wer sonst kommt. In welcher Reihenfolge fragt sie?
grades:
  "9-10": easy
gi:
  content: [information-data, algorithms]
  process: [modelling, structuring]
topics: [graphs, optimization]
methods: [topological-sort]
mascot: beaver
interaction:
  format: sort-list
  props:
    direction: horizontal
    startLabel: zuerst
    endLabel: zuletzt
    items:
      - { id: alicia, label: Alicia }
      - { id: beat, label: Beat }
      - { id: caro, label: Caro }
      - { id: david, label: David }
      - { id: emil, label: Emil }
source:
  type: original
  work: Informatik-Biber 2016
  year: 2016
  page: 51
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2016/Biberheft2016-mit-Loesungen.pdf
  country: IS
  license: CC BY-SA 3.0
---
Sarah plant eine Party. Sie möchte ihre Freunde Alicia, Beat, Caro, David und Emil dazu einladen. Aber sie kennt das schon: Manche Freunde wollen gerne wissen, ob bestimmte andere Freunde auch zur Party kommen werden. Nämlich:

- David will wissen, ob Alicia zur Party kommt.
- Beat will wissen, ob Emil zur Party kommt.
- Caro will wissen, ob Beat und David zur Party kommen.
- Alicia will wissen, ob Beat und Emil zur Party kommen.

Wenn Sarah mit David sprechen möchte, muss sie also vorher mit Alicia sprechen. Und so weiter.

**In welcher Reihenfolge muss Sarah mit ihren Freunden sprechen?** Bringe die Namen in eine passende Reihenfolge.
