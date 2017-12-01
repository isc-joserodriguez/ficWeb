function generarCodigo() {
    if(/El código se ejecutó sin errores./.test($('#outPut').val())){
        
    }else{
        alert("Para correr el programa, primero debes compilar el código.");
    }
}
function archivos(codigo,json){
    GeneradorCod(codigo);
    GeneradorJSON(json);

}

function GeneradorCod(codigo) {
    var blob = new Blob([codigo], {type: "text/plain;charset=UTF-8"});
    saveAs(blob, "mongoCode.txt");
}

function GeneradorJSON(codigo) {
    var blob = new Blob([codigo], {type: "text/plain;charset=UTF-8"});
    saveAs(blob, "Esc.json");
}