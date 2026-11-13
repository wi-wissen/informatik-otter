---
short: yXT8
title: Nachricht aus Bibirien
summary: Drei Korrektoren ersetzen immer wieder Buchstabenfolgen. Bei welcher Nachricht bleibt am Ende nicht nur ein B?
grades:
  "11-13": hard
gi:
  content: [languages-automata]
  process: [modelling, reasoning]
topics: [formal-languages]
methods: [rewriting-system]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, label: AAABCB }
      - { id: b, label: ABCABC }
      - { id: c, label: ABABCB }
      - { id: d, label: ABCCCC }
source:
  type: original
  work: Informatik-Biber 2014
  year: 2014
  page: 38
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2014/Biberheft2014-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Im weit entfernten Bibirien werden die – ohnehin nur aus den Buchstaben A, B und C bestehenden – Zeitungsmeldungen gelegentlich vom Nachrichtenamt „korrigiert“. Die drei Korrektoren des Amtes lesen eine Nachricht jeweils von links nach rechts und suchen dabei nach bestimmten Buchstabenmustern:

1. Der **Unterkorrektor** sucht nach der Folge **ABC**. Wenn er die Folge findet, ersetzt er sie durch **BC** und fängt mit der geänderten Nachricht wieder von vorne an. Findet er die Folge nicht, gibt er die Nachricht an den Hauptkorrektor weiter.
2. Der **Hauptkorrektor** sucht nach der Folge **BC**. Wenn er die Folge findet, ersetzt er sie durch **B** und gibt die geänderte Nachricht an den Unterkorrektor zurück. Findet er die Folge nicht, gibt er die Nachricht an den Chefkorrektor weiter.
3. Der **Chefkorrektor** sucht nach der Folge **BB**. Wenn er die Folge findet, ersetzt er sie durch **B** und gibt die geänderte Nachricht an den Unterkorrektor zurück. Findet er die Folge nicht, ist die Korrektur zu Ende.

![Die drei Korrektoren nebeneinander: Unterkorrektor (ABC wird zu BC), Hauptkorrektor (BC wird zu B), Chefkorrektor (BB wird zu B); Pfeile führen vom einen zum nächsten und zurück zum Unterkorrektor](./img/correctors.png)

Drei der folgenden Nachrichten bestehen am Ende der Korrektur nur noch aus einem Buchstaben B. Nur eine **nicht**.

**Welche?**
