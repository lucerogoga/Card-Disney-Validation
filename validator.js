const validator = {

  isValid: function (Numero) {
    //NumCard es un string
    //le quitamos los espacios al valor del input text
    const Codigo = Numero.split(" ").join("");
    //lo convertimos en array 
    const array = Codigo.split("");
    let suma = 0;
    for (let i = array.length - 1; i >= 0; i--) {
      let caracter = parseInt(array[i]);
      //si la posicion es par (indice impar porque arrays empiezan en 0) se multiplicar por 2 el caracter
      if (i % 2 != 0) {
        caracter *= 2
        // si el caracter es mayor a 9 restarle 9;
        if (caracter > 9) {
          caracter -= 9;
          suma = suma + caracter;
        } else {
          suma = suma + caracter;
        }
      } else {
        suma = suma + caracter;
      }
    }

    if (suma % 10 == 0) {
      return true;
    } else {
      return false;
    }

  }
  ,
  maskify: function (Numero) {
    /*  const masked=Numero.replace(/.(?=.{4})/g, "#");
    return masked*/

    //convertir en array el numero de la tarjeta
    const infoArr = Numero.split(" ").join("");
    //poner un numero negativo hace que empiece desde atras. guarda los ultimos 4 digitos en una variable
    let cuatroUltimos = infoArr.slice(-4);
    //declaramos un string que guardara el nuevo valor de los 12 numeros 
    let arrStr = '';
    for (let i = 0; i < infoArr.length - 4; i++) {
      //en cada elemento del array igualamos al string en #
      arrStr = arrStr + '#'
    }
    //Combinando array enmascarado con los 4 ultimos digitos
    let masked = arrStr + cuatroUltimos;
    return masked
  }
};


export default validator;


