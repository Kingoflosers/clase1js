/*console.log('hola mundo');

var int=10;
var str='abcd';
var bool=true;
var und;

console.log(typeof int);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof und)

var num1=10;
var num2=20;

console.log('sum',num1 + num2,'es');
console.log('sum',num1 - num2,'es');
console.log('sum',num1 * num2,'es');
console.log('sum',num1 / num2,'es');

var num=1
console.log(num);
var num2=++num;
console.log(num2);

var bool1=true
var bool2=false
console.log(bool1===bool2);
console.log(bool1!==bool2);
console.log(bool1!==bool1);
console.log(bool2===bool2);

//Operadores
var num1=10
var num2=20
console.log(num1<num2);
console.log(num1>num2);
console.log(num1>=num2);
console.log(num1<=num1);

//Operadores lógicos AND
var num1=10;
var num2=20;
console.log(num1<num2 && num2>num1);
console.log(num1<num2 && num2>=num1 );
console.log(num1>num2 && num2>num1);
console.log(num1>num1 && num2<num1);

//Operadores lógicos OR
var num1=10;
var num2=20;
console.log(num1<num2 || num2>num1);
console.log(num1<num2 || num2>=num1);
console.log(num1>num2 || num2>num1);
console.log(num1>num1 || num2<num1);

//Condicionales (condicional, if, switch)
var num1=10;
var num2=20;
console.log(num1<num2?"si es mayor":"no, es falso");
console.log(num1>num2?"si es mayor":"no, es falso");


//Condicional Sentencia if
var num1=10;
var num2=20;
if (num1<num2) {
  console.log("se ejecuta");
}

//Condicional Sentencia if-else
var num1=10;
var num2=20;
if (num1<num2 && num1>num2) {
  console.log("se ejecuta");
}else {
  console.log("no se ejecuta");
}

if (num1<num2 || num1>num2) {
  console.log("se ejecuta");
}else {
  console.log("no se ejecuta");
}*/

//if/else if
/*var num1=10;
var num2=20;
if (num1<num2 && num1>num2) {
  console.log("se ejecuta");
} else if (num1<num2 && num1>num2) {
  console.log('se ejecuta el if else');
} else {
  console.log('no se ejecuta');
}*/


//switch
/*var num1=10;
var num2=30;
switch (num1+num2) {
  case 10:
    console.log('Es igual a 10');
    break;
    case 20:
      console.log('Es igual a 20');
      break;
      case 30:
      console.log("Es igual a 30");
      break;
  default:
    console.log('Es otro valor');
}*/

//Funciones
function nombreCompleto(nombre,apellido){
  console.log(nombre+' '+ apellido);
}
nombreCompleto('Alexis','Gordillo');


var res;
function edad(anoNac){
  res=(2018-anoNac)
  return res
}
console.log(edad(1989));

if (res>=18) {
  console.log('Es mayor de edad');
} else {
  console.log('No es mayor de edad')
}
