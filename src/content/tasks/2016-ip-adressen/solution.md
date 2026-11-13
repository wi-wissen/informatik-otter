---
answer: ok
---
Die Netzmaske 255.255.255.0 gibt vor, dass die ersten drei Teile der vier Adressen identisch sein müssen. Im vierten Teil müssen sich die Adressen aber alle unterscheiden, und alle Werte müssen im Bereich von 1 bis 254 liegen. Eine richtige Möglichkeit ist also:

| Computer | IP-Adresse |
|---|---|
| Max | 192.168.1.20 |
| Mia | 192.168.1.21 |
| Pia | 192.168.1.22 |
| Tim | 192.168.1.30 |

## Das ist Informatik!

Das „Internet Protocol“ IP wurde 1974 zum ersten Mal beschrieben. Mit Hilfe von IP sollten Computer flexibel und notfalls auf unterschiedlichen Wegen Daten untereinander austauschen können. Zusammen mit TCP (Transmission Control Protocol) bildet IP die Grundlage des Internet. Damit ein Gerät mit anderen im Internet vernetzten Geräten kommunizieren kann, muss sein Betriebssystem TCP/IP beherrschen – und das Gerät muss eine IP-Adresse haben.

Die hier vorgestellte Struktur von IP-Adressen entspricht der aktuell noch überwiegend genutzten Version des Internet Protocol, IPv4. IPv4-Adressen bestehen also aus 4 Bytes. In jedem Byte sind 254 verschiedene Werte erlaubt. Deshalb kann es höchstens 254·254·254·254 = 4.162.314.256, also gut vier Milliarden unterschiedliche IPv4-Adressen geben. Längst aber sind viel mehr Geräte mit dem Internet verbunden. Wie gut, dass Geräte in einem lokalen Netzwerk (z. B. in der Schule oder zu Hause) hinter einem so genannten Router „versteckt“ werden können. Nur der Router muss eine universell eindeutige Adresse haben; die Adressen der anderen Geräte müssen nur im lokalen Netz eindeutig sein.

Trotzdem gibt es mittlerweile zu wenige IPv4-Adressen. In der Nachfolgeversion IPv6 dieses Internet Protocols wird eine neue Adress-Struktur festgelegt, die sehr viel mehr unterschiedliche Adressen ermöglicht. Die Informatik hat dafür gesorgt, dass beide IP-Versionen im Internet parallel verwendet werden können. Es ist auch deshalb nicht abzusehen, dass IPv4-Adressen irgendwann verschwinden.
