// tabuleiro
const board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

// variaveis do jogo
let currentPlayer = 'X'
const playerWinner = ''
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
    if(currentPlayer === 'X' && board[dataButton.primary][dataButton.segundary] === '') {
      board[dataButton.primary][dataButton.segundary] = currentPlayer
      document.getElementById(dataButton.id).innerText = currentPlayer
      return currentPlayer = 'O'
    } 
    if(currentPlayer === 'O' && board[dataButton.primary][dataButton.segundary] === '') {
      board[dataButton.primary][dataButton.segundary] = currentPlayer
      document.getElementById(dataButton.id).innerText = currentPlayer

      return currentPlayer = 'X'
    }
  }
  addToBoard()
  
  function resultCheck() {
    for(let l=0; l<3; l++) {
      if(board[l][0] == board[l][1] == board[l][2] && ) {
        let winner = [board[l][0], board[l][1], board[l][2]]
        console.log('vencedor' + board[l][0])
      }
    }
  }
  resultCheck()
}