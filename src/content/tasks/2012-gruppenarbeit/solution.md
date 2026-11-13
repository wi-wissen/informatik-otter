---
answer: d
---
Antwort D ist richtig.

Die Skizzen stellen Abhängigkeitsgraphen für die Aufgaben der vier Gruppen dar. Die Gruppenmitglieder werden blockiert, wenn ein Zyklus (ein Rundgang) vorhanden ist. Dann kann keiner im Zyklus mit den Aufgaben beginnen, weil jeder auf den Vorgänger wartet. Nur der Graph D enthält einen solchen Zyklus.

## Das ist Informatik!

Die meisten Computersysteme erledigen verschiedene Aufgaben scheinbar nebeneinander her. Ein Laptop kann zugleich Musik abspielen, E-Mails abrufen und die Festplatte auf Viren prüfen. Auf einem Smartphone kann man ein Spiel spielen und erhält trotzdem zwischendurch seine SMS und Telefonanrufe. Manche solcher „Prozesse“ können aber voneinander abhängen. Wenn ein Dokument geöffnet werden soll, muss der Editor-Prozess warten, bis der Betriebssystem-Prozess die entsprechenden Daten von der Festplatte kopiert hat. Was passiert aber, wenn zugleich ein anderer Prozess auf die Festplatte zugreifen will? Warten beide Prozesse höflich, bis der andere seine Daten hat?

Die Informatik hat sehr intensiv erforscht, wie solche Deadlocks (Verklemmungen) vermieden werden können. Wer programmiert, muss sicherstellen, dass niemals zwei oder mehr seiner Prozesse aufeinander warten müssen.
