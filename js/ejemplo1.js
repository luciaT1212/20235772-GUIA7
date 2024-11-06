function validarIDUnico(id) {
    return !document.getElementById(id);
}

// Agrega evento al botón para crear elementos con validación de ID
buttonAddElemento.onclick = () => {
    if (nombreElemento.value !== "" && tituloElemento.value !== "") {
        const elemento = cmbElemento.value;
        const id = nombreElemento.value;
        
        if (validarIDUnico(id)) {
            if (elemento === "select") {
                newSelect();
            } else if (elemento === "radio" || elemento === "checkbox") {
                newRadioCheckbox(elemento);
            } else {
                newInput(elemento);
            }
        } else {
            alert("El ID ya existe. Por favor, use un ID único para cada control.");
        }
    } else {
        alert("Faltan campos por completar");
    }
};

// Función para validar que los campos nuevos no estén vacíos y que las opciones estén seleccionadas
function validarFormulario() {
    const elementos = document.querySelectorAll("#idNewForm [id]");
    let mensaje = "Validación del formulario:\n";
    let valido = true;

    elementos.forEach(elemento => {
        if (elemento.type === "radio" || elemento.type === "checkbox") {
            if (!elemento.checked) {
                mensaje += `- El ${elemento.type} con ID "${elemento.id}" no está seleccionado.\n`;
                valido = false;
            }
        } else if (elemento.tagName === "SELECT" && elemento.selectedIndex === 0) {
            mensaje += `- El select con ID "${elemento.id}" no tiene una opción seleccionada.\n`;
            valido = false;
        } else if (elemento.value === "") {
            mensaje += `- El campo con ID "${elemento.id}" está vacío.\n`;
            valido = false;
        }
    });

    if (valido) {
        alert("Todos los campos están correctamente llenos.");
    } else {
        alert(mensaje);
    }
}


document.getElementById("idBtnValidarFormulario").onclick = validarFormulario;