const parrafo = document.createElement("p");
const texto = document.createTextNode ("Ultimo parrafo");
parrafo.appendChild(texto);


var numeroEnlace = document.getElementsByTagName('a');
parrafo.innerHTML = "Numero de enlaces = "+ numeroEnlace.length;

var penultimo = numeroEnlace[numeroEnlace.length-2];
parrafo.innerHTML = parrafo.innerHTML + "<br/>" + "El penultimo enlace es " +  penultimo.href;

var parrafos = document.getElementsByTagName('p');
numeroEnlace = parrafos[2].getElementsByTagName('a');
parrafo.innerHTML = parrafo.innerHTML + "<br/>" + "El tercer parrafo tiene " + numeroEnlace.length + " enlaces"; 


document.body.appendChild(parrafo);
