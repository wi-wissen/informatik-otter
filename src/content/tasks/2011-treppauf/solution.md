---
answer: "8"
---
8 ist die richtige Antwort:

Bei wenigen Stufen ist es einfach, alle Hopsfolgen aufzuzählen: (1-1-1-1-1) (2-1-1-1) (1-2-1-1) (1-1-2-1) (1-1-1-2) (2-2-1) (2-1-2) (1-2-2).

Bei vielen Stufen braucht es etwas Problemanalyse: Die Anzahl Hopsfolgen für n Stufen errechnet sich aus der Anzahl Hopsfolgen für n−1 Stufen plus der Anzahl Hopsfolgen für n−2 Stufen. Also: f(n) = f(n–1) + f(n–2) für n>1. Für nur eine Stufe ist f(1) = 1. Für null Stufen gibt es die leere Hopsfolge, die aus null Hopsern besteht: f(0) = 1. So errechnet sich:

| Anzahl Stufen n | 0 | 1 | 2 | 3 | 4 | 5 | ... |
|---|---|---|---|---|---|---|---|
| Anzahl Hopsfolgen f | 1 | 1 | 2 | 3 | 5 | 8 | ... |

## Das ist Informatik!

Für so ein Problem eventuell eine Berechnungsformel zu finden, gehört in der Informatik zum mathematischen Handwerkzeug. Ob sich die Suche nach einer Formel lohnt, hängt von der Rechenkraft des aktuell verfügbaren Computers und der Größe des Problems ab. Ist das Problem klein und der Computer leistungsfähig genug, kann man ihn auch einfach alle Möglichkeiten aufzählen lassen. Dieses Verfahren heißt „brute force“ (rohe Gewalt). Für eine Treppe mit fünf Stufen war die rohe Denkgewalt eures Gehirns hoffentlich ausreichend?
