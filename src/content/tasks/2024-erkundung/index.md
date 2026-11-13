---
short: q2zV
title: Erkundung
summary: Harry erkundet eine Inselgruppe mit Schildern und Pfeilen. Welche Textbausteine vervollständigen seine Anleitung?
grades:
  "11-13": hard
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, searching]
methods: [dfs]
mascot: beaver
interaction:
  format: place
  props:
    background: ./img/instructions-box.png
    width: 1023
    height: 580
    trayLabel: Textbausteine
    zones:
      - { id: g1, label: "Gelbe Lücke", x: 575, y: 258, w: 256, h: 56, accepts: [r1, r2, r3] }
      - { id: g2, label: "Grüne Lücke", x: 388, y: 400, w: 474, h: 56, accepts: [r4, r5] }
    items:
      - { id: r1, label: kein Schild }
      - { id: r2, label: ein Pfeil }
      - { id: r3, label: ein START-Schild }
      - { id: r4, label: auf die der Pfeil zeigt }
      - { id: r5, label: von der du gerade gekommen bist }
source:
  type: original
  work: Informatik-Biber 2024
  year: 2024
  page: 25
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2024/Biberheft_2024_web_komplett.pdf
  country: DE
  license: CC BY-SA 4.0
---
Harry erkundet eine Gruppe von Inseln, die durch Baumstämme verbunden sind. Er hat verschiedene Schilder dabei: ein START-Schild und Pfeile. Wenn Harry sich auf einer Insel befindet, kann er alle damit verbundenen Inseln sehen und feststellen, ob auf ihnen ein Schild steht.

![Eine Inselgruppe mit sieben Inseln, verbunden durch Baumstämme. Auf der obersten Insel steht das START-Schild, auf zwei weiteren Inseln stehen Pfeile. Harry steht auf einer Insel unten links und überlegt](./img/islands.png)

Auf dem Bild hat Harry bereits drei Inseln betreten. Er bewegt sich nach der folgenden Anleitung. Darin ist die „aktuelle Insel“ die Insel, auf der sich Harry gerade befindet, und eine „Nachbarinsel“ ist mit der aktuellen Insel über einen Baumstamm verbunden. Die Anleitung funktioniert, wenn Harry mit ihrer Hilfe jede Insel wenigstens einmal betritt.

Leider hat die Anleitung noch Lücken.

> Betritt eine beliebige Insel, setze dort das START-Schild und erkunde diese Insel.
>
> **Jedes Mal**, wenn du eine Insel erkundest, tue Folgendes:
>
> - **Wenn** auf der aktuellen Insel kein Schild steht, **dann**: Setze einen Pfeil; der Pfeil zeigt zu der Insel, von der aus du die aktuelle Insel betreten hast.
> - **Wenn** es eine Nachbarinsel gibt, auf der **[gelbe Lücke]** steht, **dann**: Betritt diese Insel und erkunde sie.
> - **Sonst**: **Wenn** auf der aktuellen Insel ein Pfeil steht, **dann**: Betritt diejenige Insel, **[grüne Lücke]**, und erkunde sie. **Sonst**: Bleibe stehen. Du hast jede Insel wenigstens einmal betreten.

**Fülle die Lücken mit passenden Textbausteinen, so dass die Anleitung funktioniert.**

Ziehe dazu die Textbausteine in die gelbe und die grüne Lücke der Anleitung.
