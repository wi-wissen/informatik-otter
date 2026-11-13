---
short: D31u
title: Getränkeautomat
summary: Ein Automat mit nur zwei Tasten soll vier Getränke ausgeben. Welche Bedienungsanleitung stimmt?
grades:
  "5-6": hard
gi:
  content: [languages-automata]
  process: [modelling, reasoning]
topics: [automata]
methods: [finite-automaton]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: Drücke erst Taste A und dann nochmal Taste A für zwei Heißgetränke. }
      - { id: b, label: Drücke erst Taste A und dann Taste B für einen heißen Tee. }
      - { id: c, label: Drücke erst Taste B und dann nochmal Taste B für einen kalten Tee. }
      - { id: d, label: Drücke Taste B für ein Mineralwasser. }
source:
  type: original
  work: Informatik-Biber 2013
  year: 2013
  page: 20
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2013/Biberheft2013-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Oh nein! Der neue Getränkeautomat hat nur zwei Tasten: Taste A und Taste B. Es sollen aber vier Getränke zur Wahl stehen: Die Heißgetränke Kaffee und Tee sowie die Kaltgetränke Apfelsaft und Mineralwasser.

![Die vier Getränke von links nach rechts: Kaffee (braun, dampfend), Tee (gelb, dampfend), Apfelsaft (grün), Mineralwasser (hellblau, sprudelnd)](./img/drinks.png)

Der schlaue Hausmeister programmiert den Automaten so, dass durch ein Drücken von zwei Tasten die vier Getränke wählbar sind: Drücke zuerst die Taste A für Heißgetränk oder die Taste B für Kaltgetränk. Dann drücke die Taste A für Kaffee oder die Taste B für Tee, beziehungsweise die Taste A für Apfelsaft oder die Taste B für Mineralwasser.

Leider will der Hausmeister keine Benutzungsanleitung herausrücken. Deshalb kursieren unter den Schülern verschiedenste Anweisungen zur Benutzung des Getränkeautomaten. Nicht alle sind richtig. Beispiel für eine richtige Anweisung: Drücke erst Taste B und dann Taste A für Apfelsaft.

**Welche Anweisung ist richtig?**
