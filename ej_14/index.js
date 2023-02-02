const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
let filtroMeses = [];

for(let i = 0; i < meses.length; i++){

    if (meses[i].length > 7){

        
        filtroMeses.push(meses[i].toUpperCase());
    }
}
numeroMeses=filtroMeses.length;

console.log(filtroMeses);
console.log(numeroMeses);

