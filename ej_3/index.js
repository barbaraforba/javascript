const data = ["hola", 2, 5, "adios"];
const numero1 = data[1];
const numero2 = data[2];

if (numero1>numero2){
    console.log("El numero mayor es el "+ numero1)
} else{
    console.log("El numero mayor es el "+ numero2)
}

const suma=numero1+numero2;
const resta=numero1-numero2;
const multiplicacion= numero1*numero2;
const division=numero1/numero2;
const sobrante=numero1%numero2;
console.log("La suma es "+ suma);
console.log("La resta es "+resta);
console.log("La multiplicación es "+ multiplicacion);
console.log("La division es "+division);
console.log("El sobrante es "+ sobrante);