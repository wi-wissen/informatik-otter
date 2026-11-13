---
short: vNE7
title: Konflikt-Detektor
summary: Anna und Ben bauen aus Ja-Nein-Einheiten eine Maschine, die Meinungsverschiedenheit erkennt. Wie müssen die Kabel eingestellt sein?
grades:
  "11-13": hard
gi:
  content: [systems, information-data]
  process: [modelling, reasoning]
topics: [ai, logic]
methods: [neural-network, xor]
mascot: beaver
interaction:
  format: match
  props:
    left:
      - { id: a1, label: "A → obere Einheit" }
      - { id: a2, label: "A → untere Einheit" }
      - { id: b1, label: "B → obere Einheit" }
      - { id: b2, label: "B → untere Einheit" }
      - { id: z1, label: "obere Einheit → Z" }
      - { id: z2, label: "untere Einheit → Z" }
    right:
      - { id: plus, label: "+" }
      - { id: minus, label: "–" }
source:
  type: original
  work: Informatik-Biber 2023
  year: 2023
  page: 37
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2023/Biberheft_2023_web_komplett.pdf
  country: DE
  license: CC BY-SA 4.0
---
Anna und Ben wollen einen „Konflikt-Detektor“ bauen, der anzeigt, ob sie unterschiedlicher Meinung sind.

Sie verwenden Einheiten, die in zwei Zuständen sein können: Ja und Nein. Zwei Einheiten können mit einem Kabel verbunden werden. Wenn eine Einheit im Zustand Ja ist, sendet sie über alle ausgehenden Kabel ein Signal; ist sie im Zustand Nein, sendet sie kein Signal. Die Kabel werden so eingestellt, dass sie ein Signal als positives (+) oder negatives (–) Signal an die rechts angeschlossene Einheit übermitteln. Eine angeschlossene Einheit geht in den Zustand Ja, wenn sie mehr positive als negative Signale empfängt, und sonst in den Zustand Nein. Als Eingabe setzt Anna den Zustand der Einheit A und Ben den Zustand der Einheit B.

Zuerst bauen Anna und Ben diese Maschine:

![Eine einfache Maschine: A ist über ein Kabel mit + und B über ein Kabel mit – mit der Einheit Z verbunden](./img/simple.png)

Sie bemerken, dass die Einheit Z nur dann Ja ist, wenn A Ja und B Nein ist. Das ist nicht das, was sie wollen.

Dann bauen Anna und Ben eine größere Maschine (unten im Bild) und sind sicher, dass sie der Konflikt-Detektor sein kann: Z soll nur dann Ja sein, wenn A und B in unterschiedlichen Zuständen sind (Ja und Nein bzw. Nein und Ja). Ansonsten soll Z im Zustand Nein sein. Jetzt müssen nur noch die Kabel richtig eingestellt werden.

![Die größere Maschine: A und B sind jeweils mit beiden Einheiten der mittleren Schicht verbunden (vier Kabel), und beide mittleren Einheiten sind mit Z verbunden (zwei Kabel)](./img/machine.png)

**Stelle für jedes Kabel ein, ob es ein Signal positiv (+) oder negativ (–) übermittelt, damit der Konflikt-Detektor korrekt arbeitet.**
