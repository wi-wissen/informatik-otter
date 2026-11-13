---
short: CR2J
title: Ricca-Karten 1
summary: Auf Barbaras Monsterkarten darf bei jeder Eigenschaft nur ein bestimmter Wertetyp stehen. Welche Karte ist richtig ausgefüllt?
grades:
  "3-4": easy
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [data-structures, modelling]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, label: A, image: ./img/card-a.png, alt: "Karte 4 mit Name LORI, Hörner 2, Augen ✓" }
      - { id: b, label: B, image: ./img/card-b.png, alt: "Karte 4 mit Name LORI, Hörner ✓, Augen 3" }
      - { id: c, label: C, image: ./img/card-c.png, alt: "Karte 4 mit Name LORI, Hörner 2, Augen 3" }
      - { id: d, label: D, image: ./img/card-d.png, alt: "Karte 4 mit Name ✓, Hörner 2, Augen 3" }
source:
  type: original
  work: Informatik-Biber 2024
  year: 2024
  page: 49
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2024/Biberheft_2024_web_komplett.pdf
  country: CH
  license: CC BY-SA 4.0
---
Barbara sammelt Karten mit Monstern, den „Riccas“. Auf jeder Karte sind die Eigenschaften eines Riccas angegeben: der **Name**, die **Anzahl der Augen** und ob das Ricca **Hörner** hat.

Hier sind drei Ricca-Karten, auf denen die Werte der Eigenschaften stehen:

![Drei Ricca-Karten. Karte 1: JOSI, Hörner X, Augen 3. Karte 2: MONI, Hörner X, Augen 3. Karte 3: BENI, Hörner ✓, Augen 2](./img/examples.png)

Für jede Eigenschaft ist festgelegt, welche Werte erlaubt sind:

| Eigenschaft | erlaubte Werte |
|---|---|
| Name | Text (mehrere Buchstaben) |
| hat Hörner | ✓ oder X |
| Anzahl der Augen | Zahlen |

Barbara bekommt vier Karten für ein weiteres Ricca. Aber nur auf einer Karte haben alle Eigenschaften erlaubte Werte.

**Auf welcher?**
