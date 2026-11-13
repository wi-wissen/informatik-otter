---
short: Zcg4
title: Welches Wort?
summary: Alex verschlüsselt Wörter in drei Schritten. Betty bekommt „PMGEP“. Welches Wort steckt dahinter?
grades:
  "7-8": hard
  "9-10": easy
gi:
  content: [information-data]
  process: [reasoning, modelling]
topics: [cryptography]
methods: [substitution-cipher]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, label: LODGE }
      - { id: b, label: RIVER }
      - { id: c, label: FLOOD }
      - { id: d, label: KNOCK }
source:
  type: original
  work: Informatik-Biber 2015
  year: 2015
  page: 63
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2015/Biberheft2015-mit-Loesungen.pdf
  country: BE
  license: CC BY-SA 3.0
---
Alex und Betty senden sich verschlüsselte Nachrichten. Dabei verschlüsseln sie jedes Wort einzeln, und zwar in drei Schritten nach folgender Vorschrift:

![Schema: Das Wort durchläuft drei Schritte: „Drehe das Wort um“, „Verschiebe die Buchstaben um zwei Stellen nach links“ und „Ersetze jeden Buchstaben durch den im Alphabet folgenden Buchstaben“. Beispiel: BEAVER, REVAEB, VAEBRE, WBFCSF.](./img/scheme.png)

Aus dem Wort BEAVER (engl. für Biber) ergibt sich die Verschlüsselung WBFCSF.

Betty empfängt diese Verschlüsselung von Alex: **PMGEP**

**Welches Wort hat Alex verschlüsselt?**
