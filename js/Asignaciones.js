var indiceBusqueda=0;
var Alumno=[];
var Edificio=[];
var Grupo=[];
var Maestro=[];
var Aula=[];
var Recurso=[];
var Materia=[];
var Hora=[];
var disponible=["7","8","9","10","11","12","13","14","15","16","17","18","19","20","21"]

function inicializar(){
    $('#outPut').val("");
    indiceBusqueda=0;
    Alumno=[];
    Edificio=[];
    Grupo=[];
    Maestro=[];
    Aula=[];
    Recurso=[];
    Materia=[];
    Hora=[];
     
    var lin=editor.getValue().split("\n");
    for(let a of lin){
        var indice=a.indexOf(" ");
        var prop = a.substring(a.indexOf(" ")+3,a.length-3).split(" , ");
        switch(a.substring(0,indice)){
            case "Alumno":
                declaraAlumno(prop[0],prop[1],prop[2]);
                break;
            case "Edificio":
                declaraEdificio(prop[0],prop[1]);
                break;
            case "Grupo":
                declaraGrupo(prop[0],prop[1],prop[2],prop[3]);
                break;
            case "Maestro":
                declaraMaestro(prop[0],prop[1],prop[2],prop[3],prop[4],prop[5]);
                break;
            case "Aula":
                declaraAula(prop[0],prop[1],prop[2]);
                break;
            case "Recurso":
                declaraRecurso(prop[0],prop[1],prop[2]);
                break;
            case "Materia":
                declaraMateria(prop[0],prop[1],prop[2],prop[3]);
                break;
            case "Hora":
                declaraHora(prop[0],prop[1],prop[2]);
                break;

            case "AsignarRecurso":
                asignarRecurso(prop[0],prop[1]);
                break;
                
            case "AsignarGrupo":
                asignarGrupo(prop[0],prop[1]);
                break;
                
            case "AsignarEdificio":
                asignarEdificio ( prop[0] , prop[1] );
                break;

            case "AsignarAula":
                asignarAula(prop[0],prop[1]);
                break;

            case "AsignarMaestro":
                asignarMaestro(prop[0],prop[1]);
                break;
            case "AsignarHora":
                asignarHora(prop[0],prop[1]);
                break;

            case "AsignarAlumno":
                asignarAlumno(prop[0],prop[1]);
                break;

            
        }
        
    }

       
    imprimirTokio();
}

