/*
* Kata name: Pair of gloves
* Kata kyu: 6
* Link on kata: https://www.codewars.com/kata/58235a167a8cb37e1a0000db
* Solution by: stnnickk
* stnnickk on codewars.com: https://www.codewars.com/users/stnnickk
*/

function numberOfPairs(gloves) {
    const glovesList = {}
    let result = 0

    for (const glove of gloves) {
        glovesList[glove] = glovesList[glove] + 1 || 1
    }

    for (const glove in glovesList) {
        result += Math.floor(glovesList[glove] / 2)
    }
    
    return result
}