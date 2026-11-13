---
short: h7dz
title: Ladezeit
summary: Vier Downloads teilen sich eine Leitung. Wie lange dauert es, bis alle Dateien geladen sind?
grades:
  "9-10": hard
gi:
  content: [systems]
  process: [modelling, reasoning]
topics: [networks]
methods: []
mascot: beaver
interaction:
  format: input
  props:
    kind: number
    suffix: Minuten
source:
  type: original
  work: Informatik-Biber 2017
  year: 2017
  page: 37
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2017/Biberheft2017-mit-Loesungen.pdf
  country: RU
  license: CC BY-SA 4.0
---
Lädt man mehrere Dateien gleichzeitig aus dem Internet, dann teilen sich diese Downloads die Kapazität der Internet-Verbindung gleichmäßig. Beim Laden von 10 Dateien gleichzeitig kann jede Datei nur ein Zehntel der Kapazität nutzen; das Laden einer Datei hätte die 10-fache Ladegeschwindigkeit.

Ein Benutzer lädt gerade 4 Dateien gleichzeitig herunter. Für jede Datei wird die verbleibende Ladezeit angezeigt. Diese Zeit wird anhand der aktuellen Verbindungskapazität berechnet:

![Vier Fortschrittsbalken mit der verbleibenden Ladezeit: 1 Minute, 7 Minuten, 1 Minute und 3 Minuten übrig](./img/downloads.png)

In der Folgezeit bleibt die Verbindungskapazität gleich.

**Wie viele Minuten wird es dauern, bis alle 4 Dateien vollständig geladen sind?**
