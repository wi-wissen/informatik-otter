---
short: d7N5
title: De-Anonymisierung
summary: Aus zwei harmlos wirkenden Tabellen lässt sich eine Person mit ihrer Krankheit identifizieren. Wen trifft es?
grades:
  "9-10": hard
  "11-13": hard
gi:
  content: [society]
  process: [reasoning]
topics: [security, databases]
methods: [database-query]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: Georg Schmidt }
      - { id: b, label: Eva Müller }
      - { id: c, label: Roman Schröder }
      - { id: d, label: Isabelle Beyer }
source:
  type: original
  work: Informatik-Biber 2012
  year: 2012
  page: 13
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2012/Biberheft2012-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Krankenakten enthalten sensible persönliche Daten, die nicht öffentlich bekannt sein sollten. Zu Forschungszwecken hat ein Krankenhaus aktuelle Daten deshalb anonymisiert veröffentlicht; die Tabelle zeigt einen Auszug aus dieser Liste:

| Geb.datum  | Geschlecht | PLZ   | Krankheit    |
|------------|------------|-------|--------------|
| 01.01.1974 | männlich   | 29400 | Diabetes     |
| 01.01.1976 | männlich   | 18250 | Lungenkrebs  |
| 01.01.1976 | weiblich   | 29400 | Brustkrebs   |
| 01.01.1976 | weiblich   | 29400 | Fehlgeburt   |
| 01.01.1984 | weiblich   | 18250 | Herzanfall   |
| 01.01.1985 | weiblich   | 16300 | Brustkrebs   |
| 01.01.1987 | weiblich   | 25340 | Hautkrebs    |
| 01.01.1988 | männlich   | 18250 | Diabetes     |
| 01.01.1988 | weiblich   | 18250 | Grippe       |

Gleichzeitig hat – wegen anstehender Wahlen – die Gemeinde mit PLZ 18250 eine Liste der Wahlberechtigten veröffentlicht; die Tabelle zeigt die Daten ALLER Wahlberechtigten, die an einem 1. Januar geboren wurden:

| Geb.datum  | Geschlecht | Name              |
|------------|------------|-------------------|
| 01.01.1958 | weiblich   | Melanie Meyer     |
| 01.01.1976 | männlich   | Georg Schmidt     |
| 01.01.1976 | männlich   | Robert Schlumpf   |
| 01.01.1984 | weiblich   | Kathrin Frei      |
| 01.01.1984 | weiblich   | Eva Müller        |
| 01.01.1988 | weiblich   | Agnes Bachmann    |
| 01.01.1988 | männlich   | Roman Schröder    |
| 01.01.1988 | weiblich   | Isabelle Beyer    |
| 01.01.1989 | männlich   | Martin Klaus      |

Anhand der beiden Tabellen kannst du eine Person mit Namen identifizieren (de-anonymisieren), die mit absoluter Sicherheit eine Krankheit hat.

**Wie lautet der Name dieser Person?**
