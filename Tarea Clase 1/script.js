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

document.getElementById('cambiar').addEventListener('click', function() {
    cambiarColor('#f0f0f0', 'black', '#fff', '#007BFF', '#ccc', 'white');
});

document.getElementById('altoContraste').addEventListener('click', function() {
    cambiarColor('#000000', 'white', '#333333', '#FFD700', '#999999', 'black');
});

function cambiarColor(fondo, colorTexto, fondoContenedor, colorBoton, colorBorde, colorTextoBoton) {
    document.body.style.backgroundColor = fondo;
    document.body.style.color = colorTexto;
    document.querySelector('.container').style.backgroundColor = fondoContenedor;

    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="date"], select');
    inputs.forEach(input => {
        input.style.backgroundColor = fondoContenedor;
        input.style.color = colorTexto;
        input.style.borderColor = colorBorde;
    });

    const botones = document.querySelectorAll('button');
    botones.forEach(boton => {
        boton.style.backgroundColor = colorBoton;
        boton.style.color = colorTextoBoton;
    });
}