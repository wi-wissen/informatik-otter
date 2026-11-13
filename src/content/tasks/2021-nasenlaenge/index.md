---
short: jpD7
title: Nasenlänge
summary: Ein Kartenautomat zählt Kopfnicken per Kamera. Vervollständige sein Steuerungsprogramm mit den richtigen Bedingungen.
grades:
  "11-13": hard
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming]
methods: [loop]
mascot: beaver
interaction:
  format: match
  props:
    left:
      - { id: loop, label: "wiederhole bis …" }
      - { id: wait1, label: "1. warte bis …" }
      - { id: wait2, label: "2. warte bis …" }
    right:
      - { id: gt0, label: Nasenlänge > 0 }
      - { id: gt08, label: Nasenlänge > 0,8 }
      - { id: gt12, label: Nasenlänge > 1,2 }
      - { id: lt08, label: Nasenlänge < 0,8 }
      - { id: lt11, label: Nasenlänge < 1,1 }
source:
  type: original
  work: Informatik-Biber 2021
  year: 2021
  page: 42
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2021/Biberheft_2021_mit_Loesungen_web.pdf
  country: DE
  license: CC BY-SA 4.0
---
Ein neuer Eintrittskartenautomat soll so funktionieren: Ein Kunde nickt so oft mit dem Kopf – senkt also den Kopf und schaut dann wieder geradeaus – wie viele Karten er kaufen möchte. Danach hebt der Kunde den Kopf, und dann gibt der Automat die Karten aus.

Der Automat hat dazu eine Kamera eingebaut. Sie kann die Nasen der Kunden erkennen und misst ständig die Nasenlänge. Das Steuerungsprogramm des Automaten speichert das aktuelle Messergebnis unter dem Namen `Nasenlänge` und unterscheidet die Kopfhaltungen der Kunden mit Hilfe dieser Tabelle:

![Tabelle: Beim Wert Nasenlänge 1 schaut der Kunde geradeaus. Beim Wert 1,3 hat der Kunde den Kopf gesenkt. Beim Wert 0,7 hat der Kunde den Kopf gehoben.](./img/table.png)

Das Steuerungsprogramm ist fast fertig – siehe unten. Die Schleife „wiederhole bis …“ wiederholt die eingerückten Anweisungen, bis ihre Bedingung erfüllt ist.

```
setze Zähler auf 0
wiederhole bis [ … ]
    warte bis [ … ]
    warte bis [ … ]
    erhöhe Zähler um 1
gib Zähler Karten aus
```

**Vervollständige das Steuerungsprogramm! Ordne jeder Lücke die passende Bedingung zu.**
