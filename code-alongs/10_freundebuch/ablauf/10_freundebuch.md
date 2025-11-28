# Ablauf `Freundebuch`
> **Ziele**: Mit Objekten vertraut werden, Filter-Array-Methoden nutzen

1. Gemeinsam das Objekt `friends` analysieren, dann die Applikation planen. Auch schon definieren, wie die verschiedenen Filter logisch funktionieren. 
   1. **#all**: -
   2. **#winti**: nach `wohnort` filtern
   3. **#socccer**: nach `hobbies` filtern
   4. **#a**: nach Anfangsbuchstabe von `name` filtern 
   5. **#lena**: nach Freunden filtern, welche die `id` von Lena als gemeinsame Freunde haben
   6. **#u30**: nach `alter` und `hobbies` Ausgang filtern
2. Alle Filter-Buttons mit querySelectorAll aus dem DOM laden und allen einen Event-Listener geben.
3. Anhand der ID der Buttons einen Switch bauen. 
4. Filter für alle Buttons mit der array.filter() Methode umsetzen und Resultat einfach mal in der Konsole ausgeben.
5. Nun eine Funktion schreiben, die alle gefilterten Freunde im DOM ausgibt.
