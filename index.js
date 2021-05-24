function add(a, b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}


function increment(n) {
    return ++n;
}

function decrement(n) {
    return --n;
}

function makeInt(string = '9000') {
    parseInt(string, 10);
    return parseInt(string, 10);
}

function preserveDecimal(string = '2.222') {
    parseFloat(string);
    return parseFloat(string);
}