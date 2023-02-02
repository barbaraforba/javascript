const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];
console.log(number);

let pares = [];
let impares = [];

for(let i = 0; i < number.length; i++){

    if (number[i]%2==0){
        pares.push(number[i]);
    }else{
        impares.push(number[i]);
    }

}

console.log(pares);
console.log(impares);