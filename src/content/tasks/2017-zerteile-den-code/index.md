---
short: i912
title: Zerteile den Code
summary: Ein Präfixcode kodiert das Wort BEBRAS als Ziffernfolge. Wie lauten die Codewörter der einzelnen Buchstaben?
grades:
  "11-13": hard
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [encoding, compression]
methods: [huffman]
mascot: beaver
interaction:
  format: input
  props:
    kind: text
    placeholder: Codewörter mit Leerzeichen getrennt
source:
  type: original
  work: Informatik-Biber 2017
  year: 2017
  page: 61
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2017/Biberheft2017-mit-Loesungen.pdf
  country: RU
  license: CC BY-SA 4.0
---
In einem speziellen Code für Texte wird jeder Buchstabe durch ein Codewort aus den Ziffern 0 bis 9 kodiert. Die Besonderheit: Kein Codewort darf mit dem Codewort eines anderen Buchstabens beginnen. Ein Beispiel: Der Buchstabe **X** wird durch **12** kodiert. Nun kann **Y** durch **2** kodiert werden. Denn 12 beginnt nicht mit 2 (und 2 nicht mit 12). Jetzt kann **Z** durch **11** kodiert werden; denn weder 12 noch 2 beginnen mit 11, und 11 beginnt weder mit 12 noch mit 2. 21 wäre jedoch nicht als Codewort für Z erlaubt, weil es mit 2, also dem Codewort von Y beginnt.

Das Wort **BEBRAS** wird durch die Ziffernfolge unten kodiert:

**1 2 1 1 2 2 3 3 3 2 1**

**Teile die Ziffernfolge in die Codewörter der einzelnen Buchstaben!** Schreibe die sechs Codewörter nacheinander auf und trenne sie durch Leerzeichen.
