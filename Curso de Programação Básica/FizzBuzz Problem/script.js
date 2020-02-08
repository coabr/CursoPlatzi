var botao = document.getElementById("botao");

botao.addEventListener("click", executaFizzBuzz);

function executaFizzBuzz() {

    var tentativas = document.getElementById("tentativas").value;
    var resultado = document.getElementById("resultado");

    var numero = 1;

    while (numero <= tentativas) {

        if ((numero % 5) == 0 && (numero % 3) == 0) {
            resultado.innerHTML += numero + " - FizzBuzz " + "<br>"
        } else if ((numero % 3) == 0) {
            resultado.innerHTML += numero + " - Fizz " + "<br>";
        } else if ((numero % 5) == 0) {
            resultado.innerHTML += numero + " - Buzz " + "<br>";
        } else {             
            resultado.innerHTML += numero + "<br>"
        }
        numero++;
    }
                
}    
