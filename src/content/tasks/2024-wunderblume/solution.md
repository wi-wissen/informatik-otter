---
answer: a
---
Die Wunderblume hat Knospen, Stiele – und auch Äste. Ein Ast besteht aus den Stielen, an denen entlang man von der ersten Knospe zu einer äußeren Knospe geht, aus der noch kein Stiel gewachsen ist. Am Ende von Tag 1 gibt es nur einen Ast, und der ist 1 Stiel lang. Am Ende von Tag zwei gibt es schon zwei Äste, und die sind 2 Stiele lang. Durch das Wachstum der Wunderblume werden die Äste an jedem Tag um einen Stiel länger.

Man muss also nur einem Ast folgen, z. B. dem ganz rechts, und zählen, wie viele Stiele der Ast lang ist. Der Ast ist 5 Stiele lang, und so weiß man, dass die Wunderblume 5 Tage gewachsen ist.

Die anderen Antworten sind also falsch. Die Zahlen 11, 16 und 32 passen trotzdem zu dieser in 5 Tagen gewachsenen Wunderblume:

- Jeder Ast hat 11 Knospen.

- Die äußeren Knospen sind aus 16 Stielen herausgewachsen.

- Diese Wunderblume hat 32 äußere Knospen.

## Das ist Informatik!

Nach nur fünf Tagen ist die Wunderblume schon sehr groß geworden. Sie hat viele Stiele und noch mehr schöne rote Knospen bekommen. Alleine von den äußeren Knospen gibt es nach 5 Tagen schon 32 Stück. Andersherum kann man feststellen, dass jede der 32 äußeren Knospen an einem Ast gewachsen ist, der nur 5 Stiele lang ist.

Diese Tabelle zeigt für die ersten 10 Tage, wie viele äußere Knospen eine Wunderblume nach wie vielen Tagen hat und wie lang die Äste dann sind:

| Tage | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Länge der Äste | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| äußere Knospen | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 |

Schon nach 10 Tagen hat die Wunderblume sehr viele Knospen. Die Äste sind aber noch recht kurz: Um nach 10 Tagen von der ersten Knospe aus eine der über tausend äußeren Knospen zu erreichen, muss man an nur 10 Stielen entlang gehen.

Damit Computerprogramme auch mit vielen Daten schnell umgehen können, wurden in der Informatik Datenstrukturen entwickelt, die der Wunderblume in dieser Biberaufgabe ähneln. In diesen Strukturen kann man sehr viele Daten speichern, aber dennoch jedes einzelne Datenelement vom Ausgangspunkt der Struktur aus in wenigen Schritten erreichen. Wenn eine solche Struktur genauso schön ausgewogen ist wie die Wunderblume, kann man in 5 Schritten 2 × 2 × 2 × 2 × 2 = 32 Datenelemente erreichen, in 10 Schritten 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 = 1.024 und in nur 20 Schritten mehr als eine Million. Die Anzahl der benötigten Schritte wächst also sehr viel langsamer als die Menge der damit erreichbaren Datenelemente. In der Informatik sagt man, dass die Anzahl der Schritte „logarithmisch“ wächst, im Verhältnis zur Anzahl der Datenelemente. Umgekehrt wächst die Anzahl der Datenelemente „exponentiell“ im Verhältnis zur Anzahl der Schritte.
