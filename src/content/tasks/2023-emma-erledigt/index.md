---
short: 4XdN
title: Emma erledigt
summary: Emma muss Kiosk, Markt und Apotheke besuchen und wieder heim. Welcher Rundweg ist am kürzesten?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [algorithms, information-data]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [dijkstra]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: path
    width: 292
    height: 210
    background: ./img/map.png
    hideNodes: false
    nodeImage: ./img/pick.png
    nodeRadius: 14
    nodes:
      - { id: zuhause, x: 173, y: 179 }
      - { id: rathaus, x: 151, y: 95 }
      - { id: park, x: 157, y: 17 }
      - { id: kiosk, x: 40, y: 34 }
      - { id: baeckerei, x: 24, y: 105 }
      - { id: markt, x: 82, y: 145 }
      - { id: schule, x: 262, y: 129 }
      - { id: apotheke, x: 256, y: 62 }
    edges:
      - { from: kiosk, to: baeckerei }
      - { from: kiosk, to: park }
      - { from: park, to: apotheke }
      - { from: park, to: rathaus }
      - { from: rathaus, to: apotheke }
      - { from: rathaus, to: schule }
      - { from: apotheke, to: schule }
      - { from: rathaus, to: baeckerei }
      - { from: rathaus, to: markt }
      - { from: rathaus, to: zuhause }
      - { from: baeckerei, to: markt }
      - { from: markt, to: zuhause }
      - { from: zuhause, to: schule }
source:
  type: original
  work: Informatik-Biber 2023
  year: 2023
  page: 26
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2023/Biberheft_2023_web_komplett.pdf
  country: BE
  license: CC BY-SA 4.0
---
Emma ist zu Hause (grüne Markierung). Sie soll drei Aufgaben erledigen und danach zurückkommen:

- beim Kiosk ein Päckchen abholen,
- auf dem Markt Obst kaufen und
- in der Apotheke ein Medikament besorgen.

Emma weiß nicht, wie lange sie in jedem Geschäft brauchen wird. Aber zumindest ihr Weg soll so kurz wie möglich sein.

Auf einem Plan hat Emma eingetragen, wie viele Minuten sie für die Strecken zwischen einzelnen Orten ihrer Stadt benötigt. Außerdem hat sie im Plan markiert, welche Strecken sie auf ihrem Weg geht und in welcher Richtung. Für diesen Weg benötigt Emma insgesamt 4 + 6 + 3 + 9 + 7 + 3 + 6 = 38 Minuten.

![Plan der Stadt mit den Orten Zuhause, Rathaus in der Mitte, Park, Kiosk, Bäckerei, Markt, Schule und Apotheke. Strecken in Minuten: Kiosk–Bäckerei 3, Kiosk–Park 9, Park–Apotheke 7, Park–Rathaus 6, Rathaus–Apotheke 8, Rathaus–Schule 4, Apotheke–Schule 3, Rathaus–Bäckerei 4, Rathaus–Markt 10, Rathaus–Zuhause 5, Bäckerei–Markt 6, Markt–Zuhause 4, Zuhause–Schule 6. Markiert ist der Weg mit 38 Minuten.](./img/map.png)

Emma überlegt, ob es noch schneller geht. Vielleicht hilft es, manche Strecken hin und zurück zu gehen?

**Bestimme den kürzesten Weg, den Emma gehen kann, um ihre drei Aufgaben zu erledigen. Welche Strecken geht sie dazu in welcher Richtung? Tippe dazu die Orte nacheinander an, beginnend bei Zuhause.**
