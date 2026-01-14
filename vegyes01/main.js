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

let fib = [128, 64];

for (let k = 2; k < 14; k++) {
    if (k >= 2) {
        fib[k] = (fib[k - 2] + fib[k - 1]) / 2;
    }
}

_console.writeln(`A Fibonacci sorozat a 3.-tól a 13. eleméig: ${fib.slice(3, 14).join(", ")}`);


// min/max/sum/avg
// 4. Készíts egy listát 20 darab 50-nél kisebb, véletlen, egész számból!")
// 4.a Írd ki a lista összegét!")
// 4.b Írd ki, hogy hány elem kisebb mint a maximum 20%-a!")
// 4.c Számítsd ki a lista átlagát! \
//     Írd ki minden elem szórását, azaz az átlagtól való eltérésének a négyzetét!\
//     Példa: átlag=23.567, ekkor a 17 szórása (17 - 23.567)^2 = 43,125489")

// szám átváltás
// 5. Kérj be két számot, a második legyen 1-nél nagyobb és 11-nél kisebb! \
//     Írd ki az első számot olyan számrendszerben, aminek az alapja a második szám! \
//     Példa: első szám: 234, második szám: 7, kimenet: a 234 7-es számrendszerben = 453 (4*49 + 5*7 + 3)")
