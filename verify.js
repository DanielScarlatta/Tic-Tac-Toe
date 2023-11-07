// tabuleiro
const board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

// variaveis do jogo
let currentPlayer = 'X'
let Player = 'O'
const playerWinner = ''
const buttonsList = document.querySelectorAll('button[class="boardOptions"]')
const namePlayerX = document.getElementById('playerX')
const namePlayerO = document.getElementById('playerO')
const playerX = window.prompt('Digite o nome do jogador X')
const playerO = window.prompt('Digite o nome do jogador O')
const gameResult = ''


// pegando os dados do tabuleiro

const conteiner = document.getElementById('conteiner')
let dataButton = {}

conteiner.addEventListener('click', (event) => {
  dataButton = {
    id: event.target.id,
    primary: event.target.getAttribute('data-primary'),
    segundary: event.target.getAttribute('data-segundary')
  }
  // console.log(dataButton)
  runGame()
})

function playerMoment() {
  const namePlayerX = document.getElementById('playerX')
  const namePlayerO = document.getElementById('playerO')

  namePlayerX.innerText = playerX + ' [X] '
  namePlayerO.innerText = playerO + ' [O] '
}

playerMoment()

function runGame() {
  // criar as verificações e lógica do jogo aqui
  console.log(board)

  function addToBoard() {
    Player = 'X'
    if (currentPlayer === 'X' && board[dataButton.primary][dataButton.segundary] === '') {
      board[dataButton.primary][dataButton.segundary] = currentPlayer
      document.getElementById(dataButton.id).innerText = currentPlayer

      return currentPlayer = 'O'
    }
    Player = 'O'
    if (currentPlayer === 'O' && board[dataButton.primary][dataButton.segundary] === '') {
      board[dataButton.primary][dataButton.segundary] = currentPlayer
      document.getElementById(dataButton.id).innerText = currentPlayer

      return currentPlayer = 'X'
    }
  }
  addToBoard()
  resultCheck()

  function resultCheck() {
    function block() {
      buttonsList.forEach(function (ele) {
        ele.classList.add('diseble')
      })
    }

    for (let l = 0; l < 3; l++) {
      if (board[l][0] == Player && board[l][1] == Player && board[l][2] == Player) {
        console.log("vencedor " + Player)
        block()
        lineWinner = [optionBoard1, optionBoard2, optionBoard3]
        lineWinner.forEach(function (ele) {
          ele.classList.add("winnwePlayer")
        })
      }

      if (board[0][l] == Player && board[1][l] == Player && board[2][l] == Player) {
        console.log("vencedor " + Player)
        block()
        lineWinner = [optionBoard1, optionBoard2, optionBoard3]
        lineWinner.forEach(function (ele) {
          ele.classList.add("winnwePlayer")
        })
      }
      if (board[0][0] == Player && board[1][1] == Player && board[2][2] == Player) {
        console.log("vencedor " + Player)
        block()
        lineWinner = [optionBoard1, optionBoard2, optionBoard3]
        lineWinner.forEach(function (ele) {
          ele.classList.add("winnwePlayer")
        })
      }
      if (board[0][2] == Player && board[1][1] == Player && board[2][0] == Player) {
        console.log("vencedor " + Player)
        block()
        lineWinner = [optionBoard1, optionBoard2, optionBoard3]
        lineWinner.forEach(function (ele) {
          ele.classList.add("winnwePlayer")
        })
      }
    }
  }
}