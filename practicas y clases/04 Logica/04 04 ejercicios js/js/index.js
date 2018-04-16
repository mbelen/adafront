console.log("Ejercicio 6");
// EJERCICIO 6 
//file:///C:/Users/jimena.piano/Desktop/ADA/frontendV3/modulo3-js/ejercicios/Condicionales/LogicaCondicionalP1.pdf

/* Dados tres números, x y z, si x es mayor que y 
	calcular la resta entre x y z, 
	y determinar si eso es mayor que y, 
de lo contrario sumar x y z (x+z) y multiplicarlo por y. */

var x, y, z, resta, resultado;

x = 10;
y = 2;
z = 3;
w = 0;
resultado = 0;

if (x > y) {
	w = x - z;
	if (w > y){
		console.log("w ("+w+") es mayor que y ("+y+").");
	} else {
		resultado = (x+y)*y;
	}
console.log("x ("+x+") es mayor que y ("+y+"), entonces el resultado es "+resultado);
} else {
	console.log("x ("+x+") es menor que y ("+y+"), no hacemos nada.");
}


// version 2: ojo con el scope de w 
/*

if (x > y) {
	w = x - z;
	console.log("w es la resta:"+w);

// no me sirve porque w podria ser undefined, podriamos arreglarlo con

if (w > y){ // if (w!="undefined")
	console.log("w es mayor que y");	
}else{
	w = (x+z)*y;
	console.log("w es menor que y:"+w);
}

*/

// EJERCICIO 1 
// file:///C:/Users/jimena.piano/Desktop/ADA/frontendV3/modulo3-js/ejercicios/Condicionales/logicaP2.pdf

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

console.log("Ejercicio 1");
var productoX, puntosHaber, pesos, cliente, faltante;

productoX = 45;
puntosHaber = 50;
pesos = 1;

cliente = "premium";

if (productoX <= puntosHaber) {
	puntosHaber = puntosHaber - productoX;
	console.log("¡Felicitaciones! Ud. ha adquirido la Pochoclera Moulinex por "+productoX+" puntos. Le quedan "+puntosHaber+" puntos.");
} 

if (productoX/2 <= puntosHaber) {
	switch (cliente) {
	case "regular": faltante = (productoX - puntosHaber)/3; 
			break;
	case "premium": faltante = (productoX - puntosHaber)/5; 
			break;
	}
	console.log("Usted es un cliente "+cliente+". Para adquirir la Pochoclera son necesarios $"+faltante+".-");
} 


// MIENTRAS
// "que la clave del homebanking no permita más de 3 intentos de log in"
/*
while(cont<3){
	if (user=true && password=true){
		cont=4;
	}else{cont++;}
}
if (cont==3) {bloqueo;}
*/
/*
cont 	U&P out
	0	f 	na
	1	v 	Block
	4	x 	x
	3	x 	B

	0	v 	welcome
	1	v 	w
	2	v 	w
*/


//usamos una banderita (logeado:true)
/*

while(cont<3 && logeado=false){
	if (user=true && password=true){
		logeado=true;
	}else{cont++;} //incrementar. es igual a cont = cont+1;
}
if (cont==3) {bloqueo;}

*/
/*
cont 	logeado	U&P out
	0		f	f 	na
	1		f	v 	welcome
	1		v	x 	x
*/

console.log("Imprimir los numeros del 1 al 10")
var num;
num = 1;

while ((num>0) && (num<= 10)){
	console.log(num)
	num++; //postaccion: 1ero ejecuto todo y dps le cambio el valor a la var. 
} //si num=0; no entra nunca al loop.


console.log("1)Imprimir los primeros 50 num pares.")
var n;
n = 1;
console.log("Empezamos con n:"+n)
while ((n<=50) && (n%2 == 0)){ //que el modulo de 2 de 0, osea que sea par
	console.log(n)
	n++;
}

/*
n 	<50		par 
0	true	true
1	true	false

como corta en el primer nro impar, no sigue incrementanding
*/

console.log("2)Imprimir los primeros 50 num pares. Empezamos con n:"+n)
while (n<=50){
	if (n%2 == 0) {
		console.log(n);
	}
	n++;
}


/** FOR **/

