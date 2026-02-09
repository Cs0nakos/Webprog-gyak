export default class RegexTasks {

    //#region Test
    // Leírás: megvizsgálja, hogy az átadott szöveg decimális valós számot tartalmaz-e
    // Bemenet: string | null
    // Kimenet: bool
    isNumber(text) {
        if (!text) return false;

        //let re = new RegExp('\\d', 'ig');
        const re = /^\-?\d+\.?\d*$/;

        return re.test(text);
    }

    // Leírás: megvizsgálja, hogy az átadott szöveg fix formátumú dátumot tartalmaz-e
    // Formátum: éééé-hh-nn
    // Bemenet: string | null
    // Kimenet: bool
    isDate(text) {
        if (!text) return false;
        
        const re = /\d\d\d\d\-?\d\d\-?\d\d/;
        
        return re.test(text);
    }
    //#endregion

    //#region Exec
    // Leírás: megkeresi az átadott forráskódban a teszt metódusokat. A tesztmetódusok testneve megvizsgálja, hogy az átadott szöveg fix formátumú dátumot tartalmaz-e
    // Bemenet: string | null
    // Kimenet: bool
    findTests(text) {
        
    }
    //#endregion

    //#region string.match

    //#endregion

    //#region string.replace

    //#endregion
}