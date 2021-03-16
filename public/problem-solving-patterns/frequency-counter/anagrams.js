/**
 * Valid Anagram using frequency counter object
 * @param {*} str1 
 * @param {*} str2 
 * @returns {boolean}
 */
function validAnagram(str1, str2){
    // add whatever parameters you deem necessary - good luck!
    if (str1.length !== str2.length) {
        return false;
    }
    
    let fqCounter = {};
    for(let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        fqCounter[letter] ? fqCounter[letter] += 1 : fqCounter[letter] = 1;
    }
    for(let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        if (! fqCounter[letter]) {
            return false;
        }
        if(fqCounter[letter]) {
            fqCounter[letter] -= 1;
        } 
    }
    return true;
}
