---
short: Zcm4
title: Dreiecksverschleierung
summary: Betty verschleiert ihre Nachricht mit einem Dreieck-Trick. Kannst du das Textstück wieder entschlüsseln?
grades:
  "7-8": hard
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [cryptography]
methods: []
mascot: beaver
interaction:
  format: input
  props:
    kind: text
    placeholder: Textstück
source:
  type: original
  work: Informatik-Biber 2013
  year: 2013
  page: 10
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2013/Biberheft2013-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Betty möchte eine Nachricht an ihre beste Freundin schicken. Niemand sonst soll die Nachricht lesen können. Zuerst entfernt Betty alle Leerzeichen. Um den verbliebenen Text zu verschleiern, probiert sie das folgende Verfahren aus:

1. Der Text wird in Stücke eingeteilt, die 10 Zeichen (Buchstaben, Satzzeichen, …) lang sind.
2. Jedes Textstück wird in Form eines Dreiecks aufgeschrieben (wie im Bild).
3. Das Dreieck wird an einer diagonalen Achse gespiegelt (wie im Bild).
4. Das Dreieck wird wieder als Textstück geschrieben (wie im Bild).

![Beispiel: Das Textstück ARTYBEIJOH wird als Dreieck mit den Zeilen ARTY, BEI, JO, H geschrieben, an der Diagonalen gespiegelt (Zeilen ABJH, REO, TI, Y) und wieder als Textstück ABJHREOTIY geschrieben.](./img/example.png)

Die beste Freundin erhält von Betty einen verschleierten Text, der folgendes Textstück enthält: ASA?LKRLLE

**Wie lautet dieses Textstück im unverschleierten Text?**
