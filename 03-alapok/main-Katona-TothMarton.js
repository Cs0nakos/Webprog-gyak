import { createConsole, writeConsole, getConsole } from "../01-konzol/console.js";

let _console = null;
let fighter = null;

window.addEventListener('load', () => {
    _console = createConsole();
    document.body.appendChild(_console);
    writeConsole("MMA harcosok");

    task1();
    task2();
    task3();
    task4();
    task5();
    task6();
    task7();
    task8();
});

function task1() {
    writeConsole('\n1. feladat');
    writeConsole('Primitívek');
    let name = 'Kis Pista';
    let age = 32;
    let weight = 80.5;
    let isActive = true;
    let nickname = null;
    let rank;

    writeConsole(`${name} ${typeof (name)}`);
    writeConsole(`${age} ${typeof (age)}`);
    writeConsole(`${weight} ${typeof (weight)}`);
    writeConsole(`${isActive} ${typeof (isActive)}`);
    writeConsole(`${nickname} ${typeof (nickname)}`);
    writeConsole(`${rank} ${typeof (rank)}`);

    function Match(date, result) {
        this.date = date;
        this.result = result;
    }

    writeConsole('\nÖsszetett típus');
    fighter = {
        id: 1,
        name: "Kis Pista",
        nickname: "Pityuka",
        gender: "férfi",
        age: 32,
        wins: 27,
        losses: 1,
        draws: 0,
        matches: [
            new Match("2023-01-12", "Győzelem"),
            new Match("2023-06-05", "Vereség"),
            new Match("2024-02-18", "Győzelem"),
        ],

        toString: function () {
            let info = `Fighter: ${this.name} (${this.nickname})\nGender: ${this.gender}\nAge: ${this.age}\nRecord: ${this.wins}W-${this.losses}L-${this.draws}D`;
            if (this.matches && this.matches.length > 0) {
                info += `\nMatches:\n`;
                this.matches.forEach((m, i) => {
                    info += `  ${i + 1}. ${m.date} - ${m.result}\n`;
                });
            }
            return info;
        }
    };

    writeConsole(fighter.toString());
}

function task2() {
    writeConsole('\n2. feladat: Értékek, kifejezések');
    writeConsole('Változók, konstansok');

    var szam1 = 10;
    let szam2 = 20;
    const szam3 = 30;

    szam1 = 15;
    writeConsole(`${szam1}`);

    szam2 = 25;
    writeConsole(`${szam2}`);

    // szam3 = 35;  --> hiba
    writeConsole(`${szam3}`);

    writeConsole('\nÖsszehasonlítás');

    writeConsole(`${fighter.age == '32'}`);   // true
    writeConsole(`${fighter.age === '32'}`);  // false
    writeConsole(`${typeof fighter.age}, ${typeof '32'}`);

    writeConsole('\nKulcsszavak');

    // let class = 5; --> '{' expected
    // let var = 5; --> Variable declaration expected
}

function task3() {
    writeConsole('\n3. feladat: Konverzió');
    writeConsole('\nImplicit konverzió');

    let a = 10 + "5";
    writeConsole(`${a} (${typeof a})`);

    let b = 10 - "5";
    writeConsole(`${b} (${typeof b})`);

    let c = 10 * true;
    writeConsole(`${c} (${typeof c})`);

    let d = !!0;
    writeConsole(`${d} (${typeof d})`);

    writeConsole('\nExplicit konverzió');

    let szamSzoveg = String(123);
    writeConsole(`${szamSzoveg} (${typeof szamSzoveg})`);

    let szovegSzam = Number("456");
    writeConsole(`${szovegSzam} (${typeof szovegSzam})`);

    let egesz = parseInt("789");
    writeConsole(`${egesz} (${typeof egesz})`);

    writeConsole('\nTípusellenőrzés');

    writeConsole(`${typeof fighter}`);
    writeConsole(`${typeof fighter.matches}`);

    writeConsole(`${Array.isArray(fighter.matches)}`);

    writeConsole(`${fighter instanceof Object}`);
    writeConsole(`${fighter.matches instanceof Array}`);

    writeConsole(`${fighter.constructor == Object}`);
    writeConsole(`${fighter.matches.constructor == Array}`);
}

function task4() {
    writeConsole('\n4. feladat: Operátorok');
    writeConsole('\nAritmetikai és értékadás');
    fighter.matches = [
        { date: Date.now(), result: 'win' },
        { date: new Date(2025, 8, 1), result: 'win' },
        { date: new Date(2025, 9, 5), result: 'loss' }
    ];
    let wins = 0;
    let losses = 0;
    for (let i = 0; i < fighter.matches.length; i++) {
        if (fighter.matches[i].result == 'win') wins++;
        else if (fighter.matches[i].result == 'loss') losses++;

    }

    let count = 0;
    for (let match of fighter.matches) {
        if (match.result == 'win') count++;
    }
    writeConsole(`wins: ${wins}, count: ${count}`);

    writeConsole('\nLogikai és összehasonlító');

    let isGoodFighter = wins > losses;
    writeConsole(`wins>losses ${isGoodFighter}`);

    writeConsole('\nTernary (?)');

    let results = ['loss', 'draw', 'win'];

    for (let i = 0; i < 10; i++) {
        let d = Math.trunc(Math.random() * 29);
        let r = results[Math.trunc(Math.random() * 100) % 3];
        fighter.matches.push(
            { date: new Date(2025, 8, d), result: r }
        );
    }
    console.log(fighter);

    wins = 0;
    for (let i = 0; i < fighter.matches.length; i++) {
        if (fighter.matches[i].result == 'win') wins++;
    }

    // wins = fighter.matches.reduce(function(w, match) {
    //     return w + (match.result == 'win' ? 1 : 0);
    // });

    // wins = 0;
    // fighter.matches.forEach(function(v) { wins += v; });
    // console.log(wins);

    console.log(wins);

    console.log(
        wins > 10 ?
            'Bajnok esélyes' :
            wins > 5 ?
                'Erős harcos' :
                'Edzeni kell még');
}

function task5() {
    writeConsole('\n5. feladat: Vezérlési szerkezetek');
    writeConsole('\nif...else');


    writeConsole('\nswitch');

}

function task6() {
    writeConsole('\n6. feladat: Ciklusok');
    writeConsole('\nfor/for in/for of');


    writeConsole('\nwhile');


    writeConsole('\nExtra: Iterátor osztály');
}

function task7() {
    writeConsole('\n7. feladat: Függvények, metódusok');
    writeConsole('\nParaméter, alapérték');


    writeConsole('\nNévtelen és nyílfüggvény');

}

function task8() {
    writeConsole('\n8. extra feladat: Összetett feladat');
}