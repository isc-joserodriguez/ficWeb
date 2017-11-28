var indiceBusqueda=0;
var Alumno=[];
var Edificio=[];
var Grupo=[];
var Maestro=[];
var Aula=[];
var Recurso=[];
var Materia=[];
var Hora=[];
var disponible=[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]

function inicializar(){
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
                asignarRecurso(prop[0],prop[1],prop[2]);
                break;
                /*
            case "AsignarGrupo":
                declaraGrupo(prop[0],prop[1],prop[2],prop[3]);
                break;
            case "AsignarEdificio":
                break;

            case "AsignarAula":
                break;

            case "AsignarMaestro":
                break;*/
            case "AsignarHora":
                asignarHora(prop[0],prop[1]);
                break;
/*
            case "AsignarAlumno":
                break;

            */
        }
    }
    imprimirTokio();
}
function imprimirTokio() {
    console.log(
        "Alumnos: \t"+JSON.stringify(Alumno)+"\n"+
        "Edificios: \t"+JSON.stringify(Edificio)+"\n"+
        "Grupos: \t"+JSON.stringify(Grupo)+"\n"+
        "Maestros: \t"+JSON.stringify(Maestro)+"\n"+
        "Aulas: \t"+JSON.stringify(Aula)+"\n"+
        "Recursos: \t"+JSON.stringify(Recurso)+"\n"+
        "Materias: \t"+JSON.stringify(Materia)+"\n"+
        "Horas: \t"+JSON.stringify(Hora)
    )

}
function declaraAlumno(id, nombre, carrera){
    let exist=false;
    for(let a of Alumno){
        if(a.id==id){
            exist=true;
        }
    }
    if(exist){
        return "error ya existe el id";
    }else {
        Alumno.push({id:id,nombre:nombre,carrera:carrera});
        return "se guardo correctamente";
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
        return "error ya existe el id";
    }else {
        Edificio.push({id:id,nombre:nombre,aulas:[]});
        return "se guardo correctamente";
    }
}
function declaraGrupo ( id , nombre , capacidad , carrera ){
    let exist=false;
    for(let a of Grupo){
        if(a.id==id){
            exist=true;
        }
    }
    if(exist){
        return "error ya existe el id";
    }else {
        Grupo.push({id:id,nombre:nombre,capacidad:capacidad,carrera:carrera,alumnos:[],recursos:[],hora:""});
        return "se guardo correctamente";
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
        return "error ya existe el id";
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
        return "se guardo correctamente";
    }
}
function declaraAula ( id , nombre , capacidad ){
    let exist=false;
    for(let a of Aula){
        if(a.id==id){
            exist=true;
        }
    }
    if(exist){
        return "error ya existe el id";
    }else {
        Aula.push({id:id,nombre:nombre,capacidad:capacidad,recursos:[],disponible:disponible});
        return "se guardo correctamente";
    }
}
function declaraRecurso ( id , serie , nombre ){
    let exist=false;
    for(let a of Recurso){
        if(a.id==id){
            exist=true;
        }
    }
    if(exist){
        return "error ya existe el id";
    }else {
        Recurso.push({id:id,serie:serie,nombre:nombre,disponible:disponible});
        return "se guardo correctamente";
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
        return "error ya existe el id";
    }else {
        Materia.push({id:id,nombre:nombre,carrera:carrera,creditos:creditos,recursos:[]});
        return "se guardo correctamente";
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
        return "error ya existe el id";
    }else {
        Hora.push({id:id,dias:dias,hora:hora});
        return "se guardo correctamente";
    }
}


function asignarHora ( idHora , idGrupo ){
    var hora=buscarHoraID();
    if(hora){
        var grupo=buscarGrupoID(idGrupo);
        if(grupo){
            grupo.hora=hora.hora;
            return "Se asignó la hora correctamente";
        }else{
            return "No se encuentra grupo con id= "+idGrupo;
        }
    }else{
        return "No se encuentra hora con id= "+idHora;
    }

}
function asignarRecurso ( Rec, id ){
    var grupo=buscarGrupoID(id);
    if(grupo){
        if(grupo.hora==null){
            return "Primero debe asignarse una hora al grupo con id= "+id;
        }else{
            if(Grupo.recursos.length==0){
                Grupo[indiceBusqueda].recursos.push(Rec);
                return "Se asignó el recurso.";
            }else{
                for(let a of Grupo.recursos){
                    if(a==Rec){
                        return "Ya existe el recurso para el grupo."
                    }
                }
            }
            Grupo[indiceBusqueda].recursos.push(Rec);
            return "Se asignó el recurso.";
        }
    }else{
        var aula=buscarAulaID(id);
        if(aula){
            var recurso=buscarRecId(Rec);
            aula.recursos.push(recurso.id);
        }
    }
}
function asignarGrupo ( IDGrupo , IDMateria ){

}
function asignarEdificio ( IDEdificio , IDAula ){

}
function asignarAula ( IDAula , IDGrupo ){

}
function asignarMaestro ( IDMaestro , IDGrupo ){

}

function asignarAlumno ( IDAlumno , IDGrupo ){

}
function buscarRecNom() {

}
function buscarRecId(idRec) {
    indiceBusqueda=0;
    for(let a of Recurso){
        if(a.id==idRec){
            return a;
        }
        indiceBusqueda++;
    }
    return false;
}

function buscarGrupoID(idGrupo) {
    indiceBusqueda=0;
    for(let a of Grupo){
        if(a.id==idGrupo){
            return a;
        }
        indiceBusqueda++;
    }
    return false;
}

function buscarHoraID(idHora) {
    indiceBusqueda=0;
    for(let a of Hora){
        if(a.id==idHora){
            return a;
        }
        indiceBusqueda++;
    }
    return false;
}

function buscarAulaID(idAula) {
    indiceBusqueda=0;
    for(let a of Aula){
        if(a.id==idAula){
            return a;
        }
        indiceBusqueda++;
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

//console.log(busca_id(13400490));


/*
Recurso ( 1 , asd , Proyector );
Recurso ( 2 , qwe , Proyector );
Recurso ( 3 , gdf , Proyector );
Aula ( 1 , SV , 40 );
Grupo ( 1 , B , 30 , ISC );
Hora ( 1 , LMXJV , 12 );
AsignarHora ( 1 , 1 );
AsignarRecurso ( Proyector , 1 );
AsignarRecurso ( 1 , 1 );



 */