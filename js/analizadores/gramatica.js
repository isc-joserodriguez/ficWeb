    var nErrores = 0;
    var cToken = 0;
    var linea = "";
    var columna = 0;
    var tipo = 0;

function validarGramatica(){
    var exp = editor.getValue();
    console.log(editor.getValue());
    var txtGramatica = $('#gramaticaOut');
    var txtErrores = $('#outPut');
    var tokenArea = $("#tokensOut");
    $('#gramaticaOut').val("");
    $('#outPut').val("");
    $('#tokensOut').val("");
    $("#tablaS tr").remove(); 

    analizaLxl(txtGramatica,txtErrores, tokenArea, exp);

}

function analizaLxl(txtGramatica,txtErrores, tokenArea, exp){    
       
        nErrores=0;
        var lin=exp.split("\n");  
        cToken=1;     
        var i;                
        for(i=0;i<lin.length;i++){
            if(lin[i]!=""&&lin[i]!=" "){
             validar(lin[i],txtGramatica,txtErrores,tokenArea,i+1);
            }
        }

         if(nErrores!=0){
             var errores = $('#outPut').val();
             $('#outPut').val(errores+"\n\nEl código se ejecutó con errores");
         }else{
             var errores = $('#outPut').val();
            $('#outPut').val(errores+"\n\nEl código se ejecutó sin errores");
         }
}

function validar(lin, txtGramatica, txtErrores, tokenArea, nLin) {
        if(lin.substring(lin.length-1,lin.length)!=';'){
            errores = $('#outPut').val();
            $('#outPut').val(errores+"\nError: Se esperba un ; en la línea "+nLin+" columna "+lin.length);        
            nErrores++;
            return;
        }
        var token = lin.replace(";", " ;").split(" ");
        
        if(!validarGramaticas(token,txtGramatica,txtErrores,tokenArea, token.length,nLin,lin)){
            nErrores++;
        }
 }

