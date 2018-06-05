// Ejercicios de frontendV3/modulo3-js/ejercicios/Condicionales/logicaP2.pdf
console.log("Ejercicio 1");

/*
Un sistema de fidelización de usuarios implementa la siguiente regla para la
adquisición de productos del catálogo. Se pide determinar la lógica de canje.

- El producto X que se desea canjear tiene un valor determinado en cantidad de puntos.

- Si el cliente que lo quiere canjear tiene la cantidad de puntos requerida realiza
directamente el canje.

- Si el cliente tiene el 50% de los puntos requeridos, podrá completar el canje con dinero,
en ese caso cada peso equivaldrá a 3 puntos. (Osea, mostrar cuanto le falta en pesos)

- Si el cliente tiene el 50% de los puntos requeridos, pero a su vez tiene categoría
premium, la relación pesos puntos será 1 a 5
*/

var productoX, puntosHaber, pesos, cliente, faltante;

productoX = 45;
puntosHaber = 41;
pesos = 1;

cliente = "regular";

if (productoX <= puntosHaber) {
	puntosHaber = puntosHaber - productoX;
	console.log("¡Felicitaciones! Ud. ha adquirido la Pochoclera Moulinex por "+productoX+" puntos. Le quedan "+puntosHaber+" puntos.");
} else if (productoX/2 <= puntosHaber) {
	switch (cliente) {
		case "regular": faltante = (productoX - puntosHaber)/3; 
			break;
		case "premium": faltante = (productoX - puntosHaber)/5; 
			break;
	}
	console.log("Usted es un cliente "+cliente+". Para adquirir la Pochoclera son necesarios $"+faltante+".-");
} 

console.log("version l33t");

var costoProductoEnPuntos = 45;  // cuanto cuesta el ...
var puntosCliente = 41;
var clientePremium = true;
switch (true) {
	case costoProductoEnPuntos <= puntosCliente:
		console.log("¡Felicitaciones! Ud. ha adquirido la Pochoclera Moulinex por " + costoProductoEnPuntos + " puntos. "
			      + "Le quedan " + (puntosCliente - costoProductoEnPuntos) + " puntos.");
		break;
	case 0.5 * costoProductoEnPuntos <= puntosCliente:
		console.log("Usted es un cliente " + (clientePremium ? "premium" : "regular") + ". "
			      + "Para adquirir la Pochoclera son necesarios $"
			      + ((costoProductoEnPuntos - puntosCliente) / (clientePremium ? 5 : 3)) + ".");
		break;
	default:
		console.log("POBRE");
}


console.log("");
console.log("Ejercicio 2");

// Ana desea inscribir a su hijo Tomás a la colonia de vacaciones, para tomar la decisión tiene en cuenta distintas variables:
// A) Si la colonia queda a más de 10 km, tendrá que contratar un transporte, 
// por lo que para elegir esta opción el costo mensual deberá ser menor a $1500.
// B) Si la colonia queda a menos de 10 km, su presupuesto total se incrementa en un 20%,
// con lo cual evaluará incluir almuerzo en la colonia si este no excede el 15% del valor de la cuota.
// C) Finalmente, si la colonia está más lejos de 10km, y su costo es mayor a $1500, 
// pero es doble turno y le brinda almuerzo, está dispuesta a pagar hasta $2800

var cuota = 1000;
var distancia = 5;
var costoMensual = 2000;
var valorAlmuerzo = 149;
var dobleTurno = false;

if (distancia > 10) {
	console.log(distancia + " km es muy lejos, necesita transporte.");
	if (costoMensual < 1500) {
		console.log("OK, pero paga hasta $1.500");
	} else if (dobleTurno && (valorAlmuerzo == 0)) {
		console.log("OK, pero paga hasta $2.800");
	} else {
		console.log("Fuera de presupuesto");
	}	
} else { 
	console.log(distancia + " km es cerca.");
	if (valorAlmuerzo < (cuota*0.15)) {
		console.log("almuerza ahí");
	} else {
		console.log("que se muera de hambre");
	}
}

console.log("");
console.log("Ejercicio 3");

// Dados distintas tarjetas de crédito, mostrar por consola la cantidad de cuotas sin interés según el siguiente criterio:
// - Mastercard – hasta 6 cuotas s/interés
// - Visa – hasta 9 cuotas s/interés
// - Amex – hasta 3 cuotas sin interés
// - Todas las demás - 1 cuota sin interés


// tarjeta = ["Mastercard", "Visa", "AmEx"];
// facilidadPago = ["hasta 6 cuotas s/interés", "hasta 9 cuotas s/interés", "hasta 3 cuotas s/interés", "1 cuota s/ interés"];

// var rta = prompt("Con que tarjeta pagas?");

// for (var i = 0; i < tarjeta.length; i++) {
// 	if (rta.toLowerCase() == tarjeta[i].toLowerCase()) 
// 		break;
// }
// alert(facilidadPago[i]);

console.log("");
console.log("Ejercicio extra para entender arrays");

// Dada una lista de números enteros, buscar el primero que sea impar, y de ahí en adelante imprimir cada 3.

var lista = [2,4,6,6,6,1,3,1,22,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

for (var find = 0; find < lista.length; find++) {
	//recorre hasta encontrar el primer impar
	if (lista[find] % 2 != 0) {//evalua si es impar
		console.log("El primer numero impar esta en la posicion " + find + " y es " + lista[find]);
		break;
	} 
}
for (; find < lista.length; find+= 3 ) {
	console.log(lista[find]);
}

// Idem hasta el primer multiplo de 5, y despues cada 7

// x % y == 0  ---> "x es un multiplo de y (porque tiene resto 0)"
// x % y != 0  ---> "y no divide a x (porque le queda resto)"


for (var find = 0; find < lista.length; find++) {
	//recorre hasta encontrar el primer impar
	if (lista[find] % 5 == 0) {//evalua si es impar
		console.log("El primer multiplo de 5 es " + lista[find] + " y esta en la posicion " + find);
		break;
	} 
}
for (; find < lista.length; find+= 7 ) {
	console.log(lista[find]);
}