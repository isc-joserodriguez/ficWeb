function Consultar(){
    $('#Consultas').val("");
     
    var lin=editor2.getValue().split("\n");

    for(let a of lin){
        var indice=a.indexOf(" ");
        var prop = a.substring(a.indexOf(" ")+3,a.length-3);
        var res;
        switch(a.substring(0,indice)){
            case "ConsultaAlumno":
                res=ConsultaAlumno(prop);
                break;
            case "ConsultaMaestro":
                res=ConsultaMaestro(prop);
                break;
            case "ConsultaAula":
                res=ConsultaAula(prop);
                break;
        }
        $('#Consultas').val($('#Consultas').val()+"\n"+res);
    }
}
function ConsultaAula(idAula) {

    if(idAula==" "){
        return JSON.stringify(Aula);
    }else{
        for(indiceBusqueda=0;indiceBusqueda<Aula.length;indiceBusqueda++){
            if(Aula[indiceBusqueda].id==idAula){
                return JSON.stringify(Aula[indiceBusqueda]);
            }
        }
    }
    return false;
}

function ConsultaMaestro(idMaestro){
    if(idMaestro== " "){
        return JSON.stringify(Maestro);
    }else{
        for(indiceBusqueda=0;indiceBusqueda<Maestro.length;indiceBusqueda++){
            if(Maestro[indiceBusqueda].id==idMaestro){
                return JSON.stringify(Maestro[indiceBusqueda]);
            }
        }
    }
    return false;
}
function ConsultaAlumno(idAlumno) {
    console.log(idAlumno)

    if(idAlumno==" "){
        
        return JSON.stringify(Alumno);
    }else{
        for(indiceBusqueda=0;indiceBusqueda<Alumno.length;indiceBusqueda++){
            if(Alumno[indiceBusqueda].id==idAlumno){
                return JSON.stringify(Alumno[indiceBusqueda]);
            }
        }
    }
    return false;
}