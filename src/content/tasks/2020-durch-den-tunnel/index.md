---
short: 2cEk
title: Durch den Tunnel
summary: Vier Wanderer müssen mit einer Lampe, die nur 60 Minuten hält, durch einen engen Tunnel. Wer geht wann?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization]
methods: [scheduling]
mascot: beaver
interaction:
  format: custom
  props:
    background: ./img/board.png
    width: 895
    height: 760
    reusable: true
    trayLabel: Personen
    zones:
      - { id: z1, label: "Passage 1 (Hin)", x: 302, y: 5, w: 590, h: 142, capacity: 2 }
      - { id: z2, label: "Passage 2 (Zurück)", x: 302, y: 157, w: 590, h: 142, capacity: 2 }
      - { id: z3, label: "Passage 3 (Hin)", x: 302, y: 309, w: 590, h: 142, capacity: 2 }
      - { id: z4, label: "Passage 4 (Zurück)", x: 302, y: 461, w: 590, h: 142, capacity: 2 }
      - { id: z5, label: "Passage 5 (Hin)", x: 302, y: 613, w: 590, h: 142, capacity: 2 }
    items:
      - { id: anna, image: ./img/anna.png, alt: Anna (10 min) }
      - { id: benno, image: ./img/benno.png, alt: Benno (5 min) }
      - { id: mutter, image: ./img/mutter.png, alt: Mutter (20 min) }
      - { id: vater, image: ./img/vater.png, alt: Vater (25 min) }
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 25
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: CH
  license: CC BY-SA 4.0
---
Anna und Benno machen mit ihren Eltern eine Wanderung. Auf ihrer Strecke liegt ein Tunnel. Aus Erfahrung wissen sie, dass jeder von ihnen unterschiedlich viel Zeit für die Tunnelpassage benötigt: Anna benötigt 10 Minuten, Benno 5 Minuten, die Mutter 20 Minuten und der Vater 25 Minuten.

Den dunklen und engen Tunnel kann man nur alleine oder zu zweit passieren. Sie müssen also mehrere Passagen machen. Zu zweit benötigt man so viel Zeit wie die langsamere der beiden Personen. Im Tunnel muss man auf jeden Fall eine Lampe benutzen.

Als sie an den Eingang des Tunnels kommen, stellen sie fest: Der Akku ihrer einzigen Lampe reicht nur noch für 60 Minuten. Können sie innerhalb dieser 60 Minuten alle durch den Tunnel kommen?

Anna hat einen Plan: „Ja, können wir, und zwar mit fünf Passagen!“

**Ziehe die Namen so in die passenden Felder, dass Annas Plan umgesetzt wird.**
