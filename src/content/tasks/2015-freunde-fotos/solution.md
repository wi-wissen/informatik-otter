---
answer: b
---
Antwort B ist richtig:

Jedes Ferienfoto ist auf den Seiten der Freunde zu sehen. Deshalb können es die Freunde selbst und außerdem deren Freunde sehen.

Um den Biber zu finden, dessen Foto am häufigsten zu sehen ist, muss für jeden Biber X die Anzahl der Freunde und die Anzahl der Freunde der Freunde ermittelt werden. Das entspricht der Anzahl der Biber, die im Bild von X aus über maximal zwei Linien erreicht werden können. Dabei darf jeder Biber nur einmal gezählt werden, und X selbst zählt nicht mit.

Die Tabelle zeigt die Namen der Biber, welche ein Bild von sich posten, deren Freunde und wiederum deren Freunde. Gila hat zwar am meisten Freunde, aber die sind fast alle nur untereinander befreundet. Chio hingegen kann auch andere Biber erreichen.

| Biber | Freunde | Freunde der Freunde (noch nicht zuvor genannte) | Anzahl erreichter Biber insgesamt |
|---|---|---|---|
| Ari | Betty, Chio | Ehab, Gila | 4 |
| Betty | Ari | Chio | 2 |
| Chio | Ari, Ehab, Gila | Betty, Diana, Fred | 6 |
| Diana | Ehab, Gila | Chio, Fred | 4 |
| Ehab | Chio, Diana, Gila | Ari, Fred | 5 |
| Fred | Gila | Chio, Diana, Ehab | 4 |
| Gila | Chio, Diana, Ehab, Fred | Ari | 5 |

## Das ist Informatik!

Viele der im Internet verbreiteten sozialen Netzwerke verwenden ähnliche oder kompliziertere Modelle so genannter „Freundschaft“ wie in dieser Biberaufgabe. Dabei ist es möglich, dass in gemeinsamen Datenbanken abgespeicherte (shared) Bilder oder auf Teilnehmerseiten abgelegte (posted) Kommentare auch von Personen gesehen, gelesen und kopiert werden können, die nicht zu den eigenen Netzwerk-Freunden gehören.

Soziale Netzwerke haben im Internet mit ihren Hunderten von Millionen Teilnehmern innerhalb weniger Jahren eine enorme Bedeutung erlangt – alle wollen dabei sein und bloß nichts verpassen. Die durch die Teilnehmer an kommerziellen Plattformen wie Facebook, Google+, Instagram, Twitter, YouTube usw. gebildeten Netzwerke dienen aber nicht nur der kostenlosen privaten Kommunikation untereinander.

Zum Beispiel bezahlen Unternehmen hohe Summen, um die Teilnehmerdaten untersuchen zu dürfen und so Genaueres über die Interessen, Meinungen, Finanzen und Gewohnheiten potenzieller Kunden oder Mitarbeiter zu erfahren. Die Informatik klärt über die dabei bestehenden Risiken für die Informationelle Selbstbestimmung der Teilnehmer auf (https://de.wikipedia.org/wiki/Informationelle_Selbstbestimmung).

Die Teilnehmerdaten der super-großen sozialen Netzwerke lassen sich nur mit Hilfe von sehr leistungsfähigen Computerclustern durchforsten, vor allem wenn die Analyse-Ergebnisse einigermaßen tagesaktuell sein sollten. Die Informatik stellt dazu unter Begriffen wie „Big Data“ oder „Data Mining“ spezialisierte, auf der Graphentheorie und auf Statistikmethoden basierende Algorithmen bereit.
