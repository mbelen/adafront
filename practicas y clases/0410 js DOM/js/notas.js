var h1 = document.getElementById("nombre"); //me traigo todo el nodo
var nombre = h1.textContent; //"pepa"
var h2 = document.getElementById("edad"); //me traigo todo el nodo
var edad = h1.textContent; //"28"

OTROS METODOS DEL DOCUMENT
getElementByClassName("C")
getElementByTagName("p")


//creo un nodo del tipo que indico, y lo guardo en una var. 
// Para ubicarlo, elijo quien es el padre y hago un append 

div1 = document.createElement("div");
document.onload();

var perfil = document.getElementById("perfil");
perfil.append(div1);


function validarEdad(x)//buscar ejemplo en lo que subieron ayer (no llegué a copiar)
