---
answer: "4"
---
Die Anzahl 4 ist richtig. Ob man die Bewegungen „links“ und „rechts“ aus der Perspektive von Gump oder der eines Betrachters ausführt, spielt für die Lösung keine Rolle. Das Arbeitsprotokoll von Gump sieht so aus:

| Schritt | Behälter | Stimmung | Bewegung | neue Stimmung | volle Behälter |
|---|---|---|---|---|---|
| 1 | leer | easy | rechts | cool | 1 |
| 2 | leer | cool | links | easy | 2 |
| 3 | voll | easy | links | cool | 2 |
| 4 | leer | cool | links | easy | 3 |
| 5 | leer | easy | links | cool | 4 |
| 6 | voll | cool | STOPPEN | | |

## Das ist Informatik!

Biber Gump und seine Behälter verkörpern eine spezielle Turingmaschine. Turingmaschinen sind keine echten Maschinen. Das Prinzip der Turingmaschine ist ein theoretisches Modell, mit dem sich alle von Menschen erdenklichen Berechnungen beschreiben lassen – wenn auch ziemlich umständlich. Eingeführt wurde dieses Modell 1936 von Alan Turing, der im Jahr 2012 seinen 100. Geburtstag gefeiert hätte. Die Biber-Gump-Turingmaschine in dieser Aufgabe kann mit nur zwei Maschinenzuständen (Gumps Stimmungen) vier Speicherplätze füllen. Mehr geht mit zwei Zuständen nicht. Die Informatik nennt diese Maschine „two-state busy beaver“ (fleißiger Biber mit zwei Zuständen). Klar, dass der Informatik-Biber im Turingjahr 2012 diese Aufgabe stellen musste, oder?
