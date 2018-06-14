/**
    The previous chapter introduced the standard function Math.min that returns
    its smallest argument. We can build something like that now. Write a function
    min that takes two arguments and returns their minimum.
 */

function min() {
    let minimum = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < minimum) {
            minimum = arguments[i];
        }
    }
    return minimum;
}

// I have extended the solution, to mimic standard Math.min
console.log(min(8,2)) // 2
console.log(min(2,3,4,7,1,4)); // 1
console.log(min(0,9,-7,3)); // -7