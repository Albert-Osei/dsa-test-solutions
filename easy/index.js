/**
 * PROBLEM 1: The Roman to Integer
 * Given a roman numeral, convert it to an integer
 * @param {String} s
 * @return {number}
 */
var romanToInt = function(s) {

    const sym = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0
    for (let i=0; i<s.length; i++) {
        const cur = sym[s[i]]
        const next = sym[s[i+1]]

        if (cur < next) {
            result += next - cur // IV = 5 - 1 = 4
            i++
        } else {
            result += cur
        }
    }
    return result
}

console.log(romanToInt('IX'))

/**
 * PROBLEM 2: Longest Common Prefix
 * Find the longest prefix string amongst an array of strings
 * @param {String[]} strs
 * @return {String}
 */
var longestCommonPrefix = function(strs) {
    //Return nothing if strs is empty
    if (!strs.length) return ''

    // Loop through the characters of the first string
    for (let i = 0; i < strs[0].length; i++) {
        // Loop through the remaining words
        for (let j = 0; j < strs.length; j++) {
            // Check if the character of the first string is the same as that of the current position of the word
            if (strs[0][i] !== strs[j][i]) {
                return strs[0].slice(0, 1)
            }
        }
    }
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))