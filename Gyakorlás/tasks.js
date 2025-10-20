// DOM lekérdezések
function getDomQuery() {
    // 1. Válaszd ki a "dom-query" azonosítójú <section> elemet és színezd a hátterét fehérre!
    let el = document.getElementById("dom-query");
    el = document.querySelector("#dom-query");
    el.style.backgroundColor = "white";
}

function countOrderedLists() {
    // 2. Számold meg, hány <ol> elem van az oldalon!
    let ols = document.getElementsByTagName("ol");
    ols = document.querySelectorAll("ol");
    alert(ols.length);
}

function firstH2Content() {
    // 3. Írd ki az első <h2> elem HTML és szöveges tartalmát!
    let h2 = document.getElementsByTagName("h2")[0];
    alert(h2.innerHTML, h2.textContent);
}

function firstLinkHref() {
    // 4. Írd ki az első link (<a>) href attribútumát!
    let a = document.getElementsByTagName("a")[0];
    alert(a.getAttribute("href"));
}

function removeHighlightClass() {
    // 5. Keress meg minden .highlight osztályú elemet és töröld az osztályt az elemekről!
    let highlights = document.querySelectorAll(".highlight");
    for (let el of highlights) {
        el.classList.remove('highlight');
        console.log(el);
    }
    
}

function parentAndFirstChild() {
    // 6. Keresd meg az első <ol> típusú elemet, és írd ki a szülőelemének és az első gyerekelemének az azonosítóját!
    let ol = document.getElementsByTagName("ol")[0];
    alert("Szülő azon: " + ol.parentElement.id + "\nFirst Child azon: " + ol.firstElementChild.id);
}

// Eseménykezelés
function menuClickAlert() {
    // 1. A menü első eleméhez adj meg egy eseménykezelőt, amelyre a kattintásra felugró ablakban kiírja a menüpont tartalmát.
function onMenuClick(event) {
    alert(event.target.innerHTML);
}

    let el = document.querySelector("body > header > nav > ul > li:nth-child(1) > a");
    el.addEventListener('click', onMenuClick());
}

function copyInput() {
    // 2. Az oldal tetején lévő <input> mezőnél írd ki valós időben a begépelt szöveget a <search-termp> elembe.
    let el = document.querySelector("#search");
    el.addEventListener('change', 
        event => {
            let src = event.target.value + event.key;
            let dst = document.querySelector("#search-termp");
            dst.innerHTML = src;
        }
    )
}

function blurOnHover() {
    // 3. az első <section> elem fölé húzva az egeret, homályosítsd el (filter: blur()) eseménykezelővel.
    let el = document.getElementsByTagName("section")[0];
    // el.addEventListener('mouseover',
    //     event => {
    //         el.style.filter = "blur(10px)";
    //     });
    // el.addEventListener('mouseout',
    //     event => {
    //         el.style.filter = "none";
    //     });
    function toggle(event) {
        el.classList.toggle('blurred');
    }
    el.addEventListener('mouseover', toggle);
    el.addEventListener('mouseout', toggle);
}

// JS alapok
function toUpperCase() {
    // 1. Írj egy függvényt, amely a beadott szöveget kiírja egy felugró ablakban.
}

function convertToNumber() {
    // 2. Kérj be egy stringet, és alakítsd át számmá. Felugró ablakban írd ki a számot, vagy ha nem konvertálható, írj ki hibaüzenetet.
}

function sum() {
    // 3. Készíts egy függvényt, ami a két bemeneti szám összegét adja vissza
}

function createPerson() {
    // 4. Hozz létre egy person objektumot name, age és job tulajdonságokkal.
}

function addToString() {
    // 5. Adj az előző objektumhoz egy metódust, ami a következő stringet adja vissza: "Név: {name}, Kor: {age}".
}

function createArrayAndAvg() {
    // 6. Készíts egy tömböt 10 véletlen számból, és számold ki az átlagukat.
}

function filterEvens() {
    // 7. Szűrd ki az összes páros számot a tömbből.
}

function twoCounters() {
    // 8. Írj két ciklust, amelyek 1-től 5-ig számolnak — for és while változatban.
}

function hello() {
    // 9. Készíts egy függvényt, ami felugró ablakban kiírja a "Hello, {name}!" szöveget, a name paraméter alapértelmezett értéke legyen "Vendég".
}


