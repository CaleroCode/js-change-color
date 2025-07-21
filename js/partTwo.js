function alternandoFondo() {
    const cuerpo = document.body;
    const textoColor = document.querySelector(".color");
    const colorActual = window.getComputedStyle(cuerpo).backgroundColor;

    if (colorActual === "rgb(0, 0, 139)") {
        cuerpo.style.backgroundColor = "red";
        textoColor.textContent = "red";
    } else {
        cuerpo.style.backgroundColor = "darkblue";
        textoColor.textContent = "darkblue";
    }
}

    const boton = document.querySelector(".button");
        boton.addEventListener("click", alternandoFondo);