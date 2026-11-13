---
short: oF5z
title: Schachteams
summary: Zwölf Schachspieler, zwei Teams und eine Liste von Hinweisen – wer gehört zu wem?
grades:
  "11-13": hard
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [logic, modelling]
methods: [constraint-satisfaction]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 1
    options:
      - { id: a, image: ./img/faerbung-a.png, alt: "Rot: A, E, F, I, J, L. Grün: B, C, D, G, H, K." }
      - { id: b, image: ./img/faerbung-b.png, alt: "Rot: A, D, F, I, K, L. Grün: B, C, E, G, H, J." }
      - { id: c, image: ./img/faerbung-c.png, alt: "Rot: A, D, F, I, J, L. Grün: B, C, E, G, H, K." }
      - { id: d, image: ./img/faerbung-d.png, alt: "Rot: A, E, F, I, K, L. Grün: B, C, D, G, H, J." }
source:
  type: original
  work: Informatik-Biber 2011
  year: 2011
  page: 24
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2011/Biberheft2011-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0 DE
---
Bei einem Schachturnier treffen Teams aufeinander. Jedes Team hat sechs Spieler; drei davon spielen mit weißen Figuren, die drei anderen spielen mit schwarzen Figuren. Über die Begegnung der beiden besten Teams ist Folgendes zu erfahren:

- Die Spieler A, B, C, D, E und F spielen mit weißen Figuren, die Spieler G, H, I, J, K und L spielen mit schwarzen Figuren.
- Spieler A spielt gegen Spieler H, K spielt gegen E, C gegen I und F gegen G.
- Folgende Spielerpaare sind jeweils aus dem gleichen Team: B und C, I und J, H und B, C und G.
- Die Spieler L und G sind aus verschiedenen Teams.

![Eine Reihe mit den Spielern A bis L; A ist rot gefärbt, alle anderen sind weiß](./img/start.png)

In der Grafik sollen die Teamkameraden von Spieler A rot und die Spieler des gegnerischen Teams grün gefärbt werden.

**Welche der folgenden Färbungen ist die richtige?**