function imprimirTokio() {
    /*
    console.log(
        "Alumnos: \t"+JSON.stringify(Alumno)+"\n"+
        "Edificios: \t"+JSON.stringify(Edificio)+"\n"+
        "Grupos: \t"+JSON.stringify(Grupo)+"\n"+
        "Maestros: \t"+JSON.stringify(Maestro)+"\n"+
        "Aulas: \t"+JSON.stringify(Aula)+"\n"+
        "Recursos: \t"+JSON.stringify(Recurso)+"\n"+
        "Materias: \t"+JSON.stringify(Materia)+"\n"+
        "Horas: \t"+JSON.stringify(Hora)
    )*/
    console.log(
        "Grupos: \t"+JSON.stringify(Grupo)+"\n"+
        "Aulas: \t"+JSON.stringify(Aula)+"\n"+
        "Recursos: \t"+JSON.stringify(Recurso)+"\n"+
        "Edificios: \t"+JSON.stringify(Edificio)+"\n"+
        "Horas: \t"+JSON.stringify(Hora))

}
function declaraAlumno(id, nombre, carrera){
    let exist=false;
    for(let a of Alumno){
        if(a.id==id){
            exist=true;
        }
    }
    if(exist){
        $('#outPut').val($('#outPut').val()+"\n"+"Error ya existe el id de alumno.");
    }else {
        Alumno.push({id:id,nombre:nombre,carrera:carrera});
        $('#outPut').val($('#outPut').val()+"\n"+"Se guardo correctamente el alumno.");
    }
}
function declaraEdificio ( id , nombre ){
    let exist=false;
    for(let a of Edificio){
        if(a.id==id){
            exist=true;
        }
    }
    if(exist){
        $('#outPut').val($('#outPut').val()+"\n"+"Error ya existe el id de edificio.");
    }else {
        Edificio.push({id:id,nombre:nombre,aulas:[]});
        $('#outPut').val($('#outPut').val()+"\n"+"Se guardo correctamente el edificio.");
    }
}
function declaraGrupo ( id , nombre , capacidad , carrera ){
    let exist=false;
    for(let a of Grupo){
        if(a.id==id){
            exist=true;
        }
    }
    for(let a of Aula){
        if(a.id==id){
            exist=true;
        }
    }
    if(exist){
        $('#outPut').val($('#outPut').val()+"\n"+"Error los id de grupos y aulas no puede repetirse.");
    }else {
        Grupo.push({id:id,nombre:nombre,capacidad:capacidad,carrera:carrera,alumnos:[],recursos:[],materia:"",hora:""});
        $('#outPut').val($('#outPut').val()+"\n"+"Se guardo correctamente el grupo");
    }
}
function declaraMaestro ( id , nombre , E1 , S1 , E2 , S2 ){
    let exist=false;
    for(let a of Maestro){
        if(a.id==id){
            exist=true;
        }
    }
    if(exist){
        $('#outPut').val($('#outPut').val()+"\n"+"Error ya existe el id de maestro.");
    }else {
        var temp=[];
        for(var i=S1;i<=E1;i--){
            temp.push(i);
        }
        for(var i=S2;i<=E2;i--){
            temp.push(i);
        }
        temp=temp.sort();
        Maestro.push({id:id,nombre:nombre,Entrada1:E1,Salida1:S1,Entrada2:E2,Salida2:S2,horas:temp});
        $('#outPut').val($('#outPut').val()+"\n"+"Se guardo correctamente el maestro.");
    }
}
function declaraAula ( id , nombre , capacidad ){
    let exist=false;
    for(let a of Aula){
        if(a.id==id){
            exist=true;
        }
    }
    for(let a of Grupo){
        if(a.id==id){
            exist=true;
        }
    }
    if(exist){
        $('#outPut').val($('#outPut').val()+"\n"+"Error id de aulas y grupos no debe repetirse.");
    }else {
        Aula.push({id:id,nombre:nombre,capacidad:capacidad,recursos:[],disponible:disponible});
        $('#outPut').val($('#outPut').val()+"\n"+"Se guardo correctamente el aula.");
    }
}
function declaraRecurso ( id , serie , nombre ){
    let existId=false;
    let existSr=false;
    for(let a of Recurso){
        if(a.id==id){
            existId=true;
        }
        if(a.serie == serie){
            existSr=true;
        }
    }
    if(existId){
        $('#outPut').val($('#outPut').val()+"\n"+"Error ya existe el id del recurso.");
    }else if(existSr){
        $('#outPut').val($('#outPut').val()+"\n"+"Error ya existe la serie del recurso.");
    }else {
        Recurso.push({id:id,serie:serie,nombre:nombre,disponible:disponible});
        $('#outPut').val($('#outPut').val()+"\n"+"Se guardo correctamente el recurso.");
    }
}
function declaraMateria ( id , nombre , carrera , creditos){
    let exist=false;
    for(let a of Materia){
        if(a.id==id){
            exist=true;
        }
    }
    if(exist){
        $('#outPut').val($('#outPut').val()+"\n"+"Error ya existe el id de la materia.");
    }else {
        Materia.push({id:id,nombre:nombre,carrera:carrera,creditos:creditos});
        $('#outPut').val($('#outPut').val()+"\n"+"Se guardo correctamente la materia.");
    }
}
function declaraHora ( id , dias , hora ){
    let exist=false;
    for(let a of Hora){
        if(a.id==id){
            exist=true;
        }
    }
    if(exist){
        $('#outPut').val($('#outPut').val()+"\n"+"Error ya existe el id de la hora.");
    }else {
        Hora.push({id:id,dias:dias,hora:hora});
        $('#outPut').val($('#outPut').val()+"\n"+"Se guardo correctamente la hora.");
    }
}
function asignarHora ( idHora , idGrupo ){
    var hora=buscarHoraID(idHora);
    if(hora){
        var grupo=buscarGrupoID(idGrupo);
        if(grupo){
            grupo.hora=hora.hora;
            $('#outPut').val($('#outPut').val()+"\n"+"Se asignó la hora correctamente.");
        }else{
            $('#outPut').val($('#outPut').val()+"\n"+"No se encuentra grupo con id= "+idGrupo+".");
        }
    }else{
        $('#outPut').val($('#outPut').val()+"\n"+"No se encuentra hora con id= "+idHora+".");
    }
}
//idRec, aul o Mat
function asignarRecurso ( Rec, aulGrup ){
    var grupo=buscarGrupoID(aulGrup);
    var indexGrupo=indiceBusqueda;
    if(grupo){
        console.log(grupo);
        if(grupo.materia==""){
                $('#outPut').val($('#outPut').val()+"\n"+"Primero debe asignarse una materia al grupo con id= "+aulGrup+".");
            }else if(grupo.hora==null){
                $('#outPut').val($('#outPut').val()+"\n"+"Primero debe asignarse una hora al grupo con id= "+aulGrup+".");
            }else{
                var recurso=buscarRecNom(Rec,grupo.hora);
                var indexRec=indiceBusqueda;
                if(recurso && recurso!=-1){
                    if(Grupo[indexGrupo].recursos.length==0){
                        Grupo[indexGrupo].recursos.push(Rec);
                        eliminarDisponible(Recurso[indexRec].disponible,grupo.hora);
                        $('#outPut').val($('#outPut').val()+"\n"+"Se asignó el recurso.");
                    }else{
                        let existe=false;
                        for(let a of Grupo[indiceBusqueda].recursos){
                            if(a==Rec){
                                existe=true;
                            }
                        }
                        if(existe){
                            $('#outPut').val($('#outPut').val()+"\n"+"Ya existe el recurso para el grupo.");
                        }else{
                            eliminarDisponible(Recurso[indexRec].disponible,grupo.hora);
                            Grupo[indexGrupo].recursos.push(Rec);
                            $('#outPut').val($('#outPut').val()+"\n"+"Se asignó el recurso.");
                        }
                    }
                }else{
                    $('#outPut').val($('#outPut').val()+"\n"+"No hay recurso disponible.");
                }
            }
    }else{
        var aula=buscarAulaID(aulGrup);
        var indexAula=indiceBusqueda;
        if(aula){
            var recurso=buscarRecId(Rec);
            var indexRec=indiceBusqueda;
            if(recurso){
                if(Aula[indexAula].recursos.length==0){
                    Aula[indexAula].recursos.push(Rec);
                    Recurso[indexRec].disponible=[];
                    $('#outPut').val($('#outPut').val()+"\n"+"Se asignó el recurso al aula.");
                }else{
                    let existe=false;
                    for(let a of Aula[indexAula].recursos){
                        if(a==Rec){
                            existe=true;
                        }
                    }
                    if(existe){
                        $('#outPut').val($('#outPut').val()+"\n"+"Ya existe el recurso para el aula.");
                    }else{
                        Recurso[indexRec].disponible=[];
                        Aula[indexAula].recursos.push(recurso.id);
                        $('#outPut').val($('#outPut').val()+"\n"+"Se asignó el recurso al aula.");
                    }
                }
            }
        }else{
            $('#outPut').val($('#outPut').val()+"\n"+"No existe aula/grupo con id= "+aulGrup+".");
        }
    }
}




