---
short: m38g
title: Trambahn (трамвай)
summary: An einer Straßenbahnkreuzung in Sankt Petersburg zeigt die Weichenstellung, wohin jede Bahn fährt. Wo stoßen Bahnen zusammen?
grades:
  "9-10": hard
gi:
  content: [systems]
  process: [modelling, reasoning]
topics: [parallelism]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: "A) RECHTS-RECHTS-RECHTS-RECHTS" }
      - { id: b, label: "B) RECHTS-RECHTS-LINKS-LINKS" }
      - { id: c, label: "C) LINKS-RECHTS-LINKS-RECHTS" }
      - { id: d, label: "D) RECHTS-LINKS-RECHTS-LINKS" }
source:
  type: original
  work: Informatik-Biber 2016
  year: 2016
  page: 60
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2016/Biberheft2016-mit-Loesungen.pdf
  country: RU
  license: CC BY-SA 3.0
---
Auf den Straßen von Sankt Petersburg (Russland) fährt die Trambahn. An einer Trambahnkreuzung dort ist alles möglich: Die Trambahnen können aus allen vier Richtungen herkommen und auf alle möglichen Arten weiterfahren. Die Stellung der Weichen bestimmt, wie die Trambahnen weiterfahren. Die Weichenstellung wird so beschrieben: Im Uhrzeigersinn wird für jede Herkunftsrichtung angegeben, wie die Trambahnen weiterfahren: GERADEAUS, nach RECHTS oder nach LINKS.

![Eine Kreuzung mit vier Zufahrten, nummeriert 1 bis 4 im Uhrzeigersinn; von jeder Zufahrt gibt es Gleise geradeaus, nach rechts und nach links](./img/directions.png)

Ein Beispiel: LINKS-GERADEAUS-LINKS-RECHTS bedeutet, dass die Trambahnen aus Richtung 1 nach links abbiegen, die Trambahnen aus der im Uhrzeigersinn nächsten Richtung 2 geradeaus fahren, und so weiter.

![Die Fahrwege der Beispiel-Weichenstellung LINKS-GERADEAUS-LINKS-RECHTS](./img/example.png)

Allerdings kann es bei dieser Weichenstellung leicht zu Zusammenstößen kommen: von Bahnen aus den Richtungen 1 und 2, oder von Bahnen aus den Richtungen 2 und 3.

**Auch bei einer der folgenden Weichenstellungen kann es leicht zu Zusammenstößen kommen. Bei welcher?**
