// JavaScript String feladatok 1

function test(label, received, expected) {
    console.log(label)
}

// 1. Visszaadja az első karaktert vagy üres sztringet.
function firstChar(text) {

}
test('firstChar', firstChar('Hello'), 'H')
test('firstChar', firstChar('A'), 'A')
test('firstChar', firstChar(''), '')
test('firstChar', firstChar('  '), ' ')

// 2. Eltávolítja a chars sztringben szereplő karaktereket a text sztringből.
function removeChars(text, chars) {

}
test('removeChars', removeChars('Hello', 'hl'), 'Heo')
test('removeChars', removeChars('JavaScript', 'a'), 'JvScript')
test('removeChars', removeChars('', 'abc'), '')
test('removeChars', removeChars('Test', ''), 'Test')

// 3. Igazat ad vissza, ha text a prefix szöveggel kezdődik, kis- és nagybetű megkülönböztetés nélkül.
function startsWithIgnoreCase(text, prefix) {
    
}
test('startsWithIC', startsWithIgnoreCase('Hello', 'he'), true)
test('startsWithIC', startsWithIgnoreCase('Hello', 'Hi'), false)
test('startsWithIC', startsWithIgnoreCase('', 'a'), false)
test('startsWithIC', startsWithIgnoreCase('Test', ''), true)

// 4. Visszaadja az első karakter indexét a text szövegben, amely nincsen benne a chars szövegben.
function skipChars(text, chars) {
    
}
test('skipChars', skipChars('  Hello', ' \t\n\r'), 2)
test('skipChars', skipChars('  Hello', ' Hell'), 6)
test('skipChars', skipChars('  Hello', ''), 0)
test('skipChars', skipChars('  Hello', ' Hello'), 7)

// 5. A paraméterként kapott év, hó és nap értékekből egy dátum sztringet állít elő, a következő formátumban: yyyy-mm-dd. Tehát az évet négy, a hónapot és a napot két számjeggyel jeleníti meg. Érvénytelen paraméterekre null értéket ad vissza.
function formatDate(y, m, d) {
    
}
test('formatDate', formatDate(2025, 12, 15), '2025-12-15')
test('formatDate', formatDate(null, 12, 15), null)
test('formatDate', formatDate(2025, 13, 15), null)
test('formatDate', formatDate(0, 12, 15), null)