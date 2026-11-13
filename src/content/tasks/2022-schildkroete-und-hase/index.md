---
short: k8iC
title: Schildkröte und Hase
summary: Schildkröte und Hase laufen mit unterschiedlichem Tempo über dieselbe Bahn. Wo treffen sie sich wieder?
grades:
  "3-4": medium
  "5-6": easy
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [data-structures, algorithm-analysis]
methods: []
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 362
    height: 119
    background: ./img/track.png
    hideNodes: true
    nodeRadius: 12
    nodes:
      - { id: start, x: 21.3, y: 76.2 }
      - { id: erdbeere, x: 70.8, y: 76.2 }
      - { id: tropfen, x: 121.2, y: 76.2 }
      - { id: pilz, x: 173.4, y: 76.2 }
      - { id: stein, x: 231.0, y: 76.2 }
      - { id: trauben, x: 282.3, y: 76.2 }
      - { id: blume, x: 331.8, y: 57.3 }
      - { id: blatt, x: 319.2, y: 15.0 }
      - { id: zapfen, x: 255.3, y: 6.0 }
      - { id: krokus, x: 215.7, y: 27.6 }
    edges: []
source:
  type: original
  work: Informatik-Biber 2022
  year: 2022
  page: 48
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2022/Biberheft_2022_mit_Loesungen_web.pdf
  country: PH
  license: CC BY-SA 4.0
---
Schildkröte und Hase machen einen Wettlauf. Unten siehst du die Laufbahn: Sie besteht aus Feldern mit Bildern (Start „S“, Erdbeere, Tropfen, Pilz, Stein, Trauben, Blume, Blatt, Zapfen, Krokus). Von Feld zu Feld führen Pfeile; nach dem Krokus geht es wieder zurück zum Stein.

Sie starten gleichzeitig auf dem Feld **S**. Sie gehen von Feld zu Feld, den Pfeilen entlang. In einer Minute geht …

- … die Schildkröte ein Feld vorwärts und
- … der Hase zwei Felder vorwärts.

**Wo treffen sich Schildkröte und Hase nach dem Start zum ersten Mal wieder?**
