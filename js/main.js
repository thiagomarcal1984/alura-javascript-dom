const robotron = document.querySelector("#robotron")

robotron.addEventListener("click", (evento) => {
    console.log(evento)
})

function dizOi(nome) {
    console.log("Oi, " + nome + "!")
}

dizOi("Zina");
