---
short: JW5r
title: Marias Kiste
summary: Fünf Hinweise zu falschen Kombinationen verraten, welches Symbol-Trio die Schatzkiste öffnet.
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [logic, optimization]
methods: [backtracking, brute-force]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, image: ./img/key-a.png, alt: "A: Blüte, Stern, Herz" }
      - { id: b, image: ./img/key-b.png, alt: "B: Stern, Kreis, Mond" }
      - { id: c, image: ./img/key-c.png, alt: "C: Blüte, Stern, Kreis" }
      - { id: d, image: ./img/key-d.png, alt: "D: Haus, Stern, Mond" }
source:
  type: original
  work: Informatik-Biber 2022
  year: 2022
  page: 38
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2022/Biberheft_2022_mit_Loesungen_web.pdf
  country: MK
  license: CC BY-SA 4.0
---
Maria findet eine geheimnisvolle Kiste. Ob ein Schatz darin versteckt ist? Leider ist die Kiste verschlossen. Um sie zu öffnen, muss Maria den „Schlüssel“ herausfinden: die richtige Kombination aus drei Symbolen.

Zum Glück findet sie neben der Kiste auch diese Hinweise zu einigen falschen Kombinationen:

| Nr. | Kombination | Hinweis |
|---|---|---|
| 1 | ![Blüte, Haus, Mond](./img/hint-1.png) | Eines der Symbole ist Teil des Schlüssels und steht an der richtigen Position. |
| 2 | ![Tanne, Raute, Haus](./img/hint-2.png) | Keines der Symbole ist Teil des Schlüssels. |
| 3 | ![Mond, Stern, Blüte](./img/hint-3.png) | Zwei Symbole sind Teil des Schlüssels. Beide stehen aber an der falschen Position. |
| 4 | ![Blüte, Herz, Kreis](./img/hint-4.png) | Ein Symbol ist Teil des Schlüssels. Es steht aber an der falschen Position. |
| 5 | ![Tanne, Haus, Stern](./img/hint-5.png) | Ein Symbol ist Teil des Schlüssels. Es steht aber an der falschen Position. |

**Eine dieser Kombinationen ist der Schlüssel für Marias Kiste. Welche?**
