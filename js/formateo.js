function arreglos() {
    var listaSaludos = new String();
    var saludos = ["Hello", "Good morning", "Nice to meet you", "Good afternoon", ""];
    for (let i = 0; i < saludos.length; i++) {
        listaSaludos += saludos[i] + "...   ";
    }
    alert(listaSaludos)
}

function arreglosTipados() {
    var arregloTipado = new Uint8Array(8);
    for (let i = 0; i < arregloTipado.length; i++) {
        arregloTipado[i] = i;
    }
    alert(arregloTipado);
}

function fechaToday(){
    var fechaHoy = new Date().toLocaleDateString()
    alert(`Hoy es: ${fechaHoy}`);
}