# Ablauf `Dark Mode`

> **Ziele**: Darkmode-Strategien kennenlernen, CSS mit JavaScript verknüpfen, den LocalStorage nutzen

### Verwendete Darkmode-Strategie
> **Strategie**: Wenn im LocalStorage ein präferierter Farbmodus gespeichert ist, diesen verwenden. Wenn nicht, auf die Systemeinstellungen zurückgreifen.

### Ablauf
1. Mit den Studierenden anschauen, dass man auf einem PC definieren kann, ob man lieber Dark-Mode oder Light-Mode hat. Hierzu [tailwindcss.com](https://tailwindcss.com/) anschauen, dort wird dieselbe Strategie umgesetzt, welche wir umsetzen wollen.
2. Den Studierenden zeigen, wie wir das Ganze umsetzen wollen. Dazu zeigen, dass wir im HTML auf dem `html`-Tag ein Data-Attribut vergeben haben, welches wir ändern wollen. Zeigen, wie das dazugehörige CSS umgesetzt worden ist.
3. Umsetzung im JavaScript gemeinsam mit den Studierenden planen.
4. Zuerst die `init`-Funktion umsetzen, die alles macht, was zu Beginn passieren soll (adaption der oben beschriebenen Strategie).
5. Abschliessend den `#toggle` funktional machen.


### Quellen
- [whitep4nth3r.com](https://whitep4nth3r.com/blog/best-light-dark-mode-theme-toggle-javascript/)
- [css-tricks.com](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#storing-preferences)