/*
inicio, condicion, postaccion
se ejecuta n veces porque la condicion (var de control) es menos compleja

su forma es:

for (var i = Things.length - 1; i >= 0; i--) {
	Things[i]
}


console.log("mismo ej pero implementando FOR");
var i; //valor de inicio

for (i = 1; i <= 50; i++) { // regula el valor de la var de control desde el encabezado
	console.log(i);
}

console.log("idem, mostrando solo los pares");
i = 1;
for (i = 1; i <= 50; i++) { 
	if (i%2 == 0){
		console.log(i);
	}
}

*/
/*
var nombres =["Pepe", "Pirulo", "Lalo", "Euclides"];


if (nombres.indexOf('Euclides')> - 1){ //internamente la función indexOf tiene un for (o un while?) adentro.
	console.log("Euclides está en la lista de nombres");
}
}else{
	console.log("Euclides no está");
}


var esta = false;
var i = 0;

while (esta== false && i<nombres.length){
	if (nombres[i] == x){
		esta == true;
	}
	i++;
}

if (esta){
	console.log("Está!");
}

//siempre que estemos en el while, el incremento va por fuera de la condición.
*/

 //mejor que designarle 0 es designarlo el 1er valor del array (index=0). porque si necesito incluír negativos, aceptaría num negativos.

/*
console.log("Ejercicios 3 y 4);

EJERCICIO 3
Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20], mostrar por
pantalla el valor máximo.

EJ 4
Dado el arreglo de números del punto 3, mostrar por pantalla el valor máximo y su
posición.

var pos = 0;
var numeros = [10,24,36,7,98,11,14,20];
var max = numeros[0]; 

 for (var i=0; i<numeros.length; i++){
 	if (numeros [i]>max){
 		max = numeros [i];
 		pos = i;
 	}
 }
 console.log("El mayor es "+max);
 console.log("La posicion es: "+pos);
*/

/*
Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20,98,14,10],
mostrar por pantalla el valor máximo y la cantidad de veces que se repite
*/

var numeros = [10,24,36,7,98,11,14,20,98,14,10];
var mayor = 0;
var contador = 0;

 for (var i=0; i<numeros.length; i++){
 	if (numeros [i]>mayor){
 		mayor = numeros[i];
 		contador = 0;
 	}
 

 if (numeros [i] == mayor){
 		contador++;
 	}
 }
console.log("El mayor es "+mayor+" y se repite "+contador+" veces.");

/*
FUNCIONES
*/

//Generar fx de login
//devuelve true en caso de logeo y false ne caso contrario

console.log("FUNCIONES. Ej: login");
var cont = 0;

//declaro
function validar(usuario, password){
	if (usuario == "pepe" && password == 1234){
		return true;
	}else{
		return false;
	}
}
/*
//invoco
if (validar("pepe",1234)) { //if (validar=true) 
	console.log("Bienvenido");
}else{
	console.log("Usuario o Contraseña inválido.");
}

//Bloquear a los 3 intentos de log in incorrectos.
var cantidad = 0;
var valido = validar ("pepe",1234);

while(valido == false && cantidad < 3){
	 cantidad++;
	 valido = validar ("pepe",1234); //agrego esta linea para que pueda volver a entrar
}
if (valido){console.log("Bienvenido");}
*/

/*
if (cantidad == 3){ console.log("Usuario bloqueado");}

valido 	cant 	log
false	0		
false	1		user inv
false	2	
true 	3 		ERROR:ME MUESTRA AMBAS COSAS


if (cantidad == 3 && !valido){ console.log("Usuario bloqueado");} 
//asi evito el error de que aparezcan ambas en el caso que se logee OK al ultimo intento posible.
// !valido es lo mismo que valido == false, porque su valor es boolean.
*/
console.log("metiendo fx de login dentro de validar");

function login(usuario, password){

var cantidad = 0;
var valido = validar (usuario, password);

while(valido == false && cantidad < 3){
	 console.log("Usuario invalido")
	 cantidad++;
	 valido = validar (usuario, password); 
}

if (valido){console.log("Bienvenido");}
if (cantidad == 3 && !valido){ console.log("Usuario bloqueado");} 
}

login("pepa",4321);


/*
TAREA PARA EL HOGAR (finde)
enlugar de validar hardcodeando, meter array con varios usuarios (hacer 2 arreglos: 1 usrs y 2 passw y probarlo con eso)
el array es prop de la fx validar 
*/