var gTerra = 9.8;
var gMarte = 3.7;
var gJupter = 24.8;

var peso = prompt("Digite a massa do objeto na Terra: ");

var planeta = prompt("Qual planeta deseja saber o peso?(Escolha 1 para marte ou 2 para jupter)");

if(planeta == 1){
    var pesoMarte = (peso/gTerra) * gMarte;
    document.write("O peso do objeto em Marte é:  " + pesoMarte);
}

else if(planeta == 2){
    var pesoJupter = (peso/gTerra) * gJupter; 
    document.write("O peso do objeto em Jupter é:  " + pesoJupter);
    
}

else {
    document.write("Não podemos calcular o peso neste planeta :( ")
}
