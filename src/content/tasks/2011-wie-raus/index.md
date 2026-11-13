---
short: 7rKi
title: Wie raus?
summary: Ein zweistöckiger Biberbau ist wie ein Programm aus Feldern mit Pfeilen, Kreisen und Kreuzen. Von welchem Eingang kommt man hinaus?
grades:
  "5-6": hard
  "7-8": medium
  "9-10": easy
  "11-13": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming, algorithm-analysis]
methods: [sequence]
mascot: beaver
interaction:
  format: input
  props:
    kind: number
    placeholder: Eingang
source:
  type: original
  work: Informatik-Biber 2011
  year: 2011
  page: 40
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2011/Biberheft2011-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0 DE
---
Ein Biber möchte seinen Bau zur Sicherheit als Labyrinth anlegen. Sein Bauplan zeigt die beiden Etagen seines Baus als Raster von quadratischen Feldern. Die weißen Felder bilden die Gänge.

![Bauplan der unteren Etage: Raster mit weißen Gängen und grünen Wänden, Pfeile in den Feldern, der Eingang 5 oben links und rechts ein Ausgang](./img/untere-etage.png)
![Bauplan der oberen Etage: Raster mit weißen Gängen und grünen Wänden, Pfeile, Kreise und Kreuze in den Feldern, die Eingänge 4, 3, 2 und 1](./img/obere-etage.png)

Der Bauplan zeigt, wie man sich in den Gängen von Feld zu Feld bewegen darf:

- Von einem Feld mit Pfeil geht man zum nächsten Feld in Richtung des Pfeils.
- Von einem Feld mit Kreis geht man zum darunter liegenden Feld der unteren Etage.
- Von einem Feld mit Kreuz geht man zum darüber liegenden Feld der oberen Etage.
- Von einem Feld ohne Zeichen geht es nicht weiter.

Der Bauplan zeigt fünf Eingänge und in der unteren Etage einen Ausgang. Leider ist der Bauplan unbrauchbar: Nur von einem der Eingänge aus kann der Biber auch den Ausgang erreichen.

**Gib die Nummer dieses Eingangs hier ein (als Zahl):**
