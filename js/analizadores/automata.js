var nErrores=0, cxToken=1;
$('#compile').on("click",function(){

    console.log(editor.getValue());

    var automataArea= $('#automataOut');
    var errorArea=$('#outPut');
    var tokenArea=$('#tokensOut');
    analizarLxL(automataArea,errorArea,tokenArea,editor.getValue());
});

function analizarLxL(txtAutomata,txtErrores,tokenArea,exp) {
    var lin=exp.split("\n");
    txtAutomata.val("");
    txtErrores.val("");
    tokenArea.val("");
    cToken=1;
    nErrores=0;
    for(var i=0;i<lin.length;i++){
        validar(lin[i],txtAutomata,txtErrores,tokenArea,i);
    }
    if(nErrores!=0){
        txtErrores.val(txtErrores.val()+"\n\nEl código se ejecutó con errores");
    }else{
        txtErrores.val(txtErrores.val()+"\n\nEl código se ejecutó sin errores");
    }
}

function validar(lin, txtAutomata, txtErrores, tokenArea, nLin) {
    /*if(!lin.substring(lin.length()-1,lin.length()).equals(";")){
        //txtErrores.val(txtErrores.val()+"\nError: Se esperba un ; en la línea "+nLin+" columna "+lin.length());
        nErrores++;
        return;
    }*/
    var token=lin.replace(";", " ;").split(" ");

    if(!validarAutomata(token,txtAutomata,txtErrores,tokenArea, token.length,nLin)){
        nErrores++;
    }
}

function  validarAutomata(token, txtAutomata, txtErrores, tokenArea, tam, nLin) {
    var estado=1,con=0;
    while(con!=tam){
        txtAutomata.val(txtAutomata.val()+(con+1)+".- ");
        switch(estado){
            case 1:
                estado=validarQ1(txtAutomata,txtErrores,tokenArea,token[con]);
                break;
            case 2:
                estado=validarQ2(txtAutomata,txtErrores,tokenArea,token[con],nLin);
                break;
            case 3:
                estado=validarQ3(txtAutomata,txtErrores,tokenArea,token[con],nLin);
                break;
            case 4:
                estado=validarQ4(txtAutomata,txtErrores,tokenArea,token[con],nLin);
                break;
            case 5:
                estado=validarQ5(txtAutomata,txtErrores,tokenArea,token[con],nLin);
                break;
            case 6:
                estado=validarQ6(txtAutomata,txtErrores,tokenArea,token[con],nLin);
                break;
            case 7:
                estado=validarQ7(txtAutomata,txtErrores,tokenArea,token[con],nLin);
                break;
            case 8:
                estado=validarQ8(txtAutomata,txtErrores,tokenArea,token[con],nLin);
                break;
            case 9:
                estado=validarQ9(txtAutomata,txtErrores,tokenArea,token[con],nLin);
                break;
            case 10:
                estado=validarQ10(txtAutomata,txtErrores,tokenArea,token[con],nLin);
                break;
            case 11:
                estado=validarQ11(txtAutomata,txtErrores,tokenArea,token[con],nLin);
                break;
            case 13:
                estado=validarQ13(txtAutomata,txtErrores,tokenArea,token[con],nLin);
                break;
            case 14:
                estado=validarQ14(txtAutomata,txtErrores,tokenArea,token[con],nLin);
                break;
            case 15:
                estado=validarQ15(txtAutomata,txtErrores,tokenArea,token[con],nLin);
                break;
            case 16:
                estado=validarQ16(txtAutomata,txtErrores,tokenArea,token[con],nLin);
                break;
            case 17:
                estado=validarQ17(txtAutomata,txtErrores,tokenArea,token[con],nLin);
                break;
            case 18:
                estado=validarQ18(txtAutomata,txtErrores,tokenArea,token[con],nLin);
                break;
            case 19:
                estado=validarQ19(txtAutomata,txtErrores,tokenArea,token[con],nLin);
                break;
            case 20:
                estado=validarQ20(txtAutomata,txtErrores,tokenArea,token[con],nLin);
                break;
            case 21:
                estado=validarQ21(txtAutomata,txtErrores,tokenArea,token[con],nLin);
                break;
            case 22:
                estado=validarQ22(txtAutomata,txtErrores,tokenArea,token[con],nLin);
                break;
            case 23:
                estado=validarQ23(txtAutomata,txtErrores,tokenArea,token[con],nLin);
                break;
            case 24:
                estado=validarQ24(txtAutomata,txtErrores,tokenArea,token[con],nLin);
                break;
            case 25:
                estado=validarQ25(txtAutomata,txtErrores,tokenArea,token[con],nLin);
                break;
            case 26:
                estado=validarQ26(txtAutomata,txtErrores,tokenArea,token[con],nLin);
                break;
            case 27:
                estado=validarQ27(txtAutomata,txtErrores,tokenArea,token[con],nLin);
                break;
            case 28:
                estado=validarQ28(txtAutomata,txtErrores,tokenArea,token[con],nLin);
                break;
            case 29:
                return false;
        }
        txtAutomata.val(txtAutomata.val()+"\n\n");
        cToken++;
        con++;
    }
    return estado==12;
}

