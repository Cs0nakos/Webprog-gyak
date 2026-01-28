export default class Tasks {
    // 1. HTML táblázat generálása
    // Felhasználókat leíró objektum (id, name, email) tömbből hozz létre HTML <tr> sorokat három <td> cellával.
    // Bemenet: user objektum [{ id: number, name: string, email: string }, ...]
    // Kimenet: HTML string '<tr><td>...</td><td>...</td><td>...</td></tr><tr>...'
    generateTable(user) {
        let ki = '';

        if (!user || user.length == 0) {
            return ki;
        }

        for (let i = 0; i < user.length; i++) {
            if (user[i].id === null || user[i].name === null || user[i].email === null) {
                ki += `<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>`;
                continue;
            }
            ki += `<tr><td>${user[i].id}</td><td>${user[i].name}</td><td>${user[i].email}</td></tr>`;
        }

        return ki;
    }

    // 2. Aktív felhasználók szűrése
    // Felhasználók listájából add vissza csak azokat, akik aktívak (isActive === true).
    // Bemenet: users lista [{ isActive: boolean, ... }, ...]
    // Kimenet: aktív felhasználók listája
    getActiveUsers(users) {
        let ki = [];

        if (!users || users.length == 0) {
            return ki;
        }

        for (let i = 0; i < users.length; i++) {
            if (users[i].isActive === true) {
                ki.push(users[i]);
            }
        }
        return ki;
    }

    // 3. Navigációs menüpontok generálása
    // Menüpont objektumokból (title, url) hozz létre <li><a></a></li> HTML elemeket.
    // Bemenet: items lista [{ title: string, url: string }, ...]
    // Kimenet: HTML string '<li><a href="...">...</a></li>...'
    generateMenu(items) {
        let ki = '';

        if (!items || items.length == 0) {
            return ki;
        }

        for (let i = 0; i < items.length; i++) {
            if (!items[i] || items[i].url === undefined || items[i].title === undefined) {
                return ki;
            }
            else {
                ki += `<li><a href="${items[i].url}">${items[i].title}</a></li>`;
            }
        }

        return ki;
    }

    // 4. Hibás űrlapmező ellenőrzése
    // Űrlapmezők listájáról döntsd el, van-e köztük érvénytelen (isValid === false).
    // Bemenet: fields lista [{ isValid: boolean, ... }, ...]
    // Kimenet: boolean
    hasInvalidField(fields) {
        if (!fields || fields.length == 0 || fields === null) {
            return false;
        }

        for (let i = 0; i < fields.length; i++) {
            if (fields[i] === null || fields[i].isValid === undefined) {
                continue;
            }
            if (fields[i].isValid === false) {
                return true;
            }
        }
        return false;
    }

    // 5. Hibaüzenetek kigyűjtése
    // Űrlapmezőkből gyűjtsd ki a hibás mezők message mezőit.
    getErrorMessages(fields) {
        if (!fields || fields.length == 0 || fields === null) {
            return [];
        }
        let ki = [];

        for (let i = 0; i < fields.length; i++) {
            if (fields[i] === null || fields[i].message === undefined) {
                continue;
            }
            if (fields[i].isValid === false) {
                ki.push(fields[i].message);
            }
        }
        return ki;
    }


    //#region Egyéb feladatok (nem kötelező)
    // 6. Webshop kosár végösszeg számítása
    // Kosártételekből (price, quantity) számítsd ki a teljes összeget.
    calculateCartTotal(cart) {
    }

    // 7. Termékek rendezése ár szerint
    // Termékek listáját rendezd növekvő ár szerint.
    sortProductsByPrice(products) {
    }

    // 8. Lapozás (pagination)
    // Egy lista elemeiből add vissza az adott oldalhoz tartozó elemeket.
    getPage(items, page, pageSize) {
    }

    // 10. 2D lista napi összesítése
    // Egy kétdimenziós számlistában minden belső lista egy nap adatait tartalmazza - számíts napi összeseket.
    getDailyTotals(stats) {
    }
    // #endregion
}