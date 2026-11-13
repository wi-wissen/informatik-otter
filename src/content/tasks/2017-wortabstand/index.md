---
short: u52i
title: Wortabstand
summary: Wie viele Schritte braucht man mindestens, um das Wort „Emil“ in „Erich“ zu verwandeln?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [algorithm-analysis, encoding]
methods: [edit-distance]
mascot: beaver
interaction:
  format: input
  props:
    kind: number
    suffix: Schritte
source:
  type: original
  work: Informatik-Biber 2017
  year: 2017
  page: 60
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2017/Biberheft2017-mit-Loesungen.pdf
  country: PL
  license: CC BY-SA 4.0
---
Um ein Wort zu ändern, darf man die folgenden Schritte machen:

- einen Buchstaben an einer beliebigen Stelle hinzufügen;
- einen Buchstaben an einer beliebigen Stelle entfernen;
- einen Buchstaben an einer beliebigen Stelle durch einen anderen Buchstaben ersetzen.

Der Abstand zwischen zwei Wörtern ist die Mindestanzahl solcher Schritte, die man benötigt, um das erste Wort in das zweite zu ändern.

Ein Beispiel: Der Abstand zwischen „rennen“ und „stehen“ ist 4:

1. rennen → sennen („r“ durch „s“ ersetzen)
2. sennen → stennen („t“ einfügen)
3. stennen → stehnen („n“ durch „h“ ersetzen)
4. stehnen → stehen („n“ entfernen)

**Was ist der Abstand zwischen „Emil“ und „Erich“?**
