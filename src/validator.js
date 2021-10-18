const validator = {

isValid:function(Numero){
//NumCard es un string
//le quitamos los espacios al valor del input text
const Codigo=Numero.split(" ").join("");
//console.log(typeof Codigo);
//lo convertimos en array 
const array=Codigo.split("");
//console.log(typeof array);
let suma=0;
for(let i=array.length-1;i>=0;i--){
  let caracter=parseInt(array[i]);
 //si la posicion es par (indice impar porque arrays empiezan en 0) se multiplicar por 2 el caracter
  if(i%2>0){
    caracter*=2
     // si el caracter es mayor a 9 restarle 9;
    if(caracter>9){
      caracter-=9;
      suma=suma+caracter;
    }else{
      suma=suma+caracter;
    }
  }else{
    suma=suma+caracter;
  }
}
console.log({Codigo, suma})
if(suma%10==0){
  return true;
}else{
  return false;
}

//VISA = /^4[0-9]{3}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/;
//MASTERCARD = /^5[1-5][0-9]{2}-?[0-9]{4}-?[0-9]{4}-?[0-9]   {4}$/;
//4137 8947 1175 5904

}
,
maskify:function(Numero){
  const masked=Numero.replace(/.(?=.{4})/g, "#");
// console.log(masked);
  return masked

/* const NumCard=params.value;
//convertir en array el input
const infoArr = NumCard.split(" ").join("");
//poner un numero negativo hace que empiece desde atras. guarda los ultimos 4 digitos en una variable
let fourSaved = infoArr.slice(-4) ;
console.log(fourSaved);
for(let i = 0; i < infoArr.length; i++){
  //so each and every element in the array is changed into a #
    //infoArr[i] =infoArr[i]replace(/.(?=.{4})/g, "#");
    console.log(infoArr[i]);
}
let arrStr = infoArr.join(''); //Changing array back to string
let masked = arrStr.slice(0, -4) + fourSaved;
console.log(masked)
//window.open(URL, 'Nombre de la ventana', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=300,height=200,left = 390,top = 50');
   
return masked   */
}

};


export default validator;


