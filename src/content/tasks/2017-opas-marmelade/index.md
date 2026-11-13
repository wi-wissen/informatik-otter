---
short: C66d
title: Opas Marmelade
summary: Drei Kinder füllen Marmelade ab und teilen sich die Arbeit. Wie viele Gläser schaffen sie in zehn Minuten?
grades:
  "5-6": hard
gi:
  content: [systems]
  process: [modelling, structuring]
topics: [parallelism, optimization]
methods: [scheduling]
mascot: beaver
interaction:
  format: custom
  props:
    names: [Anna, Peter, Lisa]
    minutes: 10
    steps:
      - { id: wash, label: Glas spülen, minutes: 3 }
      - { id: fill, label: Marmelade einfüllen, minutes: 2 }
      - { id: close, label: Glas verschließen, minutes: 1 }
source:
  type: original
  work: Informatik-Biber 2017
  year: 2017
  page: 44
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2017/Biberheft2017-mit-Loesungen.pdf
  country: RU
  license: CC BY-SA 4.0
---
Opa kocht Marmelade. Anna, Peter und Lisa helfen ihm, die Marmelade in Gläser abzufüllen. Dazu müssen sie jeweils diese Arbeitsschritte erledigen – und zwar genau in dieser Reihenfolge:

1. Ein Glas spülen. Das dauert 3 Minuten.
2. Marmelade in das Glas füllen. Das dauert 2 Minuten.
3. Das Glas verschließen. Das dauert 1 Minute.

Anna, Peter und Lisa wollen sich die Arbeit aufteilen und dazu einen Plan erstellen. Dabei müssen sie beachten:

- Ein Arbeitsschritt muss komplett erledigt sein, bevor der nächste erledigt werden kann.
- Ein Glas muss ganz sauber sein, bevor man Marmelade einfüllt.
- Und das Glas darf natürlich erst verschlossen werden, wenn es fertig gefüllt ist.

Dieser Plan ist also nicht möglich:

![Ein nicht möglicher Plan: Anna spült ein Glas in den Minuten 1 bis 3, Peter füllt dieses Glas aber schon in Minute 3 ein, obwohl es noch nicht fertig gespült ist (rotes Kreuz). Lisa verschließt in Minute 5 ein Glas.](./img/impossible.png)

Anna, Peter und Lisa wollen in 10 Minuten möglichst viele Gläser abfüllen.

**Erstelle einen Plan, mit dem sie das schaffen.** Der Plan sagt dir am Ende, wie viele Gläser fertig abgefüllt sind.
