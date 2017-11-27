/*var MAX_BYTES = 1024000; // 1000 KB
function abrirArchivo() {
    if (!(window.File)) {
        console.log('La API File no está soportada');
        return;
    }
    var file =document.getElementById('filepicker').files[0];
    var reader;
    reader = new FileReader();
    reader.onloadend = function(event){
       var archivo=event.currentTarget.result.substr(0, MAX_BYTES);
       var partes=archivo.split('|');
       editor.setValue(partes[0]);
       editor2.setValue(partes[1]);
    };
    reader.readAsBinaryString(file);
}*/
function abrirArchivo() {
    var file = document.getElementById('filepicker').files[0];
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
        var contents = e.target.result;
        console.log(contents);
        var partes=contents.split('|');
        console.log(partes);
        editor.setValue(partes[0]);
        editor2.setValue(partes[1]);
    };
    reader.readAsText(file);
}
function guardarArchivo () {
    var codigoFuente=editor.getValue()+"|"+editor2.getValue();
    var blob = new Blob([codigoFuente], {type: "text/plain;charset=UTF-8"});
    saveAs(blob, "prueba.fic");
}

function generadorCodigo() {

    //lo que genera el codigo va aqui

    var codigoGenerado="Aqui va el codigo generado";
    var blob = new Blob([codigoGenerado], {type: "text/plain;charset=UTF-8"});
    saveAs(blob, "mongoCode.txt");
}