---
answer: "3"
---
**3** ist richtig.

Ben muss auf jeden Fall Eiche besorgen, nämlich für Carlo. Damit sind auch Anne, Ben selbst und Freddy zufrieden. Doris, Emre und Georg haben zu dritt keine leckere Holzsorte gemeinsam. Aber mit zwei weiteren Holzsorten, z. B. Birke und Ahorn, kann Ben auch diese drei Biber zufriedenstellen. Insgesamt muss Ben also drei Holzsorten besorgen, damit er für jeden Biber eine leckere Sorte hat.

## Das ist Informatik!

In der Aufgabenstellung ist für jeden Biber in einer Tabelle angegeben, welche Holzsorten er lecker findet. Für die Beantwortung der Frage wäre auch eine andere Tabelle nützlich gewesen, in der nämlich für jede Holzsorte angegeben wird, welcher Biber sie lecker findet:

| Diese Holzsorte … | … finden diese Biber lecker: |
|---|---|
| Ahorn | Anne, Emre, Georg |
| Birke | Doris, Emre |
| Eiche | Anne, Ben, Carlo, Freddy |
| Esche | Anne, Doris, Freddy |
| Linde | Ben, Georg |
| Weide | Anne, Ben, Emre |

Mit jeder Holzsorte ist dann ein Teil der Gesamtmenge der sieben Biber verbunden. Gastgeber Ben sucht dann die kleinste Auswahl aus diesen Teilmengen, so dass insgesamt alle sieben Biber in der Auswahl enthalten sind. Zum Beispiel sind insgesamt alle Biber in den Mengen für Ahorn, Birke und Eiche enthalten.

Das Problem, aus vielen Teilmengen einer Gesamtmenge möglichst wenige so auszuwählen, dass die Vereinigung dieser Teilmengen die Gesamtmenge ergibt, ist in der Informatik und der Mathematik gut bekannt. Es wird als „Mengenüberdeckungsproblem“ oder auf Englisch auch als „set cover problem“ bezeichnet. Auch wenn diese Biberaufgabe nicht allzu schwer zu lösen war: „Set cover“ gehört im Allgemeinen zu den schwierigsten Problemen der Informatik, den so genannten „NP-vollständigen Problemen“. Die Informatik kennt keine Verfahren, mit denen diese Probleme in allen Fällen effizient, also in für Menschen sinnvoller Zeit perfekt gelöst werden können. Stattdessen sind häufig Verfahren bekannt, die zwar nicht immer die besten, aber recht gute Lösungen finden.
