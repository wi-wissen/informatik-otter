---
answer: b
---
Antwort B ist richtig: 33 Wochen.

Man kann sich überlegen, dass die Häuser der zuerst verbündeten Clans auch an den weiteren Verbündungen beteiligt sind. Die Gesamtdauer wird also dann möglichst kurz, wenn sich in jedem Schritt die beiden Clans mit den aktuell wenigsten Häusern verbünden.

Hier sind die optimalen Verbündungsschritte dargestellt; dabei sind die Clans mit der Anzahl ihrer Häuser bezeichnet.

Zuerst verbünden sich (1) und (2) zu einem Clan (3); dafür brauchen sie drei Wochen.

![Die Clans mit 1 und 2 Häusern verbünden sich](./img/step1.png)

(3) und (3) verbünden sich in sechs Wochen zu (6).

![Die beiden Clans mit je 3 Häusern verbünden sich](./img/step2.png)

Nun verbünden sich (4) und (5) in neun Wochen zu (9).

![Die Clans mit 4 und 5 Häusern verbünden sich](./img/step3.png)

Zuletzt verbünden sich die verbliebenen (6) und (9). Dafür brauchen sie 15 Wochen.

![Die Clans mit 6 und 9 Häusern verbünden sich](./img/step4.png)

Insgesamt sind alle Clans nach 15 + 9 + 6 + 3 = 33 Wochen zu einem Clan verbündet. Schneller geht es nicht.

![Alle Häuser gehören zu einem Clan](./img/step5.png)

Die hier angegebene Reihenfolge ist aber nicht die einzige, die zur schnellsten Verbündung führt. Die Verbündung von (4) und (5) ist unabhängig davon, dass sich (1), (2) und (3) nacheinander verbünden. Diese beiden Teil-Verbündungen können deshalb vertauscht werden, ohne dass es insgesamt länger dauert.
