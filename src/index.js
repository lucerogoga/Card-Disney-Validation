import validator from './validator.js';

console.log(validator);

const CardNumber = document.getElementById("NumCard");
const CardNombre = document.getElementById("NomCard");
const NumeroTarjeta = document.getElementById("NumTarjeta");
const NombreTarjeta = document.getElementById("Nombre");
const BotonValidar = document.getElementById("BtnValidarLunh");


NombreTarjeta.addEventListener("input", validarNombre);
NumeroTarjeta.addEventListener("input", validarCaracteres);
BotonValidar.addEventListener("click", function (e) {
    e.preventDefault()
    const NumeroValidado = validator.isValid(NumeroTarjeta.value);
    const Numeroenmascarado = validator.maskify(NumeroTarjeta.value)
    popUp(NumeroValidado, Numeroenmascarado);
});

/*funcion para validar el input solo Numero de Tarjeta,un 
espacio cada 4 digitos,max length 19 (16 numero 3 espacios)*/
function validarCaracteres(evt) {
    const caracter = evt.target.value;
    const array = caracter.split("");
    let contador = 0;
    let nuevoString = ''
    for (let i = 0; i < array.length; i++) {
        let nuevocaracter = parseInt(array[i]);
        //pregunta si no es un Numero
        if (Number.isNaN(nuevocaracter)) {
            //no hace nada
        } else {
            contador = contador + 1;
            if (contador == 5) {
                //agrega un espacio antes del 5 digitos
                nuevoString = nuevoString + " " + nuevocaracter;
                contador = 1;
            } else {
                //agrega el numero
                nuevoString = nuevoString + nuevocaracter;
            }
        }
    }
    NumeroTarjeta.value = nuevoString;
    CardNumber.textContent = nuevoString;
}
// funcion para validar el input del nombre
function validarNombre(evt) {
    const caracter = evt.target.value;
    const array = caracter.split("");
    let regexp = /^[A-Za-z]+$/;
    let nuevoString = '';
    for (let i = 0; i < array.length; i++) {
        let nuevocaracter = (array[i]);
        if (nuevocaracter.match(regexp)) {
            nuevoString = nuevoString + nuevocaracter;
        } else {
            //no agregar NUMEROS
        }
    }
    NombreTarjeta.value = nuevoString;
    CardNombre.textContent = nuevoString;
}

//Seleccion de Tarjetas y Pasar de la Pantalla 1 a Pantalla 2
const Tarjeta1 = document.getElementById("tarjeta1");
const Tarjeta2 = document.getElementById("tarjeta2");
const Tarjeta3 = document.getElementById("tarjeta3");

Tarjeta1.addEventListener("click", function () {
    seleccionTarjeta(1);
});
Tarjeta2.addEventListener("click", function () {
    seleccionTarjeta(2);
});
Tarjeta3.addEventListener("click", function () {
    seleccionTarjeta(3);
});
//Activa la siguiente pantalla
function MostrarValidator() {
    let Pantalla1 = document.getElementById("Pantalla1");
    Pantalla1.classList.replace("activo", "oculto");
    let Pantalla2 = document.getElementById("Pantalla2");
    Pantalla2.classList.replace("oculto", "activo");
}

//Muestra la Tarjeta escogida en la siguiente pantalla
function seleccionTarjeta(tarjeta) {
    let TarjetaEscogida = document.getElementById("TarjetaEscogida");
    if (tarjeta == 1) {
        MostrarValidator();
        TarjetaEscogida.classList.replace("TarjetaEscogida", "TarjetaEscogida");
    } else if (tarjeta == 2) {
        MostrarValidator();
        TarjetaEscogida.classList.replace("TarjetaEscogida", "TarjetaEscogida2");
    } else if (tarjeta == 3) {
        MostrarValidator();
        TarjetaEscogida.classList.replace("TarjetaEscogida", "TarjetaEscogida3");
    }
}

//Reiniciar Pagina
const BotonReiniciar = document.getElementById("BtnReiniciar");
BotonReiniciar.addEventListener("click", reiniciar);
function reiniciar() {
    location.reload();
}

//modal del validador
const cerrar = document.getElementById("modal-validacion-cerrar");
const modal = document.getElementById("modal-validacion");
const modalContenedor = document.getElementById("modal-validacion-contenedor");

function popUp(valido, mascara) {

    const modalTextos = document.getElementById("modal-validacion-textos");
    let imagenValidacion
//Consulta si existe la imagen de validadcion si no existe la crea con un prepend
    if (document.getElementById("imagenValidacion") != null) {
        imagenValidacion = document.getElementById("imagenValidacion")
    } else {
        imagenValidacion = document.createElement('img');
        imagenValidacion.id = "imagenValidacion";
        modalTextos.prepend(imagenValidacion);
    }

    modalContenedor.style.opacity = "1";
    modalContenedor.style.visibility = "visible";
    const Mensaje = document.getElementById("Mensaje");
    const TarjetaValida = document.getElementById("TarjetaValida");
    const TarjetaMascarada = document.getElementById("TarjetaMascarada");
    //toggle hace cada q seleccione quita o pone modal-cerrar
    modal.classList.toggle("modal-cerrar")

    if (valido) {
        Mensaje.innerText = "Felicidades Tu tarjeta sera personalizada";
        //4644 4534 3433 4345
        imagenValidacion.setAttribute('src', "img/correcto.png")
        TarjetaValida.innerText = "Tu tarjeta es valida";
        TarjetaMascarada.innerText = mascara;
    } else {
        Mensaje.innerText = "Lo sentimos ingrese otro numero de Tarjeta";
        imagenValidacion.setAttribute('src', "img/incorrecto.png")
        TarjetaValida.innerText = "Tu tarjeta no es valida";
        TarjetaMascarada.innerText = mascara;
    }

}

cerrar.addEventListener("click", function () {
    modal.classList.toggle("modal-cerrar");
    setTimeout(function () {
        modalContenedor.style.opacity = "0";
        modalContenedor.style.visibility = "hidden";
    }, 900)
});

