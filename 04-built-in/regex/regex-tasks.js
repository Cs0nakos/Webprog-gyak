export default class RegexTasks {

    //#region Test
    // Leírás: megvizsgálja, hogy az átadott szöveg decimális egész számot tartalmaz-e
    // Bemenet: string | null
    // Kimenet: bool
    isInt(text) {
        const reg = /^[+-]?\d+$/;

        return reg.test(text);
    }

    // Leírás: megvizsgálja, hogy az átadott szöveg decimális valós számot tartalmaz-e
    // Bemenet: string | null
    // Kimenet: bool
    isFloat(text) {
        // 10.
        const reg1 = /^[+-]?\d+\.$/;
        // .10
        const reg2 = /^[+-]?\.\d+$/;
        // 10.10
        const reg3 = /^[+-]?\d+\.\d+$/;

        const reg = new RegExp(`${reg1.source}|${reg2.source}|${reg3.source}`);

        return reg.test(text);
    }
    
    // Leírás: megvizsgálja, hogy az átadott szöveg tudományos formátumú számot tartalmaz-e
    // Bemenet: string | null
    // Kimenet: bool
    isScientific(text) {
        const reg = /^[+-]?\d+\.\d+([eE][+-]?\d+)?$/;

        return reg.test(text);
    }

    // Leírás: megvizsgálja, hogy az átadott szöveg fix formátumú dátumot tartalmaz-e
    // Formátum: éééé-hh-nn
    // Bemenet: string | null
    // Kimenet: bool
    isDate(text) {
        //const reg = /\d\d\d\d-\d\d-\d\d/;
        const reg = /^\d{4}-\d{2}-\d{2}$/;
        return reg.test(text);
    }
    //#endregion

    //#region Exec
    // Leírás: megkeresi az átadott forráskódban a teszt metódusokat.
    // A tesztmetódusok neve
    // - "test_" szöveggel kezdődik,
    // - a név után zárójelben a paraméterlista található
    // Bemenet: string | null
    // Kimenet: string[]
    findTestsExec(text) {

        //const re = new RegExp('test_\\w+\\(', 'i');
        if (text === null) {
            return null;
        }

        const re = /test_\w+\(/ig
        let results = [];
        let arr;

        while((arr = re.exec(text)) != null){
            results.push(arr[0].slice(0, -1));
        }
        
        return results;

    }
    //#endregion

    //#region string.match
    // Leírás: megkeresi az átadott forráskódban a teszt metódusokat.
    // A tesztmetódusok neve "test_" szöveggel kezdődik és a név után
    // a paraméterek listája áll zárójelben. A megtalált metódusok
    // nevét adja vissza.
    // Bemenet: string | null
    // Kimenet: string[]
    findTestsMatch(text) {
        if (text === null) {
            return null;
        }

        const re = /test_\w+\(/ig
        let results = [];
        let arr;
        let m = text.match(re);
        console.log(m);

        return m?.map(m => m.slice(0, -1));

    }

    //#endregion

    //#region string.replace
    // Leírás: a template szövegben a {} jelben írt helyettesítőket
    // lecseréli az obj megfelelő attribútumára.
    // Pl. A {id} helyére beírja az obj.id értékét.
    // Az így kapott szöveget adja vissza.
    // Bemenet: string | null, object | null
    // Kimenet: string
    applyTemplate(template, obj) {

    }

    //#endregion
}