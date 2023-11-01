const matriz = [
  [],
  [],
  []
]

let contPlayer = 'X'
let varietWinner = ''
const winnwer = true
const buttonsSelect = document.querySelectorAll(".boardOptions")
const  board = document.getElementById("gameBoard")
const restartGame = document.getElementById("restartGame")

function startNamePlayer() {
  const namePlayerX = window.prompt("Qual será nome do primeiro jogador (X): ")
  const namePlayerO = window.prompt("Qual será nome do segundo jogador (O): ")
  const playerX = document.getElementById("playerX")
  const playerO = document.getElementById("playerO")

  if (namePlayerX !== "") {
    playerX.innerText = namePlayerX + " [ X ] "
  }
  if (namePlayerO !== "") {
    playerO.innerText = namePlayerO + " [ O ] "
  }
}

function checkerResult(varietWinner) {
  let lineWinner = []

  if (matriz[0][0] == varietWinner && matriz[0][1] == varietWinner && matriz[0][2] == varietWinner) {
    lineWinner = [optionBoard1, optionBoard2, optionBoard3]
    lineWinner.forEach(function(ele) {
      ele.classList.add("winnwePlayer")
    })
    return true
  }
  if (matriz[1][0] == varietWinner && matriz[1][1] == varietWinner && matriz[1][2] == varietWinner) {
    lineWinner = [optionBoard4, optionBoard5, optionBoard6]
    lineWinner.forEach(function(ele) {
      ele.classList.add("winnwePlayer")
    })
    console.log("ganhou " + varietWinner)
    return true
  }
  if (matriz[2][0] == varietWinner && matriz[2][1] == varietWinner && matriz[2][2] == varietWinner) {
    lineWinner = [optionBoard7, optionBoard8, optionBoard9]
    lineWinner.forEach(function(ele) {
      ele.classList.add("winnwePlayer")
    })
    console.log("ganhou " + varietWinner)
    return true
  }
  //---------------------------------------
  if (matriz[0][0] == varietWinner && matriz[1][0] == varietWinner && matriz[2][0] == varietWinner) {
    lineWinner = [optionBoard1, optionBoard4, optionBoard7]
    lineWinner.forEach(function(ele) {
      ele.classList.add("winnwePlayer")
    })
    console.log("ganhou " + varietWinner)
    return true
  }
  if (matriz[0][1] == varietWinner && matriz[1][1] == varietWinner && matriz[2][1] == varietWinner) {
    lineWinner = [optionBoard2, optionBoard5, optionBoard8]
    lineWinner.forEach(function(ele) {
      ele.classList.add("winnwePlayer")
    })
    console.log("ganhou " + varietWinner)
    return true
  }
  if (matriz[0][2] == varietWinner && matriz[1][2] == varietWinner && matriz[2][2] == varietWinner) {
    lineWinner = [optionBoard3, optionBoard6, optionBoard9]
    lineWinner.forEach(function(ele) {
      ele.classList.add("winnwePlayer")
    })
    console.log("ganhou " + varietWinner)
    return true
  }
  //--------------------------------------
  if (matriz[0][0] == varietWinner && matriz[1][1] == varietWinner && matriz[2][2] == varietWinner) {
    lineWinner = [optionBoard1, optionBoard5, optionBoard9]
    lineWinner.forEach(function(ele) {
      ele.classList.add("winnwePlayer")
    })
    console.log("ganhou " + varietWinner)
    return true
  }
  if (matriz[0][2] == varietWinner && matriz[1][1] == varietWinner && matriz[2][0] == varietWinner) {
    lineWinner = [optionBoard3, optionBoard5, optionBoard7]
    lineWinner.forEach(function(ele) {
      ele.classList.add("winnwePlayer")
    })
    console.log("ganhou " + varietWinner)
    return true
}  }
 

function disebleBoard() {
  buttonsSelect.forEach(function(ele){
    ele.classList.add("diseble")
  })
}

function buttonChecker() {
  buttonsSelect.forEach(function (ele) {

    ele.addEventListener("click", function () {
      const positionMatrizPrimary = ele.dataset.primary
      const positionMatrizSegundary = ele.dataset.segundary

      if (contPlayer == 'X' && ele.innerText !== 'O' && matriz[positionMatrizPrimary][positionMatrizSegundary] == undefined) {
        ele.innerText = 'X'
        matriz[positionMatrizPrimary][positionMatrizSegundary] = 'X'
        contPlayer = 'O'
        varietWinner = 'X'
        if(checkerResult(varietWinner)) {
          disebleBoard()
        }

      } else if (contPlayer == 'O' && ele.innerText !== 'X' && matriz[positionMatrizPrimary][positionMatrizSegundary] == undefined) {
        ele.innerText = 'O'
        matriz[positionMatrizPrimary][positionMatrizSegundary] = 'O'
        contPlayer = 'X'
        varietWinner = 'O'
        if(checkerResult(varietWinner)) {
          disebleBoard()
        }
      }
      if(contPlayer == 'X'){
        playerO.classList.remove("winnwePlayer")
        playerX.classList.add("winnwePlayer")
      } else if(contPlayer == 'O') {
        playerX.classList.remove("winnwePlayer")
        playerO.classList.add("winnwePlayer")
      }
      empate()
    })
  })
}

startNamePlayer()
buttonChecker()


restartGame.addEventListener('click', function() {
  window.location.reload()
})