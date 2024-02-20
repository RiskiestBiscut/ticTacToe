
// document.querySelector('button').addEventListener('click', reset)
// let addSelector = document.querySelectorAll('li')
// let player = 1
// let gameState = ['','','','','','','','','']

// const winningConditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];

// for (let i=0; i < addSelector.length; i++) {
//     addSelector[i].addEventListener('click', playerChoice)
// }


// function playerChoice(e) {
//     console.log('it worked!')
//     let choice = e.target.className

//     if (player === 1 &&  e.target.innerText === '') {
//         e.target.innerText = 'X'
//         player = 2
//         gameState[choice] = 'X'
//     } else if (player === 2 && e.target.innerText === '') {
//         e.target.innerText = 'O'
//         player = 1
//         gameState[choice] = 'O'
//     }
//     console.log(gameState)
//     whoWon(checkGameOver())
// }

// function checkGameOver() {

// for (let i=0; i<winningConditions.length; i++) {
//     const winCondition = winningConditions[i]
//     let a = gameState[winCondition[0]]
//     let b = gameState[winCondition[1]]
//     let c = gameState[winCondition[2]]

//     if (a === '' || b === '' || c === '') {
//         continue;
//     }
//     if (a === b && b === c) {
//         return true

//     }
// }
// }

// function whoWon(func) {
//     if (func && player === 2) {
//         document.querySelector('h1').innerText = 'X player wins!'
//     } else if (func && player === 1) {
//         document.querySelector('h1').innerText = 'O player wins!'
//     }
// }

// function reset() {
//     player = 1;
//     gameState = ['','','','','','','','','']
//     for (let i=0; i < addSelector.length; i++) {
//         addSelector[i].innerText = ''
//     }
//     document.querySelector('h1').innerText = ''
// }

class Game {
    constructor(player, gameState, winningConditions) {
        this.player = player
        this.gameState = gameState
        this.winningConditions = winningConditions
    }

    initialize() {
        for (let i=0; i < document.querySelectorAll('li').length; i++) {
            document.querySelectorAll('li')[i].addEventListener('click',(e) => {
                console.log('it worked!')
                let choice = e.target.className
                console.log(this)
                
                if (this.player === 1 &&  e.target.innerText === '') {
                    e.target.innerText = 'X'
                    this.player = 2
                    this.gameState[choice] = 'X'
                } else if (this.player === 2 && e.target.innerText === '') {
                    e.target.innerText = 'O'
                    this.player = 1
                    this.gameState[choice] = 'O'
                }
                console.log(this.gameState)
                this.whoWon()
            })
        }
        document.querySelector('button').addEventListener('click',() => {
            this.player = 1;
            this.gameState = ['','','','','','','','','']
            for (let i=0; i < document.querySelectorAll('li').length; i++) {
                document.querySelectorAll('li')[i].innerText = ''
            }
            document.querySelector('h1').innerText = ''
        })
    }

    checkGameOver() {

        for (let i=0; i<winningConditions.length; i++) {
            const winCondition = winningConditions[i]
            let a = this.gameState[winCondition[0]]
            let b = this.gameState[winCondition[1]]
            let c = this.gameState[winCondition[2]]
        
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                return true
        
            }
        }
        }

        whoWon() {
            if (this.checkGameOver() && this.player === 2) {
                document.querySelector('h1').innerText = 'X player wins!'
            } else if (this.checkGameOver() && this.player === 1) {
                document.querySelector('h1').innerText = 'O player wins!'
            }
        }
}

player = 1
gameState = ['','','','','','','','','']
winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
const ticTacToe = new Game(player, gameState, winningConditions)

ticTacToe.initialize()

console.log(ticTacToe.gameState)


