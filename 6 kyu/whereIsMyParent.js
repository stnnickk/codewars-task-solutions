/*
* Kata name: Where is my parent!? (cry)
* Kata kyu: 6
* Link on kata: https://www.codewars.com/kata/58539230879867a8cd00011c
* Solution by: stnnickk
* stnnickk on codewars.com: https://www.codewars.com/users/stnnickk
*/

function findChildren(dancingBrigade) {
    const result = []
    dancingBrigade = dancingBrigade.split('').sort() // Sort to search for children for parents in alphabetical order.

    for (let i = 0; i < dancingBrigade.length; i++) {
        const parent = dancingBrigade[i]

        // If it's a parent, start looking for their child.
        if (parent === parent.toUpperCase()) {
            result.push(parent) // Let's add a parent first.

            // Search child for parent.
            for (let j = i + 1; j < dancingBrigade.length; j++) {
                const child = dancingBrigade[j]

                if (parent === child.toUpperCase()) {
                    result.push(child)
                }
            }
        }
    }

    return result
}