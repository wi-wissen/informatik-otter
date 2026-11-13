---
answer: { marble: c, gem: b, paper: a }
---
Am Ende ist das Papier in Beutel A, der Edelstein in B und die Murmel in C.

Am Anfang haben wir diese Anordnung der drei Dinge in den Beuteln:

![Murmel in A, Edelstein in B, Papier in C](./img/step1.png)

Lila vertauscht die Dinge drei Mal. Nach der ersten Vertauschung (A–B) sehen die Inhalte der Beutel so aus (Edelstein in A, Murmel in B, Papier in C):

![Nach der ersten Vertauschung](./img/step2.png)

Nach der zweiten Vertauschung (A–C) so (Papier in A, Murmel in B, Edelstein in C):

![Nach der zweiten Vertauschung](./img/step3.png)

Nach der dritten und letzten Vertauschung (B–C) so (Papier in A, Edelstein in B, Murmel in C):

![Nach der dritten Vertauschung](./img/step4.png)

Dieses Ergebnis hätte man auch einfacher erreichen können, nämlich durch eine einzige Vertauschung der Inhalte von A und C.

## Das ist Informatik!

Hier geht es um Reihenfolgen von Dingen. Eine solche Reihenfolge von Dingen wird auch als Anordnung bezeichnet. Eine andere Reihenfolge stellt eine andere Anordnung dar. Eine Vertauschung ändert die Reihenfolge der Dinge und führt daher zu einer anderen Anordnung. In unserer Aufgabe haben wir am Anfang die Anordnung Murmel-Edelstein-Papier und nach den drei Vertauschungen die Anordnung Papier-Edelstein-Murmel.

Welche verschiedenen Anordnungen können drei Dinge haben? Stellen wir zunächst nur alle Anordnungen her, bei denen ein bestimmtes Ding an erster Stelle ist. Für die beiden restlichen Dinge gibt es dann nur zwei Anordnungen. Wenn zum Beispiel die Murmel an erster Stelle ist, dann gibt es diese beiden Anordnungen:

Murmel-Edelstein-Papier; Murmel-Papier-Edelstein

Genau so gibt es auch mit den beiden anderen Dingen an erster Stelle jeweils zwei verschiedene Anordnungen. Also gibt es noch vier weitere und damit insgesamt sechs Anordnungen der drei Dinge:

Edelstein-Murmel-Papier; Edelstein-Papier-Murmel  
Papier-Murmel-Edelstein; Papier-Edelstein-Murmel

Jede beliebige Anordnung kann nur mit Vertauschungen aus einer anderen Anordnung hergestellt werden. Dazu sind bei n Dingen höchstens n − 1 Vertauschungen notwendig.
