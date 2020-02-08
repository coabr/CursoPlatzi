var cris = new Figura("Cris", "Brasil", "Goleira", "./img/cris.jpeg");
var debinha = new Figura("Debinha", "Brasil", "Lateral esquerda", "./img/debinha.jpg");
var formiga = new Figura("Formiga", "Brasil", "Meio campo", "./img/formiga.jpeg");
var marta = new Figura("Marta", "Brasil", "Atacante", "./img/marta.jpg");

var colecaoFiguras = []

colecaoFiguras.push(cris);
colecaoFiguras.push(debinha);
colecaoFiguras.push(formiga);
colecaoFiguras.push(marta);


for (var i = 0; i<colecaoFiguras.length; i++) {

    colecaoFiguras[i].exibir();
}
