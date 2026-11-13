---
answers:
  - { anna: pear, bernard: apple, christine: orange, daniel: currant }
  - { anna: pear, bernard: orange, christine: apple, daniel: currant }
---
Mit dieser Bestellung können die Freunde insgesamt 14 Herzen sammeln: Anna bekommt Birnensaft, Bernard Apfelsaft, Christine Orangensaft und Daniel Johannisbeersaft. (Ebenso gut: Bernard Orangensaft und Christine Apfelsaft.)

Um auf diese Lösung zu kommen, kann man von Daniel ausgehen. Für ihn bestellt man den Johannisbeersaft, den er mit vier Herzen mag, alle anderen aber nur mit einem Herz mögen. Wenn man dann für Bernard oder Christine den Apfelsaft bestellt, kann man für die beiden übrigen (Anna und Christine bzw. Anna und Bernard) jeweils ihren zweitliebsten Saft bestellen.

Drei der vier Freunde mögen am liebsten den Apfelsaft. Da aber nur ein Glas davon vorhanden ist, müssen zwei sich mit ihrem zweitliebsten Saft zufrieden geben. Es kann also keine Bestellung mit mehr als 3 + 3 + 4 + 4 = 14 Herzen geben.

Es gibt auch nur diese beiden Bestellmöglichkeiten mit 14 Herzen, da alle anderen Möglichkeiten von mindestens einem der Freunde verlangen, dass er seinen drittliebsten Saft mit 2 Herzen trinkt, so dass maximal 2 + 3 + 4 + 4 = 13 Herzen gesammelt werden können.

## Das ist Informatik!

In dieser Biberaufgabe geht es darum, die Anzahl der Herzen und damit die Zufriedenheit der vier Freunde zu optimieren. Optimierung ist ein Forschungsschwerpunkt der Informatik und auch der Mathematik. Optimierung wird überall gebraucht.

Optimierungs-Algorithmen rechnen oft sehr lange. Bei unseren vier wählerischen Freunden müsste ein nicht spezieller Algorithmus schon ca. 65000 mögliche und unmögliche Fälle der Reihe nach durchprobieren. Durch geschicktes Überlegen kann man diesen Aufwand zwar drastisch reduzieren. Es gibt ja nur 24 mögliche Lösungen, für welche die Anzahl der Herzen ausgerechnet werden muss. Doch solches Überlegen erfordert Optimierungs-Spezialisten.

Das Problem dieser Biberaufgabe ist zum Beispiel eine Sonderform des Matching-Problems. Jeder der vier Personen soll genau ein Getränk zugewiesen werden und es gibt von jedem der vier Getränke nur genau eines. Zudem soll die gemeinsame Zufriedenheit möglichst hoch sein. Optimierungs-Probleme mit dieser Struktur kommen im alltäglichen Leben oft vor. Achte mal darauf!
