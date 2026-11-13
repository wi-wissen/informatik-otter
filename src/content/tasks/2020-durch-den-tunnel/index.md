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
  format: match
  props:
    left:
      - { id: p1a, label: "Passage 1 (Hin), Person 1" }
      - { id: p1b, label: "Passage 1 (Hin), Person 2" }
      - { id: p2, label: "Passage 2 (Zurück)" }
      - { id: p3a, label: "Passage 3 (Hin), Person 1" }
      - { id: p3b, label: "Passage 3 (Hin), Person 2" }
      - { id: p4, label: "Passage 4 (Zurück)" }
      - { id: p5a, label: "Passage 5 (Hin), Person 1" }
      - { id: p5b, label: "Passage 5 (Hin), Person 2" }
    right:
      - { id: a, label: "Anna (10 min)" }
      - { id: b, label: "Benno (5 min)" }
      - { id: m, label: "Mutter (20 min)" }
      - { id: v, label: "Vater (25 min)" }
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

Anna hat einen Plan: „Ja, können wir, und zwar mit fünf Passagen!“ Dabei geht es abwechselnd hin (zu zweit) und zurück (allein), insgesamt dreimal hin und zweimal zurück.

**Wähle für jede Stelle im Plan die passende Person aus, so dass Annas Plan umgesetzt wird.**
