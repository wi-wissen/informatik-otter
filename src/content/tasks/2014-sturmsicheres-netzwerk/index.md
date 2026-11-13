---
short: b2SX
title: Sturmsicheres Netzwerk
summary: "Handymasten auf einer Sturminsel: Wie müssen sie stehen, damit nach dem Ausfall eines Masts alle anderen noch verbunden sind?"
grades:
  "7-8": hard
  "9-10": hard
  "11-13": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, networks]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, image: ./img/a.png, alt: "Plan A: Handymasten mit Sendegebieten auf einer Insel; ein Mast in der Mitte verbindet die linke mit der rechten Gruppe" }
      - { id: b, image: ./img/b.png, alt: "Plan B: Handymasten mit Sendegebieten, die einen Ring um die ganze Insel bilden" }
      - { id: c, image: ./img/c.png, alt: "Plan C: Handymasten mit Sendegebieten; ein großer Mast rechts verbindet die rechte Gruppe mit dem Rest" }
      - { id: d, image: ./img/d.png, alt: "Plan D: Handymasten mit Sendegebieten; ein Mast ganz links hält eine Gruppe mit dem Rest verbunden" }
source:
  type: original
  work: Informatik-Biber 2014
  year: 2014
  page: 46
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2014/Biberheft2014-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Auf einer sturmumbrausten Insel sollen Handymasten aufgestellt werden. Jeder Handymast deckt ein kreisförmiges Sendegebiet ab.

![Ein Handymast (schwarzer Punkt) mit seinem kreisförmigen Sendegebiet](./img/legend.png)

Wenn sich ihre Sendegebiete überlappen, dann sind zwei Handymasten direkt über Funk verbunden. Ein Handymast kann mit einem anderen auch indirekt verbunden sein; über eine Kette direkt miteinander verbundener Handymasten.

Wegen des ständigen Sturmes sollen die Handymasten so aufgestellt werden, dass der Ausfall eines einzelnen Handymastes verkraftet werden kann. Fällt ein Handymast aus, dann sollen alle anderen trotzdem noch immer verbunden sein.

**Wie müssen die Handymasten aufgestellt werden?**
