var letras=['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z','S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numero=prompt("Introduce tu numero de DNI");

var resta= numero % 23;
var letra= letras[resta];

if (numero < 0 || numero > 99999999){

    alert("El numero proporcionado no es valido")

}else{
    alert("Tu letra es "+letra)
}