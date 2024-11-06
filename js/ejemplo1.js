document.addEventListener("DOMContentLoaded", function () {
    const btnCrear = document.getElementById("idBtnCrear");
    const btnValidarFormulario = document.getElementById("idBtnValidarFormulario");
    const formContainer = document.getElementById("idNewForm");
    const selectElement = document.getElementById("idCmbElemento");

    const idsExistentes = new Set();

    btnCrear.addEventListener("click", function () {
        const tipoElemento = selectElement.value;
        const nombreElemento = prompt("Ingrese el ID del nuevo elemento:");
        
        if (idsExistentes.has(nombreElemento)) {
            alert("ID duplicado. Por favor, elija un ID único.");
            return;
        }

        let nuevoElemento;
        switch (tipoElemento) {
            case "text":
            case "number":
            case "date":
            case "password":
            case "color":
            case "email":
                nuevoElemento = document.createElement("input");
                nuevoElemento.type = tipoElemento;
                break;
            case "radio":
            case "checkbox":
                nuevoElemento = document.createElement("input");
                nuevoElemento.type = tipoElemento;
                nuevoElemento.name = nombreElemento; 
                break;
            case "select":
                nuevoElemento = document.createElement("select");
                const option1 = document.createElement("option");
                option1.text = "Opción 1";
                nuevoElemento.add(option1);
                break;
            case "textarea":
                nuevoElemento = document.createElement("textarea");
                break;
            default:
                alert("Seleccione un tipo de elemento válido.");
                return;
        }

        nuevoElemento.id = nombreElemento;
        nuevoElemento.name = nombreElemento;
        idsExistentes.add(nombreElemento);
        formContainer.appendChild(nuevoElemento);
    });

    btnValidarFormulario.addEventListener("click", function () {
        const inputs = formContainer.querySelectorAll("input, select, textarea");
        let esValido = true;

        inputs.forEach(input => {
            if ((input.type === "radio" || input.type === "checkbox") && !input.checked) {
                esValido = false;
            } else if (input.tagName === "SELECT" && input.selectedIndex === 0) {
                esValido = false;
            } else if (input.value.trim() === "") {
                esValido = false;
            }
        });

        if (esValido) {
            alert("Formulario válido.");
        } else {
            alert("Por favor, complete todos los campos obligatorios.");
        }
    });
});