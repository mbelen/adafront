// The following example iterates through the elements in an array until it finds the index of an element whose value is theValue:
/*
for (var i = 0; i < a.length; i++) {
  if (a[i] == theValue) {
    break;
  }
}
*/


var frutas = ["manzana", "naranja", "banana", "durazno"];

console.log("frutas.length: ", frutas.length);
console.log("imprime posicion de cada fruta en el array");

frutas.forEach(function(value,index) {
	console.log(value,index);
});

console.log("imprime posicion de i mientras recorre el array");

for (var i=0; i < frutas.length; i++) {
	console.log("i es ", i);
}

//most common loop for iterating an array:
for (var i=0; i < frutas.length; i++) {
	console.log(frutas[i]);
}

console.log("indexOf 'banana' es ",frutas.indexOf("banana"));