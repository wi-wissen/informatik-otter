---
short: MQo3
title: Fleißiger Biber
summary: Biber Gump füllt Behälter nach einer Anweisungstabelle. Wie viele sind voll, wenn er stoppt?
grades:
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
source:
  type: original
  work: Informatik-Biber 2015
  year: 2015
  page: 30
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2015/Biberheft2015-mit-Loesungen.pdf
  country: DE
  license: CC BY-SA 3.0
---
Biber Gump ist sehr fleißig. Biber Alan hat ihn darum angestellt, eine Reihe von Behältern mit Vorräten zu füllen. Jeder Behälter kann entweder „leer“ oder „voll“ sein. Anfangs sind alle Behälter „leer“, und Gump steht vor einem von ihnen.

![Biber Gump steht vor einer langen Reihe von leeren Behältern, die nach links und rechts weitergeht](./img/containers.png)

Alan hat Gump angewiesen, auf welche Weise er die Behälter füllen soll. Welche Anweisung er jeweils ausführt, hängt erstens davon ab, ob der Behälter, vor dem er steht, „leer“ oder „voll“ ist. Und zweitens von Gumps Stimmung – die ist entweder „easy“ oder „cool“.

Eine Anweisung sagt Gump, sich zum nächsten Behälter „links“ oder „rechts“ zu bewegen und „easy“ oder „cool“ zu sein – oder mit der Arbeit zu „STOPPEN“.

Wenn Gump weiß, was er zu tun hat, schaut er sich noch den Behälter an, vor dem er steht. Ist der „leer“, macht er ihn „voll“, bevor er sich gemäß der Anweisung bewegt.

Alan hat die Anweisungen in eine Tabelle geschrieben:

| | easy | cool |
|---|---|---|
| **leer** | (rechts, cool) | (links, easy) |
| **voll** | (links, cool) | STOPPEN |

Gump startet in der Stimmung „easy“.

**Wie viele Behälter sind „voll“, wenn Gump STOPPT?**
