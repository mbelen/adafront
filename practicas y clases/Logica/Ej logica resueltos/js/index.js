// Ejercicios de frontendV3/modulo3-js/ejercicios/Condicionales/LogicaCondicionalP1.pdf
console.log("");
console.log("Ej 1 version tranca");
/*
Dada una variable x, determinar si es par o impar.
*/
var x = 19;
if ((x % 2) == 0){ 
	console.log("x es par");
}else {
	console.log("x es impar");
} 
//the modulo operator (%) gives the remainder of a division. 
//So 3%2 would be 3/2, leaving 1 as a remainder, 
//therefore 3%2 will return 1

console.log("");
console.log("Ej 1 con funcion y for, para numeros del 1 al 30");

//fx resto determina si es x par o impar
function resto(x){
	if ((x % 2) == 0){ 
		var parImpar = "par";
		console.log("x es ",x, "y es ",parImpar);
	}else {
		var parImpar = "impar";
		console.log("x es ",x, "y es ",parImpar);
	}
}

for (var x=1; x < 30; x++) {
	resto(x);
}
console.log("");
console.log("Ej 2: con switch");
/* 
Dada una variable y que puede contener un número de 1 a 7:
determinar a que día de la semana corresponde. 
Incluir la opción si la variable toma un valor no válido 
(por ejemplo 0 u 8).
*/

var y=7;
var dia="";

if ((y>0) && (y<8)) {
	switch (y) {
	case (y=1): dia="Lunes"; 
		break;
	case (y=2): dia="Martes"; 
		break;
	case (y=3): dia="Miercoles"; 
		break;
	case (y=4): dia="Jueves"; 
		break;
	case (y=5): dia="Viernes"; 
		break;
	case (y=6): dia="Sabado"; 
		break;
	case (y=7): dia="Domingo"; 
		break;
	}
	console.log(y+" es "+dia);
} else{
	console.log("numero no valido");
}

console.log("");
console.log("Ej 2: con array -REVISAR-");
y=4;
var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
//Si hago esto, me muestra todos los valores del array
if ( (y>0) && (y<8) ){
	dias.forEach(function(value,index) {
		console.log(value+" es "+(index+1));
		});
	}else{
	console.log("numero no valido");
	}

console.log("-");
//Si hago esto, me muestra solo Domingo 7
y=4;
if ( (y>0) && (y<8) ){
	dias.forEach(function(value,index) {
		diaa= value+" "+(index+1);
		});
	console.log(diaa);
	}else{
	console.log("numero no valido");
	}

console.log("-");
//idem
y=4;
if ( (y>0) && (y<8) ){
	dias.forEach(function(value,index) {
		y=index+1;
		diaa= value+" "+y;
		});
	console.log(diaa);
	}else{
	console.log("numero no valido");
	}

console.log("");
console.log("Ej 3");
/*
Dada una variable donde se ingresa el nombre del mes, 
devolver la cantidad de días correspondiente.
*/

var verso = ["Treinta dias trae Septiembre, con Abril, Junio y Noviembre.","De veintiocho solo hay uno.", "Y los demás treinta y uno."];

var mes="Abril";
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var cantDias =[31,28,31,30,31,30,31,31,30,31,30,31];
var i= meses.indexOf(mes);
console.log(mes+" tiene "+cantDias[i]+" dias.");

switch (cantDias[i]){
	case (28): console.log(verso[1]); 
		break;
	case (30): console.log(verso[0]); 
		break;
	case (31): console.log(verso[2]); 
		break;
}

console.log("");
console.log("Ej 4 PREGUNTAR CONSIGNA");
/*
Dados tres números determinar si es positivo o negativo
*/
console.log("");
console.log("Ej 5 -REVISAR: generadores de abecedario :c");

var letra = "a";
var vocales = ["a", "e", "i", "o", "u", ];
var abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log("Este abecedario tiene "+abecedario.length+" letras.");
// usé el metodo array.includes(var) para chequear si letra pertenece al grupo
if (abecedario.includes(letra)) {
	console.log(letra+" pertenece al abecedario");
	if (vocales.includes(letra)) {
		console.log(letra+" es una vocal");
	}else{
		console.log(letra+" es una consonante");
	}
}else {
	console.log(letra+" no es una letra del abecedario");
}

