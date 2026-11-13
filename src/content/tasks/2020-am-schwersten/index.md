---
short: 1nBb
title: Am schwersten
summary: Fünf Kisten wurden paarweise gewogen. Welche ist die schwerste von allen?
grades:
  "3-4": hard
  "5-6": medium
  "7-8": easy
gi:
  content: [algorithms]
  process: [reasoning, structuring]
topics: [sorting, graphs]
methods: [topological-sort]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 5
    options:
      - { id: heart, image: ./img/heart.png, alt: Kiste mit dem Herz }
      - { id: star, image: ./img/star.png, alt: Kiste mit dem Stern }
      - { id: pentagon, image: ./img/pentagon.png, alt: Kiste mit dem Fünfeck }
      - { id: circle, image: ./img/circle.png, alt: Kiste mit dem Kreis }
      - { id: square, image: ./img/square.png, alt: Kiste mit dem Quadrat }
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 7
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  license: CC BY-SA 4.0
---
Fünf Kisten sind mit fünf verschiedenen Bildern markiert: Herz, Stern, Fünfeck, Kreis und Quadrat.

Mit einer Waage werden jeweils zwei Kisten verglichen. Zum Beispiel ist die Kiste mit dem Herz schwerer als die Kiste mit dem Kreis.

Insgesamt wird fünf Mal verglichen:

![Fünf Waagen, auf denen je zwei Kisten verglichen werden](./img/weighings.png)

**Welche Kiste ist am schwersten?**
