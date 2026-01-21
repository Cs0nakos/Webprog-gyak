export default class List {
    #data = []

    get length() {
        return this.#data.length
    }

    // #region Konstruktorok
    constructor(arg) {
        this.#data = [];
        if (typeof arg === 'number') {
            this.#data = new Array(arg);
        } else if (this.#isIterable(arg)) {
            this.addRange(arg)
        }
    }
    //#endregion

    //#region Egyéb metódusok
    [Symbol.iterator]() {
        return this.#data[Symbol.iterator]()
    }

    toString() {
        return this.#data.toString();
    }

    #isIterable(obj) {
        return obj != null && typeof obj[Symbol.iterator] === "function"
    }
    //#endregion

    // #region Elem hozzáadása / eltávolítása
    add(item) {
        if (item === undefined) {
            return
        }
        this.#data.push(item)
    }

    addRange(iterable) {
        if (this.#isIterable(iterable)) {
            for (let elem of iterable) {
                this.add(elem)
            }
        }
    }

    insert(index, item) {
        if (index >= 0 && index <= this.#data.length) {
            this.#data.splice(index, 0, item)
        }
    }

    insertRange(index, iterable) {
        if (this.#isIterable(iterable)) {
            let current = index
            if (current >= 0 && current <= this.#data.length) {
                for (let item of iterable) {
                    this.insert(current, item)
                    current++
                }
            }
        }
    }

    remove(item) {
        let index = this.#data.indexOf(item)
        if (index > -1) {
            this.#data.splice(index, 1)
            return true
        }
        return false
    }

    removeAt(index) {
        if (index >= 0 && index < this.#data.length) {
            this.#data.splice(index, 1)
        }
    }

    removeAll(predicate) {
        if (typeof predicate !== 'function') return 0;

        let eredetiHossz = this.#data.length
        this.#data = this.#data.filter(item => !predicate(item));
        
        return eredetiHossz - this.#data.length
    }

    clear() {
        this.#data = []
    }
    //#endregion

    // #region Keresés és vizsgálat
    // A feladat szerint az üres metódusokat üresen hagyom
    contains(item) {
    }

    indexOf(item) {
    }

    find(predicate) {
    }

    findAll(predicate) {
    }

    exists(predicate) {
    }
    //#endregion

    // #region Rendezés és módosítás
    sort(compare) {
    }

    reverse(start = 0, end = this.#data.length - 1) {
    }

    forEach(action) {
    }
    //#endregion

    // Leképezés
    select(selector) {
    }

    firstOrDefault(predicate) {
    }

    any(predicate) {
    }

    all(predicate) {
    }

    count(predicate) {
        if (predicate === undefined) {
            return this.#data.length
        }
        if (typeof predicate !== 'function') return 0;

        let counter = 0
        for (let i = 0; i < this.#data.length; i++) {
            if (predicate(this.#data[i])) {
                counter++
            }
        }
        return counter
    }

    sum(predicate) {
    }
}