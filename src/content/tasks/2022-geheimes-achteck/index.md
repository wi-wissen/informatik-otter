---
short: 5gbR
title: Geheimes Achteck
summary: Mit einer achteckigen Scheibe und einem Zeiger werden Wörter in Zahlenpaare verschlüsselt – welches Wort steckt dahinter?
grades:
  "5-6": hard
  "7-8": medium
  "9-10": easy
gi:
  content: [information-data]
  process: [reasoning, modelling]
topics: [cryptography, encoding]
methods: [substitution-cipher]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 5
    options:
      - { id: a, label: HANS }
      - { id: b, label: HAUS }
      - { id: c, label: HALLO }
      - { id: d, label: HALS }
      - { id: e, label: HAUT }
source:
  type: original
  work: Informatik-Biber 2022
  year: 2022
  page: 29
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2022/Biberheft_2022_mit_Loesungen_web.pdf
  country: SK
  license: CC BY-SA 4.0
---
Mit dieser achteckigen Scheibe werden Worte verschlüsselt. Der Zeiger auf der Scheibe kann auf acht verschiedenen Positionen stehen. An jeder Position ist eine Folge von Buchstaben.

![Achteckige Scheibe mit Zeiger. Die Buchstabenfolgen stehen im Uhrzeigersinn, beginnend oben rechts beim Zeiger: ABC, DEF, GHI, JKL, MNO, PQRS, TUV, WXYZ](./img/octagon.png)

Am Anfang steht der Zeiger immer bei der Folge ABC. Dann wird jeder Buchstabe des Wortes einzeln verschlüsselt, und zwar mit zwei Ziffern:

- Die erste Ziffer gibt an, um wie viele Positionen der Zeiger im Uhrzeigersinn weiter gedreht wird, damit er bei der Folge mit diesem Buchstaben steht.
- Die zweite Ziffer gibt an, der wievielte Buchstabe in der Folge verschlüsselt wird.

Ein Beispiel: Das Wort PAAR wird so verschlüsselt: 51 31 81 53

**Welches Wort wird so verschlüsselt: 22 61 62 74 ?**
