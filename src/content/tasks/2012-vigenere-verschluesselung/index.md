---
short: CU7s
title: Vigenère-Verschlüsselung
summary: Anne und Bernie verschlüsseln ihre Nachrichten mit einem geheimen Wort. Wann werden sie sich treffen?
grades:
  "9-10": medium
  "11-13": easy
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [cryptography]
methods: [substitution-cipher]
mascot: beaver
interaction:
  format: input
  props:
    kind: text
    placeholder: Entschlüsselte Nachricht
source:
  type: original
  work: Informatik-Biber 2012
  year: 2012
  page: 41
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2012/Biberheft2012-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Anne und Bernie verschlüsseln ihre privaten Nachrichten, damit sie nicht von anderen gelesen werden können. Sie verschlüsseln und entschlüsseln ihre Nachrichten nach dem gleichen Schema und benutzen dabei „CAB“ als absolut geheimes Wort. Anne verschlüsselt eine Nachricht an Bernie:

| | |
|---|---|
| Geheimwort, so oft wie nötig | `CABCABCABCAB` |
| Nachricht ohne Leerzeichen | `WANNKOMMSTDU` |
| Verschlüsselte Nachricht | `ZBPQLQPNUWEW` |

Weil das C des Geheimworts der dritte Buchstabe im Alphabet ist, wird der erste Buchstabe der Nachricht (W) um drei Stellen im Alphabet nach hinten verschoben (wird zu Z). Weil das A des Geheimworts der erste Buchstabe im Alphabet ist, wird der zweite Buchstabe der Nachricht (A) um eine Stelle im Alphabet nach hinten verschoben (wird zu B). Und so weiter, bis die ganze Nachricht verschlüsselt ist.

Bernie antwortet: `XNGOGWKS`

**Wann werden sie sich treffen?** Schreibe die entschlüsselte Nachricht auf (Leerzeichen sind egal).