function asignarGrupo ( idGrupo , idMateria ){
    grupo=buscarGrupoID(idGrupo);
    if(grupo){
        materia=buscarMatID(idMateria);
        if(materia){
            if(Grupo[indiceBusqueda].materia==""){
                Grupo[indiceBusqueda].materia=materia.id;
                $('#outPut').val($('#outPut').val()+"\n"+"Se asignó correctamente la materia al grupo.");
            }else{
                $('#outPut').val($('#outPut').val()+"\n"+"Ya existe la materia para grupo con id="+idGrupo+".");
            }
        }else{
            $('#outPut').val($('#outPut').val()+"\n"+"No se encuentra materia con id= "+idMateria+".");
        }
    }else{
        $('#outPut').val($('#outPut').val()+"\n"+"No se encuentra grupo con id= "+idGrupo+".");
    }

}
function asignarEdificio ( idEdificio , idAula ){
    aula=buscarAulaID(idAula);
    if(aula){
        edificio=buscarEdID(idEdificio);
        if(edificio){
            Edificio[indiceBusqueda].aulas.push(aula.id);
        }else{
            $('#outPut').val($('#outPut').val()+"\n"+"No se encuentra edificio con id= "+idEdificio+".");
        }
    }else{
        $('#outPut').val($('#outPut').val()+"\n"+"No se encuentra aula con id= "+idAula+".");
    }

}
function asignarAula ( idAula , idGrupo ){
    aula=buscarAulaID(idAula);
    if(aula){
        grupo=buscarGrupoID(idGrupo);
        if(grupo){
            Grupo[indiceBusqueda].aula=aula.id;
        }else{
            $('#outPut').val($('#outPut').val()+"\n"+"No se encuentra edificio con id= "+idEdificio+".");
        }
    }else{
        $('#outPut').val($('#outPut').val()+"\n"+"No se encuentra aula con id= "+idAula+".");
    }
}
function asignarMaestro ( idMaestro , idGrupo ){
    maestro=buscarMaeID(idMaestro);
    if(maestro){
        grupo=buscarGrupoID(idGrupo);
        if(grupo){
            Grupo[indiceBusqueda].maestro=maestro.id;
        }else{
            $('#outPut').val($('#outPut').val()+"\n"+"No se encuentra grupo con id= "+idGrupo+".");
        }
    }else{
        $('#outPut').val($('#outPut').val()+"\n"+"No se encuentra maestro con id= "+idMaestro+".");
    }

}

