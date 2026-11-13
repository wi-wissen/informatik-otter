---
short: uV3H
title: Zerteile den Code
summary: Eine lange Ziffernfolge steckt voller Buchstaben. Kannst du sie in die einzelnen Codewörter zerlegen?
grades:
  "11-13": hard
gi:
  content: [information-data]
  process: [reasoning]
topics: [encoding, compression]
methods: [huffman]
mascot: beaver
interaction:
  format: custom
  props:
    digits: "12112233321"
source:
  type: original
  work: Informatik-Biber 2023
  year: 2023
  page: 66
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2023/Biberheft_2023_web_komplett.pdf
  country: RU
  license: CC BY-SA 4.0
---
In einem speziellen Code für Texte wird jeder Buchstabe durch ein Codewort aus den Ziffern 0 bis 9 kodiert. Dabei gilt diese Regel: Kein Codewort darf mit dem Codewort eines anderen Buchstabens beginnen.

Der Buchstabe X wird beispielsweise durch 12 kodiert. Nun kann Y durch 2 kodiert werden, denn 12 beginnt nicht mit 2 (und 2 nicht mit 12). Jetzt kann Z durch 11 kodiert werden; denn weder 12 noch 2 beginnen mit 11 und 11 beginnt weder mit 12 noch mit 2. 21 wäre jedoch nicht als Codewort für Z erlaubt, weil es mit 2, also dem Codewort von Y beginnt.

Das Wort MEMORY wird durch die Ziffernfolge 12112233321 kodiert.

**Teile die Ziffernfolge in die Codewörter der einzelnen Buchstaben!**

Klicke dazu zwischen zwei Ziffern, um dort einen Trennstrich zu setzen oder wieder zu entfernen.
