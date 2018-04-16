var entradas = []; //aca se cargan las entradas del muro. no sé cuantas voy a tener, lo dejo vacio. uso PUSH(texto) para ir agregandole.
var datosPersonales = ["Pepa", "Holandesa", "Me gustan los muffins"]
var amigosDiv = document.getElementById('amigos');

function cargarDatosPersonales(datosPersonales) {
	//crear nodo, cargar contenido de texto
	var nombre = document.createElement('h1'); //nombre es un nodo del tipo h1
	nombre.textContent = datosPersonales[0];
	//textContent es un metodo de un elemento (el metodo tiene que ser de un tipo determinado para ser habilitado)
	//tipo Z.indexOf
	var nacionalidad = document.createElement('h2'); //nombre es un nodo del tipo h1
	nacionalidad.textContent = datosPersonales[1];

	var resumen = document.createElement('p');
	resumen.textContent = datosPersonales[1];


var dpDiv = document.getElementById('datosPerfil');
dpDiv.appendChild(nombre);
dpDiv.appendChild(nacionalidad);
dpDiv.appendChild(resumen);
}

cargarDatosPersonales(datosPersonales);
//Hacemos un array por modulo
//var ultimosPosts 

var oveja = ["Lala", "ah1.png"];
var conejo = ["pepito", "ah2.png", "zanahorias"];
var elefante = ["Dailan", "ah3.png"];
var ballena = ["Willy", "ah4.png"];
var caballo = ["Bojack", "ah5.png"];
var amigos = [oveja, conejo, elefante, ballena,caballo]; //esto es un array de arrays
var amigosCont = document.getElementById('amigosDiv')
console.log("Nombre del conejo: "+amigos[1][0]); 
//recorro con los indices desde el mas exterior y voy entrando a los interiores
// puedo mostrar ambas arrays con 2 FOR

//si tengo dos FOR, pongo dos indices:
var i,j;
for(i=0; i<amigos.length;i++) { //recorro cada fila
	console.log(amigos[i]);
	for(j=0; j<amigos[i].length; j++){ // recorro los elemtos de cada fila
	//pongo amigos[i] para que si los arrays interiores son de distinto largo, me aseguro de recorrer todos
		console.log(amigos[i][j]+",");
	}
}
//así se comenta una fx:

/**
* qué hace: muestra en el HTML una lista de imgs 
* qué parametros toma: @params lista |padre(a dónde le vo a hacer el append) | nodo HTML
* qué devuelve: void
**/

function cargarListaImagenes(lista,padre){
	var i;
	for (i=0; i<lista.length;i++){
		var img = document.createElement('img');
		img.src = lista[i][1];
		console.log(img.src);
		padre.appendChild(img);
	}
}

cargarListaImagenes(amigos,amigosCont);
/*
*/

var muro = document.getElementById('muro'); //esta la llamo dde el html, mientras qe ul la creo

function cargarMuro(m){
	var ul = document.createElement('ul');	//fuera del FOR porque sólo necesito 1 lista
	ul.setAttribute('id','posts');
	for (var i=0; i<3;i++){
		var li = document.createElement('li');
		var img = document.createElement('img');
		img.src = "ah8.png";
		img.classList.add('userPic');//le pongo clase al nodo
		//en lugar de add puedo ponerle remove
		li.appendChild(img);
		var texto = document.createElement('p');
		texto.textContent = "Estoy feliz en vacaciones";
		li.appendChild(texto);
		ul.appendChild(li); //para crear elementos, voy de afuera para adentro. para appendearlos, voy de adentro para afuera, como si lo fuera cerrando.
	}
	m.appendChild(ul);
}

cargarMuro(muro);

/*
*/

function publicar(){
	var entrada = document.getElementById('entrada') //traigo el nodo
	var texto = entrada.value; //ojo, no es textContent porque es un input.
	var ul = document.getElementById('posts');
	
	entradas.push(texto); //push guarda en el array entradas.
	
	//cargarMuro(muro);

}

var btn = document.getElementById('enviar');
btnEnviar.addEventListener(click,publicar);

//m.innnerHTML = ""; // adentro de la fx cargarMuro, despues del if, me limpia el div antes de cargar nuevamente el array.