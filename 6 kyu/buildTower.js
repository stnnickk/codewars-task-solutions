/*
* Kata name: Build Tower
* Kata kyu: 6
* Link on kata: https://www.codewars.com/kata/576757b1df89ecf5bd00073b
* Solution by: stnnickk
* stnnickk on codewars.com: https://www.codewars.com/users/stnnickk
*/

function towerBuilder(nFloors) {
    const pyramid = []
  
    for (let i = 0, block = 1; i < nFloors; i++, block += 2) {
        const space = ' '.repeat(nFloors - i - 1)
        const row = space + '*'.repeat(block) + space
    
        pyramid.push(row)
    } 
  
    return pyramid
}