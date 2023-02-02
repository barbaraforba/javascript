const topics = ["JavaScript","Variables","funciones","condicionales","bucles"];

const inverso=topics.reverse();

const mayusculas = [];

for(let i =0; i<inverso.length; i++){
    inverso[i]=inverso[i].toUpperCase();

}

console.log(inverso);