function validarGramaticas(token,txtGramatica,txtErrores, tokenArea,tam,  nLin, lin) {
    columna = 0;
    tipo = token[0].length;
    var gramatica = $('#gramaticaOut').val();
    $('#gramaticaOut').val(""+gramatica+"1.- Se evalúa el token "+token[0]); 
            switch(token[0]){
                case "Edificio":
                    var tokens = $('#tokensOut').val();
                    $('#tokensOut').val(""+tokens+"\n"+cToken+".- "+token[0]);
                    $('#tablaS').append('<tr><td>'+cToken+'</td><td>'+token[0]+'</td><td>palabra reservada</td><td>'+nLin+'</td><td>'+columna+'</td></tr>')
                    if(validarEdificio(token, txtGramatica,txtErrores,tokenArea,tam, nLin, lin)){   
                    return true;
                    }else{
                    return false;
                    } 
                case "Grupo":
                    var tokens = $('#tokensOut').val();
                    $('#tokensOut').val(""+tokens+"\n"+cToken+".- "+token[0]);
                    $('#tablaS').append('<tr><td>'+cToken+'</td><td>'+token[0]+'</td><td>palabra reservada</td><td>'+nLin+'</td><td>'+columna+'</td></tr>')
                    if(validarGrupo(token, txtGramatica,txtErrores,tokenArea,tam, nLin, lin)){    
                    return true;
                    }else{
                    return false;}
                case "Maestro":
                    var tokens = $('#tokensOut').val();
                    $('#tokensOut').val(""+tokens+"\n"+cToken+".- "+token[0]);
                    $('#tablaS').append('<tr><td>'+cToken+'</td><td>'+token[0]+'</td><td>palabra reservada</td><td>'+nLin+'</td><td>'+columna+'</td></tr>')
                    if(validarMaestro(token, txtGramatica,txtErrores,tokenArea,tam, nLin, lin)){
                    return true;
                    }else{
                    return false;}
                case "Aula":
                    var tokens = $('#tokensOut').val();
                    $('#tokensOut').val(""+tokens+"\n"+cToken+".- "+token[0]);
                    $('#tablaS').append('<tr><td>'+cToken+'</td><td>'+token[0]+'</td><td>palabra reservada</td><td>'+nLin+'</td><td>'+columna+'</td></tr>')                 
                    if(validarAula(token, txtGramatica,txtErrores,tokenArea,tam, nLin, lin)){
                    return true;
                    }else{
                    return false;}
                case "Materia":
                    var tokens = $('#tokensOut').val();
                    $('#tokensOut').val(""+tokens+"\n"+cToken+".- "+token[0]);
                    $('#tablaS').append('<tr><td>'+cToken+'</td><td>'+token[0]+'</td><td>palabra reservada</td><td>'+nLin+'</td><td>'+columna+'</td></tr>')
                    
                    if(validarMateria(token, txtGramatica,txtErrores,tokenArea,tam, nLin, lin)){
                    return true;
                    }else{
                    return false;}
                case "Recurso":
                    var tokens = $('#tokensOut').val();
                    $('#tokensOut').val(""+tokens+"\n"+cToken+".- "+token[0]);
                    $('#tablaS').append('<tr><td>'+cToken+'</td><td>'+token[0]+'</td><td>palabra reservada</td><td>'+nLin+'</td><td>'+columna+'</td></tr>')
                    
                    if(validarRecurso(token, txtGramatica,txtErrores,tokenArea,tam, nLin, lin)){
                    return true;
                    }else{
                    return false;}
                case "Hora":
                    var tokens = $('#tokensOut').val();
                    $('#tokensOut').val(""+tokens+"\n"+cToken+".- "+token[0]);
                    $('#tablaS').append('<tr><td>'+cToken+'</td><td>'+token[0]+'</td><td>palabra reservada</td><td>'+nLin+'</td><td>'+columna+'</td></tr>')
                    if(validarHoras(token, txtGramatica,txtErrores,tokenArea,tam, nLin, lin)){
                    return true;
                    }else{
                    return false;}
                case "Alumno":
                    var tokens = $('#tokensOut').val();
                    $('#tokensOut').val(""+tokens+"\n"+cToken+".- "+token[0]);
                    $('#tablaS').append('<tr><td>'+cToken+'</td><td>'+token[0]+'</td><td>palabra reservada</td><td>'+nLin+'</td><td>'+columna+'</td></tr>')
                    if(validarAlumno(token, txtGramatica,txtErrores,tokenArea,tam, nLin, lin)){
                    return true;
                    }else{
                    return false;}   
                case "AsignarAlumno":
                    if(validarAsignacion(token, txtGramatica,txtErrores,tokenArea,tam, nLin, lin)){
                    return true;
                    }else{
                    return false;}     
                case "AsignarRecurso":
                    if(validarAsignacion(token, txtGramatica,txtErrores,tokenArea,tam, nLin, lin)){
                    return true;
                    }else{
                    return false;}
                case "AsignarAula":
                    if(validarAsignacion(token, txtGramatica,txtErrores,tokenArea,tam, nLin, lin)){
                    return true;
                    }else{
                    return false;}
                case "AsignarGrupo":
                    if(validarAsignacion(token, txtGramatica,txtErrores,tokenArea,tam, nLin, lin)){
                    return true;
                    }else{
                    return false;}
                case "AsignarMaestro":
                    if(validarAsignacion(token, txtGramatica,txtErrores,tokenArea,tam, nLin, lin)){
                    return true;
                    }else{
                    return false;}
                case "AsignarHora":
                    if(validarAsignacion(token, txtGramatica,txtErrores,tokenArea,tam, nLin, lin)){
                    return true;
                    }else{
                    return false;}
                 case "AsignarEdificio":
                    if(validarAsignacion(token, txtGramatica,txtErrores,tokenArea,tam, nLin, lin)){
                    return true;
                    }else{
                    return false;}   
                
            }
    errores = $('#outPut').val();    
     
    $('#outPut').val(errores+"\nError: Se esperaba un tipo de dato en la linea "+nLin+"columna "+columna); 
    nErrores++;
    return false;
    }

  function validarEdificio(token, txtGramatica, txtErrores,tokenArea, tam, nLin, lin) {
        linea = lin;
        var produccion=1;
        var con=1;
         var gramatica = $('#gramaticaOut').val();
         $('#gramaticaOut').val(gramatica+"\nEl token es un tipo de dato\n\n");
         
        while(con!=tam){
            gramatica = $('#gramaticaOut').val();
            $('#gramaticaOut').val(gramatica+(con+1)+".- ");
            switch(produccion){
                case 1:
                    if(validarParentesisi(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=2;
                    break;
                    }else {
                    return false;
                    }
                case 2:
                    if(validarID(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=3;
                    break;
                    }else {
                    return false;
                    }
                case 3:
                    if(validarComa(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=4;
                    break;
                    }else {
                    return false;
                    } 
                 case 4:
                    if(validarNombre(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=5;
                    break;
                    }else {
                    return false;
                    }
                 
                  case 5:
                    if(validarParentesisf(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=6;
                    break;
                    }else {
                    return false;
                    }
                  
                   case 6:
                    if(validarCierre(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=7;
                    break;
                    }else {
                    return false;
                    }
                case 7:
                    return false;
            }
             gramatica = $('#gramaticaOut').val();
             $('#gramaticaOut').val(gramatica+"\n\n");
            cToken++;
            con++;
        }
        return true;
    }

    function validarGrupo(token, txtGramatica, txtErrores,tokenArea, tam, nLin, lin) {
        linea = lin;
        var produccion=1;
        var con=1;
         var gramatica = $('#gramaticaOut').val();
         $('#gramaticaOut').val(gramatica+"\nEl token es un tipo de dato\n\n");
        while(con!=tam){
            gramatica = $('#gramaticaOut').val();
            $('#gramaticaOut').val(gramatica+(con+1)+".- ");
            switch(produccion){
                 case 1:
                    if(validarParentesisi(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=2;
                    break;
                    }else {
                    return false;
                    }
                case 2:
                    if(validarID(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=3;
                    break;
                    }else {
                    return false;
                    }
                case 3:
                    if(validarComa(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=4;
                    break;
                    }else {
                    return false;
                    } 
                 case 4:
                    if(validarNombre(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=5;
                    break;
                    }else {
                    return false;
                    }
                 
                  case 5:
                    if(validarComa(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=6;
                    break;
                    }else {
                    return false;
                    }
                  
                   case 6:
                    if(validarCantidad(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=7;
                    break;
                    }else {
                    return false;
                    }
                   
                    case 7:
                    if(validarComa(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=8;
                    break;
                    }else {
                    return false;
                    }
                    
                     case 8:
                    if(validarNombre(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=9;
                    break;
                    }else {
                    return false;
                    }
                  
                  case 9:
                    if(validarParentesisf(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=10;
                    break;
                    }else {
                    return false;
                    }
                  
                   case 10:
                    if(validarCierre(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=11;
                    break;
                    }else {
                    return false;
                    }
                case 11:
                    return false;
            }
             gramatica = $('#gramaticaOut').val();
             $('#gramaticaOut').val(gramatica+"\n\n");
            cToken++;
            con++;
        }
        return true;
    }

    function validarMaestro(token, txtGramatica, txtErrores,tokenArea, tam, nLin, lin) {
        linea = lin;
        var produccion=1;
        var con=1;
         var gramatica = $('#gramaticaOut').val();
         $('#gramaticaOut').val(gramatica+"\nEl token es un tipo de dato\n\n");
        while(con!=tam){
            gramatica = $('#gramaticaOut').val();
            $('#gramaticaOut').val(gramatica+(con+1)+".- ");
            switch(produccion){
                case 1:
                    if(validarParentesisi(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=2;
                    break;
                    }else {
                    return false;
                    }
                case 2:
                    if(validarID(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=3;
                    break;
                    }else {
                    return false;
                    }
                case 3:
                    if(validarComa(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=4;
                    break;
                    }else {
                    return false;
                    } 
                 case 4:
                    if(validarNombre(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=7;
                    break;
                    }else {
                    return false;
                    }
                   
                    case 7:
                    if(validarComa(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=8;
                    break;
                    }else {
                    return false;
                    }
                    
                    case 8:
                    if(validarHora(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=9;
                    break;
                    }else {
                    return false;
                    }
                     
                   case 9:
                    if(validarComa(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=10;
                    break;
                    }else {
                    return false;
                    }
                    
                    case 10:
                    if(validarHora(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=11;
                    break;
                    }else {
                    return false;
                    }
                    
                    case 11:
                    if(validarComaOpcional(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=12;
                    break;
                    } 
                    if(validarParentesisf(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=16;
                    break;
                    }else {
                    return false;
                    }
                     case 12:
                    if(validarHora(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=13;
                    break;
                    }else {
                    return false;
                    }
                     
                    case 13:
                    if(validarComa(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=14;
                    break;
                    }else {
                    return false;
                    }
                    
                    case 14:
                    if(validarHora(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=15;
                    break;
                    }else {
                    return false;
                    } 
                     
                  case 15:
                    if(validarParentesisf(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=16;
                    break;
                    }else {
                    return false;
                    }
                  
                   case 16:
                    if(validarCierre(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=17;
                    break;
                    }else {
                    return false;
                    }
                case 17:
                    return false;
            }
             gramatica = $('#gramaticaOut').val();
             $('#gramaticaOut').val(gramatica+"\n\n");
            cToken++;
            con++;
        }
        return true;
    }
    function validarAula(token, txtGramatica, txtErrores,tokenArea, tam, nLin, lin) {
        linea = lin;
        var produccion=1;
        var con=1;
         var gramatica = $('#gramaticaOut').val();
         $('#gramaticaOut').val(gramatica+"\nEl token es un tipo de dato\n\n");
        while(con!=tam){
            gramatica = $('#gramaticaOut').val();
            $('#gramaticaOut').val(gramatica+(con+1)+".- ");
            switch(produccion){
                case 1:
                    if(validarParentesisi(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=2;
                    break;
                    }else {
                    return false;
                    }
                case 2:
                    if(validarID(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=3;
                    break;
                    }else {
                    return false;
                    }
                case 3:
                    if(validarComa(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=4;
                    break;
                    }else {
                    return false;
                    } 
                 case 4:
                    if(validarNombre(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=5;
                    break;
                    }else {
                    return false;
                    }
                 
                  case 5:
                    if(validarComa(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=8;
                    break;
                    }else {
                    return false;
                } 
            
                     case 8:
                    if(validarCantidad(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=9;
                    break;
                    }else {
                    return false;
                    }
                  
                  case 9:
                    if(validarParentesisf(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=10;
                    break;
                    }else {
                    return false;
                    }
                  
                   case 10:
                    if(validarCierre(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=11;
                    break;
                    }else {
                    return false;
                    }
                case 11:
                    return false;
            }
             gramatica = $('#gramaticaOut').val();
             $('#gramaticaOut').val(gramatica+"\n\n");
            cToken++;
            con++;
        }
        return true;
    }
    function validarMateria(token, txtGramatica, txtErrores,tokenArea, tam, nLin, lin) {
        linea = lin;
        var produccion=1;
        var con=1;
         var gramatica = $('#gramaticaOut').val();
         $('#gramaticaOut').val(gramatica+"\nEl token es un tipo de dato\n\n");
        while(con!=tam){
            gramatica = $('#gramaticaOut').val();
            $('#gramaticaOut').val(gramatica+(con+1)+".- ");
            switch(produccion){
case 1:
                    if(validarParentesisi(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=2;
                    break;
                    }else {
                    return false;
                    }
                case 2:
                    if(validarID(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=3;
                    break;
                    }else {
                    return false;
                    }
                case 3:
                    if(validarComa(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=4;
                    break;
                    }else {
                    return false;
                    } 
                 case 4:
                    if(validarNombre(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=5;
                    break;
                    }else {
                    return false;
                    }
                 
                  case 5:
                    if(validarComa(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=6;
                    break;
                    }else {
                    return false;
                    }
                  
                   case 6:
                    if(validarNombre(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=7;
                    break;
                    }else {
                    return false;
                    }
                   
                    case 7:
                    if(validarComa(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=8;
                    break;
                    }else {
                    return false;
                    }
                    
                     case 8:
                    if(validarCantidad(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=9;
                    break;
                    }else {
                    return false;
                    }
                  
                  case 9:
                    if(validarParentesisf(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=10;
                    break;
                    }else {
                    return false;
                    }
                  
                   case 10:
                    if(validarCierre(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=11;
                    break;
                    }else {
                    return false;
                    }
                case 11:
                    return false;
            }
             gramatica = $('#gramaticaOut').val();
             $('#gramaticaOut').val(gramatica+"\n\n");
            cToken++;
            con++;
        }
        return true;
    }
    function validarRecurso(token, txtGramatica, txtErrores,tokenArea, tam, nLin, lin) {
        linea = lin;
        var produccion=1;
        var con=1;
         var gramatica = $('#gramaticaOut').val();
         $('#gramaticaOut').val(gramatica+"\nEl token es un tipo de dato\n\n");
        while(con!=tam){
            gramatica = $('#gramaticaOut').val();
            $('#gramaticaOut').val(gramatica+(con+1)+".- ");
            switch(produccion){
                 case 1:
                    if(validarParentesisi(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=2;
                    break;
                    }else {
                    return false;
                    }
                case 2:
                    if(validarID(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=3;
                    break;
                    }else {
                    return false;
                    }
                case 3:
                    if(validarComa(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=4;
                    break;
                    }else {
                    return false;
                    } 
                 case 4:
                    if(validarID(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=5;
                    break;
                    }else {
                    return false;
                    }
                 
                  case 5:
                    if(validarComa(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=6;
                    break;
                    }else {
                    return false;
                    }
                  
                   case 6:
                    if(validarNombre(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=7;
                    break;
                    }else {
                    return false;
                    }
                  
                  
                  case 7:
                    if(validarParentesisf(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=8;
                    break;
                    }else {
                    return false;
                    }
                  
                   case 8:
                    if(validarCierre(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=9;
                    break;
                    }else {
                    return false;
                    }
                case 9:
                    return false;
            }
             gramatica = $('#gramaticaOut').val();
             $('#gramaticaOut').val(gramatica+"\n\n");
            cToken++;
            con++;
        }
        return true;
    }

    function validarHoras(token, txtGramatica, txtErrores,tokenArea, tam, nLin, lin) {
        linea = lin;
        var produccion=1;
        var con=1;
         var gramatica = $('#gramaticaOut').val();
         $('#gramaticaOut').val(gramatica+"\nEl token es un tipo de dato\n\n");
        while(con!=tam){
            gramatica = $('#gramaticaOut').val();
            $('#gramaticaOut').val(gramatica+(con+1)+".- ");
            switch(produccion){
                case 1:
                    if(validarParentesisi(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=2;
                    break;
                    }else {
                    return false;
                    }
                case 2:
                    if(validarID(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=3;
                    break;
                    }else {
                    return false;
                    }
                case 3:
                    if(validarComa(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=4;
                    break;
                    }else {
                    return false;
                    } 
                 case 4:
                    if(validarDia(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=5;
                    break;
                    }else {
                    return false;
                    }
                 
                  case 5:
                    if(validarComa(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=6;
                    break;
                    }else {
                    return false;
                    }
                  
                   case 6:
                    if(validarHora(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=7;
                    break;
                    }else {
                    return false;
                    }
                  
                  
                  case 7:
                    if(validarParentesisf(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=8;
                    break;
                    }else {
                    return false;
                    }
                  
                   case 8:
                    if(validarCierre(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=9;
                    break;
                    }else {
                    return false;
                    }
                case 9:
                    return false;
            }
             gramatica = $('#gramaticaOut').val();
             $('#gramaticaOut').val(gramatica+"\n\n");
            cToken++;
            con++;
        }
        return true;
    }

function validarAlumno(token, txtGramatica, txtErrores,tokenArea, tam, nLin, lin) {
        linea = lin;
        var produccion=1;
        var con=1;
         var gramatica = $('#gramaticaOut').val();
         $('#gramaticaOut').val(gramatica+"\nEl token es un tipo de dato\n\n");
        while(con!=tam){
            gramatica = $('#gramaticaOut').val();
            $('#gramaticaOut').val(gramatica+(con+1)+".- ");
            switch(produccion){
                case 1:
                    if(validarParentesisi(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=2;
                    break;
                    }else {
                    return false;
                    }
                case 2:
                    if(validarID(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=3;
                    break;
                    }else {
                    return false;
                    }
                case 3:
                    if(validarComa(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=4;
                    break;
                    }else {
                    return false;
                    } 
                 case 4:
                    if(validarNombre(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=5;
                    break;
                    }else {
                    return false;
                    }
                 
                  case 5:
                    if(validarComa(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=6;
                    break;
                    }else {
                    return false;
                    }
                  
                   case 6:
                    if(validarNombre(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=7;
                    break;
                    }else {
                    return false;
                    }
                  case 7:
                    if(validarParentesisf(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=8;
                    break;
                    }else {
                    return false;
                    }
                  
                   case 8:
                    if(validarCierre(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=9;
                    break;
                    }else {
                    return false;
                    }
                case 9:
                    return false;
            }
             gramatica = $('#gramaticaOut').val();
             $('#gramaticaOut').val(gramatica+"\n\n");
            cToken++;
            con++;
        }
        return true;
    }

 function validarAsignacion(token, txtGramatica, txtErrores,tokenArea, tam, nLin, lin) {
        var tokens = $('#tokensOut').val();
        $('#tokensOut').val(""+tokens+"\n"+cToken+".- "+token[0]);
        $('#tablaS').append('<tr><td>'+cToken+'</td><td>'+token[0]+'</td><td>palabra reservada</td><td>'+nLin+'</td><td>'+columna+'</td></tr>')
        linea = lin;
        var produccion=1;
        var con=1;
         var gramatica = $('#gramaticaOut').val();
         $('#gramaticaOut').val(gramatica+"\nEl token es un tipo de dato\n\n");
        while(con!=tam){
            gramatica = $('#gramaticaOut').val();
            $('#gramaticaOut').val(gramatica+(con+1)+".- ");
            switch(produccion){
                case 1:
                    if(validarParentesisi(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=2;
                    break;
                    }else {
                    return false;
                    }
                case 2:
                    if(validarID(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=3;
                    break;
                    }else {
                    return false;
                    }
                case 3:
                    if(validarComa(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=4;
                    break;
                    }else {
                    return false;
                    } 
                 case 4:
                    if(validarID(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=5;
                    break;
                    }else {
                    return false;
                    }
                 
                  case 5:
                    if(validarParentesisf(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=6;
                    break;
                    }else {
                    return false;
                    }
                  
                   case 6:
                    if(validarCierre(txtGramatica,txtErrores,tokenArea,token[con],nLin)){
                    produccion=7;
                    break;
                    }else {
                    return false;
                    }
                case 7:
                    return false;
            }
             gramatica = $('#gramaticaOut').val();
             $('#gramaticaOut').val(gramatica+"\n\n");
            cToken++;
            con++;
        }
        return true;
    }

      function validarParentesisi(txtGramatica, txtErrores, tokenArea,token, nLin) {
         cToken++;
         columna = columna + token.length+tipo;
         var gramatica = $('#gramaticaOut').val();
          $('#gramaticaOut').val(gramatica+"Se evalúa el token "+token);
         var tokens = $('#tokensOut').val();
         $('#tokensOut').val(tokens+"\n"+cToken+".- "+token);
         var errores = $('#outPut').val();

        if(evalER("^\\($",token)){
            gramatica = $('#gramaticaOut').val();
            $('#gramaticaOut').val(gramatica+"\nEl token es una apertura de propiedades");
            $('#tablaS').append('<tr><td>'+cToken+'</td><td>'+token+'</td><td>signo de agrupacion</td><td>'+nLin+'</td><td>'+columna+'</td></tr>')
            columna = columna + token.length;
            return true;
        }        
        $('#outPut').val(errores+"\nError: Se esperaba un ( en la línea "+nLin+" columna "+columna);
        return false;
    }
    
   function validarID(txtGramatica, txtErrores, tokenArea,token, nLin) {
         var gramatica = $('#gramaticaOut').val();
          $('#gramaticaOut').val(gramatica+"Se evalúa el token "+token);
         var tokens = $('#tokensOut').val();
         $('#tokensOut').val(tokens+"\n"+cToken+".- "+token);
         var errores = $('#outPut').val();

        if(evalER("^[A-Za-z0-9_]+$",token)){
            gramatica = $('#gramaticaOut').val();
            $('#gramaticaOut').val(gramatica+"\nEl token es ID");
             $('#tablaS').append('<tr><td>'+cToken+'</td><td>'+token+'</td><td>ID alfanumerico</td><td>'+nLin+'</td><td>'+columna+'</td></tr>')
            columna = columna + token.length;
            return true;
        }        
        $('#outPut').val(errores+"\nError: Se esperaba un ID en la línea "+nLin+" columna "+columna);
        return false;
    }
    
    function validarComa(txtGramatica, txtErrores, tokenArea,token, nLin) {
         var gramatica = $('#gramaticaOut').val();
          $('#gramaticaOut').val(gramatica+"Se evalúa el token "+token);
         var tokens = $('#tokensOut').val();
         $('#tokensOut').val(tokens+"\n"+cToken+".- "+token);
         var errores = $('#outPut').val();

        if(evalER("^\\,$",token)){
            gramatica = $('#gramaticaOut').val();
            $('#gramaticaOut').val(gramatica+"\nEl token , es valido");
             $('#tablaS').append('<tr><td>'+cToken+'</td><td>'+token+'</td><td>signo de puntuacion</td><td>'+nLin+'</td><td>'+columna+'</td></tr>')
            columna = columna + token.length;
            return true;
        }        
        $('#outPut').val(errores+"\nError: Se esperaba una , en la línea "+nLin+" columna "+columna);
        return false;
    }

     function validarComaOpcional(txtGramatica, txtErrores, tokenArea,token, nLin) {
         var gramatica = $('#gramaticaOut').val();
          $('#gramaticaOut').val(gramatica+"Se evalúa el token "+token);
         var tokens = $('#tokensOut').val();
         $('#tokensOut').val(tokens+"\n"+cToken+".- "+token);
         var errores = $('#outPut').val();

        if(evalER("^\\,$",token)){
            gramatica = $('#gramaticaOut').val();
            $('#gramaticaOut').val(gramatica+"\nEl token , es valido");
             $('#tablaS').append('<tr><td>'+cToken+'</td><td>'+token+'</td><td>signo de puntuación</td><td>'+nLin+'</td><td>'+columna+'</td></tr>')
           columna = columna + token.length;
            return true;
        }     
        if(evalER("^\\)$",token)){
            return false;
        }      
        $('#outPut').val(errores+"\nError: Se esperaba una , o un ) en la línea "+nLin+" columna "+columna);
        return false;
    }
    
      function validarCantidad(txtGramatica, txtErrores, tokenArea,token, nLin) {
         var gramatica = $('#gramaticaOut').val();
          $('#gramaticaOut').val(gramatica+"Se evalúa el token "+token);
         var tokens = $('#tokensOut').val();
         $('#tokensOut').val(tokens+"\n"+cToken+".- "+token);
         var errores = $('#outPut').val();

        if(evalER("^[0-9]+$",token)){
            gramatica = $('#gramaticaOut').val();
            $('#gramaticaOut').val(gramatica+"\nEl token es una cantidad");
            $('#tablaS').append('<tr><td>'+cToken+'</td><td>'+token+'</td><td>número</td><td>'+nLin+'</td><td>'+columna+'</td></tr>')
            columna = columna + token.length;
            return true;
        }        
        $('#outPut').val(errores+"\nError: Se esperaba una cantidad en la línea "+nLin+" columna "+columna);
        return false;
    }

      function validarHora(txtGramatica, txtErrores, tokenArea,token, nLin) {
         var gramatica = $('#gramaticaOut').val();
          $('#gramaticaOut').val(gramatica+"Se evalúa el token "+token);
         var tokens = $('#tokensOut').val();
         $('#tokensOut').val(tokens+"\n"+cToken+".- "+token);
         var errores = $('#outPut').val();

        if(evalER("^([0-1][0-9]|[2][0-4])$",token)){
            gramatica = $('#gramaticaOut').val();
            $('#gramaticaOut').val(gramatica+"\nEl token es una hora");
            $('#tablaS').append('<tr><td>'+cToken+'</td><td>'+token+'</td><td>hora</td><td>'+nLin+'</td><td>'+columna+'</td></tr>')
            columna = columna + token.length;
            return true;
        }        
        $('#outPut').val(errores+"\nError: Se esperaba una hora en la línea "+nLin+" columna "+columna);
        return false;
    }
      
     function validarNombre(txtGramatica, txtErrores, tokenArea,token, nLin) {
         var gramatica = $('#gramaticaOut').val();
          $('#gramaticaOut').val(gramatica+"Se evalúa el token "+token);
         var tokens = $('#tokensOut').val();
         $('#tokensOut').val(tokens+"\n"+cToken+".- "+token);
         var errores = $('#outPut').val();

        if(evalER("^[a-zA-Zñó]+$",token)){
            gramatica = $('#gramaticaOut').val();
            $('#gramaticaOut').val(gramatica+"\nEl token es un nombre");
            $('#tablaS').append('<tr><td>'+cToken+'</td><td>'+token+'</td><td>cadena</td><td>'+nLin+'</td><td>'+columna+'</td></tr>')
            columna = columna + token.length;
            return true;
        }        
        $('#outPut').val(errores+"\nError: Se esperaba una cadena en la línea "+nLin+" columna "+columna);
        return false;
    }

     function validarDia(txtGramatica, txtErrores, tokenArea,token, nLin) {
         var gramatica = $('#gramaticaOut').val();
          $('#gramaticaOut').val(gramatica+"Se evalúa el token "+token);
         var tokens = $('#tokensOut').val();
         $('#tokensOut').val(tokens+"\n"+cToken+".- "+token);
         var errores = $('#outPut').val();

        if(evalER("^L?M?X?J?V?$",token)){
            gramatica = $('#gramaticaOut').val();
            $('#gramaticaOut').val(gramatica+"\nEl token es un nombre");
            $('#tablaS').append('<tr><td>'+cToken+'</td><td>'+token+'</td><td>día</td><td>'+nLin+'</td><td>'+columna+'</td></tr>')
            columna = columna + token.length;
            return true;
        }        
        $('#outPut').val(errores+"\nError: Se esperaba un día en la línea "+nLin+" columna "+columna);
        return false;
    }
     
      function validarParentesisf(txtGramatica, txtErrores, tokenArea,token, nLin) {
         var gramatica = $('#gramaticaOut').val();
          $('#gramaticaOut').val(gramatica+"Se evalúa el token "+token);
         var tokens = $('#tokensOut').val();
         $('#tokensOut').val(tokens+"\n"+cToken+".- "+token);
         var errores = $('#outPut').val();

        if(evalER("^\\)$",token)){
            gramatica = $('#gramaticaOut').val();
            $('#gramaticaOut').val(gramatica+"\nEl token ) es un cierre de funcion");
            $('#tablaS').append('<tr><td>'+cToken+'</td><td>'+token+'</td><td>signo de agrupacion</td><td>'+nLin+'</td><td>'+columna+'</td></tr>')
            columna = columna + token.length;
            return true;
        }        
        $('#outPut').val(errores+"\nError: Se esperaba un )  en la línea "+nLin+" columna "+columna);
        return false;
    }
      
    function validarCierre(txtGramatica, txtErrores, tokenArea,token, nLin) {
         var gramatica = $('#gramaticaOut').val();
          $('#gramaticaOut').val(gramatica+"Se evalúa el token "+token);
         var tokens = $('#tokensOut').val();
         $('#tokensOut').val(tokens+"\n"+cToken+".- "+token);
         var errores = $('#outPut').val();

        if(evalER("^\\;$",token)){
            gramatica = $('#gramaticaOut').val();
            $('#gramaticaOut').val(gramatica+"\nEl token ; es un cierre de instruccion");
            $('#tablaS').append('<tr><td>'+cToken+'</td><td>'+token+'</td><td>signo de puntuacion</td><td>'+nLin+'</td><td>'+columna+'</td></tr>')
            columna = columna + token.length;
            return true;
        }        
        $('#outPut').val(errores+"\nError: Se esperaba un ;  en la línea "+nLin+" columna "+columna);
        return false;
    }
     
     function evalER(str, car){
        var reg = new RegExp(str);
        if(reg.test(car)){
            return true;
        }else{
            return false;
        }
    }

    

      