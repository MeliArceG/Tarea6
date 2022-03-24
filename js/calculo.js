var hayResultado = false;

function concatenaOperacion(valor) {
    try {
        var resultado = 0;
        var numero1 = Number(document.getElementById("entrada1").value);
        var numero2 = Number(document.getElementById("entrada2").value);

        switch (valor) {
            case '+':
                resultado = numero1 + numero2;
                hayResultado = true;
                break;
            case '-':
                resultado = numero1 - numero2;
                hayResultado = true;
                break;
            case '/':
                resultado = numero1 / numero2;
                hayResultado = true;
                break;
            case '*':
                resultado = numero1 * numero2;
                hayResultado = true;
                break;
        }

        document.getElementById('resultado').value = resultado;
    } catch (err) {
        alert("Error al ejecutar el cálculo. " + e);
        console.error(err.name + ': ' + err.message);
    }
}

function validar(valor) {
    if (concatenaOperacion(valor).numero1.value == isNaN || concatenaOperacion(valor).numero2.value == isNaN) {
        document.getElementById('resultado').value = "";
        alert("Por favor ingresar un numero");
    } else {
        document.getElementById('resultado').value = resultado;
    }
}

function objetoRandom() {
    var n1 = Number(document.getElementById("n1").value);

    let resultadoMath = Math.floor(Math.random() * n1);
    document.getElementById('resultadoMath').value = resultadoMath;
}

function objetoPow() {
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);

    var resultadoPow = Math.pow(n1, n2);
    document.getElementById('resultadoMath').value = resultadoPow;
}

function objetoFloor() {
    var n1 = Number(document.getElementById("n1").value);

    var resultadoAbsoluto = Math.abs(n1);
    document.getElementById('resultadoMath').value = resultadoAbsoluto;
}

function objetoFactorial() {
    var resultadoFactorial = 1;
    var n1 = Number(document.getElementById('n1').value);

    for (i = 1; i <= n1; i++) {
        resultadoFactorial = resultadoFactorial * i;
    }

    document.getElementById('resultadoMath').value = resultadoFactorial;
}