1. Típusok

let age = "25";
let total = age + 5;

Mi lesz a total típusa?
B) string

2. Típusok

let isActive = true;
console.log(typeof isActive);

Mit ír ki a typeof operátor?
A) "boolean"

3. Változók

const name = "Anna";
name = "Béla";

Mi a helyes javítás?
A) let name = "Anna";

4. Változók

let x = 5;
let x = 10;

Hogyan lehet ezt helyesen javítani?
D) Távolítsd el a második let kulcsszót

5. Objektumok

let person = {
  name: "John",
  age: 30
};

Mi a person típusának neve?
B) Object

6. Objektumok

let items = ["apple", "banana", "pear"];

Mi a items típusa?
A) Object

7. Objektumok

let today = new Date();

Mi a today változó típusa?
A) Object

8. Feltételek

let score = 70;
if score >= 60 {
  console.log("Passed");
}

Mi a helyes javítás?
B) if (score >= 60) {

9. Feltételek

let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("It's an apple");
  break;
}

Ez a kód...
C) Helyes

10. Feltételek

let isMember = true;
let price = isMember ? 100 : 200;

Mi ennek az operátornak a neve?
B) Feltételes (ternary) operátor

11. Ciklusok

for (let i = 0; i < 3; i++) {
  console.log(i);
}

Mi történik itt?
C) A ciklus háromszor fut le

12. Ciklusok

let user = { name: "Tom", age: 25 };
for (let key in user) {
  console.log(key);
}

Mit ír ki a ciklus?
C) A property neveket

13. Ciklusok

let nums = [10, 20, 30];
for (let n of nums) {
  console.log(n);
}

Mi a for...of ciklus szerepe itt?
C) Értékek bejárása

14. Ciklusok

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);

Ez a ciklus...
C) Háromszor fut le0

15. DOM query

document.querySelector(".item");

Mit csinál ez a kód?
C) Kiválasztja az első .item classú elemet

16. DOM query

document.getElementById("header");

Mi ennek a célja?
C) Kiválasztani egy header ID-jű elemet

17. DOM navigáció

let child = document.getElementById("item");
let parent = child.parentElement;

Mit tárol a parent változó?
B) A közvetlen szülőelemet

18. DOM navigáció

let next = document.getElementById("item").nextElementSibling;

Mi a next tartalma?
C) A következő testvérelem

19. DOM generálás

let p = document.createElement("p");
p.textContent = "Hello!";
document.body.appendChild(p);

Mi történik itt?
B) Egy új <p> elem jön létre és jelenik meg

20. DOM generálás

document.getElementById("container").innerHTML = "<strong>Hi!</strong>";

Mi történik itt?
B) A szöveg HTML-ként értelmeződik