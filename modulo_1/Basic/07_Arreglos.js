//concat

var numeros = [1,2,3,4,5]
var nuevoNumero = numeros.concat([6,7,8,9,0])
//console.log(numeros);
//console.log(nuevoNumero)

//join
var nombre =["a","l","e","x","i","s"]
//console.log (nombre.join(","));

// slice
//console.log(nombre.slice(2));
//---------------------------
// index of
//console.log(nombre.indexOf("a"));

//---------------
//last index of
 //console.log(nombre.lastIndexOf("x"));
 //---------------------------
 //reverse
 //console.log(nombre.reverse());
 //-------------------------------
 //Sort
 var numerosDesordenados =[3,4,6,9,8,5]
 //console.log(numerosDesordenados.sort());

 //---------------------
 //shift
 //console.log (numerosDesordenados.shift());
  //---------------------
 //pop
 //console.log (numerosDesordenados.pop());
 //---------------------
 //push
 numerosDesordenados.push(1012)
 //console.log (numerosDesordenados);
 


 var pares =[2,4,6,8,10]
 //console.log(pares.map((elemento) => elemento+1 ));



 //consultar funciones de modificaciones de arreglos 

  //1.-unshift ->Método para agregar al inicio del Array uno o más elementos. Devuelve la longitud actualizada.
  var arr = [3, 4, 5];
arr.unshift(1, 2);
//console.log(arr); 

/*
2.-copyWithin -> para copiar y pegar un rango de elementos.
Se trata de copiar segmentos dentro del Array. 
Copiamos un segmento como los elementos en un rango de índices 
*/
var arr = ["a", "b", "c", "d", "e"]
arr.copyWithin(1, 2, 4);
//console.log(arr); // ["a", "c", "d", "d", "e"]

/*
3.-fill ->  para rellenar elementos con el mismo valor
Rellena los elementos de un rango [start, end) (sin incluir el superior) en un Array con un valor. 
Si no se especifica start se tomará desde cero y si no se especifica end se tomará la longitud del array
*/
var arr = [1, 2, 3];
arr.fill("a");
//console.log(arr); // ["a", "a", "a"]
arr.fill("b", 1);
//console.log(arr); // ["a", "b", "b"]
arr.fill("c", 2, 3);
//console.log(arr); // ["a", "b", "c"]

/*
4.-splice-> para eliminar elementos
elimina el número de elementos indicado en num empezando en la posición start. Opcionalmente pueden insertarse en esa posición los elementos elem0, elem1,
 .... El método modifica el propio Array, devolviendo un Array con los elementos eliminados.
*/
var arr = ["a", "b", "c", "d"];
var eliminados  = arr.splice(1, 2);
//console.log(eliminados); // ["b", "c"]
//console.log(arr); // ["a", "d"]
 /*
 5.-every --> comprueba que todos los elementos de un Array cumplen un callback.
 método every() comprueba si todos los elementos de un Array cumplen un criterio que se implementa en la función callback.
 En este ejemplo devuelve falso, pues tiene un elemento que es un String.
 */
 function esNumero(v){
    return !isNaN(v);
}
var arr = [51, -12, 0, 3];
console.log(arr.every(esNumero)); // true
console.log(arr.every(v => v.constructor.name === "Number")); // true
var arr2 = [51, -12, 0, 3, "abc"];
console.log(arr2.every(v => v.constructor.name === "Number")); // false