---
answer: b
---
**Antwort B ist richtig:**

![Das Bauwerk B](./img/sol.png)

Wir wissen schon, dass man mit der Bauanleitung verschiedene Bauwerke bauen kann. Die Anleitung ist also nicht *eindeutig*. Aber eines ist klar: Die Reihenfolge der einzelnen Anweisungen der Bauanleitung muss eingehalten werden. Schauen wir uns genauer an, was passieren kann, wenn man die Bauanleitung Schritt für Schritt befolgt. Wir beschreiben in einer Tabelle, wie das Bauwerk nach Ausführung der einzelnen Anweisungen aussieht, und prüfen, welches Bauwerk zu der Beschreibung passt.

| Nach Schritt | Beschreibung | A | B | C | D |
|---|---|---|---|---|---|
| 1 und 2 | Ein erster Turm aus drei Würfeln steht auf dem Boden. | ja | nein | ja | ja |
| 3 | Zwei Türme stehen auf dem Boden. | ja | nein | ja | ja |
| 4 | Zwei Türme und zwei Quader stehen auf dem Boden. | ja | nein | ja | ja |
| 5 | Wie oben, und die Brücke liegt auf anderen, vorher gebauten Teilen des Bauwerks, also auf Türmen oder Quadern. | ja | nein | ja | ja |
| 6 | Wie oben, und die Pyramiden liegen auf anderen, vorher gebauten Teilen des Bauwerks (Türmen, Quadern oder Brücke). | ja | nein | ja | ja |

Das Bauwerk von Antwort B passt also nicht zur Bauanleitung. Insbesondere wurde Anweisung 5 nicht richtig umgesetzt. Anweisung 5 gibt vor, dass die Brücke *auf* das bisherige Bauwerk gelegt werden muss. Im Bauwerk von Antwort B ist die Brücke aber nicht *auf* mindestens einem anderen Teil des Bauwerks, sondern nur *unter* Teilen, nämlich den zwei Türmen und einem Quader. Das Bauwerk von Antwort B kann nur entstehen, wenn die Brücke vor den beiden Türmen und einem Quader gebaut wird.

Die Tabelle zeigt, dass die Bauwerke der Antworten A, C und D mit der Anleitung gebaut werden können.

## Das ist Informatik!

Diese Aufgabe verdeutlicht, dass klare, eindeutige Anleitungen wichtig sind. Beispiele dafür sind Bauanleitungen oder auch Kochrezepte. Uneindeutig formulierte Anleitungen können zu unterschiedlichen und unvorhersehbaren Ergebnissen führen. In der Bauanleitung dieser Biberaufgabe ist beispielsweise nicht klar vorgeschrieben, wohin genau die einzelnen Bauklötze bzw. die aus den Würfeln gebauten Türme gestellt oder gelegt werden sollen.

Computer brauchen klare und eindeutige Anleitungen, wenn sie so funktionieren sollen, wie Menschen sich das wünschen. Die Informatik nennt solche klaren Anleitungen *Algorithmen*: Schritt-für-Schritt-Anleitungen, um eine Aufgabe zu erledigen oder ein Problem zu lösen. Auch die einzelnen Anweisungen eines Algorithmus müssen eindeutig sein, denn anders als Menschen können Computer nicht interpretieren oder raten. Sie brauchen eindeutige Anweisungen, um Aufgaben vorhersehbar auszuführen. Uneindeutige Anweisungen in Computerprogrammen können dazu führen, dass Programme nicht wie gewollt ausgeführt werden, Software nicht gut funktioniert oder unerwartete Ergebnisse liefert.

Bevor ein Programm geschrieben wird, muss der Entwickler überlegen, welche Einschränkungen (engl. *constraints*) definiert werden müssen, um ein vorhersehbares Ergebnis zu erzielen. In dieser Biberaufgabe können solche Einschränkungen zum Beispiel Folgendes festlegen: die genaue vertikale und horizontale Anordnung der Klötze, die Platzierung von Teilen des Bauwerks und wie Bauklötze mit den bereits vorhandenen verbunden werden müssen.
