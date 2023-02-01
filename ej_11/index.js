var frase=prompt("Introduce una frase");


let mayuscula =0;
let minuscula = 0;
for (let i=0; i < frase.length; i++){


    if(frase.charAt(i)!=" "){
        if (frase.charAt(i)== frase.charAt(i).toUpperCase()){       
                mayuscula=mayuscula+1;        
        }

        if(frase.charAt(i)== frase.charAt(i).toLowerCase()){            
            minuscula = minuscula+1;
            
        }
    }

}


if(mayuscula>0 && minuscula>0){
    alert("mixto");
}else if(mayuscula>0 && minuscula==0){
    alert("mayusculas");
}else{
    alert("minusculas");
}




