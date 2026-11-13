---
short: 2A9G
title: RAID
summary: "Mehrere Festplatten arbeiten zusammen. Welcher RAID-Verbund überlebt den Ausfall von zwei beliebigen Platten?"
grades:
  "11-13": hard
gi:
  content: [systems]
  process: [reasoning, modelling]
topics: [computer-architecture, error-detection]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, image: ./img/a.png, alt: "RAID 0 aus links einem RAID 1 mit zwei Festplatten und rechts einem RAID 0 mit zwei Festplatten" }
      - { id: b, image: ./img/b.png, alt: "RAID 0 aus zwei RAID 1, jedes mit zwei Festplatten" }
      - { id: c, image: ./img/c.png, alt: "RAID 1 aus links einem RAID 1 mit zwei Festplatten und rechts einem RAID 0 mit zwei Festplatten" }
      - { id: d, image: ./img/d.png, alt: "RAID 1 aus zwei RAID 0, jedes mit zwei Festplatten" }
source:
  type: original
  work: Informatik-Biber 2015
  year: 2015
  page: 45
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2015/Biberheft2015-mit-Loesungen.pdf
  country: LV
  license: CC BY-SA 3.0
---
RAID ist eine Technologie, die mehrere Festplatten zu einem gemeinsam organisierten Datenspeicher bündelt. Es gibt unter anderem diese zwei RAID-Typen:

**RAID 0:** Die Daten werden nur auf einer im RAID angeschlossenen Festplatte gespeichert. Die Inhalte der Festplatten sind alle verschieden. Deshalb ist die Datensicherheit nicht höher als bei einer einzelnen Festplatte. Dieses Bild zeigt einen RAID 0 mit zwei Festplatten:

![RAID 0 mit zwei Festplatten, auf denen die verschiedenen Daten A und B liegen](./img/raid0.png)

**RAID 1:** Die Daten werden auf mehreren Festplatten so abgespeichert, dass die Inhalte dieser Festplatten immer gleich sind. Die Speicherkapazität ist dann zwar nicht so hoch. Dafür ist die Datensicherheit umso höher, je mehr Kopien im RAID gespeichert sind. Dieses Bild zeigt einen RAID 1 mit zwei Festplatten:

![RAID 1 mit zwei Festplatten, auf denen beide die gleichen Daten A liegen](./img/raid1.png)

**Bei welchem dieser RAIDs gibt es KEINEN Datenverlust, auch wenn zwei beliebige seiner Festplatten kaputt gehen?**
