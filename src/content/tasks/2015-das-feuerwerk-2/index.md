---
short: x1nV
title: Das Feuerwerk 2
summary: Wie viele verschiedene Bedeutungen kann ein langes Raketenfeuerwerk haben, wenn der Code nicht eindeutig ist?
grades:
  "11-13": medium
gi:
  content: [information-data]
  process: [reasoning, modelling]
topics: [encoding, compression]
methods: [dynamic-programming, prefix-code]
mascot: beaver
interaction:
  format: input
  props:
    kind: number
source:
  type: original
  work: Informatik-Biber 2015
  year: 2015
  page: 23
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2015/Biberheft2015-mit-Loesungen.pdf
  country: CA
  license: CC BY-SA 3.0
---
Zwei befreundete Biber leben in ihren Burgen durch einen großen Wald getrennt. Sie senden sich abends Nachrichten, indem sie Feuerwerksraketen nacheinander in den Himmel schießen. Jede Nachricht ist eine Reihe von Wörtern. Jedes Wort ist durch eine Abfolge von Raketen codiert. Sie benutzen nur fünf verschiedene Wörter (siehe Tabelle).

![Raketencode: BURG = blau, orange; BAUM = orange, blau, orange; FELS = blau, orange, blau; FLUSS = blau, blau; HOLZ = orange](./img/code.png)

Für die Nachricht „HOLZ BURG HOLZ“ würde zum Beispiel dieses Feuerwerk in den Himmel geschossen:

![Vier Raketen: orange, blau, orange, orange](./img/example.png)

Leider ist der Raketencode nicht eindeutig. Das Feuerwerk könnte auch die Bedeutung „BAUM HOLZ“ haben.

![Acht Raketen: blau, orange, blau, orange, blau, orange, blau, blau](./img/message.png)

**Wie viele verschiedene Bedeutungen könnte dieses Feuerwerk haben?**
