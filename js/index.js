const buttonSpan = document.getElementById("idBtnSpan");
const buttonP = document.getElementById("idBtnP");
const buttonDiv = document.getElementById("idBtnDiv");
const buttonButton = document.getElementById("idBtnButton");

const contarElementos = function (elemento) {
    let arrayElement = document.getElementsByTagName(elemento);
    
    console.log(`Etiquetas buscadas <${elemento}>: Total encontradas: ${arrayElement.length}`);
    
    if (arrayElement.length === 0) {
        alert(`No se encontraron etiquetas <${elemento}> en el documento.`);
    } else {
        alert(`Se encontraron ${arrayElement.length} etiquetas <${elemento}> en el documento.`);
    }
};

buttonSpan.onclick = () => contarElementos("span");
buttonP.onclick = () => contarElementos("p");
buttonDiv.onclick = () => contarElementos("div");
buttonButton.onclick = () => contarElementos("button");