---
short: 8CQn
title: Fleißiger Biber
summary: Biber Gump füllt Behälter nach einer Tabelle von Anweisungen, bis er stoppt. Wie viele sind dann voll?
grades:
  "9-10": hard
  "11-13": hard
gi:
  content: [languages-automata]
  process: [modelling, reasoning]
topics: [automata]
methods: [turing-machine]
mascot: beaver
interaction:
  format: input
  props:
    kind: number
    suffix: volle Behälter
source:
  type: original
  work: Informatik-Biber 2012
  year: 2012
  page: 19
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2012/Biberheft2012-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Biber Gump ist sehr fleißig. Biber Alan hat ihn darum angestellt, eine Reihe von Behältern mit Vorräten zu füllen.

![Biber Gump steht vor einer Reihe von Behältern, die sich nach links und rechts fortsetzt](./img/containers.png)

Jeder Behälter kann entweder „leer“ oder „voll“ sein. Anfangs sind alle Behälter „leer“ und Gump steht vor einem von ihnen. Alan hat Gump angewiesen, auf welche Weise er die Behälter füllen soll. Welche Anweisung er jeweils ausführt, hängt erstens davon ab, ob der Behälter, vor dem er steht, „leer“ oder „voll“ ist. Und zweitens von Gumps Stimmung – die ist entweder „easy“ oder „cool“.

Eine Anweisung sagt Gump, sich zum nächsten Behälter „links“ oder „rechts“ zu bewegen und „easy“ oder „cool“ zu sein – oder mit der Arbeit zu „STOPPEN“. Steht Gump vor einem „leeren“ Behälter, macht er ihn „voll“, bevor er sich gemäß der Anweisung weiter bewegt.

Alan hat die Anweisungen in eine Tabelle geschrieben:

| Behälter / Stimmung | easy | cool |
|---|---|---|
| leer | (rechts, cool) | (links, easy) |
| voll | (links, cool) | STOPPEN |

Gump startet in der Stimmung „easy“.

**Wie viele Behälter sind „voll“, wenn Gump STOPPT?**
