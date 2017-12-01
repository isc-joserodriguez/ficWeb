
function openAsiCon(evt, editor) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontentAsiCon");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinksAsiCon");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(editor).style.display = "block";
    evt.currentTarget.className += " active";
}

function openTokTab(evt, editor) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontentTokTab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinksTokTab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(editor).style.display = "block";
    evt.currentTarget.className += " active";
}

function openOut(evt, editor) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontentOut");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinksOut");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(editor).style.display = "block";
    evt.currentTarget.className += " active";
}

function openAutGra(evt, editor) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontentAutGra");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinksAutGra");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(editor).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultAsi").click();
document.getElementById("defaultTok").click();
document.getElementById("defaultAut").click();
document.getElementById("defaultOut").click();
//editor

//areaCode1 Asignaciones

var editor = ace.edit("codeArea1");
//editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/javascript");
editor.setFontSize(20);
//areaCode2 Consultas
var editor2 = ace.edit("codeArea2");
editor2.setTheme("ace/theme/twilight");
editor2.session.setMode("ace/mode/javascript");
editor2.setFontSize(20);