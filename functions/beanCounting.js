/**
    You can get the Nth character, or letter, from a string by writing "string"[N] .
    The returned value will be a string containing only one character (for example,
    "b" ). The first character has position zero, which causes the last one to be
    found at position string.length - 1 . In other words, a two-character string
    has length 2, and its characters have positions 0 and 1.
    Write a function countBs that takes a string as its only argument and returns
    a number that indicates how many uppercase “B” characters there are in the
    string.
    Next, write a function called countChar that behaves like countBs , except
    it takes a second argument that indicates the character that is to be counted
    (rather than counting only uppercase “B” characters). Rewrite countBs to
    make use of this new function.
 */

function countBs(str) {
    let count = 0;
    const strArr = str.split('');
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === 'B') count++;
    }
    return count;
}

// console.log(countBs("Bread")); // 1
// console.log(countBs("REBRAND")); // 1
// console.log(countBs("bigBang")); // 1
// console.log(countBs("BELABOR")); // 2
// console.log(countBs("Aminu")); // 0

function countChar(str, letter) {
    let count = 0;
    const strArr = str.split('');
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === letter) count++;
    }
    return count;
}

// console.log(countChar("Aminu", 'i')); // 1
// console.log(countChar("Prestidigitation", 'i')); // 4
// console.log(countChar("JavaScript", 'a')); // 2
// console.log(countChar("Fasting Feast", 'F')); // 2
// console.log(countChar("PHP", 'J')); // 0

// Refactor of countBs to make use of countChar
function countBChars(str, letter='B') {
    let count = 0;
    const strArr = str.split('');
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === letter) count++;
    }
    return count;
}

console.log(countBChars("Bread")); // 1
console.log(countBChars("REBRAND")); // 1
console.log(countBChars("bigBang")); // 1
console.log(countBChars("BELABOR")); // 2
console.log(countBChars("Aminu")); // 0

console.log(countBChars("Bread", 'a')); // 1
console.log(countBChars("REBRAND", 'R')); // 2
console.log(countBChars("bigBanG", 'G')); // 1
console.log(countBChars("BELABOR", 'A')); // 1
console.log(countBChars("console", 'b')); // 0