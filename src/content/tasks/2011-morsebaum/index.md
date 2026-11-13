---
short: A7Km
title: Morsebaum
summary: Mit einem Baum aus Punkten und Strichen lässt sich Morsecode entschlüsseln. Welches Zeichen steckt hinter kurz-kurz-lang?
grades:
  "5-6": easy
gi:
  content: [information-data]
  process: [representing, modelling]
topics: [encoding, trees]
methods: [binary-tree]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: Das Zeichen „2“ }
      - { id: b, label: Das Zeichen „G“ }
      - { id: c, label: Das Zeichen „O“ }
      - { id: d, label: Das Zeichen „U“ }
source:
  type: original
  work: Informatik-Biber 2011
  year: 2011
  page: 22
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2011/Biberheft2011-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0 DE
---
Das Morsen ist ein Verfahren zur Übermittlung von Buchstaben und anderen Zeichen. Dabei wird zum Beispiel ein Tonsignal länger oder kürzer ein- oder ausgeschaltet.

Dieser Baum hilft dir, Morsecode zu entschlüsseln. Du beginnst oben bei der Morsetaste. Du gehst für ein **rotes Kreissymbol** (kurz) nach links eine Ebene tiefer und für ein **blaues Rechteck** (lang) nach rechts eine Ebene tiefer.

![Morsebaum: Oben die Morsetaste, darunter E (kurz) und T (lang); E hat die Kinder I und A, T hat N und M; darunter S, U, R, W, D, K, G, O; dann H, V, F, Ü, L, Ä, P, J, B, X, C, Y, Z, Q, Ö, CH; ganz unten die Ziffern 5, 4, 3, 2, 1, 6, 7, 8, 9, 0. Links von jedem Zweig steht ein roter Punkt, rechts ein blauer Strich.](./img/baum.png)

**Welches Zeichen bedeutet dieser Morsecode: kurz kurz lang (zwei rote Kreise, dann ein blaues Rechteck)?**
