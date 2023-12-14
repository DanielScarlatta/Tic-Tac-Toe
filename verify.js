// tabuleiro
const board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

// variaveis

const playerX = window.prompt('Digite o nome do jogador X: ')
const playerO = window.prompt('Digite o nome do jogador O: ')
const gameBoard  = document.getElementById('gameBoard')
const buttonInputClick = document.querySelectorAll('.boardOptions')
const winner = ''

// Atribuindo valores

let temp = ''
let playerWinner = ''
function playerCurrent() {
  if(temp === '') {
    temp = 'X'
    return temp
  }
  if(temp === 'X') {
    temp = 'O'
    playerWinner = playerO
    return temp
  }
  if(temp === 'O') {
    temp = 'X'
    playerWinner = playerX
    return temp
  }
}

buttonInputClick.forEach((button) => {
  button.addEventListener('click', ()=> {
    const player = playerCurrent()
    const primary = button.getAttribute('data-primary')
    const segundary = button.getAttribute('data-segundary')

    if(board[primary][segundary] == '') {
      button.innerText = player
      board[primary][segundary] = player
      checkWinner(player)
    }

  })
})

function checkWinner(player) {
  // Verificações horizontais, verticais e diagonais
  const winConditions = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
  ];

  if (winConditions.some(condition =>
    condition.every(([row, col]) => board[row][col] === player)
  )) {
    console.log(`Ganhou ${player}`);
    buttonInputClick.forEach((element) => {
      element.classList.add('diseble')
    })
    alert(`O jogador ${playerWinner}, ganhou!`)
  }
  return false;
}

