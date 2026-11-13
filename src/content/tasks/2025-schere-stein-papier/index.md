---
short: b5so
title: Schere, Stein, Papier
summary: Drei Spieler tauschen Karten, bevor gewertet wird. Welche Aktion sorgt dafür, dass Ben immer gegen Conni gewinnt?
grades:
  "11-13": hard
gi:
  content: [algorithms]
  process: [reasoning]
topics: [algorithm-analysis, logic]
methods: [invariant]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: Ben und Conni tauschen ihre Karten eine ungerade Anzahl Male. }
      - { id: b, label: Beliebig oft tauschen zwei Spieler ihre Karten, aber nie Ben mit Conni. }
      - { id: c, label: Beliebig oft tauschen zwei Spieler ihre Karten, darunter Ben mindestens einmal mit Conni. }
      - { id: d, label: Eine gerade Anzahl Male tauschen zwei Spieler ihre Karten. }
source:
  type: original
  work: Informatik-Biber 2025
  year: 2025
  page: 68
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2025/Biberheft_2025_web_komplett.pdf
  country: BR
  license: CC BY-SA 4.0
---
Anna, Ben und Conni spielen gemeinsam eine Runde Schere-Stein-Papier. Sie spielen gleichzeitig paarweise gegeneinander.

Jeder hat eine Spielkarte gezogen: Anna hat Stein, Ben hat Schere und Conni hat Papier:

![Anna, Ben und Conni sitzen im Kreis. Anna hat die Karte Stein, Ben die Karte Schere, Conni die Karte Papier. In der Mitte liegen Aktionskarten](./img/table.png)

Es gelten die klassischen Regeln: Stein schlägt Schere, Schere schlägt Papier, Papier schlägt Stein. So wie die Karten jetzt verteilt sind, würde jeder einmal gewinnen und einmal verlieren. Zum Beispiel gewinnt Ben gegen Conni und verliert gegen Anna.

Bevor das Ergebnis für jedes Spielerpaar ausgewertet wird, muss aber noch eine von vier Aktionskarten gewählt und deren Aktion ausgeführt werden. Bei den Aktionen geht es darum, mehrfach Spielkarten zwischen je zwei Spielern zu tauschen. Bei jedem Tausch kann neu entschieden werden, welche zwei Spieler miteinander tauschen – es sei denn, die Aktion sagt etwas anderes.

Ben möchte unbedingt gegen Conni gewinnen, egal wie die Aktion auf der gewählten Aktionskarte ausgeführt wird.

**Nur eine der vier Aktionen garantiert das. Welche?**
