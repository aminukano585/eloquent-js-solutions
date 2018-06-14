/**
    We’ve seen that % (the remainder operator) can be used to test whether a
    number is even or odd by using % 2 to see whether it’s divisible by two. Here’s
    another way to define whether a positive whole number is even or odd:
        • Zero is even.
        • One is odd.
        • For any other number N, its evenness is the same as N - 2.
    Define a recursive function isEven corresponding to this description. The
    function should accept a single parameter (a positive, whole number) and return
    a Boolean.
    Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
    way to fix this?
 */

// first solution
// function isEven(n) {
//     if (n == 0) return true;
//     else  if (n == 1) return false;
//     else return isEven(n - 2);
// }

// second solution solving the stack overflow error
function isEven(n) {
    if (n < 0) return isEven(n + 2); // to take care of negative integers
    else if (n == 0) return true;
    else if (n == 1) return false;
    else return isEven(n - 2);
}

console.log(isEven(50)); // true
console.log(isEven(75)); // false
console.log(isEven(-1)); // This will result in stack overflow (first solution) otherwise false
console.log(isEven(-4)); // This will result in stack overflow (first solution) otherwise true