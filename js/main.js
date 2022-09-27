const robotron = document.querySelector("#robotron")
const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")

robotron.addEventListener("click", (evento) => {
    console.log(evento)
})

function dizOi(nome) {
    console.log("Oi, " + nome + "!")
}

dizOi("Zina");

somar.addEventListener("click", () => {
    braco.value = parseInt(braco.value) + 1;
})

subtrair.addEventListener("click", () => {
    braco.value = parseInt(braco.value) - 1;
})
