import { getConsole } from '../../lib/console/console.js'

let _console = null;

function skipWhileChars(text, chars, ix = 0) {
    
}


function skipUntilChars(text, chars, ix = 0) {

}


function splitByChars(text, chars = ' ') {

}


function getInnerHTML(text, tag) {

}


function getAttribute(text, tag, attribute) {

}


function normalizeSpaces(text, maxCount = 1) {

}


function stripStart(text, chars = ' \n\t') {

}


function stripEnd(text, chars = ' \n\t') {

}



function test(label, received, expected) {
    if (!Array.isArray(received)) received = [received]
    let result = true
    for (let i=0; i<expected.length; i++) {
        if (received[i] != expected[i]) {
            result = false
            break
        }
    }
    _console.writeln(`${label}: ${result ? 'passed' : 'failed'}`)
    return true
}

async function main() {
    _console = await getConsole();
   _console.setConsoleTop(0.3 * document.body.clientHeight);
   // skipWhileChars
   test('skipWhileChars', skipWhileChars('\n\t 1 2 3  ', '\t \n'), '1 2 3  ')
   test('skipWhileChars', skipWhileChars('', '\t \n'), '')
   test('skipWhileChars', skipWhileChars('1 \t2 \n3  ', '\t \n'), '1 2 3  ')
   // skipUntilChars
   test('skipUntilChars', skipUntilChars('\n\t  1 2 3  ', '\t \n'), '\n\t  1 2 3  ')
   test('skipUntilChars', skipUntilChars('', '\t \n'), '')
   test('skipUntilChars', skipUntilChars('1 \t2 \n3  ', '\t \n'), ' \t2 \n3  ')
   // splitByChars
   test('splitByChars', splitByChars('a:b,c;d', ':,;'), ['a','b','c','d'])
   test('splitByChars', splitByChars('', ':,;'), [''])
   test('splitByChars', splitByChars('a:b:c'), )
   // getInnerHTML
   test('getInnerHTML', getInnerHTML(), )
   test('getInnerHTML', getInnerHTML(), )
   test('getInnerHTML', getInnerHTML(), )
   test('getInnerHTML', getInnerHTML(), )
   // getAttribute
   test('getAttribute', getAttribute(), )
   test('getAttribute', getAttribute(), )
   test('getAttribute', getAttribute(), )
   test('getAttribute', getAttribute(), )
   // normalizeSpaces
   test('normalizeSpaces', normalizeSpaces(), )
   test('normalizeSpaces', normalizeSpaces(), )
   test('normalizeSpaces', normalizeSpaces(), )
   test('normalizeSpaces', normalizeSpaces(), )
   // stripStart
   test('stripStart', stripStart(), )
   test('stripStart', stripStart(), )
   test('stripStart', stripStart(), )
   test('stripStart', stripStart(), )
   // stripEnd
   test('stripEnd', stripEnd(), )
   test('stripEnd', stripEnd(), )
   test('stripEnd', stripEnd(), )
   test('stripEnd', stripEnd(), )
}

main();
