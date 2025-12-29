# Ablauf `Passwort Checker`

> **Ziele**: Prompts kennenlernen, Funktionen schreiben, Bedingungen anwenden, AI gekonnt nutzen (optional)

1. In der Klasse definieren, was ein gutes Passwort ausmacht (wir suchen va. nach der Länge). _Am Schluss soll es darauf hinauslaufen, dass wir beschliessen, dass wir initial nur auf die Länge des Passwortes testen_
2. In der Klasse planen, wie die Funktion geschrieben werden soll
3. Variabel `password` initial als normaler String aufsetzen (noch ohne Prompt).
4. Funktion deklarieren (Grundgerüst aufbauen)
5. Anweisung schreiben, die auf die Länge prüft
6. `console.log` Nachrichten schreiben für beide Bedingungen (wenn Passwort gut und wenn Passwort schlecht)
7. Funktion aufrufen
8. Variabel `password` in eine Prompt-Eingabe umwandeln -> _Hier den Bezug schaffen, dass das ein Platzhalter ist für ein Inputfeld, was wir erst später lernen, wie wir ein solches auswerten können_

### Optionale Ergänzung

> Diese Ergänzung nur durchführen, wenn die Studierenden motiviert sind und Lust darauf haben. Ansonsten könnte es mehr verwirren als etwas bringen. Anhand dieser Ergänzung kann die (korrekte) Arbeit mit AI-Tools gezeigt werden.

9. Das Passwort soll nun auch noch darauf geprüft werden, ob es mind. eine Zahl beinhaltet. Funktion mit **AI** erweitern. Hier dann auch gleich Zeigen, wie man so etwas schlau "promptet". 

**Beispielprompt**
Ich schreibe eine Funktion in JavaScript, die prüft, ob ein Passwort sicher ist oder nicht. Aktuell sieht meine Funktion so aus: 
```js
function check_password(password) {
    let password_is_secure = true;
    // -> passwortlänge
    if (password.length < 12) {
        password_is_secure = false;
    }

    if (password_is_secure) {
        console.log('Dein Passwort ist sicher!');
    } else {
        console.log('Dein Passwort muss optimiert werden.')
    }
}
```
Ich möchte nun auch prüfen, ob das Passwort mindestens eine Zahl enthält. Wie kann ich meine Funktion um dieses Feature ergänzen? Ergänze mir die Funktion mit ES6 und verwende Best Practices. Passe den Code Stil ausserdem auf den aktuell verwendeten Stil an. 
