/*
* Kata name: Snakes & Ladders
* Kata kyu: 6
* Link on kata: https://www.codewars.com/kata/5821cd4770ca285b1f0001d5
* Solution by: stnnickk
* stnnickk on codewars.com: https://www.codewars.com/users/stnnickk
*/

const snakesAndLadders = (board, dice) => {
    let cell = 0

    for (let i = 0; i < dice.length; i++) {
        if (cell + dice[i] < board.length) {
            cell += dice[i]

            if (board[cell] > 0) {
                cell += board[cell]
            } else if (board[cell] < 0)  {
                 cell -= Math.abs(board[cell])
            }
        }
    }

    return cell
}