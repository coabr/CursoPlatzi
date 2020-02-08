var canvas = document.getElementById(“meu-canvas”);
var papel = canvas.getContext(“2d”);

var teclas = {
Up: 38,
Right: 39,
Down: 40,
Left: 37
}

document.addEventListener(“mousedown”, comecarDesenho);
document.addEventListener(“mousemove”, desenharMouse);
document.addEventListener(“mouseup”, pararDesenho);
document.addEventListener(“keydown”, desenharTeclado);

var x = 100;
var y = 100;
var mousePressionado = false;

function desenhaLinha(color, xinicial, yinicial, xfinal, yfinal, papel) {
papel.beginPath();
papel.strokeStyle = color;
papel.lineWidth = 3;
papel.moveTo(xinicial, yinicial);
papel.lineTo(xfinal, yfinal);
papel.stroke();
papel.closePath();
}

function comecarDesenho(event) {
console.log(event);
mousePressionado = true;
x = event.layerX;
y = event.layerY;
}

function desenharTeclado(evento) {
var cor = “green”;
var velocidadeMovimento = 10;
switch (evento.keyCode) {
case teclas.Up:
desenhaLinha(cor, x, y, x, y - velocidadeMovimento, papel);
y = y - velocidadeMovimento;
break;
case teclas.Down:
desenhaLinha(cor, x, y, x, y + velocidadeMovimento, papel);
y = y + velocidadeMovimento;
break;
case teclas.Left:
desenhaLinha(cor, x, y, x - velocidadeMovimento, y, papel);
x = x - velocidadeMovimento;
break;
case teclas.Right:
desenhaLinha(cor, x, y, x + velocidadeMovimento, y, papel);
x = x + velocidadeMovimento;
break;
}
}

function desenharMouse(evClick) {
if (mousePressionado == true) {
var corMouse = “orange”;
desenhaLinha(corMouse, x, y, evClick.clientX, evClick.clientY, papel);
x = evClick.clientX;
y = evClick.clientY;
}
}

function pararDesenho() {
mousePressionado = false;
}