---
short: L5f4
title: RAID
summary: Mehrere Festplatten werden zu einem RAID gebündelt. Bei welcher Anordnung gibt es auch bei zwei defekten Platten keinen Datenverlust?
grades:
  "11-13": hard
gi:
  content: [systems]
  process: [modelling, reasoning]
topics: [computer-architecture, data-structures]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, image: ./img/a.png, alt: "RAID A: RAID 0 mit links einem RAID 1 und rechts einem RAID 0, darunter je zwei Festplatten" }
      - { id: b, image: ./img/b.png, alt: "RAID B: RAID 0 mit zwei RAID 1, darunter je zwei Festplatten" }
      - { id: c, image: ./img/c.png, alt: "RAID C: RAID 1 mit links einem RAID 1 und rechts einem RAID 0, darunter je zwei Festplatten" }
      - { id: d, image: ./img/d.png, alt: "RAID D: RAID 1 mit zwei RAID 0, darunter je zwei Festplatten" }
source:
  type: original
  work: Informatik-Biber 2013
  year: 2013
  page: 38
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2013/Biberheft2013-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
RAID ist eine Technologie, die mehrere Festplatten zu einem gemeinsam organisierten Datenspeicher bündelt. Es gibt unter anderem diese zwei RAID-Typen:

**RAID 0:** Die Daten werden nur auf einer im RAID angeschlossenen Festplatte gespeichert. Die Inhalte der Festplatten sind alle verschieden. Deshalb ist die Datensicherheit nicht höher als bei einer einzelnen Festplatte. Dieses Bild zeigt ein RAID 0 mit zwei Festplatten:

![RAID 0 mit zwei Festplatten: Festplatte A und Festplatte B mit verschiedenen Inhalten](./img/raid0.png)

**RAID 1:** Die Daten werden auf mehreren Festplatten so abgespeichert, dass die Inhalte dieser Festplatten immer gleich sind. Die Speicherkapazität ist dann zwar nicht so hoch. Dafür ist die Datensicherheit umso höher, je mehr Kopien im RAID gespeichert sind. Dieses Bild zeigt ein RAID 1 mit zwei Festplatten:

![RAID 1 mit zwei Festplatten: zweimal der gleiche Inhalt A](./img/raid1.png)

**Bei welchem dieser RAIDs gibt es KEINEN Datenverlust, auch wenn zwei beliebige seiner Festplatten kaputt gehen?**
