// Selección del formulario y botón de validación
const formulario = document.forms["frmRegistro"];
const buttonValidar = document.getElementById("btnValidarFormulario");
const modal = new bootstrap.Modal(document.getElementById("idModal"), {});
const bodyModal = document.getElementById("idBodyModal");

// Función para validar el formulario
const validarFormulario = function () {
    const errores = [];
    const resultados = [];

    // Validar campos obligatorios (nombre y apellido)
    if (!formulario["idNombre"].value.trim()) {
        errores.push("Nombres no puede estar vacío.");
    } else {
        resultados.push(["Nombres", formulario["idNombre"].value]);
    }

    if (!formulario["idApellidos"].value.trim()) {
        errores.push("Apellidos no puede estar vacío.");
    } else {
        resultados.push(["Apellidos", formulario["idApellidos"].value]);
    }

    // Validar fecha de nacimiento (no futura)
    const fechaNac = formulario["idFechaNac"].value;
    const fechaNacimiento = new Date(fechaNac);
    const fechaHoy = new Date();
    fechaHoy.setHours(0, 0, 0, 0); // Solo fecha, sin hora
    if (!fechaNac || fechaNacimiento >= fechaHoy) {
        errores.push("La fecha de nacimiento debe ser anterior a la fecha actual.");
    } else {
        resultados.push(["Fecha de nacimiento", fechaNac]);
    }

    // Validar correo electrónico con expresión regular
    const correo = formulario["idCorreo"].value.trim();
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regexCorreo.test(correo)) {
        errores.push("Formato de correo electrónico inválido.");
    } else {
        resultados.push(["Correo electrónico", correo]);
    }

    // Validar contraseñas coinciden
    const password = formulario["idPassword"].value;
    const passwordRepetir = formulario["idPasswordRepetir"].value;
    if (password !== passwordRepetir) {
        errores.push("Las contraseñas no coinciden.");
    }

    // Validar intereses (al menos uno seleccionado)
    const intereses = ["idCkProgramacion", "idCkBD", "idCkRedes", "idCkSeguridad"];
    const algunInteresSeleccionado = intereses.some(id => formulario[id].checked);
    if (!algunInteresSeleccionado) {
        errores.push("Debe seleccionar al menos un interés.");
    } else {
        resultados.push(["Intereses", "Seleccionado"]);
    }

    // Validar selección de carrera
    const carreraSeleccionada = formulario["idRdIng"].checked || formulario["idRdLic"].checked ||
                                formulario["idRdTec"].checked || formulario["idRdOtro"].checked;
    if (!carreraSeleccionada) {
        errores.push("Debe seleccionar una carrera.");
    } else {
        resultados.push(["Carrera", "Seleccionada"]);
    }

    // Validar selección de país
    const pais = formulario["idCmPais"].value;
    if (pais === "Seleccione una opcion") {
        errores.push("Debe seleccionar un país de origen.");
    } else {
        resultados.push(["País de origen", formulario["idCmPais"].selectedOptions[0].text]);
    }

    // Crear la tabla de resultados o errores en el modal
    bodyModal.innerHTML = ""; // Limpiar contenido anterior
    const tabla = document.createElement("table");
    tabla.classList.add("table", "table-bordered");
    const tbody = document.createElement("tbody");

    // Mostrar errores si existen, sino mostrar resultados
    if (errores.length > 0) {
        errores.forEach(error => {
            const filaError = document.createElement("tr");
            const celdaError = document.createElement("td");
            celdaError.colSpan = 2;
            celdaError.textContent = error;
            filaError.appendChild(celdaError);
            tbody.appendChild(filaError);
        });
    } else {
        resultados.forEach(([campo, valor]) => {
            const fila = document.createElement("tr");
            const celdaCampo = document.createElement("td");
            const celdaValor = document.createElement("td");
            celdaCampo.textContent = campo;
            celdaValor.textContent = valor;
            fila.appendChild(celdaCampo);
            fila.appendChild(celdaValor);
            tbody.appendChild(fila);
        });
    }

    // Agregar el cuerpo de la tabla al modal y mostrar
    tabla.appendChild(tbody);
    bodyModal.appendChild(tabla);
    modal.show();
};

// Asociar la función de validación al botón
buttonValidar.onclick = validarFormulario;