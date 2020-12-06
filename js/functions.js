
var condicao = false;
var phone = document.getElementById("phone_ul");
var inpNome = document.getElementById('inpNome');
var inpEmail = document.getElementById('inpEmail');
var Sobre = document.getElementById('Sobre');

function validaForm(){
    if(inpNome.value.length <= 3){
        inpNome.style.outlineStyle = "solid";
        inpNome.focus();
        return false;
    } else{
        inpNome.style.outlineStyle = "none";
    }

    if(inpEmail.value.indexOf("@") == -1 || inpEmail.value.indexOf(".") == -1){
        inpEmail.style.outlineStyle = "solid";
        inpEmail.focus();
        return false;
    }else{
        inpEmail.style.outlineStyle = "none";
    }

    if(Sobre.value == ""){
        Sobre.style.outlineStyle = "solid";
        Sobre.focus();
        return false;
    }else{
        Sobre.style.outlineStyle = "none";
    }
}

function menu(){
    condicao = !condicao;
    if(condicao){
        phone.style.display = "block";
    }
    else{
        phone.style.display = "none";
    }
}