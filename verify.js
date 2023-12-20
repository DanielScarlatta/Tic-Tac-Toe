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
playerDisplayX.classList.add('winnwePlayer')
playerDisplayO.classList.remove('winnwePlayer')


buttonGameOption.forEach(function(button) {
  button.addEventListener('click', clickPlayerCurrent)
  
})

function clickPlayerCurrent(button) {
  const buttonData = button.currentTarget.dataset.region
  const region = buttonData.split('.')
  const row = region[0]
  const col = region[1]

  if(turnPlayer === 'X') {
    addTextInBtn(button, row, col)
    const winner = checkWinPlayer(turnPlayer);
    btnBackgroundColorWinner(winner)

    playerWinner = playerXName
    turnPlayer = 'O'
    playerDisplayX.classList.remove('winnwePlayer')
    playerDisplayO.classList.add('winnwePlayer')
  } else {
    addTextInBtn(button, row, col)
    const winner = checkWinPlayer(turnPlayer);
    btnBackgroundColorWinner(winner)

    playerWinner = playerOName
    turnPlayer = 'X'
    playerDisplayO.classList.remove('winnwePlayer')
    playerDisplayX.classList.add('winnwePlayer')
  }
  
}

function addTextInBtn(button, row, col) {
  button.currentTarget.innerText = turnPlayer
  board[row][col] = turnPlayer
  button.currentTarget.removeEventListener('click', clickPlayerCurrent)
}

function btnBackgroundColorWinner(winner) {
  if(winner) {
    let buttonWinner
    winner.forEach((region) => {
      buttonWinner = `${region[0]}.${region[1]}`
      
      buttonGameOption.forEach( (btn) => {
        if(btn.dataset.region === buttonWinner) {
          btn.classList.add('winnwePlayer')
        }
      })
    })
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

  for(const condition of winConditions) {
    const isWin = condition.every(([row, col]) => board[row][col] === player)
    if(isWin) {
      console.log(`Ganhou ${player}`);
      buttonGameOption.forEach((element) => {
        element.classList.add('diseble')
      })
      alert(`O jogador ${playerWinner}, ganhou!`)
      // Retorna as posições vencedoras
      return condition;
    }
   }
  return null; // Retorna nulo se não houver vencedor
}

restartGame.addEventListener('click', function() {
  window.location.reload()
})


const themeBody = document.getElementById('body')
const themeContainer = document.getElementById('conteiner')

switchTheme.addEventListener('click', function() {
  if(themeBody.classList == 'dark') {
    themeBody.classList.remove('dark')
    themeContainer.classList.remove('dark')

    themeBody.classList.add('light')
    themeContainer.classList.add('light')
  } else {
    themeBody.classList.remove('light')
    themeContainer.classList.remove('light')

    themeBody.classList.add('dark')
    themeContainer.classList.add('dark')
  }
})