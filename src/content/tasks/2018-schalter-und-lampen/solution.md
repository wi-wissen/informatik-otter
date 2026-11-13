---
answer: a
---
Antwort A ist richtig: Wir schauen uns für jeden Schalter seine Positionen bei den vier Versuchen an und vergleichen diese mit den Zuständen der Lampen. Da für den einzelnen Schalter nicht bekannt ist, in welcher Position er an bzw. aus ist, gibt es immer zwei Möglichkeiten, welche Lampenzustände zu den Schalterpositionen passen.

- Schalter A (↑ ↑ ↓ ↑): passt zu einer Lampe mit an-an-aus-an (gibt es nicht) oder aus-aus-an-aus (Lampe 4).
- Schalter B (↓ ↓ ↓ ↓): passt zu einer Lampe mit aus-aus-aus-aus (gibt es nicht) oder an-an-an-an (Lampe 6).
- Schalter C (↓ ↑ ↑ ↓): passt zu einer Lampe mit aus-an-an-aus (Lampe 1) oder an-aus-aus-an (gibt es nicht).
- Schalter D (↑ ↑ ↓ ↓): passt zu einer Lampe mit an-an-aus-aus (Lampe 5) oder aus-aus-an-an (gibt es nicht).
- Schalter E (↓ ↑ ↑ ↑): passt zu einer Lampe mit aus-an-an-an (gibt es nicht) oder an-aus-aus-aus (Lampe 3).
- Schalter F (↑ ↑ ↑ ↓): passt zu einer Lampe mit an-an-an-aus (gibt es nicht) oder aus-aus-aus-an (Lampe 2).

Damit können alle Schalter eindeutig einer Lampe zugeordnet werden: A-4, B-6, C-1, D-5, E-3, F-2. Außerdem haben wir herausgefunden, wie die An-Positionen der Schalter A bis F lauten: ↓, ↓, ↑, ↑, ↓ und ↓.

## Das ist Informatik!

Um die innere Funktionsweise des Systems aus Schaltern und Lampen zu enthüllen, haben wir „Reverse Engineering“ betrieben. Darunter versteht man ganz allgemein, den Bauplan eines Systems herauszufinden, indem man das Verhalten des Systems beobachtet und untersucht. Die Informatik benutzt Reverse Engineering zum Beispiel, um den Quellcode eines Programms herauszufinden, von dem nur der Maschinencode bekannt ist. Die für diese Art des Reverse Engineering bekannten Verfahren sind in Informatik-Werkzeugen wie „Disassemblern“ oder „Decompilern“ zusammengefasst. Ein zweites Beispiel ist das „Sniffen“, also das Beobachten der Kommunikation zwischen Systemen, um die Regeln dieser Kommunikation zu entdecken oder herauszufinden, auf welche Eingaben die Systeme wie reagieren. In dieser Biberaufgabe haben wir bei der Beobachtung der Versuche mit Schaltern und Lampen also auch ein wenig „gesnifft“.
