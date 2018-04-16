
/*
var humano = {
	cantOjos: 2,
	nombre:"Estefanía",
	respirar: function(){
		console.log("Inspirar y exhalar");
	},
	alimentacion: ['vegetariana', 'carnivoro'],
	extraterrestre: false
};

//pero también puedo armar un array de objetos:
var humanos = [{
	cantOjos: 2,
	nombre:"Estefanía",
	saludar: function(){ //LAS FUNCIONES QUE ESTÁN DENTRO DE OBJETOS SE LLAMAN METODOS
		console.log("Hola, soy "+this.nombre);
	},
	alimentacion: ['vegetariana', 'carnivoro'],
	extraterrestre: false
},
{
	cantOjos: 2,
	nombre:"Agustina",
	saludar: function(){ //LAS FUNCIONES QUE ESTÁN DENTRO DE OBJETOS SE LLAMAN METODOS
		console.log("Hola, soy "+this.nombre);
	},
	alimentacion: ['vegana', 'frutas'],
	extraterrestre: false
}
];

humanos[0].saludar();
]*/

var animales = [{
	nombre:"Perro",//string
	cantidadPatas:4,//numero
	alimentacion:"frutitas",//array: ['carne', 'balanceado', 'frutitas'],
	saludar:function(){
		console.log("Hola, soy "+this.nombre);
		},//function
	vuela: false//boolean
},{
	nombre:"Gato",
	cantidadPatas:4,
	alimentacion:"frutitas",//['balanceado', 'pescado', 'frutitas']
	saludar:function(){
		console.log("Hola, soy "+this.nombre);
		},
	vuela: false
},{
	nombre:"Tucan",
	cantidadPatas:2,
	alimentacion:"frutitas",//['frutitas', 'insectos']
	saludar:function(){
		console.log("Hola, soy "+this.nombre);
		},
	vuela: true
},{
	nombre:"Tero",
	cantidadPatas:2,
	alimentacion:"semillas",//['frutitas', 'insectos', 'semillas']
	saludar:function(){
		console.log("Hola, soy "+this.nombre);
		},
	vuela: true
},{
	nombre:"Pez",
	cantidadPatas:2,
	alimentacion:"insectos",//['frutitas', 'insectos', 'vegetales']
	saludar:function(){
		console.log("Hola, soy "+this.nombre);
		},
	vuela: false
}
];

/* Hacer una colección de 5 animales y validar las condiciones. Si true, suben al arca, sino se ahogan en el Egeo.
cant patas>2
comida vegetariana
console.log("suben al arca");
*/
for (var i = 0; i < animales.length; i++) {
	
	if ((animales.cantidadPatas>2) && (animales.alimentacion=="frutitas")){
		console.log("suben al arca");
	}else {
		console.log("se ahogan en el Egeo");
	}
}