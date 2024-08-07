const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const sliceExpr = (expr) => {
        let arr = [];
        for (let i = 0; i < expr.length; i += 10) {
            const slice = expr.slice(i, i + 10);
            arr.push(slice);
        }
        return arr;
    };

    const decodeExpr = (arr) => {
        const numsToMorse = (arr) => {
            let morseCode = '';

            arr.forEach(element => {
                element = element.replace(/10/g, '.');
                element = element.replace(/11/g, '-');
                element = element.replace(/\*\*\*\*\*\*\*\*\*\*/g, '');
                element = element.replace(/0/g, '');

                morseCode += element + ' ';
            });
            return morseCode.trim();
        };
        return numsToMorse(arr);
    };

    const arr = sliceExpr(expr);
    const morseCode = decodeExpr(arr);
    let result = '';

    const morseSymbols = morseCode.split(' ');
    
    morseSymbols.forEach(symbol => {
        if (symbol in MORSE_TABLE) {
            result += MORSE_TABLE[symbol];
        } else {
            result += ' ';
        }
    });
    return result.trim();
};

module.exports = {
    decode
}
