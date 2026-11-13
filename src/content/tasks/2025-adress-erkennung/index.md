---
short: h58b
title: Adress-Erkennung
summary: Vier Diagramme aus Kreisen und Pfeilen sollen Mail-Adressen erkennen. Welches macht das fehlerfrei?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [languages-automata]
  process: [modelling, reasoning]
topics: [automata, formal-languages]
methods: [finite-automaton, regular-expression]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, label: A }
      - { id: b, label: B }
      - { id: c, label: C }
      - { id: d, label: D }
source:
  type: original
  work: Informatik-Biber 2025
  year: 2025
  page: 7
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2025/Biberheft_2025_web_komplett.pdf
  country: AT
  license: CC BY-SA 4.0
---
Die IT-Biber brauchen ein System, das erkennt, ob eine Zeichenfolge eine Biber-Mail-Adresse ist. Eine Biber-Mail-Adresse besteht aus drei Teilen:

- dem Benutzernamen: eine beliebige, nicht leere Zeichenfolge aus Kleinbuchstaben (a-z) und Ziffern (0-9),
- dem At-Zeichen (@) und
- dem Servernamen, der wiederum aus drei Teilen besteht:
  - dem Domänennamen: eine beliebige, nicht leere Zeichenfolge aus Kleinbuchstaben und Ziffern,
  - einem Punkt (.) und
  - dem Top-Level-Domänennamen: eine beliebige, nicht leere Zeichenfolge aus Kleinbuchstaben und Ziffern.

„Nicht leere“ Zeichenfolgen bestehen aus mindestens einem Zeichen. Ein Beispiel für eine Biber-Mail-Adresse ist: bebro@birke2.amfluss

Die IT-Biber überlegen sich vier Systeme und beschreiben sie mit Diagrammen aus Kreisen und Pfeilen. Ein Kreis steht für einen der Zustände, in denen das System sein kann. Ein Pfeil beschreibt den Wechsel zu einem nächsten, möglicherweise gleichen Zustand. Die Beschriftung des Pfeils sagt, zu welchen Zeichen dieser Zustandswechsel passt.

Ein System untersucht eine Zeichenfolge Zeichen für Zeichen, von links nach rechts, und ist zu Beginn im Zustand **S**. Der nächste Zustand hängt vom aktuell untersuchten Zeichen ab: Das System folgt dem Zustandswechsel, der zum aktuellen Zeichen passt. Ist das System nach dem letzten Zeichen im Zustand **E**, hat es die Zeichenfolge als Biber-Mail-Adresse erkannt.

**A)**

![Automat A: S, dann a-z,0-9 zu einem Zustand mit Schleife a-z,0-9, dann @, dann a-z,0-9 zu einem Zustand mit Schleife, dann Punkt, dann a-z,0-9 zu E mit Schleife a-z,0-9](./img/a.png)

**B)**

![Automat B: S, a-z,0-9 zu Zustand mit Schleife, dann @, dann a-z,0-9 und Punkt zu E mit Schleife a-z,0-9 und Punkt](./img/b.png)

**C)**

![Automat C: S, a-z,0-9, @, a-z,0-9, Punkt, a-z,0-9 zu E, jeweils ohne Schleifen](./img/c.png)

**D)**

![Automat D: S, a-z,0-9 zu Zustand mit Schleife, @ zu nächstem Zustand, Punkt zu E, Rückpfeil a-z,0-9 und Schleife bei E](./img/d.png)

**Nur eines dieser Systeme erkennt alle möglichen Biber-Mail-Adressen korrekt. Welches?**
