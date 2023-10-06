const matriz = [
  [],
  [],
  []
]
const buttonsSelect = document.querySelectorAll(".boardOptions")
let contPlayer = 0

function startNamePlayer() {
  const namePlayerX = window.prompt("Qual será nome do primeiro jogador (X): ")
  const namePlayerO = window.prompt("Qual será nome do segundo jogador (O): ")
  const playerX = document.getElementById("playerX")
  const playerO = document.getElementById("playerO")

  if(namePlayerX !== "") {
    playerX.innerText = namePlayerX + " [ X ] "
  }
  if(namePlayerO !== ""){
    playerO.innerText = namePlayerO + " [ O ] "
  }
}

function checkerResult() {
  for(let l=0; l<=2; l++){
    for(let c=0; c<=2; c++){
      if(matriz[l][c] == matriz[l][c]){
        console.log("ganhou")
      }
    }
  }
}

function buttonChecker() {
  buttonsSelect.forEach(function(ele) {
    ele.addEventListener("click", function() {
      const positionMatrizPrimary = ele.dataset.primary
      const positionMatrizSegundary = ele.dataset.segundary

      if(contPlayer == 0 && matriz[positionMatrizPrimary][positionMatrizSegundary] == undefined) {
        ele.innerText = "X"
        matriz[positionMatrizPrimary][positionMatrizSegundary] = "X"
        contPlayer++
      }else if(contPlayer == 1 && matriz[positionMatrizPrimary][positionMatrizSegundary] == undefined) {
        ele.innerText = "O"
        contPlayer--
      }
    })
  })
}


// function buttonChecker() {
//   buttonsSelect.forEach(function(ele) {
//     ele.addEventListener("click", function() {
//       let positionMatriz = ele.dataset.value
  
//       if(contPlayer == 0 && matriz[positionMatriz] == undefined) {
//         ele.innerText = "X"
//         matriz[ele.dataset.primary][ele.dataset.segundary] = "X"
//         contPlayer++
//         //vai chamar uma func para verificar se tem ganhador

//       } else if(contPlayer == 1 && matriz[positionMatriz] == undefined){
//         ele.innerText = "O"
//         matriz[ele.dataset.primary][ele.dataset.segundary] = "O"
//         contPlayer--
//         //vai chamar uma func para verificar se tem ganhador
//         //pistas os botoes de vermelho o ganhador
//       }
//       checkerResult()
//       console.log(matriz)
      
//     })
//   })
// }


startNamePlayer()
buttonChecker()