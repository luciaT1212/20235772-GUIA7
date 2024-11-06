const buttonAgregarPagina = document.querySelector("#idAgregarPagina");
const buttonMenu = document.querySelector("#idAgregarMenu");
const buttonTitulo = document.querySelector("#idAgregarTitulo");
const buttonParrafo = document.querySelector("#idAgregarParrafo");
const pagina = document.querySelector("#idPagina");

buttonAgregarPagina.onclick = function () {
    const contenedorVerificado = document.querySelector("#idDivPage");

    if (!contenedorVerificado) {
        const contenedor = document.createElement("div");
        contenedor.setAttribute("id", "idDivPage");
        contenedor.setAttribute("class", "container");
        contenedor.setAttribute("style", "border:solid 1px black; height:500px; overflow: scroll; overflow-x: hidden;");

        pagina.appendChild(contenedor);
    } else {
        alert("Ya se agregó el contenedor de la página");
    }
};

buttonMenu.onclick = function () {
    const contenedor = document.querySelector("#idDivPage");

    if (contenedor) {
        const menuVerificar = document.querySelector("#idDivPage > header");

        if (!menuVerificar) {
            const menu = document.querySelector("header").cloneNode(true);
            contenedor.appendChild(menu);
        } else {
            alert("Ya ha sido agregado el menú");
        }
    } else {
        alert("Primero debe agregar un contenedor de página");
    }
};

buttonTitulo.onclick = function () {
    const contenedor = document.querySelector("#idDivPage");
    const menu = document.querySelector("#idDivPage > header");

    if (contenedor) {
        if (menu) {
            let titulo = prompt("Agregue el título de la página:");

            if (titulo !== "" && titulo !== null) {
                const h1 = document.createElement("h1");
                h1.setAttribute("class", "display-5 text-center fw-bold py-4 my-4");
                h1.innerHTML = titulo;

                contenedor.appendChild(h1);
            } else {
                alert("No se ha registrado ningún título, por favor ingrese información");
            }
        } else {
            alert("Debe agregar un menú primero");
        }
    } else {
        alert("Primero debe agregar un contenedor de página");
    }
};

buttonParrafo.onclick = function () {
    const contenedor = document.querySelector("#idDivPage");
    const menu = document.querySelector("#idDivPage > header");

    if (contenedor) {
        if (menu) {
            let texto = prompt("Agregue un párrafo a su página web:");

            if (texto !== "" && texto !== null) {
                const parrafo = document.createElement("p");
                parrafo.setAttribute("class", "lead mb-4 py-4");
                parrafo.innerHTML = texto;

                contenedor.appendChild(parrafo);
            } else {
                alert("No se ha registrado ningún párrafo, por favor ingrese información");
            }
        } else {
            alert("Debe agregar un menú primero");
        }
    } else {
        alert("Primero debe agregar un contenedor de página");
    }
};