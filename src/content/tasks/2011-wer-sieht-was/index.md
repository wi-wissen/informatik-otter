---
short: Ysr3
title: Wer sieht was?
summary: Lucia lädt ein Foto in einem sozialen Netzwerk hoch, aber Jacob soll es nie zu sehen bekommen. Wem darf sie es zeigen?
grades:
  "9-10": medium
  "11-13": easy
gi:
  content: [society]
  process: [reasoning, modelling]
topics: [security, graphs]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: "Dana, Michael, Eve" }
      - { id: b, label: "Dana, Eve, Monica" }
      - { id: c, label: "Michael, Eve, Jacob" }
      - { id: d, label: "Michael, Peter, Alex" }
source:
  type: original
  work: Informatik-Biber 2011
  year: 2011
  page: 39
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2011/Biberheft2011-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0 DE
---
Lucia ist bei einem sozialen Netzwerk registriert. Die Grafik zeigt die sogenannten „friends“ von Lucia und deren „friends“:

![Netz aus Personen, die durch Linien als „friends“ verbunden sind: Dana, Sam, Michael, Monica, John, Lucia, Eve, Alex, Peter, Jacob, Lena, Charles. Lucias „friends“ sind Dana, Michael, Eve, Monica, Peter und Jacob.](./img/friends.png)

Eine Linie bedeutet, dass die beiden Personen „friends“ sind. Zum Beispiel ist Monica Lucias „friend“ und Lucia ist Monicas „friend“, aber Alex ist (noch) nicht Lucias „friend“.

Wenn jemand einen „friend“ ein Foto sehen lässt, darf dieser „friend“ das Foto kommentieren. Wenn jemand ein Foto kommentiert, bekommen dessen „friends“ den Kommentar und auch das Foto zu sehen. Diese „friends“ dürfen so ein Foto aber nur dann kommentieren, wenn sie es schon kommentieren durften, bevor sie es zu sehen bekamen.

Lucia hat ein Foto hochgeladen. Sie will aber nicht, dass Jacob es zu sehen bekommt. Sie ist sicher, dass Jacob unter ihren „friends“ keinen neuen „friend“ mehr finden wird.

**Wen könnte sie das Foto sehen lassen?**
