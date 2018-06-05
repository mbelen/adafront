// Ejercicios de frontendV3/modulo3-js/ejercicios/Condicionales/EjerciciosLógica3.pdf

console.log("");
console.log("Ej 1");

var msec2sec = 30;

var proxEstado;
function estado1() {
	console.log("------------------------------");
	console.log("Peaton Aviles verde");
	console.log("Auto Aviles rojo");
	console.log("Peaton Zapiola rojo");
	console.log("Auto Zapiola verde");
	proxEstado = setTimeout(estado2, 58 * msec2sec);
}
function estado2() {
	console.log("------------------------------");
	console.log("Peaton Aviles rojo");
	console.log("Auto Aviles rojo");
	console.log("Peaton Zapiola rojo");
	console.log("Auto Zapiola amarillo");
	proxEstado = setTimeout(estado3, 2 * msec2sec);
}
function estado3() {
	console.log("------------------------------");
	console.log("Peaton Aviles rojo");
	console.log("Auto Aviles verde");
	console.log("Peaton Zapiola verde");
	console.log("Auto Zapiola rojo");
	proxEstado = setTimeout(estado4, 58 * msec2sec);
}
function estado4() {
	console.log("------------------------------");
	console.log("Peaton Aviles rojo");
	console.log("Auto Aviles amarillo");
	console.log("Peaton Zapiola rojo");
	console.log("Auto Zapiola rojo");
	proxEstado = setTimeout(estado1, 2 * msec2sec);
}

function ciegoAviles() {
	clearTimeout(proxEstado);
	console.log("------------------------------");
	console.log("ciego cruzando por Aviles");
	estado1();
}
function ciegoZapiola() {
	clearTimeout(proxEstado);
	console.log("------------------------------");
	console.log("ciego cruzando por Zapiola");
	estado3();
}

estado1();


alert("Semaforos corriendo");

// /*
//  Modelar con pseudocódigo o js:
//  la lógica de un sistema de semáforos en una esquina que consta de 
//  2 semáforos para vehículos y dos semáforos peatonales. 
// */

// //funcion para contador i++ cada 60 segundos y se resetee cada 24 hs
// // starts with 0 and increases by 1 every minute:
// var segundo = 1000;
// var minuto = 60 * segundo;
// var iii = 0;
// var contador = 0; 
// contador = setInterval(function(){iii++},segundo);

// // clearInterval(contador);

// //funcion que chequea si el contador es par o impar.
// var contadorPar = true;

// function resto(x,y){
// 	if ((x % 2) == 0){ 
// 		contadorPar = true;
// 		console.log(x+" es par");
// 	}else {
// 		contadorPar = false;
// 		console.log(x+" es impar");
// 	}
// }

// resto(contador, contadorPar);
// var autosAviles = "rojo";
// var peatonesAviles = "cruzar";
// var autosZapiola = "verde";
// var peatonesZapiola = "esperar";


// if (contadorPar == true) {
// 	autosAviles = "rojo";
// 	autosZapiola = "verde";	
// } else {
// 	autosAviles = "verde";
// 	autosZapiola = "rojo";
// }

// if (autosAviles = "rojo") {
// 		peatonesAviles = "cruzar";
// }else {
// 		peatonesAviles = "esperar"
// }

// if (autosZapiola = "rojo") {
// 		peatonesZapiola = "cruzar";
// }else {
// 		peatonesZapiola = "esperar"
// }
// console.log("el semaforo de aviles esta en "+autosAviles);
// console.log("peatones de Aviles: "+peatonesAviles);
// console.log("el semaforo de zapiola esta en "+autosZapiola);
// console.log("peatones de Zapiola: "+peatonesZapiola);


// console.log("");
// console.log("Ej 2");
// /*
// Incorporar al ejercicio anterior un semáforo para ciegos, 
// esto implica la posibilidad de tener modificar el estado de los semáforos 
// en un momento dado
// */
// var botonCiegosAviles = false;
// var botonCiegosZapiola = true;

