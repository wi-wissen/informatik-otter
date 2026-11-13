---
short: g3GA
title: Scotts Armbänder
summary: Aus nummerierten Perlen soll Scott ein möglichst langes Armband mit aufsteigenden Nummern fädeln. Welche Perlen nimmt er?
grades:
  "7-8": hard
  "9-10": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization]
methods: [dynamic-programming]
mascot: beaver
interaction:
  format: custom
  props:
    beads: [5, 1, 3, 2, 4, 8, 6, 7, 9]
source:
  type: original
  work: Informatik-Biber 2024
  year: 2024
  page: 59
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2024/Biberheft_2024_web_komplett.pdf
  country: TW
  license: CC BY-SA 4.0
---
Scott hat Perlen mit Nummern und macht Armbänder daraus. Die Perlen kommen nacheinander aus einem Glasröhrchen. Für jede Perle entscheidet Scott: Entweder verwendet er die Perle fürs Armband und fädelt sie auf die Schnur, oder er legt sie weg.

Scott kann eine Perle nur dann verwenden, wenn

- die Schnur leer ist oder
- die Nummer der Perle größer ist als die Nummer der letzten Perle auf der Schnur.

In diesem Beispiel ist zunächst die **2** die letzte Perle auf der Schnur (im Röhrchen folgen die Perlen 5, 3, 4, 7):

![Oben: Auf der Schnur liegen die Perlen 1, 2; im Röhrchen die Perlen 5, 3, 4, 7. Unten links: Wird die 5 verwendet, entsteht das Armband 1, 2, 5, 7. Unten rechts: Wird die 5 weggelegt, entsteht das Armband 1, 2, 3, 4, 7](./img/example.png)

Die nächste Perle (die **5**) kann Scott verwenden, aber auch weglegen. Wenn er

- die 5 verwendet, kann er ein Armband mit vier Perlen machen: 1 2 5 7
- sie weglegt, kann er ein Armband mit fünf Perlen machen: 1 2 3 4 7

Scott bekommt ein neues Röhrchen mit Perlen. Er will daraus ein Armband mit möglichst vielen Perlen machen. Im Röhrchen liegen nacheinander die Perlen **5, 1, 3, 2, 4, 8, 6, 7, 9**.

**Wie kann Scott das schaffen?**

Entscheide für jede Perle, ob sie verwendet oder weggelegt wird. Die Perlen kommen nacheinander aus dem Röhrchen.
