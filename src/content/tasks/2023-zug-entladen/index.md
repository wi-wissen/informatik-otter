---
short: zqo6
title: Zug entladen
summary: Ein Zug fährt Runde um Runde am Kran vorbei, der die Kisten der Reihe nach entlädt. Wie viele Runden braucht er?
grades:
  "5-6": hard
  "7-8": medium
  "9-10": easy
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [sorting, algorithm-analysis]
methods: [bubble-sort]
mascot: beaver
interaction:
  format: input
  props:
    kind: number
    placeholder: Anzahl
    suffix: Runden
source:
  type: original
  work: Informatik-Biber 2023
  year: 2023
  page: 69
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2023/Biberheft_2023_web_komplett.pdf
  country: IN
  license: CC BY-SA 4.0
---
Ein Zug hat Wagen mit nummerierten Kisten. Zum Entladen der Kisten fährt der Zug eine Runde zum Kran. Der Kran ist unbeweglich, und der Zug kann nur vorwärts fahren.

![Ein Zug mit vier Wagen (Kisten 4, 1, 3, 2) fährt auf einem ovalen Gleis; neben dem Gleis steht ein Kran](./img/zug.png)

Die Kisten sollen in der Reihenfolge ihrer Nummern entladen werden, Kiste 1 zuerst.

Der Zug fährt Wagen für Wagen die Kisten unter den Kran. Nur wenn eine Kiste an der Reihe ist, entlädt der Kran die Kiste. Wenn der Zug unter dem Kran durch ist, können noch Kisten auf den Wagen sein. Dann muss der Zug noch eine Runde zum Kran fahren.

Der obige Zug muss drei Runden fahren, bis alle Kisten in der richtigen Reihenfolge entladen sind:

| Runde 1 | Runde 2 | Runde 3 |
|---|---|---|
| ![Runde 1: Kiste 4 ist noch auf dem Zug, Kiste 3 ebenfalls, Kisten 1 und 2 liegen entladen am Kran](./img/runde-1.png) | ![Runde 2: Kiste 4 ist noch auf dem Zug, Kiste 3 wurde entladen](./img/runde-2.png) | ![Runde 3: Kiste 4 wird entladen](./img/runde-3.png) |
| Kiste 4 ist nicht an der Reihe, Kiste 1 wird entladen, Kiste 3 ist nicht an der Reihe, Kiste 2 wird entladen. | Kiste 4 ist nicht an der Reihe, Kiste 3 wird entladen. | Kiste 4 wird entladen. |

Nun hat ein anderer Zug zehn Wagen. Die Kisten stehen auf dem Zug in dieser Reihenfolge (von der Lokomotive aus gesehen): 10, 3, 9, 7, 1, 6, 2, 8, 5, 4.

![Ein Zug mit zehn Wagen; auf den Kisten stehen von vorn nach hinten die Nummern 10, 3, 9, 7, 1, 6, 2, 8, 5, 4](./img/zug10.png)

**Wie viele Runden muss dieser Zug fahren, bis alle Kisten in der richtigen Reihenfolge entladen sind?**
