/*Tomar dos variables, si ambas son mayores de 10, entonces los sumo, sino los multiplico */

x = 10;
y = 10;
z = 0;

if (x>10 && y>10) {
	z = x+y; /* Ejecuto la suma sólo si ambas variables cumplen*/
} else {
	z= x*y; /*Ejecuto siempre que al menos sea menor a 10 */
}

console.log("El resultado es: "+z);
	
/*Sumar dos variables si al menos una de ellas es mayor a 10 */


x = 11;
y = 8;
z = 0;

if (x>10 || y>10) {
	z = x+y; /* Ejecuto la suma sólo si al menos una de las variables cumple*/
} else {
	z= x*y; /*Ejecuto siempre que al menos sea menor a 10 */
}

console.log("El resultado es: "+z);

/*Mostrar mensaje de bienvenida solo ssi coinciden con los valores "Jime" y "Piano"*/

nombre = "Jime";
apellido = "Piano";
registro = " ";


if (nombre == "Jime" && apellido == "Piano") {
	bienvenida = "Bienvenide "+nombre+" "+apellido;	
	console.log(bienvenida);
	/*esto queda en el if porque el scope de bienvenida es local*/
} else {
	registro = "Hola "+nombre+", "+"por favor registrate";
	console.log(registro);	
}
	/*registro puede salir del if porque el scope de bienvenida es global: está declarado arriba, pero si lo saco del else, flashea raro*/

/**********************************/

console.log("Opcion A")
monto = 2000;
total = 0;
dto = 0;
/*Recargo por pago con TC*/
pagoTC = 6;
recargo = 0;
console.log("monto: "+monto)

if (monto < 500) {
	/*Si el monto es menor a 500 no se realizan descuentos*/
	dto = 0 * monto;
	monto = monto - dto;
	console.log("El descuento que se aplicara es del 0%. El total a pagar es de $"+monto);
} 
/*no puedo mandar ELSE porque este se pega al primer if que le antecede, entonces meterlo sería un error lógico*/
if ((monto > 500) && (monto <= 1000)) {
	/*Si el monto está entre 501 y 1000 se realiza un 10%*/
	dto = 0.10 * monto;
	monto = monto - dto;
	console.log("El descuento que se aplicara es del 10% y te ahorras $"+(dto) +". El total a pagar es de $"+monto);
} 
if ((monto > 1000) && (monto <= 1500)) {
	/*Si el monto está entre 1001 y 1500 se realiza un 15%*/
	dto = 0.15 * monto;
	monto = monto - dto;
	console.log("El descuento que se aplicara es del 15% y te ahorras $"+(dto) +". El total a pagar es de $"+monto);
} 
if (monto >= 1500) {
	/*Si el monto es mayor a 1500 se realiza un 20%*/
	dto = 0.20 * monto;
	monto = monto - dto;
	console.log("El descuento que se aplicara es del 20% y te ahorras $"+(dto) +". El total a pagar es de $"+monto);
}
/*Adicionalmente, por pago con tarjeta de crédito en 3 pagos se genera un recargo del 5%*/
if (pagoTC == 3 ){
	recargo = monto * 0.05;
	monto = monto + recargo;
	console.log("3 Pagos. Total $"+monto);
}
/*En 6 pagos se genera un recargo del 10%*/
else if (pagoTC == 6 ){
	recargo = monto * 0.10;
	monto = monto + recargo;
	console.log("6 Pagos. Total $"+monto)
}
else {
	console.log("Pago en efectivo. Total $"+monto)
}

monto = monto + recargo*monto;

/**********************************/
console.log("Opcion B")

montoo = 2000;
descuento = 0;
pagoT = true;
cuotas = 6;
recargo = 0;

console.log("monto: "+montoo)
switch (cuotas) {
	case 1:
	case 2:
	case 3: recargo = 0.05; 
			break;
	case 6: recargo = 0.10; 
			break;
	default: recargo = 0; 
			break;
}


if (montoo <500) {
	console.log(montoo);
} else if (montoo<=1000) {
	descuento = 0.1 * montoo;
	montoo = montoo -descuento;
	console.log(montoo);
} else if (montoo<=1500) {
	descuento = 0.15 * montoo;
	montoo = montoo -descuento;
	console.log("Entro al menor de 1500, total $ " + montoo);
} else {
	descuento = 0.2 * montoo;
	montoo = montoo -descuento;
	console.log("Importe mayor a 1500, total $" + montoo);
}
/*Adicionalmente, por pago con tarjeta de crédito en 3 pagos se genera un recargo del 5%*/
if (pagoT==true){
	if (cuotas==3){
		recargo=0.05;
	montoo = montoo + (montoo * recargo);
	console.log(cuotas + "Pagos. Total con recargo $" + montoo);
	}
	if (cuotas==6){
		recargo=0.1;
	montoo = montoo + (montoo * recargo);
	console.log(cuotas + "Pagos. Total con recargo $" + montoo);
	}
}



/**********************************/
/*Alimentando a los animales del ZOO*/

/* Herbivoros, carnivoros */
/* 
	tigre, 
	boa,

	koala, 
	Perezoso, 
	guamacayo, 
	elefante 
*/

/* Elefante = Babar */
/* cantidad de patas */

/* A partir de la cant de patas, kg de comida */
/* Mostrar pantalla, comida y cant de kilos */

//Si tienen 2 patas y herbivoro 1.5 kg
//Si tienen 4 patas y herbivoro 3 kg
//Si tienen 4 patas y herbivoro 5 kg
//No patas un cobayo
//Si elefante o se llama Babar 20 kg


patas = 0;
kg = 3;
dieta = "herbivoro";
animal =" ";
nombre = " ";

if (patas == 2) {
	animal = "guamacayo";
	console.log("Este animal es: " +animal ", come " +kg "kg de alimento por día y es " +dieta ".");
}

if (patas == 4) {
	switch (kg) {
	case 3: 	animal = "koala";
			break;
	case 5:  	animal = "perezoso";
			break;
	case 20:  	animal = "elefante";
				nombre = "Babar";
			break;
	}
	console.log("Este animal es: " +animal ", come " +kg "kg de alimento por día y es " +dieta ".");
} 
if (patas == 0) {
	animal = "boa";
	dieta = "carnivoro";
console.log("Este animal es: " +animal ", come " +kg "kg de alimento por día y es " +dieta ".");
}
