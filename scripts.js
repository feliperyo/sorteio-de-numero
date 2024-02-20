const clickButton = document.querySelector("button")

const numSorteado = document.querySelector(".numero-sorteado")


function sorteiaNumero() {

    const min = Math.ceil(document.querySelector("#min").value)
    const max = Math.floor(document.querySelector("#max").value)

    if (min >= max) {
        alert("O valor mínimo tem que ser MENOR que o valor máximo")
    } else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        numSorteado.innerHTML = result
        numSorteado.style.visibility = "visible"
        numSorteado.style.fontSize = "50px"
    }
}

clickButton.addEventListener("click", sorteiaNumero)