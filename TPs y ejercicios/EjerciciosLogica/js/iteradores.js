// Ejercicios de frontendV3/modulo3-js/ejercicios/Iteradores/ejerciciosIteradores.pdf

console.log("Ejercicio 1");
/*
Cargar de forma automática incremental, un array de números a partir de un largo
dado por el usuario.
*/
var longitud = prompt("Qué tan largo es el array?");
var resultado = [];
for (var i = 0; i < longitud; i++) {
	resultado.push(i);
}
	console.log(resultado);

console.log("");
console.log("Ejercicio 2");
/*
Repetir el ejercicio anterior, ubicando 0 (ceros), en las posiciones pares y un valor
que coincida con el índice en las posiciones impares.
*/
var resultado = [];
for (var i = 0; i < longitud; i++) {
	if (i % 2 == 0) {
		resultado.push(0);
	} else {
		resultado.push(i);
	}
}
console.log(resultado);
console.log("con operador ternario");
var resultado = [];
for (var i = 0; i < longitud; i++) {
	resultado.push(i % 2 == 0 ? 0 : i);
}
console.log(resultado);

console.log("conversion implicita a bool");
var resultado = [];
for (var i = 0; i < longitud; i++) {
	resultado.push(i % 2 ? i : 0); //si false>> par, else true>> impar
}
console.log(resultado);

console.log("version l33t h4xx0r");
var resultado = [];
for (var i = 0; i < longitud; i++) {
	resultado.push(i % 2 * i); //ojo aca no hay conversion implicita
}
console.log(resultado);

console.log("");
console.log("Ejercicio 3");
/*
Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20], mostrar por
pantalla el valor máximo.
*/
var x = [10,24,36,7,98,11,14,20]; 
var max = 0;
for (var i = 0; i < x.length; i++) {
	if (x[i] > max) {
		max = x[i];
	}
}

console.log("El numero maximo es " + max);
console.log("Ej. 3 con negativos");
var y = [-10,-24,-36,-7,-98,-11,-14,-20]; 
var maxx = -Infinity;
for (var i = 0; i < y.length; i++) {
	if (y[i] > maxx) {
		maxx = y[i];
	}
}
console.log("El numero maximo es " + maxx);

console.log("");
console.log("Ejercicio 4");
/*
Dado el arreglo de números del punto 3, mostrar por pantalla el valor máximo y su
posición
*/

console.log("El numero maximo es " + max + " y su posicion es " + x.indexOf(max));

console.log("");
console.log("Ejercicio 5");
/*
Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20,98,14,10],
mostrar por pantalla el valor máximo y la cantidad de veces que se repite.
*/
//FALTA HACER LA SEGUNDA PARTE
var x = [10,24,36,7,98,11,14,20,98,14,10]; 
var max = 0;
for (var i = 0; i < x.length; i++) {
	if (x[i] > max) {
		max = x[i];
	}
}

console.log("El numero maximo es " + max);


console.log("");
console.log("Ejercicio 6");
/*
Dados los siguientes arreglos:
X = [“a”,”l”,”f”,”a”];
Y = [“a”,”l”,”f”,”a”,”j”,”o”,”r”]
Crear un bloque de código que permita determinar si:
Ambos arreglos son iguales
Cuál de los dos es más largo
Cuantas letras tienen en común 
*/
console.log("");
console.log("Ejercicio 7");
/*
Dado el siguiente array 
datos1 = [“Fido”,”Gomez”,26,15000.78,true]
datos2 = [“Gervasio”,”Fernandez”,32,28.550,false]
Determinar:
¿Cuál de los dos personajes es más viejo?
¿Cuál de los dos personajes está casado?
Si Fido recibirá un aumento equivalente al 12.5% del sueldo de Gervasio, cuanto será el
monto a cobrar?
*/