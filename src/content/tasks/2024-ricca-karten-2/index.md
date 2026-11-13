---
short: 349h
title: Ricca-Karten 2
summary: "Barbaras Monsterkarten haben Eigenschaften mit Werten. Welche Eigenschaft gehört zu welchem Typ: Text, Zahlen oder ja/nein?"
grades:
  "5-6": medium
  "7-8": easy
gi:
  content: [information-data]
  process: [modelling, structuring]
topics: [data-structures, programming]
methods: []
mascot: beaver
interaction:
  format: place
  props:
    background: ./img/table-leer.png
    width: 960
    height: 211
    trayLabel: Typen
    zones:
      - { id: name, label: "Name", x: 25, y: 118, w: 160, h: 72 }
      - { id: eyes, label: "Augen", x: 215, y: 118, w: 160, h: 72 }
      - { id: legs, label: "Beine", x: 406, y: 118, w: 160, h: 72 }
      - { id: wings, label: "Flügel", x: 597, y: 118, w: 160, h: 72 }
      - { id: teeth, label: "Zähne", x: 787, y: 118, w: 160, h: 72 }
    items:
      - { id: yn1, image: ./img/tag-yn1.png, alt: "Typ ja/nein" }
      - { id: yn2, image: ./img/tag-yn2.png, alt: "Typ ja/nein" }
      - { id: text, image: ./img/tag-text.png, alt: "Typ Text" }
      - { id: num1, image: ./img/tag-num1.png, alt: "Typ Zahlen" }
      - { id: num2, image: ./img/tag-num2.png, alt: "Typ Zahlen" }
source:
  type: original
  work: Informatik-Biber 2024
  year: 2024
  page: 51
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2024/Biberheft_2024_web_komplett.pdf
  country: CH
  license: CC BY-SA 4.0
---
Barbara sammelt Karten mit Monstern, den „Riccas“. Hier sind ihre Ricca-Karten:

![Sechs Ricca-Karten (JOSI, MONI, KILI, BENI, LORI, PHIL). Jede Karte zeigt fünf Eigenschaften: Name, Augen, Zähne, Beine und Flügel](./img/cards.png)

Auf jeder Karte sind die Eigenschaften eines Riccas angegeben, zum Beispiel der Name (![Symbol Name](./img/icon-name.png)) oder ob das Ricca Zähne hat (![Symbol Zähne](./img/icon-teeth.png)). Die Eigenschaften haben Werte. Auf Karte 2 zum Beispiel hat der Name den Wert MONI, und die Eigenschaft Zähne hat den Wert ✓: Das Ricca auf der Karte heißt also MONI und hat Zähne.

Barbara erkennt, dass es nur drei verschiedene Arten von Werten auf den Karten gibt. Sie nennt sie „Typen“:

| Typ | Bedeutung |
|---|---|
| **Text** | mehrere Buchstaben hintereinander |
| **Zahlen** | also 1, 2, 3 usw. |
| **ja/nein** | die Zeichen ✓ und X, die „ja“ und „nein“ bedeuten |

**Ordne den Eigenschaften die richtigen Typen zu.**

Ziehe dazu die Typen unter die Eigenschaften: Name, Augen, Beine, Flügel und Zähne (von links nach rechts).
