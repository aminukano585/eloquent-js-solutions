/*
    Arrays have a reverse method which changes the array by inverting the order in
    which its elements appear. For this exercise, write two functions, reverseArray
    and reverseArrayInPlace . The first, reverseArray , takes an array as argument
    and produces a new array that has the same elements in the inverse order. The
    second, reverseArrayInPlace , does what the reverse method does: it modifies
    the array given as argument by reversing its elements. Neither may use the
    standard reverse method.
    Thinking back to the notes about side effects and pure functions in the
    previous chapter, which variant do you expect to be useful in more situations?
    Which one runs faster?
*/
function reverseArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[arr.length - i - 1]);
    }
    return newArr;
}

function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]]; // array destructuring
    }
    return arr;
}

let arr1 = [3, 4, 7, 11];
let arr2 = [8, 2, 4, 52];

console.log(arr1); // [3, 4, 7, 11]
console.log(reverseArray(arr1)); // [11, 7, 4, 3]
console.log(arr1); // [3, 4, 7, 11] there is NO side-effect

console.log(arr2); // [8, 2, 4, 52]
console.log(reverseArrayInPlace(arr2)); // [52, 4, 2, 8]
console.log(arr2); // [52, 4, 2, 8] there is side-effect