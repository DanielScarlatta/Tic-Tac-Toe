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
const playerLblX = document.getElementById('playerX')
const playerLblO = document.getElementById('playerO')
const restartGame = document.getElementById("restartGame")
const switchTheme = document.getElementById("switchTheme")
const winner = ''
const conteiner = document.getElementById('conteiner')

playerLblX.innerText = playerX + ' [X] '
playerLblO.innerText = playerO + ' [O] '

// Atribuindo valores

let temp = ''
let playerWinner = ''
function playerCurrent() {
  if(temp === '') {
    temp = 'X'
    playerLblO.classList.add('winnwePlayer')
    playerLblX.classList.remove('winnwePlayer')
    return temp
  }
  if(temp === 'X') {
    temp = 'O'
    playerWinner = playerO
    playerLblX.classList.add('winnwePlayer')
    playerLblO.classList.remove('winnwePlayer')
    return temp
  }
  if(temp === 'O') {
    temp = 'X'
    playerWinner = playerX
    playerLblO.classList.add('winnwePlayer')
    playerLblX.classList.remove('winnwePlayer')
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

restartGame.addEventListener('click', function() {
  window.location.reload()
})



