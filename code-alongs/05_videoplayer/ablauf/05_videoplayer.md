# Ablauf `Videoplayer`

> **Ziele**: Mit Video-Elementen arbeiten, Multimedia-Events einsetzen

1. Den aktuellen Stand zeigen & die Lösung.
2. Aus dem HTML-Video-Element die Standard-Controls entfernen und das auskommentierte einblenden.
3. Mit den Studierenden gemeinsam planen, wie das Ganze umgesetzt werden soll & welche Schritte alle nötig sind.
4. Nacheinander folgende Funktionalitäten umsetzen
   1. Korrekte Buttons anzeigen & funktional machen.
   2. Verbleibende Dauer des Videos anzeigen.

### i. 🎛️ Buttons
1. Alle Buttons nacheinander aus/einblenden und funktional machen.
2. Um die Buttons auszublenden, kann mit der Klasse `hidden` gearbeitet werden.

### ii. ⏰ Zeit
1. Dauer des Videos initial ausgeben. 
2. Für die Formatierung der Zeit mittels AI eine Funktion `getFormattedTime` generieren lassen (_siehe unten_). 
3. Die Zeit mittels einem EventListener `timeupdate` auf dem Video-Element auf die verbleibende Zeit anpassen.

**Beispielprompt:**
Ich möchte mit modernem JavaScript eine Funktion mit dem Namen `getFormattedTime` schreiben, welche einen Sekundenwert als Parameter nimmt und mir dann im Format 00:00 die Dauer in Stunden und Minuten zurückgibt. Ergänze mir die Funktion mit ES6 und verwende Best Practices.
