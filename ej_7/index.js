function sumaPares(array) {

    var valor = 0;
    

    for (let i=0; i<array.length; i++){
        if(array[i] % 2 == 0){
            valor = valor + array[i];
            
        }
    }

    return valor;

}


ejemplo = [1,2,3,4,5];
console.log(sumaPares(ejemplo));