function validarQ1(txtAutomata, txtErrores, tokenArea, token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    tokenArea.val(tokenArea.val()+"\n"+cToken+".- "+token);
    switch(token){
        case "Materia":
        case "Aula":
            txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q24");
            return 24;
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


        case "Grupo":
            txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q13");
            return 13;


            txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q25");
            return 25;
        case "maestro":
            txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q2");
            return 2;

        default:
            txtErrores.val(txtErrores.val()+"\nSe desconoce el token "+token+" en la línea "+nLin);
            return 29;
    }
}

function validarQ2(txtAutomata, txtErrores, tokenArea, token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    tokenArea.val(tokenArea.val()+"\n"+cToken+".- "+token);

    switch(token){
        case "(":
            txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q19");
            return 19;
        default:
            txtErrores.val(txtErrores.val()+"\nError: Se esperaba un ( en la línea "+nLin);
            return 29;
    }
}

function validarQ3(txtAutomata, txtErrores, tokenArea, token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    tokenArea.val(tokenArea.val()+"\n"+cToken+".- "+token);
    //txt
    txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q4");
    return 4;

}

function validarQ4(txtAutomata, txtErrores, tokenArea, token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    tokenArea.val(tokenArea.val()+"\n"+cToken+".- "+token);
    if(evalER("\\,",token)){
        txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q5");
        return 5;
    }
    txtErrores.val(txtErrores.val()+"\nError: Se esperaba un , en la línea "+nLin);
    return 29;
}

function validarQ5(txtAutomata, txtErrores, tokenArea, token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    tokenArea.val(tokenArea.val()+"\n"+cToken+".- "+token);
    if(evalER("[0-9]|[1-9][0-9]",token)){
        txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q6");
        return 6;
    }
    txtErrores.val(txtErrores.val()+"\nError: Se esperaba un número en la línea "+nLin);
    return 29;
}

function validarQ6(txtAutomata, txtErrores, tokenArea, token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    tokenArea.val(tokenArea.val()+"\n"+cToken+".- "+token);
    if(evalER("\\,",token)){
        txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q7");
        return 7;
    }
    txtErrores.val(txtErrores.val()+"\nError: Se esperaba un , en la línea "+nLin);
    return 29;
}

function validarQ7(txtAutomata, txtErrores, tokenArea, token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    tokenArea.val(tokenArea.val()+"\n"+cToken+".- "+token);
    if(evalER("[0-9]|[1-9][0-9]",token)){
        txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q8");
        return 8;
    }
    txtErrores.val(txtErrores.val()+"\nError: Se esperaba un número en la línea "+nLin);
    return 29;
}

function validarQ8(txtAutomata, txtErrores, tokenArea, token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    tokenArea.val(tokenArea.val()+"\n"+cToken+".- "+token);
    if(evalER("\\,",token)){
        txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q9");
        return 9;
    }
    txtErrores.val(txtErrores.val()+"\nError: Se esperaba un , en la línea "+nLin);
    return 29;
}

function validarQ9(txtAutomata, txtErrores, tokenArea, token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    tokenArea.val(tokenArea.val()+"\n"+cToken+".- "+token);
    if(evalER("[0-9]|[1-9][0-9]",token)){
        txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q10");
        return 10;
    }
    txtErrores.val(txtErrores.val()+"\nError: Se esperaba un número en la línea "+nLin);
    return 29;
}

function validarQ10(txtAutomata, txtErrores, tokenArea, token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    tokenArea.val(tokenArea.val()+"\n"+cToken+".- "+token);
    if(evalER("\\)",token)){
        txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q11");
        return 11;
    }
    txtErrores.val(txtErrores.val()+"\nError: Se esperaba un \\) en la línea "+nLin);
    return 29;
}

function validarQ11(txtAutomata, txtErrores, tokenArea, token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    tokenArea.val(tokenArea.val()+"\n"+cToken+".- "+token);
    if(evalER(";",token)){
        txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q12");
        return 12;
    }
    txtErrores.val(txtErrores.val()+"\nError: Se esperaba un \\) en la línea "+nLin);
    return 29;
}

function validarQ13(txtAutomata, txtErrores, tokenArea, token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    tokenArea.val(tokenArea.val()+"\n"+cToken+".- "+token);
    if(evalER("\\(",token)){
        txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q14");
        return 14;
    }
    txtErrores.val(txtErrores.val()+"\nError: Se esperaba un \\( en la línea "+nLin);
    return 29;
}

function validarQ14(txtAutomata, txtErrores, tokenArea, token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    tokenArea.val(tokenArea.val()+"\n"+cToken+".- "+token);
    //txt

    txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q15");
    return 15;
}

