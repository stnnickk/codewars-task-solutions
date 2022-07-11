/*
* Kata name: A Brave New Wordle
* Kata kyu: 5
* Link on kata: https://www.codewars.com/kata/62013b174c72240016600e60
* Solution by: stnnickk
* stnnickk on codewars.com: https://www.codewars.com/users/stnnickk
*/

function resolver(guess, solution) {
    const cards = []
    solution = solution.split('')

    for (let i = 0; i < guess.length; i++) {
        let isThereALetter = false

        for (let j = 0; j < solution.length; j++) {
            if (guess[i] === solution[i]) {
                cards.push('g')
                solution[i] = null
                isThereALetter = true
                break
            }
            if (guess[i] === solution[j] && solution[j] !== guess[j]) { 
                cards.push('y')
                solution[j] = null
                isThereALetter = true
                break
            } 
        }

        if (isThereALetter === false) cards.push('b')
    }

    return cards.join('')
}