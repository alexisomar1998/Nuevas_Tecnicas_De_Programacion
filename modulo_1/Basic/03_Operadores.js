/*
Asignacion: =
Comparación : == , === 

*/
/*
console.log(2 == 2);
console.log(2 === '2');
console.log(2 == '2');
*/
/*
!=
console.log(2 !=3 );
*/

/*
----- >
----- >
----- <=
----- >=
*/

//Operadores de asignacion compuestos

/*
----- += / x = x + y
----- -= / x = x - y
----- *=
----- /=
----- %=
----- **= Potencia 

var numero = 3;
numero -= 2;
console.log(numero);
*/

//Operadores arismeticos 
/*
    + suma
    - resta
    * multiplicación
    / divición
    % Modulo
    ** Potencia 

*/

// Desestructurar objeto
var persona = { 
    nombre:"Alexis", 
    apellido:"Analuisa" ,
     edad: 22,
     viajes: { Destino1 : "Colombia",destino2:"Mexico"}
    };
 
var { nombre:nombre2,apellido,viajes:{Destino1}  } = persona;

console.log(persona);
console.log(nombre2);
console.log(apellido);
console.log(Destino1)


