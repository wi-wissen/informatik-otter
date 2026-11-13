---
answer: { weather: sunny, ponds: waterfall }
---
Tom macht eine Aussage über alle sonnigen Tage. Um Toms Aussage zu widerlegen, muss man einen sonnigen Tag finden, bei dem der zweite Teil seiner Aussage nicht stimmt. Da Tom keine Aussage über nicht sonnige Tage macht, kann man ihn mit einer Aussage über nicht sonnige Tage nicht widerlegen. Die erste Lücke muss also mit „sonnig“ gefüllt werden.

Der zweite Teil von Toms Aussage wiederum ist eine Aussage über alle Teiche. Um diese Aussage zu widerlegen, brauchen wir eine Aussage über (mindestens) einen Teich, in dem der zweite Teil dieser Aussage – nämlich dass ein Biber im Teich schwimmt – nicht wahr ist. Eine solche Aussage ist „im Teich mit dem Wasserfall schwamm kein Biber“; die zweite Lücke muss also mit dieser Aussage gefüllt werden. Mit den anderen Möglichkeiten, die zweite Lücke zu füllen, kann Toms Aussage nicht widerlegt werden:

„Letzten Sonntag war es sonnig und in allen Teichen schwammen Biber.“: Diese Aussage stimmt mit Toms Aussage überein.

„Letzten Sonntag war es sonnig und Biber Michael schwamm durch alle Teiche.“: Irgendwann letzten Sonntag ist also in jedem Teich mindestens ein Biber geschwommen (nämlich Biber Michael), so wie Tom es für sonnige Tage behauptet. Auch diese Aussage stimmt mit Toms Aussage überein.

„Letzten Sonntag war es sonnig und Biber Michael schwamm gar nicht.“: Diese Aussage reicht nicht, um Toms Aussage zu widerlegen. Auch wenn Biber Michael gar nicht geschwommen ist, könnten in jedem Teich andere Biber geschwommen sein.

## Das ist Informatik!

In dieser Biberaufgabe diskutiert Kim den Wahrheitsgehalt von Toms Aussage. Tom macht eine Aussage über alle sonnigen Tage, und für diese wiederum eine Aussage über alle Teiche. Die gesamte Aussage kann nur falsch sein, wenn es mindestens einen sonnigen Tag gibt, an dem in mindestens einem Teich kein Biber schwamm. Daher reicht ein einziges Gegenbeispiel aus, um seine Aussage zu widerlegen.

Auch die klassische Logik beschäftigt sich mit der Wahrheit von Aussagen: Aussagen können wahr oder falsch sein. Logische Operatoren wie „und“, „oder“ und „nicht“ werden verwendet, um (einfachere) Aussagen zu komplexeren Aussagen zu verbinden. Quantoren wie „alle“ und „mindestens ein“ werden verwendet, um Aussagen über Mengen von Objekten zu machen.

Der Umgang mit Logik ist fundamental in der Informatik. Computersysteme sind mit logischen Bausteinen wie „und“, „oder“ und „nicht“ aufgebaut, die statt „wahr“ und „falsch“ die Werte 1 und 0 (elektrische Spannung bzw. keine Spannung) verwenden. Ebenso verwenden Programmiersprachen logische Ausdrücke, die in Anweisungen wie

```\nIF it is summer AND the sun is shining, THEN turn on the air conditioning\n```\n\nverwendet werden.
