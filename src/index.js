import validator from './validator.js';

console.log(validator);

const CardNumber=document.getElementById("NumCard");
const CardNombre=document.getElementById("NomCard");
const NumeroTarjeta=document.getElementById("NumTarjeta");
const NombreTarjeta=document.getElementById("Nombre");
const BotonValidar=document.getElementById("BtnValidarLunh");


NombreTarjeta.addEventListener("input",validarNombre);
NumeroTarjeta.addEventListener("input",validarCaracteres);
BotonValidar.addEventListener("click",function (e) {
     e.preventDefault()
    const NumeroValidado = validator.isValid(NumeroTarjeta.value);
    const Numeroenmascarado=validator.maskify(NumeroTarjeta.value)
    popup(NumeroValidado,Numeroenmascarado);
} );

/*funcion para validar el input solo Numero de Tarjeta,un 
espacio cada 4 digitos,max length 19 (16 numero 3 espacios)*/
function validarCaracteres(evt) {
    const caracter=evt.target.value;
    const array=caracter.split("");
    let contador=0;
    let nuevoString = ''
    for(let i=0;i<array.length;i++){    
        let nuevocaracter=parseInt(array[i]);
        //pregunta si no es un Numero
         if(Number.isNaN(nuevocaracter)){
       //no hace nada
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
// funcion para validar el input del nombre
function validarNombre(evt) {
    const caracter=evt.target.value;
    const array=caracter.split("");
    let regexp=/^[A-Za-z]+$/;
    let nuevoString = '';
    for(let i=0;i<array.length;i++){    
        let nuevocaracter=(array[i]);
         if(nuevocaracter.match(regexp)){
            nuevoString = nuevoString + nuevocaracter;
         }else{
               //no agregar NUMEROS
             }
         }
    NombreTarjeta.value = nuevoString;
    CardNombre.textContent=nuevoString;
}
//Seleccion de Tarjetas y Pasar de la Pantalla 1 a Pantalla 2
const Tarjeta1=document.getElementById("tarjeta1");
Tarjeta1.addEventListener("click",function() {
    seleccionTarjeta(1);
});
const Tarjeta2=document.getElementById("tarjeta2");
Tarjeta2.addEventListener("click",function() {
    seleccionTarjeta(2);
});
const Tarjeta3=document.getElementById("tarjeta3");
Tarjeta3.addEventListener("click",function() {
    seleccionTarjeta(3);
});
function MostrarValidator() {
    let Pantalla1 = document.getElementById("Pantalla1");
    Pantalla1.classList.replace("activo","oculto");
    let Pantalla2 = document.getElementById("Pantalla2");
    Pantalla2.classList.replace("oculto","activo");
}
function seleccionTarjeta(tarjeta){
    let TarjetaEscogida = document.getElementById("TarjetaEscogida");
if(tarjeta==1){
    MostrarValidator();
    TarjetaEscogida.classList.replace("TarjetaEscogida","TarjetaEscogida");
}else if(tarjeta==2){
    MostrarValidator();
    TarjetaEscogida.classList.replace("TarjetaEscogida","TarjetaEscogida2");  
}else if(tarjeta==3){
    MostrarValidator();
    TarjetaEscogida.classList.replace("TarjetaEscogida","TarjetaEscogida3");
}
}
//Reiniciar Pagina
const BotonReiniciar=document.getElementById("BtnReiniciar");
BotonReiniciar.addEventListener("click",reiniciar);
function reiniciar() {
    location.reload();
}
//modal del validador
let cerrar=document.querySelectorAll(".cerrar")[0];
let modal=document.querySelectorAll(".modal")[0];
let modalC=document.querySelectorAll(".modal-contenedor")[0];

function popup(valido,mascara) {
    modalC.style.opacity="1";
    modalC.style.visibility="visible";
    const Mensaje=document.getElementById("Mensaje");
    const imgValidacion=document.getElementById("modal-textos");
    const TarjetaValida=document.getElementById("TarjetaValida");
    const TarjetaMascarada=document.getElementById("TarjetaMascarada");
    //toggle hace cada q seleccione quita o pone modal-cerrar
    modal.classList.toggle("modal-cerrar")
  if(valido==true){
    Mensaje.innerHTML="Felicidades Tu tarjeta sera personalizada";
   imgValidacion.outerHTML('beforebegin', '<img src="img/correcto.png">');
   //4644 4534 3433 4345
    TarjetaValida.innerHTML="Tu tarjeta es valida";
    TarjetaMascarada.innerHTML=mascara;
    }else{
    Mensaje.innerHTML="Lo sentimos ingrese otro numero de Tarjeta";
    imgValidacion.outerHTML('beforebegin', '<img src="img/incorrecto.png">');
   //imgValidacion.classList.add('incorrecto');
    TarjetaValida.innerHTML="Tu tarjeta no es valida";
    TarjetaMascarada.innerHTML=mascara;
    }
  
}
cerrar.addEventListener("click",function() {
    modal.classList.toggle("modal-cerrar"); 

    setTimeout(function () {
        modalC.style.opacity="0";
        modalC.style.visibility="hidden";
    },900)
});

