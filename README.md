# Informatik-Otter

Knobelaufgaben, in denen Informatik steckt: die Aufgaben aus dem Wettbewerb
[Informatik-Biber](https://bwinf.de/informatik-biber/) als durchsuchbarer Katalog, verortet nach den
Bildungsstandards der Gesellschaft für Informatik, mit Klassenstufe, Thema und dem Verfahren dahinter.

**→ https://informatik-otter.wi7.net**

- Jede Aufgabe hat einen Kurzlink (`informatik-otter.wi7.net/r7Kq`) und einen QR-Code für den Unterricht.
- Interaktive Aufgaben laufen direkt im Browser.
- Lehrer:innen können auf `/teachers/` einen Modus einschalten, der Prüfen und Lösungen zeigt.
- Für Sprachmodelle gibt es [`/llms.txt`](https://informatik-otter.wi7.net/llms.txt) und `/llms-full.txt`.

## Mitmachen

```bash
npm ci
npm run dev
```

Neue Aufgaben aus einem Biberheft übernehmen: [docs/adding-tasks.md](docs/adding-tasks.md).
Antwortformate: [docs/formats.md](docs/formats.md).

## Lizenzen

- Quelltext: MIT, siehe [LICENSE](LICENSE).
- Aufgaben aus dem Informatik-Biber: © BWINF – GI e.V., Lizenz wie im jeweiligen Biberheft angegeben
  (z. B. CC BY-SA 4.0). Jede Aufgabe nennt Quelle und Lizenz.
- Eigene Aufgaben (mit dem Otter): CC BY-SA 4.0.

Der Informatik-Otter ist ein unabhängiges, nicht kommerzielles Projekt und nicht mit BWINF verbunden.
