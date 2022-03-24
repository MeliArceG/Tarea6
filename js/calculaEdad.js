function nacidoAnno() {
    let edadActual = Number(document.getElementById('nacido').value);
    let annoActual = 2022;

    if (edadActual == 0) {
        alert("Es nacido en el año presente");
        return;

    } else {
        while (edadActual > 0) {
            edadActual -= 1;
            annoActual -= 1;
        }
        alert(`Nació en el año:  ${annoActual}`);
    }
}

function calEdad(){
    let annoNacimiento= Number(document.getElementById('annoNac').value);
    let edad=0;
    
    do {
        annoNacimiento+=1;
        edad+=1;
    } while (annoNacimiento<2022);
    alert(`Tiene aproximadamente:  ${edad} años de edad`);
}