// if (botonCiegosAviles == true) {
// 	autosAviles = "rojo";
// 	console.log("los peatones de Aviles pueden cruzar");
// }
// if (botonCiegosZapiola == true) {
// 	autosZapiola = "rojo";
// 	console.log("los peatones de Zapiola pueden cruzar");
// } 

console.log("");
console.log("Ej 3");
/*
Modelar con lógica y estructuras conocidas un juego de preguntas y respuestas, que conste de: 
- 3 rondas de 5 preguntas cada una. 
- Para pasar de ronda deben responderse correctamente 3 preguntas por ronda
*/

var preguntasPorRonda, respuestasPorRonda;
var correctas = 0;
var puntaje = 0;

preguntasPorRonda = [
	[
		"Qui�n es la diosa griega del matrimonio?",
		"Qui�n es el dios del Olimpo?", 
		"Qui�n es el dios griego del mar?", 
		"Qui�n es el dios griego de la guerra?", 
		"Qui�n es la diosa griega de los cultivos?"
	],
	[
		"Qui�n escribio 'El Proceso'?", 
		"Qui�n pint� 'La Gioconda'?", 
		"Qui�n diriji� 'E.T'?", 
		"Qui�n compuso 'Las 4 estaciones'?", 
		"Qui�n construy� el Jardin Botanico?"
	],
	[
		"Qu� personaje de La Odisea se presenta a una boda sin invitaci�n?",
		"Qu� ciudadana de Tebas desobedece las leyes de los hombres y es condenada a muerte?",
		"Qui�n mat� a los hijos de Jason?", 
		"Qui�n se enamora de Ulises y lo ayuda a volver a casa?", 
		"quien vence a la Esfinge y es nombrado 'Salvador de Tebas'?"
	]
];

respuestasPorRonda = [
	[
		"Hera",
		"Zeus", 
		"Poseidon", 
		"Ares", 
		"Demeter"
	],
	[
		"Kafka", 
		"Da Vinci", 
		"Spielberg", 
		"Vivaldi", 
		"Carlos Thays"
	],
	[
		"Eris",
		"Antigona",
		"Medea", 
		"Circe", 
		"Edipo"
	]
];


var nivel = ["Easy", "Medium", "Hard"];
//El valor de las respuestas correctas en la primera ronda será de 5 puntos, 
//en la segunda 10 y en la tercera 15. 
var puntos = [5, 10, 15];

for (i = 0; i < 3; i++) {
	correctas = 0;
	alert("Ronda " + (i + 1) + ": " + nivel[i]);
	for (j = 0; j < 5; j++) {
		if (respuestasPorRonda[i][j].toLowerCase() == prompt(preguntasPorRonda[i][j]).toLowerCase()) { //convierte las rtas a todo en minuscula y lo compara con el input que viene de prompt, tambien convertido todo a minunscula.
			correctas++;
			puntaje += puntos[i];
		}
	}
	//aca estamos entre rondas
	if (correctas < 3) {
		alert("PERDISTE");
		break;
    } else {
    	alert("Ten�s " + puntaje +" puntos")
    	continue; //podemos prescindir de esto porque igual seguiría entrando a i
	}
}

console.log("");
console.log("Ej 4");
/*
Al finalizar el juego se mostrará un cartel al jugador de:
excelente si consiguió entre 125 y 150 puntos, 
muy bien entre 124 y 100 puntos y 
bien para menos de 100 punto
*/
/*
if (puntaje >= 125) {
	alert("�EXCELENTE! Conseguiste "+puntaje+" puntos.");
} else if (puntaje >= 100) {
	alert("�MUY BIEN! Conseguiste "+puntaje+" puntos.");
} else {
	alert("BIEN. Conseguiste "+puntaje+" puntos.");
}
*/
switch (true) { //si pongo switch(puntaje) y case (puntaje>= 125) como el if de arriba, el primer dato es int y el segundo booleano y no me anda. 
	case (puntaje >= 125):
		alert("�EXCELENTE! Conseguiste "+puntaje+" puntos.");
		break;
	case (puntaje >= 100):
		alert("MUY BIEN! Conseguiste "+puntaje+" puntos.");
		break;
	default:
		alert("BIEN. Conseguiste "+puntaje+" puntos.");
		break;
}
