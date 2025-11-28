# Ablauf `Worst DJ in the world`

> **Ziele**: Multimedia-Events nutzen, mit dem DOM vertraut werden

1. Mit den Studierenden die Ausgangslage anschauen und definieren, was alles gemacht werden soll. Grob kann das Code-Along in zwei Teile aufgeteilt werden.
   1. Audio-Player
   2. Steuerung der Lautstärke

### i. 🎸 Audio-Player
1. Planen, was alles wann passieren muss.
2. Globale Kontrollvariable `is_playing` initialisieren.
3. Den Start-Button `#control` funktional machen und mit der Variabel `is_playing` verknüpfen.
4. In diesem Schritt auch den Titel des Start-Buttons ändern je nach Zustand.
5. Auf Start eine zufällige ID zwischen 1 und 24 (Namen der Songs) generieren. Für das Erstellen der Zufalls-Funktion AI nutzen.
6. Alle relevanten DOM-Elemente laden und alles, was auf **Start** passieren soll, funktional machen.
7. Nun alles was auf **Stop** passieren soll funktional machen

### ii. 🎚️ Lautstärke-Steuerung
1. Planen, was alles wann passieren muss.
2. Event für den ersten Regler erstellen und die Lautstärke manipulieren.
3. Kopieren und auf den zweiten Regler anpassen.

> Optional können noch, je nach motivation der Studierenden, die Volumen der zwei Lautstärke-Regler im LocalStorage gespeichert werden.

**Beispielprompt**
Ich brauche in JavaScript eine Funktion, die anhand eines minimalen und eines maximalen Wertes jeweils eine zufällige Ganzzahl zurückgibt. Die Variablen für die Mindestzahl und die Maximalzahl habe ich schon definiert. Die Mindestzahl und die Maximalzahl sollen auch im Bereich der möglichen Rückgabewerte liegen.
```javascript
let min_song = 1;
let max_song = 24;
```
Die Funktion soll in ES6 und mit Best Practices geschrieben sein. Als Naming-Convention nutze ich Snake Case.
