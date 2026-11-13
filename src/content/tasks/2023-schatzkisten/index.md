---
short: 7Wj4
title: Schatzkisten
summary: Drei Touristinnen fotografieren drei leere Schatzkisten. In einer liegt dennoch Gold. Welche ist es?
grades:
  "7-8": easy
gi:
  content: [information-data]
  process: [reasoning]
topics: [logic]
methods: [boolean-logic]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 720
    height: 455
    nodeRadius: 42
    background: ./img/insel.png
    hideNodes: true
    nodes:
      - { id: vulkan, x: 340, y: 138, label: Kiste am Fuß des Vulkans }
      - { id: palme, x: 239, y: 260, label: Kiste unter der Palme }
      - { id: strand, x: 558, y: 328, label: Kiste am Strand }
source:
  type: original
  work: Informatik-Biber 2023
  year: 2023
  page: 52
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2023/Biberheft_2023_web_komplett.pdf
  country: UY
  license: CC BY-SA 4.0
---
Auf einer Insel gibt es drei Schatzkisten: Eine Kiste ist am Fuß des Vulkans, die zweite ist unter einer Palme, und die dritte ist am Strand. Alle Kisten sind leer.

An einem Tag kreuzt der Pirat Biberbart auf, füllt eine der Kisten mit Gold und verschließt sie. Am gleichen Tag sind drei Touristinnen auf der Insel: Anita, Britta und Carla. Jede macht ein Foto: eine, bevor Biberbart Gold in eine Kiste gefüllt hat, die anderen beiden danach.

| Anitas Foto … | Brittas Foto … | Carlas Foto … |
|---|---|---|
| … zeigt die Kiste am Strand. | … zeigt die zwei Kisten unter der Palme und am Strand. | … zeigt die zwei Kisten unter der Palme und am Fuß des Vulkans. |
| ![Anitas Foto: die offene, leere Kiste am Strand](./img/foto-anita.png) | ![Brittas Foto: die offenen, leeren Kisten unter der Palme und am Strand](./img/foto-britta.png) | ![Carlas Foto: die offenen, leeren Kisten unter der Palme und am Fuß des Vulkans](./img/foto-carla.png) |

Auf den Fotos sind alle Kisten leer. Biberbart hatte also Glück, dass keine Touristin sein Gold gefunden hat.

**In welcher Schatzkiste ist das Gold?**

Klicke die Kiste auf der Insel an, in der das Gold ist.
