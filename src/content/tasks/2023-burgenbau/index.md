---
short: 6VUV
title: Burgenbau
summary: Eine Biberburg hat vier Teile, aber nur wenige Arbeiter. Wie schnell lässt sie sich bauen?
grades:
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization]
methods: [scheduling]
mascot: beaver
interaction:
  format: input
  props:
    kind: number
    placeholder: Anzahl
    suffix: Tage
source:
  type: original
  work: Informatik-Biber 2023
  year: 2023
  page: 21
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2023/Biberheft_2023_web_komplett.pdf
  country: HU
  license: CC BY-SA 4.0
---
Eine Biberburg besteht aus 4 Teilen. Bei jedem Teil wird gleichzeitig über und unter Wasser gearbeitet. Die beteiligten Biber sind aber spezialisiert: jeder arbeitet entweder nur unter Wasser oder nur über Wasser.

Für den Bau einer neuen Burg stehen höchstens 7 Unterwasser-Arbeiter und 5 Überwasser-Arbeiter zur Verfügung. Sie können auch gleichzeitig verschiedene Teile bauen. Wichtig: Das Dach kann erst gebaut werden, wenn die Schlafhöhle fertig ist! Bei allen anderen Teilen ist die Reihenfolge egal.

Hier ist ein Arbeitsplan, mit dem die Biberburg nach 20 Tagen fertig wird. Der Plan zeigt für jedes Teil, wie lange dessen Bau dauert und wie viele Arbeiter unter und über Wasser dafür benötigt werden. Beim Wohnraum zum Beispiel arbeiten 3 Biber unter und 2 Biber über Wasser und sind nach 4 Tagen fertig.

![Arbeitsplan über 20 Tage mit zwei Diagrammen, oben die Unterwasser-Arbeiter, unten die Überwasser-Arbeiter: Wohnraum Tag 1 bis 4 (3 unter, 2 über Wasser), Schlafhöhle Tag 5 bis 7 (5 unter, 1 über Wasser), Dach Tag 8 bis 12 (2 unter, 2 über Wasser), Damm Tag 13 bis 20 (4 unter, 2 über Wasser)](./img/plan.png)

**Überlege dir einen Plan, mit dem die Biberburg nach möglichst wenigen Tagen fertig wird. Wie viele Tage sind das?**
