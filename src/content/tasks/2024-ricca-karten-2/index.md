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
  format: match
  props:
    left:
      - { id: name, label: Name, image: ./img/icon-name.png, alt: Name }
      - { id: eyes, label: Augen, image: ./img/icon-eyes.png, alt: Augen }
      - { id: legs, label: Beine, image: ./img/icon-legs.png, alt: Beine }
      - { id: wings, label: Flügel, image: ./img/icon-wings.png, alt: Flügel }
      - { id: teeth, label: Zähne, image: ./img/icon-teeth.png, alt: Zähne }
    right:
      - { id: text, label: Text }
      - { id: numbers, label: Zahlen }
      - { id: yesno, label: ja/nein }
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

**Ordne den Eigenschaften (Name, Augen, Beine, Flügel, Zähne) die richtigen Typen zu.**
