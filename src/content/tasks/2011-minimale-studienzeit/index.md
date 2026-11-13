---
short: Q1sX
title: Minimale Studienzeit
summary: Kurse bauen aufeinander auf. Wie viele Monate dauert das Studium mindestens, wenn man Kurse parallel belegen darf?
grades:
  "11-13": hard
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [scheduling, topological-sort]
mascot: beaver
interaction:
  format: input
  props:
    kind: number
    placeholder: Monate
    suffix: Monate
source:
  type: original
  work: Informatik-Biber 2011
  year: 2011
  page: 21
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2011/Biberheft2011-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0 DE
---
Eine Universität bietet dreimonatige Kurse an. Einige Kurse kann man aber erst dann besuchen, wenn man einen oder mehrere andere Kurse bereits absolviert hat. Die Abfolge der Kurse wird in diesem Diagramm mit Hilfe von Pfeilen dargestellt:

![Gerichteter Graph der Kurse K1 bis K14. Pfeile: K1→K2, K1→K3, K1→K4, K2→K3, K3→K6, K3→K9, K3→K10, K3→K7, K10→K7, K10→K11, K11→K12, K4→K14, K13→K4, K13→K14, K14→K3, K14→K5, K5→K8.](./img/kurse.png)

Kurs K1 kann man beispielsweise sofort besuchen. Kurs K4 kann man erst dann besuchen, wenn man die Kurse K1 und K13 bereits absolviert hat. Soweit die im Diagramm dargestellten Bedingungen das zulassen, können Kurse parallel besucht werden.

**Wie viele Monate benötigt man mindestens, um alle Kurse zu absolvieren?**
