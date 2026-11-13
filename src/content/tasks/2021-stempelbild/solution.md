---
answer: c
---
Antwort C (die Sonne) ist richtig.

Im Bild kann man sehen, dass manche gestempelten Figuren über anderen Figuren sind. Eine Figur, die über einer anderen liegt, kann Mika nicht mit dem ersten Stempel gemacht haben. Nun schauen wir uns das Bild genau an:

![Die drei Überdeckungen: Haus über Blume, Blatt über Sonne, Blume über Blatt](./img/solution.png)

- Ganz rechts ist das Haus über der Blume; das Haus kann also nicht der erste Stempel sein.
- Links daneben ist das Blatt über der Sonne; auch das Blatt kann nicht der erste Stempel sein.
- Weiter links ist die Blume über dem Blatt; auch die Blume kann nicht der erste Stempel sein.

Nur die Sonne ist über keiner anderen Figur: Mika hat also die Sonne zuerst genommen.

Weil Mika jeden Stempel nur einmal nimmt, wissen wir auch die Reihenfolge der anderen Stempel: Nach der Sonne hat Mika das Blatt genommen, danach die Blume und zuletzt das Haus.

## Das ist Informatik!

Mika hat die Figuren in einer bestimmten Reihenfolge gestempelt, und aus dem fertigen Bild kann man die Reihenfolge zurückgewinnen: Wenn eine Figur eine andere überdeckt, wurde sie später gestempelt. Einige Figuren müssen also vor anderen kommen, andere sind unabhängig voneinander. Daraus ergibt sich eine Ordnung, bei der nur manche Paare verglichen werden können. Die Lösung beginnt mit der Figur, über der nichts anderes liegt, und arbeitet sich dann weiter. Das ist die Idee des topologischen Sortierens.

In der Computergrafik braucht man diese Idee in der umgekehrten Richtung. Wenn ein Programm eine Szene mit sich überdeckenden Objekten zeichnet, muss es entscheiden, in welcher Reihenfolge es die Objekte zeichnet. Beim Malerverfahren (englisch Painter's Algorithm) zeichnet es zuerst die am weitesten entfernten Objekte und danach die näheren, die die dahinterliegenden dann überdecken. Das funktioniert nicht immer: Wenn sich drei Figuren gegenseitig im Kreis überdecken, gibt es keine passende Reihenfolge. Moderne Grafikkarten lösen das Problem anders, indem sie sich für jeden Bildpunkt die Entfernung merken (Tiefenpuffer).

Auch Programme für Zeichnungen und Präsentationen verwalten eine solche Reihenfolge: Mit „in den Vordergrund“ und „in den Hintergrund“ bestimmen wir, welches Objekt welches andere überdeckt.

*Dieser Abschnitt wurde für den Informatik-Otter ergänzt und steht nicht im Biberheft.*
