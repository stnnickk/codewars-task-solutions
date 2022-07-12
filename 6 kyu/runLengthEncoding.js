/*
* Kata name: Run-length encoding
* Kata kyu: 6
* Link on kata: https://www.codewars.com/kata/546dba39fa8da224e8000467
* Solution by: stnnickk
* stnnickk on codewars.com: https://www.codewars.com/users/stnnickk
*/

function runLengthEncoding(str) {
    const compressedData = []
    let symbolCounter = 1

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            symbolCounter++
        } else {
            compressedData.push([symbolCounter, str[i]])
            symbolCounter = 1
        }
    }

    return compressedData
}