function asignarAlumno ( idAlumno , idGrupo ){
    alumno=buscarAlumID(idAlumno);
    if(alumno){
        grupo=buscarGrupoID(idGrupo);
        if(grupo){
            Grupo[indiceBusqueda].alumnos.push(alumno.id);
        }else{
            $('#outPut').val($('#outPut').val()+"\n"+"No se encuentra grupo con id= "+idGrupo+".");
        }
    }else{
        $('#outPut').val($('#outPut').val()+"\n"+"No se encuentra alumno con id= "+idAlumno+".");
    }

}
function buscarRecNom(nombre,hora) {
    for(indiceBusqueda=0;indiceBusqueda<Recurso.length;indiceBusqueda++){
        console.log(nombre+" - "+hora);
        console.log(Recurso[indiceBusqueda]);
        if(Recurso[indiceBusqueda].nombre==nombre && buscar(Recurso[indiceBusqueda].disponible,hora)!=-1){
            return Recurso[indiceBusqueda];
        }
    }
    return false;

}
function buscarRecId(idRec) {
    for(indiceBusqueda=0;indiceBusqueda<Recurso.length;indiceBusqueda++){
        if(Recurso[indiceBusqueda].id==idRec){
            return Recurso[indiceBusqueda];
        }
    }
    return false;
}

function buscarGrupoID(idGrupo) {
    for(indiceBusqueda=0;indiceBusqueda<Grupo.length;indiceBusqueda++){
        if(Grupo[indiceBusqueda].id==idGrupo){
            return Grupo[indiceBusqueda];
        }
    }
    return false;
}

function buscarHoraID(idHora) {
    for(indiceBusqueda=0;indiceBusqueda<Hora.length;indiceBusqueda++){
        if(Hora[indiceBusqueda].id==idHora){
            return Hora[indiceBusqueda];
        }
    }
    return false;
}

