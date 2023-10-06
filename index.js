const matriz = []
const buttonsSelect = document.querySelectorAll(".boardOptions")
const player1 = window.prompt("Qual será nome do primeiro jogador (X): ")
const player2 = window.prompt("Qual será nome do segundo jogador (O): ")

if(player1 != "" && player2 != "") {
  const playerX = document.getElementById("playerX")
  const playerO = document.getElementById("playerO")
  playerX.innerText = player1 + " [ X ] "
  playerO.innerText = player2 + " [ O ] "
}
  else if(player1 != "") {
  const playerX = document.getElementById("playerX")
  playerX.innerText = player1 + " [ X ] "
} else if (player2 != ""){
  const playerO = document.getElementById("playerO")
  playerO.innerText = player2 + " [ O ] "
} else if(player1 == "") {
  playerX.innerText = "Vez do jogador" + " [ X ] "
} else if(player2 == "") {
  playerO.innerText = "Vez do jogador" + " [ O ] "
}

let contPlayer = 0

buttonsSelect.forEach(function(ele) {
  ele.addEventListener("click", function() {
    let positionMatriz = ele.dataset.value

    if(contPlayer == 0 && matriz[positionMatriz] == undefined) {
      ele.innerText = "X"
      matriz[positionMatriz] = "X"
      contPlayer++
      //vai chamar uma func para verificar se tem ganhador
    } else if(contPlayer == 1 && matriz[positionMatriz] == undefined){
      ele.innerText = "O"
      matriz[positionMatriz] = "O"
      contPlayer--
      //vai chamar uma func para verificar se tem ganhador
      //pistas os botoes de vermelho o ganhador
    }
    console.log(matriz)
  })
})
