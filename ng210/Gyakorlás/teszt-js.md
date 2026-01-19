1. Típusok

let age = "25";
let total = age + 5;

Mi lesz a total típusa?
A) number
B) string
C) boolean
D) undefined

2. Típusok

let isActive = true;
console.log(typeof isActive);

Mit ír ki a typeof operátor?
A) "boolean"
B) "true"
C) "bool"
D) "string"

3. Változók

const name = "Anna";
name = "Béla";

Mi a helyes javítás?
A) let name = "Anna";
B) var name = "Anna"; name = "Béla";
C) name := "Béla";
D) const name = "Béla";

4. Változók

let x = 5;
let x = 10;

Hogyan lehet ezt helyesen javítani?
A) const x = 10;
B) var x = 10;
C) Távolítsd el az első sort
D) Távolítsd el a második let kulcsszót

5. Objektumok

let person = {
  name: "John",
  age: 30
};

Mi a person típusának neve?
A) Array
B) Object
C) Class
D) JSON

6. Objektumok

let items = ["apple", "banana", "pear"];

Mi a items típusa?
A) Object
B) String
C) Array
D) Map

7. Objektumok

let today = new Date();

Mi a today változó típusa?
A) Object
B) String
C) DateTime
D) Calendar

8. Feltételek

let score = 70;
if score >= 60 {
  console.log("Passed");
}

Mi a helyes javítás?
A) if (score => 60)
B) if (score >= 60) {
C) if score => 60 {
D) if (score >= 60); {

9. Feltételek

let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("It's an apple");
  break;
}

Ez a kód...
A) Hibás, hiányzik a default
B) Hibás, a case-ek előtt if kell
C) Helyes
D) Hibás, a break nem használható switch-ben

10. Feltételek

let isMember = true;
let price = isMember ? 100 : 200;

Mi ennek az operátornak a neve?
A) Logikai operátor
B) Feltételes (ternary) operátor
C) Rövidzár operátor
D) Switch operátor

11. Ciklusok

for (let i = 0; i < 3; i++) {
  console.log(i);
}

Mi történik itt?
A) Végtelen ciklus fut le
B) A ciklus egyszer sem fut le
C) A ciklus háromszor fut le
D) A ciklus hibát dob

12. Ciklusok

let user = { name: "Tom", age: 25 };
for (let key in user) {
  console.log(key);
}

Mit ír ki a ciklus?
A) Az értékeket
B) Az indexeket
C) A property neveket
D) Hibát dob

13. Ciklusok

let nums = [10, 20, 30];
for (let n of nums) {
  console.log(n);
}

Mi a for...of ciklus szerepe itt?
A) Objektum bejárása
B) Indexek listázása
C) Értékek bejárása
D) Feltételvizsgálat

14. Ciklusok

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);

Ez a ciklus...
A) Egyszer sem fut le
B) Végtelen ciklus
C) Háromszor fut le
D) Nem érvényes szintaxis

15. DOM query

document.querySelector(".item");

Mit csinál ez a kód?
A) Kiválaszt egy elemet ID alapján
B) Kiválaszt az összes elemet class alapján
C) Kiválasztja az első .item classú elemet
D) Nem működik osztályokra

16. DOM query

document.getElementById("header");

Mi ennek a célja?
A) Módosítani egy class-t
B) Kiválasztani több elemet
C) Kiválasztani egy header ID-jű elemet
D) Új elem létrehozása

17. DOM navigáció

let child = document.getElementById("item");
let parent = child.parentElement;

Mit tárol a parent változó?
A) Az összes szülőelemet
B) A közvetlen szülőelemet
C) A gyermek elemeket
D) A testvérelemeket

18. DOM navigáció

let next = document.getElementById("item").nextElementSibling;

Mi a next tartalma?
A) Az előző testvérelem
B) A gyermekelem
C) A következő testvérelem
D) A szülőelem

19. DOM generálás

let p = document.createElement("p");
p.textContent = "Hello!";
document.body.appendChild(p);

Mi történik itt?
A) Egy meglévő elem törlődik
B) Egy új <p> elem jön létre és jelenik meg
C) A body törlődik
D) Hibát dob, mert a textContent csak readonly

20. DOM generálás

document.getElementById("container").innerHTML = "<strong>Hi!</strong>";

Mi történik itt?
A) Csak a szöveg kerül be ("Hi!")
B) A szöveg HTML-ként értelmeződik
C) Nem történik semmi
D) Hiba történik, mert az innerHTML nem írható