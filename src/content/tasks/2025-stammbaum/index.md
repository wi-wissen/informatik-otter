---
short: 3UzC
title: Stammbaum
summary: Mit Vater() und Mutter() beschreibt Annika ihre Familie wie eine Rechenvorschrift. Wie ist sie mit Daniel verwandt?
grades:
  "7-8": medium
  "9-10": easy
gi:
  content: [information-data, algorithms]
  process: [modelling, representing]
topics: [modelling, trees]
methods: []
mascot: beaver
interaction:
  format: custom
  props:
    left: Vater(Mutter(Annika))
    right: Daniel
    gaps: 3
    words:
      - { id: vater, label: Vater }
      - { id: mutter, label: Mutter }
source:
  type: original
  work: Informatik-Biber 2025
  year: 2025
  page: 72
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2025/Biberheft_2025_web_komplett.pdf
  country: DE
  license: CC BY-SA 4.0
---
Die Biber Annika und Daniel wollen wissen, wie sie miteinander verwandt sind. Annika hat einen Stammbaum ihrer gemeinsamen Familie. Darin tragen die männlichen Biber eine Kappe und die weiblichen eine Schleife.

Annika verwendet eine Kurzschreibweise:

- `Vater(X)` steht für „Vater von Biber X“
- `Mutter(X)` steht für „Mutter von Biber X“

Annikas Vater ist Bernd, und Bernds Mutter ist Christina. Das beschreibt Annika mit Hilfe von Gleichungen so:

- `Vater(Annika) = Bernd`
- `Mutter(Bernd) = Christina`

Ihre Verwandtschaft mit Christina kann Annika auch mit nur einer Gleichung beschreiben:

- `Mutter(Vater(Annika)) = Christina` steht für „Mutter vom Vater von Annika ist Christina“

![Der Stammbaum: Oben links Christina mit ihrem Mann, darunter ihr Sohn Bernd mit seiner Frau und deren Tochter Annika. Oben rechts Emil und Gerda; ihre Tochter hat einen Mann und eine Tochter, diese hat mit ihrem Mann drei Kinder, darunter Daniel (ganz links unten). Annikas Mutter ist die Tochter von Emil und Gerda](./img/tree.png)

Nun hätte sie gerne eine Gleichung für ihre Verwandtschaft mit Daniel.

**Ergänze die folgende Gleichung so, dass sie die Verwandtschaft zwischen Annika und Daniel beschreibt.**
