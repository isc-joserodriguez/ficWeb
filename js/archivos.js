/*let fs = require('fs');

function abrirArchivo(ruta){
    fs.readFile("../"+ruta, function (err, data) {
        if (err) {
            return console.error(err);
        }
        $('#editor').setValue(data);
        console.log("Funciona: " + data.toString());
    });
}*/

var MAX_BYTES = 102400; // 100 KB
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
       var partes=archivo.split('\n|\n');
       editor.setValue(partes[0]);
       editor2.setValue(partes[1]);
    };
    reader.readAsBinaryString(file);
}