/*
Dada una variable que puede ser una letra, determinar si es una vocal.
*/

/*
prueba 1) Esto no me anda pero tampoco lo entiendo 
Function to generate an array w/ alphabet letters
https://gist.github.com/bastienrobert/892059e5d19d87904808f2ded57d8e94

function genCharArray(charA, charZ) {
  a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0); //saque el var de adelante para hacerla global...?
  for (; i <= j; ++i) {
    a.push(String.fromCharCode(i));
  }
  return a;
}
  console.log(a);
*/

/* prueba 2) https://sharecoding.wordpress.com/2012/02/17/how-to-print-a-to-z-easily-on-javascript/
// me las imprime con console.log() pero no anda cuando lo meto como variable?
var abecedario;
var letras = abecedario;
var vocales = ["a", "e", "i", "o", "u", ];

var first = "a", last = "z";
for(var i = first.charCodeAt(0); i <= last.charCodeAt(0); i++) {
	abecedario =( eval("String.fromCharCode(" + i + ")") + " " );
}

console.log(abecedario);
*/

console.log("");
console.log("Ej 6");
/*
Dados tres números, x y z, 
si x es mayor que y 
	calcular la resta entre x y z, 
	y determinar si eso es mayor que y, 
	de lo contrario 
		sumar x y z (x+z) y multiplicarlo por y.
*/

var x = 9, y = 8, z = 2, diferencia = 0, suma = 0;
console.log("x:"+x+" y:"+y+" z:"+z);

if (x > y) {
	console.log("x("+x+") es mayor que y("+y+")");
	diferencia = x - z;
	console.log(x+" - "+z+" = "+diferencia);
	if (diferencia > y) {
		console.log(diferencia+" es mayor que "+y);
	}else{
		console.log(diferencia+" no es mayor que y("+y+")");
		suma = (x+z)*y;
		console.log("("+x+" + "+z+")*"+y+" = "+suma);
	}
}else{
	console.log("x("+x+") no es mayor que y("+y+")");
}



console.log("");
console.log("Ej 7 -REVISAR_");
/*
Que calcule el sueldo que le corresponde al trabajador de una empresa que cobra
40.000 euros anuales, se deben realizar los cálculos en función de los siguientes
criterios:
a. Si lleva más de 10 años en la empresa se le aplica un aumento del 10%.
b. Si lleva menos de 10 años pero más que 5 se le aplica un aumento del 7%.
c. Si lleva menos de 5 años pero más que 3 se le aplica un aumento del 5%.
d. Si lleva menos de 3 años se le aplica un aumento del 3%
*/

var sueldoAnual = 40000;
var antiguedad = 6;
var sueldo = sueldoAnual/12;
var a = sueldo+(sueldo*0.10);
var b = sueldo+(sueldo*0.07);
var c = sueldo+(sueldo*0.05);
var d = sueldo+(sueldo*0.03);
console.log("El sueldo basico del empleado es de "+sueldo+" Euros al mes.");

switch (antiguedad){
	case (6):console.log("el empleado tiene una antiguedad de "+antiguedad+" años y su sueldo es de "+b); 
		break; //este caso funciona porque le pongo el valor de antiguedad directamente 
	case (antiguedad>=10):console.log("el empleado tiene una antiguedad de "+antiguedad+" años y su sueldo es de "+a); 
		break;
	case ((antiguedad>5) && (antiguedad<10)):console.log("el empleado tiene una antiguedad de "+antiguedad+" años y su sueldo es de "+b); 
		break;
	case ((antiguedad>3) && (antiguedad<5)):console.log("el empleado tiene una antiguedad de "+antiguedad+" años y su sueldo es de "+c); 
		break;
	case (antiguedad<3):console.log("el empleado tiene una antiguedad de "+antiguedad+" años y su sueldo es de "+d); 
		break;
}

