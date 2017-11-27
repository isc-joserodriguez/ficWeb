var Alumno=[];
var Edificio=[];
var Grupo=[];
var Maestro=[];
var Aula=[];
var Recurso=[];
var Materia=[];
var Hora=[];

function inserta_Alumno(id,nombre,carrera){
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
console.log(inserta_Alumno(13400483,"Shepe","ISC"));
console.log(inserta_Alumno(13400484,"Julio","ISC"));
console.log(inserta_Alumno(13400490,"Sama","ISC"));

console.log(busca_id(13400490));