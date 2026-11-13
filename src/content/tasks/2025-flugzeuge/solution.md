---
answer: { t1045: green, t1055: red, t1100: yellow, t1111: purple }
---
![Der vollständige Startplan](./img/solution.png)

1. Als erstes (um 10:45 Uhr) startet das hellgrüne Flugzeug; es steht schon auf der Startbahn.
2. Als zweites (um 10:52 Uhr) startet das blau gestreifte Flugzeug.
3. Als drittes (um 10:55 Uhr) startet das rote Flugzeug: Es steht vor dem grün gestreiften Flugzeug und dem gelben Flugzeug. Damit das grün gestreifte als nächstes starten kann, wie im Plan angegeben, muss vorher das rote Flugzeug gestartet sein.
4. Als viertes (um 10:59 Uhr) startet das grün gestreifte Flugzeug und danach das gelbe.
5. Als fünftes (um 11:00 Uhr) startet das gelbe Flugzeug: Es steht vor dem pink-blauen Flugzeug und dem blau gestreiften. Damit das pink-blaue als nächstes starten kann, wie im Plan angegeben, muss vorher das gelbe Flugzeug gestartet sein.
6. Als sechstes (um 11:10 Uhr) startet das pink-blaue Flugzeug.
7. Als siebtes und letztes (um 11:11 Uhr) startet das violette Flugzeug. Alle anderen Flugzeuge sind schon gestartet.

## Das ist Informatik!

Die Startreihenfolge der Flugzeuge hängt auch von der Reihenfolge beim Warten ab. Einige Flugzeuge können erst dann starten, wenn andere, die beim Warten vor ihnen stehen, bereits gestartet sind. An einem echten Flughafen müssen bei der Planung der Startreihenfolge noch viele andere Bedingungen berücksichtigt werden, zum Beispiel Verspätungen, technische Probleme oder Wetteränderungen. Für die Planung werden meist Computerprogramme verwendet, die auf Änderungen bei den Bedingungen schnell reagieren und dennoch gute Pläne erstellen können.

Die Erstellung von Zeitplänen, wie dem Startplan in dieser Biberaufgabe, fällt in der Informatik in den Bereich *Scheduling*. Scheduling kann kompliziert werden, zum Beispiel wenn nur eine Ressource (z. B. eine Startbahn) zur Verfügung steht, wenn bestimmte Ereignisse voneinander abhängig sind oder wenn eine Reihenfolge eingehalten werden muss, um Probleme zu vermeiden.

In der Informatik gilt Scheduling als besonders schwieriges Problem. Die Herausforderung besteht darin, für jede denkbare Situation einen optimalen Plan zu berechnen. Wenn viele Parameter und Bedingungen berücksichtigt werden müssen, kann selbst ein sehr schneller Computer dafür enorm viel Zeit benötigen. Informatik-Fachleute sagen: Scheduling ist *NP-schwer*. Das bedeutet: Es ist zwar einfach zu überprüfen, ob ein gegebener Plan korrekt ist, aber extrem schwierig, den besten Plan überhaupt zu finden. Das ist wie bei einem besonders schwierigen Rätsel: Die Lösung zu prüfen ist leicht, sie zu finden, kann dagegen sehr aufwändig sein.