function validarQ15(txtAutomata, txtErrores, tokenArea, token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    tokenArea.val(tokenArea.val()+"\n"+cToken+".- "+token);
    if(evalER("\\,",token)){
        txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q16");
        return 16;
    }
    txtErrores.val(txtErrores.val()+"\nError: Se esperaba un , en la línea "+nLin);
    return 29;
}

function validarQ16(txtAutomata, txtErrores, tokenArea, token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    tokenArea.val(tokenArea.val()+"\n"+cToken+".- "+token);
    if(evalER("[0-9]|[1-9][0-9]",token)){
        txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q17");
        return 17;
    }
    txtErrores.val(txtErrores.val()+"\nError: Se esperaba un número en la línea "+nLin);
    return 29;
}

function validarQ17(txtAutomata, txtErrores, tokenArea, token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    tokenArea.val(tokenArea.val()+"\n"+cToken+".- "+token);
    if(evalER("\\,",token)){
        txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q18");
        return 18;
    }
    txtErrores.val(txtErrores.val()+"\nError: Se esperaba un , en la línea "+nLin);
    return 29;
}

function validarQ18(txtAutomata, txtErrores, tokenArea, token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    tokenArea.val(tokenArea.val()+"\n"+cToken+".- "+token);
    //txt

    txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q10");
    return 10;

}

function validarQ19(txtAutomata, txtErrores, tokenArea, token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    tokenArea.val(tokenArea.val()+"\n"+cToken+".- "+token);
    if(evalER("\\(",token)){
        txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q20");
        return 20;
    }
    txtErrores.val(txtErrores.val()+"\nError: Se esperaba un \\( en la línea "+nLin);
    return 29;
}

function validarQ20(txtAutomata, txtErrores, tokenArea, token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    tokenArea.val(tokenArea.val()+"\n"+cToken+".- "+token);
    //txt
    txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q21");
    return 21;

}

function validarQ21(txtAutomata, txtErrores, tokenArea, token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    tokenArea.val(tokenArea.val()+"\n"+cToken+".- "+token);
    if(evalER("\\,",token)){
        txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q22");
        return 22;
    }
    txtErrores.val(txtErrores.val()+"\nError: Se esperaba un , en la línea "+nLin);
    return 29;
}

function validarQ22(txtAutomata, txtErrores, tokenArea, token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    tokenArea.val(tokenArea.val()+"\n"+cToken+".- "+token);
    if(evalER("[0-9]|[1-9][0-9]",token)){
        txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q23");
        return 23;
    }
    txtErrores.val(txtErrores.val()+"\nError: Se esperaba un número en la línea "+nLin);
    return 29;
}

function validarQ23(txtAutomata, txtErrores, tokenArea, token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    tokenArea.val(tokenArea.val()+"\n"+cToken+".- "+token);
    if(evalER("\\,",token)){
        txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q24");
        return 24;
    }
    txtErrores.val(txtErrores.val()+"\nError: Se esperaba un , en la línea "+nLin);
    return 29;
}

function validarQ24(txtAutomata, txtErrores, tokenArea, token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    tokenArea.val(tokenArea.val()+"\n"+cToken+".- "+token);
    if(evalER("si|no",token)){
        txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q10");
        return 10;
    }
    txtErrores.val(txtErrores.val()+"\nError: Se esperaba un valor booleano en la línea "+nLin);
    return 29;
}

function validarQ25(txtAutomata, txtErrores, tokenArea, token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    tokenArea.val(tokenArea.val()+"\n"+cToken+".- "+token);
    if(evalER("\\(",token)){
        txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q26");
        return 26;
    }
    txtErrores.val(txtErrores.val()+"\nError: Se esperaba un \\( en la línea "+nLin);
    return 29;
}

function validarQ26(txtAutomata, txtErrores, tokenArea, token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    tokenArea.val(tokenArea.val()+"\n"+cToken+".- "+token);
    //txt
    txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q17");
    return 17;

}

function validarQ27(txtAutomata, txtErrores, tokenArea, token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    tokenArea.val(tokenArea.val()+"\n"+cToken+".- "+token);
    if(evalER("\\(",token)){
        txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q28");
        return 28;
    }
    txtErrores.val(txtErrores.val()+"\nError: Se esperaba un \\( en la línea "+nLin);
    return 29;
}

function validarQ28(txtAutomata, txtErrores, tokenArea, token, nLin) {
    txtAutomata.val(txtAutomata.val()+"Se evalúa el token "+token);
    tokenArea.val(tokenArea.val()+"\n"+cToken+".- "+token);

    //txt
    txtAutomata.val(txtAutomata.val()+"\nSe hace una transición a Q8");
    return 8;

}

function evalER(exp, cad){
    if(exp.text(cad)) return true;
    return false;
}