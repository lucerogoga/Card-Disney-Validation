import validator from './validator.js';

console.log(validator);

const CardNumber=document.getElementById("NumCard");
const NumeroTarjeta=document.getElementById("NumTarjeta");
const BotonValidar=document.getElementById("BtnValidarLunh");

NumeroTarjeta.addEventListener("input",validarCaracteres);
BotonValidar.addEventListener("click",validator);

//NumeroTarjeta.addEventListener('input', ReplicarTarjeta);

//funcion para validar el input solo Numero de Tarjeta,un espacio cada 4 digitos,max length 19 (16 numero 3 espacios)
function validarCaracteres(evt) {
    const caracter=evt.target.value;
    const array=caracter.split("");
    let contador=0;
    let nuevoString = ''
    for(let i=0;i<array.length;i++){    
        const nuevocaracter=parseInt(array[i]);
         if(Number.isNaN(nuevocaracter)){
        //  alert("no es un numero");
         }else{
             contador=contador+1;
            if(contador == 5) {
                //agrega un espacio antes del 5 digitos
                nuevoString = nuevoString + " " + nuevocaracter;
                contador=1;
             }else{
                 //agrega el numero
                nuevoString = nuevoString + nuevocaracter;
             }
         }
    }
    NumeroTarjeta.value = nuevoString;
    CardNumber.textContent=nuevoString;
}



