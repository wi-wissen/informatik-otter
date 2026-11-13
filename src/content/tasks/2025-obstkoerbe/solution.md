---
answer: [b, d, a, c, e]
---
![Die Körbe in der richtigen Reihenfolge](./img/solution-order.png)

Wir benennen die Körbe in der Ausgangsreihenfolge mit den Buchstaben A bis E. Dann zählen wir die Obstsorten in jedem Korb.

| Korb | Äpfel | Bananen | Birnen |
|------|------:|--------:|-------:|
| A    | 3     | 2       | 3      |
| B    | 5     | 0       | 3      |
| C    | 2     | 4       | 2      |
| D    | 3     | 3       | 1      |
| E    | 1     | 3       | 4      |

In Korb B sind die meisten Äpfel, nämlich 5; er muss ganz links stehen. Danach kommen die Körbe A und D mit jeweils 3 Äpfeln. Weil Korb D mehr Bananen hat, kommt er als nächster in die Reihe, danach Korb A. Von den beiden übrigen Körben kommt Korb C mit 2 Äpfeln vor Korb E mit nur 1 Apfel.

Insgesamt lautet die Reihenfolge also: **B, D, A, C, E**.

## Das ist Informatik!

Bella möchte in dieser Biberaufgabe die Obstkörbe nach ihren Vorstellungen sortieren, also in eine ganz bestimmte Ordnung bringen. Da sie Äpfel am liebsten mag, ist es für sie sinnvoll, den Korb mit den meisten Äpfeln ganz vorne in der Reihe zu haben: Wenn die Körbe so sortiert sind, weiß sie genau, wie sie am schnellsten an viele Äpfel kommt.

Man kann Dinge sortieren, wenn man für jeweils zwei Dinge immer entscheiden kann, in welcher Ordnung sie zueinander stehen. Dazu braucht es mindestens ein Merkmal, das alle zu sortierenden Dinge haben, und nach dem man sie unterscheiden kann. Für die Werte, die das Merkmal haben kann, muss es eine klare Ordnung geben. Zum Beispiel hat jedes Buch mindestens einen Autor oder eine Autorin, und wir können den Namen des ersten Autors bzw. der ersten Autorin als Merkmal nehmen. Namen kann man alphabetisch ordnen, wenn man alle Buchstaben und auch die Länge der Namen berücksichtigt. Dann kommt Meier vor Meyer, und Schach kommt vor Schacht. So können wir die Bücher nach dem Namen des ersten Autors bzw. der ersten Autorin sortieren.

Für die Informatik ist Sortieren eine ganz wichtige Angelegenheit. Computer sortieren ständig Daten, insbesondere weil sie in sortierten Daten schneller suchen können. Die Informatik kennt sehr viele Verfahren (in der Fachsprache Algorithmen genannt), mit denen Daten sortiert werden können. Es ist selbst für Informatikerinnen und Informatiker nicht immer einfach zu entscheiden, welches davon für eine gegebene Sortieraufgabe am besten geeignet ist.
