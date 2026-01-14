import { getConsole } from '../../lib/console/console.js'

let _console = await getConsole()

_console.writeln('Vegyes feladatok')

// oszthatóság
// 1. Kérj be egy számot és írd ki, hogy prímszám-e!")
let a1 = _console.prompt('Kérek egy számot')

// 2. Kérj be két számot és írd ki, hogy relatív prímek-e (van-e közös valódi osztójuk)!")

// számsorozat generálása
// 3. Írd ki a Fibonacci sorozatot a 3.-tól a 13. eleméig! S(0) = 128, S(1) = 64 és S(i) = (S(i-2) + S(i-1))/2")

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
