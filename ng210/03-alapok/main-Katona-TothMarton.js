import { createConsole, writeConsole, getConsole } from "../01-konzol/console.js";

let _console = null;

window.addEventListener('load', () => {
    _console = createConsole();
    document.body.appendChild(_console);
    writeConsole("MMA harcosok");

    task1();
    task2();
    task3();
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

    function Match(datum, eredmeny) {
        this.datum = datum;
        this.eredmeny = eredmeny;
    }

    writeConsole('\nÖsszetett típus');
    let fighter = {
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
    writeConsole('\n4. feladat: Értékek, kifejezések');
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

    writeConsole(`${harcos.kor == '33'}`);
    writeConsole(`${harcos.kor === '33'}`);
    writeConsole(`${typeof harcos.kor}, ${typeof '33'}`);

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

    writeConsole(`${typeof harcos}`);
    writeConsole(`${typeof harcos.merkozesek}`);

    writeConsole(`${Array.isArray(harcos.merkozesek)}`);

    writeConsole(`${harcos instanceof Object}`);
    writeConsole(`${harcos.merkozesek instanceof Array}`);

    writeConsole(`${harcos.constructor == Object}`);
    writeConsole(`${harcos.merkozesek.constructor == Array}`);
}