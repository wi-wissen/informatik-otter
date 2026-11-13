---
short: 53Jt
title: Streng geheim
summary: Drei Freunde finden mit Münzwürfen heraus, ob einer von ihnen das Eis bezahlt hat – ohne zu verraten, wer. Was erfährt der lauschende Nosy?
grades:
  "11-13": hard
gi:
  content: [society]
  process: [reasoning, modelling]
topics: [security, cryptography]
methods: [xor]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: Keiner der drei Freunde hat das Eis bezahlt. }
      - { id: b, label: Einer der drei Freunde hat das Eis bezahlt, aber Nosy weiß nicht wer. }
      - { id: c, label: Einer der drei Freunde hat das Eis bezahlt, und Nosy weiß genau wer. }
      - { id: d, label: Nosy weiß nicht, ob einer der drei Freunde das Eis bezahlt hat. }
source:
  type: original
  work: Informatik-Biber 2018
  year: 2018
  page: 56
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2018/Biberheft2018-mit-Loesungen.pdf
  country: IT
  license: CC BY-SA 4.0
---
Die drei Freunde Xaver, Yvonne und Zoe besuchen die berühmte Eisdiele „Al Goritmo“. Als sie fertig sind, sagt der Kellner: „Die Rechnung ist schon bezahlt.“ Wer hat das Eis bezahlt: Einer von ihnen, oder jemand anderes? Das wollen sie herausfinden, ohne sich direkt zu fragen – und zwar so:

Zuerst werfen sie paarweise je die gleiche Münze: Xaver und Yvonne, Xaver und Zoe sowie Yvonne und Zoe. Anschließend kennt jeder zwei Münzwurf-Ergebnisse und sagt den anderen, ob diese gleich oder verschieden ausgefallen sind. Aber Achtung:

- Wenn jemand von ihnen das Eis bezahlt hat, sagt sie oder er die Unwahrheit.
- Wer nicht bezahlt hat, sagt die Wahrheit.

Ein Beispiel: Wir nehmen an, Zoe habe das Eis bezahlt – streng geheim. Die Biber werfen Münzen, das Bild zeigt die Ergebnisse. Alle sagen „verschieden“.

![Drei Biber im Dreieck, zwischen je zwei liegt eine Münze (zwei zeigen einen Biber, eine ein Blatt); alle drei sagen „verschieden“](./img/example.png)

In der Eisdiele wird nun die Münze geworfen. Biber Nosy am Nachbartisch hört nur, was die Freunde nach den Münzwürfen sagen: Xaver sagt „gleich“, Yvonne sagt „gleich“ und Zoe sagt „verschieden“.

![Die drei Freunde mit verdeckten Münzen; Xaver und Yvonne sagen „gleich“, Zoe sagt „verschieden“](./img/nosy.png)

**Was weiß der schlaue Nosy jetzt?**
