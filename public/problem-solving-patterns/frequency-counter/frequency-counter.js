var FREQUENCY_COUNTER_NAMESPACE = {};

FREQUENCY_COUNTER_NAMESPACE.pattern_name = 'Frequency counter';


console.log(`${FREQUENCY_COUNTER_NAMESPACE.pattern_name} script works!`);


/**
 * 
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns {boolean}
 * Accetps two arrays, returns true if every 
 * value in the array has it's corresponding
 * value squared in the second array.
 * Frequency of valus must be the same.
 */
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for(let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex, 1);
    }
    return true;
}

const isSame = same([1, 2, 3, 2], [9, 1, 4, 4]);
console.log(isSame);