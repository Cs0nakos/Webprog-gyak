import { getConsole } from '../../lib/console/console.js'

let _console = await getConsole()

_console.writeln('Vegyes feladatok\n')

// oszthatóság
// 1. Kérj be egy számot és írd ki, hogy prímszám-e!")
_console.writeln("1. Feladat:")
let a1 = await _console.prompt('Kérek egy számot')

let szam1 = parseInt(a1)
let i = 2;
let osztok = 0;
while (szam1 - 1 >= i)
{
    if (szam1 % i == 0){
        osztok = osztok + 1;
    }
    i++;
}

if (osztok == 0) {
    _console.writeln(`\nA(z) ${szam1} prímszám!`);
}
else {
    _console.writeln(`\nA(z) ${szam1} nem prímszám, mert ${osztok + 2} osztója van!`);
}

// 2. Kérj be két számot és írd ki, hogy relatív prímek-e (van-e közös valódi osztójuk)!")
_console.writeln("\n2. Feladat:")

let a2 = await _console.prompt('Kérem az első számot')
let a3 = await _console.prompt('\nKérem a második számot')

let szam2 = parseInt(a2)
let szam3 = parseInt(a3)
let j = 0;
let kozosOszto = [];

while (j <= szam2 && j <= szam3)
{
    if (szam2 % j == 0 && szam3 % j == 0){
        kozosOszto.push(j);
    }
    j++;
}

if (kozosOszto.length == 1) {
    _console.writeln(`\nA(z) ${szam2} és a(z) ${szam3} relatív prímek!\n`);
}
else {
    _console.writeln(`\nA(z) ${szam2} és a(z) ${szam3} nem relatív prímek, mert a közös osztóik: ${kozosOszto}\n`);
}


// számsorozat generálása
// 3. Írd ki a Fibonacci sorozatot a 3.-tól a 13. eleméig! S(0) = 128, S(1) = 64 és S(i) = (S(i-2) + S(i-1))/2")

_console.writeln("\n3. Feladat:")

let fibSor = [128, 64];

for (let k = 1; k < 13; k++) {
    let elem = (fibSor[k - 1] + fibSor[k]) / 2;
    fibSor.push(elem);
}

_console.writeln(`A Fibonacci sorozat a 3.-tól a 13. eleméig: ${fibSor.slice(3, 14).join(", ")}`);

// min/max/sum/avg
// 4. Készíts egy listát 20 darab 50-nél kisebb, véletlen, egész számból!")
// 4.a Írd ki a lista összegét!")
// 4.b Írd ki, hogy hány elem kisebb mint a maximum 20%-a!")
// 4.c Számítsd ki a lista átlagát! \
//     Írd ki minden elem szórását, azaz az átlagtól való eltérésének a négyzetét!\
//     Példa: átlag=23.567, ekkor a 17 szórása (17 - 23.567)^2 = 43,125489")

_console.writeln("\n4. Feladat:")
_console.writeln("4.a")

let véletlenSzamok = [];
for (let l = 0; l < 20; l++) {
    let rand = Math.floor(Math.random() * 50);
    véletlenSzamok.push(rand);
}
_console.writeln(`A lista elemei: ${véletlenSzamok.join(", ")}`);

_console.writeln("\n4.b")
let max = 0;
for (let p = 0; p < véletlenSzamok.length; p++) {
    if (véletlenSzamok[p] > max) {
        max = véletlenSzamok[p];
    }
}

let kisebb = 0;

for (let m = 0; m < véletlenSzamok.length; m++) {
    if (véletlenSzamok[m] < max * 0.2) {
        kisebb += 1;
    }
}
_console.writeln(`A lista elemei közül ${kisebb} elem kisebb, mint a maximum 20%-a.`);

_console.writeln("\n4.c")
let osszeg = 0;
for (let n = 0; n < véletlenSzamok.length; n++) {
    osszeg += véletlenSzamok[n];
}

let atlag = osszeg / véletlenSzamok.length;
_console.writeln(`A lista átlaga: ${atlag}`);

_console.writeln(`A lista elemeinek szórása az átlagtól:`);
for (let o = 0; o < véletlenSzamok.length; o++) {
    let szoras = (véletlenSzamok[o] - atlag) ** 2;
    _console.writeln(`Elem: ${véletlenSzamok[o]}, \tSzórás: ${szoras}`);
}

// szám átváltás
// 5. Kérj be két számot, a második legyen 1-nél nagyobb és 11-nél kisebb! \
//     Írd ki az első számot olyan számrendszerben, aminek az alapja a második szám! \
//     Példa: első szám: 234, második szám: 7, kimenet: a 234 7-es számrendszerben = 453 (4*49 + 5*7 + 3)")

_console.writeln("\n5. Feladat:")
let a4 = await _console.prompt('Kérem az első számot')
let a5 = await _console.prompt('\nKérem a második számot')

let szam4 = parseInt(a4);
let szamrendszer = parseInt(a5);
let atvaltott = 0;

if (szamrendszer > 1 && szamrendszer < 11) {

    let temp = szam4;
    let helyiertek = 1;
    while (temp > 0) {
        let maradek = temp % szamrendszer;
        atvaltott = atvaltott + (maradek * helyiertek);
        temp = Math.floor(temp / szamrendszer);
        helyiertek = helyiertek * 10;
    }

    _console.writeln(`\nA ${szam4} szám ${szamrendszer}-es számrendszerben: ${atvaltott}`);

} else {
    _console.writeln("\nHiba: A második számnak 1-nél nagyobbnak és 11-nél kisebbnek kell lennie!");
}