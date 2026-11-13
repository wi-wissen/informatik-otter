---
answer: { loop: lt08, wait1: gt12, wait2: lt11 }
---
Die einzige richtige Antwort ist:

```
setze Zähler auf 0
wiederhole bis Nasenlänge < 0,8
    warte bis Nasenlänge > 1,2
    warte bis Nasenlänge < 1,1
    erhöhe Zähler um 1
gib Zähler Karten aus
```

Die Struktur des Programms ist vorgegeben: Es gibt eine zentrale Wiederholungsanweisung; oft auch „Schleife“ genannt. Die letzte der in dieser Schleife wiederholten Anweisungen erhöht den Zähler der auszugebenden Karten. Folglich muss mit den zwei „warte bis“-Anweisungen ein Nicken des Kunden wahrgenommen werden: also dass der Kunde zuerst den Kopf gesenkt hat und dann wieder geradeaus schaut. Der unter Nasenlänge gespeicherte Wert muss also zuerst bei etwa 1,3 und dann wieder bei 1 liegen. Das entspricht den Bedingungen `Nasenlänge > 1,2` gefolgt von `Nasenlänge < 1,1`.

Anweisungen in der Schleife werden wiederholt, bis der Kunde den Kopf hebt: also ein Wert gemessen wird, der deutlich kleiner als 1 ist. Die einzige dazu passende Bedingung ist `Nasenlänge < 0,8`.

Vielleicht ist dir aufgefallen, dass das Programm nicht exakt die Werte aus der Tabelle verwendet. In der Praxis kann nämlich nicht kontinuierlich gemessen werden, sondern nur mit einer bestimmten Frequenz (beispielsweise 25 mal pro Sekunde). Da kann es vorkommen, dass z.B. der exakte Wert für das Geradeausschauen von 1,0 gar nicht gemessen wird, weil zuvor beispielsweise 0,95 und danach 1,03 gemessen wird.
