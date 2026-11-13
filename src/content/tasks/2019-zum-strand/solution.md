---
answer: a
---
**Antwort A** ist richtig.

Auf dem Schild stehen zwei Regeln:

1. Personen, die 8 Jahre oder älter sind, dürfen auf den Strand.
2. Personen, die jünger als 8 Jahre sind, dürfen nur dann auf den Strand, wenn sie von einer Person begleitet werden, die älter als 10 Jahre ist.

Da Angela älter als 8 Jahre ist, darf sie wegen Regel 1 auf den Strand. Fred ist jünger als 8 Jahre, aber da Fred von Angela begleitet wird und Angela älter als 10 Jahre ist, darf wegen Regel 2 auch Fred auf den Strand.

## Das ist Informatik!

Darf eine Person auf den Strand? Das Schild in dieser Biberaufgabe nennt dazu zwei Bedingungen. Die zweite Bedingung muss aber nur geprüft werden, wenn die erste Bedingung nicht erfüllt ist. Für einen Kontrolleur, der die Bedingungen auf dem Schild umsetzen soll, kann man eine passende Dienstanweisung deshalb so aufschreiben:

```
Wenn die Person 8 Jahre oder älter ist:
    Dann lasse sie auf den Strand
    Sonst: Wenn die Person von einer älter als 10 Jahre alten Person begleitet wird:
        Dann lasse sie auf den Strand
        Sonst lasse sie nicht auf den Strand
```

Solche „Wenn – dann – sonst“-Anweisungen (englisch: if – then – else) sind ein wichtiger Bestandteil jeder guten Programmiersprache. In der Informatik heißen sie auch „bedingte Anweisungen“ oder „Verzweigungen“. Wer programmieren können will, muss den Umgang mit bedingten Anweisungen beherrschen, und zwar unbedingt.
