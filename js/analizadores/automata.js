var nErrores=0;
function ComenzarAutomata(){
    var automataArea= $('#automataOut');
    var errorArea=$('#outPut');
    analizarLineasAut(automataArea,errorArea,editor.getValue());
};
function analizarLineasAut(txtAutomata,txtErrores,exp) {
    var lin=exp.split("\n");
    txtAutomata.val("");
    txtErrores.val("");
    nErrores=0;
    for(var i=0;i<lin.length;i++){
        if(lin[i]!=""&&lin[i]!=" ")
        validarAutLin(lin[i],txtAutomata,txtErrores,i+1);
    }
    /*
    if(nErrores!=0){
        txtErrores.val(txtErrores.val()+"\n\nEl código se ejecutó con errores léxicos.");
    }else{
        txtErrores.val(txtErrores.val()+"\n\nEl código se ejecutó sin errores léxicos.");
    }*/
}

function validarAutLin(lin, txtAutomata, txtErrores,  nLin) {
    if(!lin.substring(lin.length-1,lin.length)==";"){
        //txtErrores.val(txtErrores.val()+"\nError: Se esperba un ; en la línea "+nLin+" columna "+lin.length());
        nErrores++;
        return;
    }
    if(/Alumno /.test(lin)){
        lin=lin.replace(/, \w+ \w+ \w+ ,|, \w+ \w+ ,|, \w+ \w+ \w+ \w+ ,/,", NombreAlumno ,");
    }else if(/Maestro /.test(lin)){
        lin=lin.replace(/, \w+ \w+ \w+ ,|, \w+ \w+ ,|, \w+ \w+ \w+ \w+ ,/,", NombreMaestro ,");
    }

    var token=lin.replace(";", " ;").split(" ");

    if(!validarAutomata(token,txtAutomata,txtErrores, token.length,nLin)){
        nErrores++;
    }
}

