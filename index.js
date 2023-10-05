document.getElementById("optionBoard1").addEventListener("click", function(ev) {
  const ele = document.getElementById("optionBoard1")

  ele.innerText = "X"
  ele.classList.add("playerClick")
})