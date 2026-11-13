---
short: EB2G
title: Sonnige Tage
summary: Tom behauptet etwas über alle Teiche an allen sonnigen Tagen. Kim widerlegt ihn. Was ist am Sonntag passiert?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [information-data]
  process: [reasoning, modelling]
topics: [logic]
methods: [boolean-logic]
mascot: beaver
interaction:
  format: place
  props:
    background: ./img/satz.png
    width: 1563
    height: 100
    trayLabel: Textbausteine
    zones:
      - { id: weather, label: "Erste Lücke (orange)", x: 404, y: 8, w: 230, h: 84 }
      - { id: ponds, label: "Zweite Lücke (blau)", x: 709, y: 8, w: 815, h: 84 }
    items:
      - { id: sunny, label: sonnig }
      - { id: notsunny, label: nicht sonnig }
      - { id: all, label: in allen Teichen schwammen Biber }
      - { id: waterfall, label: im Teich mit dem Wasserfall schwamm kein Biber }
      - { id: michael-all, label: Biber Michael schwamm durch alle Teiche }
      - { id: michael-none, label: Biber Michael schwamm gar nicht }
source:
  type: original
  work: Informatik-Biber 2024
  year: 2024
  page: 63
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2024/Biberheft_2024_web_komplett.pdf
  country: DE
  license: CC BY-SA 4.0
---
Tom sagt: „An sonnigen Tagen schwimmt in jedem Teich mindestens ein Biber.“

Kim antwortet: „Das ist nicht wahr. Am letzten Sonntag wurde deine Aussage widerlegt.“

**Was ist am letzten Sonntag passiert? Fülle die Lücken so, dass Toms Aussage widerlegt wird.**

Ziehe dazu je einen Textbaustein in die erste und in die zweite Lücke des Satzes „Letzten Sonntag war es … und … .“