function  validarAutomata(token, txtAutomata, txtErrores,  tam, nLin) {
    var estado=1,con=0;
    while(con!=tam){
        txtAutomata.val(txtAutomata.val()+(con+1)+".- ");
        switch(estado){
            case 1:
                estado=validarQ1(txtAutomata,txtErrores,token[con]);
                break;
            case 2:
                estado=validarQ2(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 3:
                estado=validarQ3(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 4:
                estado=validarQ4(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 5:
                estado=validarQ5(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 6:
                estado=validarQ6(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 7:
                estado=validarQ7(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 8:
                estado=validarQ8(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 9:
                estado=validarQ9(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 10:
                estado=validarQ10(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 11:
                estado=validarQ11(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 13:
                estado=validarQ13(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 14:
                estado=validarQ14(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 15:
                estado=validarQ15(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 16:
                estado=validarQ16(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 17:
                estado=validarQ17(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 18:
                estado=validarQ18(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 19:
                estado=validarQ19(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 20:
                estado=validarQ20(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 21:
                estado=validarQ21(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 22:
                estado=validarQ22(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 23:
                estado=validarQ23(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 24:
                estado=validarQ24(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 25:
                estado=validarQ25(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 26:
                estado=validarQ26(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 27:
                estado=validarQ27(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 28:
                estado=validarQ28(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 29:
                estado=validarQ29(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 30:
                estado=validarQ30(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 31:
                estado=validarQ31(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 32:
                estado=validarQ32(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 33:
                estado=validarQ33(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 34:
                estado=validarQ34(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 35:
                estado=validarQ35(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 36:
                estado=validarQ36(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 37:
                estado=validarQ37(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 38:
                estado=validarQ38(txtAutomata,txtErrores,token[con],nLin);
                break;
            case 39:
                return false;
            case 1000:
                return true;
        }
        txtAutomata.val(txtAutomata.val()+"\n\n");
        con++;
    }
    return estado==12;
}

function validarQ1(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    switch(token){
        case "Materia":
        case "Aula":
            txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q24");
            return 1000;
        case "Hora":
            txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q18");
            return 18;
        case "Recurso":
        case "Alumno":
            txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q6");
            return 6;
        case "Edificio":
        case "AsignarRecurso":
        case "AsignarGrupo":
        case "AsignarEdificio":
        case "AsignarAula":
        case "AsignarMaestro":
        case "AsignarHora":
        case "AsignarAlumno":
            txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q2");
            return 2;
        case "Grupo":
            txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q9");
            return 9;
        case "Maestro":
            txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q27");
            return 27;

        default:
            txtErrores.val(txtErrores.val()+"\nSe desconoce el token "+token+" en la línea "+nLin);
            return 39;
    }
}

function validarQ2(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    

    switch(token){
        case "(":
            txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q3");
            return 3;
        default:
            //txtErrores.val(txtErrores.val()+"\nError: Se esperaba un ( en la línea "+nLin);
            return 39;
    }
}

function validarQ3(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    //txt
    txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q4");
    return 4;

}

function validarQ4(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    switch(token){
        case ",":
            txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q5");
            return 5;
        default:
            //txtErrores.val(txtErrores.val()+"\nError: Se esperaba un , en la línea "+nLin);
            return 39;
    }
}

function validarQ5(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    //txt
    txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q10");
    return 10;
}

function validarQ6(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    switch(token){
        case "(":
            txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q7");
            return 7;
        default:
            //txtErrores.val(txtErrores.val()+"\nError: Se esperaba un ( en la línea "+nLin);
            return 39;
    }
}

function validarQ7(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    //txt
    txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q8");
    return 8;
}

function validarQ8(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    switch(token){
        case ",":
            txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q3");
            return 3;
        default:
            //txtErrores.val(txtErrores.val()+"\nError: Se esperaba un , en la línea "+nLin);
            return 39;
    }
}

function validarQ9(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    switch(token){
        case "(":
            txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q13");
            return 13;
        default:
            //txtErrores.val(txtErrores.val()+"\nError: Se esperaba un ( en la línea "+nLin);
            return 39;
    }
}

function validarQ10(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    switch(token){
        case ")":
            txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q11");
            return 11;
        default:
            //txtErrores.val(txtErrores.val()+"\nError: Se esperaba un ( en la línea "+nLin);
            return 39;
    }
}

function validarQ11(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    switch(token){
        case ";":
            txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q12");
            return 12;
        default:
            //txtErrores.val(txtErrores.val()+"\nError: Se esperaba un ( en la línea "+nLin);
            return 39;
    }
}

function validarQ13(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    //txt
    txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q14");
    return 14;
}

function validarQ14(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    

    switch(token){
        case ",":
            txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q15");
            return 15;
        default:
            //txtErrores.val(txtErrores.val()+"\nError: Se esperaba un , en la línea "+nLin);
            return 39;
    }
}

function validarQ15(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    //txt
    txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q16");
    return 16;
}

function validarQ16(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    switch(token){
        case ",":
            txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q17");
            return 17;
        default:
            //txtErrores.val(txtErrores.val()+"\nError: Se esperaba un , en la línea "+nLin);
            return 39;
    }
}

function validarQ17(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    var exp=/^\d$|^\d\d$|^\d\d\d$/
    if(exp.test(token)){
        txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q4");
        return 4;
    }
    //txtErrores.val(txtErrores.val()+"\nError: Se esperaba un , en la línea "+nLin);
    return 39;
}

function validarQ18(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    switch(token){
        case "(":
            txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q19");
            return 19;
        default:
            //txtErrores.val(txtErrores.val()+"\nError: Se esperaba un ( en la línea "+nLin);
            return 39;
    }
}

function validarQ19(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    //txt
    txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q20");
    return 20;
}

function validarQ20(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    switch(token){
        case ",":
            txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q21");
            return 21;
        default:
            //txtErrores.val(txtErrores.val()+"\nError: Se esperaba un , en la línea "+nLin);
            return 39;
    }

}

function validarQ21(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    //txt
    txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q37");
    return 37;
}
/*
function validarQ22(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    switch(token){
        case ",":
            txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q23");
            return 23;
        default:
            txtErrores.val(txtErrores.val()+"\nError: Se esperaba un , en la línea "+nLin);
            return 39;
    }
}
*/
function validarQ23(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    var exp=/^\d$|^\d\d$|^\d\d\d$/
    if(exp.test(token)){
        txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q10");
        return 10;
    }
    //txtErrores.val(txtErrores.val()+"\nError: Se esperaba un número en la línea "+nLin);
    return 39;
}

function validarQ24(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    switch(token){
        case "(":
            txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q25");
            return 25;
        default:
            //txtErrores.val(txtErrores.val()+"\nError: Se esperaba un ( en la línea "+nLin);
            return 39;
    }
}

function validarQ25(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    //txt
    txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q26");
    return 26;
}

function validarQ26(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    switch(token){
        case ",":
            txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q19");
            return 19;
        default:
            //txtErrores.val(txtErrores.val()+"\nError: Se esperaba un , en la línea "+nLin);
            return 39;
    }

}

function validarQ27(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    switch(token){
        case "(":
            txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q28");
            return 28;
        default:
            //txtErrores.val(txtErrores.val()+"\nError: Se esperaba un ( en la línea "+nLin);
            return 39;
    }
}

function validarQ28(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    //txt
    txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q29");
    return 29;

}

function validarQ29(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    switch(token){
        case ",":
            txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q30");
            return 30;
        default:
            //txtErrores.val(txtErrores.val()+"\nError: Se esperaba un , en la línea "+nLin);
            return 39;
    }

}

function validarQ30(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    //txt
    txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q31");
    return 31;

}

function validarQ31(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    switch(token){
        case ",":
            txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q32");
            return 32;
        default:
            //txtErrores.val(txtErrores.val()+"\nError: Se esperaba un , en la línea "+nLin);
            return 39;
    }

}

function validarQ32(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    var exp=/^\d$|^\d\d$|^\d\d\d$/
    if(exp.test(token)){
        txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q33");
        return 33;
    }
    //txtErrores.val(txtErrores.val()+"\nError: Se esperaba un , en la línea "+nLin);
    return 39;

}

function validarQ33(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    switch(token){
        case ",":
            txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q34");
            return 34;
        default:
            //txtErrores.val(txtErrores.val()+"\nError: Se esperaba un , en la línea "+nLin);
            return 39;
    }

}

function validarQ34(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    var exp=/^\d$|^\d\d$|^\d\d\d$/
    if(exp.test(token)){
        txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q35");
        return 35;
    }
    //txtErrores.val(txtErrores.val()+"\nError: Se esperaba un , en la línea "+nLin);
    return 39;

}

function validarQ35(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    switch(token){
        case ",":
            txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q36");
            return 36;
        default:
            //txtErrores.val(txtErrores.val()+"\nError: Se esperaba un , en la línea "+nLin);
            return 39;
    }

}

function validarQ36(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    var exp=/^\d$|^\d\d$|^\d\d\d$/
    if(exp.test(token)){
        txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q37");
        return 37;
    }
    //txtErrores.val(txtErrores.val()+"\nError: Se esperaba un , en la línea "+nLin);
    return 39;

}

function validarQ37(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    
    switch(token){
        case ",":
            txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q38");
            return 23;
        default:
            //txtErrores.val(txtErrores.val()+"\nError: Se esperaba un , en la línea "+nLin);
            return 39;
    }

}
/*
function validarQ38(txtAutomata, txtErrores,  token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    

    var exp=/^\d$|^\d\d$|^\d\d\d$/
    if(exp.test(token)){
        txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q22");
        return 22;
    }
    //txtErrores.val(txtErrores.val()+"\nError: Se esperaba un , en la línea "+nLin);
    return 39;
}
*/