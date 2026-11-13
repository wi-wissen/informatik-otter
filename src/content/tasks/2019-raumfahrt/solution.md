---
answer: b
---
**Antwort B** ist richtig.

Nur mit Reiseplan B kommt Tine nicht auf der Erde an. Mit diesem Plan fliegt Tine mit der Rakete zum Jupiter, von dort mit dem Raumschiff zurück zum Neptun und dann noch einmal mit Rakete und Raumschiff über Jupiter zurück zum Neptun.

Mit allen anderen Reiseplänen kommt Tine auf der Erde an:

- Mit Reiseplan A fliegt Tine mit dem Raumschiff zum Saturn, weiter mit dem Raumschiff zum Uranus und von dort mit der Rakete zur Erde.
- Mit Reiseplan C fliegt Tine mit der Rakete zum Jupiter, dann mit dem Raumschiff zurück zum Neptun sowie weiter zu Saturn und Uranus und schließlich wieder mit der Rakete zur Erde.
- Mit Reiseplan D fliegt Tine mit der Rakete zum Jupiter, wieder mit der Rakete zum Merkur und schließlich mit dem Raumschiff zur Erde.

## Das ist Informatik!

Der große Verbindungsplan gibt für jeden Planeten eindeutige Flugziele für Rakete und Raumschiff an. Es ist also immer klar, wohin es vom aktuellen Planeten aus weitergeht, wenn Rakete bzw. Raumschiff als Nächstes auf dem Reiseplan stehen. Sind Start und Ziel bekannt (wie Neptun und Erde in dieser Biberaufgabe), kann mit Hilfe des Verbindungsplans immer entschieden werden, ob ein Reiseplan vom Start zum Ziel führt.

Ein solches Entscheidungsmodell mit Eingabezeichen (hier: Rakete und Raumschiff), Zuständen (die Planeten), eindeutigen Zustandsübergängen (der Verbindungsplan) sowie einem Startzustand (Neptun) und einem oder mehreren Endzuständen (hier nur einer: die Erde) ist in der Informatik als „deterministischer endlicher Automat“ (kurz: DEA) bekannt. Ein DEA kann zum Beispiel verwendet werden, um das Verhalten programmierter Maschinen wie etwa Geld- oder Fahrkartenautomaten oder die Verarbeitung von Eingaben durch ein Computerprogramm zu beschreiben. Außerdem kann man mit DEAs oder den damit gleichwertigen regulären Ausdrücken Vorgaben für Zeichenfolgen beschreiben, z. B. das Format einer E-Mail-Adresse.

Entscheidungsprobleme, die mit DEAs beschrieben werden können – wie also die Entscheidung, ob eine Zeichenfolge eine gültige E-Mail-Adresse ist – sind einfach. Jede einzelne Entscheidung kann in sehr kurzer Zeit getroffen werden; die Dauer hängt nur von der Länge der Eingabe ab.
