---
answer: "0101"
---
**0101** ist die richtige Antwort.

Die oberste Wippe ändert ihre Position bei jeder Kugel. Wenn also wie in diesem Fall eine ungerade Anzahl von Kugeln durch die Kugelbahn rollt, steht die oberste Wippe auf 1. Damit ist die letzte Ziffer eine 1.

Die zweitoberste Wippe ändert ihre Position nur, wenn die oberste Wippe vorher auf 1 stand. Das ist nur jedes zweite Mal der Fall. Sie ändert ihre Position also zweimal und steht am Ende auf 0. Damit ist die vorletzte Ziffer eine 0.

Die drittoberste Wippe ändert ihre Position nur, wenn die zweitoberste Wippe vorher auf 1 stand und überhaupt eine Kugel auf sie trifft, also auch die oberste Wippe vorher auf 1 stand. Damit ändert die drittoberste Wippe ihre Position nur jedes vierte Mal, also hier nur bei der vierten Kugel. Damit steht sie am Ende auf 1. Damit ist die drittletzte Ziffer eine 1.

Die unterste Wippe ändert ihre Position nur, wenn alle drei Wippen über ihr vorher in der Position 1 waren und sie damit jeweils von einer Kugel getroffen werden. Das ist nur jedes achte Mal der Fall, die unterste Wippe ändert ihre Position bei fünf Kugeln also nicht. Damit ist die erste Ziffer eine 0.

Insgesamt zeigen die Wippen: **0101**.

## Das ist Informatik!

Die Wippen der Kugelbahn schalten zwischen zwei Zuständen hin und her: 0 und 1. Darin gleichen sie den elektronischen Bausteinen, die in digitalen Geräten die kleinste Speichereinheit realisieren: das Bit.

Zwei hintereinander liegende Wippen sind wie ein Halbaddierer verbunden. Dieser hat als Eingabe zum einen den aktuellen Zustand des Bits und zum anderen einen Impuls. Die Ausgabe ist ein neuer Zustand des Bits und ein Übertrag.

| Gespeicherter Zustand | Impuls | Zu speichernder Zustand | Übertrag |
|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

Die Kugel selbst liefert den Impuls 1 für die erste Wippe. Insgesamt verändern sich die Zustände der vier Wippen so: 0000, 0001, 0010, 0011, 0100, 0101. Wenn man diese Bitfolgen als Binärzahlen versteht, bedeutet das: 0, 1, 2, 3, 4, 5. Zusammen mit der Kugel funktionieren die „Bit-Wippen“ in dieser Biberaufgabe also wie ein (binäres) Zählwerk.
