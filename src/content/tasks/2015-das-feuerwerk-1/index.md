---
short: 1rRC
title: Das Feuerwerk 1
summary: Zwei Biber schicken sich Nachrichten mit Feuerwerksraketen. Doch der Raketencode ist mehrdeutig.
grades:
  "9-10": hard
gi:
  content: [information-data]
  process: [reasoning, modelling]
topics: [encoding, compression]
methods: [prefix-code]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 1
    options:
      - { id: a, image: ./img/a.png, alt: "Blau, orange, orange, blau, orange" }
      - { id: b, image: ./img/b.png, alt: "Orange, blau, orange, blau, orange" }
      - { id: c, image: ./img/c.png, alt: "Blau, orange, blau, blau, orange" }
      - { id: d, image: ./img/d.png, alt: "Blau, blau, blau, orange, blau" }
source:
  type: original
  work: Informatik-Biber 2015
  year: 2015
  page: 22
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2015/Biberheft2015-mit-Loesungen.pdf
  country: CA
  license: CC BY-SA 3.0
---
Zwei befreundete Biber leben in ihren Burgen durch einen großen Wald getrennt. Sie senden sich abends Nachrichten, indem sie Feuerwerksraketen nacheinander in den Himmel schießen. Jede Nachricht ist eine Reihe von Wörtern. Jedes Wort ist durch eine Abfolge von Raketen codiert. Sie benutzen nur fünf verschiedene Wörter (siehe Tabelle).

![Raketencode: BURG = blau, orange; BAUM = orange, blau, orange; FELS = blau, orange, blau; FLUSS = blau, blau; HOLZ = orange](./img/code.png)

Für die Nachricht „HOLZ BURG HOLZ“ würde zum Beispiel dieses Feuerwerk in den Himmel geschossen:

![Vier Raketen: orange, blau, orange, orange](./img/example.png)

Leider ist der Raketencode nicht eindeutig. Das Feuerwerk könnte auch die Bedeutung „BAUM HOLZ“ haben.

**Welche Nachricht ist eindeutig?**
