/*
* Kata name: The Hashtag Generator
* Kata kyu: 5
* Link on kata: https://www.codewars.com/kata/52449b062fb80683ec000024
* Solution by: stnnickk
* stnnickk on codewars.com: https://www.codewars.com/users/stnnickk
*/

function generateHashtag2(str) {
    const hashtag = str.trim().length == 0 ? false : '#' + str.split(' ').map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join('')

    return hashtag.length >= 140 ? false : hashtag
}