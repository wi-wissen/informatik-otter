---
short: 6EP1
title: Schuhbänder
summary: Falco beschreibt seine Schnürungen mit einer kleinen Programmiersprache. Welche Schnürung erzeugt das Programm mit Schleifen?
grades:
  "11-13": hard
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming]
methods: [sequence, loop]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, label: A, image: ./img/a.png, alt: "Schnürung A: unten wie im Beispiel, in der Mitte ein augenförmiges Muster, darüber weiter im Zickzack" }
      - { id: b, label: B, image: ./img/b.png, alt: "Schnürung B (ohne augenförmiges Muster in der Mitte)" }
      - { id: c, label: C, image: ./img/c.png, alt: "Schnürung C (ohne augenförmiges Muster in der Mitte)" }
      - { id: d, label: D, image: ./img/d.png, alt: "Schnürung D (ohne augenförmiges Muster in der Mitte)" }
source:
  type: original
  work: Informatik-Biber 2016
  year: 2016
  page: 56
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2016/Biberheft2016-mit-Loesungen.pdf
  country: AT
  license: CC BY-SA 3.0
---
Falco liebt seine Schuhbänder, die zur Hälfte orange und zur Hälfte weiß sind. Er lässt sich immer neue, komplizierte Schnürungen einfallen und findet sich damit sehr cool. Damit er keine Schnürung vergisst, schreibt er auf, wie er sie hergestellt hat. Dazu verwendet er eine Programmiersprache, die genau sagt, wie das Band durch die Ösen laufen soll.

Hier ist eines von Falcos Schnürungs-Programmen (6 Zeilen lang):

```
01  orange: von_unten
02  weiss:  von_unten
03  {
04  orange: hoch wechseln von_unten
05  weiss:  hoch wechseln von_unten
06  }
```

![Ein Schuh, dessen Schnürsenkel in einer regelmäßigen Zickzack-Kreuzung von unten nach oben durch alle Ösen laufen](./img/example.png)

Dieses Programm erzeugt die Schnürung im Bild. Wie bei jeder Schnürung geht es bei den Ösen in der untersten Reihe los, mit weiß auf der linken Seite und orange auf der rechten Seite.

Für die Schnürungs-Programmiersprache hat Falco sich insgesamt folgende Befehle und Strukturen überlegt:

| Befehl | Bedeutung |
|---|---|
| `orange:` | Das Folgende gilt für die orange Hälfte des Schuhbands. |
| `weiss:` | Das Folgende gilt für die weiße Hälfte des Schuhbands. |
| `von_unten` | Das Band wird von unten durch die aktuelle Öse gesteckt. |
| `von_oben` | Das Band wird von oben durch die aktuelle Öse gesteckt. |
| `hoch` | Das Band geht eine Öse nach oben (gleiche Seite, nächste Reihe). |
| `wechseln` | Das Band geht zur Öse auf der anderen Seite, in der gleichen Reihe. |
| `{...}` | Was zwischen den Klammern steht, wird so oft wie möglich wiederholt. |
| `*N {...}` | Was zwischen den Klammern steht, wird genau N-mal wiederholt. |

**Welche Schnürung erzeugt dieses Programm?** (Es ist 12 Zeilen lang.)

```
01  orange: von_unten
02  weiss:  von_unten
03  *2 {
04  orange: hoch wechseln von_unten
05  weiss:  hoch wechseln von_unten
06  }
07  orange: hoch von_oben
08  weiss:  hoch von_oben
09  {
10  orange: hoch wechseln von_unten
11  weiss:  hoch wechseln von_unten
12  }
```
