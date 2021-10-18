import validator from './validator.js';

console.log(validator);

const CardNumber=document.getElementById("NumCard");
const NumeroTarjeta=document.getElementById("NumTarjeta");
const BotonValidar=document.getElementById("BtnValidarLunh");

NumeroTarjeta.addEventListener("input",validarCaracteres);
BotonValidar.addEventListener("click",function (e) {
     e.preventDefault()
    const NumeroValidado = validator.isValid(NumeroTarjeta.value);
    alert(NumeroValidado);
    const Numeroenmascarado=validator.maskify(NumeroTarjeta.value)
    alert(Numeroenmascarado);
} );

//funcion para validar el input solo Numero de Tarjeta,un espacio cada 4 digitos,max length 19 (16 numero 3 espacios)
function validarCaracteres(evt) {
    const caracter=evt.target.value;
    const array=caracter.split("");
    let contador=0;
    let nuevoString = ''
    for(let i=0;i<array.length;i++){    
        let nuevocaracter=parseInt(array[i]);
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


const Tarjeta1=document.getElementById("tarjeta1");
Tarjeta1.addEventListener("click",MostrarValidator);
const Tarjeta2=document.getElementById("tarjeta2");
Tarjeta2.addEventListener("click",MostrarValidator);
const Tarjeta3=document.getElementById("tarjeta3");
Tarjeta3.addEventListener("click",MostrarValidator);

function MostrarValidator() {
    let Pantalla1 = document.getElementById("Pantalla1");
    Pantalla1.classList.replace("activo","oculto");
    let Pantalla2 = document.getElementById("Pantalla2");
    Pantalla2.classList.replace("oculto","activo");
}

//Seleccion de Tarjetas



//Reiniciar Pagina
const BotonReiniciar=document.getElementById("BtnReiniciar");
BotonReiniciar.addEventListener("click",reiniciar);
function reiniciar() {
    location.reload();
}


