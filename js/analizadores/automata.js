/*$("#compilar").on("click",function(){
	console.log(editor.getValue())
});*/

var nErrores=0, cToken=1;
function analizarLxL(){
	var lin=editor.getValue().split("\n");
	nErrores=0;
	cToken=1;
	//INICIALIZAR LOS TEXTAREAS
	/*
	txtAutomata.setText("");
	txtErrores.setText("");
	tokenArea.setText("");
	*/
	for(var i=0;i<lin.length;i++){
		validar(lin[i],txtAutomata,txtErrores,tokenArea,i);
	}
	if(nErrores!=0){
		txtErrores.setText(txtErrores.getText()+"\n\nEl código se ejecutó con errores");
	}else{
		txtErrores.setText(txtErrores.getText()+"\n\nEl código se ejecutó sin errores");
	}
}
function validar(lin, txtAutomata, txtErrores, tokenArea, nLin){
	if(!lin.substring(lin.length()-1,lin.length()).equals(";")){
		txtErrores.setText(txtErrores.getText()+"\nError: Se esperba un ; en la línea "+nLin+" columna "+lin.length());
		nErrores++;
		return;
	}
	String token[]=lin.replace(";", " ;").split(" ");

	if(!validarAutomata(token,txtAutomata,txtErrores,tokenArea, token.length,nLin,lin)){
		nErrores++;
	}
}