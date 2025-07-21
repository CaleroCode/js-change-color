// Cambio de color de la página
function cambiandoFondo() {
    document.body.style.backgroundColor = "darkblue";
        const textoColor = document.querySelector(".color");
        textoColor.textContent = "darkblue";
}

        const boton = document.querySelector(".button");
        boton.addEventListener("click", cambiandoFondo);
