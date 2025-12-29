# Ablauf `Motivator`

> **Ziele**: Den LocalStorage nutzen, Arrays einsetzen, Werte aus Input-Feldern verarbeiten

1. Aufzeigen, was das Ziel des Code-Along ist. 
2. Gemeinsam planen nach folgenden Unterschritten:
   1. Name
   2. Skills

### i. 👩🏼‍🎓 Name
1. Den Container für den Vornamen aus dem DOM laden.
2. Den Vornamen aus dem LocalStorage laden.
3. Wenn noch keiner definiert ist, mittels eines Prompts den Vornamen abfragen und dann im DOM darstellen.

### ii. 🏓 Skills
1. Den Container für die Skills `skills_ct` aus dem DOM laden.
2. Die Fallback-Skill als Variable `fallback` definieren.
3. Mit genau der gleichen Methode die Skills initialisieren. Wenn noch keine Skills definiert sind, einen leeren Array initialisieren mit dem Fallback-Item drin. 
4. Eine Funktion schreiben, welche alle Skills aus dem Array im DOM darstellt. Jede Skill soll in einem separaten span-Element dem `skills_ct` angehängt werden. Wichtig: Die Funktion soll initial den Container `skills_ct` leeren.
5. Diese Funktion initial aufrufen.
6. Das Inputfeld für die Eingabe der Skills als `input_add` aus dem DOM laden.
7. Einen EventListener auf das Inputfeld schreiben, der auf Enter eine neue Fähigkeit einerseits im DOM ausgibt und andererseits im Local Storage speichert.
8. Initial soll das Input-Feld fokussiert werden

> **Optional**: Wenn noch Zeit & Motivation vorhanden ist, kann auch noch eine Funktion implementiert werden, damit Fähigkeiten wieder gelöscht werden können.
