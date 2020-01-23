var canvas = document.getElementById("meu-canvas");

var papel = canvas.getContext("2d");


var x = 50;
var y = 50;

papel.beginPath();
papel.strokeStyle = "red";
papel.lineWidth = 3;
papel.moveTo(x,y);
papel.lineTo(200,200);
papel.stroke();
papel.closePath();


