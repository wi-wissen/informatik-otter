---
short: C3PS
title: Lenas Nachricht
summary: Jeder Buchstabe wird durch zwei eingeritzte Zeichen verschlüsselt. Kannst du Lenas Nachricht entziffern?
grades:
  "7-8": medium
  "9-10": easy
gi:
  content: [information-data]
  process: [representing, modelling]
topics: [cryptography, encoding]
methods: [substitution-cipher]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, label: SAVEWATER }
      - { id: b, label: CLEARDAYS }
      - { id: c, label: SAVEMYDAM }
      - { id: d, label: CAREFORME }
source:
  type: original
  work: Informatik-Biber 2019
  year: 2019
  page: 28
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2019/Biberheft2019-mit-Loesungen.pdf
  country: CH
  license: CC BY-SA 4.0
---
Am Biberdamm findet Lena ein Stück Holz. Darin sind Zeichen und Buchstaben eingeritzt und in einer Tabelle angeordnet. Lena überlegt sich, dass sie mit Hilfe der Tabelle Nachrichten kodieren kann.

![Ein Stück Holz mit einer Tabelle: Oben stehen in einer Zeile neun Zeichen aus Strichen, Kreisen und einem Kreis mit Strich, links stehen in einer Spalte drei Handzeichen. In der Tabelle stehen in drei Reihen die Buchstaben A bis I, J bis R und S bis Z.](./img/table.png)

Jeder Buchstabe wird durch eine Kombination aus zwei Zeichen kodiert. Ein Beispiel: Das H steht in der ersten Reihe in der achten Spalte. Es wird also durch das Zeichen der ersten Reihe und das Zeichen der achten Spalte kodiert.

![Beispiel: Der Buchstabe H wird durch die Kombination aus dem Zeichen der ersten Reihe (Hand mit fünf Fingern) und dem Zeichen der achten Spalte (blauer Kreis mit drei Strichen) kodiert.](./img/example.png)

Lena kodiert nun eine Nachricht aus neun Buchstaben mit Hilfe der Tabelle:

![Neun Zeichenpaare, die Lenas Nachricht kodieren](./img/message.png)

**Wie lautet Lenas Nachricht?**
