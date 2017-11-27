function generarCodigo() {
    if(/El código se ejecutó sin errores./.test($('#outPut').val())){
        verLineas();
    }else{
        alert("Para correr el programa, primero debes compilar el código.");
    }

}

function verLineas() {
    var exp = editor.getValue();

}

function Generador(codigo) {
    var blob = new Blob([codigo], {type: "text/plain;charset=UTF-8"});
    saveAs(blob, "mongoCode.txt");
}
