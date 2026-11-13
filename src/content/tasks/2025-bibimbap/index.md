---
short: eY9o
title: Bibimbap 비빔밥
summary: Vier Zutaten, vier Geräte, jedes Gerät nur einmal gleichzeitig. Wie ist das Essen am schnellsten vorbereitet?
grades:
  "5-6": medium
gi:
  content: [algorithms]
  process: [modelling, structuring]
topics: [optimization]
methods: [scheduling]
mascot: beaver
interaction:
  format: custom
  props:
    slots: 5
    slotMinutes: 5
    maxSlots: 4
    devices:
      - { id: pan, label: Bratpfanne }
      - { id: pot, label: Kochtopf }
      - { id: bowl, label: Schüssel }
      - { id: board, label: Schneidebrett }
    ingredients:
      - id: spinach
        label: Spinat
        steps: [{ device: pot, slots: 2 }, { device: board, slots: 1 }]
      - id: sprouts
        label: Sprossen
        steps: [{ device: bowl, slots: 1 }, { device: pot, slots: 2 }]
      - id: carrots
        label: Karotten
        steps: [{ device: board, slots: 1 }, { device: pan, slots: 2 }]
      - id: egg
        label: Ei
        steps: [{ device: pan, slots: 1 }]
source:
  type: original
  work: Informatik-Biber 2025
  year: 2025
  page: 24
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2025/Biberheft_2025_web_komplett.pdf
  country: KR
  license: CC BY-SA 4.0
---
Ein Koch möchte das traditionelle koreanische Gericht 비빔밥 (Bibimbap) zubereiten. Er benutzt dazu u. a. vier Geräte, nämlich Kochtopf, Bratpfanne, Schneidebrett und Schüssel. Damit bereitet er die vier Zutaten für Bibimbap so vor:

| Zutat | Zuerst | Danach |
|---|---|---|
| Spinat | kochen (Topf, 10 Minuten) | schneiden (Brett, 5 Minuten) |
| Sprossen | wässern (Schüssel, 5 Minuten) | kochen (Topf, 10 Minuten) |
| Karotten | schneiden (Brett, 5 Minuten) | braten (Pfanne, 10 Minuten) |
| Ei | braten (Pfanne, 5 Minuten) | |

Der Koch kann mit unterschiedlichen Geräten gleichzeitig arbeiten. Aber er kann ein Gerät immer nur für eine Zutat verwenden. Zum Beispiel kann der Koch gleichzeitig Spinat im Topf kochen und ein Ei in der Pfanne braten, aber er kann in der Pfanne nicht gleichzeitig ein Ei und Karotten braten.

**Erstelle einen Plan, mit dem der Koch die Zutaten für Bibimbap in kürzester Zeit vorbereiten kann.**