function buscarAulaID(idAula) {
    for(indiceBusqueda=0;indiceBusqueda<Aula.length;indiceBusqueda++){
        if(Aula[indiceBusqueda].id==idAula){
            return Aula[indiceBusqueda];
        }
    }
    return false;
}

function buscarEdID(idEdificio){
    for(indiceBusqueda=0;indiceBusqueda<Edificio.length;indiceBusqueda++){
        if(Edificio[indiceBusqueda].id==idEdificio){
            return Edificio[indiceBusqueda];
        }
    }
    return false;
}

function buscarMatID(idMat){
    for(indiceBusqueda=0;indiceBusqueda<Materia.length;indiceBusqueda++){
        if(Materia[indiceBusqueda].id==idMat){
            return Materia[indiceBusqueda];
        }
    }
    return false;
}

function busca_id(id){
    for(let a of Alumno){
        if(a.id==id){
            return a;
        }
    }
    return "No se encontro";
}
function busca_nombre(nombre){
    var result=[];
    for(let a of Alumno){
        if(a.nombre==nombre){
            result.push(a);
        }
    }
    if(result.length==0){
        return "No se encontro";
    }
    return result;
}
function eliminarDisponible(arr,ele){
    var i=buscar(arr,ele);
    arr.splice(i,i);
}
function buscar(arr,ele){
    for(var i=0;i<arr;i++){
        if(arr[i]==ele)return i;
    }
    return -1
}


function consultaAula(idMateria) {
    var contador = 0;
    var i = 0;
    for(let a of Aula){
        for(let m of Materia)
        if (idMateria = Materia.id){
            for (i;i<m.recursos.length;i++) 
            if(a.recursos[i] == m.recursos[i]){
            contador++;
        }
        if (contador = m.recursos.length){
            $('#outPut').val($('#outPut').val()+"\n"+"EL aula "+ a.nombre+ " está disponible");
    }
        
        }
       $('#outPut').val($('#outPut').val()+"\n"+"no existe la materia");
    }
   $('#outPut').val($('#outPut').val()+"\n"+"no hay aulas disponible para esa materia");
}

function cosultaDisponibilidad(idGrupo){
    for(let g of Grupo){
        if (idGrupo == g.id){
            if (capacidad > g.alumnos.length){
               $('#outPut').val($('#outPut').val()+"\n"+"Si hay espacios disponibles");
            }
             $('#outPut').val($('#outPut').val()+"\n"+"no hay espacios disponibles");
        }
         $('#outPut').val($('#outPut').val()+"\n"+"no se encontró el grupo");
    }
    

}


//console.log(busca_id(13400490));


/*
Recurso ( 1 , asd , Proyector );
Recurso ( 2 , qwe , Proyector );
Recurso ( 3 , gdf , Proyector );
Aula ( 1 , SV , 40 );
Grupo ( 1 , B , 30 , ISC );
Hora ( 1 , LMXJV , 12 );
Materia ( 1 , LYAII , ISC , 5 );
AsignarHora ( 1 , 1 );
AsignarGrupo ( 1 , 1 );
AsignarRecurso ( Proyector , 1 );
AsignarRecurso ( 1 , 1 );



 */






/*
Alumno ( IDAlumno , Nombre , Carrera );
Edificio ( IDEdificio , UVP );
Grupo ( IDGrupo , B , 30 , ISC );
Maestro ( IDMaestro , FIC , 09 , 12 , 14 , 18 );
Aula ( ID , B , 40 );
Recurso ( IDRecurso , SerieRecurso , Cañón );
Materia ( IDMateria , LYAII , ISC , 5 );
Hora ( IDHora , LMXJV , 12 );
AsignarRecurso ( IDRecurso , IDMateria );
AsignarGrupo ( IDGrupo , IDMateria );
AsignarEdificio ( IDEdificio , IDAula );
AsignarAula ( IDAula , IDGrupo );
AsignarMaestro ( IDMaestro , IDGrupo );
AsignarHora ( IDHora , IDGrupo );
AsignarAlumno ( IDAlumno , IDGrupo );
 */