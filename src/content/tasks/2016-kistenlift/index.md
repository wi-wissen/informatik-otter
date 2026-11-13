---
short: aW1V
title: Kistenlift
summary: Zwölf Kisten müssen in einen Lift verladen werden, der erst ab 80 kg fährt und höchstens 100 kg trägt. Was passiert genau?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [data-structures]
methods: [stack]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: "A) Bei der zweiten Fahrt des Lifts wiegt seine Ladung 98 kg." }
      - { id: b, label: "B) Es werden keine Kisten auf der anderen Seite der Laderampe abgestellt." }
      - { id: c, label: "C) Bei einer Fahrt des Lifts wiegt seine Ladung 100 kg." }
      - { id: d, label: "D) Der Lift macht insgesamt fünf Fahrten." }
      - { id: e, label: "E) Es ist unmöglich, alle Kisten auf die beschriebene Weise in den Keller zu bringen." }
source:
  type: original
  work: Informatik-Biber 2016
  year: 2016
  page: 40
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2016/Biberheft2016-mit-Loesungen.pdf
  country: CZ
  license: CC BY-SA 3.0
---
Von einer Laderampe aus führt ein Lift in einen Keller. Auf einer Seite der Laderampe stehen eine Reihe Kisten. Die Kisten wiegen, von links nach rechts in kg (Kilogramm): 15, 30, 25, 10, 30, 45, 23, 50, 55, 34, 20, 40.

![Die zwölf Kisten stehen in einer Reihe auf der Laderampe, rechts davon der Gabelstapler und der Lift mit der Aufschrift 80–100 kg](./img/ramp.png)

Die Kisten sollen in den Lift geladen und damit in den Keller gebracht werden. Der Lift macht eine Fahrt, sobald seine Ladung mindestens 80 kg und höchstens 100 kg wiegt. Er kommt danach leer wieder zurück.

Die Laderampe ist so eng, dass Kisten nicht aneinander vorbei gehoben werden können. Deshalb wird immer die vorderste Kiste der Reihe als nächste bearbeitet (das ist die Kiste, die dem Lift am nächsten steht). Diese Kiste wird nur in den Lift geladen, falls danach dessen Ladung höchstens 100 kg wiegt. Andernfalls wird die Kiste auf der anderen Seite der Laderampe in einer neuen Reihe abgestellt.

Wenn alle Kisten der Reihe bearbeitet worden sind, werden die Kisten, die nun auf der anderen Seite der Laderampe in einer Reihe stehen, genau so bearbeitet.

Alle Kisten werden nun auf die beschriebene Weise mit dem Lift in den Keller gebracht.

**Welche der folgenden Aussagen ist richtig?**
