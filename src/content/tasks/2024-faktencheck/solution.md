---
answer: d
---
Um die richtige Antwort zu bestimmen, muss der Wahrheitsgehalt (wahr oder falsch) der vier Aussagen festgestellt werden, im Vergleich zum Foto. Jede Aussage besteht aus zwei Teilaussagen, die entweder mit **und** oder mit **oder** verknüpft sind. Der Wahrheitsgehalt der gesamten Aussage lässt sich aus dem Wahrheitsgehalt der Teilaussagen bestimmen:

- **und:** Die gesamte Aussage ist wahr, wenn beide Teilaussagen wahr sind; sonst ist sie falsch.
- **oder:** Die gesamte Aussage ist wahr, wenn mindestens eine der Teilaussagen wahr ist; sonst ist sie falsch.

In der deutschen Sprache sind manche der zweiten Teilaussagen verkürzt, damit Subjekt oder Prädikat nicht wiederholt werden. In der folgenden Analyse sind die Teilaussagen vollständig angeführt:

**Aussage A:** Alfred hatte einen Hut auf (wahr) **und** Alfred benutzte keinen Stock (falsch). Diese Aussage ist falsch, weil nicht beide Teilaussagen wahr sind.

**Aussage B:** Alfred trug eine Krawatte (falsch) **oder** Alfred trug eine Fliege (falsch). Diese Aussage ist falsch, weil nicht mindestens eine Teilaussage wahr ist.

**Aussage C:** Alfred hatte einen Hut auf (wahr) **und** Alfred trug eine Fliege (falsch). Diese Aussage ist falsch, weil nicht beide Teilaussagen wahr sind.

**Aussage D:** Alfred hatte Flipflops an (falsch) **oder** Alfred hatte sogar keine Schuhe an (wahr). Diese Aussage ist wahr, weil (mindestens) eine Teilaussage wahr ist.

## Das ist Informatik!

In den sogenannten „sozialen Medien“ ist nicht immer alles wahr. Und leider gibt es nicht immer ein Foto, mit dem wir den Wahrheitsgehalt einer Aussage dort überprüfen können.

Auch die Logik beschäftigt sich mit der Wahrheit von Aussagen: Aussagen können wahr oder falsch sein. Logische Operatoren können verwendet werden, um (einfachere) Aussagen zu komplexeren Aussagen zu verknüpfen. Der Wahrheitsgehalt der gesamten Aussage lässt sich dann aus dem Wahrheitsgehalt der Teilaussagen berechnen. In dieser Biberaufgabe werden zwei Operatoren verwendet, *und* und *oder*. Die Wahrheitswerte der gesamten Aussagen können für beide Operatoren in einer Wahrheitstabelle dargestellt werden:

| Teilaussage A | Teilaussage B | A und B | A oder B |
|---|---|---|---|
| wahr | wahr | wahr | wahr |
| falsch | wahr | falsch | wahr |
| wahr | falsch | falsch | wahr |
| falsch | falsch | falsch | falsch |

Der Umgang mit Logik ist fundamental in der Informatik, unter anderem beim Programmieren. Da verwendet man logische Ausdrücke, um festzulegen, unter welchen Bedingungen ein Programm was tun soll. In manchen Programmen wird das auch bei der Benutzung offensichtlich, etwa beim Aufsetzen eines Spam-Filters in einem E-Mail-Programm. Verwendet die Bedingung eines Spam-Filters ein *und* (zum Beispiel: die E-Mail stammt von einem unbekannten Absender und die E-Mail hat das Wort „Bitcoin“ im Betreff), dann landet eine Mail nur dann im Spam-Ordner, wenn beide Teilaussagen wahr sind.
