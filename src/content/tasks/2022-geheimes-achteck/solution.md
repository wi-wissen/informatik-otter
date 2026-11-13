---
answer: b
---
Antwort B (HAUS) ist richtig.

Bei der Verschlüsselung entsteht 22, wenn der Zeiger von ABC um zwei Positionen zu GHI weiter gedreht wird (erste Ziffer 2), und dass der zweite Buchstabe in dieser Folge verschlüsselt wird (zweite Ziffer 2), also: H

61 entsteht, wenn der Zeiger nun von GHI zu ABC gedreht wird (erste Ziffer 6) und davon der erste Buchstabe verschlüsselt wird (zweite Ziffer 1): A

62 entsteht, wenn der Zeiger nun von ABC zu TUV gedreht wird (erste Ziffer 6) und davon der zweite Buchstabe verschlüsselt wird (zweite Ziffer 2): U

74 entsteht, wenn der Zeiger nun von TUV zu PQRS gedreht wird (erste Ziffer 7) und davon der vierte Buchstabe verschlüsselt wird (zweite Ziffer 4): S

Das Wort HAUS wird also so verschlüsselt: 22 61 62 74

Man kann die richtige Antwort auch schneller bestimmen: Zunächst kann man Antwort C (HALLO) ausschließen, da nur vier Buchstaben verschlüsselt wurden. Nun kann man die Verschlüsselung des letzten Buchstabens betrachten: (a) Weil sie eine 4 als zweite Ziffer hat, kann es sich nur um S oder Z handeln; nur S kommt als letzter Buchstabe vor, nämlich in den Antworten A, B und D. (b) Weil sie eine 7 als erste Ziffer hat, muss der vorletzte Buchstabe von der Position sieben Drehungen gegen den Uhrzeigersinn stammen, also aus der Folge TUV. Von den Antworten A, B und D gilt das nur für Antwort B: HAUS

## Das ist Informatik!

Seit Tausenden von Jahren versuchen Menschen, Informationen für die Übermittlung an andere so zu verschlüsseln, dass nur die beabsichtigten Empfänger sie entschlüsseln können. Was mit Pergamentstreifen anfing, die um Stäbe (Skytale) gewickelt wurden, entwickelte sich über Substitutionsverfahren wie die Caesar-Verschlüsselung (monoalphabetische Substitution) und die Vigenère-Verschlüsselung (polyalphabetische Substitution) zu modernen Verfahren der Public-Key-Kryptografie, wie etwa dem RSA-Verfahren.

Das Verschlüsselungsverfahren aus dieser Biberaufgabe ist ein polyalphabetisches Substitutionsverfahren: Zum einen werden die Zeichen des Klartextes durch andere Zeichen ersetzt (substituiert). Dasselbe Zeichen kann aber, wenn es mehrfach auftritt, durch unterschiedliche Zeichen ersetzt werden. Zum Beispiel wird der Buchstabe A beim ersten Auftreten im Klartext PAAR durch 31, beim zweiten Auftreten aber durch 81 ersetzt.

Das „Geheime Achteck“ ist aber nicht sonderlich geheim, denn die damit erzeugten Geheimtexte sind leicht zu entschlüsseln – insbesondere, weil der Schlüssel, nämlich die Anordnung der Buchstaben auf dem Achteck, nicht variiert werden kann. Nun kann man noch argumentieren, dass das Geheime nicht der Schlüssel sondern das Verschlüsselungsverfahren ist. Aber bis heute ist diese Maxime von Auguste Kerckhoffs (1835–1903) allgemein anerkannt: Die Sicherheit eines Verschlüsselungsverfahrens darf nicht auf seiner Geheimhaltung beruhen.
