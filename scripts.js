const clickButton = document.querySelector("button")

const numSorteado = document.querySelector(".numero-sorteado")


function sorteiaNumero() {

    const min = Math.ceil(document.querySelector("#min").value)
    const max = Math.floor(document.querySelector("#max").value)


    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    numSorteado.innerHTML = result
    numSorteado.style.visibility = "visible"
    numSorteado.style.fontSize = "50px"


    console.log(min, max)
    console.log(result)
}

clickButton.addEventListener("click", sorteiaNumero)