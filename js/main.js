const robotron = document.querySelector("#robotron")

const controle = document.querySelectorAll(".controle-ajuste")
controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
    })
})

robotron.addEventListener("click", (evento) => {
    console.log(evento)
})

function dizOi(nome) {
    console.log("Oi, " + nome + "!")
}

dizOi("Zina");

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector(".controle-contador")

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}
