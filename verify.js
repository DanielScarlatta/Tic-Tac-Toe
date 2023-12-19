// tabuleiro
const board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

// variaveis
const buttonGameOption = document.querySelectorAll('.boardOptions')

const playerXName = window.prompt('Digite o nome do jogador X: ')
const playerOName = window.prompt('Digite o nome do jogador O: ')
const playerDisplayX = document.getElementById('playerX')
const playerDisplayO = document.getElementById('playerO')
let turnPlayer = 'X'
let playerWinner = ''

const restartGame = document.getElementById("restartGame")
const switchTheme = document.getElementById("switchTheme")

// adicionando o nome dos jogadores no display
playerDisplayX.innerText = playerXName + ' [X] '
playerDisplayO.innerText = playerOName + ' [O] '


buttonGameOption.forEach(function(button) {
  button.addEventListener('click', clickPlayerCurrent)
  
})

function clickPlayerCurrent(button) {
  const buttonData = button.currentTarget.dataset.region
  const region = buttonData.split('.')
  const row = region[0]
  const lin = region[1]

  if(turnPlayer === 'X') {
    button.currentTarget.innerText = turnPlayer
    board[row][lin] = turnPlayer

    button.currentTarget.removeEventListener('click', clickPlayerCurrent)
    playerWinner = playerXName
    checkWinPlayer(turnPlayer)
    turnPlayer = 'O'
  } else {
    button.currentTarget.innerText = turnPlayer
    board[row][lin] = turnPlayer
    button.currentTarget.removeEventListener('click', clickPlayerCurrent)
    checkWinPlayer(turnPlayer)
    playerWinner = playerOName
    turnPlayer = 'X'
  }
  
}

function checkWinPlayer(player) {
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
    buttonGameOption.forEach((element) => {
      element.classList.add('diseble')
    })
    alert(`O jogador ${playerWinner}, ganhou!`)
  } 
  return false;
}

restartGame.addEventListener('click', function() {
  window.location.reload()
})