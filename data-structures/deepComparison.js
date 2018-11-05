/*
    The == operator compares objects by identity. But sometimes you’d prefer to
    compare the values of their actual properties.
    Write a function deepEqual that takes two values and returns true only if they
    are the same value or are objects with the same properties, where the values
    of the properties are equal when compared with a recursive call to deepEqual .
    To find out whether values should be compared directly (use the === operator
    for that) or have their properties compared, you can use the typeof operator.
    If it produces "object" for both values, you should do a deep comparison.
    But you have to take one silly exception into account: because of a historical
    accident, typeof null also produces "object" .
    The Object.keys function will be useful when you need to go over the prop-
    erties of objects to compare them.
*/
function deepEqual(val1, val2) {
    if (val1 === val2) {
        return true
    } else if ((typeof val1 == 'object' && val1 != null) && (typeof val2 == 'object' && val2 != null)) {
        for (let val of Object.keys(val1)) {
            if (!val2.hasOwnProperty(val) || !deepEqual(val1[val], val2[val])) return false;
        }
        return true;
    } else return false
}

const obj1 = {firstName: 'Aminu', lastName: 'Abubakar'};
const obj2 = {firstName: 'Aminu', lastName: 'Abubakar'};

console.log(deepEqual(obj1, obj2)); // true