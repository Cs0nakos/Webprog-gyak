export default class List {
    #data = null

    //public int Length { get; }
    get length() {
        return this.#data.length
    }

    // #region Konstruktorok
    // List<T>() - üres lista létrehozása
    // List<T>(IEnumerable<T> iterable) - lista létrehozása a megadott felsorolható elemekből 
    // List<T>(Int32) - megadott kapacitású lista létrehozása
    constructor(arg) {
        this.#data = [];
        //if (arg === undefined) {
        //    return this.#data = []
        //}
        if (this.isIterable(arg)) {
        //    this.#data = [...arg] // 'a', 'b'
        //    this.#data = ['a', 'b']
            this.addRange(arg)
        }
        else if (!isNaN(arg)) {
            this.#data = new Array(arg)
        }
         
    }
    //#endregion

    //#region Egyéb metódusok
    // Ahhoz, hogy a List osztályunk példányai iterálhatóak legyenek,
    // azaz végig lehessen lépegetni az elemein, az alábbi metódust
    // kell implemenálni.
    [Symbol.iterator]() {
        return this.#data[Symbol.iterator]()
    }

    #isIterable(obj) {
        return obj != null && typeof obj[Symbol.iterator] === "function"
    }
    //#endregion

    // #region Elem hozzáadása / eltávolítása
    // void Add(T item) - Egy elem hozzáadása a lista végéhez
    add(item) {
        if (item != undefined) {
            return
        }
        this.#data.push(item)
    }
    // void AddRange(IEnumerable<T> iterable) - Több elem hozzáadása egyszerre
    addRange(iterable) {
    }
    // void Insert(int index, T item) - Elem beszúrása adott indexre
    insert(index, item) {
    }
    // void InsertRange(int index, IEnumerable<T> items) - Elem beszúrása adott indexre
    insertRange(index, iterable) {
    }
    // bool Remove(T item) - Az első egyező elem törlése
    remove(item) {
    }

    // void RemoveAt(int index) - Elem törlése index alapján
    removeAt(index) {
    }

    // int RemoveAll(Predicate<T>) - Minden elem törlése, ami megfelel a feltételnek
    removeAll(predicate) {
    }

    // Clear() - A lista teljes ürítése
    clear() {
    }
    //#endregion

    // #region Keresés és vizsgálat
    // bool Contains(T item) - Megnézi, hogy az elem szerepel-e
    contains(item) {
    }
    // int IndexOf(T item) - Az elem indexe (vagy -1)
    indexOf(item) {
    }
    // T Find(Predicate<T>) - Első elem, ami megfelel a feltételnek
    find(predicate) {
    }

    // FindAll(Predicate<T>) - Összes megfelelő elem
    findAll(predicate) {
    }

    // bool Exists(Predicate<T>) - Van-e legalább egy megfelelő elem
    exists(predicate) {
    }
    //#endregion

    // #region Rendezés és módosítás
    // Sort() - Lista rendezése
    // Sort(Comparison<T>) - Egyedi rendezési logika
    sort(compare) {
    }
    // Reverse() - Lista megfordítása
    reverse(start = 0, end = this.#data.length - 1) {
    }
    // void ForEach(Action<T>) - Minden elemre művelet végrehajtása
    forEach(action) {
    }
    //#endregion

    // List<U> Select() - Leképezés (objektum → másik forma)
    select(selector) {
    }
    // FirstOrDefault() - Első elem vagy null / default
    firstOrDefault(predicate) {
    }
    // Any() - Van-e legalább egy elem
    any(predicate) {
    }

    // All() - Minden elem megfelel-e
    all(predicate) {
    }

    // Count() - Elemek száma (feltétellel is)
    count(predicate) {
    }

    sum(predicate) {
    }
}
