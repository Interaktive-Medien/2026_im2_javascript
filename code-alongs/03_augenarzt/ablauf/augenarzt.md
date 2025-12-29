# Ablauf `Augenarzt`

> **Ziele**: Verschiedene Events kennenlernen, CSS im Zusammenhang mit JavaScript nutzen, CSS Animationen einsetzen, mit dem DOM interagieren

1. Mit den Studierenden anschauen, was wir alles machen wollen. Dazu das HTML und CSS der Ausgangslage anschauen.
   1. Auf einen `click` auf das Auge, soll sich dieses rot verfärben
   2. Das Auge soll blinzeln (mittels eines `setInterval`)
   3. Die Pupille soll sich verschieben, je nach dem in welchem Drittel des Bildschirmes sich die Maus befindet
2. Funktionen dann nacheinander umsetzen.

### i. 🩸 bleed
1. Code im Plenum planen.
2. Den ersten Teil der Übung mit einem einfachen Klick-Event und einem Klassen-Toggle lösen.
3. Mit den Studierenden die Methode der veränderbaren Klasse genau anschauen.

### ii. 👁️ blink
1. Code im Plenum planen.
2. Klasse `#eye.closed` gemeinsam schreiben (noch ohne transition) und testen.
3. Interval umsetzen.
4. Transition im CSS hinzufügen, um das Ganze smooth zu machen.

### iii. 🙆🏼 look around
1. Code im Plenum planen. Hier auch eine Skizze aufzeichnen und schon definieren, welche Werte alles gebraucht werden.
2. Klassen für `#pupil.look_right` und `#pupil.look_left` schreiben und testen.
3. Event `mousemove` erstellen und dort die korrekte Bedingung schreiben.
4. Transitions im CSS hinzufügen.

## Weitere Links
- [CSS Clip Path Maker](https://bennettfeely.com/clippy/)
