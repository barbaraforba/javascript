

document.getElementById("miBoton").addEventListener("click",alertaGuardado);
function alertaGuardado(){
    alert ("Se ha guardado");
}


document.getElementById("textoUno").addEventListener("focus",cambioColor);
function cambioColor(){

    document.getElementById("textoUno").style.backgroundColor="#FFFF00";
    
}

document.getElementById("textoUno").addEventListener("blur",pierdeColor);
function pierdeColor(){
    document.getElementById("textoUno").style.backgroundColor="#FFFFFF";
}



document.getElementById("textoDos").addEventListener("input",vocalConsonante);

function vocalConsonante(){

    vocales = ["a","e","i","o","u"];

    let tipoLetra = document.getElementById("textoDos").value;

   
    for(let i=0; i<vocales.length; i++){
        if (vocales[i]==tipoLetra){
            
            document.getElementById("textoDos").style.color="#0000FF";

            break;
            
        } else{
            
            document.getElementById("textoDos").style.color="#FF0000";
            
        }

    }

    console.log(tipoLetra);

 
}






