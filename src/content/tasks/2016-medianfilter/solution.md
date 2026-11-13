---
answer: a
---
**Antwort A ist richtig:** Bei diesem Medianfilter werden quadratische Bildausschnitte mit neun Pixeln verarbeitet. Das Pixel in der Mitte bekommt einen neuen Wert. Wenn man das Beispiel betrachtet, fällt auf, dass von den neun Pixeln nur drei schwarz sind (die das Pixel in der Mitte selber vor dem Anwenden des Filters). Der Median der sortierten Grautonfolge ist folglich heller als das ungefilterte Original. Aus Schwarz wird ein Grauton. In dem Bild in der Aufgabe sind in allen quadratischen 9-Pixel-Ausschnitten des Bildes die schwarzen Pixel in der Minderheit. Deshalb enthält das gefilterte Bild kein einziges schwarzes Pixel. Das ist nur bei Bild A der Fall.

## Das ist Informatik!

Beim Bearbeiten von Fotos möchte man schnell mal bestimmte Effekte erzielen. Häufig wünscht man sich mehr Schärfe oder lebendigere Farben. Manchmal möchte man auch künstlerische Effekte erzielen, um einem Bild eine besondere Note zu geben. Diese Effekte kann man mit Hilfe von Bildfiltern erzeugen.

Ein solcher Filter ist der Median-Filter. Er wird beispielsweise dafür verwendet, einzelne Pixelfehler, die etwa aufgrund eines Defekts des Bildsensors entstanden sind, auszugleichen. Der Effekt ist, dass das Bild ein wenig geglättet wirkt und kein einzelnes Pixel mehr hervorsticht. Gewisse Formen von Bildrauschen können so verringert werden.
