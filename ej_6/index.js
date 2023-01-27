const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2]

var valor=0;
var valor1=0;


for (let i=0; i < notas.length; i++){

    valor=valor+notas[i];
    
}

console.log("La suma es: "+ valor);

for (let valorBucle of notas) {
    
    valor1 = valor1+valorBucle
    
}

console.log("La suma es: " +valor1)