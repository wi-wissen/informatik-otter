---
short: jZe6
title: IP-Adressen
summary: Vier Computer hängen am selben Switch, aber keiner erreicht einen anderen. Ändere die IP-Adressen so, dass alle miteinander spielen können.
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [systems]
  process: [modelling, reasoning]
topics: [networks]
methods: []
mascot: beaver
interaction:
  format: custom
  props:
    mask: [255, 255, 255, 0]
    computers:
      - { name: Max, ip: [192, 168, 1, 20] }
      - { name: Mia, ip: [192, 186, 1, 21] }
      - { name: Pia, ip: [192, 168, 2, 22] }
      - { name: Tim, ip: [192, 186, 2, 20] }
source:
  type: original
  work: Informatik-Biber 2016
  year: 2016
  page: 34
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2016/Biberheft2016-mit-Loesungen.pdf
  country: DE
  license: CC BY-SA 3.0
---
In einem Netzwerk hat jeder Computer eine eindeutige IP-Adresse. Die besteht aus vier Teilen mit Zahlenwerten zwischen 1 und 254. Ein Beispiel: 192.168.1.25

Auch die Netzmaske besteht aus vier Teilen, in denen meist 255 oder 0 steht. Ein Beispiel: 255.255.0.0. Die Netzmaske trennt die Adressen im Netzwerk in den Netzanteil und den Geräteanteil. Eine 255 bedeutet: Dieser Teil gehört zum Netzanteil. Eine 0 bedeutet: Dieser Teil gehört zum Geräteanteil.

Damit die Geräte in einem Netzwerk kommunizieren können, dürfen ihre Adressen sich nur im Geräteanteil unterscheiden. Der Netzanteil muss immer gleich sein.

Ein Beispiel mit Netzmaske 255.255.0.0: Zwei Geräte mit IP-Adressen 172.16.0.10 und 172.16.0.11 können untereinander kommunizieren. Ein weiteres Gerät mit IP-Adresse 172.31.0.12 kann mit keinem der beiden anderen kommunizieren.

Max, Mia, Pia und Tim wollen ein gemeinsames Multiplayer-Spiel starten. Mithilfe von Netzwerkkabeln verbinden sie ihre Computer mit einem sogenannten Switch. Als Netzmaske wird 255.255.255.0 eingestellt. Doch nachdem sie ihre IP-Adressen gesetzt haben, können keine zwei Computer miteinander kommunizieren. Was ist los?

**Ändere die IP-Adressen der Computer so, dass alle vier Computer untereinander kommunizieren können.** Es gibt viele richtige Möglichkeiten; eine genügt.
