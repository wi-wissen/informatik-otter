---
short: gH18
title: Biberone
summary: Drei Behälter, drei Moleküle, eine Mischregel. Wie vertauscht man zwei Stoffe mit möglichst wenigen Handgriffen?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [logic]
methods: [xor]
mascot: beaver
interaction:
  format: command-sequence
  props:
    maxLength: 6
    commands:
      - { id: g12, image: ./img/op-g12.png, alt: "1 → 2" }
      - { id: g13, image: ./img/op-g13.png, alt: "1 → 3" }
      - { id: g21, image: ./img/op-g21.png, alt: "2 → 1" }
      - { id: g23, image: ./img/op-g23.png, alt: "2 → 3" }
      - { id: g31, image: ./img/op-g31.png, alt: "3 → 1" }
      - { id: g32, image: ./img/op-g32.png, alt: "3 → 2" }
source:
  type: original
  work: Informatik-Biber 2025
  year: 2025
  page: 21
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2025/Biberheft_2025_web_komplett.pdf
  country: IT
  license: CC BY-SA 4.0
---
Ein Biberon ist ein besonderer chemischer Stoff: Seine Moleküle sind jeweils eine Folge von genau drei Bausteinen der Typen A und C. Diese Folge wird auch als Name des Biberons verwendet, zum Beispiel: ACA.

Wenn ein Biberon zu einem anderen Biberon hinzugefügt wird, entsteht wieder ein Biberon. Aus den Bausteinen in den Molekülen der beiden Biberone entstehen die Bausteine des neuen Biberons nach diesen Regeln:

![Regeln: A und A ergibt C, C und C ergibt C, C und A ergibt A, A und C ergibt A](./img/rules.png)

Ein Beispiel: Wenn man einen Tropfen von ACC zu ACA hinzufügt, entsteht CCA:

![Zwei Behälter mit ACC und ACA; ein Tropfen von ACC wird in ACA gegeben; im zweiten Behälter entsteht CCA](./img/example.png)

Im Labor gibt es drei Behälter 1, 2 und 3 mit den Biberonen CAC, ACA und AAC.

![Behälter 1 mit CAC, Behälter 2 mit ACA, Behälter 3 mit AAC](./img/containers.png)

Mit einer solchen Anweisung („2 → 3“) kannst du bestimmen, dass ein Tropfen des Biberons in einem Behälter (z. B. Behälter 2) dem Biberon in einem anderen Behälter (z. B. Behälter 3) hinzugefügt wird.

Unten siehst du sechs verschiedene Anweisungen. Verwende möglichst wenige davon, um die Biberone in den Behältern 1 und 3 zu vertauschen: Am Ende soll in Behälter 1 AAC sein, in Behälter 2 bleibt ACA, und in Behälter 3 soll CAC sein.

