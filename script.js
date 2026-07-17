document.querySelectorAll("[data-carrusel]").forEach((carrusel) => {
    const imagenes = carrusel.querySelectorAll(".carrusel-imagenes img");
    const botonAnterior = carrusel.querySelector(".anterior");
    const botonSiguiente = carrusel.querySelector(".siguiente");
    const contenedorIndicadores = carrusel.querySelector(".indicadores");

    let indiceActual = 0;

    imagenes.forEach((imagen, indice) => {
        const indicador = document.createElement("button");

        indicador.type = "button";
        indicador.className = "indicador";
        indicador.setAttribute("aria-label", `Ver foto ${indice + 1}`);

        indicador.addEventListener("click", () => {
            indiceActual = indice;
            mostrarImagen();
        });

        contenedorIndicadores.appendChild(indicador);
    });

    const indicadores = contenedorIndicadores.querySelectorAll(".indicador");

    function mostrarImagen() {
        imagenes.forEach((imagen, indice) => {
            imagen.classList.toggle("imagen-activa", indice === indiceActual);
        });

        indicadores.forEach((indicador, indice) => {
            indicador.classList.toggle("activo", indice === indiceActual);
        });
    }

    botonAnterior.addEventListener("click", () => {
        indiceActual =
            indiceActual === 0
                ? imagenes.length - 1
                : indiceActual - 1;

        mostrarImagen();
    });

    botonSiguiente.addEventListener("click", () => {
        indiceActual =
            indiceActual === imagenes.length - 1
                ? 0
                : indiceActual + 1;

        mostrarImagen();
    });

    mostrarImagen();
});
