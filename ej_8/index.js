function eliminaVocales(frase){

    vocales = ["a","e","i","o","u"];
    valor="";

    for (let i = 0; i < frase.length; i++){

        for(let j = 0; j < vocales.length; j++){


             if(frase.charAt(i)==vocales[j]){
            valor = valor+frase[i];
            
        }
        }

       
    }
    return valor;

    
}

console.log(eliminaVocales("Hola mundo"));
