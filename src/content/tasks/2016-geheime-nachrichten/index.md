---
short: Q2kg
title: Geheime Nachrichten
summary: Boris und Berta verschlüsseln Nachrichten, indem sie Zeichen in eine Tabelle schreiben und spaltenweise wieder auslesen. Was lautet Bertas Antwort?
grades:
  "5-6": hard
  "9-10": easy
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [cryptography]
methods: [transposition-cipher]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: A) OITDRHKNSODWIEREEC }
      - { id: b, label: B) OKICHWERDEDORTSEIN }
      - { id: c, label: C) WIRSTDUAUCHDASEIN }
      - { id: d, label: D) ORTDESTREFFENSISTWO }
source:
  type: original
  work: Informatik-Biber 2016
  year: 2016
  page: 31
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2016/Biberheft2016-mit-Loesungen.pdf
  country: GB
  license: CC BY-SA 3.0
---
Boris und Berta senden sich geheime Nachrichten, die niemand außer ihnen verstehen soll.

Boris möchte Berta diesen Text mitteilen: TREFFENMITBILLYUM6

Boris schreibt die Zeichen des Texts nacheinander in die Felder einer Tabelle mit vier Spalten und fünf Zeilen. Dabei füllt er die Tabelle Zeile für Zeile von oben nach unten, in jeder Zeile von links nach rechts. In leere Felder am Ende der Tabelle schreibt Boris ein #. Das Bild zeigt das Ergebnis.

![Tabelle mit vier Spalten und fünf Zeilen: TREF / FENM / ITBI / LLYU / M6##](./img/table.png)

Nun nimmt Boris die Zeichen aus der Tabelle, aber diesmal Spalte für Spalte von links nach rechts, aus jeder Spalte von oben nach unten. Er sendet also diese geheime Nachricht: TFILMRETL6ENBY#FMIU#

Berta verwendet für ihre Antwort dieselbe Methode. Sie sendet folgende geheime Nachricht an Boris: OHDRIKWETNIEDS#CROE#

**Wie lautet Bertas Antwort?**
