function validarEmail() {
    const emailInput = document.getElementById('emailInput').value;
    const comentarioElement = document.getElementById('revisarEmail');
    const emailExpresion = /^([a-zA-Z][\w+-]+(?:\.\w+)?)@([\w-]+(?:\.[a-zA-Z]{2,10})+)$/;
  
    if (emailExpresion.test(emailInput)) {
        comentarioElement.textContent = ""; 
    } else {
        comentarioElement.textContent = "Por favor use un email válido.";
    }
}

function cambiarEstilo(tema) {
    var element = document.body;
    element.dataset.bsTheme = tema;
}
