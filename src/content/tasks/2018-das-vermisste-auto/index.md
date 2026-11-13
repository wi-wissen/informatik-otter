---
short: 5ciL
title: Das vermisste Auto
summary: Ein selbstfahrendes Auto sendet vor dem Ausfall ein Modell seiner Umgebung. Auf welchem Auto der Karte passt es?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [information-data]
  process: [modelling, representing]
topics: [modelling, ai]
methods: []
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 463
    height: 321.5
    background: ./img/map.png
    hideNodes: true
    nodeRadius: 22
    nodes:
      - { id: blue, x: 41, y: 85, label: türkises Auto }
      - { id: green, x: 210, y: 61, label: grünes Auto }
      - { id: orange, x: 394, y: 195, label: oranges Auto }
      - { id: purple, x: 394, y: 279, label: violettes Auto }
    edges: []
source:
  type: original
  work: Informatik-Biber 2018
  year: 2018
  page: 24
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2018/Biberheft2018-mit-Loesungen.pdf
  country: DE
  license: CC BY-SA 4.0
---
Ein selbstfahrendes Auto wird vermisst. Es blieb mit leerem Akku irgendwo in der Stadt stehen. So ein Pech!

Kurz vorher konnte das vermisste Auto noch ein Modell seiner Umgebung senden. In diesem Modell wird jedes Objekt, das der 360°-Sensor erfasst hat, durch zwei Werte beschrieben:

1. Der Winkel der Blickrichtung des Sensors zu dem Objekt (siehe Bild). Geradeaus ist 0°.
2. Die Entfernung vom Sensor zu dem Objekt.

![Ein Auto mit Sensor in der Mitte: ein Objekt 10 m geradeaus (0°), eines 5 m rechts (90°) und eines 4 m hinten (180°)](./img/model.png)

In dem Beispiel ist das Modell [(0, 10), (90, 5), (180, 4)].

Das vermisste Auto sendete dieses Modell: [(0, 5), (90, 3), (180, 5), (270, 8)].

![Stadtplan mit Straßen, Häuserblöcken, Bäumen, Gullydeckeln und vier Autos: türkis links oben, grün oben in der Mitte, orange und violett rechts](./img/map.png)

**Finde das vermisste Auto auf der Karte!**

Wähle das vermisste Auto durch einen Klick aus.
