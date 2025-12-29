# Ablauf `Wetterschmöcker`

> **Ziele**: Das Gesamte angeeignete Wissen kombinieren, ein wirklich komplexes Projekt umsetzen

1. Es sollen alle einen Account auf [openweathermap](https://api.openweathermap.org) erstellen, damit alle einen API Key haben. Diesen Key kann in der schon vorbereiteten Funktion eingefügt werden.
2. Mit den Studierenden diskutieren, wie Sie gutes Wetter definieren würden.
3. Mit den Studierenden die Lösung anschauen, also das finale Projekt, damit alle wissen, was das Ziel ist. Dann planen, wie das Ganze angegangen werden soll. 
4. Zuerst die Funktion schreiben, mit welcher die Wetterdaten eines Ortes geladen werden. Diese Funktion testen.
5. Einen `for/of` Loop schreiben, mit welchem für alle Orte die Wetterdaten geladen werden. Erklären, dass weil mit async/await gearbeitet wird, nicht mit einem `forEach` Loop verwendet werden kann. Syntax dieses Loops erklären. Die Wetterdaten im Objekt `cities` als prop `weather` speichern.
    > **Wichtig**: Für Testzwecke ab hier das Wetter nicht mehr über die API laden, sondern das Objekt aus der Konsole kopieren und statisch definieren. Sonst werden zu viele API-Request gebraucht. Den Loop `for/of` Loop auskommentieren.
6. Nun kommt der komplizierte Teil. Mit den Studierenden gemeinsam planen, wie sie gutes Wetter definieren würden. Unten sind einige mögliche Parameter für gutes Wetter aufgelistet.
    > **Hint**: In meiner Lösung arbeite ich für das Ranken der Ortschaften mit Punkten. Für z.B. je weniger Wind vergebe ich mehr Punkte. Diese speichere ich auch im Objekt `cities`. Am Schluss sortiere ich die Städte nach diesen vergebenen Punkten und gebe die Stadt mit den meisten Punkten aus. 


## Mögliche Parameter für gutes Wetter
**Wind**: Je mehr Wind, desto weniger Punkte. _Rechenbeispiel: Wir haben 20 Städte in unserer Liste `cities`, die Stadt mit dem wenigsten Wind erhält 19 Punkte, die Stadt mit dem Meisten bekommt keinen Punkt._

**Temperaturen**: Es werden Städte ausgeschlossen. Und zwar jene mit über 28 Grad gefühlter Temperatur, jende mit über 30 Maximal-Temperatur und jene mit unter 0 Minimaltemperatur. Diese Städte bekommen keine Punkte. Alle anderen Städte bekommen Punkte, 19 für die Stadt mit der höchten gefühlten Temperatur, bis 0 für die Stadt mit der niedrigsten.

**Wetter-Bedingung**: Je besser die Wetter-Bedinungung unter `city.weather.weather[0].main` desto mehr Punkte. Die Punkte werden anhand der Liste `conditions_ranking_from_worst_to_best` vergeben. Und zwar bekommt eine Stadt die Punkte, die die Index-Nummer hat, an welcher Stelle die Condition in diesem Array liegt.

```javascript
const conditions_ranking_from_worst_to_best = [
    "Tornado",
    "Ash",
    "Smoke",
    "Thunderstorm",
    "Rain",
    "Drizzle",
    "Fog",
    "Mist",
    "Dust",
    "Sand",
    "Haze",
    "Clouds",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Clear"
]
```
