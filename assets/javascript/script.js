function guardarNotas(){
    var n1 = Number(document.getElementById("nota1").value)
    var n2 = Number(document.getElementById("nota2").value)
    var n3 = Number(document.getElementById("nota3").value)
    var n4 = Number(document.getElementById("nota4").value)
    
    var calc = ((n1*2)+(n2*2)+(n3*3)+(n4*3))/10

    if (calc >= 60.0){
        document.getElementById("resultado").innerHTML = "Sua média é "+calc+", aprovado! :)"
    } if (calc<60.0) {
        document.getElementById("resultado").innerHTML = "Sua média é "+calc+", prova final :("
    } if (n1 == " " || n1 == 0 || n2 == " " || n2 == 0 || n3 == " " || n3 == 0 || n4 == " " || n4 == 0 ){
        document.getElementById("resultado").innerHTML = "Sua média é "+calc+", meta a ser atingida: 60.0"
    }
}

function recomecar() {
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
    document.getElementById("nota4").value = "";
  
    document.getElementById("resultado").innerText = "";
}



